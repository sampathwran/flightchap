"use client";
import { useTranslations } from 'next-intl';
import { Search, CreditCard, RefreshCw, Luggage, ShieldUser, MonitorSmartphone, Wifi, MessageSquareText, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const t = useTranslations('Support');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { icon: CreditCard, title: t('catBookings'), desc: t('catBookingsDesc'), color: "bg-blue-100 text-blue-600" },
    { icon: RefreshCw, title: t('catCancellations'), desc: t('catCancellationsDesc'), color: "bg-orange-100 text-orange-600" },
    { icon: Luggage, title: t('catBaggage'), desc: t('catBaggageDesc'), color: "bg-purple-100 text-purple-600" },
    { icon: ShieldUser, title: t('catAccount'), desc: t('catAccountDesc'), color: "bg-green-100 text-green-600" },
    { icon: MonitorSmartphone, title: t('catTechnical'), desc: t('catTechnicalDesc'), color: "bg-slate-100 text-slate-600" },
    { icon: Wifi, title: t('catEsim'), desc: t('catEsimDesc'), color: "bg-cyan-100 text-cyan-600" }
  ];

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Hero Header */}
      <div className="bg-slate-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[10%] w-[50%] h-[70%] rounded-full bg-purple-500 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>

          <div className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-2 flex items-center">
            <Search className="h-6 w-6 text-slate-400 ml-3 mr-2" />
            <input 
              type="text" 
              placeholder={t('searchPlaceholder')}
              className="w-full py-4 px-2 text-slate-800 outline-none text-lg font-medium bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* Categories Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">{t('categoriesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer bg-slate-50 hover:bg-white flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${cat.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm grow">{cat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQs */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">{t('faqTitle')}</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`border rounded-xl transition-colors ${openFaq === idx ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-white'}`}>
                  <button
                    className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-semibold text-left text-slate-900">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 md:p-10 text-white flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">{t('contactTitle')}</h2>
            <p className="text-blue-100 mb-10 leading-relaxed">
              {t('contactSubtitle')}
            </p>

            <div className="space-y-4 mt-auto">
              <button className="w-full bg-white text-blue-700 hover:bg-slate-50 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 shadow-md">
                <MessageSquareText className="h-5 w-5" />
                {t('btnChat')}
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3">
                <Phone className="h-5 w-5" />
                {t('btnCall')}
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3">
                <Mail className="h-5 w-5" />
                {t('btnEmail')}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
