const fs = require('fs');
const path = require('path');

const enJsonPath = path.join(__dirname, 'messages/en.json');
const siJsonPath = path.join(__dirname, 'messages/si.json');

const en = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
const si = JSON.parse(fs.readFileSync(siJsonPath, 'utf8'));

// HeroSearch expansions
const newHeroSearchEn = {
  ...en.HeroSearch,
  tabFlights: "Flights",
  tabFlightsTitle: "Find Your Next Adventure",
  tabFlightsSubtitle: "Compare cheap flights from hundreds of airlines worldwide.",
  tabRental: "Car & Bike Rental",
  tabRentalTitle: "Hit the Road on Your Terms",
  tabRentalSubtitle: "Rent cars and bikes at the best prices for your journey.",
  tabTransfers: "Transfers",
  tabTransfersTitle: "Hassle-Free Airport Transfers",
  tabTransfersSubtitle: "Book reliable taxis and shuttles to and from the airport.",
  tabEsim: "e-SIM",
  tabEsimTitle: "Stay Connected Everywhere",
  tabEsimSubtitle: "Get instant internet access with our travel e-SIM packages.",
  
  labelFrom: "From",
  labelTo: "To",
  labelDates: "Dates",
  labelPassengers: "Passengers",
  labelVehicle: "Vehicle",
  labelPickUp: "Pick-up",
  labelDropOff: "Drop-off",
  labelDateTime: "Date & Time",
  labelDestination: "Destination",
  labelDuration: "Duration",
  labelDataPackage: "Data Package",
  
  placeholderCityAirport: "City or Airport",
  placeholderDepartReturn: "Depart - Return",
  placeholderCityAddress: "City, Airport, or Address",
  placeholderPickUpDropOff: "Pick-up - Drop-off",
  placeholderAirportHotel: "Airport or Hotel",
  placeholderHotelAddress: "Hotel or Address",
  placeholderPickUpTime: "Pick-up Time",
  placeholderWhereTo: "Where are you traveling to?",
  
  btnSearchFlights: "Search Flights",
  btnFindVehicles: "Find Vehicles",
  btnSearchTransfers: "Search Transfers",
  btnFindEsims: "Find e-SIMs",
  
  opt1AdultEconomy: "1 Adult, Economy",
  optAnyVehicle: "Any Vehicle",
  optEconomyCar: "Economy Car",
  optSUV: "SUV",
  optMotorbike: "Motorbike",
  opt2Passengers: "2 Passengers",
  opt7Days: "7 Days",
  opt15Days: "15 Days",
  opt30Days: "30 Days",
  opt3GB: "3 GB",
  opt5GB: "5 GB",
  opt10GB: "10 GB",
  optUnlimited: "Unlimited"
};

const newHeroSearchSi = {
  ...si.HeroSearch,
  tabFlights: "ගුවන් ගමන්",
  tabFlightsTitle: "ඔබේ මීළඟ චාරිකාව සොයාගන්න",
  tabFlightsSubtitle: "ලොව පුරා ගුවන් සේවා සිය ගණනකින් ලාභදායී ගුවන් ගමන් සසඳන්න.",
  tabRental: "කාර් සහ බයික් කුලියට",
  tabRentalTitle: "ඔබේ ගමනට සරිලන වාහනයක්",
  tabRentalSubtitle: "ඔබේ ගමන සඳහා හොඳම මිලට කාර් සහ බයික් කුලියට ගන්න.",
  tabTransfers: "ප්‍රවාහන සේවා",
  tabTransfersTitle: "කරදරයකින් තොරව ගුවන් තොටුපළට",
  tabTransfersSubtitle: "ගුවන් තොටුපළට සහ ඉන් පිටතට විශ්වාසදායක කුලී රථ සහ ෂටල් වෙන්කරන්න.",
  tabEsim: "ඊ-සිම් (e-SIM)",
  tabEsimTitle: "සෑම තැනකදීම සම්බන්ධ වී සිටින්න",
  tabEsimSubtitle: "අපගේ සංචාරක ඊ-සිම් පැකේජ හරහා ක්ෂණික අන්තර්ජාල පහසුකම් ලබාගන්න.",
  
  labelFrom: "සිට",
  labelTo: "දක්වා",
  labelDates: "දින",
  labelPassengers: "මගීන්",
  labelVehicle: "වාහනය",
  labelPickUp: "ගමන් ආරම්භය",
  labelDropOff: "ගමනාන්තය",
  labelDateTime: "දිනය සහ වේලාව",
  labelDestination: "ගමනාන්තය",
  labelDuration: "කාලසීමාව",
  labelDataPackage: "ඩේටා පැකේජය",
  
  placeholderCityAirport: "නගරය හෝ ගුවන් තොටුපළ",
  placeholderDepartReturn: "පිටත්වීම - පැමිණීම",
  placeholderCityAddress: "නගරය, ගුවන් තොටුපළ හෝ ලිපිනය",
  placeholderPickUpDropOff: "ගමන් ආරම්භය - අවසානය",
  placeholderAirportHotel: "ගුවන් තොටුපළ හෝ හෝටලය",
  placeholderHotelAddress: "හෝටලය හෝ ලිපිනය",
  placeholderPickUpTime: "පිටත්වන වේලාව",
  placeholderWhereTo: "ඔබ ගමන් කරන්නේ කොහේටද?",
  
  btnSearchFlights: "ගුවන් ගමන් සොයන්න",
  btnFindVehicles: "වාහන සොයන්න",
  btnSearchTransfers: "ප්‍රවාහන සේවා සොයන්න",
  btnFindEsims: "ඊ-සිම් (e-SIM) සොයන්න",
  
  opt1AdultEconomy: "වැඩිහිටියන් 1, සාමාන්‍ය පන්තිය",
  optAnyVehicle: "ඕනෑම වාහනයක්",
  optEconomyCar: "සාමාන්‍ය කාර්",
  optSUV: "SUV",
  optMotorbike: "යතුරුපැදි",
  opt2Passengers: "මගීන් 2 ක්",
  opt7Days: "දින 7 ක්",
  opt15Days: "දින 15 ක්",
  opt30Days: "දින 30 ක්",
  opt3GB: "3 GB",
  opt5GB: "5 GB",
  opt10GB: "10 GB",
  optUnlimited: "අසීමිත (Unlimited)"
};

en.HeroSearch = newHeroSearchEn;
si.HeroSearch = newHeroSearchSi;

fs.writeFileSync(enJsonPath, JSON.stringify(en, null, 2));
fs.writeFileSync(siJsonPath, JSON.stringify(si, null, 2));

console.log('JSON files updated');
