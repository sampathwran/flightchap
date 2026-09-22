const fs = require('fs');
const path = require('path');

const navbarPath = path.join(__dirname, 'components/layout/Navbar.tsx');
let code = fs.readFileSync(navbarPath, 'utf8');

// Imports
code = code.replace(
  "import { Plane, User, Menu, Globe, Headphones, Briefcase } from 'lucide-react';",
  "import { Plane, User, Menu, Globe, Headphones, Briefcase } from 'lucide-react';\nimport { useTranslations } from 'next-intl';\nimport { Link, usePathname, useRouter } from '@/i18n/routing';\nimport { useLocale } from 'next-intl';"
);

// We need to remove the native next/link import if we imported custom Link
code = code.replace("import Link from 'next/link';\n", "");

// Add useTranslations hook
code = code.replace(
  "export default function Navbar() {",
  `export default function Navbar() {
  const t = require('next-intl').useTranslations('Navbar');
  const locale = require('next-intl').useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };
`
);

// Replace texts
code = code.replace(/>Home<\/Link>/, ">{t('home')}</Link>");
code = code.replace(/>\s*Support\s*<\/Link>/, ">{t('support')}</Link>");
code = code.replace(/>\s*My Bookings\s*<\/Link>/, ">{t('myBookings')}</Link>");
code = code.replace(/>\s*Sign In\s*<\/button>/, ">{t('signIn')}</button>");

// Add Locale Switcher Dropdown replacing the "USD | EN" button
const localeSwitcher = `
            <div className="flex items-center gap-1 hover:text-blue-200 transition">
              <Globe className="h-4 w-4" />
              <select 
                value={locale} 
                onChange={switchLocale}
                className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer drop-shadow-md appearance-none"
              >
                <option value="en" className="text-black">EN</option>
                <option value="si" className="text-black">SI</option>
                <option value="es" className="text-black">ES</option>
                <option value="fr" className="text-black">FR</option>
                <option value="de" className="text-black">DE</option>
                <option value="zh" className="text-black">ZH</option>
                <option value="ar" className="text-black">AR</option>
                <option value="hi" className="text-black">HI</option>
                <option value="ru" className="text-black">RU</option>
                <option value="pt" className="text-black">PT</option>
                <option value="ja" className="text-black">JA</option>
                <option value="ko" className="text-black">KO</option>
                <option value="it" className="text-black">IT</option>
                <option value="nl" className="text-black">NL</option>
                <option value="tr" className="text-black">TR</option>
              </select>
            </div>
`;
code = code.replace(
  /<button className="flex items-center gap-1 hover:text-blue-200 transition">\s*<Globe className="h-4 w-4" \/>\s*<span>USD \| EN<\/span>\s*<\/button>/,
  localeSwitcher
);

// Also replace the mobile menu versions
code = code.replace(/<span className="font-medium text-lg text-slate-800">USD \| EN<\/span>/, `<span className="font-medium text-lg text-slate-800">Language: {locale.toUpperCase()}</span>`);
code = code.replace(/>Home<\/Link>/g, ">{t('home')}</Link>"); // Catch any remaining
code = code.replace(/>Support<\/Link>/g, ">{t('support')}</Link>");
code = code.replace(/>My Bookings<\/Link>/g, ">{t('myBookings')}</Link>");
code = code.replace(/>Sign In<\/button>/g, ">{t('signIn')}</button>");

fs.writeFileSync(navbarPath, code);
console.log('Navbar updated for i18n');
