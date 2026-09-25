const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the start of the mobile language wrapper
const startIdx = content.indexOf('<div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 relative">');
if (startIdx !== -1) {
  // Find the end of it
  const endMarker = '</div>\n             </div>';
  let endIdx = content.indexOf(endMarker, startIdx);
  if (endIdx !== -1) {
    endIdx += endMarker.length;
    
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
             
    content = content.slice(0, startIdx) + newMobile + content.slice(endIdx);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed Mobile Dropdown');
  }
}
