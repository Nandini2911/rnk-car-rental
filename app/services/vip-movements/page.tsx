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
        url: "/og-vip_converted.webp",
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
      "/twitter-vip.webp",
    ],
  },
};


const VipMomentsSchema=
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
      "@id": "https://www.rnk.com/vip-movements/#webpage",
      "url": "https://www.rnk.com/vip-movements",
      "name": "VIP Movements - RNK Rentals",
      "description": "Precision-managed, confidential, chauffeur-driven travel for celebrities, CEOs, diplomats, international guests and elite personalities. Protocol-ready precision for high-profile clients.",
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
      "@id": "https://www.rnk.com/vip-movements/#service",
      "name": "VIP Movements Service",
      "description": "RNK Rentals provides elite chauffeur-driven travel for celebrities, CEOs, and diplomats. Our services include airport receptions, multi-vehicle convoys, backstage entries, and event-to-venue schedules with protocol-ready precision.",
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
        "Celebrity Chauffeur Service",
        "CEO & Executive Mobility",
        "Diplomatic Travel Coordination",
        "Multi-Vehicle VIP Convoys",
        "Film Shoot Logistics",
        "Confidential Meeting Transfers"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/vip-movements/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you handle celebrity and VIP movements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. RNK manages celebrity movements, backstage transfers, airport receptions and high-profile event logistics with protocol-ready precision."
          }
        },
        {
          "@type": "Question",
          "name": "Is my travel kept confidential?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, confidentiality is non-negotiable. We provide discreet travel solutions ideal for public figures, film shoots, and confidential visits."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide multi-car convoys?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we coordinate multi-vehicle convoys for delegations, large VIP groups, and escort-managed movements across all major Indian cities."
          }
        },
        {
          "@type": "Question",
          "name": "Are chauffeurs trained for VIP etiquette?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our chauffeurs undergo specialized training in VIP etiquette, red-carpet handling, and security-sensitive protocols to ensure a polished guest experience."
          }
        }
      ]
    }
  ]
}



export default function Page() {
  return <><Schema data={VipMomentsSchema} /> <VipMovementsPage/></>;
}