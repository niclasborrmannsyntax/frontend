import FaqSection from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import PricingSection from "./components/sections/Pricing";
import WhyUsSection from "./components/sections/WhyUs";
import BenefitsGrid from "./components/shared/BenefitsGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUsSection />
      <PricingSection />
      <BenefitsGrid
        ids={[
          "simplified-payments",
          "secure-transactions",
          "real-time-insights",
        ]}
      />
      <FaqSection />
      <BenefitsGrid
        ids={["fast-setup", "easy-management", "flexible-integration"]}
        buttonText="Explore all Features"
      />
    </>
  );
}
