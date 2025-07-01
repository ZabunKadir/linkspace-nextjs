import AboutSection from "@/components/About/AboutSection";
import ChooseUsSection from "@/components/About/ChooseUsSection";
import StatsSection from "@/components/About/StatsSection";
import TeamSection from "@/components/About/TeamSection";

export default function AboutPage() {
  return <div className="py-20 ">
    <AboutSection/>
    <TeamSection/>
    <StatsSection/>
    <ChooseUsSection/>
  </div>;
}
