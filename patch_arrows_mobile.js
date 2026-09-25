const fs = require('fs');
let file = 'components/home/FlashDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"',
  'className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"'
);

content = content.replace(
  'className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"',
  'className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"'
);

// We need to also check if they want ONE card at a time.
// If they want literally ONE card at a time on all screens, we could do `w-full`. But usually, that's just a misinterpretation of a cached load.
// "eka wathawakata ekak penunama athi" - "showing one at a time is enough". If they meant mobile, `w-[100%]` already does that.
// Let's make sure it's 100% on mobile.
content = content.replace(
  'className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start',
  'className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed arrow visibility on mobile');
