import CustomButton from "./CustomButton";

interface CustomSectionProps {
  subtitle: string;
  title: string;
  description: string;
  action: {
    text: string;
    onClick: () => void;
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
      <div className="max-w-5xl flex flex-col gap-6">
        <h4 className="underline decoration-primary decoration-3">
          {subtitle}
        </h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <CustomButton
          text={action.text}
          onClick={action.onClick}
          hasArrowIcon
        />
        {children}
      </div>
    </section>
  );
}
