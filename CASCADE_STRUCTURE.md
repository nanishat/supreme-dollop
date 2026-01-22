# Cascading Data Structure Documentation

## Overview
The error reporting form now uses a fully cascading hierarchical data structure that aligns with the project's organizational framework.

## Data Hierarchy Flow

### Level 1: Component
- **Source**: `mockData.components`
- **Values**: ED, ISD, PROMISE, PROSPER, STAR, PRISE, RETAIL SALES
- **UI Control**: Dropdown in LocationHierarchy component
- **Action**: Selecting a component filters the available projects

### Level 2: Project
- **Source**: `mockData.projects[component]`
- **Maps**: Component → Available Projects
- **Example**: 
  - Component "STAR" → Projects: ["STAR", "STAR PNGO", "STAR UPG"]
  - Component "ED" → Projects: ["SILATECH"]
- **UI Control**: Dropdown (disabled until component selected)
- **Action**: Selecting a project filters the available zonal areas

### Level 3: Zonal Area
- **Source**: `mockData.zonalAreasByProject[project]`
- **Maps**: Project → Zonal Areas
- **Example**:
  - Project "STAR" → Zonal Areas: ["Noakhali", "Barisal", "Rangpur"]
  - Project "PROSPER" → Zonal Areas: ["Cumilla", "Mymensingh"]
- **UI Control**: Dropdown (disabled until project selected)
- **Action**: Selecting a zonal area filters the available DM areas

### Level 4: DM Area
- **Source**: `mockData.zonalAreas[zonalArea]`
- **Maps**: Zonal Area → DM Areas (District Management Areas)
- **Example**:
  - Zonal Area "Noakhali" → DM Areas: ["Noakhali", "Khagrachari", "Jamalpur", "Moulvibazar"]
  - Zonal Area "Barisal" → DM Areas: ["Patuakhali", "Barisal sadar", "Bagerhat", "Jessore"]
- **UI Control**: Dropdown (disabled until zonal area selected)
- **Action**: Selecting a DM area filters the available branches

### Level 5: Branch Name (Optional)
- **Source**: `mockData.dmAreas[dmArea]`
- **Maps**: DM Area → Branches
- **Example**:
  - DM Area "Noakhali" → Branches: ["STAR Chandpur Sadar", "STAR Laxmipur Sadar", "STAR Begumganj", ...]
  - DM Area "Dinajpur North" → Branches: ["B2B Godagari", "B2B Komolpur", "B2B Birol 1", ...]
- **UI Control**: Dropdown (disabled until DM area selected)
- **Action**: Selecting a branch filters the available districts

### Level 6: District Name (Optional)
- **Source**: `mockData.branches[branchName]`
- **Maps**: Branch → Districts
- **Example**:
  - Branch "STAR Chandpur Sadar" → Districts: ["Chandpur"]
  - Branch "STAR Laxmipur Sadar" → Districts: ["Laxmipur"]
  - Branch "ED/Sylhet Sadar" → Districts: ["Sylhet"]
- **UI Control**: Dropdown (disabled until branch selected)

## Component Implementation

### LocationHierarchy.jsx
The `LocationHierarchy` component includes helper functions that properly navigate the cascading structure:

```jsx
// Helper functions implement the cascade logic
const getProjectsForComponent = () => 
  formData.component ? (mockData.projects[formData.component] || []) : [];

const getZonalAreasForProject = () => 
  formData.project ? (mockData.zonalAreasByProject[formData.project] || []) : [];

const getDMAreasForZonalArea = () => 
  formData.zonalArea ? (mockData.zonalAreas[formData.zonalArea] || []) : [];

const getBranchesForDMArea = () => 
  formData.dmArea ? (mockData.dmAreas[formData.dmArea] || []) : [];

const getDistrictsForBranch = () => 
  formData.branchName ? (mockData.branches[formData.branchName] || []) : [];
```

## Key Features

1. **Progressive Filtering**: Each level is filtered based on the previous selection
2. **Disabled States**: Child dropdowns are disabled until parent is selected
3. **Reset on Change**: When a parent level changes, all dependent child levels are reset
4. **Optional Levels**: Branch and District are optional fields
5. **Required Levels**: Component, Project, Zonal Area, and DM Area are required for form submission

## Data Connections

### Component → Project Mapping
```
ED → SILATECH
ISD → IDP STAR
PROMISE → SILATECH, PROMISE
PROSPER → PROSPER
STAR → STAR, STAR PNGO, STAR UPG
PRISE → (empty)
RETAIL SALES → (empty)
```

### Project → Zonal Area Mapping
```
STAR → Noakhali, Barisal, Rangpur
IDP STAR → Dinajpur, Rajshahi, Naogaon, Khulna, Satkhira
PROSPER → Cumilla, Mymensingh
STAR PNGO → Barguna, Chapainawabganj, Polashbari, Mymensingh, Sherpur, Sreemangal, Ramgamati
SILATECH → Sylhet, Joypurhat, Barisal, Patkelgatha, Bagerha, Mithapukur, Lalpur, Joypurhat Sadar
STAR UPG → Azampur, Pallabi, Panchlaish, Bogura
```

## Form Submission

When the form is submitted, all cascading hierarchy data is included:
- `component`
- `project`
- `zonalArea`
- `dmArea`
- `branchName` (optional)
- `districtName` (optional)

These values are stored in the Google Sheet exactly as selected.

## Future Enhancements

- Add error types specific to each project
- Add phases specific to each project
- Add role-based access control per zonal area
- Add performance metrics per location hierarchy
