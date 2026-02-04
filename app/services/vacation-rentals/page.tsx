import Schema from "@/components/Schema";
import VacationRentalsPage from "./VacationRentalsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vacation Travel Services in India | RNK Rentals",

  description:
    "RNK provides premium chauffeur-driven vacation rental travel services across India for villas, homestays and holiday stays, ensuring stress-free, comfortable and flexible mobility throughout your getaway.",

  keywords: [
    "vacation rental travel services india",
    "chauffeur driven vacation travel",
    "villa and homestay car rental",
    "holiday chauffeur driven car india",
    "vacation car rental with driver",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/vacation-rentals",
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
    url: "https://www.rnk.com/services/vacation-rentals",
    title: "Vacation Rental Travel Services in India | RNK",
    description:
      "Stress-free chauffeur-driven travel for villas, homestays and holiday rentals across India. From airport pick-ups to full-stay mobility, RNK handles it all.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "/og-vacation-rental_converted.webp",
        width: 1200,
        height: 630,
        alt: "RNK Chauffeur-Driven Vacation Rental Travel Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vacation Rental Travel Services | RNK Chauffeur-Driven Holidays",
    description:
      "Premium chauffeur-driven travel for villas, homestays and holiday rentals across India. Relax and enjoy your getaway while RNK handles every ride.",
    images: [
      "/twitter-vaction-travel.webp",
    ],
  },
};


const VacationReantalSchema=
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
      "@id": "https://www.rnk.com/vacation-rentals/#webpage",
      "url": "https://www.rnk.com/vacation-rentals",
      "name": "Vacation Rentals Travel - RNK Rentals",
      "description": "Chauffeur-driven cars for villas, homestays and holiday rentals — so your getaway starts the moment you leave home. Premium mobility for stress-free vacation stays.",
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
      "priceRange": "₹₹₹₹",
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
      "@id": "https://www.rnk.com/vacation-rentals/#service",
      "name": "Vacation Rentals Travel Service",
      "description": "RNK Rentals provides premium chauffeur-driven cars for villas, homestays, and holiday rentals. Our services cover airport/station transfers, on-call cars during stays, sightseeing, and group movements across India.",
      "provider": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "areaServed": [
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Bangalore" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "City", "name": "Pune" },
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "City", "name": "Vadodara" },
        { "@type": "City", "name": "Indore" },
        { "@type": "City", "name": "Bhopal" },
        { "@type": "City", "name": "Jaipur" },
        { "@type": "City", "name": "Lucknow" },
        { "@type": "City", "name": "Chandigarh" },
        { "@type": "City", "name": "Goa" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Guwahati" },
        { "@type": "City", "name": "Bhubaneswar" }
      ],
      "serviceType": [
        "Vacation Rental Transfers",
        "Villa & Homestay Chauffeur Service",
        "Holiday Sightseeing Travel",
        "Airport to Vacation Rental Pickups",
        "Multi-day Holiday Journeys",
        "On-call Vacation Mobility"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/vacation-rentals/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you coordinate directly with our villa or homestay host?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can coordinate routes, locations and timings directly with your host or property manager for smooth arrivals."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide cars for the full duration of our stay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer on-call cars and flexible hourly or daily rental options for the entire duration of your vacation stay."
          }
        },
        {
          "@type": "Question",
          "name": "Can you handle late-night drops back to the villa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our chauffeurs are available for late-night pick-ups from restaurants, clubs, or events to ensure you return safely to your villa."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to cover multiple destinations in one holiday?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in multi-day, multi-city holiday journeys, allowing you to explore multiple destinations with a dedicated chauffeur."
          }
        }
      ]
    }
  ]
}


export default function Page() {
  return <><Schema data={VacationReantalSchema} /> <VacationRentalsPage/></>;
}