const fs = require('fs');

let content = fs.readFileSync('components/home/MemberDeals.tsx', 'utf8');
// It added import { doc, setDoc, deleteDoc, onSnapshot } because it matched my regex. Let's clean up imports.
content = content.replace("import { doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';", "");
// Now just make sure the required ones are there
content = content.replace("import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';", 
  "import { collection, query, orderBy, onSnapshot, doc, setDoc, deleteDoc } from 'firebase/firestore';");
fs.writeFileSync('components/home/MemberDeals.tsx', content, 'utf8');
