import { Connection } from '@/components/layout/Connection';
import { Faq } from '@/components/layout/Faq';
import { HeroSection } from '@/components/layout/HeroSection';
import { InfoBanner } from '@/components/layout/InfoBanner';
import { Order } from '@/components/layout/Order';
import ReviewContent from '@/components/layout/Reviews';
import { TopBenefits } from '@/components/layout/TopBenefits';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TopBenefits />
      <Connection />
      <Order />
      <ReviewContent />
      <Faq />
      <InfoBanner />
    </main>
  );
}
