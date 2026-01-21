"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Chauffeur-driven luxury",
    body:
      "Professional chauffeurs for stress-free, premium travel — ideal for executives, celebrities and families.",
  },
  {
    title: "GPS-enabled & secure",
    body:
      "Live tracking, optimised routes and complete visibility of the journey for safety and efficiency.",
  },
  {
    title: "Reliable & safe vehicles",
    body:
      "Meticulously maintained luxury fleet with verified chauffeurs to ensure safe, disciplined travel.",
  },
  {
    title: "Comfort fit for VIPs",
    body:
      "Plush seating, premium interiors, climate control and noise-free cabins for top-tier comfort.",
  },
  {
    title: "Extensive luxury fleet",
    body:
      "Mercedes, BMW, Audi, SUVs, sedans, Innovas, coaches — pick what suits your occasion best.",
  },
  {
    title: "24/7 on-call support",
    body:
      "Flight delays, event changes, long rides — we support you round-the-clock.",
  },
];

export function CoreAdvantages() {
  return (
    <section className="bg-white text-black">
      <div
        className="
          mx-auto
          max-w-[90rem]
          px-4 sm:px-6 md:px-10 lg:px-16
          py-14 sm:py-18 lg:py-24 2xl:py-28
        "
      >
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <p
            className="
              uppercase text-red-900
              tracking-[0.28em]
              text-[11px] sm:text-xs md:text-sm
              mb-3
            "
          >
            Core advantages
          </p>

          <h2
            className="
              font-semibold
              text-[22px] sm:text-[26px] md:text-[32px]
              lg:text-[40px] xl:text-[48px]
              mb-4
            "
          >
            What makes RNK <span className="text-red-900">different?</span>
          </h2>

          <p
            className="
              mx-auto max-w-3xl
              text-neutral-600
              text-[13px] sm:text-sm md:text-[15px] lg:text-[16px]
              leading-relaxed
            "
          >
            Every journey is treated like a small project — right car, right
            chauffeur, right timing. That’s how we keep movements smooth.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="
            grid gap-5 sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 48px rgba(74, 6, 6, 0.14)",
              }}
              className="
                relative
                rounded-2xl
                border border-black/10
                bg-white
                p-5 sm:p-6 lg:p-7
                shadow-sm
                overflow-hidden
              "
            >
              {/* SUBTLE GLOW */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-48 rounded-full bg-red-900 blur-3xl opacity-40" />

              <p className="text-red-900 font-semibold text-[13px] mb-2">
                0{index + 1}
              </p>

              <h3 className="font-semibold text-[15px] sm:text-[16px] lg:text-[18px] mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-600 text-[13px] sm:text-[14px] leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
