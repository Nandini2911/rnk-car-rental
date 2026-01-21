"use client";

import { motion } from "framer-motion";

export function ContactUs() {
  return (
    <section className="bg-white text-red-900">
      <div
        className="
          mx-auto w-full
          max-w-[1400px]
          px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10
          py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 2xl:py-32
          text-center
        "
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            font-semibold tracking-tight
            text-[20px]
            xs:text-[22px]
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            xl:text-[42px]
            2xl:text-[50px]
            mb-4 sm:mb-5
          "
        >
          Ready to Experience Luxury Travel?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="
            mx-auto
            max-w-md sm:max-w-lg md:max-w-2xl xl:max-w-3xl
            text-neutral-700
            text-[12px]
            xs:text-[13px]
            sm:text-sm
            md:text-base
            lg:text-lg
            xl:text-[18px]
            leading-relaxed
            mb-8 sm:mb-10
          "
        >
          Book your ride today or contact us to know more about our premium
          chauffeur-driven services.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/contact-us"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            inline-flex items-center justify-center
            rounded-full
            bg-red-900 text-white
            font-semibold
            shadow-md
            transition-colors duration-300
            hover:bg-black
            px-6 py-2.5
            sm:px-7 sm:py-3
            md:px-9 md:py-3.5
            text-sm sm:text-base md:text-lg
          "
        >
          Get a Quote
        </motion.a>
      </div>
    </section>
  );
}
