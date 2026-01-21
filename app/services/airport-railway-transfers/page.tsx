"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const cities = [
  { name: "Mumbai", slug: "mumbai" },
  { name: "Delhi", slug: "delhi" },
  { name: "Chennai", slug: "chennai" },
  { name: "Bangalore", slug: "bengaluru" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Pune", slug: "pune" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Vadodara", slug: "vadodara" },
  { name: "Indore", slug: "indore" },
  { name: "Bhopal", slug: "bhopal" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Goa", slug: "goa" },
  { name: "Kochi", slug: "kochi" },
  { name: "Guwahati", slug: "guwahati" },
  { name: "Bhubaneswar", slug: "bhubaneswar" },
];

const whyRnkItems = [
  {
    title: "Chauffeur-driven luxury",
    description:
      "When you rent a chauffeur-driven car, you don't have to worry about driving and navigating through unfamiliar roads or traffic. A professional chauffeur handles everything, so you can relax, work or simply enjoy the ride.",
    direction: "left",
  },
  {
    title: "GPS-enabled",
    description:
      "A GPS-enabled car makes navigation in unknown locations effortless. It’s especially helpful when you're travelling to a new city and need to move quickly and efficiently. GPS tracking also helps maintain passenger security.",
    direction: "right",
  },
  {
    title: "Security",
    description:
      "A secure vehicle prioritises your safety with well-maintained, reliable cars and verified chauffeurs. You enjoy peace of mind knowing you'll arrive at your destination safely and on time.",
    direction: "up",
  },
  {
    title: "Comfort fit for VIPs",
    description:
      "Plush seating, climate control and refined cabins make every journey comfortable, quiet and relaxed — perfectly suited for executives, families and VIP guests.",
    direction: "diagonal-left",
  },
  {
    title: "Extensive fleet",
    description:
      "From sedans and SUVs to premium vans and coaches, RNK’s extensive fleet lets you choose the right vehicle for solo travellers, families, delegations and large groups.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 support on call",
    description:
      "Round-the-clock on-call support ensures you get immediate assistance, quick resolutions and uninterrupted transfers — no matter what time your flight or train is.",
    direction: "up-soft",
  },
];

const cityImages: Record<string, string> = {
  Mumbai: "/cities/mumbai.webp",
  Delhi: "/cities/delhi.webp",
  Chennai: "/cities/chennai.webp",
  Bangalore: "/cities/bengaluru.webp",
  Kolkata: "/cities/kolkata.webp",
  Hyderabad: "/cities/hyderabad.webp",
  Pune: "/cities/pune.webp",
  Ahmedabad: "/cities/ahmedabad.webp",
  Vadodara: "/cities/vadodara.webp",
  Indore: "/cities/indore.webp",
  Bhopal: "/cities/bhopal.webp",
  Jaipur: "/cities/jaipur.webp",
  Lucknow: "/cities/lucknow.webp",
  Chandigarh: "/cities/chandigarh.webp",
  Goa: "/cities/goa.webp",
  Kochi: "/cities/kochi.webp",
  Guwahati: "/cities/guwahati.webp",
};

export default function AirportRailwayTransfersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />
      {/* ======================= HERO WITH IMAGE ======================= */}
<section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[100vh] border-b border-white/10 overflow-hidden">
  
  {/* Background Image */}
  <motion.img
    src="/about.webp"
    alt="Airport & Railway Transfers by RNK"
    className="absolute inset-0 w-full h-full object-cover object-center"
    initial={{ scale: 1.08, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 sm:bg-black/65 md:bg-black/60" />

  {/* Content */}
  <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6">
    <div className="text-center max-w-3xl">

      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white mb-4"
      >
        <Link href="/" className="hover:text-white">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/services" className="hover:text-white">
          Services
        </Link>{" "}
        / <span className="textwhite">Airport &amp; Railway Transfers</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="
         
          font-light
          leading-tight
          text-white

          text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]
        "
      >
        Airport &amp; Railway Transfers
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          mt-4
          text-xs
          sm:text-sm
          md:text-[15px]
          text-white/80
          leading-relaxed
        "
      >
        Seamless, punctual and stress-free transfers to and from airports and
        railway stations – for executives, families, guests and VIPs.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="mt-8 flex justify-center"
      >
        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center
            px-8 py-3
            text-sm
            tracking-wide
            uppercase
            font-medium
            text-white
            bg-red-900
            rounded-full
            transition-all duration-300
            hover:bg-black
            
          "
        >
          Book Now
        </Link>
      </motion.div>

    </div>
  </div>
</section>


     {/* ======================= SECTION — TEXT + IMAGE (WHITE) ======================= */}
<section className="bg-white text-black py-14 sm:py-16 lg:py-20 border-b border-black/10">
  <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
    <div className="grid gap-10 lg:gap-14 items-center md:grid-cols-2">

      {/* TEXT (LEFT) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="md:pr-4 lg:pr-10"
      >
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-red-900 mb-2">
          Arrive on Time
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4">
          Effortless{" "}
          <span className="font-semibold text-red-900">airport &amp; railway transfers</span>{" "}
          designed around your schedule.
        </h2>

        <p className="text-sm sm:text-[15px] text-black/80 mb-3 leading-relaxed">
          With RNK – Ramniranjan Kedia Group, every pick-up and drop is planned with
          precision. From flight and train tracking to terminal and platform
          coordination, we ensure your transfers are on time – without last-minute
          stress.
        </p>

        <p className="text-sm sm:text-[15px] text-black/75 mb-6 leading-relaxed">
          Our chauffeur-driven vehicles manage luggage, routes and timing so you can
          focus on work, calls or simply relax between journeys.
        </p>

        {/* CARD (keep within text column) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            rounded-2xl p-5 sm:p-6
            border border-red-900
            bg-linear-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40
            shadow-[0_10px_30px_rgba(200,16,46,0.08)]
          "
        >
          <h3 className="text-sm font-semibold text-red-900mb-2 tracking-wide text-red-900">
            Our Special Transfer Services
          </h3>

          <p className="text-xs sm:text-[13px] text-black/75 leading-relaxed mb-3">
  RNK’s airport mobility services are designed to remove uncertainty from arrivals
  and departures, especially for time-sensitive corporate and VIP travel.
</p>

<ul className="space-y-2 text-xs sm:text-[13px] text-black/75 leading-relaxed">
  <li>• Real-time flight and train monitoring to manage delays and early arrivals</li>
  <li>• No waiting charges caused by schedule changes or operational delays</li>
  <li>• Immediate replacement vehicles in case of breakdowns</li>
  <li>• Professional, uniformed chauffeurs trained for airport protocols</li>
  <li>• Dedicated coordination for group arrivals, delegations & crew movements</li>
  <li>• End-to-end luggage handling support for individuals and large groups</li>
  <li>• On-ground support teams for high-volume transfers and peak hours</li>
  <li>• Fleet availability across sedans, SUVs, vans and coaches — all ready on call</li>
</ul>

        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="mt-7 flex justify-center"
            >
              
              </motion.div>
      </motion.div>

      {/* IMAGE (RIGHT) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="md:pl-4 lg:pl-10"
      >
        <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <motion.img
            src="/about.webp"
            alt="RNK Airport & Railway Transfers"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] object-cover"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* ======================= TRANSFER JOURNEY SECTION — BG IMAGE ======================= */}
     <section
  className="
    relative overflow-hidden border-b border-black/10
    py-14 sm:py-16 lg:py-20
  
  "
>
  {/* Overlay (premium depth + vignette) */}
  <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/40 to-black/80" />
  <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/10 to-black/60" />

  {/* Soft RNK glow */}
  <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C8102E]/25 blur-3xl" />

  {/* Content */}
  <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
    <div className="max-w-4xl mx-auto text-center">
      
      {/* Subtle glass panel to avoid "stuck center" feel */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/5 backdrop-blur-md
          px-5 py-10
          sm:px-10 sm:py-12
          shadow-[0_20px_70px_rgba(0,0,0,0.35)]
        "
      >
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4 text-white"
        >
          Transfers that keep{" "}
          <span className="font-semibold text-red-900">your journey on track.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-sm sm:text-[15px] lg:text-base leading-relaxed mb-4 text-white/85"
        >
          Early morning departures, red-eye arrivals, last-minute changes – our team
          coordinates every detail so your arrivals and departures feel effortless.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm sm:text-[15px] lg:text-base leading-relaxed mb-4 text-white/80"
        >
          Vehicles are dispatched with buffer time, routes are planned in advance and
          chauffeurs are briefed thoroughly – ensuring punctual, smooth transfers
          every time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-sm sm:text-[15px] lg:text-base leading-relaxed text-white/90 font-medium"
        >
          Your flight. Your train.{" "}
          <span className="text-red-900 font-semibold">
            Your journey begins and ends seamlessly with RNK.
          </span>
        </motion.p>

       
      </div>
    </div>
  </div>
</section>


      {/* ======================= WHY RNK — WHITE SECTION ======================= */}
      <section className="bg-white text-black border-b border-black/10">
  <div
    className="
      mx-auto w-full max-w-7xl
      px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24
      py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24
    "
  >
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-8 sm:mb-10 lg:mb-12"
    >
      <p
        className="
          text-red-900
          uppercase tracking-[0.30em]
          text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]
          mb-2
        "
      >
        Why RNK?
      </p>

      <h2
        className="
          mx-auto max-w-5xl
          font-light tracking-tight text-black
          text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[45px]
          leading-[1.15] md:leading-[1.12]
          mb-3 sm:mb-4
         
          break-words
        "
      >
        If reliability is what you are looking for,{" "}
        <span className="font-semibold text-red-900">
          you’re at the right place.
        </span>
      </h2>

      <p
        className="
          mx-auto max-w-4xl
          text-black/70
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]
          leading-[1.75] lg:leading-[1.85]
          [text-wrap:pretty]
          break-words [overflow-wrap:anywhere]
        "
      >
        RNK offers much more than just transfers. Every journey is designed around
        comfort, safety, timing and a truly elevated travel experience. Here’s why
        guests and corporates trust us for airport &amp; railway transfers:
      </p>
    </motion.div>

    {/* Cards grid */}
    <div
      className="
        grid w-full
        gap-4 sm:gap-5 lg:gap-6 xl:gap-7
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        items-stretch
      "
    >
      {[
        {
          title: "Chauffeur-driven luxury",
          description:
            "When you rent a chauffeur-driven car, you don't have to worry about driving and navigating through unfamiliar roads or traffic. A professional chauffeur handles everything, so you can relax, work or simply enjoy the ride.",
        },
        {
          title: "GPS-enabled",
          description:
            "A GPS-enabled car makes navigation in unknown locations effortless. It’s especially helpful when you're travelling to a new city and need to move quickly and efficiently. GPS tracking also helps maintain passenger security.",
        },
        {
          title: "Security",
          description:
            "A secure vehicle prioritises your safety with well-maintained, reliable cars and verified chauffeurs. You enjoy peace of mind knowing you'll arrive at your destination safely and on time.",
        },
        {
          title: "Comfort fit for VIPs",
          description:
            "Plush seating, climate control and refined cabins make every journey comfortable, quiet and relaxed — perfectly suited for executives, families and VIP guests.",
        },
        {
          title: "Extensive fleet",
          description:
            "From sedans and SUVs to premium vans and coaches, RNK’s extensive fleet lets you choose the right vehicle for solo travellers, families, delegations and large groups.",
        },
        {
          title: "24/7 support on call",
          description:
            "Round-the-clock on-call support ensures you get immediate assistance, quick resolutions and uninterrupted transfers — no matter what time your flight or train is.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
          className="
            group relative overflow-hidden
            rounded-2xl border border-black/10 bg-white
            shadow-[0_14px_40px_rgba(15,23,42,0.10)]
            px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7
            flex flex-col
            h-full
          "
        >
          {/* Top brand accent */}
          <span className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-red-900 via-red-900 to-red-900/70 opacity-80" />

          <h3
            className="
              text-red-900 font-semibold
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]
              mb-2
              leading-snug
              [text-wrap:balance]
              break-words
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-black/70
              text-[13px] sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[16px]
              leading-[1.7] lg:leading-[1.85]
              break-words [overflow-wrap:anywhere]
            "
          >
            {item.description}
          </p>

          {/* Subtle hover polish */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-[-35%] bg-linear-to-br from-[#A72740]/8 via-transparent to-[#A72740]/12" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ======================= TRANSFER SOLUTIONS — DARK PREMIUM ======================= */}

     <section className="relative bg-black text-white border-b border-white/10 overflow-hidden">
  <div className="w-full py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
    
    {/* Soft background glow */}
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#C8102E]/18 blur-3xl" />
      <div className="absolute bottom-[-120px] -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

      {/* CENTER HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-4xl text-center flex flex-col items-center"
      >
        {/* Label */}
        <p className="text-red-900 uppercase tracking-[0.30em] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] mb-3 text-center">
          Transfer Solutions
        </p>

        {/* FIXED HEADING – NO STYLE CHANGE */}
        <h2
          className="
            w-full
            flex justify-center
            font-light tracking-tight
            text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px]
            leading-[1.15]
            mb-4
            break-words
          "
        >
          <span className="inline-flex flex-wrap items-center justify-center text-center">
            <span>Designed to support&nbsp;</span>
            <span className="font-semibold text-red-900">
              every kind of transfer.
            </span>
          </span>
        </h2>

        {/* Sub paragraph */}
        <p className="w-full text-center text-white/70 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] lg:leading-[1.85] max-w-3xl mx-auto">
          From solo business travellers to entire delegations, RNK builds reliable,
          on-time transfer plans that match your flight and train schedules.
        </p>
      </motion.div>

      {/* 🔒 CARDS — UNCHANGED */}
      <div className="grid w-full justify-items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Airport pick-ups & drops",
          "Railway station transfers",
          "Early morning & red-eye flights",
          "Guest & delegation movements",
          "Hotel to airport/station connectivity",
          "Multi-stop corporate transfers",
          "Crew & staff transfers",
          "Flight tracking & delay coordination",
  "Meet-and-greet airport assistance",
          
        ].map((item, i) => {
          const fromLeft = i % 2 === 0
          const fromTop = i % 3 === 0

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: fromLeft ? -24 : 24,
                y: fromTop ? 32 : 16,
                scale: 0.97,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              className="
                group relative overflow-hidden
                w-full max-w-[420px]
                rounded-2xl border border-white/12
                bg-linear-to-br from-white/8 via-white/3 to-black/0
                shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7
                flex items-start
                min-h-[88px] sm:min-h-[96px] lg:min-h-[108px]
              "
            >
              <span className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-red-900 via-red-900 to-red-900 opacity-80" />
              <p className="text-white/80 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.65] lg:leading-[1.75]">
                {item}
              </p>
            </motion.div>
          )
        })}
      </div>

    </div>
  </div>
</section>


     

      {/* ======================= CITIES SECTION — PURE TRANSPARENT HOVER ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-[20px] uppercase tracking-[0.25em] text-red-900 mb-3 font-bold">
              Our Presence
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-3">
              RNK: Luxury Car Rental &amp; Transfer Services Across{" "}
              <span className="font-semibold text-red-900">Various Cities in India</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto leading-relaxed">
              RNK offers premium chauffeur-driven car rental and transfer services across
              multiple cities in India, ensuring comfort, style and convenience wherever
              you travel.
            </p>
          </motion.div>

          {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {cities.map((city, i) => (
    <Link
      key={city.slug}
      href={`/city/${city.slug}`}
      aria-label={`Luxury car rental & transfers in ${city.name}`}
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.04 }}
        className="
          group relative overflow-hidden
          border border-black/5
          bg-transparent
          h-64 cursor-pointer
        "
      >
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('${cityImages[city.name] ?? `/cities/${city.slug}.webp`}')`,
          }}
        />

        {/* City Name */}
        <div className="absolute top-4 left-4 z-10">
          <p className="text-white text-base font-semibold">
            {city.name}
          </p>
        </div>

        {/* Hover Text */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            translate-y-full group-hover:translate-y-0
            transition-all duration-500 ease-out
            p-6 text-center
          "
        >
          <p className="text-white text-xs md:text-sm leading-relaxed tracking-wide">
            Luxury Car Rental & Transfers – {city.name}. Premium chauffeur-driven
            services for business, leisure and events.
          </p>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

        </div>
      </section>

      {/* ======================= FAQ — DARK WITH UNIQUE CHEVRON ARROW ======================= */}
      <section className="bg-black text-white py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-[15px] uppercase tracking-[0.25em] text-red-900 mb-3">
              FAQs
            </p>
            <h2 className="text-xl md:text-2xl font-light">
              Airport &amp; Railway Transfer{" "}
              <span className="font-semibold text-red-900">FAQs</span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              [
                "Do you track flights and trains for delays?",
                "Yes. Our team tracks your flight or train in real-time and adjusts pick-up timings to avoid unnecessary waiting and charges.",
              ],
              [
                "Can you arrange late-night or early-morning transfers?",
                "Absolutely. We operate 24/7 and regularly manage early check-ins, red-eye flights and late-night arrivals.",
              ],
              [
                "Is there assistance for luggage handling?",
                "Yes. Chauffeurs assist with loading and unloading luggage, ensuring a smooth transition from terminal or platform to the car.",
              ],
              [
                "Can you handle group or delegation movements?",
                "Yes, we provide vans, SUVs and coaches for groups, delegations and events with coordinated pick-ups and drops.",
              ],
            ].map(([q, a], i) => {
              const isOpen = openFaq === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 
                             bg-white/4 backdrop-blur-md
                             shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                             overflow-hidden"
                >
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-5 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-[15px] font-medium text-white/90">{q}</span>

                    {/* UNIQUE CHEVRON ARROW */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-2xl leading-none"
                    >
                      ⌄
                    </motion.span>
                  </button>

                  {/* RED ACCENT */}
                  {isOpen && (
                    <div className="h-0.5 bg-linear-to-r from-[#C8102E] to-transparent mx-5" />
                  )}

                  {/* ANSWER */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-3 text-sm text-white/70 leading-relaxed">
                      {a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= SMALL SEO TEXT ======================= */}
      <section className="bg-white text-black border-b border-black/10">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-10 sm:py-12 lg:py-14">
    <div className="mx-auto max-w-5xl text-center">

      {/* Label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.30em] text-red-900 mb-3"
      >
        Airport & Railway Transfers
      </motion.p>

      {/* Main copy */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="
          text-black/70
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]
          leading-[1.75] lg:leading-[1.9]
          [text-wrap:pretty]
        "
      >
        RNK Rent A Car provides seamless chauffeur-driven airport and railway
        transfers across India. Whether it’s an early morning departure or a late
        night arrival, our service ensures punctual pickups, smooth transitions
        and a calm, comfortable journey from terminal to destination.
      </motion.p>

      {/* Trust points */}
      <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-3">
        {[
          {
            title: "On-Time Pickups",
            desc: "Flight & train tracking for zero delays.",
          },
          {
            title: "Professional Chauffeurs",
            desc: "Courteous, uniformed and route-aware drivers.",
          },
          {
            title: "24/7 Availability",
            desc: "Round-the-clock support for arrivals & departures.",
          },
        ].map((x, i) => (
          <motion.div
            key={x.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08 }}
            className="
              rounded-2xl border border-black/10 bg-white
              px-4 py-4 sm:px-5
              shadow-[0_10px_26px_rgba(15,23,42,0.06)]
            "
          >
            <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-red-900 mb-1">
              {x.title}
            </p>
            <p className="text-[12.5px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed">
              {x.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing line */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-6 text-[12.5px] sm:text-[13px] md:text-[14px] text-black/55"
      >
        From terminal gates to your doorstep —{" "}
        <span className="text-red-900 font-semibold">travel without stress.</span>
      </motion.p>

    </div>
  </div>
</section>


      {/* ======================= SECTION — Final CTA ======================= */}
      <section className="bg-black text-white border-t border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        text-[18px] sm:text-[20px] md:text-[22px]
        font-light tracking-wide
        mb-4
      "
    >
      Stress-free airport &amp; railway transfers.
    </motion.h2>

    {/* Sub text */}
    <motion.p
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        text-[13px] sm:text-[14px]
        text-white/65
        max-w-xl mx-auto
        leading-relaxed
        mb-8
      "
    >
      From early departures to late-night arrivals, RNK ensures punctual,
      chauffeur-driven transfers with comfort, discretion and reliability at
      every step of your journey.
    </motion.p>

    {/* CTA */}
    <motion.a
      href="/book-now"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="
        inline-flex items-center justify-center
        px-9 py-3
        rounded-full
        hover:black
        bg-red-900
        text-white
        text-[11px] sm:text-[12px]
        uppercase tracking-[0.22em]
       
      "
    >
      Book Your Ride
    </motion.a>

  </div>
</section>


      {/* ======================= FOOTER ======================= */}
      <RnkFooter />
    </main>
  );
}
