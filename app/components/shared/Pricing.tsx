import CustomButton from "./CustomButton";
import CheckboxDisplay from "./CheckboxDisplay";
import { pricing } from "@/app/content";

export type pringingIds = "Silver" | "Gold" | "Platinum";

export default function PricingCard({
  id,
  isHighlighted = false,
  onCtaClick,
}: {
  id: pringingIds;
  isHighlighted?: boolean;
  onCtaClick?: () => void;
}) {
  const product = pricing.products.find((p) => p.name === id);
  const enabled = pricing.features.map((_, idx) =>
    product?.features.includes(idx) ? 1 : 0,
  );
  return (
    <div
      className={`flex flex-col w-full justify-start text-start gap-4 p-6 rounded-lg shadow-md ${
        isHighlighted ? "bg-primary/40" : "bg-white text-text-dark"
      }`}
    >
      <div className="text-xl font-semibold">{product?.name}</div>
      <div className="text-5xl font-bold flex flex-row items-baseline gap-2">
        ${product?.price} <div className="text-lg opacity-40">/month</div>{" "}
      </div>
      <div className="text-lg font-semibold">Features: </div>
      <CheckboxDisplay items={pricing.features} enabled={enabled} isSmall />
      <CustomButton text={pricing.buttonText} fullWidth onClick={onCtaClick} />
    </div>
  );
}
