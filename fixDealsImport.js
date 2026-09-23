const fs = require('fs');

function fixImports(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('setDoc')) {
    content = content.replace("import { collection, ", "import { doc, setDoc, deleteDoc, onSnapshot, collection, ");
    // Also if there's an import like: import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
    content = content.replace("orderBy, onSnapshot } from", "orderBy, onSnapshot, doc, setDoc, deleteDoc } from");
  }
  
  fs.writeFileSync(file, content, 'utf8');
}

fixImports('components/home/FlashDeals.tsx');
fixImports('components/home/MemberDeals.tsx');
