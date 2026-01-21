"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const journeys = [
  {
    tag: "CORPORATE",
    title: "Business travel without interruptions.",
    body: "Roadshows, board meetings, executives, delegations — perfectly organised travel.",
  },
  {
    tag: "WEDDINGS",
    title: "Luxury rides for celebrations.",
    body: "Bridal entries, family logistics, VIP movements — coordinated seamlessly.",
  },
  {
    tag: "OUTSTATION",
    title: "Long drives made luxurious.",
    body: "Reliable SUVs and sedans with trained chauffeurs for weekend getaways.",
  },
];

export function JourneysSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        bg-white text-black
        py-14 sm:py-16 md:py-18 lg:py-20
        2xl:py-24
        px-6
      "
    >
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 lg:mb-14 text-center"
        >
          <p
            className="
              text-red-900 tracking-[0.34em]
              text-[10px] sm:text-[11px] md:text-xs
              mb-3 uppercase
            "
          >
            Movements we specialise in
          </p>

          <h2
            className="
              font-semibold
              text-xl sm:text-2xl md:text-3xl
              lg:text-[34px]
            "
          >
            Designed for real journeys.
          </h2>

          <motion.span
            className="
              mx-auto block h-0.5
              w-10 sm:w-12 bg-red-900 rounded-full mt-4
            "
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            show: { transition: { staggerChildren: 0.16 } },
          }}
          className="
            grid gap-6
            md:grid-cols-3
            lg:gap-7
            2xl:gap-9
          "
        >
          {journeys.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
              }}
              className="
                relative bg-white
                border border-black/10 rounded-2xl
                p-6 sm:p-7 lg:p-8
                shadow-sm flex flex-col justify-between
                overflow-hidden
              "
            >
              {/* Subtle glow */}
              <div
                className="
                  pointer-events-none absolute
                  -right-12 -top-12 h-28 w-69
                  rounded-full bg-red-900 blur-3xl opacity-40
                "
              />

              <div>
                <p
                  className="
                    text-red-900 text-[10px]
                    tracking-[0.24em] mb-3 uppercase
                  "
                >
                  {item.tag}
                </p>

                <h3
                  className="
                    font-semibold mb-3
                    text-sm sm:text-[15px] lg:text-base
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[13px] sm:text-[14px]
                    text-neutral-600 leading-relaxed
                  "
                >
                  {item.body}
                </p>
              </div>

              <Link
                href="/contact"
                className="
                  mt-6 text-[11px] sm:text-xs
                  text-red-900 underline
                  underline-offset-4
                  hover:text-red-700 transition-colors
                "
              >
                Plan with RNK →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
