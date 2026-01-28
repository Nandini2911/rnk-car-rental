import VacationRentalsPage from "./VacationRentalsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vacation Rental Travel Services in India | Chauffeur-Driven Holiday Mobility – RNK",

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
        url: "https://www.rnk.com/assets/images/rnk-vacation-rentals-og.jpg",
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
      "https://www.rnk.com/assets/images/rnk-vacation-rentals-og.jpg",
    ],
  },
};

export default function Page() {
  return <VacationRentalsPage/>;
}