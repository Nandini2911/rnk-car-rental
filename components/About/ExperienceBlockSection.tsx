"use client";

import { motion } from "framer-motion";

export function ExperienceBlockSection() {
  return (
    <section className="bg-black text-white py-16 md:py-20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.28em] text-white/60 mb-2">
            Legacy in motion
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-[#C8102E]">
            55+
          </h3>
          <p className="text-lg font-light text-white/70 mt-1">
            Years of Experience
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-[15px] text-white/75 leading-relaxed text-justify"
        >
          For over five decades, RNK has upheld a standard rooted in precision,
          discipline and customer-first values. Every journey we deliver carries
          the weight of our legacy and the trust of the countless clients who choose us.
        </motion.p>
      </div>
    </section>
  );
}
