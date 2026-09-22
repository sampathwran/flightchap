const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, 'components/layout/Footer.tsx');
let code = fs.readFileSync(footerPath, 'utf8');

code = code.replace(
  "import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';",
  "import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';\nimport { useTranslations } from 'next-intl';\nimport { Link } from '@/i18n/routing';"
);
code = code.replace("import Link from 'next/link';\n", "");

code = code.replace(
  "export default function Footer() {",
  "export default function Footer() {\n  const t = useTranslations('Footer');"
);

code = code.replace(/>About Us<\/h3>/, ">{t('aboutUs')}</h3>");
code = code.replace(/>Contact<\/h3>/, ">{t('contact')}</h3>");
code = code.replace(/>Privacy Policy<\/Link>/, ">{t('privacyPolicy')}</Link>");
code = code.replace(/>Terms of Service<\/Link>/, ">{t('termsOfService')}</Link>");
code = code.replace(/© 2026 FlightChap. All rights reserved./, "© 2026 FlightChap. {t('allRightsReserved')}");

fs.writeFileSync(footerPath, code);
console.log('Footer updated');
