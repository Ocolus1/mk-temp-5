import React from "react";
import HeroSection from "./Hero/HeroSection";
import FeatureSection from "./Feature/FeatureSection";
import BenefitSection from "./Benefits/BenefitSection";
import IntegrateSection from "./Integrate/IntegrateSection";
import PricingSection from "./Pricing/PricingSection";
import CtaSection from "./Newsletter/NewsletterSection";
import Faq from "./Faq/FaqSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="idk__39 bg-[#F2F9FB]">
      <HeroSection />
      <BenefitSection />
      <FeatureSection />
      <IntegrateSection />
      <Faq />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
