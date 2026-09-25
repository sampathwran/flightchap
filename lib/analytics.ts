import { db } from './firebase';
import { doc, setDoc, increment } from 'firebase/firestore';

export const trackClick = async (type: string = 'general') => {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    const dailyRef = doc(db, 'daily_analytics', today);
    await setDoc(dailyRef, { clicks: increment(1) }, { merge: true });

    const allTimeRef = doc(db, 'all_time_analytics', 'totals');
    await setDoc(allTimeRef, { clicks: increment(1) }, { merge: true });
    
  } catch (err) {
    console.error('Failed to track click:', err);
  }
};
