
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

export const metadata = {
  title: "About Ramniranjan Kedia Rent A Car Pvt. Ltd | Luxury Travel Since 1969",
  description:
    "Learn about Ramniranjan Kedia Rent A Car Pvt. Ltd, a trusted luxury chauffeur-driven car rental company since 1969, operating across 170+ cities in India.",
  keywords: [
    "ramniranjan kedia rent a car",
    "rnk rentals history",
    "luxury car rental company india",
    "chauffeur driven car rental since 1969",
    "trusted car rental india",
  ],
  alternates: {
    canonical: "https://www.rnk.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.rnk.com/about",
    title: "About Ramniranjan Kedia Rent A Car Pvt. Ltd",
    description:
      "Founded in 1969, Ramniranjan Kedia Rent A Car Pvt. Ltd delivers trusted luxury chauffeur-driven car rental services across India.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-about-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Legacy Since 1969",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ramniranjan Kedia Rent A Car Pvt. Ltd",
    description:
      "A legacy of luxury chauffeur-driven travel since 1969. Discover the journey of RNK Rentals.",
    images: ["https://www.rnk.com/assets/images/rnk-about-og.jpg"],
  },
};

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
