"use client";

import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="bg-white text-red-900 py-16 md:py-20 text-center">
      {/* Heading with Slide Up Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-semibold mb-6"
      >
        Ready to Experience Luxury Travel?
      </motion.h2>
      
      {/* Paragraph with Slide Up Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-lg mb-6"
      >
        Book your ride today or contact us to know more about our services.
      </motion.p>
      
      {/* Button */}
      <a
  href="/contact-us"
  className="inline-block bg-red-900 text-white py-3 px-6 rounded-full font-semibold shadow-lg
             hover:bg-black transition duration-300 ease-in-out"
>
  Get a Quote
</a>

    </section>
  );
}
