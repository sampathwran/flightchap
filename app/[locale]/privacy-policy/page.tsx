import { Metadata } from 'next';
import { Shield, Lock, Eye, Server, Mail, UserCheck, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | FlightChap',
  description: 'Learn how FlightChap collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6 text-blue-600">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            At FlightChap, your privacy is our priority. This policy outlines how we handle your data to provide you with the best flight deals securely.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last Updated: September 2026</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12 space-y-12">
            
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">1. Information We Collect</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  When you use FlightChap, we collect certain information to help you find the cheapest flights and best travel deals. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Email address (when you subscribe or register), name, and profile details.</li>
                  <li><strong>Usage Data:</strong> Pages visited, searches performed, and clicks on our deals.</li>
                  <li><strong>Device Data:</strong> IP address, browser type, and operating system.</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Server className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">2. How We Use Your Data</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>We use the collected information for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our platform.</li>
                  <li>To notify you about exclusive flash deals and special member offers.</li>
                  <li>To understand how users interact with our website to enhance user experience.</li>
                  <li>To provide automated fare alerts to your registered email address.</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">3. Third-Party Services & Cookies</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  FlightChap uses third-party services like TravelPayouts to process flight searches and Google Analytics to monitor website traffic. These services may use cookies and similar tracking technologies to collect information about your interaction with our site.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">4. Data Security</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. We use Google Firebase for secure data storage and authentication. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">5. Your Rights</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  You have the right to access, update, or delete the personal information we have on you. Whenever made possible, you can access and update your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">6. Contact Us</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
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
