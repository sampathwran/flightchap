import Link from 'next/link';
import { Plane, Facebook, Youtube, Instagram, Music } from 'lucide-react'; // Music as TikTok placeholder

export default function Footer() {
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
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms of Service</Link></li>
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
          
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition">
              <Music className="h-5 w-5" /> {/* TikTok placeholder */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
