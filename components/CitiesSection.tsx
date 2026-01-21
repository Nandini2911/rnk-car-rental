"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cities = [
  { name: "Mumbai", slug: "mumbai" },
  { name: "Delhi", slug: "delhi" },
  { name: "Chennai", slug: "chennai" },
  { name: "Bangalore", slug: "bengaluru" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Pune", slug: "pune" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Vadodara", slug: "vadodara" },
  { name: "Indore", slug: "indore" },
  { name: "Bhopal", slug: "bhopal" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Goa", slug: "goa" },
  { name: "Kochi", slug: "kochi" },
  { name: "Guwahati", slug: "guwahati" },
  { name: "Bhubaneswar", slug: "bhubaneswar" },
];

export function CitiesSection() {
  return (
    <section className="bg-white text-black py-16 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-[20px] uppercase tracking-[0.25em] text-red-900 mb-3 font-bold">
            Our Presence
          </p>
          <h2 className="text-xl md:text-2xl font-light mb-3">
            RNK: Luxury Car Rental & Transfer Services Across{" "}
            <span className="font-semibold text-red-900">India</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city, i) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative overflow-hidden h-64 border border-black/5 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/cities/${city.slug}.webp')` }}
                />

                <div className="absolute top-4 left-4 z-10">
                  <p className="text-white text-base font-semibold">
                    {city.name}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6 text-center">
                  <p className="text-white text-xs md:text-sm leading-relaxed">
                    Luxury chauffeur-driven services in {city.name}.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
