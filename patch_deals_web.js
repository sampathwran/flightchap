const fs = require('fs');
let dealsPath = 'app/[locale]/deals/page.tsx';
if (fs.existsSync(dealsPath)) {
  let content = fs.readFileSync(dealsPath, 'utf8');

  // Remove fetch for special offers
  content = content.replace(/,\s*fetchDeals\('special_offers'\)/g, '');
  content = content.replace(/const \[flashDeals, memberDeals, specialOffers\] = /g, 'const [flashDeals, memberDeals] = ');
  
  // Remove special offers section entirely
  content = content.replace(
    /\{\/\* Special Offers \*\/\}\s*\{specialOffers\.length > 0 && \([\s\S]*?<\section>\s*\)\}/g,
    ''
  );
  
  // Fix the empty state check
  content = content.replace(
    /flashDeals\.length === 0 && memberDeals\.length === 0 && specialOffers\.length === 0/g,
    'flashDeals.length === 0 && memberDeals.length === 0'
  );
  
  fs.writeFileSync(dealsPath, content, 'utf8');
  console.log('Removed special offers from web frontend');
}
