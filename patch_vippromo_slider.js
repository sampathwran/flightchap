const fs = require('fs');
let file = 'components/home/VIPPromoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Increase limit
content = content.replace('limit(3)', 'limit(10)');

// Change grid to flex overflow
content = content.replace(
  '<div className="grid grid-cols-1 md:grid-cols-3 gap-6">',
  '<div className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x scroll-smooth">'
);

// Update card classes to be fixed width and shrink-0 for the slider
content = content.replace(
  'className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition relative overflow-hidden group"',
  'className="min-w-[280px] md:min-w-[340px] flex-1 shrink-0 snap-start bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition relative overflow-hidden group flex flex-col"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated VIPPromoSection to be a slider');
