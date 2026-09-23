const fs = require('fs');

// FLASH DEALS
let fd = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');

// Insert Heart button on top-3 right-3
const fdSearch = `<div className="relative h-48 overflow-hidden shrink-0">`;
if (!fd.includes('toggleSaveDeal(e, deal)')) {
  // We already added toggleSaveDeal function! Wait, let me check.
}
// Actually, let me just add the button!
const fdReplacement = `<div className="relative h-48 overflow-hidden shrink-0">
                  <button onClick={(e) => toggleSaveDeal(e, deal)} className="absolute top-3 right-3 bg-white/90 hover:bg-slate-50 p-2 rounded-full text-slate-300 shadow-md transition z-20 hover:scale-110">
                    <Heart className={\`h-5 w-5 \${savedDealIds.has(deal.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}\`} />
                  </button>`;
fd = fd.replace(fdSearch, fdReplacement);

// Check if Heart is imported in FlashDeals
if (!fd.includes('Heart} from')) {
  fd = fd.replace("MoveRight } from 'lucide-react';", "MoveRight, Heart } from 'lucide-react';");
}
fs.writeFileSync('components/home/FlashDeals.tsx', fd, 'utf8');


// MEMBER DEALS
let md = fs.readFileSync('components/home/MemberDeals.tsx', 'utf8');
const mdSearch = `<div className="relative h-48 overflow-hidden">`;
const mdReplacement = `<div className="relative h-48 overflow-hidden">
                  <button onClick={(e) => toggleSaveDeal(e, deal)} className="absolute top-3 left-3 bg-white/90 hover:bg-slate-50 p-2 rounded-full text-slate-300 shadow-md transition z-20 hover:scale-110">
                    <Heart className={\`h-5 w-5 \${savedDealIds.has(deal.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}\`} />
                  </button>`;
md = md.replace(mdSearch, mdReplacement);
fs.writeFileSync('components/home/MemberDeals.tsx', md, 'utf8');

console.log("Injected Heart buttons!");
