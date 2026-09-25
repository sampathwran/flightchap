const fs = require('fs');
let file = 'components/home/VIPPromoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className="min-w-[280px] md:min-w-[340px] flex-1 shrink-0 snap-start bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition relative overflow-hidden group flex flex-col"',
  'className="w-[85vw] sm:w-[45vw] md:w-[340px] shrink-0 snap-start bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition relative overflow-hidden group flex flex-col"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed VIPPromoSection mobile width');
