
import { Metadata } from "next";
import LuxuryTravelPage from "./LuxuryTravelClient";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title:
    "Luxury Travel Services in India | RNK Rentals",

  description:
    "RNK offers premium chauffeur-driven luxury travel services across India for holidays, weekend getaways, celebrations and personalised long-distance journeys.",

  keywords: [
    "luxury travel services india",
    "chauffeur driven luxury travel",
    "luxury car travel india",
    "premium chauffeur driven journeys",
    "luxury outstation car rental india",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/luxury-travel",
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
    url: "https://www.rnk.com/services/luxury-travel",
    title: "Luxury Travel Services in India | RNK",
    description:
      "Premium chauffeur-driven luxury travel experiences across India for holidays, weekend escapes, celebrations and personalised journeys.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-luxury-travel-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Luxury Chauffeur-Driven Travel Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel Services | RNK Chauffeur-Driven Journeys",
    description:
      "Experience premium chauffeur-driven luxury travel across India with personalised routes, comfort-first vehicles and 24/7 support.",
    images: [
      "https://www.rnk.com/assets/images/rnk-luxury-travel-og.jpg",
    ],
  },
};


const LuxuryTravelSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/luxury-travel/#webpage",
      "url": "https://www.rnk.com/services/luxury-travel",
      "name": "Luxury Travel Services | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/luxury-travel/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/luxury-travel/#service",
      "name": "Luxury Travel Services",
      "serviceType": "Premium Chauffeur-Driven Luxury Travel",
      "description": "Premium chauffeur-driven luxury travel services designed for holidays, weekend getaways, celebrations and personalised long-distance journeys. RNK curates refined travel experiences focused on comfort, privacy and elegance across India.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "Audience",
        "name": "Leisure Travellers, Families, Couples and VIP Guests"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Luxury Travel Experiences",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Weekend Getaways"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Long-Distance Luxury Journeys"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Romantic Scenic Drives"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Holiday Tours"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Outstation Travel"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP and Celebrity Travel Movements"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/luxury-travel/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.rnk.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.rnk.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Luxury Travel",
          "item": "https://www.rnk.com/services/luxury-travel"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/luxury-travel/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I customise my travel route?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK offers personalised itineraries, scenic routes and custom stopovers tailored to your luxury travel preferences."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide luxury cars for long-distance travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK provides premium chauffeur-driven sedans, SUVs and luxury vehicles designed for comfortable and refined long-distance journeys."
          }
        },
        {
          "@type": "Question",
          "name": "Are chauffeurs trained for premium travel experiences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK chauffeurs are professionally trained in etiquette, safety, privacy and long-distance travel protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book luxury travel for weekend getaways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK offers luxury travel services for weekend getaways, holidays and short premium escapes."
          }
        }
      ]
    }

  ]
}


export default function Page() {
  return  <><Schema data={LuxuryTravelSchema} /> <LuxuryTravelPage/></>;
}
