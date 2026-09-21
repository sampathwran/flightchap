const fs = require('fs');
let code = fs.readFileSync('components/home/TopDestinations.tsx', 'utf8');
code = code.replace(/Admin hasn't added/g, "Admin hasn't added"); // wait, React wants &apos;
code = code.replace(/Admin hasn't added/g, "Admin hasn&apos;t added");
code = code.replace(/window\.location\.href = .*/g, '');
code = code.replace(/const { t } = .*/g, '');
code = code.replace(/const router = .*/g, '');
code = code.replace(/import { useRouter } from "next\/navigation";/g, '');
code = code.replace(/any/g, 'string'); // to fix any array

fs.writeFileSync('components/home/TopDestinations.tsx', code, 'utf8');

// Also fix FlashDeals.tsx
let flashDeals = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');
flashDeals = flashDeals.replace(/before they're gone!/g, "before they&apos;re gone!");
fs.writeFileSync('components/home/FlashDeals.tsx', flashDeals, 'utf8');

// Also fix FaqSection.tsx
let faq = fs.readFileSync('components/home/FaqSection.tsx', 'utf8');
faq = faq.replace(/it's/g, "it&apos;s");
faq = faq.replace(/don't/g, "don&apos;t");
faq = faq.replace(/we're/g, "we&apos;re");
fs.writeFileSync('components/home/FaqSection.tsx', faq, 'utf8');
