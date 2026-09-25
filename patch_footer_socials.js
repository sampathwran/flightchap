const fs = require('fs');
let file = 'components/layout/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import { Facebook, Instagram, Youtube, Music }')) {
  content = content.replace(
    "import { Plane } from 'lucide-react';",
    "import { Plane, Facebook, Instagram, Youtube, Music } from 'lucide-react';"
  );
}

if (!content.includes('import { useEffect')) {
  content = content.replace(
    "import { useState } from 'react';",
    "import { useState, useEffect } from 'react';"
  );
}

if (!content.includes('getDoc')) {
  content = content.replace(
    "import { doc, setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';",
    "import { doc, getDoc, setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';"
  );
}

// Add state and fetch logic inside Footer component
const stateRegex = /const \[success, setSuccess\] = useState\(false\);/;
if (content.match(stateRegex) && !content.includes('const [socials, setSocials]')) {
  content = content.replace(
    stateRegex,
    `const [success, setSuccess] = useState(false);\n  const [socials, setSocials] = useState({ facebook: '', instagram: '', youtube: '', tiktok: '' });\n\n  useEffect(() => {\n    async function fetchSocials() {\n      try {\n        const docSnap = await getDoc(doc(db, 'settings', 'social_media'));\n        if (docSnap.exists()) {\n          setSocials(docSnap.data() as any);\n        }\n      } catch (e) {\n        console.error('Error fetching socials', e);\n      }\n    }\n    fetchSocials();\n  }, []);`
  );
}

// Replace the hardcoded icons block
const iconsBlockRegex = /<div className="flex space-x-6">[\s\S]*?<\/div>/;
const newIconsBlock = `<div className="flex space-x-6">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877F2] transition">
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E4405F] transition">
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {socials.youtube && (
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FF0000] transition">
                <Youtube className="h-5 w-5" />
              </a>
            )}
            {socials.tiktok && (
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                <Music className="h-5 w-5" />
              </a>
            )}
          </div>`;

content = content.replace(iconsBlockRegex, newIconsBlock);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Footer.tsx with dynamic social links');
