/**
 * Zonal Areas Data
 * Mapping: Project -> Zonal Areas
 */

const zonalAreasByProject = {
  "STAR": ["Noakhali", "Barisal", "Rangpur"],
  "STAR UPG": ["Azampur", "Pallabi", "Panchlaish", "Bogura"],
  "IDP STAR": ["Dinajpur", "Rajshahi", "Naogaon", "Khulna", "Satkhira"],
  "STAR PNGO": ["Barguna", "Chapainawabganj", "Polashbari", "Mymensingh", "Sherpur", "Sreemangal", "Ramgamati"],

  "PROSPER": ["Cumilla", "Mymensingh"],
  "SILATECH": ["Sylhet", "Joypurhat", "Barisal", "Patkelgatha", "Bagerha", "Mithapukur", "Lalpur", "Joypurhat Sadar"],
  
};

/**
 * Zonal Area to DM Area mapping
 * Mapping: Zonal Area -> DM Areas
 */

const zonalAreas = {
  // STAR Project
  Noakhali: ["Noakhali", "Khagrachari", "Jamalpur", "Moulvibazar"],
  Barisal: ["Patuakhali", "Barisal sadar", "Bagerhat", "Jessore"],
  Rangpur: ["Ullapara", "Joypurhat", "Lalmonirhat", "Thakurgaon"],

  // IDP STAR Project
  Dinajpur: ["Dinajpur North", "Dinajpur south"],
  Rajshahi: ["Tanore", "Niamothpur"],
  Naogaon: ["Mohadevpur", "Patnitala"],
  Khulna: ["Paikgacha", "Koyra", "Dumuria", "Dakop", "Rupsha", "Digholia"],
  Satkhira: ["Kolaroa", "Debhata", "Shyamnagar", "Assasuni", "Tala"],

  // PROSPER Project
  Cumilla: ["Cumilla", "Chattogram", "Dhaka"],
  Mymensingh: ["Kishoreganj", "Gaibandha"],

  // STAR PNGO Project
  Barguna: ["Barguna Sadar", "Amtali", "Kalapara", "Mirzaganj"],
  Chapainawabganj: ["Mohadevpur", "Manda", "Nawabganj Sadar", "Patnitala"],
  Polashbari: ["Palashbari", "Sadullapur", "Gobindaganj", "Saghata"],
  Sreemangal: ["Sreemangal", "Kamalganj", "Rajnagar"],
  Sherpur: ["Mohongonj", "Purbodhola", "Kalmakanda"],
  Ramgamati: ["Khagrachhari Sadar", "Dighinala", "Panchhari", "Rangamati Sadar"],

  // SILATECH Project
  Sylhet: ["Sylhet Sadar", "Golapgonj", "Sunamgonj Sadar", "Hobigonj Sadar"],
  Joypurhat: ["Lalmonirhat Sadar", "Mithapukur", "Palashbari", "Joypurhat Sadar"],
  Barisal: ["Borisal Sadar", "Gournodi", "Jalokathi Sadar"],
  Patkelgatha: ["Dumuria", "Kaligonj", "PatkelGhata"],
  Bagerha: ["Bagerhat Sadar", "Botiagatha", "Fokirhat"],
  Mithapukur: ["Mithapukur", "Palashbari", "Lalmonirhat Sadar"],
  Lalpur: ["Natore sadar", "Lalpur", "Ishwardi"],

  // STAR UPG Project
  Azampur: ["Azampur", "Notun Bazar", "Gazipur Sadar", "Mymensingh Sadar"],
  Pallabi: ["Pallabi", "Bhashantek", "Bandar"],
  Panchlaish: ["Panchlaish", "Bakalia", "Pahartali"],
  Bogura: ["Bogra Sadar", "Paba", "Motihar"],
};

export { zonalAreasByProject, zonalAreas };
