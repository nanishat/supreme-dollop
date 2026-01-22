# Cascading Data - Test Cases

## Test Scenario 1: STAR Project (Barisal Region)
**Path**: ED → STAR → Barisal → Patuakhali → STAR Patuakhali Sadar

1. Select Component: `ED` → Shows projects: [SILATECH] ❌
   - **Note**: ED maps to SILATECH, not STAR. Let me try STAR component instead.

**Corrected Path**: STAR → STAR → Barisal → Patuakhali → STAR Patuakhali Sadar

1. Select Component: `STAR`
   - Available Projects: [STAR, STAR PNGO, STAR UPG]
2. Select Project: `STAR`
   - Available Zonal Areas: [Noakhali, Barisal, Rangpur]
3. Select Zonal Area: `Barisal`
   - Available DM Areas: [Patuakhali, Barisal sadar, Bagerhat, Jessore]
4. Select DM Area: `Patuakhali`
   - Available Branches: [STAR Patuakhali Sadar, STAR Bauphal, STAR Dumki, STAR Bakerganj, STAR Mehendiganj]
5. Select Branch: `STAR Patuakhali Sadar`
   - Available Districts: [] (Not mapped in current data)
6. Form Data:
   ```
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

## Test Scenario 2: PROSPER Project (Cumilla)
**Path**: PROSPER → PROSPER → Cumilla → Cumilla → PROSPER Comilla Sadar

1. Select Component: `PROSPER`
   - Available Projects: [PROSPER]
2. Select Project: `PROSPER`
   - Available Zonal Areas: [Cumilla, Mymensingh]
3. Select Zonal Area: `Cumilla`
   - Available DM Areas: [Cumilla, Chattogram, Dhaka]
4. Select DM Area: `Cumilla`
   - Available Branches: [PROSPER Comilla Sadar, PROSPER Laksham, PROSPER Noakhali Sadar, PROSPER Companyganj, PROSPER Brahmanbaria Sadar, PROSPER Chandpur Sadar, PROSPER Lakshmipur Sadar, PROSPER Muradnagar]
5. Select Branch: `PROSPER Comilla Sadar`
   - Available Districts: [] (Not mapped in current data)
6. Form Data:
   ```
   {
     component: "PROSPER",
     project: "PROSPER",
     zonalArea: "Cumilla",
     dmArea: "Cumilla",
     branchName: "PROSPER Comilla Sadar",
     districtName: ""
   }
   ```

---

## Test Scenario 3: IDP STAR Project (Dinajpur)
**Path**: ISD → IDP STAR → Dinajpur → Dinajpur North → B2B Godagari

1. Select Component: `ISD`
   - Available Projects: [IDP STAR]
2. Select Project: `IDP STAR`
   - Available Zonal Areas: [Dinajpur, Rajshahi, Naogaon, Khulna, Satkhira]
3. Select Zonal Area: `Dinajpur`
   - Available DM Areas: [Dinajpur North, Dinajpur south]
4. Select DM Area: `Dinajpur North`
   - Available Branches: [B2B Godagari, B2B Komolpur, B2B Birol 1, B2B Birol 2, B2B Bochaganj, B2B Bokultola, B2B Kaharol, B2B Kantanagar, B2B Birganj 1, B2B Birganj 2, B2B Jharbari, B2B Pakerhat, B2B Khansama]
5. Select Branch: `B2B Godagari`
   - Available Districts: [Dinajpur]
6. Select District: `Dinajpur`
7. Form Data:
   ```
   {
     component: "ISD",
     project: "IDP STAR",
     zonalArea: "Dinajpur",
     dmArea: "Dinajpur North",
     branchName: "B2B Godagari",
     districtName: "Dinajpur"
   }
   ```

---

## Test Scenario 4: SILATECH Project (ED Component)
**Path**: ED → SILATECH → Sylhet → Sylhet Sadar → ED/Sylhet Sadar → Sylhet

1. Select Component: `ED`
   - Available Projects: [SILATECH]
2. Select Project: `SILATECH`
   - Available Zonal Areas: [Sylhet, Joypurhat, Barisal, Patkelgatha, Bagerha, Mithapukur, Lalpur, Joypurhat Sadar]
3. Select Zonal Area: `Sylhet`
   - Available DM Areas: [Sylhet Sadar, Golapgonj, Sunamgonj Sadar, Hobigonj Sadar]
4. Select DM Area: `Sylhet Sadar`
   - Available Branches: [ED/Sylhet Sadar, ED/Golapgonj]
5. Select Branch: `ED/Sylhet Sadar`
   - Available Districts: [Sylhet]
6. Select District: `Sylhet`
7. Form Data:
   ```
   {
     component: "ED",
     project: "SILATECH",
     zonalArea: "Sylhet",
     dmArea: "Sylhet Sadar",
     branchName: "ED/Sylhet Sadar",
     districtName: "Sylhet"
   }
   ```

---

## Test Scenario 5: STAR PNGO Project
**Path**: STAR → STAR PNGO → Barguna → Barguna Sadar → STAR PNGO Barguna Sadar 1

1. Select Component: `STAR`
   - Available Projects: [STAR, STAR PNGO, STAR UPG]
2. Select Project: `STAR PNGO`
   - Available Zonal Areas: [Barguna, Chapainawabganj, Polashbari, Mymensingh, Sherpur, Sreemangal, Ramgamati]
3. Select Zonal Area: `Barguna`
   - Available DM Areas: [Barguna Sadar, Amtali, Kalapara, Mirzaganj]
4. Select DM Area: `Barguna Sadar`
   - Available Branches: [STAR PNGO Barguna Sadar 1, STAR PNGO Barguna Sadar 2]
5. Select Branch: `STAR PNGO Barguna Sadar 1`
   - Available Districts: [] (Not mapped in current data)
6. Form Data:
   ```
   {
     component: "STAR",
     project: "STAR PNGO",
     zonalArea: "Barguna",
     dmArea: "Barguna Sadar",
     branchName: "STAR PNGO Barguna Sadar 1",
     districtName: ""
   }
   ```

---

## Test Scenario 6: Reset Behavior
When user changes selection at any level, dependent levels should reset:

1. Component: STAR → Project: STAR → Zonal Area: Barisal
2. **Change Component to ED**:
   - Project: (reset to "")
   - Zonal Area: (reset to "")
   - DM Area: (reset to "")
   - Branch Name: (reset to "")
   - District Name: (reset to "")

3. Component: ED → Project: SILATECH → Zonal Area: Sylhet → DM Area: Sylhet Sadar
4. **Change Project**:
   - Since ED only has SILATECH as option, user can't change project, but if they did:
   - Zonal Area: (reset to "")
   - DM Area: (reset to "")
   - Branch Name: (reset to "")
   - District Name: (reset to "")

---

## Validation Rules

✅ **Required Fields** (Form cannot submit without these):
- Component
- Project
- Zonal Area
- DM Area

✅ **Optional Fields** (Form can submit without these):
- Branch Name
- District Name

---

## Edge Cases to Handle

1. **Empty Projects**: PRISE and RETAIL SALES have no projects
   - Behavior: Project dropdown will be empty if these components are selected
   - User cannot proceed to next level

2. **Empty Zonal Areas**: Some components may only map to specific projects
   - Behavior: Only relevant zonal areas appear based on selected project

3. **Duplicate Zonal Area Names**: Some zonal areas appear in multiple projects
   - Example: "Rajshahi" appears in both IDP STAR and STAR PNGO
   - Behavior: Component and Project combination determines which hierarchy is used

4. **District Assignment**: Not all branches have district assignments
   - Behavior: District dropdown may be empty if branch has no mapping

---

## API Submission Example

When user submits the form with full hierarchy selection (Scenario 3):

```json
{
  "reporterEmail": "user@example.com",
  "reporterName": "John Doe",
  "reporterPin": "PIN123",
  "reporterPhone": "+8801234567890",
  "supervisor1NamePin": "Supervisor 1",
  "supervisor2NamePin": "Supervisor 2",
  "component": "ISD",
  "project": "IDP STAR",
  "zonalArea": "Dinajpur",
  "dmArea": "Dinajpur North",
  "branchName": "B2B Godagari",
  "districtName": "Dinajpur",
  "phase": "Phase 1",
  "errorType": "Date of Birth/ Age",
  "issueDescription": "Issue description here"
}
```

This data will be appended to the Google Sheet with a timestamp.
