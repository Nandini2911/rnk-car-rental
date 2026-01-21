"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    step: "Step 01",
    title: "Share Your Requirement",
    description:
      "Tell us your route, occasion, car preference and schedule — from a single airport transfer to multi-day movements.",
  },
  {
    step: "Step 02",
    title: "Curated Fleet & Quotation",
    description:
      "Our team recommends the ideal fleet mix with transparent pricing, chauffeurs and coordination tailored to your need.",
  },
  {
    step: "Step 03",
    title: "Confirmation & Scheduling",
    description:
      "Once approved, your itinerary is locked-in, vehicles are reserved, and a dedicated coordinator is assigned.",
  },
  {
    step: "Step 04",
    title: "Smooth On-Ground Execution",
    description:
      "Chauffeurs arrive on time, routes are pre-planned, and every movement is tracked for a seamless RNK experience.",
  },
];

/* GRID STAGGER */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* CARD FADE */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function HowItWorksSection() {
  return (
    <section
  id="how-it-works"
  className="relative w-full bg-white text-black py-[clamp(55px,6vw,120px)]"
>

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full max-w-[2000px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-28">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-120px" }}
className="flex flex-col items-center text-center gap-4 mb-[clamp(36px,4.5vw,64px)]"
        >
          <p className="uppercase tracking-[0.35em] text-[clamp(11px,0.9vw,14px)] text-red-900">
            How It Works
          </p>

<h2 className="font-semibold leading-tight text-[clamp(30px,3vw,58px)] max-w-5xl">
            A Seamless Journey,
            <br />
            <span className="text-red-900">
              Designed For Every Traveller.
            </span>
          </h2>

          <p className="text-[clamp(15px,1.25vw,20px)] text-neutral-600 max-w-3xl leading-relaxed">
            Whether it's a board meeting, a wedding convoy, or an airport run —
            we’ve simplified the process into a few polished steps, handled
            end-to-end by RNK’s expert team.
          </p>
        </motion.div>

        {/* ================= STEPS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
gap-5 lg:gap-7 2xl:gap-8
          "
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="
                group flex flex-col
                bg-white
                border border-neutral-200
                rounded-xl
               px-5 py-5
lg:px-6 lg:py-6
2xl:px-7 2xl:py-7
mb-3

                shadow-[0_6px_24px_rgba(0,0,0,0.06)]
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)]
                hover:border-red-900
                transition-all
              "
            >
              {/* STEP HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
                    h-9 w-9
                    lg:h-10 lg:w-10
                    2xl:h-12 2xl:w-12
                    rounded-full bg-red-900 text-white
                    flex items-center justify-center
                    text-[12px] lg:text-[13px] 2xl:text-[14px]
                    font-semibold
                    shadow-[0_0_14px_rgba(167,39,64,0.5)]
                  "
                >
                  {index + 1}
                </div>

                <span className="text-[11px] lg:text-[12px] 2xl:text-[13px] uppercase tracking-[0.25em] text-neutral-500">
                  {item.step}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="
                  font-semibold
                  text-[clamp(16px,1.2vw,18px)]
                  lg:text-[19px]
                  2xl:text-[22px]
                  mb-2
                  text-black
                  group-hover:text-red-900
                  transition-colors
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[clamp(14px,1.1vw,16px)]
                  lg:text-[16px]
                  2xl:text-[18px]
                  text-neutral-700
                  leading-relaxed
                "
              >
                {item.description}
              </p>

              {/* FOOTER */}
              <div
                className="
                mt-auto pt-4

                  flex items-center justify-between
                  text-[11px]
                  lg:text-[12px]
                  2xl:text-[13px]
                  text-neutral-500
                "
              >
                <span className="uppercase tracking-[0.22em] group-hover:text-red-900 transition-colors">
                  {index === 0
                    ? "Start Here"
                    : index === steps.length - 1
                    ? "Enjoy The Ride"
                    : "Next Step"}
                </span>

                <span className="text-xs group-hover:translate-x-1 group-hover:text-red-900 transition-all">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
