import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Car, Users, Briefcase } from 'lucide-react';

export const revalidate = 60; 

async function fetchVehicles(collectionName: string) {
  try {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}`, error);
    return [];
  }
}

export default async function VehiclesPage() {
  const [popularVehicles, transferVehicles] = await Promise.all([
    fetchVehicles('popular_vehicles'),
    fetchVehicles('transfer_vehicles')
  ]);

  const VehicleCard = ({ vehicle, isTransfer = false }: any) => {
    return (
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
        <div className="relative h-56 overflow-hidden">
          {vehicle.img || vehicle.imageUrl ? (
            <img src={vehicle.img || vehicle.imageUrl} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <Car className="w-12 h-12 text-slate-400" />
            </div>
          )}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
            {isTransfer ? 'Airport Transfer' : 'Popular Choice'}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {vehicle.name}
          </h3>
          
          <p className="text-slate-500 text-sm mb-6 line-clamp-2">
            {vehicle.desc || vehicle.description || 'Comfortable and reliable vehicle for your journey.'}
          </p>
          
          <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
              <Users className="w-4 h-4 text-blue-500" />
              <span>{vehicle.pax || 4} Pax</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
              <Briefcase className="w-4 h-4 text-orange-500" />
              <span>{vehicle.luggage || 2} Bags</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-16">
      <div className="bg-[#1a0b2e] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Fleet</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Choose from our wide range of comfortable, reliable, and affordable vehicles for your next trip.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Popular Vehicles */}
        {popularVehicles.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Popular Rental Vehicles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularVehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}
            </div>
          </section>
        )}

        {/* Transfer Vehicles */}
        {transferVehicles.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Airport Transfer Vehicles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {transferVehicles.map(v => <VehicleCard key={v.id} vehicle={v} isTransfer={true} />)}
            </div>
          </section>
        )}

        {popularVehicles.length === 0 && transferVehicles.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">No Vehicles Available</h2>
            <p className="text-slate-500">Please check back later.</p>
          </div>
        )}

      </div>
    </div>
  );
}
