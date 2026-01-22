# Backend - Google Sheets appender

This simple Express backend exposes `/api/submit` which accepts the form JSON and appends a row to a configured Google Sheet using a service account.

Setup
1. Copy `.env.example` to `.env` and fill in `GOOGLE_SHEET_ID` and either `GOOGLE_SERVICE_ACCOUNT_KEY_PATH` (recommended) or `GOOGLE_SERVICE_ACCOUNT_JSON`.
2. Ensure the service account email is added as an Editor to the target Google Sheet (Share -> add service-account-email).
3. Install deps and run:

   cd backend && npm install
   npm run dev   # uses nodemon (optional)

Usage
- POST /api/submit with JSON body containing your form fields. The backend maps columns according to `GOOGLE_SHEET_COLUMNS` env var.

Security notes
- Do NOT commit your service account key to git. Keep it local and update `.gitignore` if needed.
- For production, deploy the backend on a secure server and keep env vars secret.
