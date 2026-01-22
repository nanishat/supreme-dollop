# Cascading Data Hierarchy - Visual Guide

## Complete Hierarchy Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                         COMPONENTS (Level 1)                        │
│  ED | ISD | PROMISE | PROSPER | STAR | PRISE | RETAIL SALES        │
└───────────────┬──────────────────────────────────────────────────────┘
                │
        ┌───────┴──────────┬─────────────┬──────────────┐
        │                  │             │              │
        v                  v             v              v
    ┌────────┐         ┌──────────┐   ┌─────────┐  ┌────────────┐
    │SILATECH│         │IDP STAR  │   │PROSPER  │  │STAR/PNGO/UPG
    └────────┘         └──────────┘   └─────────┘  └────────────┘
        │
        │
        v
    PROJECTS (Level 2)
    [Project determined by Component]
        │
        │
        v
    ZONAL AREAS (Level 3)
    [Zonal Areas determined by Project]
    Example: Project STAR → [Noakhali, Barisal, Rangpur]
        │
        │
        v
    DM AREAS (Level 4)
    [DM Areas determined by Zonal Area]
    Example: Zonal Area Barisal → [Patuakhali, Barisal sadar, Bagerhat, Jessore]
        │
        │
        v
    BRANCHES (Level 5)
    [Branches determined by DM Area]
    Example: DM Area Patuakhali → [STAR Patuakhali Sadar, STAR Bauphal, ...]
        │
        │
        v
    DISTRICTS (Level 6)
    [Districts determined by Branch]
    Example: Branch STAR Patuakhali Sadar → []
```

---

## Detailed Flow Examples

### Example 1: STAR Project → Barisal Region
```
COMPONENT: STAR
    ↓ (Component → Project)
PROJECT: STAR
    ↓ (Project → Zonal Area)
ZONAL AREA: Barisal
    ├─ Patuakhali
    ├─ Barisal sadar
    ├─ Bagerhat
    └─ Jessore
    ↓ (Select DM Area: Patuakhali)
DM AREA: Patuakhali
    ├─ STAR Patuakhali Sadar
    ├─ STAR Bauphal
    ├─ STAR Dumki
    ├─ STAR Bakerganj
    └─ STAR Mehendiganj
    ↓ (Select Branch: STAR Patuakhali Sadar)
BRANCH: STAR Patuakhali Sadar
    └─ [No districts mapped in current data]
DISTRICT: (empty)
```

### Example 2: IDP STAR → Dinajpur
```
COMPONENT: ISD
    ↓ (Component → Project)
PROJECT: IDP STAR
    ↓ (Project → Zonal Area)
ZONAL AREA: Dinajpur
    ├─ Dinajpur North
    └─ Dinajpur south
    ↓ (Select DM Area: Dinajpur North)
DM AREA: Dinajpur North
    ├─ B2B Godagari
    ├─ B2B Komolpur
    ├─ B2B Birol 1
    ├─ B2B Birol 2
    ├─ B2B Bochaganj
    ├─ B2B Bokultola
    ├─ B2B Kaharol
    ├─ B2B Kantanagar
    ├─ B2B Birganj 1
    ├─ B2B Birganj 2
    ├─ B2B Jharbari
    ├─ B2B Pakerhat
    └─ B2B Khansama
    ↓ (Select Branch: B2B Godagari)
BRANCH: B2B Godagari
    └─ Dinajpur
    ↓ (Auto-fill or Select District)
DISTRICT: Dinajpur
```

### Example 3: SILATECH → Sylhet
```
COMPONENT: ED
    ↓ (Component → Project)
PROJECT: SILATECH
    ↓ (Project → Zonal Area)
ZONAL AREA: Sylhet
    ├─ Sylhet Sadar
    ├─ Golapgonj
    ├─ Sunamgonj Sadar
    └─ Hobigonj Sadar
    ↓ (Select DM Area: Sylhet Sadar)
DM AREA: Sylhet Sadar
    ├─ ED/Sylhet Sadar
    └─ ED/Golapgonj
    ↓ (Select Branch: ED/Sylhet Sadar)
BRANCH: ED/Sylhet Sadar
    └─ Sylhet
    ↓ (Auto-fill or Select District)
DISTRICT: Sylhet
```

---

## Data Structure in Mock-Data

```javascript
mockData = {
  // Level 1: Top-level components
  components: [
    "ED",
    "ISD",
    "PROMISE",
    "PROSPER",
    "STAR",
    "PRISE",
    "RETAIL SALES"
  ],

  // Level 2: Component to Project mapping
  projects: {
    "ED": ["SILATECH"],
    "ISD": ["IDP STAR"],
    "PROMISE": ["SILATECH", "PROMISE"],
    "PROSPER": ["PROSPER"],
    "STAR": ["STAR", "STAR PNGO", "STAR UPG"],
    ...
  },

  // Level 3: Project to Zonal Area mapping
  zonalAreasByProject: {
    "STAR": ["Noakhali", "Barisal", "Rangpur"],
    "IDP STAR": ["Dinajpur", "Rajshahi", "Naogaon", "Khulna", "Satkhira"],
    ...
  },

  // Level 4: Zonal Area to DM Area mapping
  zonalAreas: {
    "Noakhali": ["Noakhali", "Khagrachari", "Jamalpur", "Moulvibazar"],
    "Barisal": ["Patuakhali", "Barisal sadar", "Bagerhat", "Jessore"],
    ...
  },

  // Level 5: DM Area to Branch mapping
  dmAreas: {
    "Patuakhali": [
      "STAR Patuakhali Sadar",
      "STAR Bauphal",
      "STAR Dumki",
      ...
    ],
    ...
  },

  // Level 6: Branch to District mapping
  branches: {
    "STAR Patuakhali Sadar": [],
    "B2B Godagari": ["Dinajpur"],
    "ED/Sylhet Sadar": ["Sylhet"],
    ...
  }
}
```

---

## Component Flow Diagram

```
┌────────────────────────────────────────────────────────────┐
│              LocationHierarchy Component                    │
└────────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
                v                       v
        ┌──────────────┐        ┌──────────────────┐
        │Helper Function       │  Select Dropdowns │
        ├──────────────┤        ├──────────────────┤
        │getProjects   │─────→  │Component Select  │
        │getZonalAreas │─────→  │Project Select    │
        │getDMsAreas   │─────→  │Zonal Area Select │
        │getBranches   │─────→  │DM Area Select    │
        │getDistricts  │─────→  │Branch Select     │
        └──────────────┘        │District Select   │
                                └──────────────────┘
                                        │
                                        v
                            ┌──────────────────────┐
                            │Form Data Collection  │
                            ├──────────────────────┤
                            │component: string     │
                            │project: string       │
                            │zonalArea: string     │
                            │dmArea: string        │
                            │branchName: string    │
                            │districtName: string  │
                            └──────────────────────┘
                                        │
                                        v
                            ┌──────────────────────┐
                            │Form Submission       │
                            ├──────────────────────┤
                            │POST /api/submit      │
                            │↓ Append to Google    │
                            │  Sheet with timestamp│
                            └──────────────────────┘
```

---

## Form State Management

```
Initial State:
{
  component: "",
  project: "",
  zonalArea: "",
  dmArea: "",
  branchName: "",
  districtName: ""
}
        │
        │ User: Select Component = "STAR"
        v
{
  component: "STAR",           ← User input
  project: "",                 ← Cleared (reset cascade)
  zonalArea: "",               ← Cleared
  dmArea: "",                  ← Cleared
  branchName: "",              ← Cleared
  districtName: ""             ← Cleared
}
        │
        │ User: Select Project = "STAR"
        v
{
  component: "STAR",           ← Unchanged
  project: "STAR",             ← User input
  zonalArea: "",               ← Cleared (reset cascade)
  dmArea: "",                  ← Cleared
  branchName: "",              ← Cleared
  districtName: ""             ← Cleared
}
        │
        │ User: Select Zonal Area = "Barisal"
        v
{
  component: "STAR",           ← Unchanged
  project: "STAR",             ← Unchanged
  zonalArea: "Barisal",        ← User input
  dmArea: "",                  ← Cleared (reset cascade)
  branchName: "",              ← Cleared
  districtName: ""             ← Cleared
}
        │
        │ ... continues until all selections made
        v
Final State (Ready to Submit):
{
  component: "STAR",
  project: "STAR",
  zonalArea: "Barisal",
  dmArea: "Patuakhali",
  branchName: "STAR Patuakhali Sadar",
  districtName: ""
}
```

---

## Validation Flow

```
┌──────────────────────────────┐
│   Form Submission Attempt    │
└────────────┬─────────────────┘
             │
    ┌────────v─────────┐
    │Validate Required │
    │Fields            │
    └────────┬─────────┘
             │
    ┌────────v──────────────────────────────┐
    │Component ≠ "" AND                      │
    │Project ≠ "" AND                        │
    │Zonal Area ≠ "" AND                     │
    │DM Area ≠ ""                            │
    │(Branch & District are optional)        │
    └────────┬─────────────────────────────┤
             │
        ┌────v─────┐
        │All Valid?│
        └────┬────────┬──────┐
             │        │      │
          YES│        │NO    │
             v        │      v
        ┌────────┐    │  ┌────────────┐
        │Submit  │    └─→│Show Errors │
        │Form    │       │(Red outline)
        └────────┘       └────────────┘
             │
             v
        ┌──────────────┐
        │POST Request  │
        │/api/submit   │
        └──────────────┘
             │
             v
        ┌──────────────┐
        │Google Sheet  │
        │Append Row    │
        └──────────────┘
```

---

## Redux-Style State Updates

When user changes a cascade level:

```
// User selects new Component
handleCascadeChange('component', 'STAR')
  → { component: 'STAR', project: '', zonalArea: '', dmArea: '', branchName: '', districtName: '' }

// User selects Project
handleCascadeChange('project', 'STAR PNGO')
  → { component: 'STAR', project: 'STAR PNGO', zonalArea: '', dmArea: '', branchName: '', districtName: '' }

// User selects Zonal Area
handleCascadeChange('zonalArea', 'Barguna')
  → { component: 'STAR', project: 'STAR PNGO', zonalArea: 'Barguna', dmArea: '', branchName: '', districtName: '' }

// User selects DM Area
handleCascadeChange('dmArea', 'Barguna Sadar')
  → { component: 'STAR', project: 'STAR PNGO', zonalArea: 'Barguna', dmArea: 'Barguna Sadar', branchName: '', districtName: '' }

// User selects Branch
handleCascadeChange('branchName', 'STAR PNGO Barguna Sadar 1')
  → { component: 'STAR', project: 'STAR PNGO', zonalArea: 'Barguna', dmArea: 'Barguna Sadar', branchName: 'STAR PNGO Barguna Sadar 1', districtName: '' }

// User selects District
handleCascadeChange('districtName', 'Some District')
  → { component: 'STAR', project: 'STAR PNGO', zonalArea: 'Barguna', dmArea: 'Barguna Sadar', branchName: 'STAR PNGO Barguna Sadar 1', districtName: 'Some District' }
```
