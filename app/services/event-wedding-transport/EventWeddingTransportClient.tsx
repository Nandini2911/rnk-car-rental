"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";
import { CitiesSection } from "@/components/CitiesSection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const whyRnkItems = [
  {
    title: "Perfectly managed guest logistics",
    description:
      "From airport pickups to hotel-to-venue transfers, our end-to-end logistics ensure your guests, family, VIPs and delegates travel smoothly and reach every function or event on time.",
    direction: "left",
  },
  {
    title: "Luxury fleet for weddings & events",
    description:
      "Choose from sedans, SUVs, Mercedes, BMWs, Audi, luxury vans and convoy vehicles — ideal for groom entry, bridal travel, VIP guests and high-profile attendees.",
    direction: "right",
  },
  {
    title: "Dedicated coordination team",
    description:
      "A specialised coordination desk handles venue schedules, route planning, guest lists, timing management and last-minute changes for weddings and large-scale events.",
    direction: "up",
  },
  {
    title: "Professional chauffeurs",
    description:
      "Our chauffeurs are trained for hospitality, premium guest handling, event protocol, multi-stop requirements and late-night travel during celebrations or corporate events.",
    direction: "diagonal-left",
  },
  {
    title: "Realtime tracking & safety",
    description:
      "All vehicles are GPS-enabled for safe, secure transportation during wedding functions, VIP movements, exhibitions, conferences and backstage crew mobility.",
    direction: "diagonal-right",
  },
  {
    title: "Seamless multi-day operations",
    description:
      "Ideal for 2–5 day destination weddings, exhibitions, shoots or summits where constant movement of guests, VIPs and team members is required.",
    direction: "up-soft",
  },
];

const cities = [
  "Mumbai",
  "Delhi",
  "Chennai",
  "bengaluru",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Vadodara",
  "Indore",
  "Bhopal",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Goa",
  "Kochi",
  "Guwahati",
  "Bhubaneswar",
];

export default function EventWeddingTransportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />

      {/* ======================= HERO (FULL BLEED like previous) ======================= */}
      <section
        className="
          relative overflow-hidden border-b border-white/10
          h-[75svh] sm:h-[60svh] md:h-[100vh]
          w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        "
      >
        <motion.img
          src="/about.webp"
          alt="Event & Wedding Transport RNK"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-white"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Event / Wedding Transport</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="t font-light leading-[1.1] text-white
              text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]"
            >
              Event / Wedding Transport
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
              className="mt-4 mx-auto max-w-2xl text-white/80 text-[13px] sm:text-sm md:text-[19px] leading-relaxed"
            >
              Premium, punctual and elegantly managed transport for weddings, VIPs,
              artists, crew, delegates and large-scale corporate events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="mt-7 flex justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full max-w-[150px] rounded-full bg-red-900 px-3 py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white hover:bg-black/80 transition"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= SECTION 2 (EDGE-TO-EDGE text + image) ======================= */}
      <section className="bg-white text-black border-b border-black/10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-14 sm:py-16 lg:py-20">
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
                Seamless mobility for{" "}
                <span className="font-semibold text-red-900">weddings & events.</span>
              </h2>

              <p className="text-[13px] sm:text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
                Whether it’s a luxury wedding, destination celebration, corporate event,
                exhibition, conference or VIP gathering — RNK ensures every travel moment
                runs perfectly.
              </p>

              <p className="text-[13px] sm:text-sm md:text-[15px] text-black/75 mb-6 leading-relaxed">
                From airport pickups to mandap arrivals, backstage crew drops or VIP
                green-room movements — our coordination team manages everything end-to-end.
              </p>

              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  rounded-2xl p-5 sm:p-6 border border-red-900
                  bg-gradient-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40
                  shadow-[0_10px_30px_rgba(200,16,46,0.18)]
                  text-left mt-14
                "
              >
                <h3 className="text-sm font-semibold text-red-900 mb-2 tracking-wide">
                  Specialised Event Services
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
                  alt="Event & Wedding Travel RNK"
                  className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[620px] object-cover object-center"
                  initial={{ scale: 1.06, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>

              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#C8102E]/15 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= SECTION 3 (BG image + glass panel) ======================= */}
      <section
        className="
          relative overflow-hidden border-b border-black/10
          py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28
         
        "
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/10 to-black/60" />
        <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C8102E]/25 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="mx-auto w-full max-w-5xl text-center">
            <div
              className="
                rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
                px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14
                shadow-[0_20px_70px_rgba(0,0,0,0.35)]
              "
            >
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-3 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] uppercase tracking-[0.30em] text-white/70"
              >
                Hospitality • Precision • Luxury
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                  text-white font-light tracking-tight leading-[1.12]
                  mb-6
                  text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[46px]
                  [text-wrap:balance]
                "
              >
                Luxury transport for{" "}
                <span className="font-semibold text-red-900">
                  every celebration.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                className="
                  text-white/85 mb-5
                  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                  leading-[1.75] sm:leading-[1.8] lg:leading-[1.9]
                "
              >
                Whether transporting 20 guests or 2,000 — RNK delivers a seamless,
                comfortable and perfectly coordinated experience for weddings, corporate
                events and destination celebrations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                className="
                  text-white/80 mb-7
                  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                  leading-[1.75] sm:leading-[1.8] lg:leading-[1.9]
                "
              >
                Luxury cars, SUVs, vans, shuttles and convoys — maintained with precision,
                hygiene and event-ready hospitality.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="
                  text-white/90 font-medium
                  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                  leading-[1.65] sm:leading-[1.7] lg:leading-[1.8]
                "
              >
                One team, one fleet —{" "}
                <span className="text-red-900 font-semibold">
                  flawless transport for every function.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= SECTION 4 (Why RNK) ======================= */}
      <section className="bg-white text-black border-b border-black/10">
        <div
          className="
            mx-auto w-full max-w-7xl
            px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24
            py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <p className="text-red-900 font-bold uppercase tracking-[0.30em] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] mb-2">
              Why RNK?
            </p>

            <h2
              className="
                mx-auto max-w-5xl font-light tracking-tight text-black
                text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px]
                leading-[1.15] md:leading-[1.12] mb-3 sm:mb-4 [text-wrap:balance]
              "
            >
              A luxury experience for{" "}
              <span className="font-semibold text-red-900">
                every function & event.
              </span>
            </h2>

            <p
              className="
                mx-auto max-w-4xl text-black/70
                text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]
                leading-[1.75] lg:leading-[1.85]
              "
            >
              RNK goes beyond basic travel. Our event & wedding transport is built around
              timing, hospitality and guest comfort — so every arrival feels as special
              as the occasion itself.
            </p>
          </motion.div>

          <div className="grid w-full gap-4 sm:gap-5 lg:gap-6 xl:gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-black/10 bg-white
                    shadow-[0_14px_40px_rgba(15,23,42,0.10)]
                    px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7
                    flex flex-col
                    min-h-[170px] sm:min-h-[190px] lg:min-h-[210px]
                  "
                >
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-red-900 via-[#C8102E] to-red-900/70 opacity-80" />

                  <h3 className="text-red-900 font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] mb-2 [text-wrap:balance]">
                    {item.title}
                  </h3>

                  <p className="text-black/70 text-[13px] sm:text-[13.5px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.7] lg:leading-[1.85]">
                    {item.description}
                  </p>

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-35%] bg-linear-to-br from-[#C8102E]/8 via-transparent to-[#C8102E]/12" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= SECTION 5 (Dark solutions) ======================= */}
 <section className="relative bg-black text-white border-b border-white/10 overflow-hidden min-h-[90vh] flex items-center">
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
          Event & Wedding Mobility
        </p>

      <h2
  className="
    w-full
    text-center
    font-light tracking-tight
    text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px]
    leading-[1.25]
    break-words
  "
>
  Designed to support{" "}
  <span className="font-semibold text-red-900">
    every celebration, seamlessly.
  </span>
</h2>




        {/* Sub paragraph */}
        <p className="w-full text-center text-white/70 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.75] lg:leading-[1.85] max-w-3xl mx-auto">
          From intimate family weddings to large-scale events, RNK manages guest
          movement with precision, comfort, and impeccable timing — so every
          moment arrives exactly as planned.
        </p>
      </motion.div>

      {/* CENTER GRID */}
      <div className="grid w-full justify-items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Luxury chauffeur-driven transport for weddings & events",
          "Guest pickup & drop coordination across venues",
          "Bride, groom & family car allocations",
          "Artist, VIP & celebrity movement management",
          "On-ground fleet supervisors & coordinators",
          "Backup vehicles for zero-delay assurance",
          "Timely arrivals for ceremonies, functions & departures",
          
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

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-[-35%] bg-linear-to-br from-[#C8102E]/10 via-transparent to-white/10" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </div>
</section>



      {/* ======================= SECTION 6 (Cities / Presence) ======================= */}
      <section>
        <CitiesSection/>
      </section>

      
      {/* ======================= SECTION 7 (FAQ) ======================= */}
      <section className="bg-black text-white border-b border-white/10">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-10 py-14 sm:py-16 md:py-18 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center"
          >
            <p className="text-[10px] sm:text-[15px] uppercase tracking-[0.28em] text-red-900 mb-3">
              FAQs
            </p>

            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-light">
              Frequently Asked <span className="font-semibold">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {[
              [
                "Do you provide wedding cars for groom and bride entry?",
                "Yes. We offer premium sedans, SUVs and luxury cars for grand bridal and groom entries.",
              ],
              [
                "Can you handle large guest logistics for multi-day weddings?",
                "Absolutely — our coordination team manages airport pickups, hotel loops and venue transfers across all days.",
              ],
              [
                "Do you provide shuttle services for events?",
                "Yes. We offer shuttle loops, VIP drops, crew mobility and backstage support vehicles.",
              ],
              [
                "Are your chauffeurs trained for VIP and celebrity movements?",
                "Yes — chauffeurs follow hospitality etiquette, confidentiality and event-ready protocols.",
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
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.45)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white/90 leading-snug">
                      {q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-xl sm:text-2xl leading-none shrink-0"
                    >
                      ⌄
                    </motion.span>
                  </button>

                  {isOpen && (
                    <div className="h-[2px] bg-linear-to-r from-red-900 to-transparent mx-4 sm:mx-5" />
                  )}

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
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
{/* ======================= SMALL TEXT (LIKE SCREENSHOT) ======================= */}
<section className="bg-white text-black border-b border-black/10">
  <div className="max-w-7xl mx-auto px-6 py-12 sm:py-14">
    <div className="max-w-5xl mx-auto text-center">
      {/* Label */}
      <p className="text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.30em] text-red-900 font-bold mb-4">
        Premium Chauffeur-Driven Mobility
      </p>

      {/* Main paragraph */}
      <p className="text-[14px] sm:text-[15px] md:text-[17px] text-black/70 leading-relaxed">
        RNK Rent A Car offers chauffeur-driven transport solutions for weddings, events,
        VIP movements and corporate gatherings across India — blending timing, comfort and
        premium hospitality in one seamless service.
      </p>

      {/* 3 Cards */}
      <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-3">
        {[
          {
            title: "Modern Fleet",
            desc: "Sedans, SUVs, luxury cars & group travel options.",
          },
          {
            title: "Trained Chauffeurs",
            desc: "Professional, courteous, event-ready service.",
          },
          {
            title: "24/7 Support",
            desc: "On-ground coordination for every schedule change.",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-black/10 bg-white px-5 py-6
                       shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
          >
            <p className="text-[14px] sm:text-[15px] font-semibold text-red-900 mb-2">
              {x.title}
            </p>
            <p className="text-[12.5px] sm:text-[13px] md:text-[14px] text-black/65 leading-relaxed">
              {x.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Closing line */}
      <p className="mt-8 text-[12.5px] sm:text-[13px] md:text-[14px] text-black/55">
        Comfort. Reliability. Discretion.{" "}
        <span className="text-red-900 font-semibold">That’s RNK.</span>
      </p>
    </div>
  </div>
</section>


      {/* ======================= FINAL CTA ======================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Seamless travel for every guest, function & event.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Book luxury chauffeur-driven vehicles for your upcoming wedding or event.
            Our fleet, hospitality and coordination ensure a flawless experience.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full bg-red-900 text-white text-sm uppercase tracking-wide"
          >
            Book Your Ride
          </motion.a>
        </div>
      </section>

      <RnkFooter />
    </main>
  );
}
