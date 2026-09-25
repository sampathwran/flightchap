'use client';
import { useAuth } from '@/context/AuthContext';
import { Link } from '@/i18n/routing';
import { Tag, Lock, ArrowRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function VIPPromoSection() {
  const { user } = useAuth();
  const [promos, setPromos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPromos() {
      const q = query(collection(db, 'promo_codes'), orderBy('createdAt', 'desc'), limit(10));
      const snapshot = await getDocs(q);
      setPromos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchPromos();
  }, []);

  if (promos.length === 0) return null;

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
            <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Members VIP Club</h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Exclusive Member Discounts. Unlock premium travel deals and secret rates available only to our registered members.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x scroll-smooth">
          {promos.map(promo => (
            <div key={promo.id} className="w-[85vw] sm:w-[45vw] md:w-[340px] shrink-0 snap-start bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#673AB7]"></div>
              
              <div className="flex items-start gap-2 px-3 text-sm mb-3">
                {promo.imageUrl ? (
                  <img src={promo.imageUrl} alt={promo.provider} className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#673AB7]/10 text-[#673AB7] flex items-center justify-center font-bold text-2xl">
                    {promo.provider?.charAt(0) || '%'}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{promo.provider}</h3>
                  <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs font-bold rounded mt-1">{promo.discountBadge || promo.discount || 'Special Offer'}</span>
                </div>
              </div>
              
              {promo.description && (
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{promo.description}</p>
              )}

              <div className="mt-auto">
                {user ? (
                  <Link href="/profile" className="w-full flex items-center justify-between p-2 px-3 text-sm bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-100 transition group/btn">
                    <span>View Promo Code</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link href="/login" className="w-full flex items-center justify-between p-2 px-3 text-sm bg-slate-100 text-slate-500 rounded-xl font-medium hover:bg-slate-200 transition group/btn">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      <span>Login to unlock code</span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
