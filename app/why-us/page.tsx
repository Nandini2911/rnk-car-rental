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
import Schema from "@/components/Schema";

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
        url: "/og-why-us.jpg",
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
    images: ["/twitter-why-us.jpg"],
  },
};



const whyUsSchema ={
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
        "url": "https://www.rnk.com/RNK_LOGO.jpg"
      },
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
      "@id": "https://www.rnk.com/why-us/#webpage",
      "url": "https://www.rnk.com/why-us",
      "name": "Why Choose RNK Rentals?",
      "description": "Discover why RNK Rentals is the preferred choice for luxury chauffeur-driven car rentals across India, with over 56 years of experience, premium fleet, and 24/7 support.",
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
      "@type": "LocalBusiness",
      "@id": "https://www.rnk.com/#localbusiness",
      "name": "RNK Rentals",
      "url": "https://www.rnk.com/",
      "telephone": "+91-22-43227777",
      "priceRange": "\u20b9\u20b9\u20b9\u20b9",
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
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "3"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.rnk.com/#chauffeur-service",
      "name": "Chauffeur Driven Luxury Car Rental",
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
        "Vacation Rentals",
        "VIP Movements",
        "Long Term Car Rental",
        "Event / Wedding Transport"
      ]
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Corporate Executive, Mumbai"
      },
      "reviewBody": "RNK Rentals made our business trip effortless. The vehicle was spotless, the chauffeur was professional, and everything was on time!"
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Bride, Delhi"
      },
      "reviewBody": "The luxury service RNK provided for our wedding was extraordinary. Every detail was perfect, from the bridal entry to the family transport."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Event Manager, Bengaluru"
      },
      "reviewBody": "We\u2019ve always relied on RNK for our corporate events. Their attention to detail and customer service is impeccable."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/why-us/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of cars do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RNK Rentals offers an extensive luxury fleet including Mercedes, BMW, Audi, SUVs, sedans, Innovas, and coaches to suit various occasions."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a vehicle by sharing your requirements, receiving a curated fleet and quotation, confirming and scheduling, and then enjoying smooth on-ground execution. You can start by clicking 'Book Now' or 'Get a Quote' on our website."
          }
        },
        {
          "@type": "Question",
          "name": "What cities do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RNK Rentals operates across 170+ cities Pan India, delivering consistent service wherever your journey takes you."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide chauffeur services for VIP clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK specializes in chauffeur-driven services for VIP movements, corporate executives, celebrities, and families, ensuring professionalism, punctuality, and trust."
          }
        }
      ]
    }
  ]
}

export default function WhyUsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
        <Schema data={whyUsSchema} />
        
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
