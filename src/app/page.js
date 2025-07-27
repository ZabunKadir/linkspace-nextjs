"use client";

import HeroSection from "@/app/Homepage/HeroSection";
import HowItWorks from "@/app/Homepage/HowItForks";
import Features from "@/app/Homepage/Features";
import FeaturedBlogs from "@/app/Homepage/FeaturedBlogs";
import FaqHomePage from "@/app/Homepage/Faq";

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
