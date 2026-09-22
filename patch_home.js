const fs = require('fs');
const path = require('path');

function patchComponent(fileName, namespace, replacePairs) {
  const filePath = path.join(__dirname, 'components/home', fileName);
  let code = fs.readFileSync(filePath, 'utf8');

  // Add import
  if (!code.includes("import { useTranslations }")) {
    const importRegex = /(import .*;\r?\n)+/;
    code = code.replace(importRegex, match => match + "import { useTranslations } from 'next-intl';\n");
  }

  // Add hook
  const fnMatch = code.match(/export default function \w+\(\) {/);
  if (fnMatch && !code.includes(`useTranslations('${namespace}')`)) {
    code = code.replace(fnMatch[0], fnMatch[0] + `\n  const t = useTranslations('${namespace}');\n`);
  }

  // Replace text
  for (const [oldText, newText] of replacePairs) {
    code = code.replace(oldText, newText);
  }

  fs.writeFileSync(filePath, code);
  console.log(fileName + ' updated');
}

// RecentViews
patchComponent('RecentViews.tsx', 'RecentViews', [
  [/>Recent Searches<\/h2>/, ">{t('recentSearches')}</h2>"],
  [/>View again<\/span>/g, ">{t('viewAgain')}</span>"]
]);

// TopDestinations
patchComponent('TopDestinations.tsx', 'TopDestinations', [
  [/>Top Destinations for You<\/h2>/, ">{t('title')}</h2>"],
  [/>Explore popular spots<\/p>/, ">{t('subtitle')}</p>"],
  [/<span className="text-sm text-slate-500">Flights from<\/span>/g, `<span className="text-sm text-slate-500">{t('flightsFrom')}</span>`]
]);

// FlashDeals
patchComponent('FlashDeals.tsx', 'FlashDeals', [
  [/>Flash Flight Deals<\/h2>/, ">{t('title')}</h2>"],
  [/>Ends in<\/span>/g, ">{t('endsIn')}</span>"],
  [/>Book Now<\/button>/g, ">{t('bookNow')}</button>"]
]);

// BlogPreview
patchComponent('BlogPreview.tsx', 'BlogPreview', [
  [/>Travel Inspiration<\/h2>/, ">{t('title')}</h2>"],
  [/>Read our latest guides<\/p>/, ">{t('subtitle')}</p>"],
  [/>Read more<\/span>/g, ">{t('readMore')}</span>"]
]);

// FaqSection
patchComponent('FaqSection.tsx', 'FaqSection', [
  [/>Frequently Asked Questions<\/h2>/, ">{t('title')}</h2>"],
  [/>Common queries<\/p>/, ">{t('subtitle')}</p>"]
]);

console.log('Done patching remaining components');
