/**
 * Zonal Areas Data
 * Mapping: Project -> Zonal Areas
 * 
 * Note: 'N/A' option indicates that no specific zonal area is applicable
 * When 'N/A' is selected, the form skips the zonal area level in the cascade
 * and connects directly to DM areas via projectDmAreaMapping
 */

const zonalArea = {
  /* ISD projects
  "BISD IT": ["N/A", "Dhaka", "Chattogram", "Sylhet"],
  "BISD TVET": ["N/A", "Dhaka", "Chattogram", "Sylhet"],
  "BISD Joldhaka": ["N/A", "Joldhaka"],
  "Care Giver for Japan": ["N/A", "Dhaka"],
  "PISD": ["N/A", "Dhaka"],
  "Govt": ["N/A", "Dhaka"],
  */
 
  // STAR projects
  "STAR BRAC": ["Noakhali"],
  "STAR IDP": ["Dinajpur North", "Dinajpur South", "Rajshahi", "Naogaon", "Khulna", "Satkhira"],
  "STAR PNGO": ["Rajshahi", "Sreemangal"],
  "STAR SPA": ["Barishal", "Noakhali", "Rangpur"],
  "STAR SDF": ["N/A"],
  "STAR UPG": ["N/A"],

  // ED:SILATECH project
  "SILATECH/ED": ["N/A"],

  // PROMISE:SILATECH project
  "SILATECH/PROMISE": ["N/A"],
  
  // PROSPER project
  "PROSPER": ["Cumilla", "Mymensingh"],

  // RETAIL SALES project
  "RETAIL SALES": ["N/A"],
  
};

/**
 * Project to DM Area mapping (for N/A cases)
 * When zonal area is 'N/A', the cascade connects project directly to DM areas
 */
const projectDmAreaMapping = {
  /* ISD projects
  "BISD IT": ["Dhaka", "Chattogram", "Sylhet"],
  "BISD TVET": ["Dhaka", "Chattogram", "Sylhet"],
  "BISD Joldhaka": ["Joldhaka"],
  "Care Giver for Japan": ["Dhaka"],
  "PISD": ["Dhaka"],
  "Govt": ["Dhaka"],
  */

  // STAR projects
  "STAR BRAC": [],
  "STAR IDP": [],
  "STAR PNGO": [],
  "STAR SPA": [],
  "STAR SDF": ["Indurkani", "Nilphamari", "Haluaghat"],
  "STAR UPG": ["Azampur", "Pallabi", "Panchlaish", "Bogura"],
  
  // ED:SILATECH project
  "SILATECH/ED": ["Sylhet Sadar", "Joypurhat Sadar"],
  
  // PROMISE:SILATECH project
  "SILATECH/PROMISE": ["Barisal", "Patkelgatha", "Bagerhat", "Mithapukur", "Lalpur", "Joypurhat Sadar", "Sreemangal", "Dashkin Surma"],

  // PROSPER project
  "PROSPER": [],
  
  // RETAIL SALES project
  "RETAIL SALES": ["RS Daulatpur Center", "RS Pallabi Center", "RS Amborkhana Center", "RS Panchlaish Center", "RS Abdullahpur Center"],
};

export { zonalArea, projectDmAreaMapping };
