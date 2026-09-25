const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// State and imports
if (!content.includes('isLangOpen')) {
  content = content.replace(
    'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);',
    'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const [isLangOpen, setIsLangOpen] = useState(false);'
  );
}

// Languages array
const langsArray = `  const languages = [
    { code: 'en', name: 'English (EN)' },
    { code: 'si', name: 'සිංහල (SI)' },
    { code: 'es', name: 'Español (ES)' },
    { code: 'fr', name: 'Français (FR)' },
    { code: 'de', name: 'Deutsch (DE)' },
    { code: 'zh', name: '中文 (ZH)' },
    { code: 'ar', name: 'العربية (AR)' },
    { code: 'hi', name: 'हिन्दी (HI)' },
    { code: 'ru', name: 'Русский (RU)' },
    { code: 'pt', name: 'Português (PT)' },
    { code: 'ja', name: '日本語 (JA)' },
    { code: 'ko', name: '한국어 (KO)' },
    { code: 'it', name: 'Italiano (IT)' },
    { code: 'nl', name: 'Nederlands (NL)' },
    { code: 'tr', name: 'Türkçe (TR)' },
  ];`;

if (!content.includes('const languages = [')) {
  content = content.replace(
    'const pathname = usePathname();',
    `const pathname = usePathname();\n\n${langsArray}`
  );
}

// SwitchLocale
content = content.replace(
  `const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };`,
  `const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsLangOpen(false);
  };`
);

// Desktop dropdown
const oldDesktop = `<div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full pl-3 pr-2 py-1.5 transition-all cursor-pointer relative group">
              <Globe className="h-4 w-4 text-white" />
              <select 
                value={locale} 
                onChange={switchLocale}
                className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer drop-shadow-md appearance-none pr-4"
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
              <ChevronDown className="h-3 w-3 text-white/70 absolute right-3 pointer-events-none group-hover:text-white transition-colors" />
            </div>`;

const newDesktop = `<div className="relative">
              <div 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1.5 transition-all cursor-pointer group select-none"
              >
                <Globe className="h-4 w-4 text-white" />
                <span className="text-white font-medium text-sm">{locale.toUpperCase()}</span>
                <ChevronDown className={\`h-3 w-3 text-white/70 group-hover:text-white transition-all \${isLangOpen ? 'rotate-180' : ''}\`} />
              </div>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="p-3 border-b border-slate-50 bg-slate-50/50">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Language</p>
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2 grid grid-cols-2 gap-1">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className={\`text-left px-3 py-2 rounded-xl text-sm font-medium transition-all \${locale === lang.code ? 'bg-[#673AB7] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}\`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>`;
content = content.replace(oldDesktop, newDesktop);

// Mobile dropdown
const oldMobile = `<div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 relative">
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
                  className="bg-transparent text-slate-800 font-bold text-lg border-none outline-none cursor-pointer appearance-none text-right pr-6 relative z-10"
                >
                  <option value="en">English (EN)</option>
                  <option value="si">????? (SI)</option>
                  <option value="es">Espaol (ES)</option>
                  <option value="fr">Franais (FR)</option>
                  <option value="de">Deutsch (DE)</option>
                </select>
                <div className="absolute right-6 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
             </div>`;

const newMobile = `<div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
               <div 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-slate-50 transition"
               >
                 <div className="flex items-center gap-3 text-slate-600 font-medium">
                   <Globe className="h-5 w-5" />
                   <span className="text-lg">Language: <span className="font-bold text-slate-900">{languages.find(l => l.code === locale)?.name?.split(' ')[0] || locale.toUpperCase()}</span></span>
                 </div>
                 <ChevronDown className={\`h-5 w-5 text-slate-400 transition-transform \${isLangOpen ? 'rotate-180' : ''}\`} />
               </div>
               
               {isLangOpen && (
                 <div className="p-3 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-2 max-h-[40vh] overflow-y-auto">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          switchLocale(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={\`text-left px-3 py-3 rounded-xl text-sm font-medium transition-all \${locale === lang.code ? 'bg-[#673AB7] text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-[#673AB7]/30'}\`}
                      >
                        {lang.name}
                      </button>
                    ))}
                 </div>
               )}
             </div>`;
             
content = content.replace(oldMobile, newMobile);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Language Selector Custom Dropdown');
