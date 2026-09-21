import Link from 'next/link';
import { Plane, User, Menu } from 'lucide-react';

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
          <div className="hidden md:flex space-x-8 items-center drop-shadow-md font-medium">
            <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            <Link href="/search" className="hover:text-blue-200 transition">Flights</Link>
            <Link href="/deals" className="hover:text-blue-200 transition">Flash Deals</Link>
            <Link href="/blog" className="hover:text-blue-200 transition">Blog</Link>
            
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
