

import { useState } from "react";
import { motion } from "framer-motion";

export default function FleetFAQ() {
  // State to manage open FAQ section
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-red-900 mb-3">
            FAQs
          </p>
          <h2 className="text-xl md:text-2xl font-light">
            Fleet Services <span className="font-semibold">FAQs</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {[
            [
              "What types of vehicles are available in the fleet?",
              "Our fleet includes super luxury cars, SUVs, sedans, vans, and premium coaches, all equipped with chauffeur services for a seamless travel experience.",
            ],
            [
              "Can I choose a specific vehicle for my rental?",
              "Yes, you can select a specific vehicle based on your preference from our diverse fleet, depending on availability.",
            ],
            [
              "Do you offer chauffeur services?",
              "Yes, all vehicles in our fleet come with professional chauffeurs to ensure a safe, comfortable, and luxurious journey.",
            ],
            [
              "How do I make a reservation for a vehicle?",
              "You can easily book a vehicle through our website, or by contacting our customer service team for personalized assistance.",
            ],
            [
              "Is there a minimum rental period?",
              "Our minimum rental period is 4 hours, but we also offer packages for longer durations such as full-day or multi-day rentals.",
            ],
            [
              "Are there any additional charges for airport pickups or drops?",
              "There may be additional charges for airport transfers based on the distance, time of day, and any tolls or parking fees. These will be communicated upfront during the booking process.",
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
                className="rounded-2xl border border-white/10 
                           bg-white/4 backdrop-blur-md
                           shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                           overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}  /* Toggling FAQ */
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
