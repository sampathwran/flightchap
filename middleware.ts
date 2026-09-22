
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(si|en|es|fr|de|zh|ar|hi|ru|pt|ja|ko|it|nl|tr)/:path*']
};
