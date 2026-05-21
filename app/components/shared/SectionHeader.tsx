interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
  textAlign?: "left" | "center" | "right";
  children?: React.ReactNode;
  maxWidth?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  textAlign = "left",
  children,
  maxWidth = "max-w-4xl",
}: SectionHeaderProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center justify-center items-center",
    right: "text-right",
  }[textAlign];

  return (
    <div className={`flex flex-col gap-6 ${alignmentClass}`}>
      <h4 className="underline decoration-primary decoration-3">{subtitle}</h4>
      <h2>{title}</h2>
      <p className={maxWidth}>{description}</p>
      {children}
    </div>
  );
}
