// components/CallButton.tsx

"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+919167977799"
      className="fixed bottom-28 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition hover:scale-110 hover:bg-red-700"
    >
      <Phone size={28} />
    </a>
  );
}