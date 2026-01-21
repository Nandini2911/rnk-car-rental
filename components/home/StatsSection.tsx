"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ================= DATA ================= */

const statItems = [
  { value: 56, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Vehicles" },
  { value: 2, suffix: "M", label: "Trips Done" },
  { value: 120, suffix: "+", label: "Corporate Clients" },
  { value: 24, suffix: "/7", label: "Support" },
];

const images = [
  { src: "/statsSection1.jpg", position: "top-6 left-6" },
  { src: "/statsSection2.webp", position: "bottom-10 left-12" },
  { src: "/statsSection3.webp", position: "top-10 right-10" },
  { src: "/statsSection4.jpg", position: "bottom-6 right-6" },
];

/* ================= EASING ================= */

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/* ================= SINGLE STAT ================= */

function AnimatedStat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix?: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      setCount(value * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <p className="font-semibold tabular-nums text-[clamp(24px,2.2vw,36px)]">
        {suffix === "M" ? count.toFixed(1) : Math.round(count)}
        {suffix}
      </p>

      <p className="mt-1.5 text-[clamp(10px,0.75vw,12px)] tracking-[0.22em] uppercase text-neutral-300 text-center">
        {label}
      </p>
    </motion.div>
  );
}

/* ================= MAIN SECTION ================= */

export function StatsSection() {
  return (
    <section className="relative bg-[#111111] text-white overflow-hidden py-[clamp(70px,8vw,120px)]">
      {/* Angled edges */}
      <div className="absolute -top-10 left-0 w-full h-20 bg-[#111111] rotate-3 origin-left" />
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-[#111111] -rotate-3 origin-left" />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,39,64,0.2),transparent_65%)]" />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Floating Images */}
        <div className="hidden lg:block">
          {images.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`absolute ${img.position}
                w-[130px] h-[90px]
                xl:w-[160px] xl:h-[110px]
                2xl:w-[190px] 2xl:h-[130px]
                overflow-hidden`}
            >
              <Image
                src={img.src}
                alt="RNK moments"
                fill
                className="object-cover rounded-sm [clip-path:polygon(8%_0%,100%_0%,92%_100%,0%_100%)]"
              />
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <p className="text-[clamp(11px,0.9vw,14px)] tracking-[0.28em] uppercase text-neutral-300 mb-6">
            RNK in Numbers
          </p>

          <h2 className="font-semibold leading-tight text-[clamp(28px,3vw,48px)] mb-4">
            Decades of Trust,
            <span className="text-red-900"> Millions of Miles.</span>
          </h2>

          <p className="text-[clamp(13px,1vw,17px)] text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-12">
            From corporate corridors to wedding convoys, RNK has been on the road
            since 1969 — delivering safe, reliable and premium journeys across
            India.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
            {statItems.map((stat, idx) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
