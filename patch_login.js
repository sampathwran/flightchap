const fs = require('fs');
let file = 'app/[locale]/login/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add Firestore imports
content = content.replace(
  "import { auth, googleProvider } from '@/lib/firebase';",
  "import { auth, googleProvider, db } from '@/lib/firebase';\nimport { doc, setDoc, serverTimestamp } from 'firebase/firestore';"
);

// Update email auth
const oldEmailAuth = `      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }`;
      
const newEmailAuth = `      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', cred.user.uid), {
          email: cred.user.email,
          createdAt: serverTimestamp(),
        }, { merge: true });
      }`;
      
// Update Google auth
const oldGoogleAuth = `    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');`;
      
const newGoogleAuth = `    try {
      const cred = await signInWithPopup(auth, googleProvider);
      await setDoc(doc(db, 'users', cred.user.uid), {
        email: cred.user.email,
        name: cred.user.displayName,
        photoURL: cred.user.photoURL,
        lastLogin: serverTimestamp(),
      }, { merge: true });
      router.push('/');`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldEmailAuth, newEmailAuth);
content = content.replace(oldGoogleAuth, newGoogleAuth);
content = content.replace(/\n/g, '\r\n');

fs.writeFileSync(file, content, 'utf8');
console.log('Updated login logic to save users to Firestore');
