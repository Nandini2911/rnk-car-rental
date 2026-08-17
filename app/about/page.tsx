
import { AccoladesSection } from "@/components/About/AccoladesSection";
import { AccomplishmentsSection } from "@/components/About/AccomplishmentsSection";
import { CallToAction } from "@/components/About/CallToAction";
import { FAQSection } from "@/components/About/FAQSection";
import { HeritageSection } from "@/components/About/HeritageSection";
import { HeroSection } from "@/components/About/HeroSection";
import { TestimonialsSection } from "@/components/About/TestimonialsSection";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";
import Schema from "@/components/Schema";

export const metadata = {
  title: "About RNK Rentals | Luxury Car Rental Since 1969",
  description:
    "Learn about Ramniranjan Kedia Rent A Car Pvt. Ltd, a trusted luxury chauffeur-driven car rental company since 1969, operating across 170+ cities in India.",
  keywords: [
    "ramniranjan kedia rent a car",
    "rnk rentals history",
    "luxury car rental company india",
    "chauffeur driven car rental since 1969",
    "trusted car rental india",
  ],
  alternates: {
    canonical: "https://www.rnk.com/about",
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
    url: "https://www.rnk.com/about",
    title: "About Ramniranjan Kedia Rent A Car Pvt. Ltd",
    description:
      "Founded in 1969, Ramniranjan Kedia Rent A Car Pvt. Ltd delivers trusted luxury chauffeur-driven car rental services across India.",
    siteName: "Ramniranjan Kedia Rent A Car Pvt. Ltd",
    locale: "en_IN",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Legacy Since 1969",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ramniranjan Kedia Rent A Car Pvt. Ltd",
    description:
      "A legacy of luxury chauffeur-driven travel since 1969. Discover the journey of RNK Rentals.",
    images: ["/twitter-about.jpg"],
  },
};


const AboutSchema=
 {
  "@context": "https://schema.org",
  "@graph": [

{
 "@type": "AboutPage",
 "@id": "https://www.rnk.com/about/#aboutpage",
 "url": "https://www.rnk.com/about",
 "name": "About RNK Rentals",
 "description": "RNK Rentals is a luxury chauffeur driven car rental company founded in 1969 in Mumbai, operating across 170+ cities in India and trusted by corporates, government departments and global travellers.",
 "isPartOf": {
   "@id": "https://www.rnk.com/#website"
 },
 "about": {
   "@id": "https://www.rnk.com/#organization"
 }
},

{
 "@type": "BreadcrumbList",
 "@id": "https://www.rnk.com/about/#breadcrumb",
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
   "name": "About Us",
   "item": "https://www.rnk.com/about"
  }
 ]
},

{
 "@type": "Organization",
 "@id": "https://www.rnk.com/#organization",
 "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd",
 "alternateName": "RNK Rentals",
 "url": "https://www.rnk.com",
 "foundingDate": "1969",
 "logo": {
   "@type": "ImageObject",
   "url": "https://www.rnk.com/RNK_LOGO.jpg"
 },
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
   "addressLocality": "Mumbai",
   "postalCode": "400025",
   "addressCountry": "IN"
 },
 "sameAs": [
   "https://www.linkedin.com/company/rnk-rentals",
   "https://www.instagram.com/rnkrentals"
 ]
},

{
 "@type": "Person",
 "@id": "https://www.rnk.com/#ramniranjan-kedia",
 "name": "Ramniranjan Kedia",
 "jobTitle": "Founder",
 "worksFor": {
   "@id": "https://www.rnk.com/#organization"
 }
},

{
 "@type": "Person",
 "@id": "https://www.rnk.com/#kamal-kedia",
 "name": "Kamal Kedia",
 "jobTitle": "Co-Founder",
 "worksFor": {
   "@id": "https://www.rnk.com/#organization"
 }
},

{
 "@type": "FAQPage",
 "@id": "https://www.rnk.com/about/#faq",
 "mainEntity": [

{
 "@type": "Question",
 "name": "What types of cars does RNK Rentals offer?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "RNK Rentals offers a premium fleet including Rolls Royce, Mercedes Benz, SUVs, Sedans, Mini Vans and Luxury Coaches for corporate travel, weddings and VIP movements."
 }
},

{
 "@type": "Question",
 "name": "How can I book a vehicle with RNK Rentals?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "You can book a vehicle by contacting RNK Rentals through phone, email or the booking form available on the website."
 }
},

{
 "@type": "Question",
 "name": "Which cities does RNK Rentals operate in?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "RNK Rentals operates in more than 170 cities across India providing premium chauffeur driven transportation services."
 }
},

{
 "@type": "Question",
 "name": "Do you provide chauffeur services for VIP clients?",
 "acceptedAnswer": {
   "@type": "Answer",
   "text": "Yes, RNK Rentals provides professional chauffeur driven luxury vehicles for VIP movements, corporate travel and events."
 }
}

 ]
}

  ]
}


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

       <Schema data={AboutSchema} />
      <NavBar/>
      <HeroSection />
      <HeritageSection />
      <AccomplishmentsSection/>
      <AccoladesSection />
      <TestimonialsSection/>
      <CallToAction/>
      <FAQSection/>
      <RnkFooter />
    </main>
  );
}
