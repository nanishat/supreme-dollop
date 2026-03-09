# TaroWorks Troubleshooting Platform

A full-stack web application for submitting and tracking error reports and troubleshooting issues. Built with React and Express, with integration to Google Sheets for data persistence.

## 📋 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Comprehensive Error Reporting Form**
  - Reporter information collection (name, email, phone, PIN)
  - Supervisor tracking (dual supervisor system)
  - Hierarchical location selection (component → project → zonal area → DM area → branch)
  - Issue categorization with phase and error type selection
  - Detailed issue description with markdown support
  - File attachment support (PNG, JPG, PDF)

- **Cascading Form Fields**
  - Intelligent field dependencies that reset dependent selections
  - Real-time validation and error messaging
  - Responsive design for mobile and desktop

- **Backend Integration**
  - Express.js REST API
  - Google Sheets integration for data persistence
  - CORS support for secure cross-origin requests
  - Structured data export

- **User Experience**
  - Clean, intuitive UI with Tailwind CSS
  - Real-time form validation with error highlighting
  - Success confirmation with automatic reset
  - Accessibility-focused design

## 🏗️ Architecture

The application follows a client-server architecture:

```
┌─────────────────────────────────┐
│   Frontend (React + Vite)       │
│  - ErrorReportForm (Container)  │
│  - Sub-components               │
│  - Utility functions            │
└──────────────┬──────────────────┘
               │ (HTTP POST)
               ▼
┌─────────────────────────────────┐
│   Backend (Express.js)          │
│  - API endpoints                │
│  - Google Sheets integration    │
│  - Data validation              │
└──────────────┬──────────────────┘
               │ (Google API)
               ▼
         Google Sheets
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code quality

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google APIs** - Integration with Google Sheets
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Google Cloud Project with service account credentials
- Git (optional, for cloning the repository)

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/nanishat/supreme-dollop.git
cd supreme-dollop
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `/backend` directory:

```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development

# Google Service Account - Choose one method:
# Method 1: Direct JSON string (recommended for CI/CD)
GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account","project_id":"...","...":"..."}'

# Method 2: Path to service account key file
GOOGLE_SERVICE_ACCOUNT_KEY_PATH=/path/to/service-account-key.json

# Method 3: Place service-account-key.json in backend/ directory (not recommended for production)
```

**Note:** The backend will look for Google credentials in this order:
1. `GOOGLE_SERVICE_ACCOUNT_JSON` environment variable
2. `GOOGLE_SERVICE_ACCOUNT_KEY_PATH` environment variable
3. `service-account-key.json` in the backend directory

### Getting Google Service Account Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Create a Service Account:
   - Navigate to "Service Accounts"
   - Click "Create Service Account"
   - Generate a new JSON key
   - Download and securely store the key
5. Share your Google Sheet with the service account email

### Frontend Configuration

The frontend configuration is automatically set up in `vite.config.js`. During development, the frontend proxies API requests to `http://localhost:3000`.

## 🏃 Development

### Start Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on http://localhost:3000

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start on http://localhost:5173

### Code Structure

#### Frontend Organization

```
src/
├── components/          # React components
│   ├── ErrorReportForm.jsx      # Main form container
│   ├── FormHeader.jsx           # Page header
│   ├── LocationHierarchy.jsx    # Location/project selection
│   ├── ReporterInfo.jsx         # Reporter details section
│   ├── IssueInformation.jsx     # Issue details and attachment
│   ├── SuccessMessage.jsx       # Success confirmation
│   └── Footer.jsx               # Page footer
├── utils/               # Utility functions
│   ├── formDefaults.js          # Initial form state
│   ├── validation.js            # Form validation logic
│   ├── formHandlers.js          # Event handlers
│   ├── api.js                   # API calls
│   └── hierarchyHelpers.js      # Cascading data helpers
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

#### Backend Organization

```
backend/
├── server.js            # Express server setup
├── data/                # Static data files
│   ├── components.js
│   ├── projects.js
│   ├── zonalAreas.js
│   ├── dmAreas.js
│   ├── branches.js
│   ├── zonalAreaDmAreas.js
│   ├── formConfig.js
│   └── index.js
├── .env                 # Environment configuration
├── package.json
└── service-account-key.json (git ignored)
```

## 🔨 Build & Deployment

### Build Frontend

```bash
cd frontend
npm run build
```

This creates an optimized production build in `frontend/dist`.

### Start Backend in Production

```bash
cd backend
NODE_ENV=production npm start
```

### Lint Code

Check code quality in frontend:

```bash
cd frontend
npm run lint
```

### Preview Production Build

```bash
cd frontend
npm run preview
```

## 📡 API Endpoints

### POST /api/submit

Submit an error report.

**Request Body:**
```json
{
  "reporterEmail": "user@example.com",
  "reporterName": "John Doe",
  "reporterPin": "12345",
  "reporterPhone": "555-1234",
  "supervisor1Name": "Jane Smith",
  "supervisor2Name": "Bob Johnson",
  "component": "Component Name",
  "project": "Project Name",
  "zonalArea": "Zonal Area",
  "dmArea": "DM Area",
  "branchName": "Branch Name",
  "phase": "Phase",
  "errorType": "Error Type",
  "issueDescription": "Detailed description",
  "attachment": null
}
```

**Response:**
```json
{
  "success": true,
  "message": "Report submitted successfully"
}
```

## 📁 Project Structure

```
supreme-dollop/
├── backend/
│   ├── data/                    # Static data configuration
│   ├── server.js                # Express server
│   ├── package.json
│   ├── .env                     # Environment variables (git ignored)
│   └── service-account-key.json # Google credentials (git ignored)
│
├── frontend/
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── utils/               # Utility functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/                  # Static assets
│   ├── dist/                    # Production build
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
│
└── README.md                    # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules configured in the project
- Use meaningful variable names
- Add comments for complex logic
- Keep components focused and reusable

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Google Service Account Issues
- Verify the service account has access to the target Google Sheet
- Check that the service account email is added as an editor to the sheet
- Ensure credentials are properly formatted and not expired

### CORS Errors
- Update `CORS_ORIGIN` in backend `.env` to match your frontend URL
- For development, ensure frontend is running on the configured origin

### Port Already in Use
- Change the `PORT` in `.env` (default: 3000)
- Or kill the process using the port: `lsof -i :3000` then `kill -9 <PID>`

### Module Not Found
- Run `npm install` in both backend and frontend directories
- Clear Node modules and reinstall: `rm -rf node_modules && npm install`

## 📞 Support

For issues and questions, please create an issue in the repository.

---

**Made with ❤️ by the Repo Owner(nanishat)**
