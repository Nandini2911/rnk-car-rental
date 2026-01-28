


import type { Metadata } from "next";
import AirportRailwayTransfersPage from "./AirportRailwayTransfersclient";

export const metadata: Metadata = {
  title:
    "Airport & Railway Transfer Services in India | Chauffeur-Driven Transfers – RNK",

  description:
    "RNK provides seamless chauffeur-driven airport and railway transfer services across India with real-time flight and train tracking, punctual pickups and 24/7 support.",

  keywords: [
    "airport transfer services india",
    "railway station transfer service",
    "chauffeur driven airport transfer",
    "airport pickup and drop service india",
    "luxury airport transfer india",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/airport-railway-transfers",
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
    url: "https://www.rnk.com/services/airport-railway-transfers",
    title: "Airport & Railway Transfer Services in India | RNK",
    description:
      "Stress-free chauffeur-driven airport and railway transfers across India with flight tracking, professional chauffeurs and reliable on-time service.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-airport-transfer-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Airport and Railway Transfer Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Airport & Railway Transfers | RNK Chauffeur-Driven Services",
    description:
      "Reliable chauffeur-driven airport and railway transfers across India with punctual pickups, flight tracking and 24/7 support.",
    images: [
      "https://www.rnk.com/assets/images/rnk-airport-transfer-og.jpg",
    ],
  },
};

export default function Page() {
  return <AirportRailwayTransfersPage/>;
}