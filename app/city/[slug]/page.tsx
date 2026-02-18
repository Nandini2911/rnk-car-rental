import type { Metadata } from "next";
import CityPageContent from "@/components/city/CityPageContent";
import Schema from "@/components/Schema";

type Props = {
  params: Promise<{ slug: string }>;
};

const formatCity = (slug: string) =>
  slug.charAt(0).toUpperCase() + slug.slice(1);

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = formatCity(slug);
  const url = `https://www.rnk.com/city/${slug}`;

  return {
    title: `Luxury Car Rental in ${city} | Chauffeur Service in ${city} | RNK Rentals`,
    description: `Premium chauffeur-driven luxury car rental in ${city}. Airport transfers, corporate travel, VIP movements & wedding transport by RNK. Trusted since 1969.`,

    alternates: { canonical: url },

    openGraph: {
      title: `Luxury Car Rental in ${city} | RNK Rentals`,
      description: `Book premium chauffeur-driven car rental services in ${city}.`,
      url,
      siteName: "RNK Rentals",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://www.rnk.com/og-city.jpg",
          width: 1200,
          height: 630,
          alt: `Luxury Car Rental in ${city}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `Luxury Car Rental in ${city} | RNK Rentals`,
      description: `Premium chauffeur-driven services in ${city}.`,
      images: ["https://www.rnk.com/og-city.jpg"],
    },

    robots: { index: true, follow: true },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const cityName = formatCity(slug);
  const url = `https://www.rnk.com/city/${slug}`;

  return (
    <>
      {/* Service Schema */}
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Luxury Car Rental in ${cityName}`,
          provider: {
            "@type": "Organization",
            name: "RNK Rentals",
            url: "https://www.rnk.com",
          },
          areaServed: {
            "@type": "City",
            name: cityName,
          },
        }}
      />

      {/* Local Business */}
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `RNK Rentals - ${cityName}`,
          url,
          telephone: "+91 9167977799",
          address: {
            "@type": "PostalAddress",
            addressLocality: cityName,
            addressCountry: "IN",
          },
        }}
      />

      {/* Breadcrumb */}
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.rnk.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Our Network",
              item: "https://www.rnk.com/network",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: cityName,
              item: url,
            },
          ],
        }}
      />

      <CityPageContent cityName={cityName} slug={slug} />
    </>
  );
}
