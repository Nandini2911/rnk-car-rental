"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function TestimonialsSection() {
  return (
    <AnimatedSection id="what-our-clients-say">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative border-y border-white/10 overflow-hidden bg-black"
      >
        {/* Responsive spacing */}
        <div className="relative px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
          {/* Soft background glow */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-56 sm:h-64 max-w-xl rounded-full bg-[#A72740]/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-24 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-[#A72740]/20 blur-3xl" />

          <div className="relative mx-auto w-full max-w-6xl">
            {/* Label */}
            <p className="text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-white/90 mb-8 text-center md:text-left">
              What Our Clients Say
            </p>

            {/* ✅ Mobile: 1 col | md: 2 col | lg: 3 col */}
            <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                }}
                className="group relative rounded-2xl border border-white/10 bg-[#A72740]/10 px-5 sm:px-6 py-6 flex flex-col overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#A72740]/25 blur-2xl" />

                <p className="text-[15px] sm:text-base md:text-[17px] text-white/90 leading-relaxed">
                  “RNK Rentals provided exceptional service. Their fleet of
                  luxury cars helped us make a strong impression on our clients.
                  Highly recommended!”
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">John Doe</p>
                  <p className="text-xs text-white/70">CEO, XYZ Corp.</p>
                </div>

                <span className="mt-5 h-px w-12 bg-gradient-to-r from-[#A72740]/70 via-white/10 to-transparent" />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                }}
                className="group relative rounded-2xl border border-white/10 bg-[#A72740]/10 px-5 sm:px-6 py-6 flex flex-col overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#A72740]/25 blur-2xl" />

                <p className="text-[15px] sm:text-base md:text-[17px] text-white/90 leading-relaxed">
                  “RNK’s professional chauffeurs and luxury cars made our travel
                  experience outstanding. We always rely on them for VIP
                  movements.”
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">Jane Smith</p>
                  <p className="text-xs text-white/70">Event Manager</p>
                </div>

                <span className="mt-5 h-px w-12 bg-gradient-to-r from-[#A72740]/70 via-white/10 to-transparent" />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.18 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                }}
                className="group relative rounded-2xl border border-white/10 bg-[#A72740]/10 px-5 sm:px-6 py-6 flex flex-col overflow-hidden md:col-span-2 lg:col-span-1"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#A72740]/25 blur-2xl" />

                <p className="text-[15px] sm:text-base md:text-[17px] text-white/90 leading-relaxed">
                  “The team at RNK is professional, reliable, and always
                  delivers on time. Our employees love the comfort and luxury
                  they provide!”
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-white">David Patel</p>
                  <p className="text-xs text-white/70">HR Manager</p>
                </div>

                <span className="mt-5 h-px w-12 bg-gradient-to-r from-[#A72740]/70 via-white/10 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatedSection>
  );
}
