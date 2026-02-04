
import { Metadata } from "next";
import LuxuryTravelPage from "./LuxuryTravelClient";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title:
    "Luxury Travel Services in India | RNK Rentals",

  description:
    "RNK offers premium chauffeur-driven luxury travel services across India for holidays, weekend getaways, celebrations and personalised long-distance journeys.",

  keywords: [
    "luxury travel services india",
    "chauffeur driven luxury travel",
    "luxury car travel india",
    "premium chauffeur driven journeys",
    "luxury outstation car rental india",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/luxury-travel",
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
    url: "https://www.rnk.com/services/luxury-travel",
    title: "Luxury Travel Services in India | RNK",
    description:
      "Premium chauffeur-driven luxury travel experiences across India for holidays, weekend escapes, celebrations and personalised journeys.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "/og-luxury-travel.webp",
        width: 1200,
        height: 630,
        alt: "RNK Luxury Chauffeur-Driven Travel Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel Services | RNK Chauffeur-Driven Journeys",
    description:
      "Experience premium chauffeur-driven luxury travel across India with personalised routes, comfort-first vehicles and 24/7 support.",
    images: [
      "/twitter-luxury-travel.webp",
    ],
  },
};


const LuxuryTravelSchema=
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Luxury Travel RNK - Premium Chauffeur-Driven Experiences",
      "description": "Premium chauffeur-driven experiences curated for holidays, celebrations, weekend getaways and personalised luxury trips across India. RNK ensures every drive feels premium, private and unforgettable. Our services include chauffeur-driven sedans, SUVs, and luxury cars like BMW, Mercedes, and Audi, with features such as professional chauffeurs, GPS tracking, VIP-grade comfort, and 24/7 concierge support.",
      "serviceType": "Luxury Chauffeur Service",
      "provider": {
        "@type": "Organization",
        "name": "RNK Rentals",
        "legalName": "RAMNIRANJAN KEDIA RENT A CAR PRIVATE LIMITED",
        "url": "https://www.rnk.com",
        "logo": "/og-luxury-travel.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-22-43227777",
          "contactType": "customer service",
          "email": "info@rnk.com"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "postalCode": "400025",
          "addressCountry": "IN"
        }
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
      "url": "https://www.rnk.com/services/luxury-travel",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "RNK Luxury Travel Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Weekend Getaways"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Long-Distance Luxury Journeys"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Romantic Scenic Drives"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Holiday Tours"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Road Trips & Personalised Routes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Outstation Travel"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VIP & Celebrity Travel Movements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Destination-Led Luxury Itineraries"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chauffeur-Assisted Sightseeing & Leisure Travel"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I customise my travel route?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer personalised itineraries, scenic routes and custom stopovers for your luxury journey."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide luxury cars for long-distance travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our fleet includes chauffeur-driven sedans, SUVs and luxury cars, each maintained for smooth, quiet and comfortable long journeys."
          }
        },
        {
          "@type": "Question",
          "name": "Are chauffeurs trained for premium travel experiences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our trained chauffeurs prioritise etiquette, safety and privacy to ensure a refined travel experience for solo travellers, families and VIP guests."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book for weekend getaways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RNK offers luxury travel solutions designed for weekend escapes, long-distance journeys, romantic drives, family holidays, and more."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.rnk.com"
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
          "name": "Luxury Travel",
          "item": "https://www.rnk.com/services/luxury-travel"
        }
      ]
    }
  ]
}


export default function Page() {
  return  <><Schema data={LuxuryTravelSchema} /> <LuxuryTravelPage/></>;
}
