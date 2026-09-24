import { useTranslations } from 'next-intl';
import { BookOpen, Cpu, Lightbulb, Globe2, Users, MapPin, Handshake, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('About');
  
  return (
    <div className="min-h-screen bg-slate-50 pt-28 font-sans">
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-12">
        <div className="inline-block px-4 py-1.5 bg-[#673AB7]/10 text-[#673AB7] rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
          {t('subtitle')}
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight max-w-4xl mx-auto">
          {t('title')}
        </h1>
      </div>

      {/* Description / Mission Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">{t('missionTitle')}</h2>
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6 text-justify text-justify-last-center">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p className="font-medium text-slate-800">{t('p3')}</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t('whyChooseUs')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 text-justify-last-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 transform rotate-3 shadow-sm">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('w1Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">{t('w1Desc')}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 text-justify-last-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 transform -rotate-3 shadow-sm">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('w2Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">{t('w2Desc')}</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 text-justify-last-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-[#673AB7] transform rotate-3 shadow-sm">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t('w3Title')}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">{t('w3Desc')}</p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">{t('valuesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('v1Title')}</h3>
              <p className="text-slate-600 leading-relaxed text-justify">{t('v1Desc')}</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#673AB7]/10 rounded-xl flex items-center justify-center mb-6 text-[#673AB7]">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('v2Title')}</h3>
              <p className="text-slate-600 leading-relaxed text-justify">{t('v2Desc')}</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('v3Title')}</h3>
              <p className="text-slate-600 leading-relaxed text-justify">{t('v3Desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* By the numbers Section */}
      <div className="bg-[#1a0b2e] py-20 text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#673AB7] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">{t('statsTitle')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            
            <div className="flex flex-col items-center">
              <Globe2 size={40} className="text-[#9d60ff] mb-6" />
              <h4 className="text-4xl font-extrabold mb-3">30+</h4>
              <p className="text-slate-300 font-medium mb-1">{t('s1Title')}</p>
              <p className="text-slate-400 text-sm">{t('s1Desc')}</p>
            </div>

            <div className="flex flex-col items-center">
              <Users size={40} className="text-[#9d60ff] mb-6" />
              <h4 className="text-4xl font-extrabold mb-3">1M+</h4>
              <p className="text-slate-300 font-medium mb-1">{t('s2Title')}</p>
              <p className="text-slate-400 text-sm">{t('s2Desc')}</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin size={40} className="text-[#9d60ff] mb-6" />
              <h4 className="text-4xl font-extrabold mb-3">190</h4>
              <p className="text-slate-300 font-medium mb-1">{t('s3Title')}</p>
              <p className="text-slate-400 text-sm">{t('s3Desc')}</p>
            </div>

            <div className="flex flex-col items-center">
              <Handshake size={40} className="text-[#9d60ff] mb-6" />
              <h4 className="text-4xl font-extrabold mb-3">500+</h4>
              <p className="text-slate-300 font-medium mb-1">{t('s4Title')}</p>
              <p className="text-slate-400 text-sm">{t('s4Desc')}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
