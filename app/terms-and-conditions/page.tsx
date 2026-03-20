import type { Metadata } from "next";
import TermsAndConditionsPage from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions for Car Rental Services | RNK Rentals",

  description:
    "Read RNK Rentals terms and conditions for luxury car rental, chauffeur-driven services, bookings, payments, and usage policies in India.",

  keywords: [
    "car rental terms",
    "chauffeur service terms India",
    "luxury car rental policies",
    "RNK Rentals terms",
  ],

  alternates: {
    canonical: "https://www.rnk.com/terms-and-conditions",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Terms & Conditions | RNK Rentals",
    description:
      "Terms governing the use of RNK Rentals luxury car services.",
    url: "https://www.rnk.com/terms-and-conditions",
    siteName: "RNK Rentals",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: "https://www.rnk.com/terms-and-conditions",
    description:
      "Terms and conditions for RNK Rentals services and usage policies.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TermsAndConditionsPage />
    </>
  );
}