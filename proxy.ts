import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/Fleet") {
    const url = request.nextUrl.clone();
    url.pathname = "/fleet";

    return NextResponse.redirect(url, 301);
  }

  if (
    pathname ===
      "/blog/Rolls-Royce%20wedding-entry-ideas-for-modern-couples" ||
    pathname ===
      "/blog/Rolls-Royce wedding-entry-ideas-for-modern-couples"
  ) {
    const url = request.nextUrl.clone();
    url.pathname =
      "/blog/rolls-royce-wedding-entry-ideas-for-modern-couples";

    return NextResponse.redirect(url, 301);
  }
const corporateRetreatPaths = [
  "/blog/Corporate%20Retreat%20Transportation%20Guide%20for%20Mumbai%20&%20Karjat",
  "/blog/Corporate%20Retreat%20Transportation%20Guide%20for%20Mumbai%20%26%20Karjat",
];
if (pathname === "/blog/family-road-trips-in-India-with-premium-vans") {
  const url = request.nextUrl.clone();
  url.pathname = "/blog/family-road-trips-in-india-with-premium-vans";

  return NextResponse.redirect(url, 301);
}
if (pathname === "/blog/road-trip-packing-list-for-Luxury-travelers") {
  const url = request.nextUrl.clone();
  url.pathname = "/blog/road-trip-packing-list-for-luxury-travelers";

  return NextResponse.redirect(url, 301);
}
if (pathname === "/blog/golden-triangle-luxury-road-trip-delhi-agra-Jaipur") {
  const url = request.nextUrl.clone();
  url.pathname = "/blog/golden-triangle-luxury-road-trip-delhi-agra-jaipur";

  return NextResponse.redirect(url, 301);
}
if (pathname === "/PrivacyPolicy") {
  const url = request.nextUrl.clone();
  url.pathname = "/privacy-policy";

  return NextResponse.redirect(url, 301);
}
if (pathname === "/blog/How-luxury-car-rental-works-in-india") {
  const url = request.nextUrl.clone();
  url.pathname = "/blog/how-luxury-car-rental-works-in-india";

  return NextResponse.redirect(url, 301);
}
if (pathname === "/blog/vip-celebrity-airport-movements-in-India") {
  const url = request.nextUrl.clone();
  url.pathname = "/blog/vip-celebrity-airport-movements-in-india";

  return NextResponse.redirect(url, 301);
}
if (corporateRetreatPaths.includes(pathname)) {
  const url = request.nextUrl.clone();
  url.pathname =
    "/blog/corporate-retreat-transportation-guide-for-mumbai-and-karjat";

  return NextResponse.redirect(url, 301);
}
  return NextResponse.next();
}

export const config = {
  matcher: ["/Fleet", "/fleet", "/blog/:path*", "/PrivacyPolicy",
    "/privacy-policy",],
};