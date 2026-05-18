"use client";
import { useRouter } from "next/navigation";
import { CustomSection } from "./shared/CustomSection";
const { whyUs } = require("../content").sections;

export default function WhyUsSection() {
  const router = useRouter();
  return (
    <CustomSection
      subtitle={whyUs.subtitle}
      title={whyUs.title}
      description={whyUs.description}
      action={{
        text: whyUs.cta,
        onClick: () => router.push("/auth"),
      }}
    >
      {/* Additional content can be added here */}
      
    </CustomSection>
  );
}
