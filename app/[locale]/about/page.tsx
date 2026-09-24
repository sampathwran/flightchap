import { useTranslations } from 'next-intl';
import { BookOpen, Cpu, Lightbulb, Globe2, Users, MapPin, Handshake } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('About');
  
  return (
    <div className="min-h-screen bg-slate-50 pt-28 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-[#673AB7] font-medium">
          {t('subtitle')}
        </p>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-lg text-slate-600 leading-relaxed space-y-6">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t('valuesTitle')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('v1Title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('v1Desc')}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#673AB7]/10 rounded-xl flex items-center justify-center mb-6 text-[#673AB7]">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('v2Title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('v2Desc')}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('v3Title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('v3Desc')}</p>
          </div>
        </div>
      </div>

      {/* By the numbers Section */}
      <div className="bg-[#1a0b2e] py-20 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{t('statsTitle')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            
            <div className="flex flex-col items-center">
              <Globe2 size={40} className="text-[#9d60ff] mb-4" />
              <h4 className="text-2xl font-bold mb-2">{t('s1Title')}</h4>
              <p className="text-slate-400 text-sm">{t('s1Desc')}</p>
            </div>

            <div className="flex flex-col items-center">
              <Users size={40} className="text-[#9d60ff] mb-4" />
              <h4 className="text-2xl font-bold mb-2">{t('s2Title')}</h4>
              <p className="text-slate-400 text-sm">{t('s2Desc')}</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin size={40} className="text-[#9d60ff] mb-4" />
              <h4 className="text-2xl font-bold mb-2">{t('s3Title')}</h4>
              <p className="text-slate-400 text-sm">{t('s3Desc')}</p>
            </div>

            <div className="flex flex-col items-center">
              <Handshake size={40} className="text-[#9d60ff] mb-4" />
              <h4 className="text-2xl font-bold mb-2">{t('s4Title')}</h4>
              <p className="text-slate-400 text-sm">{t('s4Desc')}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
