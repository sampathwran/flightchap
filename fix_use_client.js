const fs = require('fs');
const path = require('path');

function fixUseClient(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  if (code.includes("'use client';")) {
    code = code.replace(/'use client';\r?\n/, "");
    code = "'use client';\n" + code;
    fs.writeFileSync(filePath, code);
  } else if (code.includes('"use client";')) {
    code = code.replace(/"use client";\r?\n/, "");
    code = '"use client";\n' + code;
    fs.writeFileSync(filePath, code);
  }
}

fixUseClient(path.join(__dirname, 'components/home/HeroSearch.tsx'));
fixUseClient(path.join(__dirname, 'components/layout/Navbar.tsx'));

console.log('Fixed use client directive position');
