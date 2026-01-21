"use client";

import { motion } from "framer-motion"; // No need to import useState here
import { useState } from "react"; // Correct import for useState

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-[15px] uppercase tracking-[0.25em] text-white mb-3">
            FAQs
          </p>
          <h2 className="text-xl md:text-2xl font-light">
            Frequently Asked <span className="font-semibold">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {[
            [
              "What types of cars do you offer?",
              "We offer luxury sedans, SUVs, minivans, and coaches for all kinds of travel needs.",
            ],
            [
              "How can I book a vehicle?",
              "You can book a vehicle directly on our website or by contacting our support team.",
            ],
            [
              "What cities do you cover?",
              "We operate in 170+ cities across India. Please refer to our network page for details.",
            ],
            [
              "Do you provide chauffeur services for VIP clients?",
              "Yes, we provide exclusive chauffeur services for VIPs, ensuring a comfortable and stylish experience.",
            ],
          ].map(([q, a], i) => {
            const isOpen = openFaq === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-5 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-[15px] font-medium text-white/90">{q}</span>

                  {/* UNIQUE CHEVRON ARROW */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 text-2xl leading-none"
                  >
                    ⌄
                  </motion.span>
                </button>

                {/* RED ACCENT */}
                {isOpen && (
                  <div className="h-0.5 bg-linear-to-r from-red-900 to-transparent mx-5" />
                )}

                {/* ANSWER */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-3 text-sm text-white/70 leading-relaxed">
                    {a}
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
