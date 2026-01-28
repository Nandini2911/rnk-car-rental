
import { Metadata } from "next";
import LuxuryTravelPage from "./LuxuryTravelClient";

export const metadata: Metadata = {
  title:
    "Luxury Travel Services in India | Chauffeur-Driven Premium Journeys – RNK",

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
        url: "https://www.rnk.com/assets/images/rnk-luxury-travel-og.jpg",
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
      "https://www.rnk.com/assets/images/rnk-luxury-travel-og.jpg",
    ],
  },
};



export default function Page() {
  return <LuxuryTravelPage/>;
}
