const fs = require('fs');
let content = fs.readFileSync('C:\\src\\flightchap\\components\\home\\TopDestinations.tsx', 'utf8');

// Replace specific lines to remove where query
content = content.replace(
  "const countriesQuery = query(collection(db, 'countries'), where('target_website', '==', 'flightchap'));",
  "const countriesQuery = query(collection(db, 'countries'));"
);

content = content.replace(
  "const citiesQuery = query(collection(db, 'cities'), where('target_website', '==', 'flightchap'));",
  "const citiesQuery = query(collection(db, 'cities'));"
);

fs.writeFileSync('C:\\src\\flightchap\\components\\home\\TopDestinations.tsx', content, 'utf8');
console.log('Fixed TopDestinations.tsx in flightchap!');
