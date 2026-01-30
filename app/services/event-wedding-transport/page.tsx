


import Schema from "@/components/Schema";
import EventWeddingTransportPage from "./EventWeddingTransportClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Event & Wedding Transport Services in India | Chauffeur-Driven Event Mobility – RNK",

  description:
    "RNK provides premium chauffeur-driven event and wedding transport services across India for weddings, VIPs, artists, crew, delegates and large-scale corporate events.",

  keywords: [
    "event transport services india",
    "wedding transport services india",
    "wedding car rental with driver",
    "chauffeur driven event transport",
    "luxury wedding car rental india",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/event-wedding-transport",
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
    url: "https://www.rnk.com/services/event-wedding-transport",
    title: "Event & Wedding Transport Services in India | RNK",
    description:
      "Elegantly managed chauffeur-driven transport for weddings, corporate events, VIP movements and large-scale celebrations across India.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-event-wedding-transport-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Chauffeur-Driven Event and Wedding Transport Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Event & Wedding Transport Services | RNK Chauffeur-Driven Mobility",
    description:
      "Luxury chauffeur-driven transport for weddings, VIPs, artists and corporate events across India — managed with precision and hospitality.",
    images: [
      "https://www.rnk.com/assets/images/rnk-event-wedding-transport-og.jpg",
    ],
  },
};

const EventWeddingRentSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/event-wedding-transport/#webpage",
      "url": "https://www.rnk.com/services/event-wedding-transport",
      "name": "Event & Wedding Transport Services | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/event-wedding-transport/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/event-wedding-transport/#service",
      "name": "Event & Wedding Transport Services",
      "serviceType": "Chauffeur-Driven Event and Wedding Mobility",
      "description": "Premium chauffeur-driven transport solutions for weddings, corporate events, exhibitions, conferences, artists, VIPs and large-scale celebrations. RNK manages guest logistics, luxury fleets, event schedules and on-ground coordination to deliver flawless, punctual and elegant event mobility across India.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "Audience",
        "name": "Wedding Families, Event Organisers, Corporates, Artists and VIP Guests"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Event & Wedding Mobility Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Luxury Wedding Cars for Bride and Groom Entry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guest Pickup and Drop Coordination Across Venues"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP, Celebrity and Artist Movements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Events, Conferences and Exhibitions Transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shuttle Services and Group Transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Day Destination Wedding and Event Operations"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/event-wedding-transport/#breadcrumb",
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
          "name": "Event / Wedding Transport",
          "item": "https://www.rnk.com/services/event-wedding-transport"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/event-wedding-transport/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide wedding cars for groom and bride entry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK provides premium sedans, SUVs and luxury cars for grand bride and groom entries during wedding celebrations."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle large guest logistics for multi-day weddings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK specialises in managing large guest movements for multi-day weddings with coordinated fleets, schedules and on-ground supervisors."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide shuttle services for events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK offers shuttle services and group transport solutions for weddings, corporate events, exhibitions and conferences."
          }
        },
        {
          "@type": "Question",
          "name": "Are your chauffeurs trained for VIP and celebrity movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK chauffeurs are trained in premium hospitality, discretion, event protocol and VIP or celebrity movement handling."
          }
        }
      ]
    }

  ]
}



export default function Page() {
  return  <><Schema data={EventWeddingRentSchema}  /><EventWeddingTransportPage /> </>;
}
