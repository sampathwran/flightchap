import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSearch from '@/components/home/HeroSearch';
import { Plane, Calendar, MapPin, CheckCircle, Info } from 'lucide-react';
import { Link } from '@/i18n/routing';

const destinations = {
  'new-york': { 
    name: 'New York', code: 'NYC', country: 'United States', 
    color: 'from-blue-600 to-slate-900', 
    description: 'The city that never sleeps.',
    tips: ['Visit Central Park', 'See the Statue of Liberty', 'Catch a Broadway show']
  },
  'london': { 
    name: 'London', code: 'LON', country: 'United Kingdom', 
    color: 'from-red-700 to-slate-900', 
    description: 'Explore the historic capital of the UK.',
    tips: ['Ride the London Eye', 'Visit the British Museum', 'Watch the Changing of the Guard']
  },
  'dubai': { 
    name: 'Dubai', code: 'DXB', country: 'United Arab Emirates', 
    color: 'from-amber-500 to-slate-900', 
    description: 'Experience luxury and stunning architecture.',
    tips: ['Go to the top of Burj Khalifa', 'Shop at the Dubai Mall', 'Experience a Desert Safari']
  },
  'tokyo': { 
    name: 'Tokyo', code: 'TYO', country: 'Japan', 
    color: 'from-rose-600 to-slate-900', 
    description: 'A vibrant mix of traditional and modern.',
    tips: ['Cross the Shibuya Crossing', 'Visit Senso-ji Temple', 'Eat authentic sushi in Tsukiji']
  },
  'paris': { 
    name: 'Paris', code: 'PAR', country: 'France', 
    color: 'from-purple-600 to-slate-900', 
    description: 'The city of light and love.',
    tips: ['Climb the Eiffel Tower', 'See the Mona Lisa at the Louvre', 'Cruise on the Seine River']
  },
};

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.toLowerCase();
  const cityInfo = destinations[cityKey as keyof typeof destinations];
  if (!cityInfo) return { title: 'Flights | FlightChap' };
  
  return {
    title: `Cheap Flights to ${cityInfo.name} (${cityInfo.code}) | FlightChap`,
    description: `Find the best deals on flights to ${cityInfo.name}. Compare airlines and book cheap tickets today.`,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ locale: string, city: string }> }) {
  const resolvedParams = await params;
  const cityKey = resolvedParams.city.toLowerCase() as keyof typeof destinations;
  const cityInfo = destinations[cityKey];

  if (!cityInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-br ${cityInfo.color} pt-24 pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white backdrop-blur-md text-sm font-semibold tracking-wide mb-6 uppercase">
            Flights to {cityInfo.country}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-md">
            Cheap Flights to {cityInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-sm font-light">
            {cityInfo.description} Find the best prices and book your next adventure with FlightChap.
          </p>
        </div>
      </div>

      {/* Search Widget Container (Pulled up over the background) */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-4">
          <HeroSearch />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Tips & Info */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MapPin className="text-blue-500 w-6 h-6" /> Why visit {cityInfo.name}?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {cityInfo.name} is one of the most exciting destinations in {cityInfo.country}. Whether you're traveling for business or leisure, comparing flights in advance is the best way to secure a cheap ticket.
            </p>
            <h3 className="font-semibold text-slate-800 mb-3 text-lg">Top things to do:</h3>
            <ul className="space-y-3">
              {cityInfo.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Info className="text-blue-500 w-5 h-5" /> Travel Tips
            </h2>
            <p className="text-blue-800/80 leading-relaxed text-sm">
              Book your tickets at least 3 weeks in advance to get cheaper rates. Tuesdays and Wednesdays are usually the cheapest days to fly. Don't forget to check the visa requirements for {cityInfo.country} before your departure.
            </p>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Plane className="text-slate-400 w-5 h-5" /> Popular Destinations
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(destinations).map(([key, dest]) => (
                key !== cityKey && (
                  <Link key={key} href={`/flights/${key}`} className="text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between group">
                    <span>Flights to {dest.name}</span>
                    <span className="text-slate-300 group-hover:text-blue-400 transition-colors">?</span>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
