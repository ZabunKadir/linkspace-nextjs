"use client";

import FaqHomePage from "@/components/Homepage/Faq";
import Features from "@/components/Homepage/Features";
import HeroSection from "@/components/Homepage/HeroSection";
import HowItWorks from "@/components/Homepage/HowItForks";

export default function HomePage({}) {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Features />
      <FaqHomePage />
    </div>
  );
}
