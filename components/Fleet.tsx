"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {CATEGORIES,FLEET_CARS,type FleetCategoryId,} from "@/lib/fleet-data";
import { RnkFooter } from "./footer";
import { NavBar } from "./NavBar";
import { ServicesSection } from "./home/ServicesSection";
import { ContactUs } from "./why-us/ContactUs";
import FleetFAQ from "./why-us/FleetFAQ";

export default function Fleet() {
  const [activeCategory, setActiveCategory] =
    useState<FleetCategoryId>("all");

    
  const category = CATEGORIES.find((c) => c.id === activeCategory)!;
const cars =
  activeCategory === "all"
    ? FLEET_CARS
    : FLEET_CARS.filter((car) => car.category === activeCategory);


  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar/>
      
      {/* HERO (BLACK + BG IMAGE + SLIDE UP TEXT) */}
 <section
      className="
        relative bg-black border-b border-white/10 overflow-hidden
        min-h-[60vh]
        sm:min-h-[65vh]
        md:min-h-[75vh]
        lg:min-h-screen
        xl:min-h-screen
        2xl:min-h-screen
        flex items-center justify-center
      "
    >
      {/* Background Image */}
      <motion.img
        src="/RollsRoyals_1.webp"
        alt="RNK premium fleet"
        className="
          absolute inset-0 w-full h-full
          object-cover
          object-[center_top]
          sm:object-center
        "
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Dark Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        {/* Breadcrumb */}
        <motion.div
          className="text-xs sm:text-sm md:text-lg text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/" className="hover:text-red-900 transition">
            Home
          </Link>
          <span className="mx-2 text-white">||</span>
          <span className="text-white">Fleet</span>
        </motion.div>

        {/* Heading + Content */}
        <motion.div
          className="flex flex-col gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="max-w-2xl mx-auto">
            <h1 className=" font-semibold tracking-tight
            text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]">
              <span className="text-red-900">Our Fleet</span>, Your Standard.
            </h1>

            <p className="mt-4 text-sm sm:text-[15px] text-white/90 max-w-xl mx-auto">
              From Rolls Royce and Mercedes-Benz to premium vans and coaches,
              RNK offers a curated fleet for corporate travel, weddings, events,
              airport transfers and VIP movements across India.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-2">
            <Link
              href="/book"
              className="
                bg-red-900 text-white
                py-3 px-8 rounded-full
                text-xs font-semibold uppercase tracking-wider
                hover:bg-black transition
              "
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

     {/* WHITE SECTION 1 – OVERVIEW / STATS */}
<section className="bg-white text-black border-b border-black/5 py-16 md:py-20 lg:py-30">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Section */}
      <div>
        <p className="text-sm sm:text-base uppercase tracking-wide text-red-900 mb-4 font-medium">
          The RNK Fleet Philosophy
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-5 leading-tight">
          One fleet that flexes for every journey.
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-lg">
          Every vehicle in the RNK fleet is selected, maintained, and chauffeur-managed to deliver the same high standard of experience — whether it's a Rolls Royce for a wedding entry or a well-timed coach movement for a corporate conference.
        </p>
      </div>

      {/* Right Section - Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {[ 
          { label: "Super Luxury & Luxury Cars",  },
          { label: "SUVs, Sedans & Vans",  },
          { label: "Premium Coaches", },
        ].map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: idx * 0.05,
            }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-[#A72740]/20 bg-[#A72740]/10 px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-rd-900 mb-3 font-semibold">
              {item.label}
            </p>
           
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

{/* BLACK – BROWSE BY CATEGORY */}
<section className="border-b border-white/10 bg-black text-white py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-8">
    <motion.div
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-red-900 mb-2">
          Browse by Category
        </p>

        <p className="text-sm md:text-[14px] text-white/65 max-w-md mt-1 mb-8 text-center md:text-left">
          Switch between Super Luxury, Luxury, SUV / MUV, Sedans, Mini Vans and Coaches to view detailed specs and configurations.
        </p>
      </div>
    </motion.div>

    <motion.div
      className="flex flex-wrap gap-6 justify-center md:justify-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {CATEGORIES.map((cat, idx) => {
        const active = cat.id === activeCategory;
        return (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            whileHover={{
              y: -5,
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            style={{ transitionDelay: `${idx * 40}ms` }}
            aria-label={`Browse ${cat.label}`}
            className={`
              inline-flex items-center justify-center
              rounded-full px-5 py-3
              text-xs md:text-[14px] font-medium
              tracking-[0.18em] uppercase
              transition-all duration-300
              ${
                active
                  ? `
                      bg-linear-to-r from-900 via-[#c83759] to-[#6f1328]
                      text-white
                      border border-white/10
                      shadow-[0_12px_35px_rgba(167,39,64,0.7)]
                      hover:shadow-[0_18px_50px_rgba(167,39,64,0.95)]
                      hover:-translate-y-0.5
                      scale-105
                    `
                  : `
                      border border-white/25
                      bg-white/5
                      text-white/70
                      hover:text-white
                      hover:bg-white/5
                      hover:border-white/25
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.55)]
                      hover:-translate-y-0.5
                    `
              }
            `}
          >
            {cat.label}
          </motion.button>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* FLEET CATEGORY + GRID – WHITE (MEDIUM CARDS) */}
      <section id="fleet"className="bg-white text-black pb-16 pt-9 md:pt-10 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Selected category header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-black/45 mb-1">
                Fleet Category
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                {category.label}
              </h2>
              <p className="mt-2 max-w-xl text-sm md:text-[15px] text-black/70">
                {category.tagline}
              </p>
            </div>
            <div className="text-xs md:text-[12px] text-black/60 text-right">
              {cars.length > 0 && (
                <p>
                  Showing{" "}
                  <span className="text-black font-medium">
                    {cars.length}
                  </span>{" "}
                  vehicle{cars.length > 1 ? "s" : ""}.
                </p>
              )}
            </div>
          </motion.div>

          {/* Fleet cards */}
          {cars.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-black/15 bg-black/2 px-6 py-10 text-center text-sm text-black/70">
              We&apos;re updating this category. Please contact our team for the
              latest options available in {category.label}.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {cars.map((car, idx) => {
                const lightCard = idx % 2 === 0;
                return (
                  <motion.article
                    key={car.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: idx * 0.04,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.01,
                    }}
                    className={`
                      group relative overflow-hidden rounded-2xl border backdrop-blur-sm
                      ${
                        lightCard
                          ? "border-black/6 bg-white"
                          : "border-black/8 bg-black/2"
                      }
                      hover:border-[#A72740]/80 hover:shadow-lg hover:shadow-black/10
                    `}
                  >
                    {/* Image – medium height */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      {car.image ? (
                        <motion.img
                          src={car.image}
                          alt={car.name}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-black/40">
                          Image coming soon
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
                      <div className="absolute bottom-2.5 left-3 text-[10px] uppercase tracking-[0.22em] text-white/80">
                        {category.label}
                      </div>
                    </div>

                    {/* Content – compact / medium */}
                    <div className="p-3.5 md:p-4 flex flex-col gap-2.5">
                      <h3 className="text-sm md:text-[15px] font-medium text-black">
                        {car.name}
                      </h3>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] md:text-[12px] text-black/70">
                        <span>Seating {car.seating}</span>
                        <span>Doors {car.doors}</span>
                        <span>Luggage Bags {car.luggage}</span>
                      </div>

                      <div className="mt-1.5 flex items-center justify-between text-[10px] md:text-[11px] text:black/55">
                        <span>Chauffeur Driven · RNK Standard</span>

                        {/* View Details link */}
                        <Link
                          href={`/fleet/${car.id}`}
                          className="uppercase tracking-[0.2em] text-[10px] text-red-900 hover:text-[#c83759]"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>



  <ServicesSection/>
 <ContactUs/>
 <FleetFAQ/>

 

      {/* WHITE – CTA STRIP */}
      <section className="border-t border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-black">
              Need a mixed fleet for your movement?
            </h3>
            <p className="mt-2 max-w-xl text-sm md:text-[15px] text-black/70">
              Share your itinerary and guest list — our team will design a
              balanced combination of super luxury cars, SUVs, sedans, mini
              vans and coaches to match your routes, timings and profile.
            </p>
          </motion.div>
          <motion.div
            className="text-sm md:text-[14px] space-y-1 text-black/70"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p>
              Call:{" "}
              <a
                href="tel:02243227777"
                className="font-medium text-[#A72740] hover:text-[#c83759]"
              >
                022-43227777
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@rnk.com"
                className="font-medium text-[#A72740] hover:text-[#c83759]"
              >
                info@rnk.com
              </a>
            </p>
            <p className="text-[11px] text-black/50 pt-1">
              Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi,
              Mumbai, 400025 · India
            </p>
          </motion.div>
        </div>
      </section>

      <section>
        <RnkFooter />
      </section>
    </main>
  );
}
