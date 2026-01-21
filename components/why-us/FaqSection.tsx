"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What types of cars do you offer?",
      a: "We offer luxury sedans, SUVs, premium vans, and coaches suitable for corporate, weddings, outstation, and VIP movements.",
    },
    {
      q: "How can I book a vehicle?",
      a: "You can book directly through our website, WhatsApp, or by contacting our 24/7 support team for assisted bookings.",
    },
    {
      q: "What cities do you cover?",
      a: "RNK operates across 170+ cities in India, covering metros, tier-2 cities, and major travel hubs.",
    },
    {
      q: "Do you provide chauffeur services for VIP clients?",
      a: "Yes. We specialise in chauffeur-driven luxury services with trained, verified drivers experienced in handling VIP and HNI clients.",
    },
  ];

  return (
    <section
      className="bg-black text-white 
      py-16 sm:py-20 md:py-24 
      2xl:py-32 4xl:py-40 
      border-b border-white/10"
    >
      <div className="max-w-6xl 2xl:max-w-[1500px] 4xl:max-w-[1800px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 2xl:mb-20 text-center"
        >
          <p
            className="uppercase tracking-[0.35em] 
            text-[10px] sm:text-xs md:text-sm 
            text-red-900 mb-3"
          >
            FAQs
          </p>

          <h2
            className="font-light 
            text-lg sm:text-xl md:text-2xl 
            2xl:text-4xl 4xl:text-5xl"
          >
            Frequently Asked{" "}
            <span className="font-semibold text-white">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-5 2xl:space-y-6">
          {faqs.map((item, i) => {
            const isOpen = openFaq === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl 
                border border-white/10 
                bg-black/70 backdrop-blur-md 
                shadow-[0_12px_40px_rgba(0,0,0,0.5)] 
                overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-5 sm:px-6 2xl:px-8 
                  py-5 sm:py-6 
                  flex items-center justify-between 
                  text-left group"
                >
                  <span
                    className="font-medium 
                    text-sm sm:text-[15px] md:text-base 
                    2xl:text-lg 
                    text-white/90 group-hover:text-white 
                    transition-colors"
                  >
                    {item.q}
                  </span>

                  {/* Chevron */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-white/60 
                    text-xl sm:text-2xl 
                    leading-none"
                  >
                    ⌄
                  </motion.span>
                </button>

                {/* Accent Line */}
                {isOpen && (
                  <div className="h-px bg-linear-to-r from-red-900 to-transparent mx-5 sm:mx-6 2xl:mx-8" />
                )}

                {/* Answer */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 sm:px-6 2xl:px-8 
                    pb-5 sm:pb-6 pt-3 
                    text-xs sm:text-sm md:text-base 
                    2xl:text-lg 
                    text-white/70 leading-relaxed"
                  >
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
