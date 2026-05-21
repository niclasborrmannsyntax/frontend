"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Pricing", id: "pricing" },
        { label: "Features", id: "experience" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", id: "why-us" },
        { label: "Contact", id: "contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", id: "contact" },
        { label: "Terms", id: "contact" },
      ],
    },
  ];

  return (
    <footer className="bg-background-dark text-text-light py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="SecureSend" width={32} height={32} />
              <h3 className="text-xl font-bold text-primary">SecureSend</h3>
            </div>
            <p className="text-text-light/70 text-sm">
              Effortless global payments, secured and streamlined.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-text-light/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-text-light/10 pt-8 flex items-center justify-between">
          <p className="text-text-light/70 text-sm">
            © 2026 SecureSend. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-text-light/70 hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-text-light/70 hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="text-text-light/70 hover:text-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
