const fs = require('fs');
let content = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');

content = content.replace("import { collection, query, where, getDocs } from 'firebase/firestore';", 
  "import { collection, query, where, getDocs, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';");

fs.writeFileSync('components/home/FlashDeals.tsx', content, 'utf8');
