const fs = require('fs');

const enAbout = {
    "title": "When travelers are searching for their dream flight or perfect stay, we want the obvious choice to be FlightChap.",
    "subtitle": "Your ultimate travel metasearch engine.",
    "missionTitle": "Our Mission",
    "p1": "We empower travelers by aggregating millions of flight deals, hotels, and rentals across hundreds of trusted booking partners into one place. We do not take payments or handle bookings directly—we simply connect you to the absolute best price with zero hidden fees and zero risk.",
    "p2": "FlightChap started with a simple idea: use technology to simplify travel comparison. As an affiliate platform, we eliminate the need to check ten different websites. We partner with the world's top travel agencies to show you all the prices in one place, allowing you to click through and book directly with the provider you trust.",
    "p3": "Always at the forefront of innovation, we continue to leverage cutting-edge tech like AI in our product - to simplify flight search and dramatically enhance the user experience.",
    "whyChooseUs": "Why Choose FlightChap?",
    "w1Title": "Unbeatable Prices",
    "w1Desc": "We compare hundreds of sites simultaneously to ensure you never overpay for a flight or hotel.",
    "w2Title": "100% Transparent",
    "w2Desc": "No hidden fees. No extra charges. The price you see is the price you pay to our partners.",
    "w3Title": "AI-Powered",
    "w3Desc": "Our smart algorithms find the fastest, cheapest, and most convenient routes tailored to your schedule.",
    "valuesTitle": "Our Core Values",
    "v1Title": "We are always learning",
    "v1Desc": "We stay curious, open-minded and ready to grow. We continuously learn, adapt to change and embrace new ideas.",
    "v2Title": "Technology is at our core",
    "v2Desc": "By embracing cutting-edge technologies and utilizing AI automation, we are committed to solving real user problems in the smartest way.",
    "v3Title": "Entrepreneurial passion",
    "v3Desc": "We believe in challenging the status quo and experimenting with new ways to tackle our challenges.",
    "statsTitle": "By the numbers",
    "s1Title": "Localised Websites",
    "s1Desc": "Available in over 30 languages globally.",
    "s2Title": "Monthly Users",
    "s2Desc": "Helping millions find great deals with simple clicks.",
    "s3Title": "Countries",
    "s3Desc": "We have an active presence in 190 countries.",
    "s4Title": "Partner Sites",
    "s4Desc": "We compare prices from hundreds of platforms instantly."
};

const siAbout = {
    "title": "සංචාරකයින් ඔවුන්ගේ සිහින ගමනාන්තය හෝ පරිපූර්ණ නවාතැන සොයන විට, අපට අවශ්‍ය වන්නේ ඔවුන්ගේ පළමු තේරීම FlightChap වීමයි.",
    "subtitle": "ඔබේ විශ්වාසනීය Travel Metasearch එන්ජිම.",
    "missionTitle": "අපගේ මෙහෙවර",
    "p1": "අපි ලොව පුරා ඇති සිය ගණනක් වූ විශ්වාසනීය booking partners ලාගේ flight deals, hotels සහ rentals එකම තැනකට ගෙනවිත් සංචාරකයින්ට සහාය වෙමු. අපි කිසිදු ගෙවීමක් සෘජුවම ලබාගන්නේ නැත—අපි කරන්නේ කිසිදු අමතර ගාස්තුවකින් තොරව ඔබට හොඳම මිල ගණන් සොයා දීම පමණි.",
    "p2": "FlightChap ආරම්භ වූයේ සරල අදහසකිනි: තාක්ෂණය භාවිතයෙන් සංචාරක මිල ගණන් සංසන්දනය කිරීම සරල කිරීම. Affiliate platform එකක් ලෙස, වෙබ් අඩවි 10ක් පිරික්සීමේ කරදරය අපි නැති කරමු. ඔබට විශ්වාසවන්තම ආයතන වලින් කෙළින්ම වෙන්කරවා ගැනීමට හැකි වන පරිදි අපි ලොව ප්‍රමුඛතම ආයතන සමග එක්ව ක්‍රියා කරමු.",
    "p3": "නිරන්තරයෙන්ම නවෝත්පාදන සමග ඉදිරියට යන අපි, AI වැනි නවීන තාක්ෂණයන් අපගේ සේවාවට එක් කරමින් පරිශීලක අත්දැකීම වඩාත් සරල හා උසස් කරමු.",
    "whyChooseUs": "ඇයි FlightChap තෝරාගන්නේ?",
    "w1Title": "හොඳම මිල ගණන්",
    "w1Desc": "ඔබට කිසිවිටෙකත් වැඩිපුර ගෙවීමට සිදු නොවන බව සහතික කිරීම සඳහා අපි එකවර වෙබ් අඩවි සිය ගණනක් සංසන්දනය කරමු.",
    "w2Title": "100% විනිවිද භාවය",
    "w2Desc": "සැඟවුණු ගාස්තු නැත. අමතර අය කිරීම් නැත. ඔබ දකින මිල පමණක් අදාළ ආයතනයට ගෙවන්න.",
    "w3Title": "AI තාක්ෂණය",
    "w3Desc": "අපගේ දක්ෂ ඇල්ගොරිතම මගින් ඔබේ කාලසටහනට ගැළපෙන වේගවත්ම, ලාභදායීම සහ පහසුම ගුවන් ගමන් මාර්ග සොයා ගනී.",
    "valuesTitle": "අපගේ ප්‍රධාන වටිනාකම්",
    "v1Title": "අපි නිතරම ඉගෙන ගනිමු",
    "v1Desc": "අපි නිරන්තරයෙන්ම අලුත් දේවල් ගැන උනන්දු වෙමු. අලුත් අදහස් වැළඳගනිමින් ඉදිරියට යමු.",
    "v2Title": "තාක්ෂණය අපගේ පදනමයි",
    "v2Desc": "AI සහ නවීන තාක්ෂණයන් භාවිතා කරමින්, පරිශීලකයින්ගේ සැබෑ ගැටළු සඳහා වඩාත් සුදුසු විසඳුම් ලබා දීමට අපි බැඳී සිටිමු.",
    "v3Title": "ව්‍යවසායකත්ව ආශාව",
    "v3Desc": "අපි සෑම විටම පවතින රාමුවෙන් පිටත සිතමින් අලුත් දේවල් අත්හදා බලන්නෙමු.",
    "statsTitle": "සංඛ්‍යා ලේඛන",
    "s1Title": "භාෂා ගණනාවකින්",
    "s1Desc": "ලොව පුරා භාෂා 30කට වඩා වැඩි ගණනකින් ලබාගත හැක.",
    "s2Title": "මාසික පරිශීලකයින්",
    "s2Desc": "මිලියන ගණනක් පරිශීලකයින්ට හොඳම deals සොයා ගැනීමට සහාය වේ.",
    "s3Title": "රටවල්",
    "s3Desc": "රටවල් 190කට අධික සංඛ්‍යාවක අපගේ සේවාව සක්‍රීයව පවතී.",
    "s4Title": "හවුල්කරුවන්",
    "s4Desc": "ලොව පුරා සිය ගණනක් වේදිකාවල මිල ගණන් ක්ෂණිකව සංසන්දනය කරයි."
};

function updateJson(file, newObj) {
    let data = JSON.parse(fs.readFileSync(file, 'utf8'));
    data["About"] = newObj;
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

updateJson('messages/en.json', enAbout);
updateJson('messages/si.json', siAbout);
console.log('Translations updated!');
