"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 24, suffix: "+", label: "Premium Cars" },
  { value: 160, suffix: "+", label: "Cities Covered" },
  { value: 97, suffix: "%", label: "On-Time Movements" },
  { value: 200, suffix: "+", label: "Corporate & HNI Clients" },
];

/* ---------------- COUNT UP COMPONENT ---------------- */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.6,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [motionValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ---------------- MAIN SECTION ---------------- */
export function StatsStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        relative bg-black text-white overflow-hidden
        px-4 sm:px-6 md:px-10 lg:px-16
        py-14 sm:py-18 lg:py-22 2xl:py-24
        border-y border-white/10
      "
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-x-0 -top-28 mx-auto h-60 max-w-lg rounded-full bg-[#A72740]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 -bottom-20 h-60 w-60 rounded-full bg-[#A72740]/18 blur-3xl" />

      <div className="relative mx-auto max-w-[88rem]">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="uppercase tracking-[0.3em] text-neutral-400 text-[11px] sm:text-xs mb-3">
            RNK by the numbers
          </p>

          <h2 className="font-semibold text-[26px] sm:text-[32px] lg:text-[40px] xl:text-[46px] mb-4">
            Measured in <span className="text-[#A72740]">excellence</span>
          </h2>

          <p className="mx-auto max-w-3xl text-neutral-400 text-[13px] sm:text-sm lg:text-[15px] leading-relaxed">
            Every number reflects consistency, discipline, and trust built over
            decades of premium chauffeur-driven mobility.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 22px 48px rgba(0,0,0,0.6)",
              }}
              className="
                relative overflow-hidden
                rounded-2xl
                border border-white/10
                bg-gradient-to-b from-white/10 via-black/85 to-black
                p-5 sm:p-6 lg:p-7
                flex flex-col items-center
                text-center
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#A72740]/25 blur-3xl" />

              <p className="font-semibold text-[28px] sm:text-[34px] lg:text-[38px] mb-1">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>

              <p className="uppercase tracking-[0.2em] text-neutral-400 text-[11px] sm:text-xs">
                {stat.label}
              </p>

              <span className="mt-5 h-px w-12 bg-gradient-to-r from-[#A72740]/70 via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
