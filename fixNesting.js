const fs = require('fs');

let fd = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');

// Replace <a href...> with <div onClick...>
fd = fd.replace(/<a href=\{deal.targetUrl\} target="_blank" rel="noopener noreferrer" key=\{deal.id\} className="group rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">/g, 
  `<div key={deal.id} onClick={() => window.open(deal.targetUrl || '#', '_blank')} className="cursor-pointer group rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">`);

// Replace the closing </a> for the deal map with </div>
// It's the closing tag of the card. Let's find it.
// The easiest way is regex, but it might be tricky. Let's just do a string replace of `</a>` if it's there. 
// We know it's there.
fd = fd.replace(/<\/a>/g, `</div>`);

fs.writeFileSync('components/home/FlashDeals.tsx', fd, 'utf8');

// For MemberDeals, it already uses a div and a specific 'Unlock Deal' button.
// Let's check if there is any <a> tag wrapping it. No, MemberDeals uses button `handleBookNow`.

console.log("Fixed HTML nesting");
