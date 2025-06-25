"use client";

import HeroSection from "@/components/Homepage/HeroSection";
import HowItWorks  from "@/components/Homepage/HowItForks";
import Features    from "@/components/Homepage/Features";
import FeaturedBlogs from "@/components/Homepage/FeaturedBlogs";
import FaqHomePage from "@/components/Homepage/Faq";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Features />
      <FeaturedBlogs count={3} />
      <FaqHomePage />
    </div>
  );
}
