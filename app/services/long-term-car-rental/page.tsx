import LongTermCarRentalPage from "./LongTermCarReantal";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Long Term Car Rental Services in India | Chauffeur-Driven Monthly & Yearly Plans – RNK",

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

export default function Page() {
  return <LongTermCarRentalPage/>;
}