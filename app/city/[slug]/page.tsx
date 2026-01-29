// app/city/[slug]/page.tsx

import { Metadata } from "next";
import CityPageContent from "@/components/city/CityPageContent";

type CityPageParams = {
  slug: string;
};

// Convert "new-delhi" → "New Delhi"
function formatCityName(slug: string | undefined) {
  if (!slug) return "";
  return decodeURIComponent(slug)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// 🔥 SEO METADATA (runs on server)
export async function generateMetadata({
  params,
}: {
  params: Promise<CityPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cityName = formatCityName(slug);

  const title = `Luxury Car Rental in ${cityName} | RNK Rentals`;
  const description = `Book luxury chauffeur-driven car rental services in ${cityName} for corporate travel, airport transfers, events and VIP movements.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.rnk.com/city/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.rnk.com/city/${slug}`,
      siteName: "RNK Rentals",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ✅ PAGE RENDER (NO SEO HERE)
export default async function CityPage({
  params,
}: {
  params: Promise<CityPageParams>;
}) {
  const { slug } = await params;
  const cityName = formatCityName(slug);

  return <CityPageContent cityName={cityName} slug={slug} />;
}
