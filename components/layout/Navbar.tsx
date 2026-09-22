"use client";
import { Plane, User, Menu, Globe, Headphones, Briefcase } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent text-white border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight drop-shadow-md">
              <Plane className="h-8 w-8" />
              FlightChap
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center drop-shadow-md font-medium text-sm lg:text-base">
            <Link href="/" className="hover:text-blue-200 transition">{t('home')}</Link>
            
            <div className="flex items-center gap-1 hover:text-blue-200 transition">
              <Globe className="h-4 w-4" />
              <select 
                value={locale} 
                onChange={switchLocale}
                className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer drop-shadow-md appearance-none"
              >
                <option value="en" className="text-black">EN</option>
                <option value="si" className="text-black">SI</option>
                <option value="es" className="text-black">ES</option>
                <option value="fr" className="text-black">FR</option>
                <option value="de" className="text-black">DE</option>
                <option value="zh" className="text-black">ZH</option>
                <option value="ar" className="text-black">AR</option>
                <option value="hi" className="text-black">HI</option>
                <option value="ru" className="text-black">RU</option>
                <option value="pt" className="text-black">PT</option>
                <option value="ja" className="text-black">JA</option>
                <option value="ko" className="text-black">KO</option>
                <option value="it" className="text-black">IT</option>
                <option value="nl" className="text-black">NL</option>
                <option value="tr" className="text-black">TR</option>
              </select>
            </div>

            <Link href="/support" className="flex items-center gap-1 hover:text-blue-200 transition">
              <Headphones className="h-4 w-4" />
              {t('support')}
            </Link>
            
            <Link href="/bookings" className="flex items-center gap-1 hover:text-blue-200 transition">
              <Briefcase className="h-4 w-4" />
              {t('myBookings')}
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-full backdrop-blur-sm transition font-medium text-sm drop-shadow-sm">
              <User className="h-4 w-4" />
              {t('signIn')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-blue-200 transition p-2">
              <Menu className="h-6 w-6 drop-shadow-md" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Hidden by default for this template) */}
      <div className="hidden md:hidden bg-white text-slate-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <Link href="/" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('home')}</Link>
          <Link href="/support" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('support')}</Link>
          <Link href="/bookings" className="block px-3 py-2 rounded-md font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('myBookings')}</Link>
        </div>
        <div className="pt-4 pb-4 border-t border-slate-200 px-5 flex flex-col gap-4">
           <div className="flex items-center gap-2">
             <Globe className="h-5 w-5 text-slate-500" />
             <span className="font-medium text-lg text-slate-800">Language: {locale.toUpperCase()}</span>
           </div>
           <button className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-3 rounded-xl transition font-semibold text-lg shadow-md">
            <User className="h-5 w-5" />
            {t('signIn')}
          </button>
        </div>
      </div>
    </nav>
  );
}
