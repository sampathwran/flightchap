'use client';
import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Plane, Bus, Car, Smartphone, Globe, Signal, Clock } from 'lucide-react';

const tabs = [
  { 
    id: 'flights', 
    label: 'Flights', 
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80',
    title: 'Find Your Next Adventure',
    subtitle: 'Compare cheap flights from hundreds of airlines worldwide.'
  },
  { 
    id: 'rental', 
    label: 'Car & Bike Rental', 
    icon: Car,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80',
    title: 'Hit the Road on Your Terms',
    subtitle: 'Rent cars and bikes at the best prices for your journey.'
  },
  { 
    id: 'transfers', 
    label: 'Transfers', 
    icon: Bus,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80',
    title: 'Hassle-Free Airport Transfers',
    subtitle: 'Book reliable taxis and shuttles to and from the airport.'
  },
  { 
    id: 'esim', 
    label: 'e-SIM', 
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1920&q=80',
    title: 'Stay Connected Everywhere',
    subtitle: 'Get instant internet access with our travel e-SIM packages.'
  }
];

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="relative text-white min-h-[75vh] flex items-center justify-center transition-all duration-700 ease-in-out">
      {/* Background Images */}
      {tabs.map((tab, idx) => (
        <div 
          key={tab.id}
          className={bsolute inset-0 transition-opacity duration-1000 ease-in-out }
        >
          <img src={tab.image} alt={tab.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/50"></div> 
        </div>
      ))}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        
        {/* Dynamic Titles */}
        <div className="text-center mb-10 h-28">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg transition-all duration-500">
            {tabs[activeTab].title}
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-md transition-all duration-500">
            {tabs[activeTab].subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 overflow-x-auto hide-scrollbar px-2">
          <div className="flex bg-slate-900/60 backdrop-blur-md rounded-xl p-1 gap-1">
            {tabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(idx)}
                  className={lex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm md:text-base }
                >
                  <TabIcon className="h-4 w-4 md:h-5 md:w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Form Box */}
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-5xl mx-auto text-slate-800 min-h-[120px]">
          
          {/* FLIGHTS FORM */}
          {activeTab === 0 && (
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-opacity duration-500">
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">From</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <MapPin className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="City or Airport" className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">To</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <MapPin className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="City or Airport" className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Dates</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Calendar className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="Depart - Return" className="w-full outline-none bg-transparent text-sm font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Passengers</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Users className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" value="1 Adult, Economy" readOnly className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium" />
                </div>
              </div>
              <div className="flex items-end">
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Flights
                </button>
              </div>
            </form>
          )}

          {/* RENTAL FORM */}
          {activeTab === 1 && (
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-opacity duration-500">
              <div className="relative lg:col-span-2">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Pick-up Location</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <MapPin className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="City, Airport, or Address" className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Dates</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Calendar className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="Pick-up - Drop-off" className="w-full outline-none bg-transparent text-sm font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Vehicle</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Car className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <select className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium text-slate-700">
                    <option>Any Vehicle</option>
                    <option>Economy Car</option>
                    <option>SUV</option>
                    <option>Motorbike</option>
                  </select>
                </div>
              </div>
              <div className="flex items-end">
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Find Vehicles
                </button>
              </div>
            </form>
          )}

          {/* TRANSFERS FORM */}
          {activeTab === 2 && (
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-opacity duration-500">
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Pick-up</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <MapPin className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="Airport or Hotel" className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Drop-off</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <MapPin className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="Hotel or Address" className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Date & Time</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Calendar className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="Pick-up Time" className="w-full outline-none bg-transparent text-sm font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Passengers</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Users className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" value="2 Passengers" readOnly className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium" />
                </div>
              </div>
              <div className="flex items-end">
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Transfers
                </button>
              </div>
            </form>
          )}

          {/* e-SIM FORM */}
          {activeTab === 3 && (
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-opacity duration-500">
              <div className="relative lg:col-span-2">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Destination</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Globe className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder="Where are you traveling to?" className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Duration</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Clock className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <select className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium text-slate-700">
                    <option>7 Days</option>
                    <option>15 Days</option>
                    <option>30 Days</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Data Package</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Signal className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <select className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium text-slate-700">
                    <option>3 GB</option>
                    <option>5 GB</option>
                    <option>10 GB</option>
                    <option>Unlimited</option>
                  </select>
                </div>
              </div>
              <div className="flex items-end">
                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Find e-SIMs
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 absolute bottom-8 left-0 right-0 z-20">
          {tabs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={h-2.5 rounded-full transition-all duration-300 }
              aria-label={Go to slide }
            />
          ))}
        </div>

      </div>
    </div>
  );
}
