import Schema from "@/components/Schema";
import ContactClient from "./ContactClient";


export const metadata = {
  title: "Contact RNK Rentals | Luxury Chauffeur Car Rental Mumbai",
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


const ContactSchema=
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.rnk.com/contact/#contactpage",
      "url": "https://www.rnk.com/contact",
      "name": "Contact RNK Rentals",
      "description": "Contact RNK Rentals for chauffeur-driven luxury car rental services across India via phone, email or visit the head office in Mumbai.",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "mainEntity": {
        "@id": "https://www.rnk.com/contact/#headoffice"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/contact/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.rnk.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://www.rnk.com/contact"
        }
      ]
    },
    {
      "@type": "AutoRental",
      "@id": "https://www.rnk.com/contact/#headoffice",
      "name": "RNK Rentals Head Office",
      "parentOrganization": {
        "@id": "https://www.rnk.com/#organization"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
        "addressLocality": "Mumbai",
        "addressRegion": "MH",
        "postalCode": "400025",
        "addressCountry": "IN"
      },
      "telephone": "+91-22-43227777",
      "email": "info@rnk.com",
      "areaServed": "IN"
    }
  ]
}


export default function Page() {
  return  <><Schema data={ContactSchema} /><ContactClient /></>;
}
