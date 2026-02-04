import Schema from "@/components/Schema";
import LongTermCarRentalPage from "./LongTermCarReantal";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Long-Term Car Rental Services in India | RNK Rentals",

  description:
    "RNK offers long term chauffeur-driven car rental services across India with monthly and yearly plans for corporates, professionals, expats and long-stay guests.",

  keywords: [
    "long term car rental india",
    "monthly chauffeur driven car rental",
    "yearly car rental with driver",
    "corporate long term car rental",
    "chauffeur driven car rental monthly",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/long-term-car-rental",
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
    url: "https://www.rnk.com/services/long-term-car-rental",
    title: "Long Term Car Rental Services in India | RNK",
    description:
      "Premium long term chauffeur-driven car rental services across India with predictable monthly billing, maintenance included and dedicated support.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "/og-long-term.webp",
        width: 1200,
        height: 630,
        alt: "RNK Long Term Chauffeur-Driven Car Rental Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Long Term Car Rental Services | RNK Chauffeur-Driven Plans",
    description:
      "Monthly and yearly chauffeur-driven car rental plans across India for corporates, professionals and long-stay travellers.",
    images: [
      "/twitter-long-term.webp",
    ],
  },
};

const longTermCarReantSchema=
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
      "@id": "https://www.rnk.com/long-term-car-rental/#webpage",
      "url": "https://www.rnk.com/long-term-car-rental",
      "name": "Long Term Car Rental - RNK Rentals",
      "description": "Monthly & yearly chauffeur-driven plans for corporates, professionals, expats, NRI families and long-stay guests \u2014 premium mobility without the stress of ownership.",
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
      "@id": "https://www.rnk.com/long-term-car-rental/#service",
      "name": "Long Term Car Rental Service",
      "description": "RNK Rentals provides monthly & yearly chauffeur-driven plans for corporates, professionals, expats, NRI families and long-stay guests, offering premium mobility without the stress of ownership.",
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
        "Monthly Chauffeur-Driven Plans",
        "Yearly Chauffeur-Driven Plans",
        "Corporate Leasing",
        "Executive Mobility",
        "Employee Transport",
        "Long-stay Guest Mobility"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/long-term-car-rental/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum duration for long term rental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, long term rental starts from 1 month onwards, with flexible options based on your requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Is fuel included in the long term package?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fuel is generally not included in the long-term rental package, allowing for greater flexibility in usage. However, specific terms can be discussed during contract finalization."
          }
        },
        {
          "@type": "Question",
          "name": "Are maintenance and breakdowns covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK handles all maintenance, inspections, and vehicle health for the entire duration of your contract. Immediate vehicle replacement is provided in case of breakdowns."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide GST invoices for companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK provides fixed monthly invoices with GST support, and the entire rental cost can be treated as an operational expense with tax benefits."
          }
        }
      ]
    }
  ]
}
export default function Page() {
  return <><Schema data={longTermCarReantSchema} /> <LongTermCarRentalPage/></>;
}