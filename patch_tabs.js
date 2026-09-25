const fs = require('fs');
let file = 'components/home/HeroSearch.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update the container of the tabs
content = content.replace(
  '<div className="flex bg-slate-900/60 backdrop-blur-md rounded-xl p-1 gap-1">',
  '<div className="grid grid-cols-2 md:flex bg-slate-900/60 backdrop-blur-md rounded-xl p-1 gap-1 w-full md:w-auto">'
);

// Update button classes to justify-center and better padding for mobile
content = content.replace(
  'className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm md:text-base ${',
  'className={`flex items-center justify-center w-full gap-2 px-2 md:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-xs sm:text-sm md:text-base ${'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed tabs mobile layout');
