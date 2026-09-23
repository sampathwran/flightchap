const fs = require('fs');
let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');

// Use regex to remove myBookings completely
content = content.replace(/<Link href="\/bookings"[\s\S]*?\{t\('myBookings'\)\}\s*<\/Link>/g, 
  `<Link href="/about" className="hover:text-blue-200 transition">{t('aboutUs')}</Link>\n              <Link href="/contact" className="hover:text-blue-200 transition">{t('contactUs')}</Link>`);

// Fix mobile styles
content = content.replace(/<Link href="\/about" className="hover:text-blue-200 transition">\{t\('aboutUs'\)\}<\/Link>\s*<Link href="\/contact" className="hover:text-blue-200 transition">\{t\('contactUs'\)\}<\/Link>/g, (match, offset, string) => {
    // If it's in the mobile section (checking surrounding context roughly)
    if(string.substring(Math.max(0, offset - 100), offset).includes('hidden md:hidden')) {
       return `<Link href="/about" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('aboutUs')}</Link>\n            <Link href="/contact" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('contactUs')}</Link>`;
    }
    return match; // Leave desktop as is
});

// For mobile, the first regex replace might have put desktop classes into mobile, let's fix that
content = content.replace(/<Link href="\/bookings" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">\{t\('myBookings'\)\}<\/Link>/g, 
`<Link href="/about" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('aboutUs')}</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('contactUs')}</Link>`);


fs.writeFileSync('components/layout/Navbar.tsx', content, 'utf8');
