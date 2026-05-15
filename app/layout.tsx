import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import Script from "next/script";
import { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import CallButton from "@/components/CallButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
});

/* ✅ ADD THIS (Google Verification + SEO) */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtsworld.in"),

  verification: {
    google: "jEJ-LO-XUzsR7LH9AAJZylIx16lS6GkhpoB8ixplyBc",
  },

  title: {
    default: "Double Trouble Studio",
    template: "%s | Double Trouble Studio",
  },

  description:
    "Double Trouble Studio is a 360° branding, PR, digital marketing, events, and web execution agency.",

  openGraph: {
    type: "website",
    siteName: "Double Trouble Studio",
    url: "https://www.dtsworld.in",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} bg-white text-black`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DWPCLSDQKL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DWPCLSDQKL');
          `}
        </Script>

        <main className="min-h-screen">{children}</main>

        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}