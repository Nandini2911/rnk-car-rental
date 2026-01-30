import Schema from "@/components/Schema";
import HotelOperationsPage from "./HotelOperationclient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hotel Mobility & Transport Services in India | RNK Rentals",

  description:
    "RNK provides integrated chauffeur-driven hotel operations mobility services across India for hotels, resorts and serviced residences, covering guests, staff and VIP movements.",

  keywords: [
    "hotel operations transport services",
    "hotel chauffeur driven car rental",
    "hotel guest transfer services india",
    "hospitality mobility solutions",
    "hotel airport transfer services",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/hotel-operations",
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
    url: "https://www.rnk.com/services/hotel-operations",
    title: "Hotel Operations Mobility Services in India | RNK",
    description:
      "Professional chauffeur-driven hotel mobility solutions across India for hotels, resorts and serviced residences, focused on guest experience and reliability.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-hotel-operations-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Hotel Operations Chauffeur-Driven Mobility Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hotel Operations Mobility Services | RNK Chauffeur-Driven Transport",
    description:
      "End-to-end chauffeur-driven mobility solutions for hotels and resorts, covering guest transfers, staff movements and VIP requirements.",
    images: [
      "https://www.rnk.com/assets/images/rnk-hotel-operations-og.jpg",
    ],
  },
};

const HotelOperationSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/hotel-operations/#webpage",
      "url": "https://www.rnk.com/services/hotel-operations",
      "name": "Hotel Operations Mobility Services | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/hotel-operations/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/hotel-operations/#service",
      "name": "Hotel Operations Mobility Services",
      "serviceType": "Chauffeur-Driven Hotel & Hospitality Mobility",
      "description": "Integrated chauffeur-driven mobility solutions designed for hotels, resorts and serviced residences. RNK manages guest, staff and VIP movements with precision, hospitality-trained chauffeurs and 24/7 operational coordination across India.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "Audience",
        "name": "Hotels, Resorts, Serviced Residences and Hospitality Brands"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hotel Mobility Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guest Pick-ups and Drops"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Call Cars for In-House Guests"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate and Long-Stay Guest Mobility"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Staff, Crew and Management Transfers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP and VVIP Guest Movements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Event, Conference and Wedding Guest Shuttles"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/hotel-operations/#breadcrumb",
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
          "name": "Hotel Operations",
          "item": "https://www.rnk.com/services/hotel-operations"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/hotel-operations/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you work on long-term contracts with hotels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK offers long-term contracts, retainers and structured mobility arrangements for hotels, resorts and serviced residences."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up a dedicated travel desk inside the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK can establish a dedicated travel desk or concierge coordination model tailored to hotel operations and guest requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support 24/7 guest movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK provides round-the-clock mobility support aligned with early check-ins, late check-outs, red-eye arrivals and late-night departures."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle high-volume events or weddings at hotels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK specialises in managing high-volume events, conferences and weddings with coordinated fleets and on-ground operational support."
          }
        }
      ]
    }

  ]
}


export default function Page() {
  return <><Schema data={HotelOperationSchema} /><HotelOperationsPage/></>;
}