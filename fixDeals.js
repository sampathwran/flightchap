const fs = require('fs');
let content = fs.readFileSync('components/home/MemberDeals.tsx', 'utf8');

const oldStr = `                  <button 
                    onClick={(e) => handleBookNow(e, deal.targetUrl)}
                    className={w-full py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 }
                  >`;

const newStr = `                  <button 
                    onClick={(e) => handleBookNow(e, deal.targetUrl)}
                    className={\`w-full py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 \${
                      user 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' 
                        : 'bg-slate-700 hover:bg-slate-600 text-slate-300 border border-slate-600'
                    }\`}
                  >`;

// Normalize newlines in case
content = content.replace(/\r\n/g, '\n');
content = content.replace(oldStr.replace(/\r\n/g, '\n'), newStr);

fs.writeFileSync('components/home/MemberDeals.tsx', content);
