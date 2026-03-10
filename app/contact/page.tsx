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
        url: "/og-contact-us.jpg",
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
    images: ["/twitter-contact-us.jpg"],
  },
};

const ContactSchema=

{
  "@context": "https://schema.org",
  "@graph": [

{
 "@type": "Organization",
 "@id": "https://www.rnk.com/#organization",
 "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd",
 "alternateName": "RNK Rentals",
 "url": "https://www.rnk.com/",
 "email": "info@rnk.com",
 "foundingDate": "1969",
 "logo": {
   "@type": "ImageObject",
   "@id": "https://www.rnk.com/#logo",
   "url": "https://www.rnk.com/RNK_LOGO.jpg"
 },
 "sameAs": [
   "https://www.linkedin.com/company/rnk-rentals",
   "https://www.instagram.com/rnkrentals"
 ]
},

{
 "@type": "WebSite",
 "@id": "https://www.rnk.com/#website",
 "url": "https://www.rnk.com/",
 "name": "RNK Rentals",
 "publisher": {
   "@id": "https://www.rnk.com/#organization"
 }
},

{
 "@type": "WebPage",
 "@id": "https://www.rnk.com/contact/#webpage",
 "url": "https://www.rnk.com/contact",
 "name": "Contact RNK Rentals | Luxury Car Rental Support",
 "description": "Contact RNK Rentals for premium chauffeur driven car rental services across India including corporate travel, weddings, airport transfers and VIP movements.",
 "isPartOf": {
   "@id": "https://www.rnk.com/#website"
 },
 "about": {
   "@id": "https://www.rnk.com/#localbusiness"
 },
 "primaryImageOfPage": {
   "@id": "https://www.rnk.com/#logo"
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
   "name": "Contact",
   "item": "https://www.rnk.com/contact"
  }
 ]
},

{
 "@type": ["LocalBusiness","AutoRental"],
 "@id": "https://www.rnk.com/#localbusiness",
 "name": "RNK Rentals",
 "url": "https://www.rnk.com/",
 "telephone": "+91-22-43227777",
 "priceRange": "₹₹₹₹",
 "image": "https://www.rnk.com/RNK_LOGO.jpg",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
   "addressLocality": "Mumbai",
   "postalCode": "400025",
   "addressCountry": "IN"
 },
 "geo": {
   "@type": "GeoCoordinates",
   "latitude": "19.0176",
   "longitude": "72.8281"
 },
 "hasMap": "https://www.google.com/maps/search/?api=1&query=Suite+19,+Kaliandas+Udyog+Bhavan,+Century+Bazar,+Prabhadevi,+Mumbai+400025",
 "openingHoursSpecification": {
   "@type": "OpeningHoursSpecification",
   "dayOfWeek": [
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
     "Sunday"
   ],
   "opens": "00:00",
   "closes": "23:59"
 },
 "contactPoint": {
   "@type": "ContactPoint",
   "telephone": "+91-22-43227777",
   "contactType": "customer support",
   "email": "info@rnk.com",
   "areaServed": "IN",
   "availableLanguage": ["English","Hindi"]
 }
},

{
 "@type": "ContactPage",
 "@id": "https://www.rnk.com/contact/#contactpage",
 "url": "https://www.rnk.com/contact",
 "name": "Contact RNK Rentals",
 "mainEntity": {
   "@id": "https://www.rnk.com/#localbusiness"
 }
},

{
 "@type": "Service",
 "@id": "https://www.rnk.com/#service",
 "name": "Chauffeur Driven Luxury Car Rental",
 "description": "Premium chauffeur driven luxury car rental services across India for corporate travel, airport transfers, weddings and VIP movements.",
 "provider": {
   "@id": "https://www.rnk.com/#localbusiness"
 },
 "areaServed": {
   "@type": "Country",
   "name": "India"
 },
 "serviceType": [
   "Corporate Car Rental",
   "Airport Transfers",
   "Wedding Transportation",
   "VIP Movements",
   "Luxury Travel"
 ]
}

  ]
}


export default function Page() {
  return  <><Schema data={ContactSchema} /><ContactClient /></>;
}
