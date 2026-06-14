/* ============================================================
   Emergency Sewa — Complete Vanilla JS App
   All JSON data is embedded — works with file:// protocol
   ============================================================ */

// ========================
// EMBEDDED DATA (no fetch needed)
// ========================
const EMBEDDED = {
  provinces: [
    { "id": "p1", "name": "Koshi Province", "name_ne": "कोशी प्रदेश" },
    { "id": "p2", "name": "Madhesh Province", "name_ne": "मधेश प्रदेश" },
    { "id": "p3", "name": "Bagmati Province", "name_ne": "बागमती प्रदेश" },
    { "id": "p4", "name": "Gandaki Province", "name_ne": "गण्डकी प्रदेश" },
    { "id": "p5", "name": "Lumbini Province", "name_ne": "लुम्बिनी प्रदेश" },
    { "id": "p6", "name": "Karnali Province", "name_ne": "कर्णाली प्रदेश" },
    { "id": "p7", "name": "Sudurpashchim Province", "name_ne": "सुदूरपश्चिम प्रदेश" }
  ],
  districts: [
    { "id": "bhojpur", "name": "Bhojpur", "name_ne": "भोजपुर", "provinceId": "p1" },
    { "id": "dhankuta", "name": "Dhankuta", "name_ne": "धनकुटा", "provinceId": "p1" },
    { "id": "ilam", "name": "Ilam", "name_ne": "इलाम", "provinceId": "p1" },
    { "id": "jhapa", "name": "Jhapa", "name_ne": "झापा", "provinceId": "p1" },
    { "id": "khotang", "name": "Khotang", "name_ne": "खोटाङ", "provinceId": "p1" },
    { "id": "morang", "name": "Morang", "name_ne": "मोरङ", "provinceId": "p1" },
    { "id": "okhaldhunga", "name": "Okhaldhunga", "name_ne": "ओखलढुङ्गा", "provinceId": "p1" },
    { "id": "panchthar", "name": "Panchthar", "name_ne": "पाँचथर", "provinceId": "p1" },
    { "id": "sankhuwasabha", "name": "Sankhuwasabha", "name_ne": "सङ्खुवासभा", "provinceId": "p1" },
    { "id": "solukhumbu", "name": "Solukhumbu", "name_ne": "सोलुखुम्बु", "provinceId": "p1" },
    { "id": "sunsari", "name": "Sunsari", "name_ne": "सुनसरी", "provinceId": "p1" },
    { "id": "taplejung", "name": "Taplejung", "name_ne": "ताप्लेजुङ", "provinceId": "p1" },
    { "id": "terhathum", "name": "Terhathum", "name_ne": "तेह्रथुम", "provinceId": "p1" },
    { "id": "udayapur", "name": "Udayapur", "name_ne": "उदयपुर", "provinceId": "p1" },
    { "id": "bara", "name": "Bara", "name_ne": "बारा", "provinceId": "p2" },
    { "id": "dhanusha", "name": "Dhanusha", "name_ne": "धनुषा", "provinceId": "p2" },
    { "id": "mahottari", "name": "Mahottari", "name_ne": "महोत्तरी", "provinceId": "p2" },
    { "id": "parsa", "name": "Parsa", "name_ne": "पर्सा", "provinceId": "p2" },
    { "id": "rautahat", "name": "Rautahat", "name_ne": "रौतहट", "provinceId": "p2" },
    { "id": "saptari", "name": "Saptari", "name_ne": "सप्तरी", "provinceId": "p2" },
    { "id": "sarlahi", "name": "Sarlahi", "name_ne": "सर्लाही", "provinceId": "p2" },
    { "id": "siraha", "name": "Siraha", "name_ne": "सिराहा", "provinceId": "p2" },
    { "id": "bhaktapur", "name": "Bhaktapur", "name_ne": "भक्तपुर", "provinceId": "p3" },
    { "id": "chitwan", "name": "Chitwan", "name_ne": "चितवन", "provinceId": "p3" },
    { "id": "dhading", "name": "Dhading", "name_ne": "धादिङ", "provinceId": "p3" },
    { "id": "dolakha", "name": "Dolakha", "name_ne": "दोलखा", "provinceId": "p3" },
    { "id": "kathmandu", "name": "Kathmandu", "name_ne": "काठमाडौं", "provinceId": "p3" },
    { "id": "kavrepalanchok", "name": "Kavrepalanchok", "name_ne": "काभ्रेपलान्चोक", "provinceId": "p3" },
    { "id": "lalitpur", "name": "Lalitpur", "name_ne": "ललितपुर", "provinceId": "p3" },
    { "id": "makwanpur", "name": "Makwanpur", "name_ne": "मकवानपुर", "provinceId": "p3" },
    { "id": "nuwakot", "name": "Nuwakot", "name_ne": "नुवाकोट", "provinceId": "p3" },
    { "id": "rasuwa", "name": "Rasuwa", "name_ne": "रसुवा", "provinceId": "p3" },
    { "id": "ramechhap", "name": "Ramechhap", "name_ne": "रामेछाप", "provinceId": "p3" },
    { "id": "sindhuli", "name": "Sindhuli", "name_ne": "सिन्धुली", "provinceId": "p3" },
    { "id": "sindhupalchok", "name": "Sindhupalchok", "name_ne": "सिन्धुपाल्चोक", "provinceId": "p3" },
    { "id": "baglung", "name": "Baglung", "name_ne": "बागलुङ", "provinceId": "p4" },
    { "id": "gorkha", "name": "Gorkha", "name_ne": "गोरखा", "provinceId": "p4" },
    { "id": "kaski", "name": "Kaski", "name_ne": "कास्की", "provinceId": "p4" },
    { "id": "lamjung", "name": "Lamjung", "name_ne": "लमजुङ", "provinceId": "p4" },
    { "id": "manang", "name": "Manang", "name_ne": "मनाङ", "provinceId": "p4" },
    { "id": "mustang", "name": "Mustang", "name_ne": "मुस्ताङ", "provinceId": "p4" },
    { "id": "myagdi", "name": "Myagdi", "name_ne": "म्याग्दी", "provinceId": "p4" },
    { "id": "nawalpur", "name": "Nawalpur", "name_ne": "नवलपुर", "provinceId": "p4" },
    { "id": "parbat", "name": "Parbat", "name_ne": "पर्वत", "provinceId": "p4" },
    { "id": "syangja", "name": "Syangja", "name_ne": "स्याङ्जा", "provinceId": "p4" },
    { "id": "tanahun", "name": "Tanahun", "name_ne": "तनहुँ", "provinceId": "p4" },
    { "id": "arghakhanchi", "name": "Arghakhanchi", "name_ne": "अर्घाखाँची", "provinceId": "p5" },
    { "id": "banke", "name": "Banke", "name_ne": "बाँके", "provinceId": "p5" },
    { "id": "bardiya", "name": "Bardiya", "name_ne": "बर्दिया", "provinceId": "p5" },
    { "id": "dang", "name": "Dang", "name_ne": "दाङ", "provinceId": "p5" },
    { "id": "gulmi", "name": "Gulmi", "name_ne": "गुल्मी", "provinceId": "p5" },
    { "id": "kapilvastu", "name": "Kapilvastu", "name_ne": "कपिलवस्तु", "provinceId": "p5" },
    { "id": "parasi", "name": "Parasi", "name_ne": "परासी", "provinceId": "p5" },
    { "id": "palpa", "name": "Palpa", "name_ne": "पाल्पा", "provinceId": "p5" },
    { "id": "pyuthan", "name": "Pyuthan", "name_ne": "प्युठान", "provinceId": "p5" },
    { "id": "rolpa", "name": "Rolpa", "name_ne": "रोल्पा", "provinceId": "p5" },
    { "id": "eastern-rukum", "name": "Eastern Rukum", "name_ne": "पूर्वी रुकुम", "provinceId": "p5" },
    { "id": "rupandehi", "name": "Rupandehi", "name_ne": "रुपन्देही", "provinceId": "p5" },
    { "id": "dailekh", "name": "Dailekh", "name_ne": "दैलेख", "provinceId": "p6" },
    { "id": "dolpa", "name": "Dolpa", "name_ne": "डोल्पा", "provinceId": "p6" },
    { "id": "humla", "name": "Humla", "name_ne": "हुम्ला", "provinceId": "p6" },
    { "id": "jajarkot", "name": "Jajarkot", "name_ne": "जाजरकोट", "provinceId": "p6" },
    { "id": "jumla", "name": "Jumla", "name_ne": "जुम्ला", "provinceId": "p6" },
    { "id": "kalikot", "name": "Kalikot", "name_ne": "कालिकोट", "provinceId": "p6" },
    { "id": "mugu", "name": "Mugu", "name_ne": "मुगु", "provinceId": "p6" },
    { "id": "salyan", "name": "Salyan", "name_ne": "सल्यान", "provinceId": "p6" },
    { "id": "surkhet", "name": "Surkhet", "name_ne": "सुर्खेत", "provinceId": "p6" },
    { "id": "western-rukum", "name": "Western Rukum", "name_ne": "पश्चिम रुकुम", "provinceId": "p6" },
    { "id": "achham", "name": "Achham", "name_ne": "अछाम", "provinceId": "p7" },
    { "id": "baitadi", "name": "Baitadi", "name_ne": "बैतडी", "provinceId": "p7" },
    { "id": "bajhang", "name": "Bajhang", "name_ne": "बझाङ", "provinceId": "p7" },
    { "id": "bajura", "name": "Bajura", "name_ne": "बाजुरा", "provinceId": "p7" },
    { "id": "dadeldhura", "name": "Dadeldhura", "name_ne": "डडेलधुरा", "provinceId": "p7" },
    { "id": "darchula", "name": "Darchula", "name_ne": "दार्चुला", "provinceId": "p7" },
    { "id": "doti", "name": "Doti", "name_ne": "डोटी", "provinceId": "p7" },
    { "id": "kailali", "name": "Kailali", "name_ne": "कैलाली", "provinceId": "p7" },
    { "id": "kanchanpur", "name": "Kanchanpur", "name_ne": "कञ्चनपुर", "provinceId": "p7" }
  ],
  services: {"allServices":[{"id":"police","name":"Police","name_ne":"प्रहरी"},{"id":"ambulance","name":"Ambulance","name_ne":"एम्बुलेन्स"},{"id":"fire","name":"Fire Brigade","name_ne":"दमकल"},{"id":"hospital","name":"Hospitals","name_ne":"अस्पताल"},{"id":"women","name":"Women Helpline","name_ne":"महिला हेल्पलाइन"},{"id":"blood","name":"Blood Bank","name_ne":"ब्लड बैंक"},{"id":"disaster","name":"National Helplines","name_ne":"राष्ट्रिय हेल्पलाइन"}],"allContacts":{"k-p-1":{"name":"Police Control","name_ne":"प्रहरी कन्ट्रोल","phone":"100","address":"Nationwide"},"k-p-2":{"name":"Metropolitan Police, Ranipokhari","name_ne":"महानगरीय प्रहरी, रानीपोखरी","phone":"014228435","address":"Ranipokhari, Kathmandu","mapLink":"https://maps.google.com/?q=27.7083,85.3153"},"k-p-3":{"name":"Police Circle, Maharajganj","name_ne":"प्रहरी वृत्त, महाराजगञ्ज","phone":"014412780","address":"Maharajganj, Kathmandu","mapLink":"https://maps.google.com/?q=27.7358,85.3347"},"k-p-4":{"name":"Tourist Police","name_ne":"पर्यटक प्रहरी","phone":"1144","address":"Bhrikutimandap, Kathmandu"},"k-p-5":{"name":"Traffic Police Control","name_ne":"ट्राफिक प्रहरी कन्ट्रोल","phone":"103","address":"Nationwide"},"k-a-1":{"name":"Nepal Ambulance Service","name_ne":"नेपाल एम्बुलेन्स सेवा","phone":"102","address":"Nationwide","whatsapp":"9801234102"},"k-a-2":{"name":"Red Cross Ambulance, Kathmandu","name_ne":"रेडक्रस एम्बुलेन्स, काठमाडौं","phone":"014228094","address":"Pradarshani Marg, Kathmandu","mapLink":"https://maps.google.com/?q=27.7032,85.3190"},"k-a-3":{"name":"Bir Hospital Ambulance","name_ne":"वीर अस्पताल एम्बुलेन्स","phone":"014221988","address":"Kanti Path, Kathmandu","mapLink":"https://maps.google.com/?q=27.7045,85.3133"},"k-a-4":{"name":"Paropakar Ambulance Service","name_ne":"परोपकार एम्बुलेन्स सेवा","phone":"014251614","address":"Thapathali, Kathmandu","mapLink":"https://maps.google.com/?q=27.6938,85.3168"},"k-f-1":{"name":"Fire Brigade Control, Basantapur","name_ne":"जुद्ध बारुण यन्त्र, बसन्तपुर","phone":"101","address":"Basantapur, Kathmandu","mapLink":"https://maps.google.com/?q=27.7043,85.3056"},"k-f-2":{"name":"Fire Brigade, Bouddha","name_ne":"दमकल, बौद्ध","phone":"014470101","address":"Bouddha, Kathmandu"},"k-h-1":{"name":"Tribhuvan University Teaching Hospital","name_ne":"त्रिवि शिक्षण अस्पताल","phone":"014412303","address":"Maharajganj, Kathmandu","mapLink":"https://maps.google.com/?q=27.7352,85.3350"},"k-h-2":{"name":"Bir Hospital","name_ne":"वीर अस्पताल","phone":"014221119","address":"Kanti Path, Kathmandu","mapLink":"https://maps.google.com/?q=27.7045,85.3133"},"k-h-3":{"name":"Grande International Hospital","name_ne":"ग्रान्डी अन्तर्राष्ट्रिय अस्पताल","phone":"015159266","address":"Dhapasi, Kathmandu","mapLink":"https://maps.google.com/?q=27.7505,85.3315"},"k-h-4":{"name":"Norvic International Hospital","name_ne":"नर्भिक अन्तर्राष्ट्रिय अस्पताल","phone":"014258554","address":"Thapathali, Kathmandu","mapLink":"https://maps.google.com/?q=27.6926,85.3183"},"k-b-1":{"name":"Central Blood Transfusion Service","name_ne":"केन्द्रीय रक्तसञ्चार सेवा","phone":"014225344","address":"Kalimati, Kathmandu","bloodTypes":["A+","A-","B+","B-","AB+","AB-","O+","O-"],"mapLink":"https://maps.google.com/?q=27.6999,85.3005"},"bhaktapur-p-1":{"name":"District Police Office, Bhaktapur","name_ne":"जिल्ला प्रहरी कार्यालय, भक्तपुर","phone":"016614821","address":"Bhaktapur Durbar Square","mapLink":"https://maps.google.com/?q=27.6721,85.4282"},"bhaktapur-a-1":{"name":"Bhaktapur Red Cross","name_ne":"भक्तपुर रेडक्रस","phone":"016610747","address":"Siddhapokhari, Bhaktapur"},"bhaktapur-f-1":{"name":"Fire Brigade, Bhaktapur","name_ne":"दमकल, भक्तपुर","phone":"016611177","address":"Byasi, Bhaktapur"},"bhaktapur-h-1":{"name":"Bhaktapur Hospital","name_ne":"भक्तपुर अस्पताल","phone":"016610676","address":"Bhaktapur","mapLink":"https://maps.google.com/?q=27.6749,85.4217"},"bhaktapur-h-2":{"name":"Siddhi Memorial Hospital","name_ne":"सिद्धि मेमोरियल अस्पताल","phone":"016619382","address":"Bhaktapur"},"bhaktapur-b-1":{"name":"Bhaktapur Red Cross Blood Bank","name_ne":"भक्तपुर रेडक्रस ब्लड बैंक","phone":"016611661","address":"Siddhapokhari, Bhaktapur","bloodTypes":["A+","A-","B+","B-","AB+","AB-","O+","O-"],"mapLink":"https://maps.google.com/?q=27.6713,85.4206"},"lalitpur-p-1":{"name":"District Police Office, Lalitpur","name_ne":"जिल्ला प्रहरी कार्यालय, ललितपुर","phone":"015521207","address":"Mangalbazar, Lalitpur","mapLink":"https://maps.google.com/?q=27.6720,85.3248"},"lalitpur-a-1":{"name":"Patan Hospital Ambulance","name_ne":"पाटन अस्पताल एम्बुलेन्स","phone":"015522266","address":"Lagankhel, Lalitpur","mapLink":"https://maps.google.com/?q=27.6673,85.3250"},"lalitpur-f-1":{"name":"Fire Brigade, Lalitpur","name_ne":"दमकल, ललितपुर","phone":"015521177","address":"Pulchowk, Lalitpur"},"lalitpur-h-1":{"name":"Patan Hospital","name_ne":"पाटन अस्पताल","phone":"015522278","address":"Lagankhel, Lalitpur","mapLink":"https://maps.google.com/?q=27.6673,85.3250"},"lalitpur-h-2":{"name":"B & B Hospital","name_ne":"बि एण्ड बि अस्पताल","phone":"015533206","address":"Gwarko, Lalitpur","mapLink":"https://maps.google.com/?q=27.6708,85.3370"},"lalitpur-b-1":{"name":"Lalitpur Red Cross Blood Bank","name_ne":"ललितपुर रेडक्रस ब्लड बैंक","phone":"015521404","address":"Pulchowk, Lalitpur","bloodTypes":["A+","A-","B+","B-","AB+","AB-","O+","O-"]},"kaski-p-1":{"name":"District Police Office, Kaski","name_ne":"जिल्ला प्रहरी कार्यालय, कास्की","phone":"061520033","address":"Pokhara","mapLink":"https://maps.google.com/?q=28.2123,83.9815"},"kaski-a-1":{"name":"Gandaki Ambulance","name_ne":"गण्डकी एम्बुलेन्स","phone":"061520640","address":"Pokhara"},"kaski-f-1":{"name":"Pokhara Fire Brigade","name_ne":"पोखरा दमकल","phone":"061522222","address":"Pokhara"},"kaski-h-1":{"name":"Western Regional Hospital","name_ne":"पश्चिमान्चल क्षेत्रीय अस्पताल","phone":"061520067","address":"Ramghat, Pokhara","mapLink":"https://maps.google.com/?q=28.2100,83.9902"},"kaski-h-2":{"name":"Manipal Teaching Hospital","name_ne":"मणिपाल शिक्षण अस्पताल","phone":"061440600","address":"Phulbari, Pokhara","mapLink":"https://maps.google.com/?q=28.2323,84.0041"},"chitwan-p-1":{"name":"District Police Office, Chitwan","name_ne":"जिल्ला प्रहरी कार्यालय, चितवन","phone":"056520155","address":"Bharatpur"},"chitwan-a-1":{"name":"Chitwan Ambulance","name_ne":"चितवन एम्बुलेन्स","phone":"056520102","address":"Bharatpur"},"chitwan-f-1":{"name":"Bharatpur Fire Brigade","name_ne":"भरतपुर दमकल","phone":"056520177","address":"Bharatpur"},"chitwan-h-1":{"name":"Bharatpur Hospital","name_ne":"भरतपुर अस्पताल","phone":"056520148","address":"Bharatpur","mapLink":"https://maps.google.com/?q=27.6833,84.4333"},"morang-p-1":{"name":"District Police Office, Morang","name_ne":"जिल्ला प्रहरी कार्यालय, मोरङ","phone":"021523999","address":"Biratnagar"},"morang-a-1":{"name":"Biratnagar Ambulance","name_ne":"विराटनगर एम्बुलेन्स","phone":"021530102","address":"Biratnagar"},"morang-f-1":{"name":"Biratnagar Fire Brigade","name_ne":"विराटनगर दमकल","phone":"021471111","address":"Biratnagar"},"morang-h-1":{"name":"Koshi Hospital","name_ne":"कोशी अस्पताल","phone":"021471044","address":"Biratnagar","mapLink":"https://maps.google.com/?q=26.4645,87.2797"},"jhapa-p-1":{"name":"District Police Office, Jhapa","name_ne":"जिल्ला प्रहरी कार्यालय, झापा","phone":"023580133","address":"Bhadrapur"},"jhapa-a-1":{"name":"Jhapa Ambulance","name_ne":"झापा एम्बुलेन्स","phone":"023520102","address":"Birtamod"},"jhapa-f-1":{"name":"Bhadrapur Fire Brigade","name_ne":"भद्रपुर दमकल","phone":"023520101","address":"Bhadrapur"},"jhapa-h-1":{"name":"Mechi Zonal Hospital","name_ne":"मेची अञ्चल अस्पताल","phone":"023520333","address":"Bhadrapur"},"sunsari-p-1":{"name":"District Police Office, Sunsari","name_ne":"जिल्ला प्रहरी कार्यालय, सुनसरी","phone":"025520133","address":"Inaruwa"},"sunsari-a-1":{"name":"Sunsari Ambulance","name_ne":"सुनसरी एम्बुलेन्स","phone":"025560102","address":"Dharan"},"sunsari-f-1":{"name":"Dharan Fire Brigade","name_ne":"धरान दमकल","phone":"025520101","address":"Dharan"},"sunsari-h-1":{"name":"BP Koirala Institute of Health Sciences","name_ne":"बीपी कोइराला स्वास्थ्य विज्ञान प्रतिष्ठान","phone":"025525555","address":"Dharan","mapLink":"https://maps.google.com/?q=26.8188,87.2831"},"rupandehi-p-1":{"name":"District Police Office, Rupandehi","name_ne":"जिल्ला प्रहरी कार्यालय, रुपन्देही","phone":"071541199","address":"Bhairahawa"},"rupandehi-a-1":{"name":"Rupandehi Ambulance","name_ne":"रुपन्देही एम्बुलेन्स","phone":"071520102","address":"Butwal"},"rupandehi-f-1":{"name":"Butwal Fire Brigade","name_ne":"बुटवल दमकल","phone":"071540101","address":"Butwal"},"rupandehi-h-1":{"name":"Lumbini Zonal Hospital","name_ne":"लुम्बिनी अञ्चल अस्पताल","phone":"071540245","address":"Butwal"},"banke-p-1":{"name":"District Police Office, Banke","name_ne":"जिल्ला प्रहरी कार्यालय, बाँके","phone":"081520199","address":"Nepalgunj"},"banke-a-1":{"name":"Banke Ambulance","name_ne":"बाँके एम्बुलेन्स","phone":"081520102","address":"Nepalgunj"},"banke-f-1":{"name":"Nepalgunj Fire Brigade","name_ne":"नेपालगञ्ज दमकल","phone":"081520101","address":"Nepalgunj"},"banke-h-1":{"name":"Bheri Zonal Hospital","name_ne":"भेरी अञ्चल अस्पताल","phone":"081521367","address":"Nepalgunj"},"parsa-p-1":{"name":"District Police Office, Parsa","name_ne":"जिल्ला प्रहरी कार्यालय, पर्सा","phone":"051522133","address":"Birgunj"},"parsa-a-1":{"name":"Parsa Ambulance","name_ne":"पर्सा एम्बुलेन्स","phone":"051520102","address":"Birgunj"},"parsa-f-1":{"name":"Birgunj Fire Brigade","name_ne":"वीरगञ्ज दमकल","phone":"051522131","address":"Birgunj"},"parsa-h-1":{"name":"Narayani Sub-Regional Hospital","name_ne":"नारायणी उप-क्षेत्रीय अस्पताल","phone":"051521999","address":"Birgunj"},"dhanusha-p-1":{"name":"District Police Office, Dhanusha","name_ne":"जिल्ला प्रहरी कार्यालय, धनुषा","phone":"041520133","address":"Janakpur"},"dhanusha-a-1":{"name":"Dhanusha Ambulance","name_ne":"धनुषा एम्बुलेन्स","phone":"041520102","address":"Janakpur"},"dhanusha-f-1":{"name":"Janakpur Fire Brigade","name_ne":"जनकपुर दमकल","phone":"041520101","address":"Janakpur"},"dhanusha-h-1":{"name":"Janakpur Zonal Hospital","name_ne":"जनकपुर अञ्चल अस्पताल","phone":"041520131","address":"Janakpur"},"kailali-p-1":{"name":"District Police Office, Kailali","name_ne":"जिल्ला प्रहरी कार्यालय, कैलाली","phone":"091521200","address":"Dhangadhi"},"kailali-a-1":{"name":"Kailali Ambulance","name_ne":"कैलाली एम्बुलेन्स","phone":"091520102","address":"Dhangadhi"},"kailali-f-1":{"name":"Dhangadhi Fire Brigade","name_ne":"धनगढी दमकल","phone":"091521111","address":"Dhangadhi"},"kailali-h-1":{"name":"Seti Zonal Hospital","name_ne":"सेती अञ्चल अस्पताल","phone":"091521215","address":"Dhangadhi"},"surkhet-p-1":{"name":"District Police Office, Surkhet","name_ne":"जिल्ला प्रहरी कार्यालय, सुर्खेत","phone":"083520133","address":"Birendranagar"},"surkhet-a-1":{"name":"Surkhet Ambulance","name_ne":"सुर्खेत एम्बुलेन्स","phone":"083520102","address":"Birendranagar"},"surkhet-f-1":{"name":"Birendranagar Fire Brigade","name_ne":"वीरेन्द्रनगर दमकल","phone":"083520101","address":"Birendranagar"},"surkhet-h-1":{"name":"Mid-Western Regional Hospital","name_ne":"मध्य-पश्चिमान्चल क्षेत्रीय अस्पताल","phone":"083521367","address":"Birendranagar"},"makwanpur-p-1":{"name":"District Police Office, Makwanpur","name_ne":"जिल्ला प्रहरी कार्यालय, मकवानपुर","phone":"057520133","address":"Hetauda"},"makwanpur-a-1":{"name":"Makwanpur Ambulance","name_ne":"मकवानपुर एम्बुलेन्स","phone":"057520102","address":"Hetauda"},"makwanpur-f-1":{"name":"Hetauda Fire Brigade","name_ne":"हेटौंडा दमकल","phone":"057520101","address":"Hetauda"},"makwanpur-h-1":{"name":"Hetauda Hospital","name_ne":"हेटौंडा अस्पताल","phone":"057520303","address":"Hetauda"},"bhojpur-p-1":{"name":"District Police Office, Bhojpur","name_ne":"जिल्ला प्रहरी कार्यालय, भोजपुर","phone":"029-420133","address":"Bhojpur"},"bhojpur-h-1":{"name":"District Hospital, Bhojpur","name_ne":"जिल्ला अस्पताल, भोजपुर","phone":"029-420144","address":"Bhojpur"},"dhankuta-p-1":{"name":"District Police Office, Dhankuta","name_ne":"जिल्ला प्रहरी कार्यालय, धनकुटा","phone":"026-520133","address":"Dhankuta"},"dhankuta-h-1":{"name":"District Hospital, Dhankuta","name_ne":"जिल्ला अस्पताल, धनकुटा","phone":"026-520123","address":"Dhankuta"},"ilam-p-1":{"name":"District Police Office, Ilam","name_ne":"जिल्ला प्रहरी कार्यालय, इलाम","phone":"027-520133","address":"Ilam"},"ilam-h-1":{"name":"District Hospital, Ilam","name_ne":"जिल्ला अस्पताल, इलाम","phone":"027-520111","address":"Ilam"},"khotang-p-1":{"name":"District Police Office, Khotang","name_ne":"जिल्ला प्रहरी कार्यालय, खोटाङ","phone":"036-420133","address":"Diktel"},"khotang-h-1":{"name":"District Hospital, Khotang","name_ne":"जिल्ला अस्पताल, खोटाङ","phone":"036-420124","address":"Diktel"},"okhaldhunga-p-1":{"name":"District Police Office, Okhaldhunga","name_ne":"जिल्ला प्रहरी कार्यालय, ओखलढुङ्गा","phone":"037-520133","address":"Okhaldhunga"},"okhaldhunga-h-1":{"name":"District Hospital, Okhaldhunga","name_ne":"जिल्ला अस्पताल, ओखलढुङ्गा","phone":"037-520134","address":"Okhaldhunga"},"panchthar-p-1":{"name":"District Police Office, Panchthar","name_ne":"जिल्ला प्रहरी कार्यालय, पाँचथर","phone":"024-520133","address":"Phidim"},"panchthar-h-1":{"name":"District Hospital, Panchthar","name_ne":"जिल्ला अस्पताल, पाँचथर","phone":"024-520111","address":"Phidim"},"sankhuwasabha-p-1":{"name":"District Police Office, Sankhuwasabha","name_ne":"जिल्ला प्रहरी कार्यालय, सङ्खुवासभा","phone":"029-560133","address":"Khandbari"},"sankhuwasabha-h-1":{"name":"District Hospital, Sankhuwasabha","name_ne":"जिल्ला अस्पताल, सङ्खुवासभा","phone":"029-560124","address":"Khandbari"},"solukhumbu-p-1":{"name":"District Police Office, Solukhumbu","name_ne":"जिल्ला प्रहरी कार्यालय, सोलुखुम्बु","phone":"038-520133","address":"Salleri"},"solukhumbu-h-1":{"name":"District Hospital, Solukhumbu","name_ne":"जिल्ला अस्पताल, सोलुखुम्बु","phone":"038-520124","address":"Salleri"},"taplejung-p-1":{"name":"District Police Office, Taplejung","name_ne":"जिल्ला प्रहरी कार्यालय, ताप्लेजुङ","phone":"024-460133","address":"Phungling"},"taplejung-h-1":{"name":"District Hospital, Taplejung","name_ne":"जिल्ला अस्पताल, ताप्लेजुङ","phone":"024-460111","address":"Phungling"},"terhathum-p-1":{"name":"District Police Office, Terhathum","name_ne":"जिल्ला प्रहरी कार्यालय, तेह्रथुम","phone":"026-460133","address":"Myanglung"},"terhathum-h-1":{"name":"District Hospital, Terhathum","name_ne":"जिल्ला अस्पताल, तेह्रथुम","phone":"026-460111","address":"Myanglung"},"udayapur-p-1":{"name":"District Police Office, Udayapur","name_ne":"जिल्ला प्रहरी कार्यालय, उदयपुर","phone":"035-420133","address":"Gaighat"},"udayapur-h-1":{"name":"District Hospital, Udayapur","name_ne":"जिल्ला अस्पताल, उदयपुर","phone":"035-420144","address":"Gaighat"},"bara-p-1":{"name":"District Police Office, Bara","name_ne":"जिल्ला प्रहरी कार्यालय, बारा","phone":"053-520133","address":"Kalaiya"},"bara-h-1":{"name":"District Hospital, Bara","name_ne":"जिल्ला अस्पताल, बारा","phone":"053-520134","address":"Kalaiya"},"mahottari-p-1":{"name":"District Police Office, Mahottari","name_ne":"जिल्ला प्रहरी कार्यालय, महोत्तरी","phone":"044-520133","address":"Jaleshwar"},"mahottari-h-1":{"name":"District Hospital, Mahottari","name_ne":"जिल्ला अस्पताल, महोत्तरी","phone":"044-520124","address":"Jaleshwar"},"rautahat-p-1":{"name":"District Police Office, Rautahat","name_ne":"जिल्ला प्रहरी कार्यालय, रौतहट","phone":"055-520133","address":"Gaur"},"rautahat-h-1":{"name":"District Hospital, Rautahat","name_ne":"जिल्ला अस्पताल, रौतहट","phone":"055-520124","address":"Gaur"},"saptari-p-1":{"name":"District Police Office, Saptari","name_ne":"जिल्ला प्रहरी कार्यालय, सप्तरी","phone":"031-520133","address":"Rajbiraj"},"saptari-h-1":{"name":"Gajendra Narayan Singh Hospital","name_ne":"गजेन्द्र नारायण सिंह अस्पताल","phone":"031-520134","address":"Rajbiraj"},"sarlahi-p-1":{"name":"District Police Office, Sarlahi","name_ne":"जिल्ला प्रहरी कार्यालय, सर्लाही","phone":"046-520133","address":"Malangwa"},"sarlahi-h-1":{"name":"District Hospital, Sarlahi","name_ne":"जिल्ला अस्पताल, सर्लाही","phone":"046-520124","address":"Malangwa"},"siraha-p-1":{"name":"District Police Office, Siraha","name_ne":"जिल्ला प्रहरी कार्यालय, सिराहा","phone":"033-520133","address":"Siraha"},"siraha-h-1":{"name":"District Hospital, Siraha","name_ne":"जिल्ला अस्पताल, सिराहा","phone":"033-520124","address":"Siraha"},"dhading-p-1":{"name":"District Police Office, Dhading","name_ne":"जिल्ला प्रहरी कार्यालय, धादिङ","phone":"010-520133","address":"Dhading Besi"},"dhading-h-1":{"name":"District Hospital, Dhading","name_ne":"जिल्ला अस्पताल, धादिङ","phone":"010-520111","address":"Dhading Besi"},"dolakha-p-1":{"name":"District Police Office, Dolakha","name_ne":"जिल्ला प्रहरी कार्यालय, दोलखा","phone":"049-421133","address":"Charikot"},"dolakha-h-1":{"name":"District Hospital, Dolakha","name_ne":"जिल्ला अस्पताल, दोलखा","phone":"049-421125","address":"Charikot"},"kavrepalanchok-p-1":{"name":"District Police Office, Kavrepalanchok","name_ne":"जिल्ला प्रहरी कार्यालय, काभ्रेपलान्चोक","phone":"011-460133","address":"Dhulikhel"},"kavrepalanchok-h-1":{"name":"Dhulikhel Hospital","name_ne":"धुलिखेल अस्पताल","phone":"011-490497","address":"Dhulikhel"},"nuwakot-p-1":{"name":"District Police Office, Nuwakot","name_ne":"जिल्ला प्रहरी कार्यालय, नुवाकोट","phone":"010-560133","address":"Bidur"},"nuwakot-h-1":{"name":"District Hospital, Nuwakot","name_ne":"जिल्ला अस्पताल, नुवाकोट","phone":"010-560124","address":"Trishuli"},"rasuwa-p-1":{"name":"District Police Office, Rasuwa","name_ne":"जिल्ला प्रहरी कार्यालय, रसुवा","phone":"010-540133","address":"Dhunche"},"rasuwa-h-1":{"name":"District Hospital, Rasuwa","name_ne":"जिल्ला अस्पताल, रसुवा","phone":"010-540111","address":"Dhunche"},"ramechhap-p-1":{"name":"District Police Office, Ramechhap","name_ne":"जिल्ला प्रहरी कार्यालय, रामेछाप","phone":"048-540133","address":"Manthali"},"ramechhap-h-1":{"name":"District Hospital, Ramechhap","name_ne":"जिल्ला अस्पताल, रामेछाप","phone":"048-540124","address":"Manthali"},"sindhuli-p-1":{"name":"District Police Office, Sindhuli","name_ne":"जिल्ला प्रहरी कार्यालय, सिन्धुली","phone":"047-520133","address":"Sindhulimadi"},"sindhuli-h-1":{"name":"District Hospital, Sindhuli","name_ne":"जिल्ला अस्पताल, सिन्धुली","phone":"047-520124","address":"Sindhulimadi"},"sindhupalchok-p-1":{"name":"District Police Office, Sindhupalchok","name_ne":"जिल्ला प्रहरी कार्यालय, सिन्धुपाल्चोक","phone":"011-480133","address":"Chautara"},"sindhupalchok-h-1":{"name":"District Hospital, Sindhupalchok","name_ne":"जिल्ला अस्पताल, सिन्धुपाल्चोक","phone":"011-480124","address":"Chautara"},"baglung-p-1":{"name":"District Police Office, Baglung","name_ne":"जिल्ला प्रहरी कार्यालय, बागलुङ","phone":"068-520133","address":"Baglung"},"baglung-h-1":{"name":"Dhaulagiri Zonal Hospital","name_ne":"धौलागिरी अञ्चल अस्पताल","phone":"068-520134","address":"Baglung"},"gorkha-p-1":{"name":"District Police Office, Gorkha","name_ne":"जिल्ला प्रहरी कार्यालय, गोरखा","phone":"064-420133","address":"Gorkha"},"gorkha-h-1":{"name":"District Hospital, Gorkha","name_ne":"जिल्ला अस्पताल, गोरखा","phone":"064-420124","address":"Gorkha"},"lamjung-p-1":{"name":"District Police Office, Lamjung","name_ne":"जिल्ला प्रहरी कार्यालय, लमजुङ","phone":"066-520133","address":"Besisahar"},"lamjung-h-1":{"name":"District Hospital, Lamjung","name_ne":"जिल्ला अस्पताल, लमजुङ","phone":"066-520124","address":"Besisahar"},"manang-p-1":{"name":"District Police Office, Manang","name_ne":"जिल्ला प्रहरी कार्यालय, मनाङ","phone":"066-440133","address":"Chame"},"manang-h-1":{"name":"District Hospital, Manang","name_ne":"जिल्ला अस्पताल, मनाङ","phone":"066-440111","address":"Chame"},"mustang-p-1":{"name":"District Police Office, Mustang","name_ne":"जिल्ला प्रहरी कार्यालय, मुस्ताङ","phone":"069-440133","address":"Jomsom"},"mustang-h-1":{"name":"District Hospital, Mustang","name_ne":"जिल्ला अस्पताल, मुस्ताङ","phone":"069-440111","address":"Jomsom"},"myagdi-p-1":{"name":"District Police Office, Myagdi","name_ne":"जिल्ला प्रहरी कार्यालय, म्याग्दी","phone":"069-520133","address":"Beni"},"myagdi-h-1":{"name":"District Hospital, Myagdi","name_ne":"जिल्ला अस्पताल, म्याग्दी","phone":"069-520124","address":"Beni"},"nawalpur-p-1":{"name":"District Police Office, Nawalpur","name_ne":"जिल्ला प्रहरी कार्यालय, नवलपुर","phone":"078-540133","address":"Kawasoti"},"nawalpur-h-1":{"name":"Madhyabindu District Hospital","name_ne":"मध्यबिन्दु जिल्ला अस्पताल","phone":"078-540124","address":"Kawasoti"},"parbat-p-1":{"name":"District Police Office, Parbat","name_ne":"जिल्ला प्रहरी कार्यालय, पर्वत","phone":"067-421133","address":"Kusma"},"parbat-h-1":{"name":"District Hospital, Parbat","name_ne":"जिल्ला अस्पताल, पर्वत","phone":"067-421124","address":"Kusma"},"syangja-p-1":{"name":"District Police Office, Syangja","name_ne":"जिल्ला प्रहरी कार्यालय, स्याङ्जा","phone":"063-420133","address":"Syangja"},"syangja-h-1":{"name":"District Hospital, Syangja","name_ne":"जिल्ला अस्पताल, स्याङ्जा","phone":"063-420124","address":"Syangja"},"tanahun-p-1":{"name":"District Police Office, Tanahun","name_ne":"जिल्ला प्रहरी कार्यालय, तनहुँ","phone":"065-560133","address":"Damauli"},"tanahun-h-1":{"name":"District Hospital, Tanahun","name_ne":"जिल्ला अस्पताल, तनहुँ","phone":"065-560124","address":"Damauli"},"arghakhanchi-p-1":{"name":"District Police Office, Arghakhanchi","name_ne":"जिल्ला प्रहरी कार्यालय, अर्घाखाँची","phone":"077-420133","address":"Sandhikharka"},"arghakhanchi-h-1":{"name":"District Hospital, Arghakhanchi","name_ne":"जिल्ला अस्पताल, अर्घाखाँची","phone":"077-420124","address":"Sandhikharka"},"bardiya-p-1":{"name":"District Police Office, Bardiya","name_ne":"जिल्ला प्रहरी कार्यालय, बर्दिया","phone":"084-420133","address":"Gulariya"},"bardiya-h-1":{"name":"District Hospital, Bardiya","name_ne":"जिल्ला अस्पताल, बर्दिया","phone":"084-420124","address":"Gulariya"},"dang-p-1":{"name":"District Police Office, Dang","name_ne":"जिल्ला प्रहरी कार्यालय, दाङ","phone":"082-560133","address":"Ghorahi"},"dang-h-1":{"name":"Rapti Sub-Regional Hospital","name_ne":"राप्ती उप-क्षेत्रीय अस्पताल","phone":"082-560134","address":"Ghorahi"},"gulmi-p-1":{"name":"District Police Office, Gulmi","name_ne":"जिल्ला प्रहरी कार्यालय, गुल्मी","phone":"079-520133","address":"Tamghas"},"gulmi-h-1":{"name":"District Hospital, Gulmi","name_ne":"जिल्ला अस्पताल, गुल्मी","phone":"079-520124","address":"Tamghas"},"kapilvastu-p-1":{"name":"District Police Office, Kapilvastu","name_ne":"जिल्ला प्रहरी कार्यालय, कपिलवस्तु","phone":"076-560133","address":"Taulihawa"},"kapilvastu-h-1":{"name":"District Hospital, Kapilvastu","name_ne":"जिल्ला अस्पताल, कपिलवस्तु","phone":"076-560124","address":"Taulihawa"},"parasi-p-1":{"name":"District Police Office, Parasi","name_ne":"जिल्ला प्रहरी कार्यालय, परासी","phone":"078-520133","address":"Ramgram"},"parasi-h-1":{"name":"District Hospital, Parasi","name_ne":"जिल्ला अस्पताल, परासी","phone":"078-520124","address":"Ramgram"},"palpa-p-1":{"name":"District Police Office, Palpa","name_ne":"जिल्ला प्रहरी कार्यालय, पाल्पा","phone":"075-520133","address":"Tansen"},"palpa-h-1":{"name":"Lumbini Medical College","name_ne":"लुम्बिनी मेडिकल कलेज","phone":"075-520124","address":"Tansen"},"pyuthan-p-1":{"name":"District Police Office, Pyuthan","name_ne":"जिल्ला प्रहरी कार्यालय, प्युठान","phone":"086-420133","address":"Pyuthan"},"pyuthan-h-1":{"name":"District Hospital, Pyuthan","name_ne":"जिल्ला अस्पताल, प्युठान","phone":"086-420124","address":"Pyuthan"},"rolpa-p-1":{"name":"District Police Office, Rolpa","name_ne":"जिल्ला प्रहरी कार्यालय, रोल्पा","phone":"086-440133","address":"Liwang"},"rolpa-h-1":{"name":"District Hospital, Rolpa","name_ne":"जिल्ला अस्पताल, रोल्पा","phone":"086-440124","address":"Liwang"},"eastern-rukum-p-1":{"name":"District Police Office, Eastern Rukum","name_ne":"जिल्ला प्रहरी कार्यालय, पूर्वी रुकुम","phone":"088-400133","address":"Rukumkot"},"eastern-rukum-h-1":{"name":"District Hospital, Eastern Rukum","name_ne":"जिल्ला अस्पताल, पूर्वी रुकुम","phone":"088-400111","address":"Rukumkot"},"dailekh-p-1":{"name":"District Police Office, Dailekh","name_ne":"जिल्ला प्रहरी कार्यालय, दैलेख","phone":"089-420133","address":"Dailekh"},"dailekh-h-1":{"name":"District Hospital, Dailekh","name_ne":"जिल्ला अस्पताल, दैलेख","phone":"089-420124","address":"Dailekh"},"dolpa-p-1":{"name":"District Police Office, Dolpa","name_ne":"जिल्ला प्रहरी कार्यालय, डोल्पा","phone":"087-550133","address":"Dunai"},"dolpa-h-1":{"name":"District Hospital, Dolpa","name_ne":"जिल्ला अस्पताल, डोल्पा","phone":"087-550111","address":"Dunai"},"humla-p-1":{"name":"District Police Office, Humla","name_ne":"जिल्ला प्रहरी कार्यालय, हुम्ला","phone":"087-680133","address":"Simikot"},"humla-h-1":{"name":"District Hospital, Humla","name_ne":"जिल्ला अस्पताल, हुम्ला","phone":"087-680111","address":"Simikot"},"jajarkot-p-1":{"name":"District Police Office, Jajarkot","name_ne":"जिल्ला प्रहरी कार्यालय, जाजरकोट","phone":"089-430133","address":"Khalanga"},"jajarkot-h-1":{"name":"District Hospital, Jajarkot","name_ne":"जिल्ला अस्पताल, जाजरकोट","phone":"089-430124","address":"Khalanga"},"jumla-p-1":{"name":"District Police Office, Jumla","name_ne":"जिल्ला प्रहरी कार्यालय, जुम्ला","phone":"087-520133","address":"Chandannath"},"jumla-h-1":{"name":"Karnali Academy of Health Sciences","name_ne":"कर्णाली स्वास्थ्य विज्ञान प्रतिष्ठान","phone":"087-520355","address":"Chandannath"},"kalikot-p-1":{"name":"District Police Office, Kalikot","name_ne":"जिल्ला प्रहरी कार्यालय, कालिकोट","phone":"087-440133","address":"Manma"},"kalikot-h-1":{"name":"District Hospital, Kalikot","name_ne":"जिल्ला अस्पताल, कालिकोट","phone":"087-440124","address":"Manma"},"mugu-p-1":{"name":"District Police Office, Mugu","name_ne":"जिल्ला प्रहरी कार्यालय, मुगु","phone":"087-460133","address":"Gamgadhi"},"mugu-h-1":{"name":"District Hospital, Mugu","name_ne":"जिल्ला अस्पताल, मुगु","phone":"087-460111","address":"Gamgadhi"},"salyan-p-1":{"name":"District Police Office, Salyan","name_ne":"जिल्ला प्रहरी कार्यालय, सल्यान","phone":"088-520133","address":"Salyan"},"salyan-h-1":{"name":"District Hospital, Salyan","name_ne":"जिल्ला अस्पताल, सल्यान","phone":"088-520124","address":"Salyan"},"western-rukum-p-1":{"name":"District Police Office, Western Rukum","name_ne":"जिल्ला प्रहरी कार्यालय, पश्चिम रुकुम","phone":"088-530133","address":"Musikot"},"western-rukum-h-1":{"name":"District Hospital, Western Rukum","name_ne":"जिल्ला अस्पताल, पश्चिम रुकुम","phone":"088-530124","address":"Musikot"},"achham-p-1":{"name":"District Police Office, Achham","name_ne":"जिल्ला प्रहरी कार्यालय, अछाम","phone":"097-521133","address":"Mangalsen"},"achham-h-1":{"name":"District Hospital, Achham","name_ne":"जिल्ला अस्पताल, अछाम","phone":"097-521124","address":"Mangalsen"},"baitadi-p-1":{"name":"District Police Office, Baitadi","name_ne":"जिल्ला प्रहरी कार्यालय, बैतडी","phone":"095-520133","address":"Baitadi"},"baitadi-h-1":{"name":"District Hospital, Baitadi","name_ne":"जिल्ला अस्पताल, बैतडी","phone":"095-520124","address":"Baitadi"},"bajhang-p-1":{"name":"District Police Office, Bajhang","name_ne":"जिल्ला प्रहरी कार्यालय, बझाङ","phone":"092-421133","address":"Chainpur"},"bajhang-h-1":{"name":"District Hospital, Bajhang","name_ne":"जिल्ला अस्पताल, बझाङ","phone":"092-421124","address":"Chainpur"},"bajura-p-1":{"name":"District Police Office, Bajura","name_ne":"जिल्ला प्रहरी कार्यालय, बाजुरा","phone":"097-541133","address":"Martadi"},"bajura-h-1":{"name":"District Hospital, Bajura","name_ne":"जिल्ला अस्पताल, बाजुरा","phone":"097-541124","address":"Martadi"},"dadeldhura-p-1":{"name":"District Police Office, Dadeldhura","name_ne":"जिल्ला प्रहरी कार्यालय, डडेलधुरा","phone":"096-420133","address":"Dadeldhura"},"dadeldhura-h-1":{"name":"Dadeldhura Hospital","name_ne":"डडेलधुरा अस्पताल","phone":"096-420124","address":"Dadeldhura"},"darchula-p-1":{"name":"District Police Office, Darchula","name_ne":"जिल्ला प्रहरी कार्यालय, दार्चुला","phone":"093-420133","address":"Darchula"},"darchula-h-1":{"name":"District Hospital, Darchula","name_ne":"जिल्ला अस्पताल, दार्चुला","phone":"093-420124","address":"Darchula"},"doti-p-1":{"name":"District Police Office, Doti","name_ne":"जिल्ला प्रहरी कार्यालय, डोटी","phone":"094-420133","address":"Dipayal"},"doti-h-1":{"name":"District Hospital, Doti","name_ne":"जिल्ला अस्पताल, डोटी","phone":"094-420124","address":"Dipayal"},"kanchanpur-p-1":{"name":"District Police Office, Kanchanpur","name_ne":"जिल्ला प्रहरी कार्यालय, कञ्चनपुर","phone":"099-521133","address":"Mahendranagar"},"kanchanpur-h-1":{"name":"Mahakali Zonal Hospital","name_ne":"महाकाली अञ्चल अस्पताल","phone":"099-521235","address":"Mahendranagar"}}},
  contacts: {"kathmandu":[{"serviceId":"police","contactId":"k-p-1"},{"serviceId":"police","contactId":"k-p-2"},{"serviceId":"police","contactId":"k-p-3"},{"serviceId":"police","contactId":"k-p-4"},{"serviceId":"police","contactId":"k-p-5"},{"serviceId":"ambulance","contactId":"k-a-1"},{"serviceId":"ambulance","contactId":"k-a-2"},{"serviceId":"ambulance","contactId":"k-a-3"},{"serviceId":"ambulance","contactId":"k-a-4"},{"serviceId":"fire","contactId":"k-f-1"},{"serviceId":"fire","contactId":"k-f-2"},{"serviceId":"hospital","contactId":"k-h-1"},{"serviceId":"hospital","contactId":"k-h-2"},{"serviceId":"hospital","contactId":"k-h-3"},{"serviceId":"hospital","contactId":"k-h-4"},{"serviceId":"blood","contactId":"k-b-1"}],"bhaktapur":[{"serviceId":"police","contactId":"bhaktapur-p-1"},{"serviceId":"ambulance","contactId":"bhaktapur-a-1"},{"serviceId":"fire","contactId":"bhaktapur-f-1"},{"serviceId":"hospital","contactId":"bhaktapur-h-1"},{"serviceId":"hospital","contactId":"bhaktapur-h-2"},{"serviceId":"blood","contactId":"bhaktapur-b-1"}],"lalitpur":[{"serviceId":"police","contactId":"lalitpur-p-1"},{"serviceId":"ambulance","contactId":"lalitpur-a-1"},{"serviceId":"fire","contactId":"lalitpur-f-1"},{"serviceId":"hospital","contactId":"lalitpur-h-1"},{"serviceId":"hospital","contactId":"lalitpur-h-2"},{"serviceId":"blood","contactId":"lalitpur-b-1"}],"kaski":[{"serviceId":"police","contactId":"kaski-p-1"},{"serviceId":"ambulance","contactId":"kaski-a-1"},{"serviceId":"fire","contactId":"kaski-f-1"},{"serviceId":"hospital","contactId":"kaski-h-1"},{"serviceId":"hospital","contactId":"kaski-h-2"}],"chitwan":[{"serviceId":"police","contactId":"chitwan-p-1"},{"serviceId":"ambulance","contactId":"chitwan-a-1"},{"serviceId":"fire","contactId":"chitwan-f-1"},{"serviceId":"hospital","contactId":"chitwan-h-1"}],"morang":[{"serviceId":"police","contactId":"morang-p-1"},{"serviceId":"ambulance","contactId":"morang-a-1"},{"serviceId":"fire","contactId":"morang-f-1"},{"serviceId":"hospital","contactId":"morang-h-1"}],"jhapa":[{"serviceId":"police","contactId":"jhapa-p-1"},{"serviceId":"ambulance","contactId":"jhapa-a-1"},{"serviceId":"fire","contactId":"jhapa-f-1"},{"serviceId":"hospital","contactId":"jhapa-h-1"}],"sunsari":[{"serviceId":"police","contactId":"sunsari-p-1"},{"serviceId":"ambulance","contactId":"sunsari-a-1"},{"serviceId":"fire","contactId":"sunsari-f-1"},{"serviceId":"hospital","contactId":"sunsari-h-1"}],"rupandehi":[{"serviceId":"police","contactId":"rupandehi-p-1"},{"serviceId":"ambulance","contactId":"rupandehi-a-1"},{"serviceId":"fire","contactId":"rupandehi-f-1"},{"serviceId":"hospital","contactId":"rupandehi-h-1"}],"banke":[{"serviceId":"police","contactId":"banke-p-1"},{"serviceId":"ambulance","contactId":"banke-a-1"},{"serviceId":"fire","contactId":"banke-f-1"},{"serviceId":"hospital","contactId":"banke-h-1"}],"parsa":[{"serviceId":"police","contactId":"parsa-p-1"},{"serviceId":"ambulance","contactId":"parsa-a-1"},{"serviceId":"fire","contactId":"parsa-f-1"},{"serviceId":"hospital","contactId":"parsa-h-1"}],"dhanusha":[{"serviceId":"police","contactId":"dhanusha-p-1"},{"serviceId":"ambulance","contactId":"dhanusha-a-1"},{"serviceId":"fire","contactId":"dhanusha-f-1"},{"serviceId":"hospital","contactId":"dhanusha-h-1"}],"kailali":[{"serviceId":"police","contactId":"kailali-p-1"},{"serviceId":"ambulance","contactId":"kailali-a-1"},{"serviceId":"fire","contactId":"kailali-f-1"},{"serviceId":"hospital","contactId":"kailali-h-1"}],"surkhet":[{"serviceId":"police","contactId":"surkhet-p-1"},{"serviceId":"ambulance","contactId":"surkhet-a-1"},{"serviceId":"fire","contactId":"surkhet-f-1"},{"serviceId":"hospital","contactId":"surkhet-h-1"}],"makwanpur":[{"serviceId":"police","contactId":"makwanpur-p-1"},{"serviceId":"ambulance","contactId":"makwanpur-a-1"},{"serviceId":"fire","contactId":"makwanpur-f-1"},{"serviceId":"hospital","contactId":"makwanpur-h-1"}],"bhojpur":[{"serviceId":"police","contactId":"bhojpur-p-1"},{"serviceId":"hospital","contactId":"bhojpur-h-1"}],"dhankuta":[{"serviceId":"police","contactId":"dhankuta-p-1"},{"serviceId":"hospital","contactId":"dhankuta-h-1"}],"ilam":[{"serviceId":"police","contactId":"ilam-p-1"},{"serviceId":"hospital","contactId":"ilam-h-1"}],"khotang":[{"serviceId":"police","contactId":"khotang-p-1"},{"serviceId":"hospital","contactId":"khotang-h-1"}],"okhaldhunga":[{"serviceId":"police","contactId":"okhaldhunga-p-1"},{"serviceId":"hospital","contactId":"okhaldhunga-h-1"}],"panchthar":[{"serviceId":"police","contactId":"panchthar-p-1"},{"serviceId":"hospital","contactId":"panchthar-h-1"}],"sankhuwasabha":[{"serviceId":"police","contactId":"sankhuwasabha-p-1"},{"serviceId":"hospital","contactId":"sankhuwasabha-h-1"}],"solukhumbu":[{"serviceId":"police","contactId":"solukhumbu-p-1"},{"serviceId":"hospital","contactId":"solukhumbu-h-1"}],"taplejung":[{"serviceId":"police","contactId":"taplejung-p-1"},{"serviceId":"hospital","contactId":"taplejung-h-1"}],"terhathum":[{"serviceId":"police","contactId":"terhathum-p-1"},{"serviceId":"hospital","contactId":"terhathum-h-1"}],"udayapur":[{"serviceId":"police","contactId":"udayapur-p-1"},{"serviceId":"hospital","contactId":"udayapur-h-1"}],"bara":[{"serviceId":"police","contactId":"bara-p-1"},{"serviceId":"hospital","contactId":"bara-h-1"}],"mahottari":[{"serviceId":"police","contactId":"mahottari-p-1"},{"serviceId":"hospital","contactId":"mahottari-h-1"}],"rautahat":[{"serviceId":"police","contactId":"rautahat-p-1"},{"serviceId":"hospital","contactId":"rautahat-h-1"}],"saptari":[{"serviceId":"police","contactId":"saptari-p-1"},{"serviceId":"hospital","contactId":"saptari-h-1"}],"sarlahi":[{"serviceId":"police","contactId":"sarlahi-p-1"},{"serviceId":"hospital","contactId":"sarlahi-h-1"}],"siraha":[{"serviceId":"police","contactId":"siraha-p-1"},{"serviceId":"hospital","contactId":"siraha-h-1"}],"dhading":[{"serviceId":"police","contactId":"dhading-p-1"},{"serviceId":"hospital","contactId":"dhading-h-1"}],"dolakha":[{"serviceId":"police","contactId":"dolakha-p-1"},{"serviceId":"hospital","contactId":"dolakha-h-1"}],"kavrepalanchok":[{"serviceId":"police","contactId":"kavrepalanchok-p-1"},{"serviceId":"hospital","contactId":"kavrepalanchok-h-1"}],"nuwakot":[{"serviceId":"police","contactId":"nuwakot-p-1"},{"serviceId":"hospital","contactId":"nuwakot-h-1"}],"rasuwa":[{"serviceId":"police","contactId":"rasuwa-p-1"},{"serviceId":"hospital","contactId":"rasuwa-h-1"}],"ramechhap":[{"serviceId":"police","contactId":"ramechhap-p-1"},{"serviceId":"hospital","contactId":"ramechhap-h-1"}],"sindhuli":[{"serviceId":"police","contactId":"sindhuli-p-1"},{"serviceId":"hospital","contactId":"sindhuli-h-1"}],"sindhupalchok":[{"serviceId":"police","contactId":"sindhupalchok-p-1"},{"serviceId":"hospital","contactId":"sindhupalchok-h-1"}],"baglung":[{"serviceId":"police","contactId":"baglung-p-1"},{"serviceId":"hospital","contactId":"baglung-h-1"}],"gorkha":[{"serviceId":"police","contactId":"gorkha-p-1"},{"serviceId":"hospital","contactId":"gorkha-h-1"}],"lamjung":[{"serviceId":"police","contactId":"lamjung-p-1"},{"serviceId":"hospital","contactId":"lamjung-h-1"}],"manang":[{"serviceId":"police","contactId":"manang-p-1"},{"serviceId":"hospital","contactId":"manang-h-1"}],"mustang":[{"serviceId":"police","contactId":"mustang-p-1"},{"serviceId":"hospital","contactId":"mustang-h-1"}],"myagdi":[{"serviceId":"police","contactId":"myagdi-p-1"},{"serviceId":"hospital","contactId":"myagdi-h-1"}],"nawalpur":[{"serviceId":"police","contactId":"nawalpur-p-1"},{"serviceId":"hospital","contactId":"nawalpur-h-1"}],"parbat":[{"serviceId":"police","contactId":"parbat-p-1"},{"serviceId":"hospital","contactId":"parbat-h-1"}],"syangja":[{"serviceId":"police","contactId":"syangja-p-1"},{"serviceId":"hospital","contactId":"syangja-h-1"}],"tanahun":[{"serviceId":"police","contactId":"tanahun-p-1"},{"serviceId":"hospital","contactId":"tanahun-h-1"}],"arghakhanchi":[{"serviceId":"police","contactId":"arghakhanchi-p-1"},{"serviceId":"hospital","contactId":"arghakhanchi-h-1"}],"bardiya":[{"serviceId":"police","contactId":"bardiya-p-1"},{"serviceId":"hospital","contactId":"bardiya-h-1"}],"dang":[{"serviceId":"police","contactId":"dang-p-1"},{"serviceId":"hospital","contactId":"dang-h-1"}],"gulmi":[{"serviceId":"police","contactId":"gulmi-p-1"},{"serviceId":"hospital","contactId":"gulmi-h-1"}],"kapilvastu":[{"serviceId":"police","contactId":"kapilvastu-p-1"},{"serviceId":"hospital","contactId":"kapilvastu-h-1"}],"parasi":[{"serviceId":"police","contactId":"parasi-p-1"},{"serviceId":"hospital","contactId":"parasi-h-1"}],"palpa":[{"serviceId":"police","contactId":"palpa-p-1"},{"serviceId":"hospital","contactId":"palpa-h-1"}],"pyuthan":[{"serviceId":"police","contactId":"pyuthan-p-1"},{"serviceId":"hospital","contactId":"pyuthan-h-1"}],"rolpa":[{"serviceId":"police","contactId":"rolpa-p-1"},{"serviceId":"hospital","contactId":"rolpa-h-1"}],"eastern-rukum":[{"serviceId":"police","contactId":"eastern-rukum-p-1"},{"serviceId":"hospital","contactId":"eastern-rukum-h-1"}],"dailekh":[{"serviceId":"police","contactId":"dailekh-p-1"},{"serviceId":"hospital","contactId":"dailekh-h-1"}],"dolpa":[{"serviceId":"police","contactId":"dolpa-p-1"},{"serviceId":"hospital","contactId":"dolpa-h-1"}],"humla":[{"serviceId":"police","contactId":"humla-p-1"},{"serviceId":"hospital","contactId":"humla-h-1"}],"jajarkot":[{"serviceId":"police","contactId":"jajarkot-p-1"},{"serviceId":"hospital","contactId":"jajarkot-h-1"}],"jumla":[{"serviceId":"police","contactId":"jumla-p-1"},{"serviceId":"hospital","contactId":"jumla-h-1"}],"kalikot":[{"serviceId":"police","contactId":"kalikot-p-1"},{"serviceId":"hospital","contactId":"kalikot-h-1"}],"mugu":[{"serviceId":"police","contactId":"mugu-p-1"},{"serviceId":"hospital","contactId":"mugu-h-1"}],"salyan":[{"serviceId":"police","contactId":"salyan-p-1"},{"serviceId":"hospital","contactId":"salyan-h-1"}],"western-rukum":[{"serviceId":"police","contactId":"western-rukum-p-1"},{"serviceId":"hospital","contactId":"western-rukum-h-1"}],"achham":[{"serviceId":"police","contactId":"achham-p-1"},{"serviceId":"hospital","contactId":"achham-h-1"}],"baitadi":[{"serviceId":"police","contactId":"baitadi-p-1"},{"serviceId":"hospital","contactId":"baitadi-h-1"}],"bajhang":[{"serviceId":"police","contactId":"bajhang-p-1"},{"serviceId":"hospital","contactId":"bajhang-h-1"}],"bajura":[{"serviceId":"police","contactId":"bajura-p-1"},{"serviceId":"hospital","contactId":"bajura-h-1"}],"dadeldhura":[{"serviceId":"police","contactId":"dadeldhura-p-1"},{"serviceId":"hospital","contactId":"dadeldhura-h-1"}],"darchula":[{"serviceId":"police","contactId":"darchula-p-1"},{"serviceId":"hospital","contactId":"darchula-h-1"}],"doti":[{"serviceId":"police","contactId":"doti-p-1"},{"serviceId":"hospital","contactId":"doti-h-1"}],"kanchanpur":[{"serviceId":"police","contactId":"kanchanpur-p-1"},{"serviceId":"hospital","contactId":"kanchanpur-h-1"}]}
};

// ========================
// CONSTANTS & STATE
// ========================
const KEYS = {
  profile: 'emergency-seva-profile-guest',
  favorites: 'emergency-seva-favorites',
  customContacts: 'emergency-seva-custom-contacts',
  theme: 'es-theme',
};

const SERVICE_ICONS = { police:'👮', ambulance:'🚑', fire:'🚒', hospital:'🏥', women:'👩', blood:'🩸', disaster:'☎️', helpline:'📞' };
const CUSTOM_CAT_ICONS = { other:'📋', hospital:'🏥', clinic:'🩺', pharmacy:'💊', police:'👮', fire:'🚒', ambulance:'🚑', blood:'🩸', helpline:'📞' };
const NATIONAL_HELPLINES = {
  women: [{ id:'nat-w-1', name:'National Women Commission', name_ne:'राष्ट्रिय महिला आयोग', phone:'1145', address:'Nationwide' }],
  disaster: [
    { id:'nat-d-1', name:'Disaster & Emergency Control', name_ne:'विपद् तथा आपतकालीन नियन्त्रण', phone:'1149', address:'Nationwide' },
    { id:'nat-d-2', name:'National Emergency Operation Center', name_ne:'राष्ट्रिय आपतकालीन कार्य सञ्चालन केन्द्र', phone:'1155', address:'Nationwide' },
  ],
};
const BLOOD_TYPES = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
const GUIDE_DATA = [
  { id:'earthquake', title:'🌍 During an Earthquake', content:['DROP to the ground immediately.','Take COVER under a sturdy table or piece of furniture.','HOLD ON until the shaking stops.','If no table, cover your face and head with your arms and crouch in an inside corner.','Stay away from glass, windows, and anything that could fall.','Stay inside until shaking stops. Do not exit during shaking.'] },
  { id:'flood', title:'🌊 During a Flood', content:['Move immediately to higher ground.','Do NOT walk, swim, or drive through flood waters.','Six inches of moving water can knock you down; one foot can sweep your vehicle away.','Stay off bridges over fast-moving water.','Listen to authorities for information and instructions.'] },
  { id:'snake_bite', title:'🐍 In Case of a Snake Bite', content:['Remain calm and move away from the snake.','Remove tight clothing and jewelry before swelling starts.','Keep the bite area below the level of the heart.','Clean the wound with soap and water.','Do NOT cut the wound or attempt to suck out the venom.','Do NOT apply a tourniquet or ice.','Seek medical attention as soon as possible.'] },
  { id:'road_accident', title:'🚗 In Case of a Road Accident', content:['Check the scene for safety before approaching.','Call for medical help immediately.','If the person has a neck or back injury, do not move them unless in immediate danger.','Stop bleeding by applying firm pressure with a clean cloth.','Keep the person warm.','Do not give them anything to eat or drink.'] },
  { id:'fire', title:'🔥 In Case of Fire', content:['For a small fire, use a fire extinguisher if trained. Remember PASS: Pull, Aim, Squeeze, Sweep.','If fire is large or spreading, evacuate immediately.','Feel doors for heat before opening. If hot, use an alternate exit.','Stay low to the ground to avoid smoke inhalation.','Once out, stay out. Never go back into a burning building.','Call the fire department from a safe location.'] },
];

const STATE = {
  profile: null, currentPage: 'home', favorites: new Set(), customContacts: [],
  data: null, searchTerm: '', activeCategory: 'all', selectedBloodType: 'all',
  theme: localStorage.getItem(KEYS.theme) || 'light',
};

// ========================
// DATA LOADING — uses embedded data, no fetch
// ========================
function loadData() {
  STATE.data = {
    provinces: EMBEDDED.provinces,
    districts: EMBEDDED.districts,
    contacts: EMBEDDED.contacts,
    services: EMBEDDED.services,
  };
}

// ========================
// EMERGENCY SERVICES LOGIC
// ========================
function getContactById(id) {
  const raw = STATE.data.services.allContacts[id];
  if (!raw) return null;
  return { id, ...raw };
}

function getEmergencyServicesByDistrict(districtId) {
  const raw = STATE.data.services.allServices;
  const services = raw.map(s => ({ ...s, emoji: SERVICE_ICONS[s.id] || '📋', contacts: [] }));
  const mappings = STATE.data.contacts[districtId];
  if (mappings) {
    mappings.forEach(m => {
      const svc = services.find(s => s.id === m.serviceId);
      const contact = getContactById(m.contactId);
      if (svc && contact) svc.contacts.push({ ...contact, categoryId: svc.id });
    });
  }
  const fallbacks = { police: 'k-p-1', ambulance: 'k-a-1', fire: 'k-f-1' };
  Object.entries(fallbacks).forEach(([svcId, contactId]) => {
    const svc = services.find(s => s.id === svcId);
    if (svc && svc.contacts.length === 0) {
      const fb = getContactById(contactId);
      if (fb) svc.contacts.push({ ...fb, id: `${districtId}-${svcId[0]}-1` });
    }
  });
  services.forEach(svc => {
    const nationals = NATIONAL_HELPLINES[svc.id] || [];
    if (nationals.length) {
      const existing = new Set(svc.contacts.map(c => c.id));
      svc.contacts.unshift(...nationals.filter(c => !existing.has(c.id)).map(c => ({ ...c, categoryId: svc.id })));
    }
  });
  return services;
}

function getAllContactsMap() {
  const map = new Map();
  const raw = STATE.data.services.allContacts;
  for (const id in raw) map.set(id, { id, ...raw[id] });
  Object.values(NATIONAL_HELPLINES).flat().forEach(c => map.set(c.id, c));
  return map;
}

// ========================
// PROFILE
// ========================
function loadProfile() {
  try { const s = localStorage.getItem(KEYS.profile); STATE.profile = s ? JSON.parse(s) : null; } catch { STATE.profile = null; }
}
function saveProfile(p) { localStorage.setItem(KEYS.profile, JSON.stringify(p)); STATE.profile = p; }
function getProvince(id) { return STATE.data.provinces.find(p => p.id === id); }
function getDistrict(id) { return STATE.data.districts.find(d => d.id === id); }

// ========================
// FAVORITES
// ========================
function loadFavorites() {
  try { const s = localStorage.getItem(KEYS.favorites); STATE.favorites = s ? new Set(JSON.parse(s)) : new Set(); } catch { STATE.favorites = new Set(); }
}
function saveFavorites() { localStorage.setItem(KEYS.favorites, JSON.stringify([...STATE.favorites])); }
function toggleFavorite(contactId) {
  const allMap = getAllContactsMap();
  const contact = allMap.get(contactId);
  const wasFav = STATE.favorites.has(contactId);
  if (wasFav) { STATE.favorites.delete(contactId); showToast('Removed', contact ? `${contact.name_ne} removed.` : ''); }
  else { STATE.favorites.add(contactId); showToast('Favorited ⭐', contact ? `${contact.name_ne} saved.` : ''); }
  saveFavorites();
  document.querySelectorAll(`.star-btn[data-id="${contactId}"]`).forEach(btn => {
    const fav = STATE.favorites.has(contactId);
    btn.classList.toggle('favorited', fav);
    btn.title = fav ? 'Remove from favorites' : 'Add to favorites';
    btn.innerHTML = starSVG(fav);
  });
  if (STATE.currentPage === 'favorites') renderPage();
}
function starSVG(filled) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${filled?'#facc15':'none'}" stroke="${filled?'#facc15':'#9ca3af'}" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
}

// ========================
// CUSTOM CONTACTS
// ========================
function loadCustomContacts() {
  try { const s = localStorage.getItem(KEYS.customContacts); STATE.customContacts = s ? JSON.parse(s) : []; } catch { STATE.customContacts = []; }
}
function saveCustomContacts() { localStorage.setItem(KEYS.customContacts, JSON.stringify(STATE.customContacts)); }
function addCustomContact(contact) {
  const c = { ...contact, id: `custom-${Date.now()}` };
  STATE.customContacts.unshift(c); saveCustomContacts(); return c;
}
function deleteCustomContact(id) {
  if (!confirm('Delete this contact? This cannot be undone.')) return;
  STATE.customContacts = STATE.customContacts.filter(c => c.id !== id);
  saveCustomContacts(); renderPage();
}

// ========================
// THEME
// ========================
function applyTheme(t) {
  STATE.theme = t; localStorage.setItem(KEYS.theme, t);
  document.documentElement.classList.toggle('dark', t === 'dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() { applyTheme(STATE.theme === 'dark' ? 'light' : 'dark'); }

// ========================
// TOAST
// ========================
function showToast(title, desc = '', variant = 'default') {
  const c = document.getElementById('toast-container'); if (!c) return;
  const el = document.createElement('div');
  el.className = `toast-item toast-${variant}`;
  el.innerHTML = `<div class="toast-content"><p class="toast-title">${escHtml(title)}</p>${desc?`<p class="toast-desc">${escHtml(desc)}</p>`:''}</div><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  c.appendChild(el); setTimeout(() => el.remove(), 3500);
}
function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// ========================
// SMS / NEARBY
// ========================
function handleEmergencySMS() {
  const btn = document.getElementById('sms-btn');
  if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner-sm"></span> Getting location...`; }
  if ('vibrate' in navigator) navigator.vibrate(100);
  const sendSMS = (loc) => {
    let msg = 'I am in an emergency and need help!';
    if (loc) msg += ` My location: https://www.google.com/maps?q=${loc.latitude},${loc.longitude}`;
    window.location.href = `sms:?body=${encodeURIComponent(msg)}`;
    if (btn) { btn.disabled = false; btn.innerHTML = '📱 Send Emergency SMS'; }
  };
  if (!navigator.geolocation) { sendSMS(null); return; }
  navigator.geolocation.getCurrentPosition(pos => sendSMS(pos.coords), () => { showToast('Location Error','SMS sent without location.','destructive'); sendSMS(null); }, { enableHighAccuracy:true, timeout:10000 });
}

function findNearby(service) {
  const d = getDistrict(STATE.profile?.districtId);
  if (!navigator.geolocation) { window.open(`https://www.google.com/maps/search/${encodeURIComponent(service)}+in+${d?.name||'Nepal'}`, '_blank'); return; }
  navigator.geolocation.getCurrentPosition(
    pos => window.open(`https://www.google.com/maps/search/${encodeURIComponent(service)}/@${pos.coords.latitude},${pos.coords.longitude},15z`, '_blank'),
    () => window.open(`https://www.google.com/maps/search/${encodeURIComponent(service)}+in+${d?.name||'Nepal'}`, '_blank')
  );
}

// ========================
// SHARE / REPORT
// ========================
async function shareContact(id) {
  const c = getAllContactsMap().get(id); if (!c) return;
  const text = `Emergency Contact:\n${c.name_ne} (${c.name})\nPhone: ${c.phone}${c.address?`\nAddress: ${c.address}`:''}`;
  try {
    if (navigator.share) await navigator.share({ title:'Emergency Sewa Contact', text, url: window.location.href });
    else { await navigator.clipboard.writeText(text); showToast('Copied!','Contact details copied.'); }
  } catch { showToast('Share Failed','Could not share.','destructive'); }
}

function openReportModal(contactId) {
  const c = getAllContactsMap().get(contactId); if (!c) return;
  const m = document.getElementById('report-modal'); if (!m) return;
  document.getElementById('report-contact-name').textContent = `${c.name_ne} (${c.name}) — ${c.phone}`;
  document.getElementById('report-contact-id').value = contactId;
  m.style.display = 'flex'; document.body.style.overflow = 'hidden';
}
function closeReportModal() { const m = document.getElementById('report-modal'); if (m) m.style.display = 'none'; document.body.style.overflow = ''; }
function handleReportSubmit(e) { e.preventDefault(); showToast('Report Submitted','Thank you! We will review it.'); closeReportModal(); e.target.reset(); }

function openAddContactModal() { const m = document.getElementById('add-contact-modal'); if (m) m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function closeAddContactModal() { const m = document.getElementById('add-contact-modal'); if (m) { m.style.display = 'none'; m.querySelector('form').reset(); } document.body.style.overflow = ''; }
function handleAddContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value.trim();
  const phone = form.querySelector('[name="phone"]').value.trim();
  const category = form.querySelector('[name="category"]').value;
  const address = form.querySelector('[name="address"]').value.trim();
  if (!name || !phone) { showToast('Error','Name and phone are required.','destructive'); return; }
  addCustomContact({ name, phone, category, address });
  showToast('Contact Saved',`${name} has been added.`);
  closeAddContactModal();
  if (STATE.currentPage === 'custom') renderPage();
}

// ========================
// DROPDOWN
// ========================
function toggleDropdown(id) {
  const menu = document.getElementById(`ddmenu-${id}`); if (!menu) return;
  const isOpen = menu.classList.contains('open');
  document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
  if (!isOpen) menu.classList.add('open');
}
document.addEventListener('click', e => { if (!e.target.closest('.dropdown')) document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open')); });

// ========================
// NAVIGATION
// ========================
function navigate(page) {
  STATE.currentPage = page;
  if (page !== 'home') { STATE.searchTerm = ''; STATE.activeCategory = 'all'; STATE.selectedBloodType = 'all'; }
  window.location.hash = page; renderPage();
}

// ========================
// CONTACT CARD
// ========================
function renderContactCard(contact) {
  const isFav = STATE.favorites.has(contact.id);
  const emoji = SERVICE_ICONS[contact.categoryId || 'helpline'] || '📋';
  const dirUrl = contact.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address||contact.name)}`;
  const bloodHtml = contact.bloodTypes?.length ? `<div class="blood-types">${contact.bloodTypes.map(b=>`<span class="blood-badge">${b}</span>`).join('')}</div>` : '';
  const addrHtml = contact.address ? `<div class="contact-address"><span>📍</span><span>${escHtml(contact.address)}</span></div>` : '';
  const waHtml = contact.whatsapp ? `<button class="dropdown-item" onclick="window.open('https://wa.me/${contact.whatsapp.replace(/\D/g,'')}','_blank');toggleDropdown('${contact.id}')">💬 Chat on WhatsApp</button>` : '';
  return `<div class="contact-card">
    <div class="contact-card-header">
      <div class="contact-info">
        <div class="contact-emoji">${emoji}</div>
        <div class="contact-names">
          <h3 class="contact-name-ne">${escHtml(contact.name_ne)}</h3>
          <p class="contact-name">${escHtml(contact.name)}</p>
        </div>
      </div>
      <button class="star-btn ${isFav?'favorited':''}" data-id="${contact.id}" title="${isFav?'Remove':'Add to favorites'}" onclick="toggleFavorite('${contact.id}')">${starSVG(isFav)}</button>
    </div>
    <div>
      <a href="tel:${contact.phone}" class="contact-phone">📞 ${escHtml(contact.phone)}</a>
      ${addrHtml}${bloodHtml}
    </div>
    <div class="contact-actions">
      <a href="tel:${contact.phone}" class="btn-call">📞 Call Now</a>
      <a href="${dirUrl}" target="_blank" rel="noopener noreferrer" class="btn-directions" title="Get Directions">🗺️</a>
      <div class="dropdown">
        <button class="btn-more" onclick="event.stopPropagation();toggleDropdown('${contact.id}')" title="More">⋮</button>
        <div class="dropdown-menu" id="ddmenu-${contact.id}">
          ${waHtml}
          <button class="dropdown-item" onclick="shareContact('${contact.id}');toggleDropdown('${contact.id}')">🔗 Share</button>
          <button class="dropdown-item danger" onclick="openReportModal('${contact.id}');toggleDropdown('${contact.id}')">🚩 Report Issue</button>
        </div>
      </div>
    </div>
  </div>`;
}

// ========================
// PAGE RENDERERS
// ========================
function renderHome() {
  if (!STATE.profile) return renderProfileSetup();
  const district = getDistrict(STATE.profile.districtId);
  const province = getProvince(STATE.profile.provinceId);
  const services = getEmergencyServicesByDistrict(STATE.profile.districtId);
  const allMap = getAllContactsMap();
  const allContacts = services.flatMap(s => s.contacts.map(c => ({ ...c, categoryId: s.id })));
  const filtered = allContacts.filter(c => {
    const matchCat = STATE.activeCategory === 'all' || c.categoryId === STATE.activeCategory;
    const st = STATE.searchTerm.toLowerCase();
    const matchSearch = !st || c.name.toLowerCase().includes(st) || c.name_ne.toLowerCase().includes(st) || (c.address||'').toLowerCase().includes(st);
    const matchBlood = STATE.activeCategory !== 'blood' || STATE.selectedBloodType === 'all' || (c.bloodTypes?.includes(STATE.selectedBloodType));
    return matchCat && matchSearch && matchBlood;
  });
  const catsWithContacts = services.filter(s => s.contacts.length > 0);
  const categoryTabsHtml = `<div class="category-tabs">
    <button class="category-tab ${STATE.activeCategory==='all'?'active':''}" onclick="STATE.activeCategory='all';STATE.selectedBloodType='all';renderPage()">All</button>
    ${catsWithContacts.map(s=>`<button class="category-tab ${STATE.activeCategory===s.id?'active':''}" onclick="STATE.activeCategory='${s.id}';STATE.selectedBloodType='all';renderPage()">${SERVICE_ICONS[s.id]||'📋'} ${escHtml(s.name_ne)}</button>`).join('')}
  </div>`;
  const bloodFilterHtml = STATE.activeCategory === 'blood' ? `<div class="blood-type-wrap mb-3"><select class="input-select" onchange="STATE.selectedBloodType=this.value;renderPage()"><option value="all" ${STATE.selectedBloodType==='all'?'selected':''}>All Blood Types</option>${BLOOD_TYPES.map(t=>`<option value="${t}" ${STATE.selectedBloodType===t?'selected':''}>${t}</option>`).join('')}</select></div>` : '';
  const contactsHtml = filtered.length ? `<div class="contacts-grid">${filtered.map(c => {const full=allMap.get(c.id)||c; return renderContactCard({...full,categoryId:c.categoryId});}).join('')}</div>` : `<div class="empty-state"><p>No contacts found for your search or filter.</p></div>`;
  return `<div class="page-content">
    <div class="card mb-4">
      <div class="card-header"><h2 class="card-title">🔍 Find Nearby Services</h2>${district?`<p class="card-desc">Showing contacts for <strong>${district.name_ne}</strong> (${district.name}), ${province?.name_ne} (${province?.name})</p>`:''}</div>
      <div class="card-body"><div class="nearby-grid">
        <button class="btn btn-primary btn-lg" onclick="findNearby('hospitals')">🏥 Find Nearby Hospitals</button>
        <button class="btn btn-primary btn-lg" onclick="findNearby('pharmacy')">💊 Find Nearby Pharmacy</button>
      </div></div>
    </div>
    <div class="card card-emergency mb-4">
      <div class="card-body sms-card-body">
        <div><h3 class="sms-title">⚠️ Emergency Situation?</h3><p class="sms-desc">Quickly send an SMS with your GPS location to an emergency contact.</p></div>
        <button id="sms-btn" class="btn btn-destructive" onclick="handleEmergencySMS()">📱 Send Emergency SMS</button>
      </div>
    </div>
    ${district ? `<div><div class="search-box"><input type="text" class="input-text" placeholder="🔎 Search contacts by name, address..." value="${escHtml(STATE.searchTerm)}" oninput="STATE.searchTerm=this.value;renderPage()"/></div>${categoryTabsHtml}${bloodFilterHtml}${contactsHtml}</div>` : ''}
  </div>`;
}

function renderFavorites() {
  const allMap = getAllContactsMap();
  const favs = [...STATE.favorites].map(id=>allMap.get(id)).filter(Boolean);
  return `<div class="page-content"><div class="card"><div class="card-header"><h2 class="card-title">⭐ Favorite Contacts</h2></div><div class="card-body">${favs.length?`<div class="contacts-grid">${favs.map(c=>renderContactCard(c)).join('')}</div>`:`<div class="empty-state dashed"><h3>No Favorites Yet</h3><p>Tap the ⭐ icon on any contact to save it here.</p></div>`}</div></div></div>`;
}

function renderCustomContacts() {
  return `<div class="page-content"><div class="card">
    <div class="card-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
      <h2 class="card-title">👤 My Custom Contacts</h2>
      <button class="btn btn-accent btn-sm" onclick="openAddContactModal()">➕ Add Contact</button>
    </div>
    <div class="card-body">${STATE.customContacts.length?`<div class="contacts-grid">${STATE.customContacts.map(c=>`<div class="contact-card">
      <div class="contact-card-header">
        <div class="contact-info"><div class="contact-emoji">${CUSTOM_CAT_ICONS[c.category]||'📋'}</div><div class="contact-names"><h3 class="contact-name-ne">${escHtml(c.name)}</h3><p class="contact-name">${escHtml(c.category)}</p></div></div>
        <button class="btn-icon" style="color:var(--destructive)" onclick="deleteCustomContact('${c.id}')">🗑️</button>
      </div>
      <a href="tel:${c.phone}" class="contact-phone">📞 ${escHtml(c.phone)}</a>
      ${c.address?`<div class="contact-address"><span>📍</span><span>${escHtml(c.address)}</span></div>`:''}
      <div class="contact-actions"><a href="tel:${c.phone}" class="btn-call">📞 Call Now</a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address||c.name)}" target="_blank" class="btn-directions">🗺️</a></div>
    </div>`).join('')}</div>`:`<div class="empty-state dashed"><h3>No Custom Contacts Yet</h3><p>Save your personal emergency numbers.</p><button class="btn btn-accent mt-4" onclick="openAddContactModal()">➕ Add Contact</button></div>`}</div>
  </div></div>`;
}

function renderMore() {
  const items = [
    {page:'profile',emoji:'👤',title:'My Profile',desc:'View and edit your personal information.'},
    {page:'guide',emoji:'📖',title:'Emergency Guide',desc:'Learn what to do in different emergencies.'},
    {page:'about',emoji:'ℹ️',title:'About Emergency Sewa',desc:'Our mission, features, and limitations.'},
  ];
  return `<div class="page-content"><div class="space-y-3">${items.map(item=>`<div class="card hover-card" onclick="navigate('${item.page}')"><div class="menu-item"><div class="menu-item-emoji">${item.emoji}</div><div class="menu-item-text"><h3>${item.title}</h3><p>${item.desc}</p></div><div class="menu-chevron">›</div></div></div>`).join('')}</div></div>`;
}

function renderGuide() {
  return `<div class="page-content"><div class="card"><div class="card-header"><h2 class="card-title">📖 Emergency Preparedness Guide</h2></div><div class="card-body"><div class="accordion">${GUIDE_DATA.map(item=>`<div class="accordion-item"><button class="accordion-trigger" onclick="toggleAccordion('${item.id}')"><span>${item.title}</span><span class="accordion-icon" id="acc-icon-${item.id}">▼</span></button><div class="accordion-content" id="acc-${item.id}" style="display:none"><ul>${item.content.map(p=>`<li>${escHtml(p)}</li>`).join('')}</ul></div></div>`).join('')}</div></div></div></div>`;
}

function toggleAccordion(id) {
  const content = document.getElementById(`acc-${id}`); const icon = document.getElementById(`acc-icon-${id}`);
  if (!content) return; const isOpen = content.style.display !== 'none';
  content.style.display = isOpen ? 'none' : 'block'; if (icon) icon.textContent = isOpen ? '▼' : '▲';
}

function renderAbout() {
  const year = new Date().getFullYear();
  return `<div class="page-content" style="max-width:720px;margin:0 auto;"><div class="about-header"><h1>About Emergency Sewa</h1><p>Your reliable guide in times of need 🇳🇵</p></div><div class="space-y-4">
    <div class="card"><div class="card-body about-section"><h2>🛡️ What is Emergency Sewa?</h2><p>Emergency Sewa is a mobile-friendly web app providing quick access to emergency service numbers across all 7 provinces and 77 districts of Nepal.</p></div></div>
    <div class="card"><div class="card-body about-section"><h2>✨ Key Features</h2><ul><li>📍 <strong>Location-Aware</strong> — Filter by province and district</li><li>📶 <strong>Offline Ready</strong> — Works without internet once loaded</li><li>📞 <strong>One-Tap Call</strong> — Instant click-to-call</li><li>📱 <strong>Emergency SMS</strong> — Send GPS location to contacts</li><li>⭐ <strong>Favorites</strong> — Save important contacts locally</li><li>👤 <strong>Custom Contacts</strong> — Add your personal numbers</li></ul></div></div>
    <div class="card" style="border-color:var(--destructive);background:color-mix(in srgb, var(--destructive) 8%, var(--card-bg))"><div class="card-body about-section"><h2>⚠️ Important Disclaimer</h2><ul><li>This is <strong>NOT</strong> an official government application.</li><li>In a life-threatening emergency, always call <a href="tel:100"><strong>100</strong></a> (Police), <a href="tel:102"><strong>102</strong></a> (Ambulance), or <a href="tel:101"><strong>101</strong></a> (Fire) first.</li><li>Contact numbers may change. Please verify critical numbers in advance.</li></ul></div></div>
    <div class="card"><div class="card-body text-center"><p>Developed with ❤️ for Nepal by <strong>Prajwol</strong></p><p class="text-sm mt-2" style="color:var(--muted-fg)">© ${year} Emergency Sewa — Not an official government app</p></div></div>
  </div></div>`;
}

function renderProfileSetup() {
  const provinces = STATE.data.provinces;
  return `<div class="page-content"><div class="profile-setup-wrap"><div class="card" style="width:100%;max-width:500px;">
    <div class="card-header text-center"><h2 class="card-title" style="justify-content:center;">🇳🇵 Welcome to Emergency Sewa</h2><p class="card-desc">Set up your profile once to get location-specific emergency contacts.</p></div>
    <div class="card-body"><form id="profile-form" class="form-stack">
      <div class="form-field"><label class="form-label">Full Name *</label><input type="text" name="name" class="input-text" placeholder="e.g., Ram Bahadur" required><span class="form-error" id="err-name"></span></div>
      <div class="form-field"><label class="form-label">Email (Optional)</label><input type="email" name="email" class="input-text" placeholder="e.g., ram@example.com"></div>
      <div class="form-grid-2">
        <div class="form-field"><label class="form-label">Province *</label><select name="provinceId" class="input-select" onchange="updateDistrictSelect(this.value)" required><option value="">Select Province</option>${provinces.map(p=>`<option value="${p.id}">${p.name_ne} (${p.name})</option>`).join('')}</select><span class="form-error" id="err-province"></span></div>
        <div class="form-field"><label class="form-label">District *</label><select name="districtId" class="input-select" id="district-select" disabled required><option value="">Select Province first</option></select><span class="form-error" id="err-district"></span></div>
      </div>
      <div class="form-field"><label class="form-label">Address (Optional)</label><textarea name="address" class="input-textarea" rows="2" placeholder="e.g., Tokha-6, Kathmandu"></textarea></div>
      <button type="submit" class="btn btn-accent w-full btn-lg">✅ Save and Get Started</button>
    </form></div>
  </div></div></div>`;
}

function renderProfileEdit() {
  const p = STATE.profile;
  if (!p) return renderProfileSetup();
  const provinces = STATE.data.provinces;
  const districtsForProv = STATE.data.districts.filter(d => d.provinceId === p.provinceId);
  const initials = (p.name||'U').split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  return `<div class="page-content" style="max-width:560px;margin:0 auto;"><div class="card">
    <div class="card-header"><h2 class="card-title">👤 My Profile</h2></div>
    <div class="card-body">
      <div class="avatar-wrap">
        <div class="avatar-circle">${p.photoUrl?`<img src="${p.photoUrl}" alt="Profile">`:(initials)}</div>
        <div><p class="font-bold">${escHtml(p.name||'Unknown')}</p><p class="text-sm" style="color:var(--muted-fg)">${escHtml(p.email||'')}</p></div>
      </div>
      <form id="profile-form" class="form-stack">
        <div class="form-field"><label class="form-label">Full Name *</label><input type="text" name="name" class="input-text" value="${escHtml(p.name||'')}" required></div>
        <div class="form-field"><label class="form-label">Email (Optional)</label><input type="email" name="email" class="input-text" value="${escHtml(p.email||'')}"></div>
        <div class="form-grid-2">
          <div class="form-field"><label class="form-label">Province *</label><select name="provinceId" class="input-select" onchange="updateDistrictSelect(this.value,'${p.districtId}')" required><option value="">Select Province</option>${provinces.map(pv=>`<option value="${pv.id}" ${pv.id===p.provinceId?'selected':''}>${pv.name_ne} (${pv.name})</option>`).join('')}</select></div>
          <div class="form-field"><label class="form-label">District *</label><select name="districtId" class="input-select" id="district-select" required><option value="">Select District</option>${districtsForProv.map(d=>`<option value="${d.id}" ${d.id===p.districtId?'selected':''}>${d.name_ne} (${d.name})</option>`).join('')}</select></div>
        </div>
        <div class="form-field"><label class="form-label">Address (Optional)</label><textarea name="address" class="input-textarea" rows="2">${escHtml(p.address||'')}</textarea></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="submit" class="btn btn-accent">💾 Save Changes</button>
          <button type="button" class="btn btn-outline" onclick="navigate('more')">← Back</button>
        </div>
      </form>
    </div>
  </div></div>`;
}

function updateDistrictSelect(provinceId, keepDistrictId = null) {
  const sel = document.getElementById('district-select'); if (!sel) return;
  if (!provinceId) { sel.disabled = true; sel.innerHTML = '<option value="">Select Province first</option>'; return; }
  const districts = STATE.data.districts.filter(d => d.provinceId === provinceId);
  sel.disabled = false;
  sel.innerHTML = `<option value="">Select District</option>` + districts.map(d=>`<option value="${d.id}" ${d.id===keepDistrictId?'selected':''}>${d.name_ne} (${d.name})</option>`).join('');
}

function handleProfileSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]')?.value.trim() || '';
  const provinceId = form.querySelector('[name="provinceId"]').value;
  const districtId = form.querySelector('[name="districtId"]').value;
  const address = form.querySelector('[name="address"]')?.value.trim() || '';
  let valid = true;
  const errName=document.getElementById('err-name'), errProv=document.getElementById('err-province'), errDist=document.getElementById('err-district');
  if (!name) { if(errName) errName.textContent='Name is required.'; valid=false; } else { if(errName) errName.textContent=''; }
  if (!provinceId) { if(errProv) errProv.textContent='Province is required.'; valid=false; } else { if(errProv) errProv.textContent=''; }
  if (!districtId) { if(errDist) errDist.textContent='District is required.'; valid=false; } else { if(errDist) errDist.textContent=''; }
  if (!valid) return;
  saveProfile({ name, email, provinceId, districtId, address, phone:'Guest' });
  showToast('Profile Saved! ✅','Welcome to Emergency Sewa!');
  navigate('home');
}

// ========================
// PAGE ROUTER
// ========================
function renderPage() {
  const main = document.getElementById('main-content'); if (!main) return;
  let html = '';
  switch(STATE.currentPage) {
    case 'home':      html = renderHome(); break;
    case 'favorites': html = renderFavorites(); break;
    case 'custom':    html = renderCustomContacts(); break;
    case 'more':      html = renderMore(); break;
    case 'guide':     html = renderGuide(); break;
    case 'about':     html = renderAbout(); break;
    case 'profile':   html = renderProfileEdit(); break;
    default:          html = renderHome();
  }
  main.innerHTML = html;
  const pf = document.getElementById('profile-form');
  if (pf) pf.addEventListener('submit', handleProfileSubmit);
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    const active = item.dataset.page === STATE.currentPage ||
      (['guide','about','profile'].includes(STATE.currentPage) && item.dataset.page === 'more');
    item.classList.toggle('active', active);
  });
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.page === STATE.currentPage));
  window.scrollTo({ top:0, behavior:'smooth' });
}

// ========================
// INIT
// ========================
function init() {
  applyTheme(STATE.theme);
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  try {
    loadData();
    loadProfile();
    loadFavorites();
    loadCustomContacts();
    const hash = window.location.hash.replace('#','') || 'home';
    STATE.currentPage = hash;
    renderPage();
    document.getElementById('theme-toggle').textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
  } catch(err) {
    console.error('Init error:', err);
    document.getElementById('main-content').innerHTML = `<div class="error-screen"><p style="font-size:3rem">⚠️</p><h2>Failed to Load</h2><p style="color:var(--muted-fg)">${err.message}</p><button class="btn btn-accent mt-4" onclick="location.reload()">🔄 Retry</button></div>`;
  }
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#','') || 'home';
  if (hash !== STATE.currentPage) { STATE.currentPage = hash; renderPage(); }
});
document.addEventListener('click', e => {
  if (e.target.id === 'report-modal') closeReportModal();
  if (e.target.id === 'add-contact-modal') closeAddContactModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeReportModal(); closeAddContactModal(); } });

init();
