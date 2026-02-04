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
        url: "/og-hotel.webp",
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
      "/twitter-hotel.webp",
    ],
  },
};

const HotelOperationSchema=
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
      "@id": "https://www.rnk.com/hotel-operations/#webpage",
      "url": "https://www.rnk.com/hotel-operations",
      "name": "Hotel Operations - RNK Rentals",
      "description": "Integrated, chauffeur-driven mobility solutions designed specially for hotels, resorts and serviced residences by RNK Rentals, for guests, staff and VIP movements.",
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
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.rnk.com/hotel-operations/#service",
      "name": "Hotel Operations Mobility Solutions",
      "description": "RNK partners with hotels and hospitality brands to manage all ground transport \u2014 from guest arrivals and departures to staff and crew movements, events and corporate stays.",
      "provider": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Mumbai"
        },
        {
          "@type": "City",
          "name": "Delhi"
        },
        {
          "@type": "City",
          "name": "Chennai"
        },
        {
          "@type": "City",
          "name": "Bangalore"
        },
        {
          "@type": "City",
          "name": "Kolkata"
        },
        {
          "@type": "City",
          "name": "Hyderabad"
        },
        {
          "@type": "City",
          "name": "Pune"
        },
        {
          "@type": "City",
          "name": "Ahmedabad"
        },
        {
          "@type": "City",
          "name": "Vadodara"
        },
        {
          "@type": "City",
          "name": "Indore"
        },
        {
          "@type": "City",
          "name": "Bhopal"
        },
        {
          "@type": "City",
          "name": "Jaipur"
        },
        {
          "@type": "City",
          "name": "Lucknow"
        },
        {
          "@type": "City",
          "name": "Chandigarh"
        },
        {
          "@type": "City",
          "name": "Goa"
        },
        {
          "@type": "City",
          "name": "Kochi"
        },
        {
          "@type": "City",
          "name": "Guwahati"
        },
        {
          "@type": "City",
          "name": "Bhubaneswar"
        }
      ],
      "serviceType": [
        "Guest Pick-ups & Drops (Airport / Station / City)",
        "On-call Cars for In-house Guests",
        "Corporate Stay & Long-stay Guest Mobility",
        "Crew, Staff & Management Transfers",
        "VIP & VVIP Movements for High-profile Guests",
        "Event, Conference & Wedding Guest Shuttles",
        "Dedicated Travel Desk Partnerships",
        "Late-night & Early-morning Guest Transfers",
        "Multi-property & Resort-to-resort Connectivity"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/hotel-operations/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you work on long-term contracts with hotels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer long-term contracts, retainers and structured arrangements for hotels, resorts and serviced residences."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up a dedicated travel desk inside the hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK can set up a dedicated travel desk inside your hotel to manage reservations, VIP requirements, bulk bookings, and last-minute requests, acting as an extended arm of your hotel team."
          }
        },
        {
          "@type": "Question",
          "name": "Do you support 24/7 guest movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK provides 24/7 operations aligned with early check-ins, late check-outs, red-eye arrivals, and late-night departures, ensuring seamless guest movements at all times."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle high-volume events or weddings at our hotel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK has on-ground operational support for large events, conferences, and weddings, ensuring seamless coordination and transport for high-volume guest movements."
          }
        }
      ]
    }
  ]
}


export default function Page() {
  return <><Schema data={HotelOperationSchema} /><HotelOperationsPage/></>;
}