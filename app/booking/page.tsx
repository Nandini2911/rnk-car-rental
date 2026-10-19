import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";
import BookingExperience from "@/components/BookingExperience";


export const metadata: Metadata = {
  title: "Book Premium Car Rental | RNK",
  description:
    "Book premium chauffeur-driven cars with RNK for airport transfers, corporate travel, city rentals and outstation journeys.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#f4efe8]">
      <NavBar />

      <BookingExperience />

      <RnkFooter />
    </div>
  );
}