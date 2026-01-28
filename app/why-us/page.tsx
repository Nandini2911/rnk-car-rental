import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";
import { HeroSection } from "@/components/why-us/HeroSection";
import { StatsStrip } from "@/components/why-us/StatsStrip";
import { JourneysSection } from "@/components/why-us/JourneysSection";
import { CoreAdvantages } from "@/components/why-us/CoreAdvantages";
import { WhyChooseRNK } from "@/components/why-us/WhyChooseRnk";
import { CustomerTestimonials } from "@/components/why-us/CustomerTestimonials";
import { FAQSection } from "@/components/why-us/FaqSection";
import { ContactUs } from "@/components/why-us/ContactUs";

export const metadata = {
  title: "Why Choose RNK Rentals | Trusted Luxury Car Rental Since 1969",
  description:
    "Discover why RNK Rentals is trusted for luxury chauffeur-driven car rental across India. 56+ years of experience, premium fleet and nationwide reliability.",
  keywords: [
    "why choose rnk rentals",
    "luxury car rental india",
    "chauffeur driven car rental",
    "premium car rental services",
    "trusted car rental company india",
  ],
  alternates: {
    canonical: "https://www.rnk.com/why-us",
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
    url: "https://www.rnk.com/why-us",
    title: "Why Choose RNK Rentals | Luxury Chauffeur Services in India",
    description:
      "Luxury, reliability and seamless chauffeur-driven travel across India. Discover what makes RNK Rentals the trusted choice since 1969.",
    siteName: "RNK - Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-why-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Luxury Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose RNK Rentals | Luxury Chauffeur-Driven Travel",
    description:
      "56+ years of experience delivering premium chauffeur-driven car rental services across India for corporate, VIP and luxury journeys.",
    images: ["https://www.rnk.com/assets/images/rnk-why-us-og.jpg"],
  },
};

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
