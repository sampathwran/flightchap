const fs = require('fs');
let file = 'components/home/FlashDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix Buttons (Global Replace)
content = content.replace(/className="absolute -left-4 top-1\/2 -translate-y-1\/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"/g, 'className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"');
content = content.replace(/className="absolute -right-4 top-1\/2 -translate-y-1\/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"/g, 'className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"');

// Fix Main Card Class (which currently lacks the widths!)
content = content.replace(
  /className="cursor-pointer group rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"/g,
  'className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start cursor-pointer group rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed FlashDeals completely');
