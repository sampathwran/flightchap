const fs = require('fs');
let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');

// Desktop Menu Replace
const desktopOld = `<Link href="/bookings" className="flex items-center gap-1 hover:text-blue-200 transition">
                <Briefcase className="h-4 w-4" />
                {t('myBookings')}
              </Link>`;
const desktopNew = `<Link href="/about" className="hover:text-blue-200 transition">{t('aboutUs')}</Link>
              <Link href="/contact" className="hover:text-blue-200 transition">{t('contactUs')}</Link>`;

// Mobile Menu Replace
const mobileOld = `<Link href="/bookings" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              {t('myBookings')}
            </Link>`;
const mobileNew = `<Link href="/about" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('aboutUs')}</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('contactUs')}</Link>`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(desktopOld.replace(/\r\n/g, '\n'), desktopNew);
content = content.replace(mobileOld.replace(/\r\n/g, '\n'), mobileNew);

fs.writeFileSync('components/layout/Navbar.tsx', content, 'utf8');
