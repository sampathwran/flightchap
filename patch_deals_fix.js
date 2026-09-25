const fs = require('fs');
let file = 'app/[locale]/deals/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\* Special Offers \*\/\}\s*\{specialOffers\.length > 0 && \([\s\S]*?<\/section>\s*\)\}/g;
content = content.replace(regex, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Removed Special Offers block properly');
