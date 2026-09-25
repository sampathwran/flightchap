const fs = require('fs');
let file = 'components/home/FlashDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

// Container
content = content.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">',
  '<div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">'
);
content = content.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">',
  '<div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">'
);

// Children items (Deals)
content = content.replace(
  /className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col relative"/g,
  'className="w-[85vw] sm:w-[45vw] lg:w-auto shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col relative"'
);

// Loading skeleton
content = content.replace(
  /className="h-72 bg-slate-100 rounded-xl animate-pulse"/g,
  'className="w-[85vw] sm:w-[45vw] lg:w-auto shrink-0 h-72 bg-slate-100 rounded-xl animate-pulse"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed FlashDeals mobile slider');
