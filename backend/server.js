const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: "1mb" }));

// Serve static files from the frontend build directory (production)
const frontendDistPath = path.join(__dirname, "../frontend/dist");
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
}

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

async function getAuthClient() {
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

app.post("/api/submit", async (req, res) => {
  try {
    const formData = req.body || {};
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId)
      return res
        .status(400)
        .json({ message: "GOOGLE_SHEET_ID not configured on the server." });

    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

    const columns = (
      process.env.GOOGLE_SHEET_COLUMNS ||
      "timestamp,reporterEmail,reporterName,reporterPin,reporterPhone,supervisor1Name,supervisor2Name,component,project,zonalArea,dmArea,branchName,phase,errorCategory,errorType,issueDescription,attachment"
    ).split(",").map(c => c.trim());

    const row = columns.map((c) => {
      if (c === "timestamp") {
        // Convert UTC to Bangladesh timezone (UTC+6) and format as M/D/YYYY HH:mm:ss
        const now = new Date();
        const bangladeshTime = new Date(now.getTime() + (6 * 60 * 60 * 1000));
        const month = bangladeshTime.getUTCMonth() + 1;
        const day = bangladeshTime.getUTCDate();
        const year = bangladeshTime.getUTCFullYear();
        const hours = String(bangladeshTime.getUTCHours()).padStart(2, '0');
        const minutes = String(bangladeshTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(bangladeshTime.getUTCSeconds()).padStart(2, '0');
        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
      }
      if (c === "attachment") {
        // Extract filename from attachment (File object comes with 'name' property)
        const attachment = formData[c];
        if (attachment && typeof attachment === 'object' && attachment.name) {
          return attachment.name;
        }
        return "";
      }
      return (formData[c] ?? "").toString();
    });

    const authClient = await getAuthClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Error in /api/submit", err);
    return res.status(500).json({ message: err.message || "Server error" });
  }
});

app.get("/api/health", (req, res) => res.json({ ok: true }));

// Serve index.html for all non-API routes (React Router support)
app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "../frontend/dist/index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ message: "Frontend not built. Run 'npm run build'" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
