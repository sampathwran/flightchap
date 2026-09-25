const fs = require('fs');
let file = 'components/layout/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "<li><Link href=\"#\" className=\"hover:text-blue-400 transition\">{t('flightsNewYork')}</Link></li>",
  "<li><Link href=\"/flights/new-york\" className=\"hover:text-blue-400 transition\">{t('flightsNewYork')}</Link></li>"
);
content = content.replace(
  "<li><Link href=\"#\" className=\"hover:text-blue-400 transition\">{t('flightsLondon')}</Link></li>",
  "<li><Link href=\"/flights/london\" className=\"hover:text-blue-400 transition\">{t('flightsLondon')}</Link></li>"
);
content = content.replace(
  "<li><Link href=\"#\" className=\"hover:text-blue-400 transition\">{t('flightsDubai')}</Link></li>",
  "<li><Link href=\"/flights/dubai\" className=\"hover:text-blue-400 transition\">{t('flightsDubai')}</Link></li>"
);
content = content.replace(
  "<li><Link href=\"#\" className=\"hover:text-blue-400 transition\">{t('flightsTokyo')}</Link></li>",
  "<li><Link href=\"/flights/tokyo\" className=\"hover:text-blue-400 transition\">{t('flightsTokyo')}</Link></li>"
);
content = content.replace(
  "<li><Link href=\"#\" className=\"hover:text-blue-400 transition\">{t('flightsParis')}</Link></li>",
  "<li><Link href=\"/flights/paris\" className=\"hover:text-blue-400 transition\">{t('flightsParis')}</Link></li>"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Footer Links');
