

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
        url: "/og-our-network_converted.webp",
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
    images: ["/twitter-our-network.webp"],
  },
};

const networkSchema = {
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
      "@id": "https://www.rnk.com/our-network/#webpage",
      "url": "https://www.rnk.com/our-network",
      "name": "Our Network - Pan-India Luxury Car Rental Coverage | RNK Rentals",
      "description": "RNK Rentals offers a national network of chauffeur-driven luxury car rentals across 170+ cities in India. One contact for centralized billing and uniform service standards.",
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
      "@type": "LocalBusiness",
      "@id": "https://www.rnk.com/#localbusiness",
      "name": "RNK Rentals",
      "url": "https://www.rnk.com/",
      "telephone": "+91-22-43227777",
      "priceRange": "₹₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
        "addressLocality": "Mumbai",
        "postalCode": "400025",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "City", "name": "Chennai" },
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Lucknow" },
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "City", "name": "Bhopal" },
        { "@type": "City", "name": "Surat" },
        { "@type": "City", "name": "Nagpur" },
        { "@type": "City", "name": "Chandigarh" },
        { "@type": "City", "name": "Madurai" },
        { "@type": "City", "name": "Visakhapatnam" },
        { "@type": "City", "name": "Jamshedpur" },
        { "@type": "City", "name": "Jaipur" },
        { "@type": "City", "name": "Pune" },
        { "@type": "City", "name": "Kanpur" },
        { "@type": "City", "name": "Agra" },
        { "@type": "City", "name": "Indore" },
        { "@type": "City", "name": "Jodhpur" },
        { "@type": "City", "name": "Amritsar" },
        { "@type": "City", "name": "Patna" },
        { "@type": "City", "name": "Ludhiana" },
        { "@type": "City", "name": "Raipur" },
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Chhatrapati Sambhajinagar" },
        { "@type": "City", "name": "Bhubaneswar" },
        { "@type": "City", "name": "Vijayawada" },
        { "@type": "City", "name": "Kota" },
        { "@type": "City", "name": "Vadodara" },
        { "@type": "City", "name": "Nashik" },
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "City", "name": "Varanasi" },
        { "@type": "City", "name": "Ranchi" },
        { "@type": "City", "name": "Meerut" },
        { "@type": "City", "name": "Gwalior" },
        { "@type": "City", "name": "Faridabad" },
        { "@type": "City", "name": "Udaipur" },
        { "@type": "City", "name": "Mysuru" },
        { "@type": "City", "name": "Prayagraj" },
        { "@type": "City", "name": "Guwahati" },
        { "@type": "City", "name": "Rajkot" },
        { "@type": "City", "name": "Coimbatore" },
        { "@type": "City", "name": "New Delhi" },
        { "@type": "City", "name": "Dehradun" },
        { "@type": "City", "name": "Aligarh" },
        { "@type": "City", "name": "Jammu" },
        { "@type": "City", "name": "Srinagar" }
      ],
      "parentOrganization": {
        "@id": "https://www.rnk.com/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.rnk.com/our-network/#service",
      "name": "Pan-India Chauffeur-Driven Network",
      "description": "A unified national network providing consistent luxury car rental experiences across 170+ cities in India. Features include centralized billing, uniform chauffeur training, and GPS-enabled secure travel.",
      "provider": {
        "@id": "https://www.rnk.com/#localbusiness"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": [
        "Pan-India Corporate Mobility",
        "National Wedding Transport Coordination",
        "Multi-City VIP Movement",
        "Airport Coverage in Business Hubs",
        "Centralized Billing Car Rental"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/our-network/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of vehicles are available in the fleet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RNK offers a diverse fleet including Super Luxury cars (Rolls Royce), Luxury Sedans (Mercedes, BMW), SUVs (Fortuner, Crysta), Mini Vans (V-Class), and Premium Coaches (Volvo)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose a specific vehicle for my rental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can browse our fleet by category and request specific models like the Mercedes S-Class or Toyota Hycross based on your preference and availability."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer chauffeur services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all vehicles in the RNK fleet are chauffeur-driven. Our chauffeurs are professionally trained to deliver the RNK standard of safety and etiquette."
          }
        },
        {
          "@type": "Question",
          "name": "How do I make a reservation for a vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can make a reservation by clicking 'Book Now' on our website, calling us at 022-43227777, or emailing info@rnk.com with your itinerary."
          }
        }
      ]
    }
  ]
}



export default function () {
  return (
    <main className="bg-black text-white min-h-screen">
    <Schema data={networkSchema} />
     <OurNetwork />
     <RnkFooter />
    </main>
  );
}
