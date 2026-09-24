const fs = require('fs');
let content = fs.readFileSync('app/[locale]/profile/page.tsx', 'utf8');

const startStr = '{promoCodes.map(promo => (';
const endStr = '))}';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr, startIndex) + endStr.length;

if(startIndex !== -1 && endIndex !== -1) {
const newMap = `{promoCodes.map(promo => (
                      <div key={promo.id} className="border border-slate-200 rounded-2xl p-5 relative overflow-hidden group hover:shadow-md transition bg-white flex flex-col">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#673AB7]"></div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          {promo.imageUrl ? (
                            <img src={promo.imageUrl} alt={promo.provider} className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-sm" />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-[#673AB7]/10 text-[#673AB7] flex items-center justify-center font-bold text-xl">
                              {promo.provider?.charAt(0) || '%'}
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-slate-800 text-lg leading-tight">{promo.provider}</h3>
                            <p className="text-[#673AB7] font-semibold text-sm">{promo.discountBadge || promo.discount}</p>
                          </div>
                        </div>

                        {promo.endTime && (
                          <p className="text-xs text-slate-400 mb-3 font-medium">
                            Valid until: {new Date((promo.endTime?.seconds ? promo.endTime.seconds : (promo.endTime._seconds ? promo.endTime._seconds : Date.now()/1000)) * 1000).toLocaleDateString()}
                          </p>
                        )}
                        
                        <div className="mt-auto bg-slate-50 p-3 rounded-lg flex items-center justify-between border border-dashed border-slate-300">
                          <span className="font-mono font-bold text-slate-800 tracking-wider text-lg">{promo.code}</span>
                          <button 
                            onClick={() => copyToClipboard(promo.code)}
                            className="bg-white border border-slate-200 text-slate-600 hover:text-[#673AB7] hover:border-[#673AB7] transition p-2 rounded-md shadow-sm"
                            title="Copy Code"
                          >
                            {copiedCode === promo.code ? <CheckCircle className="h-5 w-5 text-green-500" /> : <Copy className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    ))}`;

    content = content.substring(0, startIndex) + newMap + content.substring(endIndex);
    fs.writeFileSync('app/[locale]/profile/page.tsx', content, 'utf8');
    console.log('Fixed profile UI');
} else {
    console.log('Not found');
}
