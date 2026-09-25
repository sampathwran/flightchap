const fs = require('fs');
let file = 'components/home/VIPPromoSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Import useTranslations
if (!content.includes('useTranslations')) {
  content = content.replace("import { useEffect, useState, useRef } from 'react';", "import { useEffect, useState, useRef } from 'react';\nimport { useTranslations } from 'next-intl';");
}

// Hook
if (!content.includes("const t = useTranslations('VIPPromo');")) {
  content = content.replace("const { user } = useAuth();", "const { user } = useAuth();\n  const t = useTranslations('VIPPromo');");
}

// Replace text
content = content.replace(
  '<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Members VIP Club</h2>',
  '<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{t("title")}</h2>'
);

content = content.replace(
  `Exclusive Member Discounts. Unlock premium travel deals and secret rates available only to our registered members.`,
  `{t("subtitle")}`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed VIPPromoSection translations');
