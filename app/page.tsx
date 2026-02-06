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
import Schema from "@/components/Schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rnk.com"),

  title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",
  description:
    "RNK Rentals offers luxury chauffeur-driven car rental services across 170+ cities in India. Trusted since 1969 for corporate travel, airport transfers, VIP movements, and weddings.",

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
        url: "https://rnk.com/og-home-page.webp",
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
    images: ["https://rnk.com/twitter-home-page.webp"],
  },
};

const homeSchema=
{

  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.rnk.com/#organization",
      "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd",
      "alternateName": "RNK Rentals",
      "url": "https://www.rnk.com/",
      "email": "info@rnk.com",
      "foundingDate": "1969",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.rnk.com/#logo",
        "url": "https://www.rnk.com/RNK_LOGO.jpg",
        "width": 600,
        "height": 200
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-22-43227777",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
          "email": "info@rnk.com"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/rnk-rentals",
        "https://www.instagram.com/rnkrentals"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rnk.com/#website",
      "url": "https://www.rnk.com/",
      "name": "RNK Rentals",
      "publisher": {
        "@id": "https://www.rnk.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/#webpage",
      "url": "https://www.rnk.com/",
      "name": "RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "primaryImageOfPage": {
        "@id": "https://www.rnk.com/#logo"
      }
    },
    {
      "@type": ["LocalBusiness", "AutoRental"],
      "@id": "https://www.rnk.com/#localbusiness",
      "name": "RNK Rentals",
      "url": "https://www.rnk.com/",
      "telephone": "+91-22-43227777",
      "priceRange": "₹₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
        "addressLocality": "Mumbai",
        "postalCode": "400025",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "parentOrganization": {
        "@id": "https://www.rnk.com/#organization"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.rnk.com/#chauffeur-service",
      "name": "Chauffeur Driven Luxury Car Rental",
      "description": "Premium chauffeur-driven luxury car rental services across 170+ cities in India since 1969.",
      "provider": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "mainEntityOfPage": {
        "@id": "https://www.rnk.com/#webpage"
      },
      "serviceType": [
        "Luxury Car Rental",
        "Corporate Car Rental",
        "Wedding Transportation",
        "Airport Transfers",
        "Hotel Operations",
        "Vacation Rentals",
        "VIP Movements",
        "Long Term Car Rental",
        "Event / Wedding Transport"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide luxury car rentals across India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK provides chauffeur-driven luxury car rental services across 170+ cities in India."
          }
        },
        {
          "@type": "Question",
          "name": "Are your cars chauffeur driven?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All RNK vehicles are chauffeur-driven, ensuring safety, professionalism, and comfort."
          }
        }
      ]
    }
  ]
}



export default function HomePage() {
  return (
    <>
     <Schema data={homeSchema} />
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