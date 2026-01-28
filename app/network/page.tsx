

import { RnkFooter } from "@/components/footer";
import OurNetwork from "@/components/OurNetwork";



export const metadata = {
  title: "Pan-India Luxury Car Rental Network | 170+ Cities – RNK Rentals",
  description:
    "RNK Rentals operates a pan-India luxury chauffeur-driven car rental network across 170+ cities, offering consistent service for corporate, wedding and VIP travel.",
  keywords: [
    "pan india car rental network",
    "luxury car rental across india",
    "chauffeur driven car rental cities",
    "rnk rentals network",
    "nationwide car rental service india",
  ],
  alternates: {
    canonical: "https://www.rnk.com/our-network",
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
    url: "https://www.rnk.com/our-network",
    title: "Pan-India Luxury Car Rental Network | RNK Rentals",
    description:
      "A single contact, a nationwide network. RNK Rentals delivers luxury chauffeur-driven car rental services across 170+ cities in India.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-network-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Pan India Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pan-India Chauffeur-Driven Car Rental Network | RNK",
    description:
      "Luxury chauffeur-driven car rental services across 170+ cities in India. One network. One standard. RNK Rentals.",
    images: ["https://www.rnk.com/assets/images/rnk-network-og.jpg"],
  },
};


export default function () {
  return (
    <main className="bg-black text-white min-h-screen">
   
     <OurNetwork />
     <RnkFooter />
    </main>
  );
}
