const fs = require('fs');

const si = {
  "Navbar": {
    "home": "මුල් පිටුව",
    "support": "සහාය",
    "signIn": "Sign In",
    "myBookings": "මගේ වෙන්කිරීම්",
    "labelDestination": "ගමනාන්තය",
    "labelDuration": "කාලසීමාව",
    "labelDataPackage": "ඩේටා පැකේජය",
    "placeholderWhereTo": "කොහෙද යන්නේ?",
    "opt7Days": "දින 7ක්",
    "opt15Days": "දින 15ක්",
    "opt30Days": "දින 30ක්",
    "btnFindEsims": "e-SIM සොයන්න",
    "tabFlights": "ගුවන් ගමන්",
    "tabCars": "කාර්/බයික්",
    "tabTransfers": "ප්‍රවාහන සේවා",
    "tabEsims": "e-SIMs",
    "flightTitle": "ඔබගේ ඊළඟ ගුවන් ගමන සොයාගන්න",
    "flightSubtitle": "ගුවන් සමාගම් 1000 කට වඩා සසඳා හොඳම මිල ගණන් යටතේ වෙන්කරවා ගන්න.",
    "carTitle": "ඔබගේ වාහනය වෙන්කරවා ගන්න",
    "carSubtitle": "ලොව පුරා හොඳම කාර් සහ යතුරුපැදි කුලියට දෙන ආයතන වලින් සසඳන්න.",
    "transferTitle": "පහසු ප්‍රවාහන සේවා",
    "transferSubtitle": "ගුවන් තොටුපලේ සිට ඔබගේ හෝටලයට පහසුවෙන් යන්න වාහනයක් වෙන්කරවා ගන්න.",
    "esimTitle": "ලොව පුරා සම්බන්ධ වී සිටින්න",
    "esimSubtitle": "ඔබගේ සංචාරය සඳහා අන්තර්ජාල පහසුකම් ලබාගන්න ක්ෂණික e-SIM එකක් මිලදී ගන්න."
  },
  "FlashDeals": {
    "title": "විශේෂ දීමනා",
    "subtitle": "මෙම සුවිශේෂී දීමනා අවසන් වීමට පෙර ලබාගන්න!",
    "bookNow": "දැන්ම වෙන්කරවා ගන්න"
  },
  "BlogPreview": {
    "title": "නවීනතම සංචාරක උපදෙස්",
    "subtitle": "අපගේ නවතම ලිපි සහ සංචාරක මාර්ගෝපදේශ කියවන්න.",
    "readMore": "තවදුරටත් කියවන්න"
  },
  "Footer": {
    "aboutUs": "අප ගැන",
    "aboutDesc": "අපි ඔබට හොඳම සංචාරක අත්දැකීම ලබා දීමට කැපවී සිටින්නෙමු. ගුවන් ගමන් වල සිට e-SIM දක්වා සියල්ල එකම තැනකින්.",
    "quickLinks": "ඉක්මන් සබැඳි",
    "contact": "සම්බන්ධ වන්න",
    "rights": "සියලු හිමිකම් ඇවිරිණි."
  },
  "Home": {
    "recentTitle": "මෑතකදී බැලූ දේවල්",
    "recentSubtitle": "ඔබ මෑතකදී බැලූ ගුවන් ගමන් සහ හෝටල් පහසුවෙන් නැවත බලන්න.",
    "topDestTitle": "ජනප්‍රිය ගමනාන්ත",
    "topDestSubtitle": "සංචාරකයින් අතර වඩාත් ජනප්‍රිය ගමනාන්තයන් ගවේෂණය කරන්න.",
    "catFlights": "ගුවන් ගමන්",
    "catFlightsDesc": "හොඳම මිලට ගුවන් ටිකට්පත් සොයාගන්න.",
    "catHotels": "හෝටල්",
    "catHotelsDesc": "ඔබගේ ගමනාන්තයේ හොඳම නවාතැන් සොයාගන්න.",
    "catCars": "වාහන කුලියට",
    "catCarsDesc": "සංචාරය සඳහා වාහනයක් කුලියට ගන්න.",
    "catAccount": "ගිණුම සහ සැකසුම්",
    "catAccountDesc": "ඔබගේ ගිණුම, වෙන්කිරීම් සහ ගෙවීම් විස්තර කළමනාකරණය කරන්න.",
    "catTechnical": "තාක්ෂණික ගැටළු",
    "catTechnicalDesc": "වෙබ්අඩවිය භාවිතා කිරීමේදී ඇතිවන තාක්ෂණික ගැටළු සඳහා සහාය.",
    "catEsim": "e-SIM ගැටළු",
    "catEsimDesc": "e-SIM මිලදී ගැනීම සහ සක්‍රිය කිරීම පිළිබඳ ගැටළු.",
    "contactTitle": "අපගේ සහාය අවශ්‍යද?",
    "contactSubtitle": "ඔබට කිසියම් ගැටළුවක් හෝ ප්‍රශ්නයක් ඇත්නම් අපගේ පාරිභෝගික සහාය කණ්ඩායම පැය 24 පුරාම ඔබට උදව් කිරීමට සූදානම්.",
    "btnChat": "Live Chat හරහා සම්බන්ධ වන්න",
    "btnCall": "අපට අමතන්න",
    "btnEmail": "ඊමේල් එකක් යවන්න",
    "faqTitle": "නිතර අසන ප්‍රශ්න (FAQ)",
    "faq1Q": "වෙන්කිරීමක් අවලංගු කළහොත් මගේ මුදල් ආපසු ලැබෙයිද?",
    "faq1A": "ඔව්, ඔබගේ වෙන්කිරීම අවලංගු කළහොත්, අදාළ සේවා සපයන්නාගේ ප්‍රතිපත්තියට අනුව දින 5-10 ක් ඇතුළත මුදල් ආපසු ලැබෙනු ඇත.",
    "faq2Q": "මම ගුවන් ටිකට්පතක් වෙන්කරවා ගත් පසු මට තහවුරු කිරීමේ විද්‍යුත් තැපෑලක් නොලැබුණේ ඇයි?",
    "faq2A": "කරුණාකර ඔබගේ විද්‍යුත් තැපෑලේ Spam ෆෝල්ඩරය පරීක්ෂා කරන්න. එය එහි නොමැති නම්, කරුණාකර අපගේ පාරිභෝගික සහාය කණ්ඩායම අමතන්න.",
    "faq3Q": "මම මිලදී ගත් e-SIM එක ක්‍රියාත්මක කරන්නේ කෙසේද?",
    "faq3A": "ඔබට QR කේතයක් සහිත විද්‍යුත් තැපෑලක් ලැබෙනු ඇත. එය ස්කෑන් කිරීමෙන් ඔබට e-SIM එක සක්‍රිය කළ හැක."
  },
  "MemberDeals": {
    "vipClub": "සාමාජිකයින්ට පමණයි",
    "title": "සාමාජිකයින්ට විශේෂිත දීමනා",
    "subtitle": "අපගේ ලියාපදිංචි සාමාජිකයින්ට පමණක් වෙන්වූ විශේෂිත සංචාරක දීමනා සහ රහසිගත මිල ගණන් ලබාගන්න.",
    "btnUnlock": "දීමනාව ලබාගන්න",
    "btnSignIn": "ලබාගැනීමට ලොග් වන්න",
    "signUpToUnlock": "සියල්ල බැලීමට ලියාපදිංචි වන්න"
  }
};

const en = {
  "Navbar": {
    "home": "Home",
    "support": "Support",
    "signIn": "Sign In",
    "myBookings": "My Bookings",
    "labelDestination": "Destination",
    "labelDuration": "Duration",
    "labelDataPackage": "Data Package",
    "placeholderWhereTo": "Where to?",
    "opt7Days": "7 Days",
    "opt15Days": "15 Days",
    "opt30Days": "30 Days",
    "btnFindEsims": "Find e-SIMs",
    "tabFlights": "Flights",
    "tabCars": "Cars / Bikes",
    "tabTransfers": "Transfers",
    "tabEsims": "e-SIMs",
    "flightTitle": "Find your next adventure",
    "flightSubtitle": "Compare over 1000 airlines and book with the best prices.",
    "carTitle": "Rent a vehicle",
    "carSubtitle": "Compare the best car and bike rentals worldwide.",
    "transferTitle": "Easy Transfers",
    "transferSubtitle": "Book a comfortable ride from the airport to your hotel.",
    "esimTitle": "Stay connected everywhere",
    "esimSubtitle": "Get instant e-SIM internet packages for your trip."
  },
  "FlashDeals": {
    "title": "Flash Deals",
    "subtitle": "Grab these exclusive deals before they're gone!",
    "bookNow": "Book Now"
  },
  "BlogPreview": {
    "title": "Latest Travel Tips",
    "subtitle": "Read our latest articles and travel guides.",
    "readMore": "Read More"
  },
  "Footer": {
    "aboutUs": "About Us",
    "aboutDesc": "We are committed to giving you the best travel experience. From flights to e-SIMs, everything in one place.",
    "quickLinks": "Quick Links",
    "contact": "Contact",
    "rights": "All Rights Reserved."
  },
  "Home": {
    "recentTitle": "Recently Viewed",
    "recentSubtitle": "Easily jump back to the flights and hotels you looked at recently.",
    "topDestTitle": "Top Destinations",
    "topDestSubtitle": "Explore the most popular destinations loved by travelers.",
    "catFlights": "Flights",
    "catFlightsDesc": "Find flight tickets at the best price.",
    "catHotels": "Hotels",
    "catHotelsDesc": "Find the best accommodation in your destination.",
    "catCars": "Car Rentals",
    "catCarsDesc": "Rent a vehicle for your trip.",
    "catAccount": "Account & Settings",
    "catAccountDesc": "Manage your account, bookings, and payment details.",
    "catTechnical": "Technical Issues",
    "catTechnicalDesc": "Support for technical issues when using the website.",
    "catEsim": "e-SIM Issues",
    "catEsimDesc": "Issues regarding purchasing and activating e-SIMs.",
    "contactTitle": "Need our support?",
    "contactSubtitle": "If you have any issues or questions, our customer support team is ready to help you 24/7.",
    "btnChat": "Connect via Live Chat",
    "btnCall": "Call Us",
    "btnEmail": "Send an Email",
    "faqTitle": "Frequently Asked Questions (FAQ)",
    "faq1Q": "Will I get a refund if I cancel a booking?",
    "faq1A": "Yes, if you cancel your booking, you will receive a refund within 5-10 days according to the provider's policy.",
    "faq2Q": "Why didn't I receive a confirmation email after booking a flight?",
    "faq2A": "Please check the Spam folder in your email. If it is not there, please contact our customer support team.",
    "faq3Q": "How do I activate the e-SIM I purchased?",
    "faq3A": "You will receive an email with a QR code. You can activate the e-SIM by scanning it."
  },
  "MemberDeals": {
    "vipClub": "Members VIP Club",
    "title": "Exclusive Member Discounts",
    "subtitle": "Unlock premium travel deals and secret rates available only to our registered members.",
    "btnUnlock": "Unlock Deal",
    "btnSignIn": "Sign in to Book",
    "signUpToUnlock": "Sign up to unlock all"
  }
};

fs.writeFileSync('messages/si.json', JSON.stringify(si, null, 2));
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
console.log('Fixed translations');
