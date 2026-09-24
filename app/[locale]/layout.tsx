import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing } from '@/i18n/routing';
import { AuthProvider } from '@/context/AuthContext';
import Tracking from '@/components/Tracking';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlightChap - Find the Best Flight Deals",
  description: "Your ultimate travel companion to compare and book cheap flights worldwide.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script id="travelpayouts" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function () { var script = document.createElement("script"); script.async = 1; script.setAttribute("data-cmp-ab","2"); script.src = "https://emrld.ltd/NTc1MjU1.js?t=575255"; document.head.appendChild(script); })();` }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50`}
      >
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
          <Tracking />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
