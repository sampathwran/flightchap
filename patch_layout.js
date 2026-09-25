const fs = require('fs');
let file = 'app/[locale]/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import Tracking from')) {
  content = content.replace('import { AuthProvider } from \'@/context/AuthContext\';', 'import { AuthProvider } from \'@/context/AuthContext\';\nimport Tracking from \'@/components/Tracking\';');
  
  content = content.replace('<Navbar />', '<Tracking />\n          <Navbar />');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Added tracking to layout');
}
