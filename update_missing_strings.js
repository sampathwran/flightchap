const fs = require('fs');
const path = require('path');

const enJsonPath = path.join(__dirname, 'messages/en.json');
const siJsonPath = path.join(__dirname, 'messages/si.json');

const en = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
const si = JSON.parse(fs.readFileSync(siJsonPath, 'utf8'));

// 1. Update JSONs

en.RecentViews.title = "Your Recent Searches";
si.RecentViews.title = "ඔබ මෑතකදී සෙවූ දේවල්";

en.TopDestinations = {
  ...en.TopDestinations,
  subtitleExtended: "Explore the world's top countries and vibrant cities.",
  tabCountries: "Countries",
  tabCities: "Cities",
  reviews: "reviews",
  showLess: "[ Show Less ]",
  readMore: "[ Read More... ]",
  bestTime: "Best time:",
  startingFrom: "Starting from",
  perNight: "/ night",
  findFlights: "Find Flights",
  topAttractions: "Top Attractions"
};
si.TopDestinations = {
  ...si.TopDestinations,
  subtitleExtended: "ලෝකයේ ප්‍රමුඛතම රටවල් සහ විචිත්‍රවත් නගර ගවේෂණය කරන්න.",
  tabCountries: "රටවල්",
  tabCities: "නගර",
  reviews: "විමර්ශන",
  showLess: "[ අඩුවෙන් පෙන්වන්න ]",
  readMore: "[ තවත් කියවන්න... ]",
  bestTime: "හොඳම කාලය:",
  startingFrom: "මිල ආරම්භ වන්නේ",
  perNight: "/ රාත්‍රියකට",
  findFlights: "ගුවන් ගමන් සොයන්න",
  topAttractions: "ප්‍රධාන ආකර්ෂණ ස්ථාන"
};

en.FaqSection = {
  ...en.FaqSection,
  description: "Got questions? We've got answers.",
  q1: "How do I find the cheapest flights?",
  a1: "We compare prices from hundreds of airlines and travel agencies in real-time. Simply enter your destination and dates in the search box, and we'll show you the cheapest available options. You can also check our 'Flash Deals' section for limited-time offers.",
  q2: "Are there any hidden fees when booking?",
  a2: "No, FlightChap is completely free to use. The prices you see on our search results are exactly what the airlines or travel agents charge. We don't add any hidden fees or booking charges.",
  q3: "Can I change or cancel my flight?",
  a3: "Flight changes and cancellations depend entirely on the airline or travel agency you booked with and the type of ticket you purchased. You will need to contact them directly using the details provided in your booking confirmation email.",
  q4: "How do Flash Deals work?",
  a4: "Flash Deals are specially curated, highly discounted flight routes that are available for a very limited time. They are often updated daily and represent significant savings over regular fares."
};

si.FaqSection = {
  ...si.FaqSection,
  description: "ප්‍රශ්න තියෙනවද? අපි ගාව උත්තර තියෙනවා.",
  q1: "වඩාත් ලාභදායී ගුවන් ගමන් සොයා ගන්නේ කෙසේද?",
  a1: "අපි ලොව පුරා ගුවන් සේවා සහ සංචාරක නියෝජිත ආයතන සිය ගණනක මිල ගණන් තථ්‍ය කාලීනව සසඳන්නෙමු. සෙවුම් කොටුවේ ඔබේ ගමනාන්තය සහ දිනයන් ඇතුළත් කරන්න, එවිට අපි ලබා ගත හැකි ලාභදායීම විකල්ප පෙන්වන්නෙමු. අපගේ සීමිත කාලීන දීමනා (Flash Deals) ද පරීක්ෂා කළ හැක.",
  q2: "වෙන්කරවා ගැනීමේදී සැඟවුණු ගාස්තු තිබේද?",
  a2: "නැත, FlightChap සම්පූර්ණයෙන්ම නොමිලේ භාවිතා කළ හැක. ඔබ අපගේ සෙවුම් ප්‍රතිඵලවල දකින මිල ගණන් හරියටම ගුවන් සේවා හෝ සංචාරක නියෝජිතයන් අය කරන මිලයි. අපි කිසිදු සැඟවුණු ගාස්තුවක් හෝ වෙන්කරවා ගැනීමේ ගාස්තුවක් එකතු නොකරමු.",
  q3: "මට මගේ ගුවන් ගමන වෙනස් කිරීමට හෝ අවලංගු කිරීමට හැකිද?",
  a3: "ගුවන් ගමන් වෙනස් කිරීම් සහ අවලංගු කිරීම් සම්පූර්ණයෙන්ම රඳා පවතින්නේ ඔබ වෙන්කරවා ගත් ගුවන් සේවය හෝ සංචාරක නියෝජිතායතනය සහ ඔබ මිලදී ගත් ප්‍රවේශපත්‍ර වර්ගය මතය. ඔබේ වෙන්කරවා ගැනීම තහවුරු කිරීමේ විද්‍යුත් තැපෑලෙහි සපයා ඇති විස්තර භාවිතයෙන් ඔබ ඔවුන්ව සෘජුවම සම්බන්ධ කර ගත යුතුය.",
  q4: "ෆ්ලෑෂ් ඩීල්ස් (Flash Deals) ක්‍රියාත්මක වන්නේ කෙසේද?",
  a4: "ෆ්ලෑෂ් ඩීල්ස් යනු ඉතා සීමිත කාලයක් සඳහා පමණක් ලබා ගත හැකි, ඉතා විශාල වට්ටම් සහිත විශේෂ ගුවන් ගමන් වේ. ඒවා බොහෝ විට දිනපතා යාවත්කාලීන වන අතර සාමාන්‍ය ගාස්තු වලට වඩා සැලකිය යුතු ඉතිරියක් නියෝජනය කරයි."
};

fs.writeFileSync(enJsonPath, JSON.stringify(en, null, 2));
fs.writeFileSync(siJsonPath, JSON.stringify(si, null, 2));


// 2. Patch FAQ Section
let faqCode = fs.readFileSync(path.join(__dirname, 'components/home/FaqSection.tsx'), 'utf8');

// Replace static faqs with translated faqs
faqCode = faqCode.replace(
  /const faqs = \[[\s\S]*?\];/,
  `const faqs = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') }
  ];`
);
faqCode = faqCode.replace(/<p className="text-slate-600">Got questions\? We've got answers\.<\/p>/, `<p className="text-slate-600">{t('description')}</p>`);
fs.writeFileSync(path.join(__dirname, 'components/home/FaqSection.tsx'), faqCode);


// 3. Patch TopDestinations
let topCode = fs.readFileSync(path.join(__dirname, 'components/home/TopDestinations.tsx'), 'utf8');

topCode = topCode.replace(/Explore the world's top countries and vibrant cities\./, `{t('subtitleExtended')}`);
topCode = topCode.replace(/>Countries<\/button>/g, `>{t('tabCountries')}</button>`);
topCode = topCode.replace(/>Cities<\/button>/g, `>{t('tabCities')}</button>`);
topCode = topCode.replace(/{city\.reviews} reviews/, `{city.reviews} {t('reviews')}`);
topCode = topCode.replace(/'\[ Show Less \]' : '\[ Read More\.\.\. \]'/g, `t('showLess') : t('readMore')`);
topCode = topCode.replace(/Best time:/g, `{t('bestTime')}`);
topCode = topCode.replace(/Starting from <span className="font-bold text-gray-900 ml-1">\$\{city\.startingPrice\} \/ night<\/span>/g, `{t('startingFrom')} <span className="font-bold text-gray-900 ml-1">\${city.startingPrice} {t('perNight')}</span>`);
topCode = topCode.replace(/Find Flights/g, `{t('findFlights')}`);
topCode = topCode.replace(/Top Attractions/g, `{t('topAttractions')}`);

// Also fix TopDestinations tabs which had title and subtitle replaced incorrectly before? No, they used {t('title')} which is fine.
fs.writeFileSync(path.join(__dirname, 'components/home/TopDestinations.tsx'), topCode);


console.log('Update finished');
