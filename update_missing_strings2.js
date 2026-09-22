const fs = require('fs');
const path = require('path');

const enJsonPath = path.join(__dirname, 'messages/en.json');
const siJsonPath = path.join(__dirname, 'messages/si.json');

const en = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
const si = JSON.parse(fs.readFileSync(siJsonPath, 'utf8'));

// 1. Footer JSON Updates
en.Footer = {
  ...en.Footer,
  description: "Your ultimate travel companion for comparing and booking the best flight deals, rentals, and e-SIMs worldwide.",
  topDestinations: "Top Destinations",
  flightsNewYork: "Flights to New York",
  flightsLondon: "Flights to London",
  flightsDubai: "Flights to Dubai",
  flightsTokyo: "Flights to Tokyo",
  flightsParis: "Flights to Paris",
  company: "Company",
  helpCenter: "Help Center",
  aboutUs: "About Us",
  contactUs: "Contact Us",
  cookiePolicy: "Cookie Policy",
  subscribeTitle: "Subscribe to unlock secret deals!",
  subscribeDesc: "Get member-only prices and travel inspiration sent straight to your inbox.",
  placeholderEmail: "Enter your email address",
  btnSubscribe: "Subscribe",
  allRightsReserved: "All rights reserved."
};

si.Footer = {
  ...si.Footer,
  description: "ලොව පුරා හොඳම ගුවන් ගමන්, වාහන කුලියට දීම් සහ ඊ-සිම් සසඳා වෙන්කරවා ගැනීම සඳහා ඔබේ හොඳම සංචාරක සහකරු.",
  topDestinations: "ප්‍රධාන ගමනාන්ත",
  flightsNewYork: "නිව් යෝර්ක් වෙත ගුවන් ගමන්",
  flightsLondon: "ලන්ඩන් වෙත ගුවන් ගමන්",
  flightsDubai: "ඩුබායි වෙත ගුවන් ගමන්",
  flightsTokyo: "ටෝකියෝ වෙත ගුවන් ගමන්",
  flightsParis: "පැරිස් වෙත ගුවන් ගමන්",
  company: "සමාගම",
  helpCenter: "උදව් කේන්ද්‍රය",
  aboutUs: "අපි ගැන",
  contactUs: "අප අමතන්න",
  cookiePolicy: "කුකීස් ප්‍රතිපත්තිය",
  subscribeTitle: "රහස් දීමනා ලබාගැනීමට ලියාපදිංචි වන්න!",
  subscribeDesc: "සාමාජිකයින්ට පමණක් වන විශේෂ මිල ගණන් සහ සංචාරක තොරතුරු කෙලින්ම ඔබේ විද්‍යුත් තැපෑලට ලබාගන්න.",
  placeholderEmail: "ඔබේ විද්‍යුත් තැපෑල ඇතුළත් කරන්න",
  btnSubscribe: "ලියාපදිංචි වන්න (Subscribe)",
  allRightsReserved: "සියලුම හිමිකම් ඇවිරිණි."
};

fs.writeFileSync(enJsonPath, JSON.stringify(en, null, 2));
fs.writeFileSync(siJsonPath, JSON.stringify(si, null, 2));

// 2. Patch TopDestinations
let topCode = fs.readFileSync(path.join(__dirname, 'components/home/TopDestinations.tsx'), 'utf8');
topCode = topCode.replace(/\{"\{t\('subtitleExtended'\)\}"\}/g, `{t('subtitleExtended')}`);
topCode = topCode.replace(/\{"Top Destinations"\}/g, `{t('title')}`);
fs.writeFileSync(path.join(__dirname, 'components/home/TopDestinations.tsx'), topCode);

// 3. Patch Footer
let footerCode = fs.readFileSync(path.join(__dirname, 'components/layout/Footer.tsx'), 'utf8');

footerCode = footerCode.replace(
  /Your ultimate travel companion for comparing and booking the best flight deals, rentals, and e-SIMs worldwide\./,
  `{t('description')}`
);
footerCode = footerCode.replace(/>Top Destinations<\/h3>/, `>{t('topDestinations')}</h3>`);
footerCode = footerCode.replace(/>Flights to New York<\/Link>/, `>{t('flightsNewYork')}</Link>`);
footerCode = footerCode.replace(/>Flights to London<\/Link>/, `>{t('flightsLondon')}</Link>`);
footerCode = footerCode.replace(/>Flights to Dubai<\/Link>/, `>{t('flightsDubai')}</Link>`);
footerCode = footerCode.replace(/>Flights to Tokyo<\/Link>/, `>{t('flightsTokyo')}</Link>`);
footerCode = footerCode.replace(/>Flights to Paris<\/Link>/, `>{t('flightsParis')}</Link>`);

footerCode = footerCode.replace(/>Company<\/h3>/, `>{t('company')}</h3>`);
footerCode = footerCode.replace(/>Help Center<\/Link>/, `>{t('helpCenter')}</Link>`);
footerCode = footerCode.replace(/>About Us<\/Link>/, `>{t('aboutUs')}</Link>`);
footerCode = footerCode.replace(/>Contact Us<\/Link>/, `>{t('contactUs')}</Link>`);
footerCode = footerCode.replace(/>Cookie Policy<\/Link>/, `>{t('cookiePolicy')}</Link>`);

footerCode = footerCode.replace(/>Subscribe to unlock secret deals!<\/h3>/, `>{t('subscribeTitle')}</h3>`);
footerCode = footerCode.replace(/>Get member-only prices and travel inspiration sent straight to your inbox\.<\/p>/, `>{t('subscribeDesc')}</p>`);
footerCode = footerCode.replace(/placeholder="Enter your email address"/, `placeholder={t('placeholderEmail')}`);
footerCode = footerCode.replace(/>\s*Subscribe\s*<\/button>/, `>\n                {t('btnSubscribe')}\n              </button>`);
footerCode = footerCode.replace(/FlightChap\. All rights reserved\./, `FlightChap. {t('allRightsReserved')}`);

fs.writeFileSync(path.join(__dirname, 'components/layout/Footer.tsx'), footerCode);

console.log('Update finished');
