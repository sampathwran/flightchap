import Link from 'next/link';
import { Plane, User, Menu, Globe, Headphones, Briefcase } from 'lucide-react';

export default function Navbar() {
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
            <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            
            <button className="flex items-center gap-1 hover:text-blue-200 transition">
              <Globe className="h-4 w-4" />
              <span>USD | EN</span>
            </button>

            <Link href="/support" className="flex items-center gap-1 hover:text-blue-200 transition">
              <Headphones className="h-4 w-4" />
              Support
            </Link>

            <Link href="/my-booking" className="flex items-center gap-1 hover:text-blue-200 transition">
              <Briefcase className="h-4 w-4" />
              My Booking
            </Link>
            
            <button className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full font-bold hover:bg-slate-100 transition shadow-lg">
              <User className="h-5 w-5" />
              Sign In
            </button>
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
