/**
 * Zonal Area to DM Area mapping
 * Reshaped structure: Project -> Zonal Area -> DM Areas
 *
 * Values preserved from the original flat mapping; only structure changed.
 */

const dmAreas = {
  // STAR projects
  "STAR BRAC": {
    Noakhali: ["Noakhali", "Khagrachari", "Jamalpur"],
  },
  
  "STAR IDP": {
  "Dinajpur North": ["Dinajpur Sadar", "Birol", "Bochagonj", "Kaharol", "Birganj", "Khansama"],
  "Dinajpur South": ["Cirirbandar","Fulbari", "Birampur","Nawabganj", "Ghoraghat", "Hakimpur"],
  Rajshahi: ["Tanore", "Niamothpur"],
  Naogaon: ["Mohadevpur", "Patnitala"],
  Khulna: ["Paikgacha", "Koyra", "Dumuria", "Dakop", "Rupsha", "Digholia"],
  Satkhira: ["Kolaroa", "Debhata", "Shyamnagar", "Assasuni", "Tala"],
  },

  "STAR PNGO": {
    Rajshahi: ["Barguna", "Chapainawabganj", "Polashbari"],
    Sreemangal: ["Mymensingh", "Sherpur", "Sreemangal", "Rangamati"],
  },

  "STAR SPA": {
    Noakhali: ["Jamalpur", "Moulvibazar"],
    Barishal: ["Patuakhali", "Barisal sadar", "Bagerhat", "Jessore"],
    Rangpur: ["Ullapara", "Joypurhat", "Lalmonirhat", "Thakurgaon"],
  },
  


  "STAR UPG": {
    Azampur: ["Azampur", "Notun Bazar", "Gazipur Sadar", "Mymensingh Sadar"],
    Pallabi: ["Pallabi", "Bhashantek", "Bandar"],
    Panchlaish: ["Panchlaish", "Bakalia", "Pahartali"],
    Bogura: ["Bogra Sadar", "Paba", "Motihar"],
  },



  "PROSPER": {
    Cumilla: ["Cumilla", "Chattogram", "Dhaka"],
    Mymensingh: ["Kishoreganj", "Gaibandha"],
  },

  

  "SILATECH": {
    Sylhet: ["Sylhet Sadar", "Golapgonj", "Sunamgonj Sadar", "Hobigonj Sadar"],
    Joypurhat: ["Lalmonirhat Sadar", "Mithapukur", "Palashbari", "Joypurhat Sadar"],
    "Barisal (SILATECH)": ["Borisal Sadar", "Gournodi", "Jalokathi Sadar"],
    Patkelgatha: ["Dumuria", "Kaligonj", "PatkelGhata"],
    Bagerha: ["Bagerhat Sadar", "Botiagatha", "Fokirhat"],
    Mithapukur: ["Mithapukur", "Palashbari", "Lalmonirhat Sadar"],
    Lalpur: ["Natore sadar", "Lalpur", "Ishwardi"],
  },

};

export default dmAreas;
