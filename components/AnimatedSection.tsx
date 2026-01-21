// components/AnimatedSection.tsx

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  id?: string;
  children: ReactNode;
  delay?: number;
};

export function AnimatedSection({ id, children, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className="w-full px-6 sm:px-12 lg:px-20 xl:px-32 2xl:px-48 py-16 sm:py-20 lg:py-28"
    >
      {children}
    </motion.section>
  );
}
