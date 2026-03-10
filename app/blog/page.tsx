import BlogClient from "@/components/blog/BlogClient";
import { getAllBlogs } from "@/lib/blog";

export const metadata = {
  title: "Car Rental Blog | Travel & Luxury Car Rental Guides by RNK Rentals",
  description:
    "Explore expert guides on car rentals, airport transfers, corporate travel, wedding transport, and luxury chauffeur services across India from RNK Rentals.",
  keywords: [
    "car rental blog india",
    "luxury car rental guides",
    "airport transfer tips india",
    "chauffeur driven car rental guide",
    "corporate travel car service india",
    "wedding car rental guide india",
    "travel tips with car rental india",
    "luxury car rental insights",
    "rnk rentals blog",
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
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.rnk.com/blog",
    title: "RNK Rentals Blog | Car Rental & Luxury Travel Insights",
    description:
      "Expert travel insights and practical guides on car rentals, chauffeur services, airport transfers, corporate travel, and luxury transportation across India.",
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
    title: "RNK Rentals Blog | Car Rental & Travel Guides",
    description:
      "Learn about airport transfers, corporate car rentals, wedding transport, and luxury chauffeur services with expert guides from RNK Rentals.",
    images: ["/twitter_blog_page.webp"],
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs(); // ✅ fs safe (server)


  return <BlogClient blogs={blogs} />;
}
