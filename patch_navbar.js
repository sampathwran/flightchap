const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove Deals and Vehicles from Desktop Menu
content = content.replace(
  /<Link href="\/deals" className="hover:text-blue-200 transition">Deals<\/Link>\s*<Link href="\/vehicles" className="hover:text-blue-200 transition">Vehicles<\/Link>/g,
  ""
);

// 2. Remove Deals and Vehicles from Mobile Menu
content = content.replace(
  /<Link href="\/deals" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">Deals<\/Link>\s*<Link href="\/vehicles" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">Vehicles<\/Link>/g,
  ""
);

// 3. Extract the Language Selector
const langSelectorRegex = /<div className="flex items-center gap-1 hover:text-blue-200 transition">\s*<Globe className="h-4 w-4" \/>\s*<select[\s\S]*?<\/select>\s*<\/div>/;
const langSelectorMatch = content.match(langSelectorRegex);
let langSelectorStr = '';

if (langSelectorMatch) {
  langSelectorStr = langSelectorMatch[0];
  // Remove it from the original location
  content = content.replace(langSelectorRegex, "");
}

// 4. Insert the Language Selector before User Actions
const userActionsRegex = /<div className="hidden md:flex items-center space-x-4">/;
content = content.replace(
  userActionsRegex,
  `<div className="hidden md:flex items-center space-x-4">\n            ${langSelectorStr}`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Navbar layout');
