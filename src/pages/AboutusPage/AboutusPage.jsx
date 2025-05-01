import CTASection from "./component/CTASection";
import FAQSection from "./component/FAQSection";
import HeroSection from "./component/HeroSection";
import OurMissionSection from "./component/OurMissionSection";
import ServicesSection from "./component/OurServicesSection";

function AboutusPage() {
  return (
    <div>
      <HeroSection />
      <OurMissionSection />
      <ServicesSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}

export default AboutusPage;
