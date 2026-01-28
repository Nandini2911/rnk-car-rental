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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",

  description:
    "RNK Rentals offers luxury chauffeur-driven car rental services across 170+ cities in India. Trusted since 1969 for corporate travel, airport transfers, VIP movements, and weddings.",

  keywords: [
    "luxury car rental india",
    "chauffeur driven car rental",
    "corporate car rental india",
    "airport transfer service india",
    "wedding car rental india",
    "vip car rental service"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://rnk.com/",
  },

  openGraph: {
    title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",
    description:
      "Premium chauffeur-driven car rental across India for corporate travel, airport transfers, VIP movements and weddings. Serving 170+ cities since 1969.",
    url: "https://rnk.com/",
    siteName: "RNK - RAMNIRANJAN KEDIA RENT A CAR PRIVATE LIMITED",
    images: [
      {
        url: "https://rnk.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Rentals Luxury Chauffeur Driven Car Fleet",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",
    description:
      "Premium chauffeur-driven luxury car rental across India. Trusted since 1969 for corporate, airport, VIP and wedding travel.",
    images: ["https://rnk.com/og-image.jpg"],
  },
};

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