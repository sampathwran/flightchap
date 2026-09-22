const fs = require('fs');
const path = require('path');

const filesToPatch = [
  'components/home/BlogPreview.tsx',
  'components/home/FlashDeals.tsx',
  'components/home/TopDestinations.tsx'
];

for (const file of filesToPatch) {
  const filePath = path.join(__dirname, file);
  let code = fs.readFileSync(filePath, 'utf8');
  
  // Replace the query pattern
  // E.g., query(collection(db, "countries"), where('target_website', '==', 'flightchap'))
  // with collection(db, "countries")
  // Or if it has orderby: query(collection(db, "blogs"), where('target_website', '==', 'flightchap'), orderBy('createdAt', 'desc'))
  
  // A generic replace might be risky, but we can do string replace:
  code = code.replace(/query\(collection\(db, "([^"]+)"\), where\('target_website', '==', 'flightchap'\)\)/g, 'collection(db, "$1")');
  code = code.replace(/query\(collection\(db, '([^']+)'\), where\('target_website', '==', 'flightchap'\)\)/g, 'collection(db, \'$1\')');
  
  // Also if there are multiple constraints like orderBy
  code = code.replace(/where\('target_website', '==', 'flightchap'\), /g, '');
  code = code.replace(/, where\('target_website', '==', 'flightchap'\)/g, '');

  fs.writeFileSync(filePath, code);
  console.log(`Patched ${file}`);
}
