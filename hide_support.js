const fs = require('fs');
const path = require('path');

let navbarCode = fs.readFileSync(path.join(__dirname, 'components/layout/Navbar.tsx'), 'utf8');
// Remove Support link from Desktop Menu
navbarCode = navbarCode.replace(
  /<Link href="\/support" className="flex items-center gap-1 hover:text-blue-200 transition">[\s\S]*?<\/Link>/,
  `{/* Support link hidden for now */}`
);
// Remove Support link from Mobile Menu
navbarCode = navbarCode.replace(
  /<Link href="\/support" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">\{t\('support'\)\}<\/Link>/,
  `{/* Support link hidden */}`
);
fs.writeFileSync(path.join(__dirname, 'components/layout/Navbar.tsx'), navbarCode);

let footerCode = fs.readFileSync(path.join(__dirname, 'components/layout/Footer.tsx'), 'utf8');
// Remove Help Center and Contact Us from Footer
footerCode = footerCode.replace(
  /<li><Link href="\/help-center" className="hover:text-blue-400 transition">\{t\('helpCenter'\)\}<\/Link><\/li>/,
  `{/* <li><Link href="/help-center" className="hover:text-blue-400 transition">{t('helpCenter')}</Link></li> */}`
);
footerCode = footerCode.replace(
  /<li><Link href="\/contact" className="hover:text-blue-400 transition">\{t\('contactUs'\)\}<\/Link><\/li>/,
  `{/* <li><Link href="/contact" className="hover:text-blue-400 transition">{t('contactUs')}</Link></li> */}`
);
fs.writeFileSync(path.join(__dirname, 'components/layout/Footer.tsx'), footerCode);

console.log('Support links hidden');
