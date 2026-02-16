/**
 * Zonal Areas Data
 * Mapping: Project -> Zonal Areas
 * 
 * Note: 'N/A' option indicates that no specific zonal area is applicable
 * When 'N/A' is selected, the form skips the zonal area level in the cascade
 * and connects directly to DM areas via projectDmAreaMapping
 */

const zonalArea = {
  // ISD projects
  "BISD IT": ["N/A", "Dhaka", "Chattogram", "Sylhet"],
  "BISD TVET": ["N/A", "Dhaka", "Chattogram", "Sylhet"],
  "BISD Joldhaka": ["N/A", "Joldhaka"],
  "Care Giver for Japan": ["N/A", "Dhaka"],
  "PISD": ["N/A", "Dhaka"],
  "Govt": ["N/A", "Dhaka"],
  
  // STAR projects
  "STAR BRAC": ["N/A", "Barishal", "Noakhali", "Rangpur"],
  "STAR SPA": ["N/A"],
  "STAR RELI": ["N/A"],
  "STAR SDF": ["N/A"],
  "STAR UPG": ["N/A"],
  "IDP STAR": ["N/A", "Dinajpur North", "Dinajpur South", "Rajshahi", "Naogaon", "Khulna", "Satkhira"],
  "STAR PNGO": ["N/A", "Sreemangal", "Rajshahi"],

  // SILATECH project
  "SILATECH": ["N/A"],

  // Promise project
  //"PROMISE": ["N/A"], --- IGNORE ---
  
  // PROSPER project
  "PROSPER": ["N/A", "Cumilla", "Mymensingh"],

  // RETAIL SALES project
  "RETAIL SALES": ["N/A"],
  
};

/**
 * Project to DM Area mapping (for N/A cases)
 * When zonal area is 'N/A', the cascade connects project directly to DM areas
 */
const projectDmAreaMapping = {
  "BISD IT": ["Dhaka", "Chattogram", "Sylhet"],
  "BISD TVET": ["Dhaka", "Chattogram", "Sylhet"],
  "BISD Joldhaka": ["Joldhaka"],
  "Care Giver for Japan": ["Dhaka"],
  "PISD": ["Dhaka"],
  "Govt": ["Dhaka"],
  "STAR BRAC": ["Barishal", "Noakhali", "Rangpur"],
  "STAR SPA": [],
  "STAR RELI": [],
  "STAR SDF": [],
  "STAR UPG": [],
  "IDP STAR": ["Dinajpur North", "Dinajpur South", "Rajshahi", "Naogaon", "Khulna", "Satkhira"],
  "STAR PNGO": ["Sreemangal", "Rajshahi"],
  "SILATECH": [],
  "PROSPER": ["Cumilla", "Mymensingh"],
  "RETAIL SALES": [],
};

export { zonalArea, projectDmAreaMapping };
