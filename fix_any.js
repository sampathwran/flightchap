const fs = require('fs');
let code = fs.readFileSync('components/home/TopDestinations.tsx', 'utf8');

code = code.replace(/useState<string\[\]>\(\[\]\)/g, 'useState<Record<string, any>[]>([])');

fs.writeFileSync('components/home/TopDestinations.tsx', code, 'utf8');
