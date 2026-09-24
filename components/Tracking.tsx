'use client';

import { useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';
import { doc, setDoc, increment } from 'firebase/firestore';

export default function Tracking() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    // Track Visit
    const trackVisit = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const dailyRef = doc(db, 'daily_analytics', today);
        await setDoc(dailyRef, { visits: increment(1) }, { merge: true });

        const allTimeRef = doc(db, 'all_time_analytics', 'totals');
        await setDoc(allTimeRef, { visits: increment(1) }, { merge: true });
      } catch (err) {
        console.error('Failed to track visit:', err);
      }
    };
    trackVisit();

    // Track Clicks globally (debounced to avoid spam, maybe max 1 per 5 seconds?)
    let lastClick = 0;
    const trackClick = async () => {
      const now = Date.now();
      if (now - lastClick < 3000) return; // limit to 1 per 3 seconds
      lastClick = now;

      try {
        const today = new Date().toISOString().split('T')[0];
        const dailyRef = doc(db, 'daily_analytics', today);
        setDoc(dailyRef, { clicks: increment(1) }, { merge: true });

        const allTimeRef = doc(db, 'all_time_analytics', 'totals');
        setDoc(allTimeRef, { clicks: increment(1) }, { merge: true });
      } catch (err) {
        // silently fail
      }
    };

    window.addEventListener('click', trackClick, { capture: true });

    return () => {
      window.removeEventListener('click', trackClick, { capture: true });
    };

  }, []);

  return null;
}
