const fs = require('fs');

const enRaw = fs.readFileSync('messages/en.json', 'utf8');
const siRaw = fs.readFileSync('messages/si.json', 'utf8');

const en = JSON.parse(enRaw);
const si = JSON.parse(siRaw);

en.MemberDeals = {
  "vipClub": "Members VIP Club",
  "title": "Exclusive Member Discounts",
  "subtitle": "Unlock premium travel deals and secret rates available only to our registered members.",
  "btnUnlock": "Unlock Deal",
  "btnSignIn": "Sign in to Book",
  "signUpToUnlock": "Sign up to unlock all"
};

si.MemberDeals = {
  "vipClub": "සාමාජිකයින්ට පමණයි",
  "title": "සාමාජිකයින්ට විශේෂිත දීමනා",
  "subtitle": "අපගේ ලියාපදිංචි සාමාජිකයින්ට පමණක් වෙන්වූ විශේෂිත සංචාරක දීමනා සහ රහසිගත මිල ගණන් ලබාගන්න.",
  "btnUnlock": "දීමනාව ලබාගන්න",
  "btnSignIn": "ලබාගැනීමට ලොග් වන්න",
  "signUpToUnlock": "සියල්ල බැලීමට ලියාපදිංචි වන්න"
};

// Write safely
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync('messages/si.json', JSON.stringify(si, null, 2), 'utf8');

console.log("Translations merged safely!");
