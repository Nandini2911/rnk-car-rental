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
        url: "https://www.rnk.com/assets/images/rnk-long-term-car-rental-og.jpg",
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
      "https://www.rnk.com/assets/images/rnk-long-term-car-rental-og.jpg",
    ],
  },
};

const longTermCarReantSchema=
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebPage",
      "@id": "https://www.rnk.com/services/long-term-car-rental/#webpage",
      "url": "https://www.rnk.com/services/long-term-car-rental",
      "name": "Long Term Car Rental Services | RNK Rentals",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "about": {
        "@id": "https://www.rnk.com/services/long-term-car-rental/#service"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.rnk.com/services/long-term-car-rental/#service",
      "name": "Long Term Car Rental Services",
      "serviceType": "Chauffeur-Driven Long Term Car Rental",
      "description": "Monthly and yearly chauffeur-driven car rental services for corporates, professionals, expats, NRI families and long-stay guests. RNK provides predictable billing, maintained vehicles, dedicated chauffeurs and end-to-end support across India — without the stress of ownership.",
      "provider": {
        "@id": "https://www.rnk.com/#organization"
      },
      "audience": {
        "@type": "Audience",
        "name": "Corporates, Executives, Professionals, Expats and Long-Stay Families"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Long Term Mobility Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Monthly Chauffeur-Driven Car Rental Plans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Yearly Chauffeur-Driven Car Rental Plans"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Executive Mobility Programs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Employee and Leadership Transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dedicated Chauffeur and Vehicle Assignment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Maintenance, Servicing and Replacement Support"
            }
          }
        ]
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/services/long-term-car-rental/#breadcrumb",
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
          "name": "Long Term Car Rental",
          "item": "https://www.rnk.com/services/long-term-car-rental"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/services/long-term-car-rental/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum duration for long term rental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Long term car rental typically starts from a minimum duration of one month, with flexible monthly, quarterly and yearly options available."
          }
        },
        {
          "@type": "Question",
          "name": "Is fuel included in the long term package?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fuel inclusion depends on the selected package. RNK offers flexible plans that can include fuel based on your usage and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Are maintenance and breakdowns covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All maintenance, servicing, inspections and breakdown support are fully managed by RNK throughout the rental period."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide GST invoices for companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK provides GST-compliant invoices suitable for corporate accounting and compliance requirements."
          }
        }
      ]
    }

  ]
}


export default function Page() {
  return <><Schema data={longTermCarReantSchema} /> <LongTermCarRentalPage/></>;
}