import BenefitsCard from "../shared/BenefitsCard";
import BenefitsGrid from "../shared/BenefitsGrid";
import { CustomSection } from "../shared/CustomSection";
const { whyUs } = require("../../content").sections;

export default function WhyUsSection() {
  return (
    <CustomSection
      subtitle={whyUs.subtitle}
      title={whyUs.title}
      description={whyUs.description}
      action={{ text: whyUs.cta }}
    >
      <BenefitsGrid
        ids={[
          "comprehensive-security",
          "user-friendly-interface",
          "real-time-insights",
        ]}
      />
    </CustomSection>
  );
}
