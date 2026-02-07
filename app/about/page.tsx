
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
  title: "About RNK Rentals | Luxury Chauffeur Car Rental Since 1969",
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


const AboutSchema={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.rnk.com/about/#aboutpage",
      "url": "https://www.rnk.com/about",
      "name": "About RNK Rentals",
      "description": "RNK Rentals is a luxury chauffeur-driven car rental company founded in 1969 in Mumbai, now operating across 170+ cities in India and trusted by corporates, government bodies, and premium travelers.",
      "isPartOf": {
        "@id": "https://www.rnk.com/#website"
      },
      "mainEntity": {
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
      "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd."
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
