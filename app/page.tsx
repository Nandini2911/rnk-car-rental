import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { USPSection } from "@/components/home/USPSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CustomerReviewsSection } from "@/components/home/CustomerReviewsSection";
import { ExperienceStrip } from "@/components/home/ExperienceStrip";


export default function HomePage() {
  return (
    <>
      <NavBar/>
      <Hero />
      <IntroSection />
      <ServicesSection /> 
      <HowItWorksSection />
      <USPSection />
      <WhyUsSection />
      <StatsSection />
      <CustomerReviewsSection />
      <ExperienceStrip />
      <RnkFooter />
      {/* Other sections: Why Us, Services, Fleet, etc. */}
    </>
  );
}