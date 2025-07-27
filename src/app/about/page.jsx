import AboutSection from "@/app/about/About/AboutSection";
import ChooseUsSection from "@/app/about/About/ChooseUsSection";
import StatsSection from "@/app/about/About/StatsSection";
import TeamSection from "@/app/about/About/TeamSection";

export default function AboutPage() {
  return <div  >
    <AboutSection/>
    <TeamSection/>
    <StatsSection/>
    <ChooseUsSection/>
  </div>;
}
