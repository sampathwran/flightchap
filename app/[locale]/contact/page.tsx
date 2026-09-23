import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Footer');
  const tHome = useTranslations('Home');
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 px-4 mb-16">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">{t('contact')}</h1>
          <p className="text-lg text-slate-600">{tHome('contactSubtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer group">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{tHome('btnCall')}</h3>
            <p className="text-slate-500">+1 (555) 123-4567</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer group">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{tHome('btnEmail')}</h3>
            <p className="text-slate-500">support@flightchap.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer group">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Office</h3>
            <p className="text-slate-500">123 Travel Avenue, NY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
