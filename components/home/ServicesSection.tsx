"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "Corporate Car Rental", slug: "corporate-car-rental", image: "/Corporate_Car_rental.webp" },
  { title: "Airport & Railway Transfers", slug: "airport-railway-transfers", image: "/airport-railway-transfers.jpg" },
  { title: "Luxury Travel", slug: "luxury-travel", image: "/luxury-travel.webp" },
  { title: "Hotel Operations", slug: "hotel-operations", image: "/hotel-operations.webp" },
  { title: "Vacation Rentals", slug: "vacation-rentals", image: "/vacation-rentals.webp" },
  { title: "VIP Movements", slug: "vip-movements", image: "/vip-movements.webp" },
  { title: "Long Term Car Rental", slug: "long-term-car-rental", image: "/Long_term_car_rental.webp" },
  { title: "Event / Wedding Transport", slug: "event-wedding-transport", image: "/events-wedding.webp" },
];

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
<section
  id="services"
  className="relative py-[clamp(60px,6vw,110px)] text-white"
>
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/about.webp"
          alt="RNK services background"
          fill
          className="object-center blur-lg scale-110 opacity-70"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
className="flex flex-col items-center gap-5 mb-[clamp(32px,5vw,60px)]"
        >
          <motion.p
            variants={slideFromLeft}
            className="
              uppercase
              tracking-[0.32em]
              text-[clamp(11px,0.9vw,14px)]
              text-white
              text-center
            "
          >
            Our Services
          </motion.p>

          <h2 className="font-semibold leading-tight text-center">
            <motion.span
              variants={slideFromLeft}
              className="block text-[clamp(30px,3.2vw,60px)]"
            >
              Premium Car Rental Solutions,
            </motion.span>

            <motion.span
              variants={slideFromRight}
              className="block text-[clamp(30px,3.2vw,60px)] text-red-900"
            >
              Tailored To Every Journey.
            </motion.span>
          </h2>

          <motion.p
            variants={fadeUpCard}
            className="
              text-[clamp(14px,1.25vw,18px)]
              text-neutral-300
              max-w-[720px]
              text-center
              leading-relaxed
            "
          >
            From corporate mobility to VIP convoys and destination weddings —
            RNK orchestrates end-to-end transport with precision, discretion,
            and an unwavering focus on comfort.
          </motion.p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => {
            const textVariant = index % 2 === 0 ? slideFromLeft : slideFromRight;

            return (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                variants={fadeUpCard}
                viewport={{ once: true }}
                className="perspective-distant"
              >
                <motion.a
                  href={`/services/${service.slug}`}
                  whileHover={{ scale: 1.04, rotateX: -4, rotateY: 4, translateZ: 12 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="
                    group relative
h-[clamp(180px,20vw,260px)]
                    overflow-hidden
                    border border-neutral-800
                    shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                    hover:shadow-[0_18px_50px_rgba(0,0,0,0.75)]
                    transition-all
                    block
                  "
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* IMAGE */}
                  <div className="absolute inset-0" style={{ transform: "translateZ(-10px)" }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.1]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-transparent" />
                  </div>

                  {/* GLASS CARD */}
                  <div
                    className="
                      absolute left-4 right-4 bottom-4
                      rounded-xl
                      bg-white/8
                      border border-white/15
                      backdrop-blur-md
px-4 py-2.5
                      flex flex-col gap-2
                    "
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <motion.p
                      variants={textVariant}
                      className="
                        font-semibold
                        text-[clamp(14px,1.1vw,18px)]
                        text-white
                        group-hover:text-red-900
                        transition-colors
                      "
                    >
                      {service.title}
                    </motion.p>

                    <motion.div
                      variants={textVariant}
                      className="
                        flex items-center justify-between
                        text-[clamp(11px,0.9vw,13px)]
                        text-neutral-300
                      "
                    >
                      
                      <span className="group-hover:translate-x-1 transition-transform group-hover:text-red-900">
                        →
                      </span>
                    </motion.div>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
