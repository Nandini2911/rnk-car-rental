


import EventWeddingTransportPage from "./EventWeddingTransportClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Event & Wedding Transport Services in India | Chauffeur-Driven Event Mobility – RNK",

  description:
    "RNK provides premium chauffeur-driven event and wedding transport services across India for weddings, VIPs, artists, crew, delegates and large-scale corporate events.",

  keywords: [
    "event transport services india",
    "wedding transport services india",
    "wedding car rental with driver",
    "chauffeur driven event transport",
    "luxury wedding car rental india",
  ],

  alternates: {
    canonical: "https://www.rnk.com/services/event-wedding-transport",
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
    url: "https://www.rnk.com/services/event-wedding-transport",
    title: "Event & Wedding Transport Services in India | RNK",
    description:
      "Elegantly managed chauffeur-driven transport for weddings, corporate events, VIP movements and large-scale celebrations across India.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-event-wedding-transport-og.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Chauffeur-Driven Event and Wedding Transport Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Event & Wedding Transport Services | RNK Chauffeur-Driven Mobility",
    description:
      "Luxury chauffeur-driven transport for weddings, VIPs, artists and corporate events across India — managed with precision and hospitality.",
    images: [
      "https://www.rnk.com/assets/images/rnk-event-wedding-transport-og.jpg",
    ],
  },
};

export default function Page() {
  return <EventWeddingTransportPage />;
}
