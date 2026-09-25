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
    // We want the most recent attempts, so we need to order by something. Wait, no timestamp to order by unless delivery.startTime is queryable? No index. Let's just fetch all and sort.
    const q = query(collection(db, 'mail'));
    const snapshot = await getDocs(q);
    const docs = [];
    snapshot.forEach(doc => {
      const d = doc.data();
      const st = d.delivery && d.delivery.startTime ? d.delivery.startTime.seconds : 0;
      docs.push({ id: doc.id, data: d, startTime: st });
    });
    docs.sort((a, b) => b.startTime - a.startTime); // newest first
    
    docs.slice(0, 3).forEach(doc => {
      console.log('ID:', doc.id);
      console.log('State:', doc.data.delivery ? doc.data.delivery.state : 'No delivery info');
      console.log('Error:', doc.data.delivery ? doc.data.delivery.error : 'No error');
      console.log('---');
    });
  } catch (err) {
    console.error('Error:', err.message);
  }
}
checkMail();
