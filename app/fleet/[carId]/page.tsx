import Script from "next/script";
import { getCarById, CATEGORIES } from "@/lib/fleet-data";
import type { Metadata } from "next";
import CarDetailPage from "./CarDetailClient";

type Props = {
  params: Promise<{ carId: string }>; // 👈 FIX
};

// ✅ METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { carId } = await params; // 👈 FIX

  const car = getCarById(carId);

  if (!car) {
    return {
      title: "Vehicle Not Found | RNK Rentals",
      description: "Explore luxury car rentals across India.",
    };
  }

  const category = CATEGORIES.find((c) => c.id === car.category);

  const title = `${car.name} Chauffeur-Driven Car Rental | RNK Rentals`;
  const description = `Hire ${car.name} with chauffeur service for ${category?.label || "luxury travel"}, weddings, airport transfers and VIP movement.`;

  const url = `https://www.rnk.com/fleet/${car.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },

    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `https://www.rnk.com${car.image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function getCarSchema(car: any, category: any) {
  const baseUrl = "https://www.rnk.com";
  const pageUrl = `${baseUrl}/fleet/${car.id}`;
  const imageUrl = `${baseUrl}${car.image}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.rnk.com/#organization",
        name: "RNK Rentals",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${car.name} Chauffeur-Driven Car Rental`,
        description: `Hire ${car.name} with chauffeur service across India.`,
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: `${car.name} Chauffeur-Driven Rental`,
        image: imageUrl,
        description: `Luxury ${car.name} with chauffeur included.`,
        brand: {
          "@type": "Brand",
          name: car.name,
        },
        offers: {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: "INR",
          price: "25000",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };
}
// ✅ PAGE
export default async function Page({ params }: Props) {
  const { carId } = await params;

  const car = getCarById(carId);
  const category = CATEGORIES.find((c) => c.id === car?.category);

  if (!car) return null;

  const schema = getCarSchema(car, category);

  return (
    <>
      {/* ✅ SCHEMA HERE */}
      <Script
        id="car-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ✅ UI */}
      <CarDetailPage carId={carId} />
    </>
  );
}