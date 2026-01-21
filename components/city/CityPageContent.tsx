"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


import { RnkFooter } from "../footer";
import { ServicesSection } from "../home/ServicesSection";
import { NavBar } from "../NavBar";

type CityPageContentProps = {
  cityName: string;
  slug: string;
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export default function CityPageContent({ cityName }: CityPageContentProps) {
  const displayCity = cityName || "City";
  const heroImage = "/about.webp";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
const today = new Date().toISOString().split("T")[0];

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const chipItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  // --- FORM STATE + HANDLER (only ONE handleSubmit) ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage(null);

  const form = e.currentTarget; // 👈 save reference BEFORE await
  const formData = new FormData(form);

  const payload = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    mobileNumber: formData.get("mobileNumber"),
    startDate: formData.get("startDate"),
    passengers: formData.get("passengers"),
    pickupCity: formData.get("pickupCity"),
    vehicle: formData.get("vehicle"),
  };

  try {
    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setMessage("Thank you. Our team will get in touch with you shortly.");
      form.reset(); // 👈 use saved form reference
    } else {
      setMessage("Something went wrong. Please try again in a moment.");
    }
  } catch (error) {
    console.error(error);
    setMessage("Unable to send right now. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
{/* -------------------------------- */}
{/* HERO SECTION — EDGE ALIGNED WHITE */}
{/* -------------------------------- */}
<section className="bg-white border-b border-black/10">
  <div
    className="
      mx-auto
      max-w-[120rem]
      pl-6 sm:pl-10 lg:pl-20
      pr-4 sm:pr-6 lg:pr-10
      pt-6 sm:pt-8 md:pt-10 lg:pt-12
      pb-8 sm:pb-10 md:pb-12 lg:pb-14
    "
  >
    <div
      className="
        grid gap-8 sm:gap-10 lg:gap-14
        md:grid-cols-[minmax(0,1.8fr)_minmax(0,2.7fr)]
        items-center
      "
    >
      {/* LEFT – TEXT */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
className="order-1 md:order-1"
      >
        {/* Breadcrumb */}
        <div className="mb-3 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-black flex flex-wrap items-center gap-2">
          <Link href="/">Home</Link>
          <span className="text-black/30">•</span>
          <Link href="/network">Our Network</Link>
          <span className="text-black/30">•</span>
          <span className="text-[#C8102E]">{displayCity}</span>
        </div>

        {/* Location */}
        <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.26em] text-[#C8102E] mb-2">
          RNK in {displayCity}
        </p>

        {/* Heading */}
        <h1
          className="
            max-w-[28rem] sm:max-w-[30rem] md:max-w-[32rem]
            text-[1.55rem] sm:text-[1.9rem] md:text-[2.3rem]
            lg:text-[2.8rem] xl:text-[3.2rem]
            leading-[1.15] sm:leading-[1.12] xl:leading-[1.08]
            font-semibold tracking-tight
            text-black
            mb-4
          "
        >
          Premium car rentals in{" "}
          <span className="text-[#C8102E]">{displayCity}</span>.
        </h1>

        {/* Description */}
        <p
          className="
            max-w-[32rem] md:max-w-[34rem] lg:max-w-[36rem]
            text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]
            text-black/70
            leading-relaxed
          "
        >
          From airport runs and corporate movements to weddings and VIP hosting,
          RNK brings its signature fleet and chauffeur standards to{" "}
          {displayCity}. One number, one team — every ride feels familiar,
          efficient and quietly luxurious.
        </p>

        {/* SERVICES — CLICKABLE (EDITORIAL STYLE) */}
<div className="mt-5 sm:mt-6 flex flex-wrap gap-x-8 gap-y-3">
  {[
    { label: "Corporate Car Rental", href: "/services/corporate-car-rental" },
    { label: "Airport & Railway Transfers", href: "/services/airport-railway-transfers" },
    { label: "Luxury Travel", href: "/services/luxury-travel" },
    { label: "Hotel Operations", href: "/services/hotel-operations" },
    { label: "Vacation Rentals", href: "/services/vacation-rentals" },
    { label: "VIP Movements", href: "/services/vip-movements" },
    { label: "Long Term Car Rental", href: "/services/long-term-car-rental" },
    { label: "Event / Wedding Transport", href: "/services/event-wedding-transport" },
  ].map((item) => (
    <Link
      key={item.label}
      href={item.href}
      className="
        group
        text-[12px] sm:text-[13px]
        uppercase tracking-[0.18em]
        text-red-900
        transition-all duration-300 ease-out
        hover:text-red-800
      "
    >
      <span className="relative inline-block">
        {item.label}
        <span
          className="
            absolute left-0 -bottom-1
            h-[1px] w-0
            bg-red-900
            transition-all duration-300
            group-hover:w-full
          "
        />
      </span>
    </Link>
  ))}
</div>
      </motion.div>

      {/* RIGHT – IMAGE */}
      <motion.div
        variants={slideRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
className="order-2 md:order-2"
      >
        <img
          src="/city_hero_1.png"
          alt={`RNK in ${displayCity}`}
          className="
            w-full
            h-[240px] sm:h-[300px] md:h-[380px]
            lg:h-[460px] xl:h-[520px]
            2xl:h-[580px]
            object-cover
          "
        />
      </motion.div>
    </div>
  </div>
</section>



      {/* -------------------------------- */}
      {/* SERVICES STRIP */}
      {/* -------------------------------- */}
     <section>
        <ServicesSection />
     </section>



     
      {/* -------------------------------- */}
      {/* FLEET + MOVEMENT TYPES */}
      {/* -------------------------------- */}
      <section className="relative bg-white text-black border-b border-black/5">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="
      max-w-6xl mx-auto
      px-6
      py-16 md:py-20
      text-center
    "
  >
    {/* EYEBROW */}
    <p className="text-[11px] uppercase tracking-[0.3em] text-[#C8102E] mb-4">
      Fleet available in {displayCity}
    </p>

    {/* HEADING */}
    <h2 className="
      text-2xl md:text-3xl lg:text-[36px]
      font-semibold
      tracking-tight
      leading-[1.2]
      max-w-3xl
      mx-auto
    ">
      The right car,
      <span className="block text-[#C8102E]">
        for the right moment.
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="
      mt-6
      text-sm md:text-[15px]
      text-black/65
      leading-relaxed
      max-w-2xl
      mx-auto
    ">
      Mix and match the RNK fleet in {displayCity} — from executive sedans
      and business SUVs to people-movers designed for guests, crews and
      precision schedules.
    </p>

    {/* TAGS */}
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {[
        "Executive Sedans",
        "Luxury SUVs",
        "People Movers",
        "Premium Transfers",
      ].map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border border-black/10
            bg-red-100
            px-4 py-1.5
            text-[10.5px]
            uppercase
            tracking-[0.22em]
            text-black/70
          "
        >
          {item}
        </span>
      ))}
    </div>

    {/* FADE CARDS */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Executive & CXOs",
          desc:
            "Sedans and premium SUVs designed for leadership movement, privacy and discretion.",
        },
        {
          title: "Teams & families",
          desc:
            "Comfort-focused people-movers and mixed fleets for teams, families and entourages.",
        },
        {
          title: "Point-to-point",
          desc:
            "Airport, hotel and venue transfers engineered to run with clockwork precision.",
        },
        {
          title: "Full-day plans",
          desc:
            `Half-day and full-day rentals tailored for dense schedules in ${displayCity}.`,
        },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
          className="
            rounded-2xl
            px-5 py-6
            bg-gradient-to-b
            from-red-100
            to-red-800
            backdrop-blur-[2px]
          
            transition-all
          "
        >
          <p className="text-sm font-medium mb-2 text-white">
            {card.title}
          </p>
          <p className="text-[12.5px] text-white leading-relaxed">
            {card.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* -------------------------------- */}
      {/* KEY ROUTES + OUTSTATION */}
      {/* -------------------------------- */}
      <section className="relative bg-white/13 text-white border-b border-white/10">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="
      max-w-6xl mx-auto
      px-6
      py-20 md:py-28
      text-center
    "
  >
    {/* EYEBROW */}
    <p className="text-[11px] uppercase tracking-[0.35em] text-[#C8102E] mb-4">
      Route intelligence • {displayCity}
    </p>

    {/* HEADING */}
    <h2 className="
      text-3xl md:text-4xl
      font-semibold
      tracking-tight
      leading-[1.15]
      max-w-3xl
      mx-auto
    ">
      Routes that move
      <span className="block text-white/70">
        with intent and precision
      </span>
    </h2>

    {/* SUBTEXT */}
    <p className="
      mt-6
      text-[14px] md:text-[15px]
      text-white/60
      max-w-2xl
      mx-auto
      leading-relaxed
    ">
      From daily business movements to extended outstation plans,
      every route is mapped to reduce friction, save time,
      and deliver consistency at scale.
    </p>

    {/* CARDS */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2">
      {/* CARD 1 */}
      <div className="
        rounded-2xl
        bg-white/[0.03]
        px-6 py-7
        text-left
        backdrop-blur-sm
      ">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8102E] mb-2">
          City movements
        </p>
        <p className="text-sm text-white/75 leading-relaxed">
          Airport ↔ business hotels, corporate parks, convention centres,
          multi-stop client visits, and late-night event closures
          across {displayCity}.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="
        rounded-2xl
        bg-white/[0.03]
        px-6 py-7
        text-left
        backdrop-blur-sm
      ">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8102E] mb-2">
          Extended routes
        </p>
        <p className="text-sm text-white/75 leading-relaxed">
          Same-day outstation trips, weekend leisure drives,
          airport–city–outstation combinations,
          and logistics for crews, artists, and productions.
        </p>
      </div>
    </div>
  </motion.div>
</section>


      {/* -------------------------------- */}
      {/* CITY ENQUIRY FORM – WHITE SECTION */}
      {/* -------------------------------- */}
      <section className="bg-white text-black border-b border-black/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 py-14 md:py-20"
        >
          <div className="mb-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-2">
              Plan your movement
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Share your details —{" "}
              <span className="text-[#C8102E]">we’ll take it from here.</span>
            </h2>

            <p className="mt-3 text-sm md:text-[15px] text-black/60 max-w-xl mx-auto">
              Tell us a few basics about your plan in {displayCity}. Our team
              will tailor the perfect movement plan for you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:grid-cols-2 bg-white border border-black/10 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Full Name<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="fullName"
                type="text"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Email<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter Email"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Mobile Number<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="mobileNumber"
                type="tel"
                required
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Start Date<span className="text-[#C8102E]">*</span>
              </label>
              <input
  name="startDate"
  type="date"
  required
  min={today}
  defaultValue={today}
  className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black focus:border-[#C8102E] focus:outline-none"
/>

            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Number of Passengers<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="passengers"
                type="number"
                min={1}
                required
                placeholder="Number of Passengers"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Pickup City<span className="text-[#C8102E]">*</span>
              </label>
              <select
                name="pickupCity"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black focus:border-[#C8102E] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select City
                </option>
                <option value={displayCity}>{displayCity}</option>
              </select>
            </div>

            <div className="md:col-span-2 md:max-w-sm">
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Vehicle<span className="text-[#C8102E]">*</span>
              </label>
              <select
                name="vehicle"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black focus:border-[#C8102E] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select Vehicle
                </option>
                <option value="Rolls Royce">Rolls Royce</option>
                <option value="Rolls Royce">Hummer</option>
                <option value="Rolls Royce">Mercedes Benz S Class</option>
                <option value="Rolls Royce">Mercedes Benz GLS</option>
                <option value="Rolls Royce">Mercedes Benz V Class</option>
                <option value="Rolls Royce">Mercedes Benz GLE</option>
                <option value="Rolls Royce">Mercedes Benz E Class</option>
                <option value="Rolls Royce">Toyota Camry</option>
                <option value="Rolls Royce">Toyota Fortuner</option>
                <option value="Rolls Royce">Byd E6 Electric Vehicle</option>
                <option value="Rolls Royce">Kia Cares</option>
                 <option value="Rolls Royce">Maruti Ciaz</option>
                  <option value="Rolls Royce">Honda City</option>
                   <option value="Rolls Royce">Maruti Swift Dzire</option>
                    <option value="Rolls Royce">Toyota Coaster</option>
                     <option value="Rolls Royce">Toyota Commuter</option>
                      <option value="Rolls Royce">Urbania</option>
                         <option value="Rolls Royce">Volvo 9600</option>
                            <option value="Rolls Royce">43 Seater Bus</option>
                               <option value="Rolls Royce">27 Seater Bus</option>


              </select>
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#C8102E] border border-[#C8102E] text-white text-[11px] px-7 py-3 uppercase tracking-[0.22em] hover:bg-white hover:text-[#C8102E] transition-all duration-200 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit your enquiry"}
              </button>
            </div>
            <div className="md:col-span-2 flex justify-center pt-2">
  <a
    href="/network"
    className="
      inline-flex items-center justify-center
      rounded-full
      border border-black/30
      px-6 py-2.5
      text-[10px] sm:text-[11px]
      uppercase tracking-[0.22em]
      text-black/70
      hover:border-[#C8102E]
      hover:text-[#C8102E]
      hover:bg-[#C8102E]/5
      transition-all duration-300
    "
  >
    Explore more cities
  </a>
</div>


            {message && (
              <div className="md:col-span-2 text-xs text-black/70 pt-1">
                {message}
              </div>
              
            )}
          </form>
        </motion.div>
        
      </section>

      {/* -------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------- */}
     <section  className="bg-black">



        <RnkFooter />
      </section>
    </main>
  );
}
