const fs = require('fs');
let file = 'components/layout/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "to: email,",
  "to: email,\n        from: 'FlightChap <info@flightchap.com>',"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Added from email address');
