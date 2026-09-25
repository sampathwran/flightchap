const fs = require('fs');
['en.json', 'si.json'].forEach(file => {
  const path = `messages/${file}`;
  let content = fs.readFileSync(path);
  if (content[0] === 0xEF && content[1] === 0xBB && content[2] === 0xBF) {
    content = content.slice(3);
    fs.writeFileSync(path, content);
    console.log(`Removed BOM from ${file}`);
  }
});
