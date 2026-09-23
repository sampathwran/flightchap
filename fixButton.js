const fs = require('fs');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(
    /<button onClick=\{\(e\) => toggleSaveDeal\(e, deal\)\} className="absolute top-3 (right|left)-3 bg-white\/90 hover:bg-slate-50 p-2 rounded-full text-slate-300 shadow-md transition z-20 hover:scale-110">/g, 
    `<div role="button" onClick={(e) => toggleSaveDeal(e, deal)} className="absolute top-3 $1-3 bg-white/90 hover:bg-slate-50 p-2 rounded-full text-slate-300 shadow-md transition z-30 hover:scale-110 cursor-pointer">`
  );
  
  content = content.replace(
    /<\/button>\s*\{deal.imageUrl \?/g, 
    `</div>\n                    {deal.imageUrl ?`
  );
  
  // Member deals closing tag
  content = content.replace(
    /<\/button>\s*<img src=\{deal.imageUrl\}/g, 
    `</div>\n                  <img src={deal.imageUrl}`
  );
  
  fs.writeFileSync(file, content, 'utf8');
}

fix('components/home/FlashDeals.tsx');
fix('components/home/MemberDeals.tsx');
console.log("Changed button to div");
