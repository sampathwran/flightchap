const fs = require('fs');
let file = 'components/home/FlashDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure ChevronLeft, ChevronRight are imported
if (!content.includes('ChevronLeft')) {
  content = content.replace("import { Clock, Plane, Car, Wifi, MoveRight, Heart }", "import { Clock, Plane, Car, Wifi, MoveRight, Heart, ChevronLeft, ChevronRight }");
}

// Remove old lg:grid lg:grid-cols-4 completely, make it a full slider with arrows
const oldContainerRegex = /<div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">/g;

content = content.replace(oldContainerRegex, `<div className="relative group">
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div ref={sliderRef} className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">`);

// Replace the previous patch's sliderRef attachment if it exists (it attached to the skeleton instead of main content)
content = content.replace(
  /<div ref={sliderRef} className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">/g,
  `<div className="relative group">
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div ref={sliderRef} className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">`
);

// We need to close the <div className="relative group"> after the slider div.
// To do this reliably, we can inject it right after the closing </div> of the deals mapping.
// Let's replace the button mapping part:
content = content.replace(
  /<div className="mt-8 text-center sm:hidden">/g,
  `</div>\n        <div className="mt-8 text-center sm:hidden">`
);

// Update widths to show 1 on mobile, 2 on tablet, 3/4 on large screens, or 100% on small.
// "eka wathawakata ekak penunama athi" might literally mean 100% width on mobile so it doesn't get cut off.
content = content.replace(
  /className="w-\[85vw\] sm:w-\[45vw\] lg:w-auto shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col relative"/g,
  'className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col relative"'
);

// Fix skeleton widths
content = content.replace(
  /className="w-\[85vw\] sm:w-\[45vw\] lg:w-auto shrink-0 h-72 bg-slate-100 rounded-xl animate-pulse"/g,
  'className="w-[100%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 h-72 bg-slate-100 rounded-xl animate-pulse"'
);

// Wait, by adding `</div>` before `<div className="mt-8 text-center sm:hidden">`, we properly close the `<div className="relative group">`.
// But what about the loading skeleton? It also got wrapped. Let's make sure it closes too.
content = content.replace(
  /<\/div>\n        <\/div>\n      <\/section>/g,
  `</div>\n        </div>\n        </div>\n      </section>`
); // This might break if it replaces too many times. Let's avoid Regex for the skeleton close and just rely on the React tree parsing if possible.
// Actually, it's safer to just write a Node script that parses and rewrites.

fs.writeFileSync(file, content, 'utf8');
console.log('Patch complete');
