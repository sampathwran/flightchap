const fs = require('fs');
let file = 'components/home/BlogPreview.tsx';
let content = fs.readFileSync(file, 'utf8');

// Imports
content = content.replace("import { useEffect, useState } from 'react';", "import { useEffect, useState, useRef } from 'react';");
content = content.replace("import { ArrowRight } from 'lucide-react';", "import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';");

// Slider ref
if (!content.includes('sliderRef')) {
  content = content.replace("const [posts, setPosts] = useState<BlogPost[]>([]);", "const [posts, setPosts] = useState<BlogPost[]>([]);\n  const sliderRef = useRef<HTMLDivElement>(null);");
}

// Slider container replacement
const oldContainer = '<div className="flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-6 snap-x snap-mandatory hide-scrollbar">';
const newContainer = `<div className="relative group">
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div ref={sliderRef} className="flex flex-row overflow-x-auto gap-6 md:gap-8 pb-6 snap-x snap-mandatory hide-scrollbar">`;

content = content.replace(oldContainer, newContainer); // Main
content = content.replace(oldContainer, newContainer); // Skeleton - wait, if there are multiple occurrences, I'll use regex.

const regexOldContainer = /<div className="flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-6 snap-x snap-mandatory hide-scrollbar">/g;
content = content.replace(regexOldContainer, newContainer);

// Close the relative group div after mapping is done
const closePoint = `          </div>
        <div className="mt-8 text-center md:hidden">`;
const newClosePoint = `          </div>
        </div>
        <div className="mt-8 text-center md:hidden">`;
content = content.replace(closePoint, newClosePoint);

// For skeleton closing, if any
content = content.replace(
  `             </div>
          </div>
        </section>`,
  `             </div>
          </div>
          </div>
        </section>`
);

// We need to make sure we don't double wrap the skeleton if I already replaced it. Let's write a targeted node script.
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed BlogPreview arrows');
