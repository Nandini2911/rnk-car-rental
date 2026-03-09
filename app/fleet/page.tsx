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
        url: "/og-fleet.jpg",
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
    images: ["/twitter-fleet.jpg"],
  },
};

const fleetSchema = 
{
  "@context": "https://schema.org",
  "@graph": [

{
 "@type": "WebPage",
 "@id": "https://www.rnk.com/fleet/#webpage",
 "url": "https://www.rnk.com/fleet",
 "name": "RNK Premium Fleet | Luxury Chauffeur Driven Cars & Coaches",
 "description": "Explore RNK's premium fleet including Rolls Royce, Mercedes Benz, SUVs, Sedans, Mini Vans and Luxury Coaches for corporate travel, weddings and VIP transport across India.",
 "isPartOf": {
   "@id": "https://www.rnk.com/#website"
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
 "@id": "https://www.rnk.com/fleet/#fleetlist",
 "name": "RNK Fleet Vehicles",
 "numberOfItems": 22,
 "itemListElement": [

{
 "@type": "ListItem",
 "position": 1,
 "name": "Rolls Royce"
},

{
 "@type": "ListItem",
 "position": 2,
 "name": "Hummer"
},

{
 "@type": "ListItem",
 "position": 3,
 "name": "Mercedes Benz S Class"
},

{
 "@type": "ListItem",
 "position": 4,
 "name": "Mercedes Benz GLS"
},

{
 "@type": "ListItem",
 "position": 5,
 "name": "Mercedes Benz V Class"
},

{
 "@type": "ListItem",
 "position": 6,
 "name": "Mercedes Benz GLE"
},

{
 "@type": "ListItem",
 "position": 7,
 "name": "Mercedes Benz E Class"
},

{
 "@type": "ListItem",
 "position": 8,
 "name": "Toyota Camry"
},

{
 "@type": "ListItem",
 "position": 9,
 "name": "Toyota Fortuner"
},

{
 "@type": "ListItem",
 "position": 10,
 "name": "Toyota Hycross"
},

{
 "@type": "ListItem",
 "position": 11,
 "name": "Toyota Crysta"
},

{
 "@type": "ListItem",
 "position": 12,
 "name": "BYD E6 Electric Vehicle"
},

{
 "@type": "ListItem",
 "position": 13,
 "name": "Kia Carens"
},

{
 "@type": "ListItem",
 "position": 14,
 "name": "Maruti Ciaz"
},

{
 "@type": "ListItem",
 "position": 15,
 "name": "Honda City"
},

{
 "@type": "ListItem",
 "position": 16,
 "name": "Maruti Swift Dzire"
},

{
 "@type": "ListItem",
 "position": 17,
 "name": "Toyota Coaster"
},

{
 "@type": "ListItem",
 "position": 18,
 "name": "Toyota Commuter"
},

{
 "@type": "ListItem",
 "position": 19,
 "name": "Force Urbania"
},

{
 "@type": "ListItem",
 "position": 20,
 "name": "Volvo 9600 Coach"
},

{
 "@type": "ListItem",
 "position": 21,
 "name": "43 Seater Bus"
},

{
 "@type": "ListItem",
 "position": 22,
 "name": "27 Seater Bus"
}

 ]
},

{
 "@type": "Service",
 "@id": "https://www.rnk.com/#fleetservice",
 "serviceType": "Luxury Chauffeur Driven Fleet Rental",
 "provider": {
   "@type": "Organization",
   "name": "RNK Rentals",
   "url": "https://www.rnk.com"
 },
 "areaServed": {
   "@type": "Country",
   "name": "India"
 }
},

{
 "@type": "FAQPage",
 "@id": "https://www.rnk.com/fleet/#faq",
 "mainEntity": [

{
 "@type": "Question",
 "name": "What types of vehicles are available in the RNK fleet?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "RNK offers a premium fleet including Rolls Royce, Mercedes Benz, SUVs, Sedans, Mini Vans and Luxury Coaches for corporate travel, weddings and VIP movements."
 }
},

{
 "@type": "Question",
 "name": "Can I choose a specific vehicle for my rental?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "Yes, clients can request specific vehicles from the RNK fleet depending on availability and service requirements."
 }
},

{
 "@type": "Question",
 "name": "Do you provide chauffeur driven vehicles?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "All RNK fleet vehicles are chauffeur driven to ensure safety, professionalism and a premium travel experience."
 }
},

{
 "@type": "Question",
 "name": "How do I book a vehicle from the RNK fleet?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "You can book a vehicle by contacting RNK directly via phone, email or the booking form on the website."
 }
}

 ]
}

  ]
}      
    

      
export default function FleetPage() {
  return  <><Schema data={fleetSchema} /><Fleet /></>;
}
