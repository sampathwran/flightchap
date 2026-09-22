import { Plane, User, Menu, Globe, Headphones, Briefcase } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function Navbar() {
  const t = require('next-intl').useTranslations('Navbar');
  const locale = require('next-intl').useLocale();
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
              <Headphones className="h-4 w-4" />{t('support')}</Link>

            <Link href="/my-booking" className="flex items-center gap-1 hover:text-blue-200 transition">
              <Briefcase className="h-4 w-4" />
              My Booking
            </Link>
            
            <button className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold hover:bg-slate-100 transition shadow-lg">
              <User className="h-5 w-5" />{t('signIn')}</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-blue-200 focus:outline-none drop-shadow-md">
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
