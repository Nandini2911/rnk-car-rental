import VipMovementsPage from "./VipMomentsclient";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "VIP Movement Services in India | Chauffeur-Driven Elite Mobility – RNK",

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
        url: "https://www.rnk.com/assets/images/rnk-vip-movements-og.jpg",
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
      "https://www.rnk.com/assets/images/rnk-vip-movements-og.jpg",
    ],
  },
};

export default function Page() {
  return <VipMovementsPage/>;
}