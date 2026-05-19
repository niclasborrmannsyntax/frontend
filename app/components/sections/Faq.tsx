import { CustomSection } from "../shared/CustomSection";
const { faq } = require("../../content").sections;

export default function FaqSection() {
  return (
    <CustomSection
      subtitle={faq.subtitle}
      title={faq.title}
      description={faq.description}
    >
      {/* Additional content can be added here */}
    </CustomSection>
  );
}
