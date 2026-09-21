import HeroSearch from '@/components/home/HeroSearch';
import RecentViews from '@/components/home/RecentViews';
import FlashDeals from '@/components/home/FlashDeals';
import TopDestinations from '@/components/home/TopDestinations';
import BlogPreview from '@/components/home/BlogPreview';
import FaqSection from '@/components/home/FaqSection';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <RecentViews />
      <FlashDeals />
      <TopDestinations />
      <BlogPreview />
      <FaqSection />
    </>
  );
}
