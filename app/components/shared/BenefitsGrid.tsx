import BenefitsCard, { benefitsIds } from "./BenefitsCard";
import CustomButton from "./CustomButton";

export default function BenefitsGrid({
  ids,
  buttonText,
}: {
  ids: benefitsIds[];
  buttonText?: string;
}) {
  return (
    <div className="flex flex-col bg-white text-text-dark gap-8 max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-row justify-center gap-4">
        {ids.map((id) => (
          <BenefitsCard key={id} id={id} />
        ))}
      </div>
      {buttonText && (
        <div className="flex justify-center">
          <CustomButton text={buttonText} hasArrowIcon />
        </div>
      )}
    </div>
  );
}
