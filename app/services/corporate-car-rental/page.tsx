import Schema from "@/components/Schema";
import CorporateCarRentalClient from "./CorporateCarRentalClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Corporate Car Rental Services in India | RNK Rentals",

  description:
    "RNK provides premium corporate chauffeur-driven car rental services across India for executives, teams, clients and VIP movements. Trusted since 1969.",

  keywords: [
    "corporate car rental india",
    "corporate chauffeur driven car rental",
    "business car rental services",
    "executive car rental india",
    "corporate mobility solutions",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/corporate-car-rental",
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
    url: "https://www.rnk.com/services/corporate-car-rental",
    title: "Corporate Car Rental Services in India | RNK",
    description:
      "Premium chauffeur-driven corporate car rental services across India for executives, clients, VIP movements and long-term contracts.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-corporate-car-rental-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Corporate Car Rental Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Corporate Car Rental Services | RNK Chauffeur-Driven Mobility",
    description:
      "Executive-grade chauffeur-driven corporate car rental services across India. Reliable, punctual and professionally managed by RNK.",
    images: [
      "https://www.rnk.com/assets/images/rnk-corporate-car-rental-og.jpg",
    ],
  },
};


const CorporateCaeRentalSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/corporate-car-rental/#webpage",
      "url": "https://www.rnk.com/services/corporate-car-rental",
      "name": "Corporate Car Rental Services | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/corporate-car-rental/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/corporate-car-rental/#service",
      "name": "Corporate Car Rental Services",
      "serviceType": "Chauffeur-Driven Corporate Mobility",
      "description": "Premium chauffeur-driven corporate car rental services designed for executives, teams, clients and VIP movements. RNK delivers punctual, discreet and professionally managed corporate mobility across India.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Corporates, Enterprises and Executives"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Corporate Mobility Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Executive Office Commute"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Client Pick-ups and Drop-offs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport and Railway Transfers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Meetings and Site Visits"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP and Delegation Movements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Long-Term Corporate Contracts"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/corporate-car-rental/#breadcrumb",
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
          "name": "Corporate Car Rental",
          "item": "https://www.rnk.com/services/corporate-car-rental"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/corporate-car-rental/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is corporate car rental better than cabs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Corporate car rental provides predictable, chauffeur-driven premium service with trained drivers, no wait times and higher reliability than standard cab services."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer monthly corporate contracts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK Rentals offers long-term and monthly corporate rental contracts customised to organisational travel requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Is GST billing supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. GST-compliant invoicing is provided for all corporate car rental services."
          }
        },
        {
          "@type": "Question",
          "name": "Are chauffeurs trained for VIP movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK chauffeurs are professionally trained for executive and VIP movements, ensuring discretion, safety and punctuality."
          }
        }
      ]
    }

  ]
}


export default function Page() {
  return <><Schema data={CorporateCaeRentalSchema} /><CorporateCarRentalClient /></>;
}
