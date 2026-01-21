"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden border-b border-white/10
        h-[50vh]
        sm:h-[58vh]
        md:h-[68vh]
        lg:h-[88vh]
        xl:h-screen
        2xl:h-screen
        pt-[76px] sm:pt-[88px] lg:pt-24
      "
    >
      {/* Background Image */}
      <motion.img
        src="/about.webp"
        alt="RNK About"
        className="
          absolute inset-0 w-full h-full
          object-cover
          object-[50%_30%]
          sm:object-[50%_35%]
          md:object-center
        "
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80 z-10" />

      {/* CONTENT – PERFECT CENTER */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="px-4 text-center max-w-xl sm:max-w-2xl">

          {/* Breadcrumb */}
          <motion.div
            className="
              mb-3 text-[10px] sm:text-xs
              uppercase tracking-[0.22em]
              text-white/90 flex justify-center gap-2
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-900">About Us</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="
              text-white font-semibold leading-tight
              
              text-[22px]
              sm:text-3xl
              md:text-4xl
              lg:text-5xl

              
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Redefining Luxury Car Rental Services
            <span className="block mt-1">
              since <span className="text-red-900">1969</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="
              mt-3 text-white/90
              text-[13px] sm:text-sm
              max-w-md mx-auto
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Over 55 years of excellence, serving 170+ cities and trusted by
            corporates and travelers.
          </motion.p>

          {/* CTA */}
          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              href="/contact-us"
              className="
                bg-red-900 text-white px-7 py-2.5 rounded-full
                text-xs font-semibold uppercase tracking-wide
                hover:bg-black transition shadow-lg
              "
            >
              Book Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
