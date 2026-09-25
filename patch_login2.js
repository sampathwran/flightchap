const fs = require('fs');
let file = 'app/[locale]/login/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldEmailAuth = `        await setDoc(doc(db, 'users', cred.user.uid), {
          email: cred.user.email,
          createdAt: serverTimestamp(),
        }, { merge: true });`;

const newEmailAuth = `        await setDoc(doc(db, 'users', cred.user.uid), {
          email: cred.user.email,
          createdAt: serverTimestamp(),
        }, { merge: true });
        
        await setDoc(doc(db, 'subscribers', cred.user.email || ''), {
          email: cred.user.email,
          createdAt: serverTimestamp(),
          source: 'registration'
        }, { merge: true });`;

const oldGoogleAuth = `      await setDoc(doc(db, 'users', cred.user.uid), {
        email: cred.user.email,
        name: cred.user.displayName,
        photoURL: cred.user.photoURL,
        lastLogin: serverTimestamp(),
      }, { merge: true });`;

const newGoogleAuth = `      await setDoc(doc(db, 'users', cred.user.uid), {
        email: cred.user.email,
        name: cred.user.displayName,
        photoURL: cred.user.photoURL,
        lastLogin: serverTimestamp(),
      }, { merge: true });

      await setDoc(doc(db, 'subscribers', cred.user.email || ''), {
        email: cred.user.email,
        createdAt: serverTimestamp(),
        source: 'registration'
      }, { merge: true });`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldEmailAuth, newEmailAuth);
content = content.replace(oldGoogleAuth, newGoogleAuth);
content = content.replace(/\n/g, '\r\n');

fs.writeFileSync(file, content, 'utf8');
console.log('Updated login to also add users to subscribers collection');
