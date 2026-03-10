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



export const metadata = {
  title: "Luxury Chauffeur-Driven Car Rental in India | RNK Rentals Since 1969",
  description:
    "RNK Rentals offers chauffeur-driven luxury car rental services across 170+ cities in India for corporate travel, airport transfers, VIP movements, weddings, events, and long-term rentals.",
  keywords: [
    "luxury car rental india",
    "chauffeur driven car rental india",
    "rnk rentals",
    "ramniranjan kedia rent a car",
    "corporate car rental india",
    "airport transfer service india",
    "wedding car rental india",
    "vip movement transport india",
    "long term car rental india",
    "luxury chauffeur service india",
  ],
  alternates: {
    canonical: "https://www.rnk.com/",
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
    url: "https://www.rnk.com/",
    title: "RNK Rentals | Drive Luxury, Not Just a Car",
    description:
      "Premium chauffeur-driven car rental services across India since 1969. RNK Rentals serves corporate travel, airport transfers, weddings, VIP movements, luxury travel, and long-term rentals.",
    siteName: "RNK Rentals",
    locale: "en_IN",
    images: [
      {
        url: "/og-home-page.webp",
        width: 1200,
        height: 630,
        alt: "RNK Rentals Luxury Chauffeur Driven Car Rental in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RNK Rentals | Luxury Chauffeur-Driven Car Rental Across India",
    description:
      "Luxury chauffeur-driven car rental across 170+ cities in India since 1969. Book premium travel for business, airport transfers, weddings, and VIP movements.",
    images: ["/twitter-home-page.webp"],
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
      "sameAs": [
        "https://www.linkedin.com/company/rnk-rentals",
        "https://www.instagram.com/rnkrentals"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9167977799",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["English","Hindi"]
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://www.rnk.com/#website",
      "url": "https://www.rnk.com/",
      "name": "RNK Rentals",
      "publisher": {
        "@id": "https://www.rnk.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.rnk.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/#webpage",
      "url": "https://www.rnk.com/",
      "name": "Luxury Chauffeur Driven Car Rental in India | RNK Rentals",
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
      "@type": ["LocalBusiness","AutoRental"],
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
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/#service",
      "name": "Chauffeur Driven Luxury Car Rental",
      "description": "Premium chauffeur-driven luxury car rental services across 170+ cities in India since 1969.",
      "provider": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": [
        "Luxury Car Rental",
        "Corporate Car Rental",
        "Wedding Transportation",
        "Airport Transfers",
        "Hotel Operations",
        "VIP Movements",
        "Long Term Car Rental",
        "Event Transportation"
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.rnk.com/"
        }
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
            "text": "All RNK vehicles are chauffeur-driven, ensuring safety, professionalism and comfort."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer corporate car rental services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK offers premium corporate transportation services for executives, events and business travel."
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