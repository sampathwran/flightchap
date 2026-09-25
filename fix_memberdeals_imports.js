const fs = require('fs');
let file = 'components/home/MemberDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import { useState, useEffect } from 'react';",
  "import { useState, useEffect, useRef } from 'react';"
);

// Also check ChevronLeft and ChevronRight
if (!content.includes('ChevronLeft')) {
  content = content.replace("import { Lock, Star, ArrowRight, Heart } from 'lucide-react';", "import { Lock, Star, ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';");
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed MemberDeals imports');
