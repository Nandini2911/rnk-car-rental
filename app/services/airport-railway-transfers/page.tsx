


import type { Metadata } from "next";
import AirportRailwayTransfersPage from "./AirportRailwayTransfersclient";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title:
    "Airport & Railway Transfer Services in India | RNK Rentals",

  description:
    "RNK provides seamless chauffeur-driven airport and railway transfer services across India with real-time flight and train tracking, punctual pickups and 24/7 support.",

  keywords: [
    "airport transfer services india",
    "railway station transfer service",
    "chauffeur driven airport transfer",
    "airport pickup and drop service india",
    "luxury airport transfer india",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/airport-railway-transfers",
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
    url: "https://www.rnk.com/services/airport-railway-transfers",
    title: "Airport & Railway Transfer Services in India | RNK",
    description:
      "Stress-free chauffeur-driven airport and railway transfers across India with flight tracking, professional chauffeurs and reliable on-time service.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "/og-airport-transfer.webp",
        width: 1200,
        height: 630,
        alt: "RNK Airport and Railway Transfer Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Airport & Railway Transfers | RNK Chauffeur-Driven Services",
    description:
      "Reliable chauffeur-driven airport and railway transfers across India with punctual pickups, flight tracking and 24/7 support.",
    images: [
      "/twitter-airport-transfer_converted.webp",
    ],
  },
};


const AirportrailwayServiceSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/airport-railway-transfers/#webpage",
      "url": "https://www.rnk.com/services/airport-railway-transfers",
      "name": "Airport & Railway Transfers | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/airport-railway-transfers/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/airport-railway-transfers/#service",
      "name": "Airport & Railway Transfers",
      "serviceType": "Chauffeur-Driven Airport and Railway Transfers",
      "description": "Seamless, punctual and stress-free chauffeur-driven airport and railway transfer services for executives, families, guests and VIPs. RNK ensures on-time pickups, real-time flight and train tracking, and smooth terminal-to-destination journeys across India.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "Audience",
        "name": "Executives, Families, Guests and VIP Travellers"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Airport & Railway Transfer Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport Pick-ups and Drop-offs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Railway Station Transfers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Early Morning and Late-Night Transfers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guest and Delegation Movements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hotel to Airport or Station Connectivity"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group, Crew and Staff Transfers"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/airport-railway-transfers/#breadcrumb",
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
          "name": "Airport & Railway Transfers",
          "item": "https://www.rnk.com/services/airport-railway-transfers"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/airport-railway-transfers/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you track flights and trains for delays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK tracks flights and trains in real time and adjusts pick-up timings to accommodate delays or early arrivals without unnecessary waiting charges."
          }
        },
        {
          "@type": "Question",
          "name": "Can you arrange late-night or early-morning transfers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK provides 24/7 airport and railway transfer services, including early-morning departures and late-night arrivals."
          }
        },
        {
          "@type": "Question",
          "name": "Is luggage handling assistance available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Chauffeurs assist with luggage handling for individuals, families and large groups to ensure smooth transfers."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage group or delegation transfers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK specialises in group, delegation, crew and high-volume transfers with coordinated vehicles and on-ground support teams."
          }
        }
      ]
    }

  ]
}


export default function Page() {
  return <><Schema data={AirportrailwayServiceSchema} /><AirportRailwayTransfersPage/></>;
}