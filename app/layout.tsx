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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      
      {/* ✅ GTM Script must be in HEAD */}
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MWP46VPT');
          `}
        </Script>
      </head>

      <body
        suppressHydrationWarning
        className={`${playfair.variable} bg-white text-black`}
      >
        {/* ✅ GTM Noscript FIRST in body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWP46VPT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <main className="min-h-screen">{children}</main>

        <WhatsAppButton />
      </body>
    </html>
  );
}