import { Connection } from '@/components/layout/Connection';
import { HeroSection } from '@/components/layout/HeroSection';
import { Order } from '@/components/layout/Order';
import { TopBenefits } from '@/components/layout/TopBenefits';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TopBenefits />
      <Connection />
      <Order />
    </main>
  );
}
