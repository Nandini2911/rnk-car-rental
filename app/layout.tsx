import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import Script from "next/script";
import { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWP46VPT');
          `}
        </Script>
      </head>

      <body
        suppressHydrationWarning
        className={`${playfair.variable} bg-white text-black`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWP46VPT"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <main className="min-h-screen">{children}</main>

        <WhatsAppButton />
      </body>
    </html>
  );
}