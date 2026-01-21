"use client";


import { NavBar } from "@/components/NavBar";
import { WhyUs } from "../../components/WhyUs";
import { RnkFooter } from "@/components/footer";
import { HeroSection } from "@/components/why-us/HeroSection";
import { StatsStrip } from "@/components/why-us/StatsStrip";
import { JourneysSection } from "@/components/why-us/JourneysSection";
import { CoreAdvantages } from "@/components/why-us/CoreAdvantages";
import { WhyChooseRNK } from "@/components/why-us/WhyChooseRnk";
import { CustomerTestimonials } from "@/components/why-us/CustomerTestimonials";
import { FAQSection } from "@/components/why-us/FaqSection";
import { ContactUs } from "@/components/why-us/ContactUs";

export default function WhyUsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar/>
      <HeroSection/>
      <WhyChooseRNK/>
      <CoreAdvantages/>
      <StatsStrip/>
      <JourneysSection/>
        <CustomerTestimonials/>
        <FAQSection/>
        <ContactUs/>
      <RnkFooter />
    </main>
  );
}
