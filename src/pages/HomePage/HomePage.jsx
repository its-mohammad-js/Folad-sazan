import { useTranslation } from "react-i18next";
import GlobalTrustSection from "./component/GlobalTrustSection";
import GrowthExcellenceSection from "./component/GrowthExcellenceSection";
import HeroSection from "./component/HeroSection";
import IndustriesSection from "./component/IndustriesSection";
import MetricsSection from "./component/MetricsSection ";
import TestimonialsSection from "./component/TestimonialsSection";

function HomePage() {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="[&>div]:py-8 relative md:[&>div]:py-24">
      <HeroSection />
      <IndustriesSection />

      <div className="absolute inset-0 w-[150%] md:w-[110%] z-0">
        <img
          src={
            language !== "fa"
              ? "/images/LineShapesRTL.svg"
              : "/images/LineShapesLTR.svg"
          }
          alt="lines"
          className="-ml-20 mt-64 md:mt-14"
        />
      </div>

      <MetricsSection />
      <GlobalTrustSection />
      <GrowthExcellenceSection />
      <TestimonialsSection />
    </div>
  );
}

export default HomePage;
