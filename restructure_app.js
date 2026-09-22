const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const localeDir = path.join(appDir, '[locale]');

// Create [locale] directory if it doesn't exist
if (!fs.existsSync(localeDir)) {
  fs.mkdirSync(localeDir);
}

// Items to move
const itemsToMove = ['blog', 'deals', 'search', 'layout.tsx', 'page.tsx'];

itemsToMove.forEach(item => {
  const oldPath = path.join(appDir, item);
  const newPath = path.join(localeDir, item);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${item} to [locale]`);
  }
});
