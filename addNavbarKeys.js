const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const si = JSON.parse(fs.readFileSync('messages/si.json', 'utf8'));

en.Navbar.aboutUs = "About Us";
en.Navbar.contactUs = "Contact Us";

si.Navbar.aboutUs = "අප ගැන";
si.Navbar.contactUs = "සම්බන්ධ වන්න";

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/si.json', JSON.stringify(si, null, 2), 'utf8');
