"use client";

import { motion } from "framer-motion";

export function HeritageSection() {
  return (
    <section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
      {/* Wrapper with updated max-width to cover more width */}
      <div className="max-w-full md:max-w-8xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start off-screen from the left
          whileInView={{ opacity: 1, x: 0 }} // Slide into the normal position
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-red-900">
            Ramniranjan Kedia Rent A Car Pvt. Ltd.
          </h2>
          <p className="text-sm md:text-[15px] text-black/70 max-w-3xl leading-relaxed text-justify mb-6">
            Offering excellence since 1969, operating today across 170+ cities Pan India.
            <br /><br />
            What began in 1969 as a modest vision soon became a landmark journey. In the bustling heart of Mumbai, Shri Ramniranjan Kedia, along with co-founder Mr. Kamal Kedia, laid the foundation of what would evolve into the RNK Group — a name now synonymous with refined travel, dependable service, and elevated car rental experiences.
            <br /><br />
            Armed with a passion for excellence and an intuitive understanding of the travel industry, they built a company that redefined expectations. Over the decades, RNK expanded rapidly, establishing strong operational bases across India’s key cities and becoming a symbol of trust, reliability, and innovation.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          whileInView={{ opacity: 1, x: 0 }} // Slide into the normal position
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl flex-1"
        >
          <motion.img
            src="/about.webp" // Replace with your high-quality image
            alt="Founding years of RNK Rentals"
            className="w-full h-full object-cover max-h-[450px]"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.18em] text-white/75">
            Since 1969 · Mumbai Origin
          </div>
        </motion.div>
      </div>
    </section>
  );
}
