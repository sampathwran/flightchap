const fs = require('fs');
const path = require('path');

let code = fs.readFileSync(path.join(__dirname, 'components/home/RecentViews.tsx'), 'utf8');
code = code.replace(/Your Recent Searches/, `{t('title')}`);
fs.writeFileSync(path.join(__dirname, 'components/home/RecentViews.tsx'), code);
