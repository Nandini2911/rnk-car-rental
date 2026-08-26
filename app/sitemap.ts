import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blog";
import { FLEET_CARS } from "@/lib/fleet-data";

const BASE_URL = "https://www.rnk.com";

/**
 * Safely encodes dynamic URL slugs.
 * Prevents XML errors caused by &, spaces, #, ?, apostrophes, etc.
 */
function encodeSlug(slug: string): string {
  return slug
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

/**
 * Safely converts a date value.
 * Prevents invalid dates from breaking sitemap generation.
 */
function getValidDate(value?: string): Date | undefined {
  if (!value) return undefined;

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

/**
 * Main static website pages.
 */
const staticPages = [
  "",
  "/about",
  "/why-us",
  "/network",
  "/contact",
  "/faq",
  "/fleet",
  "/blog",
];

/**
 * RNK service slugs.
 */
const services = [
  "corporate-car-rental",
  "airport-railway-transfers",
  "luxury-travel",
  "hotel-operations",
  "vacation-rentals",
  "vip-movements",
  "long-term-car-rental",
  "event-wedding-transport",
];

/**
 * RNK city-page slugs.
 */
const cities = [
  "bengaluru",
  "chennai",
  "mumbai",
  "lucknow",
  "hyderabad",
  "kolkata",
  "ahmedabad",
  "bhopal",
  "surat",
  "nagpur",
  "chandigarh",
  "madurai",
  "visakhapatnam",
  "jamshedpur",
  "jaipur",
  "pune",
  "kanpur",
  "agra",
  "indore",
  "jodhpur",
  "amritsar",
  "patna",
  "ludhiana",
  "raipur",
  "kochi",
  "chhatrapati-sambhajinagar",
  "bhubaneswar",
  "vijayawada",
  "kota",
  "vadodara",
  "nashik",
  "thiruvananthapuram",
  "varanasi",
  "ranchi",
  "meerut",
  "gwalior",
  "faridabad",
  "udaipur",
  "mysuru",
  "prayagraj",
  "guwahati",
  "rajkot",
  "coimbatore",
  "new-delhi",
  "dehradun",
  "aligarh",
];

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * getAllBlogs() already excludes future-dated scheduled blogs.
   */
  const blogs = getAllBlogs();

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((path) => {
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      "monthly";

    if (path === "") {
      priority = 1;
      changeFrequency = "weekly";
    }

    if (path === "/fleet" || path === "/blog") {
      priority = 0.9;
      changeFrequency = "weekly";
    }

    return {
      url: `${BASE_URL}${path}`,
      changeFrequency,
      priority,
    };
  });

  const serviceUrls: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/services/${encodeSlug(slug)}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const fleetUrls: MetadataRoute.Sitemap = FLEET_CARS.map((car) => ({
    url: `${BASE_URL}/fleet/${encodeSlug(car.id)}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityUrls: MetadataRoute.Sitemap = cities.map((slug) => ({
    url: `${BASE_URL}/city/${encodeSlug(slug)}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog) => {
    const lastModified = getValidDate(blog.date);

    return {
      url: `${BASE_URL}/blog/${encodeSlug(blog.slug)}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [
    ...staticUrls,
    ...serviceUrls,
    ...fleetUrls,
    ...cityUrls,
    ...blogUrls,
  ];
}