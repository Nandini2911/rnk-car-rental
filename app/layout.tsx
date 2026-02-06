import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rnk.com"),

  title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",
  description:
    "RNK Rentals offers luxury chauffeur-driven car rental services across 170+ cities in India. Trusted since 1969 for corporate travel, airport transfers, VIP movements, and weddings.",

  verification: {
    google: "jEJ-LO-XUzsR7LH9AAJZylIx16lS6GkhpoB8ixplyBc",
  },

  alternates: {
    canonical: "https://www.rnk.com/",
  },

  openGraph: {
    title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",
    description:
      "Premium chauffeur-driven car rental across India for corporate travel, airport transfers, VIP movements and weddings. Serving 170+ cities since 1969.",
    url: "https://www.rnk.com/",
    siteName: "RNK - Ramniranjan Kedia Rent A Car Private Limited",
    images: [
      {
        url: "/og-home-page.jpg",
        width: 1200,
        height: 630,
        alt: "RNK Rentals Luxury Chauffeur Driven Car Fleet",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Rental & Chauffeur Service in India | RNK Rentals",
    description:
      "Premium chauffeur-driven luxury car rental across India. Trusted since 1969 for corporate, airport, VIP and wedding travel.",
    images: ["/twitter-home-page.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} bg-white text-black`}
      >
        {/* ✅ Google Tag Manager (script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWP46VPT');
          `}
        </Script>

        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWP46VPT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <main className="min-h-screen bg-white text-black">{children}</main>

        <WhatsAppButton />
      </body>
    </html>
  );
}
