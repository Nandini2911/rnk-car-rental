"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.18,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

export function IntroSection() {
  return (
    <section
      className="
        relative
        left-1/2 right-1/2
        -translate-x-1/2
        w-screen
        bg-white
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1800px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
py-12 sm:py-16 lg:py-20
          grid grid-cols-1 lg:grid-cols-2
          gap-14 lg:gap-20
          items-center
        "
      >
        {/* TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center flex flex-col items-center"
        >
          {/* EYEBROW */}
          <motion.p
            variants={itemVariants}
            className="
              uppercase
              tracking-[0.32em]
              text-[clamp(11px,0.9vw,14px)]
              text-[#A72740]
              mb-3
            "
          >
            Ramniranjan Kedia Rent A Car Pvt. Ltd
          </motion.p>

          {/* HEADING */}
          <motion.h2
            variants={itemVariants}
            className="
              font-semibold
              text-[clamp(30px,3.5vw,64px)]
              leading-[1.15]
              max-w-3xl
              mb-4
              text-[#A72740]
            "
          >
            Redefining Luxury Car Rental Services
          </motion.h2>

          {/* LEAD LINE */}
          <motion.p
            variants={itemVariants}
            className="
              text-[clamp(15px,1.4vw,20px)]
              text-neutral-700
              max-w-xl
              mb-3
            "
          >
            Offering excellence since 1969, across{" "}
            <span className="font-semibold text-black">
              170+ cities Pan India.
            </span>
          </motion.p>

          {/* BODY */}
          <motion.p
            variants={itemVariants}
            className="
              text-[clamp(14px,1.25vw,18px)]
              leading-relaxed
              text-neutral-700
              max-w-2xl
              mb-4
            "
          >
            At <span className="font-semibold">RNK – Ramniranjan Kedia Group</span>,
            we deliver premium chauffeur-driven experiences across India —
            blending comfort, reliability and luxury in every journey.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mt-4"
          >
            <a
              href="/about"
              className="
                px-6 py-3
                rounded-full
                bg-red-900
                text-white
                text-[clamp(11px,0.8vw,13px)]
                font-semibold
                uppercase
                tracking-wide
                hover:bg-black
                transition
              "
            >
              Read More
            </a>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#A72740]/10 border border-[#A72740]/40 flex items-center justify-center">
                <span className="text-[#A72740] font-semibold text-lg">
                  56+
                </span>
              </div>
              <p className="text-[clamp(12px,0.9vw,14px)] text-neutral-700">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full"
        >
          <div
            className="
              relative
            h-[240px] sm:h-[320px] md:h-[400px]
lg:h-[500px] xl:h-[560px]

              rounded-2xl
              overflow-hidden
              bg-neutral-900
            "
          >
            <Image
              src="/intro.jpg"
              alt="RNK luxury fleet"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-tr from-[#A72740]/60 via-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
