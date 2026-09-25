const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, orderBy, limit } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAqKRcaw2sEC4qDlF8Sb3sVYJ45gevPJto",
  authDomain: "flightchap-6b6f2.firebaseapp.com",
  projectId: "flightchap-6b6f2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkMail() {
  try {
    const q = query(collection(db, 'mail'), limit(5));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      console.log('No documents found in mail collection.');
      return;
    }
    snapshot.forEach(doc => {
      console.log('Mail doc:', doc.id);
      const data = doc.data();
      console.log('To:', data.to);
      console.log('Delivery:', JSON.stringify(data.delivery, null, 2));
      console.log('---');
    });
  } catch (err) {
    console.error('Error reading mail collection:', err.message);
  }
}
checkMail();
