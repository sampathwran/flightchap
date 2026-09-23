const fs = require('fs');
let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');

const oldUserBlock = `{user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-medium drop-shadow-md">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/50 overflow-hidden">
                    {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : <User className="h-4 w-4" />}
                  </div>
                  <span className="hidden lg:block text-white">{user.displayName || user.email?.split('@')[0]}</span>
                </div>
                <button onClick={logout} className="text-xs bg-red-500/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-full transition font-medium shadow-sm">Logout</button>
              </div>
            ) :`;

const newUserBlock = `{user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-2 text-sm font-medium drop-shadow-md hover:opacity-80 transition cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/50 overflow-hidden">
                    {user.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : <User className="h-4 w-4" />}
                  </div>
                  <span className="hidden lg:block text-white">{user.displayName || user.email?.split('@')[0]}</span>
                </Link>
                <button onClick={logout} className="text-xs bg-red-500/80 hover:bg-red-600 text-white px-3 py-1.5 rounded-full transition font-medium shadow-sm">Logout</button>
              </div>
            ) :`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldUserBlock.replace(/\r\n/g, '\n'), newUserBlock);

fs.writeFileSync('components/layout/Navbar.tsx', content, 'utf8');
