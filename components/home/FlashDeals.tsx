'use client';
import { useEffect, useState } from 'react';
import { Clock, Plane, Car, Wifi, MoveRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { collection, query, where, getDocs, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from '@/i18n/routing';

interface Deal {
  id: string;
  category: string;
  title: string;
  from: string;
  to: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
  targetUrl: string;
  discountBadge: string;
  endTime: Date;
}

export default function FlashDeals() {
  const t = useTranslations('FlashDeals');
  const { user } = useAuth();
  const router = useRouter();

  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [savedDealIds, setSavedDealIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setSavedDealIds(new Set());
      return;
    }
    const unsub = onSnapshot(collection(db, `users/${user.uid}/saved_deals`), (snapshot) => {
      const ids = new Set<string>();
      snapshot.forEach(doc => ids.add(doc.id));
      setSavedDealIds(ids);
    });
    return () => unsub();
  }, [user]);

  const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {
    e.preventDefault();
    if (!user) {
      router.push('/login');
      return;
    }
    
    const dealRef = doc(db, `users/${user.uid}/saved_deals`, deal.id);
    if (savedDealIds.has(deal.id)) {
      await deleteDoc(dealRef);
    } else {
      await setDoc(dealRef, {
        dealId: deal.id,
        title: deal.title,
        discount: deal.discount,
        imageUrl: deal.imageUrl,
        targetUrl: deal.targetUrl,
        savedAt: new Date().toISOString()
      });
    }
  };
  const [activeTab, setActiveTab] = useState('All');

  // Dynamically generate categories based on available deals
  const dynamicCategories = ['All', ...Array.from(new Set(deals.map(d => d.category)))].filter(Boolean);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const q = query(collection(db, 'flash_deals'));
        const querySnapshot = await getDocs(q);
        let fetchedDeals: Deal[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedDeals.push({
            id: doc.id,
            category: data.category || 'Flights',
            title: data.title || '',
            from: data.from || '',
            to: data.to || '',
            price: data.price || '',
            originalPrice: data.originalPrice || '',
            imageUrl: data.imageUrl || '',
            targetUrl: data.targetUrl || '#',
            discountBadge: data.discountBadge || '',
            endTime: data.endTime?.toDate() || new Date(),
          });
        });
        
        // Sort by endTime descending
        fetchedDeals.sort((a, b) => b.endTime.getTime() - a.endTime.getTime());
        setDeals(fetchedDeals);
      } catch (error) {
        console.error("Error fetching deals:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDeals();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="animate-pulse h-10 w-48 bg-slate-200 rounded mx-auto mb-8"></div>
           <div className="flex justify-center gap-4 mb-8">
             {[1,2,3,4,5].map(i => <div key={i} className="h-10 w-24 bg-slate-200 rounded-full animate-pulse"></div>)}
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[1,2,3,4].map(i => <div key={i} className="h-72 bg-slate-100 rounded-xl animate-pulse"></div>)}
           </div>
        </div>
      </section>
    );
  }

  if (deals.length === 0) return null; // Don't show section if no deals

  const filteredDeals = activeTab === 'All' ? deals.slice(0, 8) : deals.filter(d => d.category === activeTab).slice(0, 8);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Flights': return <Plane className="h-3 w-3" />;
      case 'Transfers': return <MoveRight className="h-3 w-3" />;
      case 'Cars': return <Car className="h-3 w-3" />;
      case 'e-SIMs': return <Wifi className="h-3 w-3" />;
      default: return <Plane className="h-3 w-3" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('title')}</h2>
            <p className="text-slate-600">{t('subtitle')}</p>
          </div>
          <Link href="/deals" className="text-blue-600 font-semibold hover:underline hidden sm:block">
            {t('viewAll')}
          </Link>
        </div>

        {/* Categories Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-3 scrollbar-hide">
          {dynamicCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors border ${
                activeTab === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.length > 0 ? filteredDeals.map((deal) => {
             const isExpired = deal.endTime < new Date();
             
             return (
              <a href={deal.targetUrl} target="_blank" rel="noopener noreferrer" key={deal.id} className="group rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <button onClick={(e) => toggleSaveDeal(e, deal)} className="absolute top-3 right-3 bg-white/90 hover:bg-slate-50 p-2 rounded-full text-slate-300 shadow-md transition z-20 hover:scale-110">
                    <Heart className={`h-5 w-5 ${savedDealIds.has(deal.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                  </button>
                  {deal.imageUrl ? (
                    <img 
                      src={deal.imageUrl} 
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">No Image</div>
                  )}
                  
                  {isExpired ? (
                    <div className="absolute top-3 left-3 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Expired
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Clock className="h-3 w-3" /> 
                      {deal.discountBadge ? deal.discountBadge : 'Ending Soon'}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-blue-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                    {getCategoryIcon(deal.category)} {deal.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  
                  {/* From -> To display for flights/transfers */}
                  {(deal.category === 'Flights' || deal.category === 'Transfers') && deal.to ? (
                    <div className="mb-2">
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{deal.from || 'Origin'} <MoveRight className="inline h-3 w-3 mx-1"/> {deal.to}</p>
                    </div>
                  ) : deal.to ? (
                    <div className="mb-2">
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{deal.to}</p>
                    </div>
                  ) : null}

                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{deal.title}</h3>
                  
                  <div className="mt-auto pt-4 flex items-end justify-between border-t border-slate-50">
                    <div>
                      {deal.originalPrice && (
                        <span className="text-xs text-slate-400 line-through block">{deal.originalPrice}</span>
                      )}
                      <span className="text-xl font-bold text-blue-600">{deal.price || t('checkDeal')}</span>
                    </div>
                    <div className="bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-md group-hover:bg-blue-600 transition-colors">
                      Book Now
                    </div>
                  </div>
                </div>
              </a>
            );
          }) : (
            <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              {t('noDeals')} {activeTab}.
            </div>
          )}
        </div>
        
        {filteredDeals.length > 0 && (
          <div className="mt-8 text-center sm:hidden">
            <Link href="/deals" className="inline-block border border-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition">
              {t('viewAllMobile')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
