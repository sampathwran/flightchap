const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update hamburger button
const mobileBtnRegex = /<button className="text-white hover:text-blue-200 transition p-2">[\s\S]*?<Menu className="h-6 w-6 drop-shadow-md" \/>[\s\S]*?<\/button>/;
const newMobileBtn = `<button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-200 transition p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 drop-shadow-md" /> : <Menu className="h-6 w-6 drop-shadow-md" />}
            </button>`;
content = content.replace(mobileBtnRegex, newMobileBtn);

// Replace Mobile Menu entirely
const mobileMenuRegex = /<div className="hidden md:hidden bg-white text-slate-800">[\s\S]*?<\/nav>/;
const newMobileMenu = `{isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-800 absolute w-full left-0 top-full shadow-2xl border-b border-slate-200 z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('home')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">Blog</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('aboutUs')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('contactUs')}</Link>
          </div>
          
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-4">
             <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200">
               <div className="flex items-center gap-2 text-slate-600 font-medium">
                 <Globe className="h-5 w-5" />
                 <span>Language</span>
               </div>
               <select 
                  value={locale} 
                  onChange={(e) => {
                    switchLocale(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-transparent text-slate-800 font-bold text-lg border-none outline-none cursor-pointer appearance-none text-right"
                >
                  <option value="en">English (EN)</option>
                  <option value="si">????? (SI)</option>
                  <option value="es">Español (ES)</option>
                  <option value="fr">Français (FR)</option>
                  <option value="de">Deutsch (DE)</option>
                </select>
             </div>
             
             {user ? (
                <div className="flex flex-col gap-3">
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/profile" className="w-full flex justify-center items-center gap-2 bg-slate-200 text-slate-800 hover:bg-slate-300 px-5 py-3.5 rounded-xl transition font-semibold text-lg shadow-sm">
                    <User className="h-5 w-5" />
                    My Profile
                  </Link>
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full flex justify-center items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-5 py-3.5 rounded-xl transition font-semibold text-lg shadow-sm">
                    Logout
                  </button>
                </div>
             ) : (
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/login" className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-3.5 rounded-xl transition font-semibold text-lg shadow-md">
                  <User className="h-5 w-5" />
                  {t('signIn')}
                </Link>
             )}
          </div>
        </div>
      )}
    </nav>`;

content = content.replace(mobileMenuRegex, newMobileMenu);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Mobile Menu');
