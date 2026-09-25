const fs = require('fs');

['components/home/MemberDeals.tsx', 'components/home/BlogPreview.tsx', 'components/home/VIPPromoSection.tsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/w-\[85vw\]/g, 'w-[100%]');
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Fixed widths for other sections');
