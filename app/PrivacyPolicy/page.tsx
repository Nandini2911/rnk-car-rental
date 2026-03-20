import type { Metadata } from "next";
import PrivacyPolicyPage from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy for Car Rental Services | RNK Rentals",

  description:
    "Learn how RNK Rentals collects, uses, and protects your personal data for luxury car rental and chauffeur services across India.",

  keywords: [
    "privacy policy car rental",
    "chauffeur service data policy",
    "RNK Rentals privacy",
    "luxury car rental privacy India",
  ],

  alternates: {
    canonical: "https://www.rnk.com/privacy-policy",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Privacy Policy | RNK Rentals",
    description:
      "Understand how RNK Rentals collects and protects your personal data.",
    url: "https://www.rnk.com/privacy-policy",
    siteName: "RNK Rentals",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://www.rnk.com/privacy-policy",
    description:
      "Privacy policy page of RNK Rentals explaining data usage and protection.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PrivacyPolicyPage />
    </>
  );
}