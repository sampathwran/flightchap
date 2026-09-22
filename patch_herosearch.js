const fs = require('fs');
const path = require('path');

const heroSearchPath = path.join(__dirname, 'components/home/HeroSearch.tsx');
let code = fs.readFileSync(heroSearchPath, 'utf8');

// Add next-intl
code = code.replace(
  "import { Plane, Calendar as CalendarIcon, User, MapPin, Search } from 'lucide-react';",
  "import { Plane, Calendar as CalendarIcon, User, MapPin, Search } from 'lucide-react';\nimport { useTranslations } from 'next-intl';"
);

// Inject useTranslations
code = code.replace(
  "export default function HeroSearch() {",
  "export default function HeroSearch() {\n  const t = useTranslations('HeroSearch');"
);

// Replace hardcoded strings
code = code.replace(/>Where to\?<\/h1>/, ">{t('whereTo')}</h1>");
code = code.replace(/>Search Flights<\/span>/, ">{t('searchFlights')}</span>");
code = code.replace(/>Round trip<\/span>/, ">{t('roundTrip')}</span>");
code = code.replace(/>One way<\/span>/, ">{t('oneWay')}</span>");
code = code.replace(/>Multi-city<\/span>/, ">{t('multiCity')}</span>");
code = code.replace(/>Economy<\/span>/, ">{t('economy')}</span>");
code = code.replace(/>Premium Economy<\/span>/, ">{t('premiumEconomy')}</span>");
code = code.replace(/>Business<\/span>/, ">{t('business')}</span>");
code = code.replace(/>First Class<\/span>/, ">{t('firstClass')}</span>");
code = code.replace(/<div className="text-sm">1 Passenger<\/div>/, `<div className="text-sm">1 {t('passengers')}</div>`);

fs.writeFileSync(heroSearchPath, code);
console.log('HeroSearch updated');
