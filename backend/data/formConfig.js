/**
 * Form Configuration Data
 * Phases and Error Types for form dropdowns
 */

const phases = ["Phase 1", "Phase 2", "Phase 3", "N/A"];

const errorCategories = {
  "Data_Entry_Issues": [
    "Wrong Trade Name",
    "Wrong Business Name",
    "Spelling Mistake",
    "Wrong Name",
    "Wrong Gender",
    "Wrong Disability Status",
    "Wrong Disability Type",
    "Wrong Address",
    "Wrong Date of Birth",
    "Wrong Age",
    "Over Age",
    "Early Marriage",
    "Divorce"
  ],
  "Identification_Issues": [
    "Birth Certificate Number",
    "NID Number",
    "Passport Number"
  ],
  "Financial_Issues": [
    "Fee",
    "Wrong Money Receipt Number"
  ],
  "Photo_and_Document_Issues": [
    "Learner Incorrect Photo",
    "Learner and MCP Couple Photo",
    "Payment Receipt Photo",
    "MCP Photo",
    "Agreement Photo"
  ],
  "Placement_Issues": [
    "Learner MCP Placement",
    "Wrong MCP Placement",
    "Wrong Learner Placement",
    "MCP Not Showing for Placement",
    "Dashboard Record Missing"
  ],
  "Dropout_Issues": [
    "Learner Dropout",
    "MCP Dropout",
    "Learner MCP Dropout",
    "Multiple Client Dropout"
  ],
  "Program_Management_Issues": [
    "Cohort Change",
    "Batch Change",
    "Batch Number Change",
    "Batch Time Change",
    "Branch Change",
    "Learner Transfer",
    "Selection to Deselection"
  ],
  "Deletion_Requests": [
    "Duplicate MCP ID",
    "Delete Learner ID"
  ],
  "Survey_and_System_Issues": [
    "MCP Workplace Accessibility Survey",
    "Survey Sync Error",
    "Wrong Survey Mapping",
    "Job Issue"
  ],
  "Training_Assessment_Issues": [
    "Replacement Client for Training Assessment Update",
    "Skill Assessment Issue"
  ],
  "Data_and_Report_Issues": [
    "MCP Name Showing Twice",
    "Report Issue"
  ],
  "Miscellaneous": [
    "N/A"
  ]
};

export { phases, errorCategories };
