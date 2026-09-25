import { Metadata } from 'next';
import { ScrollText, UserCheck, Plane, AlertTriangle, Scale, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | FlightChap',
  description: 'Read the Terms of Service for using FlightChap flight deals and travel platform.',
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-6 text-indigo-600">
            <ScrollText className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Welcome to FlightChap! Please read these terms carefully before using our platform to find the best flight deals.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last Updated: September 2026</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12 space-y-12">
            
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">1. Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  By accessing and using the FlightChap website (flightchap.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Plane className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">2. Our Services</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  FlightChap is a travel search engine and deal aggregator. We do not sell flight tickets, hotel rooms, or car rentals directly. We search across multiple third-party travel websites to find the best deals for you.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>When you find a deal on FlightChap and click to book, you are redirected to the third-party airline or travel agency's website.</li>
                  <li>Your booking, payment, and travel contract are made directly with the third-party provider, not with FlightChap.</li>
                  <li>We are not responsible for any issues regarding ticketing, cancellations, or refunds.</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">3. Pricing & Availability</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Flight prices are highly volatile and can change in real-time. While we strive to display accurate pricing:
                </p>
                <p>
                  We cannot guarantee that the price displayed on our platform will be the final price you pay. The final price and availability will be confirmed by the travel provider at the time of booking. Prices for "Flash Deals" and "Special Offers" are subject to immediate expiration.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">4. User Conduct</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As a user of our platform, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our website for any automated scraping, data mining, or extraction.</li>
                  <li>Attempt to interfere with the proper working of our services.</li>
                  <li>Use our platform for any fraudulent or unlawful booking activities.</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">5. Contact Information</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  If you have any questions about these Terms, please contact us.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium">
                  <Mail className="w-4 h-4 text-slate-400" />
                  info@flightchap.com
                </div>
              </div>
            </section>

          </div>
        </div>
        
      </div>
    </div>
  );
}
