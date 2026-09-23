"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from '@/i18n/routing';
import { Lock, Star, ArrowRight } from 'lucide-react';

export default function MemberDeals() {
  const { user } = useAuth();
  const router = useRouter();

  const deals = [
    {
      id: 1,
      title: "Secret Bali Villa Getaway",
      discount: "40% OFF",
      description: "Exclusive rate for members on premium beachfront villas in Seminyak. Includes free breakfast.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      targetUrl: "https://www.agoda.com" // Placeholder
    },
    {
      id: 2,
      title: "Priority Airport Lounge Access",
      discount: "Buy 1 Get 1",
      description: "VIP lounge access worldwide. Members only special offer for long layovers.",
      image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=600&q=80",
      targetUrl: "https://www.prioritypass.com"
    },
    {
      id: 3,
      title: "First Class Flight Upgrades",
      discount: "Save up to ",
      description: "Unlock hidden upgrade inventory on major international routes with our partner airlines.",
      image: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=600&q=80",
      targetUrl: "https://www.emirates.com"
    }
  ];

  const handleBookNow = (e: React.MouseEvent, targetUrl: string) => {
    e.preventDefault();
    if (!user) {
      router.push('/login');
    } else {
      window.open(targetUrl, '_blank');
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden my-8">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-orange-400 font-semibold tracking-wider text-sm uppercase">
              <Star className="h-4 w-4 fill-current" />
              Members VIP Club
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Exclusive Member Discounts</h2>
            <p className="text-slate-400 mt-2 max-w-2xl">Unlock premium travel deals and secret rates available only to our registered members.</p>
          </div>
          {!user && (
            <button onClick={() => router.push('/login')} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition font-medium border border-white/10">
              <Lock className="h-4 w-4" />
              Sign up to unlock all
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map(deal => (
            <div key={deal.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {deal.discount}
                </div>
                {!user && (
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-100 transition">
                    <div className="bg-slate-900/80 p-3 rounded-full shadow-2xl border border-slate-600">
                      <Lock className="h-6 w-6 text-slate-300" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{deal.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{deal.description}</p>
                <button 
                  onClick={(e) => handleBookNow(e, deal.targetUrl)}
                  className={w-full py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 }
                >
                  {user ? (
                    <>Unlock Deal <ArrowRight className="h-4 w-4" /></>
                  ) : (
                    <><Lock className="h-4 w-4" /> Sign in to Book</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
