/**
 * DM Area to Branch mapping
 * Mapping: DM Area -> Branches
 */

const branches = {
  /* STAR BRAC */ 
  "STAR BRAC": {
    Noakhali: [
      "STAR Chandpur Sadar",
      "STAR Laxmipur Sadar",
      "STAR Begumganj",
      "STAR Noakhali sadar",
      "STAR Subarnachar",
      "STAR Sonaimuri",
    ],
    Khagrachari: [
      "STAR Khagrachari Sadar",
      "STAR Manikchari",
      "STAR Matiranga",
      "STAR Ramgarh",
      "STAR Rangamati Sadar",
      "STAR Baghaisori",
      "STAR Langadu",
    ],
    Jamalpur: [
      "STAR Nalitabari",
      "STAR Sherpur Sadar",
    ],
  },
  
  /* STAR SPA */
  "STAR SPA": {
    // STAR SPA - Noakhali
    Jamalpur: [
      "STAR Jamalpur Sadar",
      "STAR Muktagacha",
      "STAR Netrokona sadar",
    ],
    Moulvibazar: [
      "STAR Moulvibazar",
      "STAR Kuluara",
      "STAR Chunarughat",
      "STAR Bhairab",
    ],

    // STAR SPA - Barishal
    Patuakhali: [
      "STAR Patuakhali Sadar",
      "STAR Bauphal",
      "STAR Dumki",
      "STAR Bakerganj",
      "STAR Mehendiganj",
    ],
    "Barisal sadar": [
      "STAR Barishal Sadar",
      "STAR Agailjhara",
      "STAR Rajapur",
      "STAR Jhalokathi",
      "STAR Kathalia",
    ],
    Bagerhat: [
      "STAR Bagerhat Sadar",
      "STAR Fakirhat",
      "STAR Pirojpur Sadar",
      "STAR Mathbaria",
    ],
    Jessore: [
      "STAR Jessore sadar",
      "STAR Chougachha",
      "STAR Phultala",
      "STAR Satkhira Sadar",
    ],

    // STAR SPA - Rangpur
    Ullapara: [
    "STAR Ullapara",
    "STAR Pabna Sadar",
    "STAR Sirajganj Sadar",
    "STAR Gaibandha Sadar",
    "STAR Pirganj",
    ],
    Joypurhat: [
      "STAR Joypurhat sadar",
      "STAR Naogaon Sadar",
      "STAR Panchbibi",
      "STAR Gomostapur",
      "STAR Shibganj",
    ],
    Lalmonirhat: [
      "STAR kaliganj",
      "STAR Patgram",
      "STAR Lalmonirhat Sadar",
      "STAR Kurigram Sadar",
      "STAR Mithapukur",
    ],
    Thakurgaon: [
      "STAR Thakurgaon Sadar",
      "STAR Panchagarh Sadar",
      "STAR Boda",
      "STAR Domar",
      "STAR Saidpur",
    ],
  },
  
  /* STAR IDP */ 
  "STAR IDP": {
    // STAR IDP - Dinajpur North
    "Dinajpur Sadar": [
      "B2B Godagari",
      "B2B Komolpur",
    ],
    "Birol": [
      "B2B Birol 1",
      "B2B Birol 2",
    ],
    "Bochagonj": [
      "B2B Bochagonj",
      "B2B Bokultola",
    ],
    "Kaharol": [
      "B2B Kaharol",
      "B2B Kantanagar",
    ],
    "Birganj": [
      "B2B Birganj 1",
      "B2B Birganj 2",
      "B2B Jharbari",
    ],
    "Khansama": [
      "B2B Pakerhat",
      "B2B Khansama",
    ],

    // STAR IDP - Dinajpur South
    "Cirirbandar": [
      "B2B Cirirbandar",
      "B2B Ranirbandar",
    ],
    "Fulbari": [
      "B2B Fulbari 1",
      "B2B Fulbari 2",
      "B2B Baraihat",
    ],
    "Birampur": [
      "B2B Katla 1",
      "B2B Katla 2",
      "B2B Birampur",
    ],
    "Nawabgonj": [
      "B2B Bhaduria",
      "B2B Nawabganj",
    ],
    "Ghoraghat": [
      "B2B Ghoraghat",
      "B2B Osmanpur",
    ],
    "Hakimpur": [
      "B2B Hakimpur 1",
      "B2B Hakimpur 2",
    ],

    // STAR IDP - Rajshahi
    Tanore: ["B2B Tanore", "B2B Mundumala"],
    Niamothpur: ["B2B Niamatpur", "B2B TLB"],

    // STAR IDP - Naogaon
    Mohadevpur: [
      "B2B Mohadevpur 1",
      "B2B Mohadevpur 2",
      "B2B Badalgachhi 1",
      "B2B Badalgachhi 2",
    ],
    Patnitala: ["B2B Patnitala", "B2B Sapahar", "B2B Dighirhat"],

    // STAR IDP - Khulna
    Paikgacha: ["B2B Paikgachha", "B2B Baka Bazar"],
    Koyra: ["B2B Koyra Sadar 1", "B2B Koyra Sadar 2", "B2B Koyra Sadar 3"],
    Dumuria: ["B2B Shahpur", "B2B Dumuria"],
    Dakop: ["B2B Dakop"],
    Rupsha: ["B2B Jabusha"],
    Digholia: ["B2B Digholia"],

    // STAR IDP - Satkhira
    Kolaroa: [
      "B2B Sonabaria 1",
      "B2B Sonabaria 2",
      "B2B Kalaroa 1",
      "B2B Kalaroa 2",
    ],
    Debhata: [
      "B2B Putimari",
      "B2B Debhata 1",
      "B2B Debhata 2",
      "B2B Kaliganj 1",
      "B2B Kaliganj 2",
    ],
    Shyamnagar: [
      "B2B Munshiganj",
      "B2B Shyamnagar Sadar 1",
      "B2B Shyamnagar Sadar 2",
      "B2B Vatkhali",
    ],
    Assasuni: ["B2B Towerdanga", "B2B Assasuni 1", "B2B Assasuni 2"],
    Tala: ["B2B Tala 1", "B2B Tala 2"],
  },
  
  /* STAR PNGO */
  "STAR PNGO": {
    // STAR PNGO - Rajshahi
    Barguna: [
      "STAR PNGO Barguna Sadar 1",
      "STAR PNGO Barguna Sadar 2",
      "STAR PNGO Bamna",
      "STAR PNGO Amtali",
      "STAR PNGO Kalapara",
      "STAR PNGO Mirzaganj",
      "STAR PNGO Betagi",
      "STAR PNGO Taltali",
      "STAR PNGO Patharghata 1",
      "STAR PNGO Patharghata 2"
    ],
    Chapainawabganj: [
      "STAR PNGO Mohadevpur",
      "STAR PNGO Manda",
      "STAR PNGO Nawabganj Sadar",
      "STAR PNGO Patnitala",
      "STAR PNGO Dhamurhat",
      "STAR PNGO Mohanpur",
      "STAR PNGO Puthia",
      "STAR PNGO Godagari",
      "STAR PNGO Bagha",
      "STAR PNGO Charghat"],
    Polashbari: [
      "STAR PNGO Palashbari",
      "STAR PNGO Sadullapur",
      "STAR PNGO Gobindaganj",
      "STAR PNGO Saghata",
      "STAR PNGO Fulchuri",
      "STAR PNGO Sundarganj",
      "STAR PNGO Rowmari",
      "STAR PNGO Rajibpur",
      "STAR PNGO Gangachara",
      "STAR PNGO Aditmari"
    ],
    
    // STAR PNGO - Sreemangal
    Mymensingh: [
      "STAR PNGO Gofargaon",
      "STAR PNGO Trishal",
      "STAR PNGO Bhaluka",
      "STAR PNGO Gouripur",
      "STAR PNGO Fulbaria",
      "STAR PNGO Shambhuganj",
      "STAR PNGO Dhara Bazar",
      "STAR PNGO Phulpur",
      "STAR PNGO Tarakanda",
      "STAR PNGO Police Line"
    ],
    Sherpur: [
      "STAR PNGO Mohongonj",
      "STAR PNGO Purbodhola",
      "STAR PNGO Kalmakanda",
      "STAR PNGO Barhattra",
      "STAR PNGO Dewanganj",
      "STAR PNGO Islampur",
      "STAR PNGO Bakshiganj",
      "STAR PNGO Jhenigati",
      "STAR PNGO Nakla",
      "STAR PNGO Sreebardi"
    ],
    Sreemangal: [
      "STAR PNGO Chhatak",
      "STAR PNGO Gobindaganj Chatak",
      "STAR PNGO Shantiganj",
      "STAR PNGO Jagannathpur",
      "STAR PNGO Derai",
      "STAR PNGO Kamalganj",
      "STAR PNGO Rajnagar",
      "STAR PNGO Sreemangal",
      "STAR PNGO Bahubal",
      "STAR PNGO Nobiganj"
    ],
    Ramgamati: [
      "STAR PNGO Khagrachhari Sadar",
      "STAR PNGO Dighinala",
      "STAR PNGO Panchhari",
      "STAR PNGO Mahalchari",
      "STAR PNGO Naniarchar",
      "STAR PNGO Rangamati Sadar",
      "STAR PNGO Kawkhali",
      "STAR PNGO Rajasthali",
      "STAR PNGO Juraichhari",
      "STAR PNGO Kaptai"
    ],
  },
  
  /* STAR SDF */
  "STAR SDF": {
    Indurkani: ["STAR SDF Indurkani", "STAR SDF Galachipa", "STAR SDF Dashmina", "STAR SDF Bhandaria"],
    Nilphamari: ["STAR SDF Nilphamari Sadar", "STAR SDF Kaunia", "STAR SDF Bochaganj", "STAR SDF Ulipur", "STAR SDF Hatibandha"],
    Haluaghat: ["STAR SDF Kishoreganj Sadar", "STAR SDF Durgapur", "STAR SDF Dhobaura", "STAR SDF Sreebardi", "STAR SDF Haluaghat"],
  },
 
  /* STAR UPG */
  "STAR UPG": {
    Azampur: ["STAR UPG Notun Bazar", "STAR UPG Azampur", "STAR UPG Gazipur Sadar 1", "STAR UPG Gazipur Sadar 2", "STAR UPG Tongi East", "STAR UPG Mymensingh Sadar"],
    Pallabi: ["STAR UPG Easternhousing", "STAR UPG Bhashantek", "STAR UPG Pallabi", "STAR UPG Shitalakkha", "STAR UPG Adamji", "STAR UPG Bandar"],
    Panchlaish: ["STAR UPG Sugandha", "STAR UPG Bakalia", "STAR UPG Pahartali", "STAR UPG Firingi Bazar", "STAR UPG Lalkhan", "STAR UPG Cornelhat"],
    Bogura: ["STAR UPG Paba", "STAR UPG Motihar", "STAR UPG Mollapara", "STAR UPG Bogra Urban", "STAR UPG Bogra Sadar", "STAR UPG Kamal Kachna", "STAR UPG Satgara"],
  },
  
  /* ED:SILATECH */
  "SILATECH/ED": {
    "Sylhet Sadar": ["ED/Sylhet Sadar", "ED/Golapgonj", "ED/Sunamgonj Sadar", "ED/Hobigonj Sadar", "ED/Moulovibazar Sadar", "ED/Sreemongal"],
    "Joypurhat Sadar": ["ED/Lalmonirhat Sadar", "ED/Mithapukur", "ED/Palashbari", "ED/Ishwardi", "ED/Lalpur", "ED/Panchbibi", "ED/Joypurhat Sadar", "ED/Natore Sadar", "ED/Patnitala"],
  },

  /* PROMISE:SILATECH */
  "SILATECH/PROMISE": {
    "Barishal": ["Silatech-PROMISE Barishal Sadar", "Silatech-PROMISE Gournodi", "Silatech-PROMISE Jhalokathi Sadar"],
    "Patkelgatha": ["Silatech-PROMISE Dumuria", "Silatech-PROMISE Kaligonj", "Silatech-PROMISE PatkelGhata"],
    "Bagerhat": ["Silatech-PROMISE Bagerhat Sadar", "Silatech-PROMISE Botiagatha", "Silatech-PROMISE Fokirhat"],
    "Mithapukur": ["Silatech-PROMISE Mithapukur", "Silatech-PROMISE Palashbari", "Silatech-PROMISE Lalmonirhat Sadar"],
    "Lalpur": ["Silatech-PROMISE Natore Sadar", "Silatech-PROMISE Lalpur", "Silatech-PROMISE Ishwardi"],
    "Joypurhat Sadar": ["Silatech-PROMISE Joypurhat Sadar", "Silatech-PROMISE Patnitola", "Silatech-PROMISE Panchbibi"],
    "Dakshin Surma": ["Silatech-PROMISE Golapgonj", "Silatech-PROMISE Dakshin Surma", "Silatech-PROMISE Chatak"],
    "Sreemangal": ["Silatech-PROMISE Sreemangal", "Silatech-PROMISE Kulaura", "Silatech-PROMISE Shyastagonj"],
  },

  /* PROSPER */
  "PROSPER": {
    // PROSPER - Cumilla
    Cumilla: [
      "PROSPER Comilla Sadar",
      "PROSPER Laksham",
      "PROSPER Chandpur Sadar",
      "PROSPER Lakshmipur Sadar",
      "PROSPER Muradnagar",
    ],
    Feni: [
      "PROSPER Feni Sadar",
      "PROSPER Kornelhat",
      "PROSPER Noakhali Sadar",
      "PROSPER Companyganj",
      "PROSPER Mirsharai",
    ],
    Pashlish: [
      "PROSPER Pashlish",
      "PROSPER Hat hazari",
      "PROSPER Patiya",
      "PROSPER Keranirhat",
      "PROSPER Fatikchhari",
      
    ],
    Dhaka: [
      "PROSPER Banosree",
      "PROSPER Jatrabari",
      "PROSPER Badda",
      "PROSPER Mirpur",
      "PROSPER Madhabdi"
    ],

    // PROSPER - Mymensingh
    Mymensingh: [
      "PROSPER Mymensingh Sadar",
      "PROSPER Madhupur",
      "PROSPER Shibpur",
      "PROSPER Monohardi",
      "PROSPER Kishoregonj Sadar"
    ],
    Sreemangal: [
      "PROSPER Brahmanbaria Sadar",
      "PROSPER Dakshin Surma",
      "PROSPER Fenchuganj",
      "PROSPER Sreemangal",
      "PROSPER Habiganj Sadar"
    ],
    Gaibandha: [
      "PROSPER Gaibandha Sadar",
      "PROSPER Gobindaganj",
      "PROSPER Saidpur",
      "PROSPER Dinajpur Sadar",
      "PROSPER Fulbari"
    ],
    Bogra: [
      "PROSPER Bogra Sadar",
      "PROSPER Sherpur",
      "PROSPER Naogaon Sadar",
      "PROSPER Islampur",
      "PROSPER Jamalpur Sadar"
    ]
  },

  /* RETAIL SALES */
  "RETAIL SALES": {
    "RS Daulatpur Center": ["RS Daulatpur 1", "RS Daulatpur 2", "RS Daulatpur 3", "RS Daulatpur 4"],
    "RS Pallabi Center": ["RS Pallabi 1", "RS Pallabi 2", "RS Pallabi 3", "RS Pallabi 4"],
    "RS Amborkhana Center": ["RS Amborkhana 1", "RS Amborkhana 2", "RS Amborkhana 3", "RS Amborkhana 4"],
    "RS Panchlaish Center": ["RS Panchlaish 1", "RS Panchlaish 2", "RS Panchlaish 3", "RS Panchlaish 4"],
    "RS Abdullahpur Center": ["RS Abdullahpur 1", "RS Abdullahpur 2", "RS Abdullahpur 3", "RS Abdullahpur 4"],
  },


  /* N/A cases (directly connected to DM areas) */
  // ISD projects
  "BISD IT": {
    "Dhaka": ["BISD Ashkona 1", "BISD Ashkona 2", "BISD Ashkona 3", "BISD Ashkona 4", "BISD Ashkona 5", "BISD Ashkona 6", "BISD Ashkona 7"],
    "Joldhaka": ["BISD Joldhaka"],
    "Chattogram": ["BISD Chattogram"],
    "Cumilla": ["BISD Cumilla"],
    "Halishahar": ["BISD Halishahar"],
    "Sylhet": ["BISD Sylhet"],
    "Rangpur": ["BISD Rangpur"],
  },

  "BISD TVET": {
    "Dhaka": ["BISD Ashkona 1", "BISD Ashkona 2", "BISD Ashkona 3", "BISD Ashkona 4", "BISD Ashkona 5", "BISD Ashkona 6", "BISD Ashkona 7"],
    "Manikganj": ["BISD Manikganj"],
    "Mirsharai": ["BISD Mirsharai"],
    "Nilphamari": ["BISD Nilphamari 1", "BISD Nilphamari 2"],
    "Narayanganj": ["BISD Narayanganj"],
  },

  "Care Giver for Japan": {
    "Dhaka": ["BISD Ashkona 1", "BISD Ashkona 2", "BISD Ashkona 3", "BISD Ashkona 4", "BISD Ashkona 5", "BISD Ashkona 6", "BISD Ashkona 7"],
    "Haluaghat": ["BISD Haluaghat"],
    "Narayanganj": ["BISD Narayanganj"],
    "Mirsharai": ["BISD Mirsharai"],
  },

  "PISD": {
    "Dhaka": ["PISD Dhour/SDC", "PISD Bamnartek/EWHRC", "PISD Norsinghpur/DTC", "PISD keraniganj/ZVTC"],
  },

  "Govt": {
    "Dhaka": ["BISD Ashkona 1", "BISD Ashkona 2", "BISD Ashkona 3", "BISD Ashkona 4", "BISD Ashkona 5", "BISD Ashkona 6", "BISD Ashkona 7"],
    "Nilphamari": ["BISD Nilphamari 1", "BISD Nilphamari 2"],
    "Narayanganj": ["BISD Narayanganj"],
  },
};

export default branches;
