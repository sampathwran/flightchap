const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const si = JSON.parse(fs.readFileSync('messages/si.json', 'utf8'));

en.Profile = {
  "title": "My Account",
  "tabProfile": "Profile Settings",
  "tabSaved": "Saved Deals",
  "tabAlerts": "Fare Alerts",
  "tabPromos": "VIP Promo Codes",
  "logout": "Log Out",
  "savedTitle": "Your Saved Deals",
  "savedSubtitle": "Deals you've bookmarked for later.",
  "alertsTitle": "Price Drop Alerts",
  "alertsSubtitle": "We will notify you when prices drop for these routes.",
  "promosTitle": "Exclusive Promo Codes",
  "promosSubtitle": "Use these codes at checkout on our partner sites.",
  "btnCopy": "Copy Code"
};

si.Profile = {
  "title": "මගේ ගිණුම",
  "tabProfile": "ගිණුමේ සැකසුම්",
  "tabSaved": "සේව් කළ දීමනා",
  "tabAlerts": "මිල අඩුවීමේ දැනුම්දීම්",
  "tabPromos": "VIP ප්‍රොමෝ කෝඩ්",
  "logout": "ඉවත් වන්න (Log out)",
  "savedTitle": "ඔබ සේව් කළ දීමනා",
  "savedSubtitle": "ඔබ පසුව බැලීමට සේව් කළ දීමනා මෙහි ඇත.",
  "alertsTitle": "මිල අඩුවීමේ දැනුම්දීම් (Fare Alerts)",
  "alertsSubtitle": "මෙම ගමන් මාර්ග වල මිල අඩු වූ වහාම අපි ඔබට දැනුම් දෙන්නෙමු.",
  "promosTitle": "විශේෂ ප්‍රොමෝ කෝඩ්",
  "promosSubtitle": "මෙම කෝඩ් භාවිතා කර අපගේ හවුල්කාර වෙබ්අඩවි වලින් වට්ටම් ලබාගන්න.",
  "btnCopy": "කෝඩ් එක කොපි කරන්න"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/si.json', JSON.stringify(si, null, 2), 'utf8');
