// app/city/[slug]/page.tsx

import { Metadata } from "next";
import CityPageContent from "@/components/city/CityPageContent";

type CityPageParams = {
  slug: string;
};
function getCitySchema(cityName: string, slug: string) {
  const baseUrl = "https://www.rnk.com";
  const cityUrl = `${baseUrl}/city/${slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "WebPage",
        "@id": `${cityUrl}#webpage`,
        "url": cityUrl,
        "name": `Luxury Car Rental in ${cityName} | RNK Rentals`,
        "description": `Book premium chauffeur-driven car rental services in ${cityName} for corporate travel, airport transfers, weddings, events and VIP movements.`,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "about": {
          "@id": `${cityUrl}#service`
        },
        "breadcrumb": {
          "@id": `${cityUrl}#breadcrumb`
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${cityUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Our Network",
            "item": `${baseUrl}/network`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": cityName,
            "item": cityUrl
          }
        ]
      },

      {
        "@type": "Service",
        "@id": `${cityUrl}#service`,
        "name": `Luxury Chauffeur-Driven Car Rental in ${cityName}`,
        "serviceType": "Chauffeur-Driven Car Rental",
        "description": `Premium chauffeur-driven car rental services in ${cityName} by RNK Rentals. Serving corporates, families, weddings, events and VIP movements with consistent fleet standards and professional chauffeurs.`,
        "provider": {
          "@id": `${baseUrl}/#organization`
        },
        "areaServed": {
          "@type": "City",
          "name": cityName
        }
      }

    ]
  };
}


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

  const schema = getCitySchema(cityName, slug);

  return (
    <>
      {/* ✅ SCHEMA — SERVER SIDE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ✅ CLIENT UI */}
      <CityPageContent cityName={cityName} slug={slug} />
    </>
  );
}
