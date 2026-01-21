"use client";

import { motion } from "framer-motion";

export function AccoladesSection() {
  return (
    <section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
      {/* Wrapper with updated max-width to cover more width */}
      <div className="max-w-full md:max-w-8xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-[11px] tracking-[0.32em] uppercase text-red-900">
            Trust. Excellence. Comfort.
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-900">
            RNK's 54-year Legacy of Excellence
          </h2>
          <p className="text-sm md:text-[15px] text-black/70 leading-relaxed text-justify mb-6">
            Throughout its 54-year journey, RNK consistently surpassed expectations and garnered accolades from various segments of society. Their clientele included top-notch business houses, entertainment and event management companies, banks, multinationals, financial institutions, and diplomatic missions. 
            <br /><br />
            Public sector companies like the Government of India Departments, such as the Protocol Division and the Ministry of External Affairs - Media Dept, also relied on RNK's impeccable services. Even the esteemed Lok Sabha Secretariat's Protocol 1 trusted RNK for their travel needs.
            <br /><br />
            The RNK Group's extensive range of services catered to corporate and individual travellers' diverse requirements. Whether it was a seamless travel experience, a luxurious car rental, or a comprehensive travel package, RNK has it all covered.
            <br /><br />
            Today, as you embark on your own journey, you can trust the RNK Group to be your reliable companion. With their unwavering commitment to excellence, their profound industry knowledge, and their passion for providing the highest standards of service, RNK will make your travel dreams come true. Join the ranks of the countless satisfied customers who have experienced the magic of RNK and let them weave a tale of unforgettable memories for you.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
          whileHover={{
            y: -6,
            boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
            scale: 1.02,
          }}
          className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl flex-1"
        >
          <motion.img
            src="/about.webp" // Replace with the actual image
            alt="RNK's Clientele and Services"
            className="w-full h-full object-cover max-h-[400px]" // Adjusted max-height
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.18em] text-white/75">
            Serving Prestigious Clients Since 1969
          </div>
        </motion.div>
      </div>
    </section>
  );
}
