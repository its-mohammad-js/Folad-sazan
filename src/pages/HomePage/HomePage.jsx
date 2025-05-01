import GlobalTrustSection from "./component/GlobalTrustSection";
import GrowthExcellenceSection from "./component/GrowthExcellenceSection";
import HeroSection from "./component/HeroSection";
import IndustriesSection from "./component/IndustriesSection";
import MetricsSection from "./component/MetricsSection ";
import TestimonialsSection from "./component/TestimonialsSection";

function HomePage() {
  return (
    <div className="[&>div]:py-24">
      <HeroSection />
      <IndustriesSection />
      <MetricsSection />
      <GlobalTrustSection />
      <GrowthExcellenceSection />
      <TestimonialsSection />
    </div>
  );
}

export default HomePage;
