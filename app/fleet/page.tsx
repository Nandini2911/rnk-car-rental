import Fleet from "@/components/Fleet";
import Schema from "@/components/Schema";




export const metadata = {
  title: "Luxury Chauffeur-Driven Car Fleet in India | RNK Rentals",
  description:
    "Explore RNK Rentals’ luxury car fleet including Rolls Royce, Mercedes, BMW, SUVs, sedans, vans and premium coaches for chauffeur-driven travel across India.",
  keywords: [
    "luxury car fleet india",
    "chauffeur driven car fleet",
    "premium car rental fleet",
    "rolls royce rental india",
    "mercedes benz car rental",
    "luxury bus and coach rental",
  ],
  alternates: {
    canonical: "https://www.rnk.com/fleet",
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
    url: "https://www.rnk.com/fleet",
    title: "Luxury Chauffeur-Driven Car Fleet in India | RNK Rentals",
    description:
      "From Rolls Royce and Mercedes-Benz to premium vans and coaches, explore RNK Rentals’ curated luxury fleet for chauffeur-driven travel across India.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "/og-fleet.webp",
        width: 1200,
        height: 630,
        alt: "RNK Luxury Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Fleet for Chauffeur-Driven Travel | RNK Rentals",
    description:
      "Explore RNK Rentals’ premium fleet of luxury cars, SUVs, vans and coaches for corporate travel, weddings, VIP movements and events across India.",
    images: ["/twitter-fleet.webp"],
  },
};

const fleetSchema = 
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
      "@id": "https://www.rnk.com/fleet/#webpage",
      "url": "https://www.rnk.com/fleet",
      "name": "Our Fleet - Premium Chauffeur-Driven Cars & Coaches | RNK Rentals",
      "description": "Explore RNK's premium fleet including Rolls Royce, Mercedes-Benz, BMW, Audi, SUVs, and luxury coaches. Curated for corporate travel, weddings, and VIP movements across India.",
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
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "parentOrganization": {
        "@id": "https://www.rnk.com/#organization"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://www.rnk.com/fleet/#fleetlist",
      "name": "RNK Premium Fleet Categories",
      "description": "A curated selection of luxury vehicles for every travel requirement.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Super Luxury Cars",
          "description": "Rolls Royce, Hummer, and top-tier luxury vehicles."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Luxury Cars",
          "description": "Mercedes Benz S Class, GLS, E Class, BMW, and Audi."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SUV / MUV",
          "description": "Toyota Fortuner, Hycross, Crysta, and Kia Carens."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Sedans",
          "description": "Toyota Camry, Honda City, Maruti Ciaz, and Swift Dzire."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Mini Vans",
          "description": "Mercedes Benz V Class, Toyota Commuter, and Urbania."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Coaches",
          "description": "Volvo 9600, 43 Seater Bus, and 27 Seater Bus."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rnk.com/fleet/#faq",
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


export default function FleetPage() {
  return  <><Schema data={fleetSchema} /><Fleet /></>;
}
