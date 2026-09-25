"use client";
import { ChevronDown, Plane, User, Menu, Globe, Headphones, Briefcase, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English (EN)' },
    { code: 'si', name: '\u0dc3\u0dd2\u0d82\u0dc4\u0dbd (SI)' },
    { code: 'es', name: 'Espa\u00f1ol (ES)' },
    { code: 'fr', name: 'Fran\u00e7ais (FR)' },
    { code: 'de', name: 'Deutsch (DE)' },
    { code: 'zh', name: '\u4e2d\u6587 (ZH)' },
    { code: 'ar', name: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (AR)' },
    { code: 'hi', name: '\u0939\u093f\u0928\u094d\u0926\u0940 (HI)' },
    { code: 'ru', name: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (RU)' },
    { code: 'pt', name: 'Portugu\u00ea\u0073 (PT)' },
    { code: 'ja', name: '\u65e5\u672c\u8a9e (JA)' },
    { code: 'ko', name: '\uD55C\uAD6D\uC5B4 (KO)' },
    { code: 'it', name: 'Italiano (IT)' },
    { code: 'nl', name: 'Nederlands (NL)' },
    { code: 'tr', name: 'T\u00fcrk\u00e7e (TR)' },
  ];

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsLangOpen(false);
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
            <div className="relative">
              <div 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1.5 transition-all cursor-pointer group select-none"
              >
                <Globe className="h-4 w-4 text-white" />
                <span className="text-white font-medium text-sm">{locale.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 text-white/70 group-hover:text-white transition-all ${isLangOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="p-3 border-b border-slate-50 bg-slate-50/50">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Language</p>
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2 grid grid-cols-2 gap-1">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${locale === lang.code ? 'bg-[#673AB7] text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
             <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden">
               <div 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-slate-50 transition"
               >
                 <div className="flex items-center gap-3 text-slate-600 font-medium">
                   <Globe className="h-5 w-5" />
                   <span className="text-lg">Language: <span className="font-bold text-slate-900">{languages.find(l => l.code === locale)?.name?.split(' ')[0] || locale.toUpperCase()}</span></span>
                 </div>
                 <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
               </div>
               
               {isLangOpen && (
                 <div className="p-3 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-2 max-h-[40vh] overflow-y-auto">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          switchLocale(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`text-left px-3 py-3 rounded-xl text-sm font-medium transition-all ${locale === lang.code ? 'bg-[#673AB7] text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:border-[#673AB7]/30'}`}
                      >
                        {lang.name}
                      </button>
                    ))}
                 </div>
               )}
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
