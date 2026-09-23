const fs = require('fs');
let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');

const desktopOld = '<button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-full backdrop-blur-sm transition font-medium text-sm drop-shadow-sm">\n              <User className="h-4 w-4" />\n              {t(\'signIn\')}\n            </button>';
const desktopNew = `{user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium drop-shadow-md">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/50 overflow-hidden">
                    {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : <User className="h-4 w-4" />}
                  </div>
                  <span className="hidden lg:block text-white">{user.displayName || user.email?.split('@')[0]}</span>
                </div>
                <button onClick={logout} className="text-xs bg-red-500/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-full transition font-medium shadow-sm">Logout</button>
              </div>
            ) : (
              <Link href="/login" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-full backdrop-blur-sm transition font-medium text-sm drop-shadow-sm text-white">
                <User className="h-4 w-4" />
                {t('signIn')}
              </Link>
            )}`;

const mobileOld = '<button className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-3 rounded-xl transition font-semibold text-lg shadow-md">\n              <User className="h-5 w-5" />\n              {t(\'signIn\')}\n            </button>';
const mobileNew = `{user ? (
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden">
                  {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : <User className="h-5 w-5" />}
                </div>
                <div className="font-medium text-slate-800">{user.displayName || user.email?.split('@')[0]}</div>
              </div>
              <button onClick={logout} className="w-full text-center py-3 bg-red-50 text-red-600 font-medium rounded-lg">Sign Out</button>
            </div>
          ) : (
            <Link href="/login" className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-5 py-3 rounded-xl transition font-semibold text-lg shadow-md mt-4">
              <User className="h-5 w-5" />
              {t('signIn')}
            </Link>
          )}`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(desktopOld, desktopNew);
content = content.replace(mobileOld, mobileNew);

fs.writeFileSync('components/layout/Navbar.tsx', content);
