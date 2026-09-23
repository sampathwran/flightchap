const fs = require('fs');
let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');

const badMobile = `<Link href="/about" className="hover:text-blue-200 transition">{t('aboutUs')}</Link>
              <Link href="/contact" className="hover:text-blue-200 transition">{t('contactUs')}</Link>
        </div>
        <div className="pt-4 pb-4 border-t border-slate-200 px-5 flex flex-col gap-4">`;
        
content = content.replace(/<Link href="\/about" className="hover:text-blue-200 transition">\{t\('aboutUs'\)\}<\/Link>\s*<Link href="\/contact" className="hover:text-blue-200 transition">\{t\('contactUs'\)\}<\/Link>\s*<\/div>\s*<div className="pt-4 pb-4 border-t border-slate-200 px-5 flex flex-col gap-4">/g, 
`<Link href="/about" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('aboutUs')}</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('contactUs')}</Link>
        </div>
        <div className="pt-4 pb-4 border-t border-slate-200 px-5 flex flex-col gap-4">`);

fs.writeFileSync('components/layout/Navbar.tsx', content, 'utf8');
