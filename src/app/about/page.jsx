import AboutSection from "@/components/About/AboutSection";
import ChooseUsSection from "@/components/About/ChooseUsSection";
import StatsSection from "@/components/About/StatsSection";

export default function AboutPage() {
  return <div className="py-20 ">
    <AboutSection/>
    <StatsSection/>
    <ChooseUsSection/>
  </div>;
}
