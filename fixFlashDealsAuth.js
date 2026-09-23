const fs = require('fs');
let content = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');

if (!content.includes('useAuth')) {
  // Add imports
  content = content.replace("import { useTranslations } from 'next-intl';", 
    "import { useTranslations } from 'next-intl';\nimport { useAuth } from '@/context/AuthContext';\nimport { useRouter } from '@/i18n/routing';");
    
  // Add hooks
  content = content.replace("const t = useTranslations('FlashDeals');", 
    "const t = useTranslations('FlashDeals');\n  const { user } = useAuth();\n  const router = useRouter();");

  fs.writeFileSync('components/home/FlashDeals.tsx', content, 'utf8');
}
