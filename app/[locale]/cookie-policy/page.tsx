import { Metadata } from 'next';
import { Cookie, Info, Settings, ShieldCheck, Mail, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | FlightChap',
  description: 'Understand how FlightChap uses cookies to improve your travel booking experience.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-6 text-orange-600">
            <Cookie className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Cookie Policy</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            At FlightChap, we use cookies to give you the best possible experience when finding flight deals. Here is how and why we use them.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last Updated: September 2026</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12 space-y-12">
            
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Info className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">1. What are Cookies?</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work efficiently, as well as to provide reporting information and personalized content.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">2. Essential Cookies</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  These cookies are necessary for our website to function properly. They enable core functionalities such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure login and user authentication.</li>
                  <li>Saving your session data while you navigate between pages.</li>
                  <li>Ensuring the website loads quickly and securely.</li>
                </ul>
                <p className="text-sm text-slate-500 italic mt-2">
                  * Note: You cannot opt-out of these cookies as the platform will not function without them.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">3. Analytics & Performance Cookies</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We use performance cookies, such as Google Analytics, to understand how visitors interact with FlightChap. This helps us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>See which flight routes are most popular.</li>
                  <li>Identify and fix errors or slow pages on the site.</li>
                  <li>Improve the overall user interface and booking experience.</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">4. How to Manage Cookies</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  You have the right to decide whether to accept or reject non-essential cookies. You can exercise your cookie rights by setting your preferences in your web browser controls.
                </p>
                <p>
                  If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted. Since the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">5. Contact Us</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  If you have any questions about our use of cookies or other technologies, please email us.
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
