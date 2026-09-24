import HeroSearch from '@/components/home/HeroSearch';
import RecentViews from '@/components/home/RecentViews';
import TopDestinations from '@/components/home/TopDestinations';
import FlashDeals from '@/components/home/FlashDeals';
import MemberDeals from '@/components/home/MemberDeals';
import VIPPromoSection from '@/components/home/VIPPromoSection';
import BlogPreview from '@/components/home/BlogPreview';
import FaqSection from '@/components/home/FaqSection';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <RecentViews />
      <TopDestinations />
      <FlashDeals />
      <MemberDeals />
      <VIPPromoSection />
      <BlogPreview />
      <FaqSection />
    </>
  );
}
