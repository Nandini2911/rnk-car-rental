import HotelOperationsPage from "./HotelOperationclient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hotel Operations Mobility Services in India | Chauffeur-Driven Hotel Transport – RNK",

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
        url: "https://www.rnk.com/assets/images/rnk-hotel-operations-og.jpg",
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
      "https://www.rnk.com/assets/images/rnk-hotel-operations-og.jpg",
    ],
  },
};


export default function Page() {
  return <HotelOperationsPage/>;
}