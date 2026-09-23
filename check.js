const fs = require('fs');
let content = fs.readFileSync('components/layout/Navbar.tsx', 'utf8');

const oldUserMenu = `            {user ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-blue-600 font-bold bg-blue-50">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => signOut(auth)}
                  className="text-sm font-medium hover:text-blue-200 transition"
                >
                  Logout
                </button>
              </div>`;

const newUserMenu = `            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-3 hover:opacity-80 transition group">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm group-hover:border-blue-200 transition">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-blue-600 font-bold bg-blue-50">
                        {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-bold hidden xl:block">{user.displayName?.split(' ')[0] || 'Account'}</span>
                </Link>
              </div>`;

// Wait, the user menu in Navbar might not match exactly. Let me find out what it looks like.
