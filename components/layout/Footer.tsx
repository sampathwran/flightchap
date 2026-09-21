import Link from 'next/link';
import { Plane, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-white">
              <Plane className="h-6 w-6" />
              FlightChap
            </Link>
            <p className="text-sm">
              Your ultimate travel companion for comparing and booking the best flight deals worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/search" className="hover:text-white transition">Search Flights</Link></li>
              <li><Link href="/deals" className="hover:text-white transition">Flash Deals</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Travel Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Get the latest flight deals straight to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 text-sm outline-none"
              />
              <button className="bg-blue-600 text-white px-3 py-2 rounded-r-md hover:bg-blue-700 transition">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FlightChap. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition text-sm font-semibold">FB</a>
            <a href="#" className="hover:text-white transition text-sm font-semibold">X</a>
            <a href="#" className="hover:text-white transition text-sm font-semibold">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
