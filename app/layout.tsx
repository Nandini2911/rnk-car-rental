import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import { ReactNode } from "react";

export const metadata = {
  title: "RNK - RAMNIRANJAN KEDIA RENT A CAR PVT LTD ",
  description: "Luxury Car Rental Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWP46VPT');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      {/* 👇 Added suppressHydrationWarning here */}
      <body suppressHydrationWarning className="bg-white text-black">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWP46VPT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
