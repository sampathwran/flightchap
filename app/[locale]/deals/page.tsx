import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Tag, Zap, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';

export const revalidate = 60; 

async function fetchDeals(collectionName: string) {
  try {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}`, error);
    return [];
  }
}

export default async function DealsPage() {
  const [flashDeals, memberDeals, specialOffers] = await Promise.all([
    fetchDeals('flash_deals'),
    fetchDeals('member_deals'),
    fetchDeals('special_offers')
  ]);

  const DealCard = ({ deal, isFlash = false, isSpecial = false }: any) => {
    return (
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative">
        <div className="relative h-48 overflow-hidden">
          {deal.imageUrl || deal.img ? (
            <img src={deal.imageUrl || deal.img} alt={deal.title || deal.provider} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400">No Image</span>
            </div>
          )}
          {(deal.discountBadge || deal.discount) && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
              {deal.discountBadge || deal.discount}
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {deal.title || deal.provider || deal.name}
          </h3>
          
          <p className="text-slate-500 text-sm mb-4 line-clamp-2">
            {deal.description || deal.desc || 'Grab this amazing offer while it lasts!'}
          </p>
          
          <a href={deal.targetUrl || deal.link || '#'} target="_blank" rel="noopener noreferrer" 
             className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl transition ${
               isFlash ? 'bg-orange-500 hover:bg-orange-600 text-white' : 
               isSpecial ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
               'bg-[#673AB7] hover:bg-[#5E35B1] text-white'
             }`}>
            Claim Offer
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-16">
      <div className="bg-gradient-to-r from-[#673AB7] to-[#4527A0] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore All Deals</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Find the best prices on flights, hotels, and holiday packages from our top partners.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Flash Deals */}
        {flashDeals.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-100 text-orange-500 rounded-full">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Flash Deals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {flashDeals.map(deal => <DealCard key={deal.id} deal={deal} isFlash={true} />)}
            </div>
          </section>
        )}

        {/* Member Deals */}
        {memberDeals.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 text-[#673AB7] rounded-full">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Exclusive Member Deals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
            </div>
          </section>
        )}

        {/* Special Offers */}
        {specialOffers.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Tag className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Special Offers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialOffers.map(deal => <DealCard key={deal.id} deal={deal} isSpecial={true} />)}
            </div>
          </section>
        )}

        {flashDeals.length === 0 && memberDeals.length === 0 && specialOffers.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">No Deals Available</h2>
            <p className="text-slate-500">Please check back later for exciting new offers!</p>
          </div>
        )}

      </div>
    </div>
  );
}
