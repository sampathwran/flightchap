const fs = require('fs');
const path = require('path');

const enJsonPath = path.join(__dirname, 'messages/en.json');
const siJsonPath = path.join(__dirname, 'messages/si.json');

const en = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));
const si = JSON.parse(fs.readFileSync(siJsonPath, 'utf8'));

en.Support = {
  heroTitle: "How can we help you today?",
  heroSubtitle: "Search our knowledge base or browse categories below to find the answers you need.",
  searchPlaceholder: "Search for articles, questions...",
  
  categoriesTitle: "Browse by Topic",
  catBookings: "Bookings & Payments",
  catBookingsDesc: "Managing your reservations, payment methods, and receipts.",
  catCancellations: "Changes & Cancellations",
  catCancellationsDesc: "How to modify or cancel your flight and get refunds.",
  catBaggage: "Baggage & Extras",
  catBaggageDesc: "Baggage allowances, adding extra weight, and special items.",
  catAccount: "Account & Security",
  catAccountDesc: "Managing your profile, passwords, and data privacy.",
  catTechnical: "Technical Support",
  catTechnicalDesc: "Troubleshooting app or website issues and bugs.",
  catEsim: "e-SIM Support",
  catEsimDesc: "Setup guides, activation issues, and data plans.",
  
  contactTitle: "Still need help?",
  contactSubtitle: "Our support team is available 24/7 to assist you with any questions.",
  btnChat: "Live Chat",
  btnCall: "Call Us",
  btnEmail: "Email Us",
  
  faqTitle: "Frequently Asked Questions",
  faq1Q: "How long does a refund take?",
  faq1A: "Refunds typically take 5-10 business days to reflect in your account, depending on your bank.",
  faq2Q: "Can I transfer my ticket to someone else?",
  faq2A: "Most airlines do not allow name changes or ticket transfers. You would need to cancel and rebook.",
  faq3Q: "How do I activate my travel e-SIM?",
  faq3A: "You will receive an email with a QR code. Simply scan it with your phone's camera to install the e-SIM."
};

si.Support = {
  heroTitle: "අද අපට ඔබට උදව් කළ හැක්කේ කෙසේද?",
  heroSubtitle: "ඔබට අවශ්‍ය පිළිතුරු සොයාගැනීමට පහතින් සොයන්න හෝ මාතෘකා ඔස්සේ බලන්න.",
  searchPlaceholder: "ලිපි, ප්‍රශ්න සොයන්න...",
  
  categoriesTitle: "මාතෘකා අනුව සොයන්න",
  catBookings: "වෙන්කරවා ගැනීම් සහ ගෙවීම්",
  catBookingsDesc: "ඔබේ වෙන්කරවා ගැනීම්, ගෙවීමේ ක්‍රම සහ රිසිට්පත් කළමනාකරණය කිරීම.",
  catCancellations: "වෙනස් කිරීම් සහ අවලංගු කිරීම්",
  catCancellationsDesc: "ගුවන් ගමන් වෙනස් කරන හෝ අවලංගු කරන ආකාරය සහ මුදල් ආපසු ලබාගැනීම.",
  catBaggage: "ගමන් මලු සහ අමතර දේවල්",
  catBaggageDesc: "ගමන් මලු සීමාවන්, අමතර බර එකතු කිරීම සහ විශේෂ භාණ්ඩ.",
  catAccount: "ගිණුම සහ ආරක්ෂාව",
  catAccountDesc: "ඔබේ ගිණුම, මුරපද සහ දත්ත රහස්‍යතාව කළමනාකරණය කිරීම.",
  catTechnical: "තාක්ෂණික සහාය",
  catTechnicalDesc: "වෙබ් අඩවියේ ගැටළු සහ දෝෂ නිවැරදි කිරීම.",
  catEsim: "ඊ-සිම් (e-SIM) සහාය",
  catEsimDesc: "සකස් කිරීමේ මාර්ගෝපදේශ, සක්‍රිය කිරීමේ ගැටළු සහ ඩේටා පැකේජ.",
  
  contactTitle: "තවත් උදව් අවශ්‍යද?",
  contactSubtitle: "ඕනෑම ප්‍රශ්නයක් සඳහා ඔබට උදව් කිරීමට අපගේ සහායක කණ්ඩායම පැය 24 පුරාම සූදානම්.",
  btnChat: "Live Chat හරහා කතා කරන්න",
  btnCall: "අපට අමතන්න",
  btnEmail: "විද්‍යුත් තැපෑලක් එවන්න",
  
  faqTitle: "නිතර අසන ප්‍රශ්න (FAQ)",
  faq1Q: "මුදල් ආපසු ලබාගැනීමට කොපමණ කාලයක් ගතවේද?",
  faq1A: "ඔබේ බැංකුව අනුව, මුදල් ආපසු ලබාගැනීම සඳහා සාමාන්‍යයෙන් වැඩකරන දින 5-10 ක් ගතවේ.",
  faq2Q: "මට මගේ ටිකට් පත වෙනත් කෙනෙකුට ලබාදිය හැකිද?",
  faq2A: "බොහෝ ගුවන් සේවා නම වෙනස් කිරීමට හෝ ටිකට් පත් හුවමාරු කිරීමට ඉඩ නොදේ. ඒ වෙනුවට එය අවලංගු කර නැවත වෙන්කරවා ගත යුතුය.",
  faq3Q: "මගේ සංචාරක e-SIM එක සක්‍රිය කරන්නේ කෙසේද?",
  faq3A: "ඔබට QR කේතයක් සමඟ විද්‍යුත් තැපෑලක් ලැබෙනු ඇත. එය ස්ථාපනය කිරීම සඳහා ඔබේ දුරකථනයේ කැමරාවෙන් ස්කෑන් කරන්න."
};

fs.writeFileSync(enJsonPath, JSON.stringify(en, null, 2));
fs.writeFileSync(siJsonPath, JSON.stringify(si, null, 2));

console.log('Support strings added');
