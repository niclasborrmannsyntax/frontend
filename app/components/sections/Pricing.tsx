import { CustomSection } from "../shared/CustomSection";
import PricingCard from "../shared/Pricing";
const { pricing } = require("../../content").sections;

export default function PricingSection({
  onCtaClick,
}: {
  onCtaClick?: () => void;
}) {
  return (
    <CustomSection
      subtitle={pricing.subtitle}
      title={pricing.title}
      description={pricing.description}
    >
      <div className="flex flex-row justify-center gap-4">
        <PricingCard id="Silver" onCtaClick={onCtaClick} />
        <PricingCard id="Gold" isHighlighted onCtaClick={onCtaClick} />
        <PricingCard id="Platinum" onCtaClick={onCtaClick} />
      </div>
    </CustomSection>
  );
}
