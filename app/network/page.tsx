

import { RnkFooter } from "@/components/footer";
import OurNetwork from "@/components/OurNetwork";
import Schema from "@/components/Schema";


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




const networkSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.rnk.com/our-network/#collectionpage",
      "url": "https://www.rnk.com/our-network",
      "name": "RNK Pan-India Car Rental Network",
      "description": "RNK Rentals operates a unified chauffeur-driven car rental network across major cities in India with consistent service standards nationwide.",
      "isPartOf": { "@id": "https://www.rnk.com/#website" },
      "mainEntity": { "@id": "https://www.rnk.com/our-network/#citylist" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/our-network/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rnk.com/" },
        { "@type": "ListItem", "position": 2, "name": "Our Network", "item": "https://www.rnk.com/our-network" }
      ]
    },

    {
      "@type": "Organization",
      "@id": "https://www.rnk.com/#organization",
      "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd."
    },

    {
      "@type": "ItemList",
      "@id": "https://www.rnk.com/our-network/#citylist",
      "name": "RNK Operational Cities in India",
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "isPartOf": { "@id": "https://www.rnk.com/our-network/#collectionpage" },
      "itemListElement": [
        { "position": 1, "@type": "ListItem", "item": { "@type": "Place", "name": "Bengaluru", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 2, "@type": "ListItem", "item": { "@type": "Place", "name": "Chennai", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 3, "@type": "ListItem", "item": { "@type": "Place", "name": "Mumbai", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 4, "@type": "ListItem", "item": { "@type": "Place", "name": "Lucknow", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 5, "@type": "ListItem", "item": { "@type": "Place", "name": "Hyderabad", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 6, "@type": "ListItem", "item": { "@type": "Place", "name": "Kolkata", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 7, "@type": "ListItem", "item": { "@type": "Place", "name": "Ahmedabad", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 8, "@type": "ListItem", "item": { "@type": "Place", "name": "Bhopal", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 9, "@type": "ListItem", "item": { "@type": "Place", "name": "Surat", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 10, "@type": "ListItem", "item": { "@type": "Place", "name": "Nagpur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 11, "@type": "ListItem", "item": { "@type": "Place", "name": "Chandigarh", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 12, "@type": "ListItem", "item": { "@type": "Place", "name": "Madurai", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 13, "@type": "ListItem", "item": { "@type": "Place", "name": "Visakhapatnam", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 14, "@type": "ListItem", "item": { "@type": "Place", "name": "Jamshedpur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 15, "@type": "ListItem", "item": { "@type": "Place", "name": "Jaipur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 16, "@type": "ListItem", "item": { "@type": "Place", "name": "Pune", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 17, "@type": "ListItem", "item": { "@type": "Place", "name": "Kanpur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 18, "@type": "ListItem", "item": { "@type": "Place", "name": "Agra", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 19, "@type": "ListItem", "item": { "@type": "Place", "name": "Indore", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 20, "@type": "ListItem", "item": { "@type": "Place", "name": "Jodhpur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 21, "@type": "ListItem", "item": { "@type": "Place", "name": "Amritsar", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 22, "@type": "ListItem", "item": { "@type": "Place", "name": "Patna", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 23, "@type": "ListItem", "item": { "@type": "Place", "name": "Ludhiana", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 24, "@type": "ListItem", "item": { "@type": "Place", "name": "Raipur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 25, "@type": "ListItem", "item": { "@type": "Place", "name": "Kochi", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 26, "@type": "ListItem", "item": { "@type": "Place", "name": "Chhatrapati Sambhajinagar", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 27, "@type": "ListItem", "item": { "@type": "Place", "name": "Bhubaneswar", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 28, "@type": "ListItem", "item": { "@type": "Place", "name": "Vijayawada", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 29, "@type": "ListItem", "item": { "@type": "Place", "name": "Kota", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 30, "@type": "ListItem", "item": { "@type": "Place", "name": "Vadodara", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 31, "@type": "ListItem", "item": { "@type": "Place", "name": "Nashik", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 32, "@type": "ListItem", "item": { "@type": "Place", "name": "Thiruvananthapuram", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 33, "@type": "ListItem", "item": { "@type": "Place", "name": "Varanasi", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 34, "@type": "ListItem", "item": { "@type": "Place", "name": "Ranchi", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 35, "@type": "ListItem", "item": { "@type": "Place", "name": "Meerut", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 36, "@type": "ListItem", "item": { "@type": "Place", "name": "Gwalior", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 37, "@type": "ListItem", "item": { "@type": "Place", "name": "Faridabad", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 38, "@type": "ListItem", "item": { "@type": "Place", "name": "Udaipur", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 39, "@type": "ListItem", "item": { "@type": "Place", "name": "Mysuru", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 40, "@type": "ListItem", "item": { "@type": "Place", "name": "Prayagraj", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 41, "@type": "ListItem", "item": { "@type": "Place", "name": "Guwahati", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 42, "@type": "ListItem", "item": { "@type": "Place", "name": "Rajkot", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 43, "@type": "ListItem", "item": { "@type": "Place", "name": "Coimbatore", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 44, "@type": "ListItem", "item": { "@type": "Place", "name": "New Delhi", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 45, "@type": "ListItem", "item": { "@type": "Place", "name": "Dehradun", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } },
        { "position": 46, "@type": "ListItem", "item": { "@type": "Place", "name": "Aligarh", "address": { "@type": "PostalAddress", "addressCountry": "IN" } } }
      ]
    }
  ]
};



export default function () {
  return (
    <main className="bg-black text-white min-h-screen">
    <Schema data={networkSchema} />
     <OurNetwork />
     <RnkFooter />
    </main>
  );
}
