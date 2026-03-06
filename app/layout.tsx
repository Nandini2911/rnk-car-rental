import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

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
      </body>
    </html>
  );
}