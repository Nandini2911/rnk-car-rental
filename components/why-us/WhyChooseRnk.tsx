"use client";

import { motion } from "framer-motion";

export function WhyChooseRNK() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 2xl:py-28">
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            font-semibold text-red-900
            text-[24px] sm:text-[28px] md:text-[34px]
            lg:text-[44px] xl:text-[48px]
            2xl:text-[56px]
            mb-3 sm:mb-4
          "
        >
          Why Choose RNK Rentals?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="
            mx-auto max-w-3xl
            text-neutral-600
            text-[13px] sm:text-sm md:text-[15px] lg:text-[16px]
            leading-relaxed
            mb-10 sm:mb-12 2xl:mb-16
          "
        >
          With over 55 years of experience, RNK Rentals delivers a premium fleet
          and refined chauffeur-driven services for high-net-worth individuals,
          corporations, and exclusive events across 30+ cities in India.
        </motion.p>

        {/* Features */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {[
            {
              title: "Unmatched Luxury",
              desc: "Travel in style with a curated fleet featuring Mercedes, Audi, BMW, and other premium vehicles.",
            },
            {
              title: "24/7 Dedicated Support",
              desc: "Round-the-clock assistance ensuring seamless travel, even when plans change unexpectedly.",
            },
            {
              title: "Nationwide Coverage",
              desc: "Operations across 30+ cities, delivering consistent service wherever your journey takes you.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 48px rgba(167,39,64,0.2)",
              }}
              className="
                relative
                bg-white
                rounded-3xl
                p-5 sm:p-6 lg:p-8 2xl:p-10
                text-left
                border border-red-900
                transition-all duration-300
                overflow-hidden
                max-w-md mx-auto
              "
            >
              {/* Subtle red glow */}
              <div className="pointer-events-none absolute -top-24 -right-6 h-28 w-58 rounded-full bg-red-900 blur-2xl opacity-60" />

              <h3 className="text-red-900 font-semibold text-[16px] sm:text-[17px] lg:text-[20px] mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-600 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= SECTION SEPARATOR ================= */}
       
      </div>
    </section>
  );
}
