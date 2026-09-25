const fs = require('fs');
let file = 'components/home/FlashDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add useRef import if missing
if (!content.includes('useRef')) {
  content = content.replace("import { useEffect, useState } from 'react';", "import { useEffect, useState, useRef } from 'react';");
}

// Add sliderRef and auto-scroll logic
const hookInsertPoint = /const router = useRouter\(\);\n/;
if (!content.includes('sliderRef')) {
  content = content.replace(hookInsertPoint, `const router = useRouter();\n  const sliderRef = useRef<HTMLDivElement>(null);\n\n  // Auto-scroll logic\n  useEffect(() => {\n    const interval = setInterval(() => {\n      if (sliderRef.current) {\n        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;\n        if (sliderRef.current.scrollLeft >= maxScrollLeft - 10) {\n          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });\n        } else {\n          const scrollAmount = sliderRef.current.clientWidth < 640 ? sliderRef.current.clientWidth * 0.85 : 340;\n          sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });\n        }\n      }\n    }, 4000);\n    return () => clearInterval(interval);\n  }, []);\n`);
}

// Attach sliderRef to container
content = content.replace(
  '<div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">',
  '<div ref={sliderRef} className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">'
);

// Reduce height of images and paddings to make it look nicer and shorter
content = content.replace(/className="relative h-48 overflow-hidden shrink-0"/g, 'className="relative h-36 overflow-hidden shrink-0"');
content = content.replace(/className="p-5 flex flex-col flex-1"/g, 'className="p-4 flex flex-col flex-1"');
content = content.replace(/className="mt-auto pt-4 flex items-end justify-between border-t border-slate-50"/g, 'className="mt-auto pt-3 flex items-end justify-between border-t border-slate-50"');
content = content.replace(/<h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{deal.title}<\/h3>/g, '<h3 className="text-base font-bold text-slate-900 mb-1 line-clamp-2">{deal.title}</h3>');
content = content.replace(/<span className="text-xl font-bold text-blue-600">/g, '<span className="text-lg font-bold text-blue-600">');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed FlashDeals height and auto-slide');
