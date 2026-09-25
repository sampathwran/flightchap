const fs = require('fs');
let file = 'components/home/MemberDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

// Imports
content = content.replace("import { useEffect, useState } from 'react';", "import { useEffect, useState, useRef } from 'react';");
content = content.replace("import { Tag, MoveRight, Heart } from 'lucide-react';", "import { Tag, MoveRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';");

// Slider ref
if (!content.includes('sliderRef')) {
  content = content.replace("const [deals, setDeals] = useState<any[]>([]);", "const [deals, setDeals] = useState<any[]>([]);\n  const sliderRef = useRef<HTMLDivElement>(null);");
}

const regexOldContainer = /<div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">/g;
const newContainer = `<div className="relative group">
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => sliderRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg border border-slate-100 rounded-full p-2 text-slate-800 hover:bg-white hover:text-blue-600 transition md:opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div ref={sliderRef} className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">`;

content = content.replace(regexOldContainer, newContainer);

const closePoint = `          </div>
        <div className="mt-8 text-center sm:hidden">`;
const newClosePoint = `          </div>
        </div>
        <div className="mt-8 text-center sm:hidden">`;
content = content.replace(closePoint, newClosePoint);

content = content.replace(
  `             </div>
          </div>
        </section>`,
  `             </div>
          </div>
          </div>
        </section>`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed MemberDeals arrows');
