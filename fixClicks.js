const fs = require('fs');

function fixToggleSaveDeal(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace e.preventDefault() with e.preventDefault(); e.stopPropagation();
  content = content.replace("e.preventDefault();", "e.preventDefault();\n    e.stopPropagation();");
  
  fs.writeFileSync(filePath, content, 'utf8');
}

fixToggleSaveDeal('components/home/FlashDeals.tsx');
fixToggleSaveDeal('components/home/MemberDeals.tsx');
console.log("Fixed click propagation");
