"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* ================= DATA ================= */

const uspItems = [
  {
    id: "standards",
    title: "We Maintain The Highest Standards",
    short:
      "Armed with a passion for excellence and a deep understanding of the industry, RNK stands for professionalism, punctuality and trust.",
    long: `At RNK Rent A Car, we maintain the highest standards in every aspect of our service — from the quality and cleanliness of our vehicles to the professionalism of our team. With a strong commitment to safety, punctuality, and customer satisfaction, we aim to provide a seamless and reliable transportation experience across every corner of India.

Whether you're renting for business or leisure, our well-maintained fleet and personalised support ensure that your journey is comfortable, convenient, and worry-free.`,
    image: "/upsection1.webp",
  },
  {
    id: "luxury",
    title: "Enjoy The Sheer Luxury Of Vehicles",
    short:
      "Experience unmatched comfort with RNK’s premium fleet — crafted to deliver first-class journeys for every occasion.",
    long: `At RNK Rent A Car, we invite you to experience unmatched comfort and class with our premium fleet. Whether you're travelling for business, leisure, or a special occasion, our luxury vehicles are designed to deliver a first-class experience every time.

Indulge in smooth rides, elegant interiors, and top-tier features — because you deserve nothing less.`,
    image: "/upsection2.webp",
  },
  {
    id: "packages",
    title: "Offer Packages To Suit Customer Needs",
    short:
      "From hourly rentals to long-term programs, every package is designed around your schedule, comfort, and requirements.",
    long: `At RNK Rent A Car, we understand that every journey is unique. That’s why we offer flexible rental packages designed to suit your specific requirements — whether it’s for a few hours, a full day, or long-term use.

From business travel to family vacations, our customisable solutions ensure you get exactly what you need, with no compromise on quality or service.`,
    image: "/upsection3.webp",
  },
];

/* ================= ANIMATIONS ================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

type UspItem = (typeof uspItems)[number];

export function USPSection() {
  const [active, setActive] = useState<UspItem | null>(null);

  return (
<section className="relative bg-black text-white py-[clamp(65px,7vw,140px)] overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/85 to-black" />

      <div className="w-full max-w-[2200px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">

        {/* ================= HEADING ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
className="text-center mb-[clamp(40px,4.5vw,80px)]"
        >
          <motion.h2
            variants={slideUp}
className="font-semibold text-[clamp(30px,3vw,60px)] mb-2"
          >
            Why Choose <span className="text-red-900">RNK ?</span>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-[clamp(15px,1.3vw,22px)] text-neutral-300 max-w-3xl mx-auto"
          >
            Discover the unique benefits and features that set RNK Rent A Car apart.
          </motion.p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10"
        >
          {uspItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(167,39,64,0.35),transparent_65%)]" />

              <div className="relative bg-black/75 border border-white/10 rounded-3xl px-6 py-6
lg:px-7 lg:py-7
2xl:px-9 2xl:py-9
 backdrop-blur-sm shadow-[0_14px_50px_rgba(0,0,0,0.7)] flex flex-col h-full">

                <motion.p
                  variants={slideUp}
                  className="text-[11px] lg:text-[12px] 2xl:text-[13px] uppercase tracking-[0.28em] text-neutral-400 mb-2"
                >
                  0{index + 1} · Highlight
                </motion.p>

                <motion.h3
                  variants={slideUp}
                  className="font-semibold mb-2 text-[clamp(19px,1.5vw,26px)]"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  variants={slideUp}
                  className="text-[clamp(14px,1.15vw,18px)] text-neutral-300 leading-relaxed line-clamp-4"
                >
                  {item.short}
                </motion.p>

                <motion.button
                  variants={slideUp}
                  onClick={() => setActive(item)}
                  className="mt-auto pt-6
 inline-flex items-center gap-2 text-[11px] lg:text-[12px] 2xl:text-[13px] uppercase tracking-[0.28em] text-red-900 hover:text-white transition"
                >
                  Read More
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= POPUP ================= */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white text-black max-w-5xl w-full rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.65)] flex flex-col md:flex-row max-h-[80vh]"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/10 hover:bg-black/20 transition text-xl"
            >
              ×
            </button>

            <div className="relative w-full md:w-[45%] h-64 md:h-auto">
              <Image src={active.image} alt={active.title} fill className="object-cover" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="w-full md:w-[55%] p-6 md:p-8 2xl:p-12 overflow-y-auto"
            >
              <h3 className="text-[clamp(22px,2.2vw,32px)] font-semibold mb-4">
                {active.title}
              </h3>

              <p className="text-[clamp(15px,1.15vw,19px)] text-neutral-700 leading-relaxed whitespace-pre-line">
                {active.long.trim()}
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
