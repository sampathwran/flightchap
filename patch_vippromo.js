const fs = require('fs');
let file = 'components/home/VIPPromoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Imports
content = content.replace("import { useEffect, useState } from 'react';", "import { useEffect, useState, useRef } from 'react';");
content = content.replace("import { Tag, Lock, ArrowRight, Star } from 'lucide-react';", "import { Tag, Lock, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';");

// Slider ref
if (!content.includes('sliderRef')) {
  content = content.replace("const [promos, setPromos] = useState<any[]>([]);", "const [promos, setPromos] = useState<any[]>([]);\n  const sliderRef = useRef<HTMLDivElement>(null);");
}

// Slider container
const oldContainer = '<div className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x scroll-smooth">';
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

          <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x scroll-smooth">`;

content = content.replace(oldContainer, newContainer);

// Close the relative group div
const closingPoint = `          ))}
        </div>
      </div>
    </section>`;
const newClosingPoint = `          ))}
          </div>
        </div>
      </div>
    </section>`;
content = content.replace(closingPoint, newClosingPoint);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed VIPPromoSection');
