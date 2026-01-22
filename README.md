# supreme-dollop

SDP (Sustainable Development Program) Error Reporting System

## Overview

A web-based error reporting form with **cascading hierarchical data** that maps to organizational structure:
- **Component** → **Project** → **Zonal Area** → **DM Area** → **Branch** → **District**

Features include Google Sheets integration, form validation, file uploads, and comprehensive location hierarchy filtering.

---

## 🎯 Quick Start

### 1. Prerequisites
- Node.js 16+
- Google Cloud Service Account (with Sheets API enabled)

### 2. Setup Backend

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Configure:
# - GOOGLE_SHEET_ID: Your target Google Sheet ID
# - GOOGLE_SERVICE_ACCOUNT_KEY_PATH: Path to service account JSON key
#   OR GOOGLE_SERVICE_ACCOUNT_JSON: JSON string of credentials
```

Then start the backend:
```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`  
Backend proxies `/api/*` requests to `http://localhost:3000`

---

## 📊 Cascading Data Hierarchy

The form includes a **6-level organizational hierarchy**:

```
Component (7)
  └─ Project (6)
      └─ Zonal Area (30+)
          └─ DM Area (100+)
              └─ Branch (250+)
                  └─ District (64)
```

### Example Paths
- **STAR**: Component → STAR Project → Barisal Zonal Area → Patuakhali DM Area → STAR Patuakhali Sadar Branch
- **IDP STAR**: Component → IDP STAR Project → Dinajpur → Dinajpur North → B2B Godagari → Dinajpur District
- **SILATECH**: Component → SILATECH → Sylhet → Sylhet Sadar → ED/Sylhet Sadar → Sylhet District

### Smart Features
✅ Each dropdown filters based on previous selection  
✅ Changing a parent level resets all child levels  
✅ Form cannot submit with invalid hierarchy combinations  
✅ Branch and District are optional; all others required  

---

## 📁 Project Structure

```
supreme-dollop/
├── backend/
│   ├── mock-data.js          # Organizational hierarchy data
│   ├── server.js             # Express API server
│   ├── service-account-key.json
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LocationHierarchy.jsx    # 6-level cascading hierarchy
│   │   │   ├── ErrorReportForm.jsx      # Main form component
│   │   │   ├── ReporterInfo.jsx         # Reporter details section
│   │   │   ├── IssueInformation.jsx     # Issue details section
│   │   │   ├── SuccessMessage.jsx       # Success notification
│   │   │   └── FormHeader.jsx           # Header component
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── public/
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   └── package.json
│
├── Documentation/
│   ├── CASCADE_STRUCTURE.md          # Detailed hierarchy docs
│   ├── TEST_SCENARIOS.md             # 6 test paths with examples
│   ├── INTEGRATION_SUMMARY.md        # Implementation overview
│   ├── VISUAL_HIERARCHY.md           # Flowcharts and diagrams
│   ├── IMPLEMENTATION_CHECKLIST.md   # Dev checklist
│   ├── QUICK_REFERENCE.md            # Quick lookup guide
│   └── DELIVERY_SUMMARY.md           # Complete delivery summary
│
└── README.md (this file)
```

---

## 📋 Form Sections

### 1. Reporter Information
- Email (required, validated)
- Name (required)
- PIN (required)
- Phone (required)
- Supervisor 1 & 2 (required)

### 2. Location & Project Hierarchy ⭐ NEW
- Component (required) - Top-level organizational unit
- Project (required) - Project under component
- Zonal Area (required) - Geographic region
- DM Area (required) - District management area
- Branch Name (optional) - Specific branch
- District Name (optional) - District information

### 3. Issue Information
- Phase (required)
- Error Type (required, dropdown with 11 options)
- Issue Description (required)
- File Attachment (optional)

---

## 🔧 Form Submission

When submitted, form data includes:
```json
{
  "reporterEmail": "user@example.com",
  "reporterName": "John Doe",
  "reporterPin": "PIN123",
  "reporterPhone": "+8801234567890",
  "supervisor1NamePin": "Supervisor 1",
  "supervisor2NamePin": "Supervisor 2",
  "component": "STAR",
  "project": "STAR",
  "zonalArea": "Barisal",
  "dmArea": "Patuakhali",
  "branchName": "STAR Patuakhali Sadar",
  "districtName": "",
  "phase": "Phase 1",
  "errorType": "Date of Birth/ Age",
  "issueDescription": "Issue description here",
  "timestamp": "2026-01-18T10:30:00Z"
}
```

Data is appended to Google Sheet with automatic timestamp.

---

## 📚 Documentation Guide

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **DELIVERY_SUMMARY.md** | Complete overview of all changes | 10 min |
| **QUICK_REFERENCE.md** | Quick lookup guide for common tasks | 5 min |
| **CASCADE_STRUCTURE.md** | Detailed hierarchy documentation | 15 min |
| **TEST_SCENARIOS.md** | 6 complete test paths | 20 min |
| **VISUAL_HIERARCHY.md** | Flowcharts and diagrams | 15 min |
| **IMPLEMENTATION_CHECKLIST.md** | Development & QA checklist | 20 min |
| **INTEGRATION_SUMMARY.md** | Technical implementation details | 10 min |

**Recommended reading order for new developers:**
1. Start with QUICK_REFERENCE.md (overview)
2. Read CASCADE_STRUCTURE.md (understanding)
3. Review TEST_SCENARIOS.md (examples)
4. Check VISUAL_HIERARCHY.md (architecture)

---

## ✅ Testing

### Test Cascading Paths
```bash
# Start both backend and frontend
# Then test these selections:

1. STAR → STAR → Barisal → Patuakhali → STAR Patuakhali Sadar
2. ISD → IDP STAR → Dinajpur → Dinajpur North → B2B Godagari → Dinajpur
3. ED → SILATECH → Sylhet → Sylhet Sadar → ED/Sylhet Sadar → Sylhet
4. PROSPER → PROSPER → Cumilla → Cumilla → PROSPER Comilla Sadar
```

See `TEST_SCENARIOS.md` for complete test documentation.

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "GOOGLE_SHEET_ID not configured" | Set GOOGLE_SHEET_ID in backend .env |
| Dropdowns not showing options | Verify mock-data.js is imported correctly |
| Form won't submit | Check all required fields are filled |
| Data not appearing in Sheet | Verify service account has edit access |
| CORS errors | Check CORS_ORIGIN in .env matches frontend URL |

---

## 🚀 Deployment

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
# Output in frontend/dist/
```

**Backend:**
```bash
cd backend
npm install --production
NODE_ENV=production npm start
```

### Environment Variables

**Backend (.env)**:
```
PORT=3000
NODE_ENV=production
GOOGLE_SHEET_ID=your-sheet-id-here
GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account",...}'
CORS_ORIGIN=https://yourdomain.com
```

---

## 📈 Data Coverage

- **Components**: 7 (ED, ISD, PROMISE, PROSPER, STAR, PRISE, RETAIL SALES)
- **Projects**: 6 (SILATECH, IDP STAR, PROSPER, STAR, STAR PNGO, STAR UPG)
- **Zonal Areas**: 30+ geographic regions
- **DM Areas**: 100+ district management areas
- **Branches**: 250+ individual branches
- **Districts**: 64 primary districts

---

## 🛠️ Development Notes

### Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Google Sheets API
- **Data**: Hierarchical JSON structure in mock-data.js

### Adding New Locations
1. Update mock-data.js with new hierarchy entries
2. Ensure all mappings are properly connected
3. Test cascade path works end-to-end
4. Verify data appears in Google Sheet

### Modifying Required Fields
Edit validation logic in `ErrorReportForm.jsx`:
```javascript
if (!formData.component) newErrors.component = 'Component is required';
// Modify as needed
```

---

## 📞 Support

For issues or questions:
1. See `QUICK_REFERENCE.md` for quick answers
2. Check `VISUAL_HIERARCHY.md` for flow diagrams
3. Review `TEST_SCENARIOS.md` for working examples
4. Consult `IMPLEMENTATION_CHECKLIST.md` for debugging

---

## 📄 License

[Add your license here]

---

**Last Updated**: January 18, 2026  
**Status**: ✅ Production Ready  
**Version**: 1.0
