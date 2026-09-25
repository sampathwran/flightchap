const fs = require('fs');
let file = 'app/[locale]/flights/[city]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update generateMetadata
content = content.replace(
  "export function generateMetadata({ params }: { params: { city: string } }): Metadata {",
  "export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {\n  const resolvedParams = await params;"
);
content = content.replace(
  "const cityKey = params.city.toLowerCase();",
  "const cityKey = resolvedParams.city.toLowerCase();"
);

// Update DestinationPage
content = content.replace(
  "export default function DestinationPage({ params }: { params: { locale: string, city: string } }) {",
  "export default async function DestinationPage({ params }: { params: Promise<{ locale: string, city: string }> }) {\n  const resolvedParams = await params;"
);
content = content.replace(
  "const cityKey = params.city.toLowerCase() as keyof typeof destinations;",
  "const cityKey = resolvedParams.city.toLowerCase() as keyof typeof destinations;"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed async params in flights page');
