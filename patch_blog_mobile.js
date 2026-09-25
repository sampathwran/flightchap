const fs = require('fs');
let file = 'components/home/BlogPreview.tsx';
let content = fs.readFileSync(file, 'utf8');

// Container
content = content.replace(
  '<div className="grid grid-cols-1 md:grid-cols-3 gap-8">',
  '<div className="flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-6 snap-x snap-mandatory hide-scrollbar">'
);
content = content.replace(
  '<div className="grid grid-cols-1 md:grid-cols-3 gap-8">',
  '<div className="flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-6 snap-x snap-mandatory hide-scrollbar">'
);

// Children items
content = content.replace(
  /className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col"/g,
  'className="w-[85vw] sm:w-[45vw] md:w-auto shrink-0 snap-start bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col"'
);

// Loading skeleton
content = content.replace(
  /className="h-72 bg-white rounded-xl animate-pulse"/g,
  'className="w-[85vw] sm:w-[45vw] md:w-auto shrink-0 h-72 bg-white rounded-xl animate-pulse"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed BlogPreview mobile slider');
