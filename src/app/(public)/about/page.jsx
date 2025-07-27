import AboutSection from "@/app/(public)/about/About/AboutSection";
import ChooseUsSection from "@/app/(public)/about/About/ChooseUsSection";
import StatsSection from "@/app/(public)/about/About/StatsSection";
import TeamSection from "@/app/(public)/about/About/TeamSection";

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <TeamSection />
      <StatsSection />
      <ChooseUsSection />
    </div>
  );
}
