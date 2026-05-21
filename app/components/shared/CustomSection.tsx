import CustomButton from "./CustomButton";
import SectionHeader from "./SectionHeader";

interface CustomSectionProps {
  subtitle: string;
  title: string;
  description: string;
  action?: {
    text: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
  className?: string;
}

export function CustomSection({
  subtitle,
  title,
  description,
  action,
  className,
  children,
}: CustomSectionProps) {
  return (
    <section
      className={`flex flex-col items-center text-text-dark text-center gap-6 py-16 px-8 bg-white ${className}`}
    >
      <div className="max-w-7xl flex flex-col gap-6">
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          textAlign="center"
        />
        <div className="flex flex-col gap-6 pb-4">
          {action && (
            <div className="flex justify-center">
              <CustomButton
                text={action.text}
                onClick={action.onClick}
                hasArrowIcon
              />
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
