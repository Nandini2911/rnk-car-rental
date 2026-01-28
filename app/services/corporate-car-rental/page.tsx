import CorporateCarRentalClient from "./CorporateCarRentalClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Corporate Car Rental Services in India | Chauffeur-Driven Mobility – RNK",

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
        url: "https://www.rnk.com/assets/images/rnk-corporate-car-rental-og.jpg",
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
      "https://www.rnk.com/assets/images/rnk-corporate-car-rental-og.jpg",
    ],
  },
};

export default function Page() {
  return <CorporateCarRentalClient />;
}
