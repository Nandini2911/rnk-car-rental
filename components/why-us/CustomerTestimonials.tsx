"use client";

import { motion } from "framer-motion";

export function CustomerTestimonials() {
  return (
    <section
      className="
        bg-white
        py-12 sm:py-14 md:py-18
        2xl:py-22
        px-6
      "
    >
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="
            font-semibold text-red-900
            text-lg sm:text-xl md:text-3xl
            lg:text-[36px] 2xl:text-[42px]
            mb-8 lg:mb-10
          "
        >
          What Our Clients Say
        </motion.h2>

        {/* Grid */}
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5 sm:gap-6 lg:gap-8
          "
        >
          {[
            {
              text: "RNK Rentals made our business trip effortless. The vehicle was spotless, the chauffeur was professional, and everything was on time!",
              author: "Corporate Executive, Mumbai",
              motion: { x: -160 },
            },
            {
              text: "The luxury service RNK provided for our wedding was extraordinary. Every detail was perfect, from the bridal entry to the family transport.",
              author: "Bride, Delhi",
              motion: { y: 120 },
            },
            {
              text: "We’ve always relied on RNK for our corporate events. Their attention to detail and customer service is impeccable.",
              author: "Event Manager, Bengaluru",
              motion: { x: 160 },
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, ...item.motion }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
              }}
              className="
                relative bg-white
                rounded-2xl
                border border-black/5
                p-5 sm:p-6 lg:p-7
                shadow-sm
                transition-all duration-300
                overflow-hidden
                text-left
              "
            >
              <p
                className="
                  text-[13px] sm:text-sm lg:text-[15px]
                  text-neutral-600
                  mb-5
                  leading-relaxed
                "
              >
                “{item.text}”
              </p>

              <footer
                className="
                  text-[11px] sm:text-xs lg:text-sm
                  font-semibold
                  text-red-900
                "
              >
                — {item.author}
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
