"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Why Us", id: "why-us" },
    { label: "Pricing", id: "pricing" },
    { label: "Payment", id: "payment" },
    { label: "Experience", id: "experience" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="SecureSend"
            width={32}
            height={32}
            className="brightness-100"
          />
          <span className="text-xl font-bold text-primary hidden sm:inline">
            SecureSend
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <CustomButton
          text="Dashboard"
          onClick={() => router.push("/dashboard")}
        />
      </div>
    </header>
  );
}
