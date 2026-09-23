"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Heart, Bell, Tag, Settings, LogOut, Plane, Copy, CheckCircle, Trash2 } from 'lucide-react';
import { auth, db } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const t = useTranslations('Profile');
  const [activeTab, setActiveTab] = useState('saved');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const [promoCodes, setPromoCodes] = useState<any[]>([]);
  const [savedDeals, setSavedDeals] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Fetch Promo Codes globally
  useEffect(() => {
    const q = query(collection(db, 'promo_codes'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setPromoCodes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  // Fetch User's Saved Deals
  useEffect(() => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/saved_deals`), orderBy('savedAt', 'desc'));
      const unsub = onSnapshot(q, (snapshot) => {
        setSavedDeals(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsub();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const removeSavedDeal = async (dealId: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, `users/${user.uid}/saved_deals`, dealId));
    } catch (error) {
      console.error("Error removing deal", error);
    }
  };

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center pt-20"><div className="animate-pulse flex items-center gap-2"><div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div> Loading...</div></div>;
  }

  // Dummy Fare Alerts (Will make real later)
  const fareAlerts = [
    { id: 1, from: "CMB (Colombo)", to: "DXB (Dubai)", targetPrice: "< $250", currentPrice: "$310" },
    { id: 2, from: "CMB (Colombo)", to: "MEL (Melbourne)", targetPrice: "< $600", currentPrice: "$720" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-200 mb-4 border-4 border-white shadow-md">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-slate-400 bg-slate-100">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold text-slate-800">{user.displayName || 'Member'}</h2>
                <p className="text-sm text-slate-500 mb-4">{user.email}</p>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  VIP Member
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <nav className="flex flex-col">
                <button onClick={() => setActiveTab('saved')} className={`flex items-center gap-3 px-6 py-4 font-medium transition ${activeTab === 'saved' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Heart className="h-5 w-5" /> {t('tabSaved')} <span className="ml-auto bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full text-xs">{savedDeals.length}</span>
                </button>
                <button onClick={() => setActiveTab('alerts')} className={`flex items-center gap-3 px-6 py-4 font-medium transition ${activeTab === 'alerts' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Bell className="h-5 w-5" /> {t('tabAlerts')}
                </button>
                <button onClick={() => setActiveTab('promos')} className={`flex items-center gap-3 px-6 py-4 font-medium transition ${activeTab === 'promos' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Tag className="h-5 w-5" /> {t('tabPromos')}
                </button>
                <div className="h-px bg-slate-100 my-2"></div>
                <button onClick={handleLogout} className="flex items-center gap-3 px-6 py-4 font-medium text-red-500 hover:bg-red-50 transition">
                  <LogOut className="h-5 w-5" /> {t('logout')}
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4">
            
            {activeTab === 'saved' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('savedTitle')}</h2>
                <p className="text-slate-500 mb-8">{t('savedSubtitle')}</p>
                
                {savedDeals.length === 0 ? (
                  <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Heart className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-700">No saved deals yet</h3>
                    <p className="text-slate-500 mt-1">Browse our offers and click the heart icon to save them here.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedDeals.map(deal => (
                      <div key={deal.id} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition group">
                        <div className="h-40 relative overflow-hidden">
                          <img src={deal.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                            {deal.discount}
                          </div>
                          <button onClick={() => removeSavedDeal(deal.id)} className="absolute top-2 left-2 bg-white/90 hover:bg-red-50 p-1.5 rounded-full text-red-500 shadow-sm transition">
                            <Heart className="h-4 w-4 fill-current" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-slate-800 mb-3">{deal.title}</h3>
                          <button onClick={() => window.open(deal.targetUrl || '#', '_blank')} className="w-full py-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 font-bold rounded-lg transition text-sm">
                            View Deal
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'alerts' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('alertsTitle')}</h2>
                <p className="text-slate-500 mb-8">{t('alertsSubtitle')}</p>
                
                <div className="space-y-4">
                  {fareAlerts.map(alert => (
                    <div key={alert.id} className="flex flex-col sm:flex-row items-center justify-between p-5 border border-slate-200 rounded-xl hover:border-blue-200 transition bg-slate-50/50">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                          <Plane className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 font-bold text-slate-800">
                            {alert.from} <span className="text-slate-400">→</span> {alert.to}
                          </div>
                          <div className="text-sm text-slate-500 mt-1">
                            Target: <span className="font-bold text-green-600">{alert.targetPrice}</span> • Current: {alert.currentPrice}
                          </div>
                        </div>
                      </div>
                      <button className="w-full sm:w-auto px-4 py-2 text-sm text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition font-medium border border-slate-200 sm:border-none">
                        Remove
                      </button>
                    </div>
                  ))}
                  
                  <button className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition font-medium flex items-center justify-center gap-2">
                    <Bell className="h-5 w-5" /> Add New Fare Alert (Coming Soon)
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'promos' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('promosTitle')}</h2>
                <p className="text-slate-500 mb-8">{t('promosSubtitle')}</p>
                
                {promoCodes.length === 0 ? (
                  <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Tag className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-700">No active promo codes</h3>
                    <p className="text-slate-500 mt-1">Check back later for VIP discounts.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {promoCodes.map(promo => (
                      <div key={promo.id} className="border border-slate-200 rounded-2xl p-6 relative overflow-hidden group">
                        <div className={`absolute top-0 left-0 w-1 h-full ${promo.color || 'bg-blue-500'}`}></div>
                        <h3 className="font-bold text-slate-800 text-lg mb-1">{promo.provider}</h3>
                        <p className="text-slate-500 text-sm mb-4">{promo.discount}</p>
                        
                        <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between border border-dashed border-slate-300">
                          <span className="font-mono font-bold text-slate-700 tracking-wider">{promo.code}</span>
                          <button 
                            onClick={() => copyToClipboard(promo.code)}
                            className="text-blue-600 hover:text-blue-800 transition p-1"
                          >
                            {copiedCode === promo.code ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
