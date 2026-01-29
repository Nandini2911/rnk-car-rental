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
        url: "https://www.rnk.com/assets/images/rnk-fleet-og.jpg",
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
    images: ["https://www.rnk.com/assets/images/rnk-fleet-og.jpg"],
  },
};

const fleetSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.rnk.com/fleet/#collectionpage",
      "url": "https://www.rnk.com/fleet",
      "name": "RNK Luxury Rental Fleet",
      "description": "Explore RNK’s premium chauffeur-driven fleet including luxury cars, SUVs, vans and coaches for corporate travel, weddings, events and VIP movements across India.",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "publisher": {
        "@id": "https://www.rnk.com/#organization"
      },
      "mainEntity": {
        "@id": "https://www.rnk.com/fleet/#vehicle-list"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rnk.com/fleet/#breadcrumb",
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
          "name": "Fleet",
          "item": "https://www.rnk.com/fleet"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.rnk.com/fleet/#vehicle-list",
      "name": "RNK Chauffeur-Driven Vehicle Fleet",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "Vehicle", "name": "Rolls Royce", "vehicleSeatingCapacity": "4", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "Vehicle", "name": "Hummer", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 3, "item": { "@type": "Vehicle", "name": "Mercedes Benz S Class", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 4, "item": { "@type": "Vehicle", "name": "Mercedes Benz GLS", "vehicleSeatingCapacity": "6", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 5, "item": { "@type": "Vehicle", "name": "Mercedes Benz V Class", "vehicleSeatingCapacity": "6", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 6, "item": { "@type": "Vehicle", "name": "Mercedes Benz GLE", "vehicleSeatingCapacity": "6", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 7, "item": { "@type": "Vehicle", "name": "Mercedes Benz E Class", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 8, "item": { "@type": "Vehicle", "name": "Toyota Camry", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 9, "item": { "@type": "Vehicle", "name": "Toyota Fortuner", "vehicleSeatingCapacity": "7", "numberOfDoors": 5, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 10, "item": { "@type": "Vehicle", "name": "Toyota Hycross", "vehicleSeatingCapacity": "7", "numberOfDoors": 5, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 11, "item": { "@type": "Vehicle", "name": "Toyota Crysta", "vehicleSeatingCapacity": "7", "numberOfDoors": 5, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 12, "item": { "@type": "Vehicle", "name": "BYD E6 Electric", "vehicleSeatingCapacity": "7", "numberOfDoors": 5, "fuelType": "Electric", "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 13, "item": { "@type": "Vehicle", "name": "Kia Carens", "vehicleSeatingCapacity": "7", "numberOfDoors": 5, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 14, "item": { "@type": "Vehicle", "name": "Maruti Ciaz", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 15, "item": { "@type": "Vehicle", "name": "Honda City", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 16, "item": { "@type": "Vehicle", "name": "Maruti Swift Dzire", "vehicleSeatingCapacity": "5", "numberOfDoors": 4, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 17, "item": { "@type": "Vehicle", "name": "Toyota Coaster", "vehicleSeatingCapacity": "14", "numberOfDoors": 1, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 18, "item": { "@type": "Vehicle", "name": "Toyota Commuter", "vehicleSeatingCapacity": "10", "numberOfDoors": 1, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 19, "item": { "@type": "Vehicle", "name": "Force Urbania", "vehicleSeatingCapacity": "15", "numberOfDoors": 1, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 20, "item": { "@type": "Vehicle", "name": "Volvo 9600 Coach", "vehicleSeatingCapacity": "43", "numberOfDoors": 1, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 21, "item": { "@type": "Vehicle", "name": "43 Seater Bus", "vehicleSeatingCapacity": "43", "numberOfDoors": 1, "vehicleConfiguration": "Chauffeur Driven" } },
        { "@type": "ListItem", "position": 22, "item": { "@type": "Vehicle", "name": "27 Seater Bus", "vehicleSeatingCapacity": "27", "numberOfDoors": 1, "vehicleConfiguration": "Chauffeur Driven" } }
      ]
    }
  ]
}
export default function FleetPage() {
  return  <><Schema data={fleetSchema} /><Fleet /></>;
}
