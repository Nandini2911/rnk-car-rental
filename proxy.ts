import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const exactRedirects: Record<string, string> = {
  "/Fleet": "/fleet",

  "/PrivacyPolicy": "/privacy-policy",

  "/blog/How-luxury-car-rental-works-in-india":
    "/blog/how-luxury-car-rental-works-in-india",

  "/blog/vip-celebrity-airport-movements-in-India":
    "/blog/vip-celebrity-airport-movements-in-india",

  "/blog/family-road-trips-in-India-with-premium-vans":
    "/blog/family-road-trips-in-india-with-premium-vans",

  "/blog/road-trip-packing-list-for-Luxury-travelers":
    "/blog/road-trip-packing-list-for-luxury-travelers",

  "/blog/golden-triangle-luxury-road-trip-delhi-agra-Jaipur":
    "/blog/golden-triangle-luxury-road-trip-delhi-agra-jaipur",

  "/blog/Rolls-Royce wedding-entry-ideas-for-modern-couples":
    "/blog/rolls-royce-wedding-entry-ideas-for-modern-couples",

  "/blog/Corporate Retreat Transportation Guide for Mumbai & Karjat":
    "/blog/corporate-retreat-transportation-guide-for-mumbai-and-karjat",
};

const retiredBlogPaths = new Set([
  "/blogs/the benefits of hiring a chauffeur service for your luxury car rental",
  "/blogs/key factors to consider when choosing a luxury car rental service",
  "/blogs/top 5 must-experience road trips in india",
]);

export function proxy(request: NextRequest) {
  const originalPath = request.nextUrl.pathname;
  let decodedPath = originalPath;

  try {
    decodedPath = decodeURIComponent(originalPath);
  } catch {
    return NextResponse.next();
  }

  // Match old URLs with or without a trailing slash.
  const lookupPath =
    decodedPath === "/"
      ? "/"
      : decodedPath.replace(/\/+$/, "");

  const destination = Object.prototype.hasOwnProperty.call(
    exactRedirects,
    lookupPath,
  )
    ? exactRedirects[lookupPath]
    : undefined;

  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;

    return NextResponse.redirect(url, 301);
  }

  const normalizedOldPath = lookupPath
    .replace(/\s+/g, " ")
    .toLowerCase();

  if (retiredBlogPaths.has(normalizedOldPath)) {
    const url = request.nextUrl.clone();
    url.pathname = "/blog";

    return NextResponse.redirect(url, 301);
  }

  // Remove trailing slashes from other page URLs.
  if (
    originalPath !== "/" &&
    originalPath.endsWith("/") &&
    !originalPath.startsWith("/api/") &&
    !originalPath.startsWith("/_next/") &&
    !originalPath.includes(".")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = originalPath.replace(/\/+$/, "");

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api(?:/|$)|_next(?:/|$)|.*\\..*).*)",
  ],
};