const fs = require('fs');

function addTabIndex(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<div role="button" onClick=/g, '<div role="button" tabIndex={0} onClick=');
  fs.writeFileSync(file, content, 'utf8');
}

addTabIndex('components/home/FlashDeals.tsx');
addTabIndex('components/home/MemberDeals.tsx');
console.log("Added tabIndex");
