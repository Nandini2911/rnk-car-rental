"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ExperienceStrip() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="
          fixed inset-0 -z-10
          bg-[url('/about.webp')]
          bg-cover bg-center bg-no-repeat
        "
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      {/* ================= CONTENT ================= */}
      <div className="relative flex items-center justify-center px-6 py-[clamp(80px,12vw,160px)]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          {/* Label */}
          <p className="mb-3 text-[14px] tracking-[0.28em] uppercase text-white/75">
            Ramniranjan Kedia Rent A Car
          </p>

          {/* Heading */}
          <h2 className="text-[clamp(26px,3.2vw,46px)] font-semibold leading-tight text-white mb-4">
            Affordable Rentals,
            <br />
            <span className="text-red-900">
              Unforgettable Experiences
            </span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto max-w-2xl text-[clamp(18px,1.05vw,16px)] text-white/85 mb-8 leading-relaxed">
            Don&apos;t hesitate — experience comfort, reliability, and premium
            service every mile of the journey.
          </p>

          {/* CTA */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-red-900
                px-8 py-2.5
                text-[11px] font-semibold uppercase tracking-widest text-white
                hover:bg-black transition
              "
            >
              Contact Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
