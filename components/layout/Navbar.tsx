"use client";
import { ChevronDown, Plane, User, Menu, Globe, Headphones, Briefcase, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  
  const isHome = pathname === "/";
  const navBgClass = isHome ? "absolute top-0 w-full z-50 bg-transparent text-white border-b border-white/20" : "relative w-full z-50 bg-[#1a0b2e] text-white border-b border-white/10 shadow-lg";

  return (
    <nav className={navBgClass}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight drop-shadow-md">
              <img src="/logo_final.png" alt="FlightChap Logo" className="h-24 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center drop-shadow-md font-medium text-sm lg:text-base">
            <Link href="/" className="hover:text-blue-200 transition">{t('home')}</Link>
              
              <Link href="/blog" className="hover:text-blue-200 transition">Blog</Link>
            
            

            {/* Support link hidden for now */}
            
            <Link href="/about" className="hover:text-blue-200 transition">{t('aboutUs')}</Link>
              <Link href="/contact" className="hover:text-blue-200 transition">{t('contactUs')}</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full pl-3 pr-2 py-1.5 transition-all cursor-pointer relative group">
              <Globe className="h-4 w-4 text-white" />
              <select 
                value={locale} 
                onChange={switchLocale}
                className="bg-transparent text-white font-medium text-sm border-none outline-none cursor-pointer drop-shadow-md appearance-none pr-4"
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
              <ChevronDown className="h-3 w-3 text-white/70 absolute right-3 pointer-events-none group-hover:text-white transition-colors" />
            </div>
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-2 text-sm font-medium drop-shadow-md hover:opacity-80 transition cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/50 overflow-hidden">
                    {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : <User className="h-4 w-4" />}
                  </div>
                  <span className="hidden lg:block text-white">{user.displayName || user.email?.split('@')[0]}</span>
                </Link>
                <button onClick={logout} className="text-xs bg-red-500/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-full transition font-medium shadow-sm">Logout</button>
              </div>
            ) : (
              <Link href="/login" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-full backdrop-blur-sm transition font-medium text-sm drop-shadow-sm text-white">
                <User className="h-4 w-4" />
                {t('signIn')}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-200 transition p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 drop-shadow-md" /> : <Menu className="h-6 w-6 drop-shadow-md" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Hidden by default for this template) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-800 absolute w-full left-0 top-full shadow-2xl border-b border-slate-200 z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('home')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">Blog</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('aboutUs')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="block px-4 py-3 rounded-xl font-medium text-lg hover:text-blue-600 hover:bg-slate-50 transition">{t('contactUs')}</Link>
          </div>
          
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-4">
             <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 relative">
               <div className="flex items-center gap-2 text-slate-600 font-medium">
                 <Globe className="h-5 w-5" />
                 <span>Language</span>
               </div>
               <select 
                  value={locale} 
                  onChange={(e) => {
                    switchLocale(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-transparent text-slate-800 font-bold text-lg border-none outline-none cursor-pointer appearance-none text-right pr-6 relative z-10"
                >
                  <option value="en">English (EN)</option>
                  <option value="si">????? (SI)</option>
                  <option value="es">Espa�ol (ES)</option>
                  <option value="fr">Fran�ais (FR)</option>
                  <option value="de">Deutsch (DE)</option>
                </select>
                <div className="absolute right-6 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </div>
             </div>
             
             {user ? (
                <div className="flex flex-col gap-3">
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/profile" className="w-full flex justify-center items-center gap-2 bg-slate-200 text-slate-800 hover:bg-slate-300 px-5 py-3.5 rounded-xl transition font-semibold text-lg shadow-sm">
                    <User className="h-5 w-5" />
                    My Profile
                  </Link>
                  <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full flex justify-center items-center gap-2 bg-red-100 text-red-600 hover:bg-red-200 px-5 py-3.5 rounded-xl transition font-semibold text-lg shadow-sm">
                    Logout
                  </button>
                </div>
             ) : (
                <Link onClick={() => setIsMobileMenuOpen(false)} href="/login" className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-3.5 rounded-xl transition font-semibold text-lg shadow-md">
                  <User className="h-5 w-5" />
                  {t('signIn')}
                </Link>
             )}
          </div>
        </div>
      )}
    </nav>
  );
}
