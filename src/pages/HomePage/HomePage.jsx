import GlobalTrustSection from "./component/GlobalTrustSection";
import HeroSection from "./component/HeroSection";
import IndustriesSection from "./component/IndustriesSection";
import MetricsSection from "./component/MetricsSection ";

function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <IndustriesSection />
      <MetricsSection />
      <GlobalTrustSection />
    </div>
  );
}

export default HomePage;
