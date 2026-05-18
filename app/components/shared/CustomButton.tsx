type buttonVariants = "primary" | "outline";

interface CustomButtonProps {
  variant?: buttonVariants;
  text: string;
  hasArrowIcon?: boolean;
  onClick?: () => void;
}

export default function CustomButton({
  variant = "primary",
  text,
  hasArrowIcon,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer mx-auto ${
        variant === "primary"
          ? "bg-primary  hover:bg-primary/90 text-text-dark"
          : "border border-primary text-primary hover:bg-primary/10"
      }`}
      onClick={onClick}
    >
      {text}
      {hasArrowIcon && <span className="ml-2">→</span>}
    </button>
  );
}
