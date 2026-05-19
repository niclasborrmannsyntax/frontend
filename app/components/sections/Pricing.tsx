import { CustomSection } from "../shared/CustomSection";
import PricingCard from "../shared/Pricing";
const { pricing } = require("../../content").sections;

export default function PricingSection() {
  return (
    <CustomSection
      subtitle={pricing.subtitle}
      title={pricing.title}
      description={pricing.description}
    >
      <div className="flex flex-row justify-center gap-4">
        <PricingCard id="Silver" />
        <PricingCard id="Gold" />
        <PricingCard id="Platinum" />
      </div>
    </CustomSection>
  );
}
