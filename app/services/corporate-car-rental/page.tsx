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
        url: "/og-premium-car_converted.webp",
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
      "/twitter-premium-car.webp",
    ],
  },
};


const CorporateCaeRentalSchema=
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
      "@id": "https://www.rnk.com/corporate-car-rental/#webpage",
      "url": "https://www.rnk.com/corporate-car-rental",
      "name": "Corporate Car Rental - RNK Rentals",
      "description": "Premium, punctual, and professionally managed corporate mobility services by RNK Rentals, designed for executives, teams, clients, and VIP movements across India.",
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
      "@id": "https://www.rnk.com/corporate-car-rental/#service",
      "name": "Corporate Car Rental Service",
      "description": "RNK Rentals provides premium chauffeur-driven corporate mobility solutions, including executive commutes, client pick-ups, airport transfers, and long-term contracts.",
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
        "Executive Office Commute",
        "Client Pick-ups & Drop-offs",
        "Airport & Railway Transfers",
        "Meetings and Site Visits",
        "Intercity/Outstation Corporate Travel",
        "VIP & Delegation Movements",
        "Long-term Company Contracts"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/corporate-car-rental/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is corporate car rental better than cabs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You get a predictable, chauffeur-driven premium service without wait times."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer monthly corporate contracts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK Rentals offers flexible long-term company contracts tailored to corporate needs."
          }
        },
        {
          "@type": "Question",
          "name": "Is billing GST supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all billing is GST supported, and the entire rental cost can be treated as an operational expense with tax benefits."
          }
        },
        {
          "@type": "Question",
          "name": "Are chauffeurs trained for VIP movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK chauffeurs are professional, courteous, and specifically trained for VIP movements, ensuring discretion and a polished experience."
          }
        }
      ]
    }
  ]
}

export default function Page() {
  return <><Schema data={CorporateCaeRentalSchema} /><CorporateCarRentalClient /></>;
}
