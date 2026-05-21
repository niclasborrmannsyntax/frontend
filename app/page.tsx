"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ContactSection from "./components/sections/Contact";
import FaqSection from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import PricingSection from "./components/sections/Pricing";
import WhyUsSection from "./components/sections/WhyUs";
import BenefitsGrid from "./components/shared/BenefitsGrid";
import CheckboxDisplay from "./components/shared/CheckboxDisplay";
import DynamicSection from "./components/shared/DynamicSection";
import { sections } from "./content";

export default function HomePage() {
  const router = useRouter();
  const { whyPayments, experience } = sections;

  const handleDashboardRoute = () => router.push("/dashboard");
  const handleContactRoute = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAuthRoute = () => router.push("/auth");

  return (
    <>
      <Header />
      <Hero
        onContactClick={handleContactRoute}
        onCreateAccountClick={handleAuthRoute}
      />
      <div id="why-us">
        <WhyUsSection onCtaClick={handleContactRoute} />
      </div>
      <div id="pricing">
        <PricingSection onCtaClick={handleDashboardRoute} />
      </div>

      <div id="experience">
        <DynamicSection
          backgroundColor="bg-background-dark"
          subtitle={experience.subtitle}
          title={experience.title}
          description={experience.description}
          cta={experience.cta}
          onCtaClick={handleDashboardRoute}
          imageLeft={true}
          image={
            <Image
              src="/images/dashboard-mobile.png"
              alt="Mobile dashboard"
              width={340}
              height={480}
              className="object-contain drop-shadow-2xl"
            />
          }
        >
          <CheckboxDisplay items={experience.checkboxes} dark />
        </DynamicSection>
      </div>
      <BenefitsGrid
        ids={[
          "simplified-payments",
          "secure-transactions",
          "real-time-insights",
        ]}
      />
      <DynamicSection
        isCard
        subtitle="Try Us Risk-Free"
        title="Experience Zero Fees on Your First Transaction"
        description="It's our way of showing you how seamless and cost-effective our payment solution can be. No hidden fees, just a straightforward and risk-free introduction to our platform."
        cta="Start Your Free Trial"
        backgroundColor="bg-background-dark"
        image={
          <Image
            src="/images/dollar.png"
            alt="Money arch between phones"
            width={500}
            height={350}
            className="object-contain drop-shadow-2xl"
          />
        }
        imageLeft={false}
        extraContent={
          <a
            href="#"
            className="text-primary underline underline-offset-2 hover:text-primary/80 text-sm"
          >
            Click this link to download now
          </a>
        }
      />
      <div id="payment">
        <DynamicSection
          backgroundColor="bg-background-light"
          subtitle={whyPayments.subtitle}
          title={whyPayments.title}
          description={whyPayments.description}
          cta={whyPayments.cta}
          onCtaClick={handleDashboardRoute}
          imageLeft={false}
          image={
            <Image
              src="/images/card.png"
              alt="Payment card"
              width={480}
              height={360}
              className="object-contain drop-shadow-2xl"
            />
          }
        >
          <CheckboxDisplay items={whyPayments.checkboxes} />
        </DynamicSection>
      </div>

      <div id="faq">
        <FaqSection />
      </div>
      <BenefitsGrid
        ids={["fast-setup", "easy-management", "flexible-integration"]}
        buttonText="Explore all Features"
      />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
