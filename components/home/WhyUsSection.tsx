"use client";

import { motion, type Variants } from "framer-motion";
import {
  Car,
  BadgeDollarSign,
  Headset,
  RefreshCcw,
  Layers,
} from "lucide-react";

const items = [
  {
    title: "Wide Selection",
    description:
      "From compact city cars to luxury SUVs, our fleet suits every journey.",
    icon: <Car size={28} strokeWidth={1.5} />,
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent pricing with no hidden charges, delivering true value.",
    icon: <BadgeDollarSign size={28} strokeWidth={1.5} />,
  },
  {
    title: "Customer Support",
    description:
      "Dedicated assistance before, during, and after your ride.",
    icon: <Headset size={28} strokeWidth={1.5} />,
  },
  {
    title: "Flexible Rentals",
    description:
      "Hourly, daily, or long-term plans tailored to your needs.",
    icon: <RefreshCcw size={28} strokeWidth={1.5} />,
  },
  {
    title: "Add-On Services",
    description:
      "GPS, child seats, insurance & more for peace of mind.",
    icon: <Layers size={28} strokeWidth={1.5} />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative bg-white text-black py-[clamp(56px,6vw,110px)]"
    >
      {/* EXTRA-WIDE CONTAINER */}
      <div className="w-full max-w-[1800px] mx-auto px-[clamp(16px,3vw,56px)]">

        {/* ================= HEADING ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-[clamp(36px,4.5vw,64px)]"
        >
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-[0.32em] text-[clamp(11px,0.9vw,13px)] text-red-900 mb-2"
          >
            Why RNK
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="font-semibold leading-tight text-[clamp(28px,2.8vw,48px)]"
          >
            Trusted By Thousands,
            <br />
            <span className="text-red-900">Loved For Our Service.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-3xl mx-auto text-[clamp(14px,1.05vw,17px)] text-neutral-600"
          >
            We don’t just rent cars — we deliver reliability, comfort, and
            consistency across every journey.
          </motion.p>
        </motion.div>

        {/* ================= 5 CARD GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            grid
            gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.025 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              className="
                relative
                group
                bg-white
                border border-neutral-200
                rounded-2xl
                p-5
                2xl:p-6
                min-h-[220px]
                2xl:min-h-[250px]
                shadow-[0_6px_24px_rgba(0,0,0,0.07)]
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)]
                transition-all
                flex flex-col
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(167,39,64,0.22),transparent_60%)] transition-opacity" />

              {/* Icon */}
              <div className="mb-4 text-red-900 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16px] 2xl:text-[18px] font-semibold mb-1.5 group-hover:text-red-900 transition-colors">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-[13.5px] 2xl:text-[15px] text-neutral-600 leading-relaxed">
                {item.description}
              </p>

              {/* Accent */}
              <span className="mt-auto block h-[2.5px] w-0 bg-red-900 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
