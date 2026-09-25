'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Plane } from 'lucide-react'; 
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Footer() {
  const t = useTranslations('Footer');
  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      // 1. Add to subscribers collection
      await setDoc(doc(db, 'subscribers', email), {
        email,
        createdAt: serverTimestamp(),
        source: 'newsletter'
      }, { merge: true });

      // 2. Add to mail collection to trigger automated email
      await addDoc(collection(db, 'mail'), {
        to: email,
        from: 'FlightChap <info@flightchap.com>',
        message: {
          subject: 'Thank you for subscribing to FlightChap!',
          html: '<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;"><h2>Welcome to FlightChap! ??</h2><p>You have successfully subscribed to our exclusive fare alerts and travel newsletter.</p><p>We will make sure you are the first to know about secret flight deals and premium offers.</p><br/><p>Best Regards,<br/>The FlightChap Team</p></div>'
        }
      });

      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <img src="/logo_final.png" alt="FlightChap Logo" className="h-32 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {t('description')}
            </p>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('topDestinations')}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/flights/new-york" className="hover:text-blue-400 transition">{t('flightsNewYork')}</Link></li>
              <li><Link href="/flights/london" className="hover:text-blue-400 transition">{t('flightsLondon')}</Link></li>
              <li><Link href="/flights/dubai" className="hover:text-blue-400 transition">{t('flightsDubai')}</Link></li>
              <li><Link href="/flights/tokyo" className="hover:text-blue-400 transition">{t('flightsTokyo')}</Link></li>
              <li><Link href="/flights/paris" className="hover:text-blue-400 transition">{t('flightsParis')}</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('company')}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-blue-400 transition">{t('aboutUs')}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition">{t('privacyPolicy')}</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">{t('termsOfService')}</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-blue-400 transition">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('subscribeTitle')}</h3>
            <p className="text-sm mb-6 text-slate-400">{t('subscribeDesc')}</p>
            
            {success ? (
              <div className="bg-emerald-900/40 border border-emerald-800 rounded-lg p-4 text-emerald-400 text-sm flex items-center gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you! You have successfully subscribed to our newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholderEmail')} 
                  className="bg-slate-800 border border-slate-700 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 text-sm outline-none text-white"
                  required
                  disabled={loading}
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-md hover:bg-blue-700 transition w-full disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    t('btnSubscribe')
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} FlightChap. {t('allRightsReserved')}
          </p>
          
          {/* Social Icons (SVG) */}
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12L10 15V9l5.194 3z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
