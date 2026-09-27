import { MetadataRoute } from 'next';

const locales = ['en', 'si', 'es', 'fr', 'de', 'zh', 'ar', 'hi', 'ru', 'pt', 'ja', 'ko', 'it', 'nl', 'tr'];
const baseUrl = 'https://flightchap.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const pages = ['', '/profile'];

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  // Adding the root domain without locale, though it will redirect
  sitemapEntries.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  });

  return sitemapEntries;
}
