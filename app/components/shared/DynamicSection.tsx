import CustomButton from "./CustomButton";
import SectionHeader from "./SectionHeader";

interface DynamicSectionProps {
  backgroundColor?: string;
  isCard?: boolean;
  subtitle: string;
  title: string;
  description: string;
  cta: string;
  onCtaClick?: () => void;
  children?: React.ReactNode;
  image?: React.ReactNode;
  imageLeft?: boolean;
  extraContent?: React.ReactNode; // for e.g. a link below description
}

export default function DynamicSection({
  backgroundColor = "bg-white",
  isCard = false,
  subtitle,
  title,
  description,
  cta,
  onCtaClick,
  children,
  image,
  imageLeft = false,
  extraContent,
}: DynamicSectionProps) {
  const isDark = backgroundColor.includes("dark");
  const textColor = isDark ? "text-text-light" : "text-text-dark";

  if (isCard) {
    return (
      <section className="w-full py-12 px-2">
        <div
          className={`max-w-6xl mx-auto flex flex-row items-center gap-8 rounded-2xl ${backgroundColor} p-8 shadow-2xl`}
        >
          {imageLeft && image && (
            <div className="flex-1 flex items-center justify-center">
              {image}
            </div>
          )}
          <div className="flex-1 flex flex-col gap-6 text-left justify-center">
            <SectionHeader
              subtitle={subtitle}
              title={title}
              description={description}
              textAlign="left"
            />
            <div className="flex flex-col gap-4 pb-4">
              {children}
              {extraContent}
              <div className="flex justify-start mt-2">
                <CustomButton text={cta} onClick={onCtaClick} hasArrowIcon />
              </div>
            </div>
          </div>
          {!imageLeft && image && (
            <div className="flex-1 flex items-center justify-center">
              {image}
            </div>
          )}
        </div>
      </section>
    );
  }

  const textBlock = (
    <div className={`flex flex-col gap-6 flex-1 justify-center ${textColor}`}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        textAlign="left"
      />
      {children}
      <div className="flex justify-start">
        <CustomButton text={cta} onClick={onCtaClick} hasArrowIcon />
      </div>
    </div>
  );

  const imageBlock = image ? (
    <div
      className={`flex-1 flex items-center justify-center ${
        isCard ? "bg-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm" : ""
      }`}
    >
      {image}
    </div>
  ) : null;

  const content = (
    <div className="max-w-7xl mx-auto flex flex-row items-center gap-16 py-16 px-8">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );

  return <section className={`${backgroundColor}`}>{content}</section>;
}
