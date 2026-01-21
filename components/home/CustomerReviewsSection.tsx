"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */

const reviews = [
  {
    quote:
      "I appreciate the attention to detail and the fact that they go above and beyond to ensure everything is just right. I highly recommend this luxury car rental service to anyone needing top-notch transportation.",
    name: "Vallabhdad Lalchand",
  },
  {
    quote:
      "They make travel a breeze, and I would highly recommend them to anyone looking for a luxury car rental experience.",
    name: "Mr. Murali M Natrajan",
  },
  {
    quote:
      "I recently used this luxury car rental service for a tour around Mumbai, and the quality of the experience blew me away. The driver was professional and courteous, and the vehicle was in pristine condition.",
    name: "Mr. Farokh Subedar",
  },
];

/* ================= CARD ANIMATION ================= */

const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: 18,
    x: direction > 0 ? 32 : -32,
    scale: 0.98,
    filter: "blur(2px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: -14,
    x: direction > 0 ? -26 : 26,
    scale: 0.985,
    filter: "blur(2px)",
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

/* ================= PARTICLES ================= */

const dustParticles = [
  { top: "20%", left: "14%", size: 3, duration: 10 },
  { top: "35%", left: "84%", size: 4, duration: 12 },
  { top: "62%", left: "20%", size: 3, duration: 11 },
  { top: "75%", left: "70%", size: 4, duration: 13 },
];

/* ================= MAIN SECTION ================= */

export function CustomerReviewsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const active = reviews[index];

  return (
    <section className="relative bg-white overflow-hidden py-[clamp(60px,7vw,120px)]">
      {/* Floating dust */}
      {dustParticles.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-neutral-300"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0.3,
          }}
          animate={{ y: [0, -5, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="text-center font-bold uppercase text-neutral-900 mb-3 text-[clamp(24px,2.6vw,40px)]">
          Customer Reviews
        </h2>

        {/* Stars */}
        <div className="flex justify-center gap-1.5 mb-10">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-red-900 text-base">
              ★
            </span>
          ))}
        </div>

        {/* Card Wrapper */}
        <div className="relative mx-auto max-w-[820px] xl:max-w-[980px]">
          {/* Gradient border */}
          <motion.div
            aria-hidden
            className="absolute -inset-[2px] rounded-[26px] bg-[conic-gradient(from_180deg,rgba(255,255,255,0.3),rgba(167,39,64,0.55),rgba(0,0,0,0.05),rgba(167,39,64,0.35),rgba(255,255,255,0.25))] opacity-40"
            animate={{ opacity: [0.45, 0.85, 0.55] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Base */}
          <div className="absolute inset-0 rounded-3xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)]" />

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70 || info.velocity.x < -320) goNext();
                if (info.offset.x > 70 || info.velocity.x > 320) goPrev();
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 26px 70px rgba(0,0,0,0.12)",
              }}
              transition={{ type: "spring", stiffness: 130, damping: 18 }}
              className="relative rounded-3xl bg-white px-6 sm:px-9 md:px-12 py-9 sm:py-11 md:py-12 text-center cursor-grab active:cursor-grabbing"
            >
              {/* Inner breathing */}
              <motion.div
                animate={{ scale: [1, 1.008, 1], y: [0, -1.5, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="italic text-neutral-700 mb-6 leading-relaxed text-[clamp(14px,1.15vw,17px)]">
                  {active.quote}
                </p>

                <p className="font-semibold uppercase tracking-[0.22em] text-red-900 text-[clamp(11px,0.85vw,13px)]">
                  {active.name}
                </p>

                {/* Accent line */}
                <div className="mt-5 flex justify-center">
                  <div className="relative h-px w-20 bg-neutral-200 overflow-hidden rounded-full">
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-red-900 to-transparent"
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "bg-red-900 w-3"
                  : "bg-neutral-300 w-2"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
