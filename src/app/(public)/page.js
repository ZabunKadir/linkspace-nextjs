"use client";

import HeroSection from "@/app/(public)/Homepage/HeroSection";
import HowItWorks from "@/app/(public)/Homepage/HowItForks";
import Features from "@/app/(public)/Homepage/Features";
import FeaturedBlogs from "@/app/(public)/Homepage/FeaturedBlogs";
import FaqHomePage from "@/app/(public)/Homepage/Faq";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Features />
      <FeaturedBlogs />
      <FaqHomePage />
    </div>
  );
}
