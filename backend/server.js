const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ============================================================================
// GOOGLE SHEETS: SERVICE ACCOUNT AUTHENTICATION
// ============================================================================

function loadServiceAccount() {
  // Priority: GOOGLE_SERVICE_ACCOUNT_JSON -> GOOGLE_SERVICE_ACCOUNT_KEY_PATH -> backend/service-account-key.json (if present)
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    try {
      const parsed = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
      if (parsed.private_key)
        parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
      return parsed;
    } catch (err) {
      throw new Error("Invalid JSON in GOOGLE_SERVICE_ACCOUNT_JSON");
    }
  }

  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH) {
    const p = path.resolve(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH);
    if (!fs.existsSync(p)) throw new Error(`Key path not found: ${p}`);
    const parsed = require(p);
    if (parsed.private_key)
      parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
    return parsed;
  }

  const defaultPath = path.join(__dirname, "service-account-key.json");
  if (fs.existsSync(defaultPath)) {
    const parsed = require(defaultPath);
    if (parsed.private_key)
      parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
    return parsed;
  }

  throw new Error(
    "Service account key not found. Set GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_KEY_PATH or place service-account-key.json in backend/"
  );
}

async function getAuthClientSheets() {
  const creds = loadServiceAccount();
  const client = new google.auth.JWT(
    creds.client_email,
    null,
    creds.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  await client.authorize();
  return client;
}

// ============================================================================
// GOOGLE DRIVE: OAUTH 2.0 WITH REFRESH TOKEN
// ============================================================================

function getOAuth2Client() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URI || "http://localhost:3000/oauth/callback"
  );

  // Set the refresh token
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
  });

  return oauth2Client;
}

async function getAuthClientDrive() {
  const oauth2Client = getOAuth2Client();

  // Validate that refresh token is set
  if (!process.env.GOOGLE_OAUTH_REFRESH_TOKEN) {
    throw new Error("GOOGLE_OAUTH_REFRESH_TOKEN is not set. Run the token generation script first.");
  }

  return oauth2Client;
}


// ============================================================================
// FILE UPLOAD ENDPOINT
// ============================================================================
 
app.post("/api/upload", async (req, res) => {
  try {
    const { fileName, fileBase64 } = req.body;
 
    if (!fileName || !fileBase64) {
      return res
        .status(400)
        .json({ message: "fileName and fileBase64 are required" });
    }
 
    const folderId = process.env.DRIVE_UPLOAD_FOLDER_ID;
    if (!folderId) {
      return res
        .status(400)
        .json({
          message:
            "DRIVE_UPLOAD_FOLDER_ID not configured. Ensure the folder is accessible to your OAuth account.",
        });
    }
 
    // Get OAuth2 authenticated Drive client
    const authClient = await getAuthClientDrive();
    const drive = google.drive({ version: "v3", auth: authClient });
 
    // Convert base64 to buffer
    const buffer = Buffer.from(fileBase64, "base64");
    const ext = path.extname(fileName).toLowerCase();
    const mimeType = getMimeType(ext) || "application/octet-stream";
 
    // Add timestamp to filename to ensure uniqueness
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, -5);
    const fileNameWithTimestamp = `${timestamp}_${fileName}`;
 
    console.log(
      `[Drive Upload] Uploading file: ${fileNameWithTimestamp} (MIME: ${mimeType}, Size: ${buffer.length} bytes)`
    );
 
    // Upload file to Google Drive
    const response = await drive.files.create({
      requestBody: {
        name: fileNameWithTimestamp,
        parents: [folderId],
      },
      media: {
        mimeType: mimeType,
        body: require("stream").Readable.from(buffer),
      },
      fields: "id, webViewLink, name",
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    });
 
    const { id, name, webViewLink } = response.data;
 
    console.log(
      `[Drive Upload] ✓ File uploaded successfully. ID: ${id}, Link: ${webViewLink}`
    );
 
    return res.json({
      success: true,
      fileId: id,
      fileName: name,
      webViewLink,
      message: "File uploaded successfully",
    });
  } catch (err) {
    console.error("[Drive Upload] Error:", err.message);
    return res.status(500).json({
      message: err.message || "Failed to upload file",
    });
  }
});


// ============================================================================
// FORM SUBMISSION ENDPOINT
// ============================================================================
 
app.post("/api/submit", async (req, res) => {
  try {
    const formData = req.body || {};
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
 
    if (!spreadsheetId) {
      return res.status(400).json({
        message: "GOOGLE_SHEET_ID not configured on the server.",
      });
    }
 
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";
 
    const columns = (
      process.env.GOOGLE_SHEET_COLUMNS ||
      "timestamp,reporterEmail,reporterName,reporterPin,reporterPhone,supervisor1Name,supervisor2Name,component,project,zonalArea,dmArea,branchName,phase,errorCategory,errorType,issueDescription,attachment"
    )
      .split(",")
      .map((c) => c.trim());
 
    const row = columns.map((c) => {
      // Handle timestamp in Bangladesh timezone
      if (c === "timestamp") {
        const now = new Date();
        const bangladeshTime = new Date(
          now.getTime() + 6 * 60 * 60 * 1000
        );
        const month = bangladeshTime.getUTCMonth() + 1;
        const day = bangladeshTime.getUTCDate();
        const year = bangladeshTime.getUTCFullYear();
        const hours = String(bangladeshTime.getUTCHours()).padStart(2, "0");
        const minutes = String(bangladeshTime.getUTCMinutes()).padStart(2, "0");
        const seconds = String(bangladeshTime.getUTCSeconds()).padStart(2, "0");
        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
      }
 
      // Handle attachment link from Google Drive
      if (c === "attachment") {
        const attachment = formData[c];
        if (attachment && typeof attachment === "string") {
          return attachment;
        }
        return "";
      }
 
      return (formData[c] ?? "").toString();
    });
 
    // Get authenticated Sheets client (Service Account)
    const authClient = await getAuthClientSheets();
    const sheets = google.sheets({ version: "v4", auth: authClient });
 
    // Append row to spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });
 
    console.log(`[Sheets Submit] ✓ Form data appended to sheet: ${sheetName}`);
 
    return res.json({ success: true });
  } catch (err) {
    console.error("[Sheets Submit] Error:", err.message);
    return res.status(500).json({
      message: err.message || "Server error",
    });
  }
});

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
 
/**
 * Get MIME type from file extension
 */
function getMimeType(ext) {
  const mimeTypes = {
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".xls": "application/vnd.ms-excel",
    ".xlsx":
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptx":
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".txt": "text/plain",
    ".csv": "text/csv",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".zip": "application/zip",
  };
  return mimeTypes[ext];
}
 
// ============================================================================
// HEALTH CHECK
// ============================================================================

app.get("/api/health", (req, res) => res.json({ ok: true }));
 
// ============================================================================
// START SERVER
// ============================================================================
 
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});