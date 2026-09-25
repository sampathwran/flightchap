const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure ChevronDown is imported
if (!content.includes('ChevronDown')) {
  content = content.replace("import { Menu, X, User, Globe, ChevronDown }", "import { Menu, X, User, Globe, ChevronDown }");
  if (!content.includes('ChevronDown')) {
    content = content.replace("import { Menu, X, User, Globe } from 'lucide-react';", "import { Menu, X, User, Globe, ChevronDown } from 'lucide-react';");
  }
}

const oldDesktopLang = `<div className="flex items-center gap-1 hover:text-blue-200 transition">
              <Globe className="h-4 w-4" />
              <select 
                value={locale} 
                onChange={switchLocale}
                className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer drop-shadow-md appearance-none"
              >`;
const newDesktopLang = `<div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full pl-3 pr-2 py-1.5 transition-all cursor-pointer relative group">
              <Globe className="h-4 w-4 text-white" />
              <select 
                value={locale} 
                onChange={switchLocale}
                className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer drop-shadow-md appearance-none pr-4"
              >`;
content = content.replace(oldDesktopLang, newDesktopLang);

// Inject ChevronDown right after the closing select tag for desktop
const closeSelect = `                <option value="tr" className="text-black">TR</option>
              </select>
            </div>`;
const newCloseSelect = `                <option value="tr" className="text-black">TR</option>
              </select>
              <ChevronDown className="h-3 w-3 text-white/70 absolute right-3 pointer-events-none group-hover:text-white transition-colors" />
            </div>`;
content = content.replace(closeSelect, newCloseSelect);


// Let's also add ChevronDown to mobile to make it perfect
const oldMobileLang = `className="bg-transparent text-slate-800 font-bold text-lg border-none outline-none cursor-pointer appearance-none text-right"
                >
                  <option value="en">English (EN)</option>`;
const newMobileLang = `className="bg-transparent text-slate-800 font-bold text-lg border-none outline-none cursor-pointer appearance-none text-right pr-6 relative z-10"
                >
                  <option value="en">English (EN)</option>`;
content = content.replace(oldMobileLang, newMobileLang);

const oldMobileClose = `<option value="de">Deutsch (DE)</option>
                </select>
             </div>`;
const newMobileClose = `<option value="de">Deutsch (DE)</option>
                </select>
                <div className="absolute right-6 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
             </div>`;
content = content.replace(oldMobileClose, newMobileClose);

// We need to add "relative" to the wrapper of mobile language selector
const oldMobileWrap = `<div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200">`;
const newMobileWrap = `<div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 relative">`;
content = content.replace(oldMobileWrap, newMobileWrap);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Language Selector styling');
