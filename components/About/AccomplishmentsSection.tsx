"use client";

import { motion } from "framer-motion";

export function AccomplishmentsSection() {
  return (
    <section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
      {/* Wrapper with updated max-width to cover more width */}
      <div className="max-w-full md:max-w-8xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.img
            src="/about.webp" // Replace with your image
            alt="Image description"
            className="w-full h-full object-cover rounded-3xl overflow-hidden border border-black/10 shadow-xl max-h-[450px]"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Apply zoom effect on hover
          />
          <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.18em] text-white/75">
            Accolades and Recognition
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-900 mb-6">
            Accolades and Appreciation
          </h2>
          <p className="text-sm md:text-[15px] text-black/70 max-w-3xl leading-relaxed text-justify mb-6">
            The Government of India, through the Department of Tourism, bestowed its recognition upon the RNK group, further validating its commitment to exceptional service and unwavering quality. It was a testament to the tireless efforts of the entire team and their unyielding pursuit of excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
