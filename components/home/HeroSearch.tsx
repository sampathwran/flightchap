"use client";
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Users, Plane, Bus, Car, Smartphone, Globe, Signal, Clock } from 'lucide-react';

const FlightWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://tpwidg.com/content?currency=usd&trs=575255&shmarker=769308&locale=en&stops=any&show_hotels=true&powered_by=true&border_radius=0&plain=true&color_button=%2300A991&color_button_text=%23ffffff&promo_id=3414&campaign_id=111';
    script.async = true;
    script.charset = 'utf-8';
    containerRef.current.appendChild(script);
  }, []);
  return <div ref={containerRef} className="w-full bg-white rounded-xl overflow-hidden min-h-[150px] flex items-center justify-center transition-opacity duration-500" />;
};

const RentalWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://tpwidg.com/content?trs=575255&shmarker=769308&locale=en&powered_by=true&border_radius=0&plain=true&color_background=%23ffffff&color_button=%2300A991&promo_id=5472&campaign_id=57';
    script.async = true;
    script.charset = 'utf-8';
    containerRef.current.appendChild(script);
  }, []);
  return <div ref={containerRef} className="w-full bg-white rounded-xl overflow-hidden min-h-[150px] flex items-center justify-center transition-opacity duration-500" />;
};

const TransferWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://tpwidg.com/content?trs=575255&shmarker=769308&locale=en&powered_by=true&border_radius=5&plain=true&color_background=%23f6f6f6&color_button=%23209432&promo_id=4674&campaign_id=22';
    script.async = true;
    script.charset = 'utf-8';
    containerRef.current.appendChild(script);
  }, []);
  return <div ref={containerRef} className="w-full bg-white rounded-xl overflow-hidden min-h-[150px] flex items-center justify-center transition-opacity duration-500" />;
};

export default function HeroSearch() {
  const t = useTranslations('HeroSearch');
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      id: 'flights', 
      label: t('tabFlights'), 
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80',
      title: t('tabFlightsTitle'),
      subtitle: t('tabFlightsSubtitle')
    },
    { 
      id: 'rental', 
      label: t('tabRental'), 
      icon: Car,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80',
      title: t('tabRentalTitle'),
      subtitle: t('tabRentalSubtitle')
    },
    { 
      id: 'transfers', 
      label: t('tabTransfers'), 
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80',
      title: t('tabTransfersTitle'),
      subtitle: t('tabTransfersSubtitle')
    },
    { 
      id: 'esim', 
      label: t('tabEsim'), 
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1920&q=80',
      title: t('tabEsimTitle'),
      subtitle: t('tabEsimSubtitle')
    }
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="relative text-white min-h-[75vh] flex items-center justify-center transition-all duration-700 ease-in-out">
      {/* Background Images */}
      {tabs.map((tab, idx) => (
        <div 
          key={tab.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeTab === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
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
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm md:text-base ${
                    activeTab === idx 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-200 hover:text-white hover:bg-slate-700/50'
                  }`}
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
          
          {/* FLIGHTS WIDGET */}
          {activeTab === 0 && <FlightWidget />}

          {/* RENTAL WIDGET */}
          {activeTab === 1 && <RentalWidget />}

          {/* TRANSFERS WIDGET */}
          {activeTab === 2 && <TransferWidget />}

          {/* e-SIM FORM */}
          {activeTab === 3 && (
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 transition-opacity duration-500">
              <div className="relative lg:col-span-2">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('labelDestination')}</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Globe className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <input type="text" placeholder={t('placeholderWhereTo')} className="w-full outline-none bg-transparent font-medium" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('labelDuration')}</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Clock className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <select className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium text-slate-700">
                    <option>{t('opt7Days')}</option>
                    <option>{t('opt15Days')}</option>
                    <option>{t('opt30Days')}</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{t('labelDataPackage')}</label>
                <div className="flex items-center border border-slate-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                  <Signal className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
                  <select className="w-full outline-none bg-transparent text-sm cursor-pointer font-medium text-slate-700">
                    <option>{t('opt3GB')}</option>
                    <option>{t('opt5GB')}</option>
                    <option>{t('opt10GB')}</option>
                    <option>{t('optUnlimited')}</option>
                  </select>
                </div>
              </div>
              <div className="flex items-end">
                <a href="https://yesim.tpo.li/xcVJq96F" target="_blank" rel="noopener noreferrer" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  {t('btnFindEsims')}
                  </a>
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
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeTab === idx ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white w-2.5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
