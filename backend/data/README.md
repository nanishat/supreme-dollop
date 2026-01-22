# Data Folder - SDP Organizational Hierarchy

This folder contains all the structured data for the SDP error reporting system, organized by data type for easy maintenance and updates.

## 📁 File Structure

```
data/
├── index.js              # Main export file - combines all data
├── components.js         # Top-level organizational units
├── projects.js           # Component to Project mappings
├── zonalAreas.js         # Project to Zonal Area & Zonal Area to DM Area mappings
├── dmAreas.js            # DM Area to Branch mappings
├── branches.js           # Branch to District mappings
├── formConfig.js         # Form configuration (phases, error types)
└── README.md             # This file
```

## 📚 Data Hierarchy

The data is organized in a cascading hierarchy:

```
Components (7 types)
    ↓
Projects (6 types)
    ↓
Zonal Areas (30+)
    ↓
DM Areas (100+)
    ↓
Branches (250+)
    ↓
Districts (64)
```

## 📄 File Descriptions

### components.js
**Purpose**: List of all top-level organizational components

**Structure**: Simple array of strings

**Content**: ED, ISD, PROMISE, PROSPER, STAR, PRISE, RETAIL SALES

**When to update**: When adding/removing organizational components

### projects.js
**Purpose**: Maps components to their associated projects

**Structure**: Object with component names as keys, arrays of projects as values

**Example**:
```javascript
{
  "ED": ["SILATECH"],
  "STAR": ["STAR", "STAR PNGO", "STAR UPG"],
}
```

**When to update**: When creating new projects or changing project assignments to components

### zonalAreas.js
**Purpose**: Contains two mappings:
1. `zonalAreasByProject`: Maps projects to their zonal areas
2. `zonalAreas`: Maps zonal areas to DM areas

**Structure**: Two objects with cascading mappings

**When to update**: When adding/removing zonal areas or DM areas within regions

### dmAreas.js
**Purpose**: Maps DM areas to their associated branches

**Structure**: Object with DM area names as keys, arrays of branch names as values

**Content**: 100+ DM areas mapped to 250+ branches

**When to update**: When adding/removing branches or reassigning branches to DM areas

### branches.js
**Purpose**: Maps branches to their associated districts

**Structure**: Object with branch names as keys, arrays of district names as values

**Content**: Sample branches mapped to districts

**When to update**: When adding new branches or updating district assignments

### formConfig.js
**Purpose**: Configuration data for form dropdowns

**Contains**:
- `phases`: Available project phases
- `errorTypes`: Available error types for reporting

**When to update**: When adding/removing form options

### index.js
**Purpose**: Central export point that combines all data modules

**Exports**:
- Default export: Combined `sdpData` object with all data
- Named exports: Individual modules for selective imports

**Usage**:
```javascript
// Option 1: Import entire dataset
import sdpData from './data/index.js';
const components = sdpData.components;

// Option 2: Import specific modules
import { components, projects } from './data/index.js';
```

## 🔄 How They Connect

```
index.js (main entry point)
    ├── imports components.js
    ├── imports projects.js (uses components)
    ├── imports zonalAreas.js (uses projects)
    ├── imports dmAreas.js (uses zonal areas)
    ├── imports branches.js (uses DM areas)
    ├── imports formConfig.js
    └── exports combined sdpData object
```

## ✏️ Maintenance Guide

### Adding a New Component
1. Add to `components.js`
2. Add entry to `projects.js`
3. Add entries to `zonalAreasByProject` in `zonalAreas.js`
4. Add corresponding DM areas to `zonalAreas.dmAreas`
5. Add branches to `dmAreas.js`

### Adding a New Project
1. Add to `projects.js` under the appropriate component
2. Add entry to `zonalAreasByProject` in `zonalAreas.js`
3. Add DM areas to `zonalAreas[zonalArea]`
4. Add branches to `dmAreas.js`

### Adding a New Zonal Area
1. Add to `zonalAreasByProject[project]` in `zonalAreas.js`
2. Add entry to `zonalAreas` mapping to DM areas
3. Add DM area entries to `dmAreas.js`

### Adding a New Branch
1. Find the DM area in `dmAreas.js`
2. Add branch name to the array
3. (Optional) Add branch mapping in `branches.js`

### Adding a New Error Type
1. Edit `formConfig.js`
2. Add to `errorTypes` array

## 🔍 Data Validation

**Ensure consistency**:
- All projects in `projects.js` have entries in `zonalAreasByProject`
- All zonal areas in `zonalAreasByProject` have entries in `zonalAreas`
- All DM areas in `zonalAreas` have entries in `dmAreas`
- No orphaned entries (unused data)
- No circular references

## 📦 Import Patterns

### From frontend (LocationHierarchy.jsx)
```javascript
import mockData from '../../../backend/data/index.js';

// Now use:
mockData.components
mockData.projects
mockData.zonalAreasByProject
// etc.
```

### From backend (server.js or other files)
```javascript
import sdpData from './data/index.js';
// or
import { components, errorTypes } from './data/index.js';
```

## 🚀 Performance Considerations

- ✅ All data is loaded into memory at startup
- ✅ No API calls needed for data access
- ✅ Fast lookups using object keys
- ✅ Suitable for 250+ branches without performance issues

## 📝 Comments

Each file includes:
- Header comment explaining its purpose
- Inline comments for complex sections
- Clear naming conventions

## ⚡ Quick Tips

1. **Backup before major changes**: Git commit before bulk modifications
2. **Test after updates**: Verify cascade works after data changes
3. **Keep consistency**: Use same naming conventions
4. **Document changes**: Add comments for non-obvious data relationships
5. **Use index.js**: Always import from `index.js` for consistency

---

**Last Updated**: January 18, 2026  
**Maintenance Level**: Easy - Well-organized and documented  
**Data Size**: ~250+ branches, 64 districts, 7 components
