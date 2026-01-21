"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const whyRnkItems = [
  {
    title: "Chauffeur-driven luxury",
    description:
      "When you rent a chauffeur-driven luxury car, you don't have to worry about driving and navigating through unfamiliar roads or traffic. A professional chauffeur handles everything, so you can relax, work or simply enjoy the ride.",
    direction: "left",
  },
  {
    title: "GPS-enabled",
    description:
      "A GPS-enabled luxury car makes navigation in unknown locations effortless. It’s especially helpful when you're travelling to a new city and need to move quickly and efficiently. GPS tracking also helps maintain passenger security.",
    direction: "right",
  },
  {
    title: "Security",
    description:
      "A secure luxury car prioritises your safety with well-maintained, reliable vehicles and verified chauffeurs. You enjoy peace of mind knowing you'll arrive at your destination safely and on time.",
    direction: "up",
  },
  {
    title: "Comfort fit for VIPs",
    description:
      "Plush seating, climate control and advanced sound systems make every journey comfortable, quiet and refined — perfectly suited for VIPs, executives and special guests.",
    direction: "diagonal-left",
  },
  {
    title: "Extensive fleet of luxury cars",
    description:
      "From BMW, Audi and Mercedes to premium SUVs and sedans, RNK’s extensive fleet lets you choose a car that perfectly matches your occasion, profile and comfort preference.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 support on call",
    description:
      "Round-the-clock on-call support ensures you get immediate assistance, quick resolutions and uninterrupted travel — no matter what time your journey begins or ends.",
    direction: "up-soft",
  },
];

export default function CorporateCarRentalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (

    <main className="bg-black text-white min-h-screen">
      <NavBar />
      {/* ======================= HERO WITH IMAGE ======================= */}
     <section   id="corporate-rental"
  className="
    relative overflow-hidden border-b border-white/10
    h-[55svh] sm:h-[60svh] md:h-screen
    w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
  "
>
  {/* Background Image (FULL WIDTH MOBILE) */}
  <motion.img
    src="/about.webp"
    alt="Corporate Car Rental RNK"
    className="absolute inset-0 h-full w-full object-cover object-center"
    initial={{ scale: 1.12, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/75" />

  {/* Center content ON the image */}
  <div className="relative z-10 h-full flex items-center justify-center text-center">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white"
      >
        <Link href="/" className="hover:text-white">Home</Link>
        <span className="text-white">/</span>
        <Link href="/services" className="hover:text-white">Services</Link>
        <span className="text-white">/</span>
        <span className="text-red-600 
        ">Corporate Car Rental</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className=" font-light leading-[1.1] text-white
        text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]"
      >
        Corporate Car Rental
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
        className="mt-4 mx-auto max-w-2xl text-white text-[13px] sm:text-sm md:text-[19px] leading-relaxed"
      >
        Premium, punctual and professionally managed corporate mobility designed
        for executives, teams, clients and VIP movements.
      </motion.p>

      {/* Book Now button */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
        className="mt-7 flex justify-center"
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-full max-w-[120px] rounded-full bg-red-900 px-2 py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white hover:bg-black/80 transition"
        >
          Book Now
        </Link>
      </motion.div>
    </div>
  </div>
</section>


      {/* =================  SECTION 2(EDGE-TO-EDGE) ================= */}
<section className="bg-white text-black border-b border-black/10 w-full">
  <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-14 sm:py-16 lg:py-20">
    {/* ✅ max-w removed */}
    <div className="w-full grid gap-10 lg:gap-14 md:grid-cols-2 items-center">

      {/* TEXT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-red-900 mb-2">
          Travel in Style
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-4">
          Travel in style with our{" "}
          <span className="font-semibold text-red-900">premium local car rental services.</span>
        </h2>

        <p className="text-[13px] sm:text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
          At RNK – Ramniranjan Kedia Group, we strive to make your experience of
          renting a car unforgettable. You will experience quality with every ride.
        </p>

        <p className="text-[13px] sm:text-sm md:text-[15px] text-black/75 mb-6 leading-relaxed">
          Make the most of your ride with comfort and panache. Chauffeur-driven cars
          allow you to focus on your work while we handle traffic, routes and time.
        </p>

        <motion.div
          initial={{ opacity: 0, x: 20, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl p-5 sm:p-6 border border-red-900
            bg-linear-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40
            shadow-[0_10px_30px_rgba(167,39,64,0.18)]
            text-left mt-14"
        >
          <h3 className="text-sm font-semibold text-red-900 mb-2 tracking-wide">
            Our Special Services
          </h3>

          <p className="text-[12px] sm:text-[13px] text-black/75 leading-relaxed mb-3">
  RNK’s managed mobility model removes ownership, operational and compliance
  burdens — allowing organisations to focus on business, not vehicles.
</p>

<ul className="space-y-2 text-[12px] sm:text-[13px] text-black/75 leading-relaxed">
  <li>• No debt impact on the company balance sheet</li>
  <li>• Entire rental cost treated as an operational expense with tax benefits</li>
  <li>• No depreciation, resale risk or asset ownership exposure</li>
  <li>• Immediate vehicle replacement in case of breakdowns</li>
  <li>• Zero driver dependency — standby chauffeurs provided without disruption</li>
  <li>• No payroll, HR or compliance overheads related to drivers</li>
  <li>• On-ground operational support for large events, conferences & weddings</li>
  <li>• All SUVs provided with full 5-door configuration for comfort and access</li>
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

      {/* IMAGE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="relative w-full overflow-hidden rounded-3xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          <motion.img
            src="/about.webp"
            alt="Corporate chauffeur-driven car by RNK"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[620px] object-cover object-center"
            initial={{ scale: 1.06, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>

        <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#A72740]/15 blur-3xl" />
      </motion.div>

    </div>
  </div>
</section>

    {/* ======================= SECTION 3======================= */}
<section
  className="
    relative overflow-hidden border-b border-black/10
    py-12 sm:py-14 md:py-18 lg:py-22 xl:py-26
    
  "
>
  {/* Overlay (premium depth) */}
  <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-black/80" />
  <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/10 to-black/60" />

  {/* Soft RNK glow */}
  <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#A72740]/25 blur-3xl" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
    <div className="mx-auto w-full max-w-5xl text-center">

      {/* Glass panel (makes it feel premium + removes "center sticky") */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/5 backdrop-blur-md
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-12 lg:py-14
          shadow-[0_20px_70px_rgba(0,0,0,0.35)]
        "
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            mb-3
            text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]
            uppercase tracking-[0.30em] text-white/70
            wrap-break-word
          "
        >
          Luxury, Comfort & Precision
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            text-white
            font-light tracking-tight
            leading-[1.12] sm:leading-[1.12] md:leading-[1.1]
            mb-6
            text-[15px] sm:text-[1px] md:text-[22px] lg:text-[30px] xl:text-[38px] 2xl:text-[46px]
            wrap-break-word overflow-visible
            text-balance
          "
        >
          Luxury rental car services of your{" "}
          <span className="font-semibold text-red-900">choice</span>
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="
            text-white/85 mb-5
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
            leading-[1.75] sm:leading-[1.8] lg:leading-[1.9]
            wrap-break-word overflow-visible
            hyphens-auto
          "
        >
          Renting a luxury car for local travel isn’t just transportation —{" "}
          <span className="text-red-900 font-medium">it’s an elevated experience.</span>{" "}
          Whether you’re marking a special occasion, attending a corporate event,
          hosting global guests or indulging in premium comfort, RNK ensures every
          journey feels premium, polished and unforgettable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="
            text-white/80 mb-7
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
            leading-[1.75] sm:leading-[1.8] lg:leading-[1.9]
            wrap-break-word overflow-visible
            hyphens-auto
          "
        >
          Our fleet includes chauffeur-driven sedans, SUVs and luxury cars — each
          maintained with{" "}
          <span className="text-red-900 font-medium">precision, hygiene and detailing</span>{" "}
          to ensure a peaceful and comfortable ride every single time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="
            text-white/90 font-medium
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
            leading-[1.65] sm:leading-[1.7] lg:leading-[1.8]
            break-words overflow-visible
            [overflow-wrap:anywhere]
            [text-wrap:pretty]
          "
        >
          Your comfort. Your style.{" "}
          <span className="text-red-900 font-semibold">
            Your luxury journey begins with RNK.
          </span>
        </motion.p>
      </div>
    </div>
  </div>
</section>

     {/* ======================= SECTION 4 Why RNK? ======================= */}
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
         
        "
      >
        If luxury is what you are looking for,{" "}
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
        RNK offers much more than just premium cars. Every journey is designed
        around comfort, safety, reliability and a truly elevated travel
        experience. Here’s why guests and corporates choose our services:
      </p>
    </motion.div>

    {/* Cards grid */}
    <div
      className="
        grid w-full
        gap-4 sm:gap-5 lg:gap-6 xl:gap-7
        sm:grid-cols-2 lg:grid-cols-3
      "
    >
      {whyRnkItems.map((item, index) => {
        let initial: any = { opacity: 0, y: 30 };
        if (item.direction === "left") initial = { opacity: 0, x: -40, y: 20 };
        else if (item.direction === "right") initial = { opacity: 0, x: 40, y: 20 };
        else if (item.direction === "up") initial = { opacity: 0, y: 50 };
        else if (item.direction === "diagonal-left") initial = { opacity: 0, x: -30, y: 30 };
        else if (item.direction === "diagonal-right") initial = { opacity: 0, x: 30, y: 30 };
        else if (item.direction === "up-soft") initial = { opacity: 0, y: 40, scale: 0.96 };

        return (
          <motion.div
            key={item.title}
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.05,
            }}
            className="
              group relative overflow-hidden
              rounded-2xl border border-black/10 bg-white
              shadow-[0_14px_40px_rgba(15,23,42,0.10)]
              px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7
              flex flex-col
              min-h-[170px] sm:min-h-[190px] lg:min-h-[210px]
            "
          >
            {/* Top brand accent */}
            <span className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-red-900 via-red-900 to-red-900 opacity-80" />

            {/* Title */}
            <h3
              className="
                text-red-900 font-semibold
                text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]
                mb-2
                [text-wrap:balance]
                break-words
              "
            >
              {item.title}
            </h3>

            {/* Description */}
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
        );
      })}
    </div>
  </div>
</section>

     {/* ======================= SECTION 5 Corporate Solutions  ======================= */}
<section className="relative bg-black text-white border-b border-white/10 overflow-hidden">
  {/* Section padding */}
  <div className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">

    {/* Soft background glow */}
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#A72740]/18 blur-3xl" />
      <div className="absolute bottom-[-120px] -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">

     {/* ======================= CENTERED HEADING ======================= */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mb-10 sm:mb-12 lg:mb-14 text-center"
>
  {/* Label */}
  <p
    className="
      text-red-900
      uppercase tracking-[0.30em]
      text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]
      mb-3
    "
  >
    Corporate Solutions
  </p>

  {/* Main Heading */}
  <h2
    className="
      mx-auto
      max-w-4xl
      font-light tracking-tight
      text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[45px]
      leading-[1.15]
    
      mb-4
    "
  >
    Designed to support{" "}
    <span className="font-semibold text-red-900">
      every corporate need.
    </span>
  </h2>

  {/* Sub Paragraph */}
  <p
    className="
      mx-auto
      max-w-2xl
      text-white/70
      text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
      leading-[1.75] lg:leading-[1.85]
    "
  >
    From daily executive commutes to VIP convoys and long-term contracts,
    RNK builds mobility plans that match how your teams actually travel.
  </p>
</motion.div>

      {/* Cards */}
      <div
        className="
          grid w-full
          gap-4 sm:gap-5 lg:gap-6 xl:gap-7
          sm:grid-cols-2 lg:grid-cols-3
        "
      >
        {[
          "Executive office commute",
          "Client pick-ups & drop-offs",
          "Airport & railway transfers",
          "Meetings and site visits",
          "Intercity/Outstation corporate travel",
          "VIP & delegation movements",
          "Long-term company contracts",
         
        ].map((item, i) => {
          const fromLeft = i % 2 === 0;
          const fromTop = i % 3 === 0;

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
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.05,
              }}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-white/12
                bg-linear-to-br from-white/8 via-white/3 to-black/0
                shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7
                flex items-start
                min-h-[88px] sm:min-h-[96px] lg:min-h-[108px]
              "
            >
              {/* Brand accent */}
              <span className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-red-900 via-red-900 to-red-900 opacity-80" />

              <p
                className="
                  text-white/80
                  text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
                  leading-[1.65] lg:leading-[1.75]
                  break-words [overflow-wrap:anywhere]
                "
              >
                {item}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-[-35%] bg-linear-to-br from-[#A72740]/10 via-transparent to-white/10" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>


      {/* ======================= SECTION 6 Our Presence======================= */}
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
              RNK: Luxury Car Rental Services Across{" "}
              <span className="font-semibold text-red-900">Various Cities in India</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto leading-relaxed">
              RNK offers premium luxury car rental services across various cities in
              India, ensuring comfort, style, and convenience wherever you travel.
            </p>
          </motion.div>

          {/* Cards Grid */}
          {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {cities.map((city, i) => (
    <Link
      key={city.slug}
      href={`/city/${city.slug}`}
      aria-label={`Luxury car rental services in ${city.name}`}
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
            backgroundImage: `url('/cities/${city.slug}.webp')`,
          }}
        />

        {/* City Name */}
        <div className="absolute top-4 left-4 z-10">
          <p className="text-white text-base font-semibold">
            {city.name}
          </p>
        </div>

        {/* Hover text */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            translate-y-full group-hover:translate-y-0
            transition-all duration-500 ease-out
            p-6 text-center
          "
        >
          <p className="text-white text-xs md:text-sm leading-relaxed tracking-wide">
            Luxury Car Rental – {city.name}. Premium chauffeur-driven services for
            business, leisure, and events.
          </p>
        </div>
      </motion.div>
    </Link>
  ))}
</div>
        </div>
</section>

      {/* ======================= SECTION 7 FAQ======================= */}
      <section className="bg-black text-white border-b border-white/10">
  <div
    className="
      mx-auto w-full max-w-5xl
      px-4 sm:px-6 lg:px-8 xl:px-10
      py-14 sm:py-16 md:py-18 lg:py-20
    "
  >
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-8 sm:mb-10 lg:mb-12 text-center"
    >
      <p className="text-[10px] sm:text-[15px] uppercase tracking-[0.28em] text-red-900 mb-3">
        FAQs
      </p>

      <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-light">
        Frequently Asked <span className="font-semibold text-red-900">Questions</span>
      </h2>
    </motion.div>

    {/* FAQ List */}
    <div className="space-y-3 sm:space-y-4">
      {[
        [
          "Is corporate car rental better than cabs?",
          "Yes. You get a predictable, chauffeur-driven premium service without wait times.",
        ],
        [
          "Do you offer monthly corporate contracts?",
          "Yes, we offer monthly and yearly leasing options for companies.",
        ],
        [
          "Is billing GST supported?",
          "Yes, all invoices are GST compliant with monthly statements.",
        ],
        [
          "Are chauffeurs trained for VIP movements?",
          "All chauffeurs are trained in etiquette, safety and corporate protocol.",
        ],
      ].map(([q, a], i) => {
        const isOpen = openFaq === i;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="
              rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              overflow-hidden
            "
          >
            {/* HEADER */}
            <button
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="
                w-full
                px-4 sm:px-5
                py-4 sm:py-5
                flex items-center justify-between
                gap-4
                text-left
              "
            >
              <span className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white/90 leading-snug">
                {q}
              </span>

              {/* Chevron */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/60 text-xl sm:text-2xl leading-none shrink-0"
              >
                ⌄
              </motion.span>
            </button>

            {/* Brand accent */}
            {isOpen && (
              <div className="h-[2px] bg-linear-to-r from-[#A72740] to-transparent mx-4 sm:mx-5" />
            )}

            {/* ANSWER */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 pb-5 pt-3 text-[13px] sm:text-[14px] md:text-[15px] text-white/70 leading-relaxed">
                {a}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

  {/* ======================= SECTION 8 ======================= */}
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
            Premium Chauffeur-Driven Mobility
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
            RNK Rent A Car delivers premium chauffeur-driven travel across India —
            built for corporate leaders, families, celebrations and VIP movements.
            From punctual pickups to polished on-road experience, every ride is
            designed to feel effortless, safe and truly comfortable.
          </motion.p>

          {/* Trust points */}
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-3">
            {[
              {
                title: "Modern Fleet",
                desc: "Sedans, SUVs, luxury cars & group travel options.",
              },
              {
                title: "Trained Chauffeurs",
                desc: "Professional, courteous, route-smart service.",
              },
              {
                title: "24/7 Support",
                desc: "Always available for bookings & assistance.",
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
            Comfort. Reliability. Discretion.{" "}
            <span className="text-red-900 font-semibold">That’s RNK.</span>
          </motion.p>
        </div>
      </div>
    </section>
  

      {/* ======================= SECTION 9 — Final CTA ======================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Experience luxury, comfort & reliability — every time.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Book a chauffeur-driven premium vehicle for your next trip. Our fleet, service
            quality, and trained chauffeurs deliver world-class travel experiences.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full bg-red-900 text-white
                       text-sm uppercase tracking-wide"
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
