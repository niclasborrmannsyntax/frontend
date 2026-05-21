"use client";
import { useRouter } from "next/navigation";

type buttonVariants = "primary" | "outline";
type buttonActionType = "sales" | "auth";

interface CustomButtonProps {
  variant?: buttonVariants;
  text: string;
  fullWidth?: boolean;
  hasArrowIcon?: boolean;
  onClick?: () => void;
}

export default function CustomButton({
  variant = "primary",
  text,
  hasArrowIcon,
  fullWidth = false,
  onClick,
}: CustomButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push("/auth");
    }
  };

  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer ${
        fullWidth ? "w-full" : ""
      } ${
        variant === "primary"
          ? "bg-primary hover:bg-primary/90 text-text-dark"
          : "border border-primary text-primary hover:bg-primary/10"
      }`}
      onClick={handleClick}
    >
      {text}
      {hasArrowIcon && <span className="ml-2">→</span>}
    </button>
  );
}
