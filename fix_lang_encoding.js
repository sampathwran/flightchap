const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const badLangsRegex = /const languages = \[\s*\{ code: 'en'[\s\S]*?\];/m;
const goodLangs = `const languages = [
    { code: 'en', name: 'English (EN)' },
    { code: 'si', name: '\\u0dc3\\u0dd2\\u0d82\\u0dc4\\u0dbd (SI)' },
    { code: 'es', name: 'Espa\\u00f1ol (ES)' },
    { code: 'fr', name: 'Fran\\u00e7ais (FR)' },
    { code: 'de', name: 'Deutsch (DE)' },
    { code: 'zh', name: '\\u4e2d\\u6587 (ZH)' },
    { code: 'ar', name: '\\u0627\\u0644\\u0639\\u0631\\u0628\\u064a\\u0629 (AR)' },
    { code: 'hi', name: '\\u0939\\u093f\\u0928\\u094d\\u0926\\u0940 (HI)' },
    { code: 'ru', name: '\\u0420\\u0443\\u0441\\u0441\\u043a\\u0438\\u0439 (RU)' },
    { code: 'pt', name: 'Portugu\\u00ea\\u0073 (PT)' },
    { code: 'ja', name: '\\u65e5\\u672c\\u8a9e (JA)' },
    { code: 'ko', name: '\\uD55C\\uAD6D\\uC5B4 (KO)' },
    { code: 'it', name: 'Italiano (IT)' },
    { code: 'nl', name: 'Nederlands (NL)' },
    { code: 'tr', name: 'T\\u00fcrk\\u00e7e (TR)' },
  ];`;

content = content.replace(badLangsRegex, goodLangs);
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Language array encoding');
