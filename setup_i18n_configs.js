const fs = require('fs');
const path = require('path');

// 1. Create i18n/request.ts
const i18nDir = path.join(__dirname, 'i18n');
if (!fs.existsSync(i18nDir)) {
  fs.mkdirSync(i18nDir);
}
fs.writeFileSync(path.join(i18nDir, 'request.ts'), `
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the \`[locale]\` segment
  let locale = await requestLocale;
  
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(\`../messages/\${locale}.json\`)).default
  };
});
`);

// 2. Create i18n/routing.ts
fs.writeFileSync(path.join(i18nDir, 'routing.ts'), `
import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'si', 'es', 'fr', 'de', 'zh', 'ar', 'hi', 'ru', 'pt', 'ja', 'ko', 'it', 'nl', 'tr'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
`);

// 3. Create middleware.ts
fs.writeFileSync(path.join(__dirname, 'middleware.ts'), `
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(si|en|es|fr|de|zh|ar|hi|ru|pt|ja|ko|it|nl|tr)/:path*']
};
`);

// 4. Update next.config.ts
const nextConfigPath = path.join(__dirname, 'next.config.ts');
let nextConfigContent = `
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
`;
fs.writeFileSync(nextConfigPath, nextConfigContent);

console.log('Setup basic configuration files for next-intl.');
