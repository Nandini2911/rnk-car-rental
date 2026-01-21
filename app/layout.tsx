import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

import { ReactNode } from "react";

export const metadata = {
  title: "RNK Rentals",
  description: "Luxury Car Rental Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* 👇 Added suppressHydrationWarning here */}
      <body suppressHydrationWarning className="bg-white text-black">
      
        <main className="min-h-screen">{children}</main>
          <WhatsAppButton />
      </body>
    </html>
  );
}
