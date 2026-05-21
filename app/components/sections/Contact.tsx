"use client";

import { useState } from "react";
import Image from "next/image";
import DynamicSection from "../shared/DynamicSection";
import { sections } from "@/app/content";

export default function ContactSection() {
  const { contact } = sections;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <DynamicSection
      isCard
      backgroundColor="bg-background-dark"
      subtitle={contact.subtitle}
      title={contact.title}
      description={contact.description}
      cta={contact.cta}
      imageLeft={false}
      image={
        <Image
          src="/images/contact.png"
          alt="Contact us"
          width={400}
          height={500}
          className="object-cover rounded-2xl"
        />
      }
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-text-light"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="John Carter"
            className="w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-base text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-text-light"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="example@email.com"
            className="w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-base text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-text-light"
          >
            Phone
          </label>
          <input
            id="phone"
            type="text"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="(123) 456 - 789"
            className="w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-base text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-sm font-semibold text-text-light"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Facebook"
            className="w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-base text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-text-light"
          >
            Leave us message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Please type your message here..."
            className="w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-base text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 min-h-32 resize-none"
          />
        </div>
      </form>
    </DynamicSection>
  );
}
