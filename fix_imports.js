const fs = require('fs');
const path = require('path');

// 1. Fix Footer
const footerPath = path.join(__dirname, 'components/layout/Footer.tsx');
let footerCode = fs.readFileSync(footerPath, 'utf8');
if (!footerCode.includes("import { useTranslations }")) {
  footerCode = `import { useTranslations } from 'next-intl';\nimport { Link } from '@/i18n/routing';\n` + footerCode;
}
if (footerCode.includes("import Link from 'next/link';")) {
  footerCode = footerCode.replace("import Link from 'next/link';", "");
}
fs.writeFileSync(footerPath, footerCode);

// 2. Fix HeroSearch
const heroSearchPath = path.join(__dirname, 'components/home/HeroSearch.tsx');
let heroCode = fs.readFileSync(heroSearchPath, 'utf8');
if (!heroCode.includes("import { useTranslations }")) {
  heroCode = `import { useTranslations } from 'next-intl';\n` + heroCode;
}
fs.writeFileSync(heroSearchPath, heroCode);

console.log('Fixed imports');
