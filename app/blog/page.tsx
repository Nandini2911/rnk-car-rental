import BlogClient from "@/components/blog/BlogClient";
import Schema from "@/components/Schema";
import { getAllBlogs } from "@/lib/blog";

export const metadata = {
  title: "RNK Rentals Blog | Travel Tips, Luxury Car Rental & Airport Transfer Guides",

  description:
    "Explore expert guides, travel tips, and insights on luxury car rentals, airport transfers, corporate travel, wedding transportation, and chauffeur services across India.",

  keywords: [
    "luxury car rental blog india",
    "airport transfer guide india",
    "chauffeur service travel tips",
    "corporate car rental insights",
    "wedding car rental tips",
    "luxury transportation india",
    "car rental travel blog india",
    "RNK Rentals blog",
  ],

  alternates: {
    canonical: "https://www.rnk.com/blog",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.rnk.com/blog",
    title:
      "RNK Rentals Blog | Luxury Car Rental, Airport Transfer & Travel Guides",
    description:
      "Discover expert insights on luxury chauffeur-driven car rentals, airport transfers, corporate travel, wedding transportation, and premium travel experiences across India.",
    siteName: "RNK Rentals",
    locale: "en_IN",
    images: [
      {
        url: "/og_blog_page.webp",
        width: 1200,
        height: 630,
        alt: "RNK Rentals Blog – Luxury Car Rental & Travel Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "RNK Rentals Blog | Luxury Travel, Airport Transfers & Car Rental Guides",
    description:
      "Expert travel insights on luxury car rentals, chauffeur services, airport transfers, and corporate mobility across India.",
    images: ["/og_blog_page.webp"],
  },
};

const Aboutblog=
{
  "@context": "https://schema.org",
  "@graph": [

{
 "@type": "CollectionPage",
 "@id": "https://www.rnk.com/blog/#collectionpage",
 "url": "https://www.rnk.com/blog",
 "name": "RNK Rentals Blog | Travel & Car Rental Insights",
 "description": "Expert guides, travel tips and insights about luxury car rentals, airport transfers, corporate travel and wedding transportation across India.",
 "isPartOf": {
   "@id": "https://www.rnk.com/#website"
 },
 "about": {
   "@id": "https://www.rnk.com/#organization"
 }
},

{
 "@type": "BreadcrumbList",
 "@id": "https://www.rnk.com/blog/#breadcrumb",
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
   "name": "Blog",
   "item": "https://www.rnk.com/blog"
  }
 ]
},

{
 "@type": "Organization",
 "@id": "https://www.rnk.com/#organization",
 "name": "Ramniranjan Kedia Rent A Car Pvt. Ltd",
 "alternateName": "RNK Rentals",
 "url": "https://www.rnk.com/",
 "logo": {
   "@type": "ImageObject",
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
}

  ]
}

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <Schema data={Aboutblog} />
      <BlogClient blogs={blogs} />
    </>
  );
}
