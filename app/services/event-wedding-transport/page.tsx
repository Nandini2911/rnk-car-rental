


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
        url: "/og-event.webp",
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
      "/twitter-event.webp",
    ],
  },
};

const EventWeddingRentSchema=
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
      "@id": "https://www.rnk.com/event-wedding-transport/#webpage",
      "url": "https://www.rnk.com/event-wedding-transport",
      "name": "Event & Wedding Transport - RNK Rentals",
      "description": "Premium, punctual, and elegantly managed transport for weddings, VIPs, artists, crew, delegates, and large-scale corporate events by RNK Rentals.",
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
      "@id": "https://www.rnk.com/event-wedding-transport/#service",
      "name": "Event and Wedding Transport Service",
      "description": "RNK Rentals provides seamless, chauffeur-driven luxury transport for weddings, corporate events, exhibitions, conferences, and VIP gatherings across India.",
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
        "Wedding Transport",
        "Event Transport",
        "VIP Movement Management",
        "Artist & Crew Transport",
        "Delegate Transport",
        "Corporate Event Transport",
        "Exhibition Transport",
        "Conference Transport",
        "Shuttle Services"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/event-wedding-transport/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide wedding cars for groom and bride entry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer premium sedans, SUVs and luxury cars for grand bridal and groom entries."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle large guest logistics for multi-day weddings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK specializes in seamless multi-day operations for destination weddings, exhibitions, shoots, or summits, managing constant movement of guests, VIPs, and team members."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide shuttle services for events?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK provides shuttle services for events, ensuring efficient and comfortable transportation for guests and attendees."
          }
        },
        {
          "@type": "Question",
          "name": "Are your chauffeurs trained for VIP and celebrity movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our chauffeurs are trained for hospitality, premium guest handling, event protocol, and specifically for VIP and celebrity movements, ensuring discretion and professionalism."
          }
        }
      ]
    }
  ]
}



export default function Page() {
  return  <><Schema data={EventWeddingRentSchema}  /><EventWeddingTransportPage /> </>;
}
