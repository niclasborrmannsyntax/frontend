import CustomButton from "./CustomButton";
import { pricing } from "@/app/content";

export type pringingIds = "Silver" | "Gold" | "Platinum";

export default function PricingCard({ id }: { id: pringingIds }) {
  const product = pricing.products.find((p) => p.name === id);
  return (
    <div className="flex flex-col justify-start text-start bg-white text-text-dark gap-4 p-6 rounded-lg shadow-md">
      <div className="text-xl font-semibold">{product?.name}</div>
      <div className="text-5xl font-bold flex flex-row items-baseline gap-2">
        ${product?.price} <div className="text-lg opacity-40">/month</div>{" "}
      </div>
      <div className="text-lg font-semibold">Features: </div>
      {/* List of features */}
      <CustomButton text={pricing.buttonText} fullWidth />
    </div>
  );
}
