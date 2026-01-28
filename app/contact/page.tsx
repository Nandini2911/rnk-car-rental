import ContactClient from "./ContactClient";


export const metadata = {
  title: "Contact Ramniranjan Kedia Rent A Car Pvt. Ltd | Mumbai Head Office",
  description:
    "Contact Ramniranjan Kedia Rent A Car Pvt. Ltd for luxury chauffeur-driven car rental services across India. Mumbai head office, 24/7 support.",
  keywords: [
    "contact rnk rentals",
    "ramniranjan kedia rent a car contact",
    "luxury car rental contact india",
    "chauffeur driven car rental mumbai",
  ],
  alternates: {
    canonical: "https://www.rnk.com/contact-us",
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
    url: "https://www.rnk.com/contact-us",
    title: "Contact Ramniranjan Kedia Rent A Car Pvt. Ltd",
    description:
      "Get in touch with Ramniranjan Kedia Rent A Car Pvt. Ltd for premium chauffeur-driven car rental services. Mumbai head office, pan-India operations.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "https://www.rnk.com/assets/images/rnk-contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact RNK Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ramniranjan Kedia Rent A Car Pvt. Ltd",
    description:
      "Mumbai head office. 24/7 support. Contact RNK for luxury chauffeur-driven car rental services across India.",
    images: ["https://www.rnk.com/assets/images/rnk-contact-og.jpg"],
  },
};

export default function Page() {
  return <ContactClient/>;
}