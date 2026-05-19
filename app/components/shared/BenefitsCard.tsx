import Image from "next/image";
import CustomButton from "./CustomButton";

export type benefitsIds =
  | "comprehensive-security"
  | "user-friendly-interface"
  | "real-time-insights"
  | "simplified-payments"
  | "secure-transactions"
  | "fast-setup"
  | "easy-management"
  | "flexible-integration";

export default function BenefitsCard({ id }: { id: benefitsIds }) {
  const logoCards = require("../../content").logoCards;
  const card = logoCards.find((card: any) => card.id === id);

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-sm text-center gap-2">
      <div className="rounded-full bg-secondary p-4 w-24 h-24 flex items-center justify-center mb-4">
        <Image
          src={`/icons/${id}-icon.png`}
          alt={`${card.title} icon`}
          width={64}
          height={64}
        />
      </div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}
