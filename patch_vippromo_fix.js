const fs = require('fs');
let file = 'components/home/VIPPromoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'justify-center p-2 px-3 text-sm bg-yellow-100',
  'justify-center p-3 bg-yellow-100'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Star icon padding');
