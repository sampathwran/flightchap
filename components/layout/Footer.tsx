import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Plane } from 'lucide-react'; 

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <Plane className="h-6 w-6" />
              FlightChap
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your ultimate travel companion for comparing and booking the best flight deals, rentals, and e-SIMs worldwide.
            </p>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Top Destinations</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-blue-400 transition">Flights to New York</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Flights to London</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Flights to Dubai</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Flights to Tokyo</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition">Flights to Paris</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/help-center" className="hover:text-blue-400 transition">Help Center</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition">{t('privacyPolicy')}</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">{t('termsOfService')}</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-blue-400 transition">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Subscribe to unlock secret deals!</h3>
            <p className="text-sm mb-6 text-slate-400">Get member-only prices and travel inspiration sent straight to your inbox.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-slate-800 border border-slate-700 rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 text-sm outline-none text-white"
                required
              />
              <button type="submit" className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-md hover:bg-blue-700 transition w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} FlightChap. All rights reserved.
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
            <a href="#" className="text-slate-400 hover:text-white transition">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
