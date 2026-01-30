import Schema from "@/components/Schema";
import VipMovementsPage from "./VipMomentsclient";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "VIP Movement & Executive Transport Services in India | RNK",

  description:
    "RNK provides discreet, protocol-ready chauffeur-driven VIP movement services across India for celebrities, CEOs, diplomats, international guests and elite personalities.",

  keywords: [
    "vip movement services india",
    "chauffeur driven vip travel",
    "celebrity car rental india",
    "vip chauffeur service india",
    "elite mobility solutions",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/vip-movements",
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
    url: "https://www.rnk.com/services/vip-movements",
    title: "VIP Movement Services in India | RNK",
    description:
      "Discreet, chauffeur-driven VIP movement services across India for celebrities, executives and high-profile guests, managed with precision and confidentiality.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-vip-movements-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Chauffeur-Driven VIP Movement Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VIP Movement Services | RNK Chauffeur-Driven Elite Mobility",
    description:
      "Protocol-ready, confidential chauffeur-driven VIP travel across India for celebrities, CEOs and high-profile movements.",
    images: [
      "https://www.rnk.com/assets/images/rnk-vip-movements-og.jpg",
    ],
  },
};


const VipMomentsSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/vacation-rentals/#webpage",
      "url": "https://www.rnk.com/services/vacation-rentals",
      "name": "Vacation Rentals Travel Services | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/vacation-rentals/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/vacation-rentals/#service",
      "name": "Vacation Rentals Travel Services",
      "serviceType": "Chauffeur-Driven Vacation Rental Mobility",
      "description": "Premium chauffeur-driven travel services designed for villas, homestays and holiday rentals. RNK manages airport transfers, local sightseeing, on-call cars and multi-day holiday mobility so your vacation travel stays effortless across India.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "Audience",
        "name": "Families, Leisure Travellers, Groups and Holiday Guests"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vacation Rental Mobility Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airport and Station to Vacation Rental Transfers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Call Cars During Entire Stay"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full-Day Cars for Sightseeing and Local Travel"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family and Group Holiday Travel"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Late-Night Pick-ups and Flexible Timings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Day and Multi-City Holiday Journeys"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/vacation-rentals/#breadcrumb",
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
          "name": "Vacation Rentals",
          "item": "https://www.rnk.com/services/vacation-rentals"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/vacation-rentals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you coordinate directly with our villa or homestay host?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK can coordinate routes, locations and arrival timings directly with your villa or homestay host to ensure smooth check-ins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide cars for the full duration of our stay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK offers on-call chauffeur-driven cars for the entire duration of your vacation stay, including hourly and daily rental options."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle late-night drops back to the villa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK supports late-night and flexible pick-ups and drop-offs throughout your vacation."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to cover multiple destinations in one holiday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK designs multi-destination and multi-city holiday travel plans tailored to your itinerary and comfort preferences."
          }
        }
      ]
    }

  ]
}


export default function Page() {
  return <><Schema data={VipMomentsSchema} /> <VipMovementsPage/></>;
}