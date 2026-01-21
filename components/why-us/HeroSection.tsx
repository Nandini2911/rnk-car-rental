"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background Image */}
      <motion.img
        src="/about.webp"
        alt="RNK Luxury Rentals"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 sm:bg-black/65 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative w-full max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-16 py-24 sm:py-28 lg:py-32 text-center">
        <motion.div
       
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-5 lg:space-y-6"
        >
          {/* Breadcrumb */}
         <p
  className="
    flex justify-center gap-2
    tracking-wide
    text-white
    text-[11px]
    sm:text-xs
    md:text-sm
    lg:text-sm
    xl:text-base
    2xl:text-lg
  "
>
  <Link href="/" className="hover:text-white transition-colors">
    Home
  </Link>
  <span className="text-white">/</span>
  Why Us
</p>

         
          {/* Heading */}
          <div className="inline-block">
            <h1
              className="
                font-semibold leading-tight
               
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              
                text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]
              "
            >
              Why choose <span className="text-red-900">RNK Rentals?</span>
            </h1>

            {/* Accent Line */}
            <motion.span
              className="block h-[2px] w-12 sm:w-16 bg-red-900 rounded-full mt-3 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              style={{ transformOrigin: "left center" }}
            />
          </div>

          {/* Description */}
          <p
            className="
              mx-auto max-w-[42rem]
              text-white
              text-[13px]
              sm:text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
            "
          >
          “Luxury, reliability, and seamless Pan-India travel — delivered by RNK.”
          </p>
        </motion.div>

          {/* CTA BUTTONS */}
        <div
          className="
            mt-8 sm:mt-10
            flex flex-wrap justify-center gap-4
          "
        >
          {/* PRIMARY */}
          <a
            href="/contact"
            className="
              px-3 py-3
              sm:px-7 sm:py-3.5
              lg:px-8 lg:py-4
              rounded-full
              bg-red-900
              text-white
              text-[11px]
              sm:text-[12px]
              lg:text-[13px]
              font-semibold
              uppercase tracking-wide
              hover:bg-black
              transition
          
            "
          >
            Book Now
          </a>

          {/* SECONDARY */}
          <a
            href="/fleet"
            className="
              px-6 py-3
              sm:px-7 sm:py-3.5
              lg:px-8 lg:py-4
              rounded-full
              border border-white/40
              text-[11px]
              sm:text-[12px]
              lg:text-[13px]
              uppercase tracking-[0.22em]
              text-white
              hover:bg-white hover:text-black
              hover:border-white
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            View Fleet
          </a>
        </div>
      </div>
    </motion.section>
  );
}
