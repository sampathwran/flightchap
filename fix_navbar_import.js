const fs = require('fs');
let file = 'components/layout/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("import { Plane", "import { ChevronDown, Plane");

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed ChevronDown import');
