
import { AccoladesSection } from "@/components/About/AccoladesSection";
import { AccomplishmentsSection } from "@/components/About/AccomplishmentsSection";
import { CallToAction } from "@/components/About/CallToAction";
import { ExperienceBlockSection } from "@/components/About/ExperienceBlockSection";
import { FAQSection } from "@/components/About/FAQSection";
import { HeritageSection } from "@/components/About/HeritageSection";
import { HeroSection } from "@/components/About/HeroSection";
import { TestimonialsSection } from "@/components/About/TestimonialsSection";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar/>
      <HeroSection />
      <HeritageSection />
      <AccomplishmentsSection/>
      <AccoladesSection />
      <TestimonialsSection/>
      <CallToAction/>
      <FAQSection/>
      <RnkFooter />
    </main>
  );
}
