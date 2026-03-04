"use client";
import Image from "next/image";


import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, useState } from "react";

export default function RNKLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    terminal: "",
    car: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/airport-transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          date: "",
          terminal: "",
          car: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Server error.");
    }

    setLoading(false);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-black text-white overflow-hidden relative">

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-red-900 origin-left z-50"
      />

   {/* HERO – CRICKET SPECIAL WITH IMAGE */}
<motion.section
  ref={heroRef}
  initial="hidden"
  animate="visible"
  variants={stagger}
  className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
>
  {/* Background Image */}
  <motion.div
    style={{ y: yParallax }}
    className="absolute inset-0"
  >
    <Image
      src="/wan.png"   // put image in public folder
      alt="Cricket stadium"
      fill
      priority
      className="object-cover"
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/55"></div>
  </motion.div>

  {/* TEXT */}

  <motion.h1
    variants={fadeUp}
    className="relative text-4xl md:text-6xl font-bold leading-tight"
  >
    <span className="bg-gradient-to-r from-yellow-300 via-green-300 to-yellow-300 bg-clip-text text-transparent">
      Match Day? Travel Like a Champion
    </span>
    <br />
    <span className="text-white">
      Arrive in Luxury 🏏
    </span>
  </motion.h1>

  <motion.p
    variants={fadeUp}
    className="relative mt-6 text-lg text-gray-200 max-w-2xl"
  >
    Skip stadium traffic and parking chaos.  
    Book RNK’s premium chauffeur-driven rides and reach the match in style.
  </motion.p>

  {/* BUTTONS (UNCHANGED) */}

  <motion.div
    variants={fadeUp}
    className="relative mt-10 flex flex-col md:flex-row gap-6"
  >
    <MagneticButton href="tel:+919167977799" text="📞 Call Now" />
    <MagneticButton href="#lead-form" text="Get Instant Quote" outlined />
  </motion.div>

  {/* TAG */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="absolute bottom-10 bg-gradient-to-r from-green-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
  >
    🏏 Cricket Match Special Transfers
  </motion.div>
</motion.section>

 {/* FLEET */}
<motion.section
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="py-24 px-6 bg-black"
>
  <motion.h2
    variants={fadeUp}
    className="text-4xl font-bold text-center mb-16"
  >
    Our Premium Fleet
  </motion.h2>

  <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {[
      {
        name: "Mercedes E-Class",
        image: "/Mercedes_E_Class_1.webp",
      },
      {
        name: "Mercedes S-Class",
        image: "/Mercedes_Sclass_1.webp",
      },
      {
        name: "BMW 5 Series",
        image: "/Byd_E6_Electric_Vehicle_1.webp", // Make sure file exists
      },
      {
        name: "Toyota Camry",
        image: "/Toyota_Camry_1.webp", // Make sure file exists
      },
    ].map((car) => (
      <motion.div
        key={car.name}
        variants={fadeUp}
        whileHover={{ y: -12 }}
        className="group bg-gradient-to-b from-gray-900 to-black border border-red-900 rounded-xl overflow-hidden shadow-xl"
      >
        {/* IMAGE */}
        <div className="relative w-full h-56">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 25vw"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-white">
            {car.name}
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Premium comfort & luxury airport experience.
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>




      {/* WHY RNK */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-6 bg-white text-black"
      >
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-red-900">RNK</span>?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Real-time flight tracking",
            "On-time pickup guarantee",
            "Fixed pricing (No surge)",
            "Sanitized premium cars",
            "VIP protocol available",
            "Professional Chauffeur Service",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-2xl p-8 text-white shadow-xl bg-gradient-to-br from-red-950 via-red-800 to-red-950"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FORM */}
      <section id="lead-form" className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.25),_transparent_70%)]"></div>

        <div className="relative max-w-xl mx-auto bg-white text-black p-10 rounded-2xl shadow-2xl">

          <h2 className="text-3xl font-bold text-center mb-8">Get Instant Quote</h2>

          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700 text-center">
              ✅ Quote request sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input type="text" name="name" placeholder="Full Name" required
              value={formData.name} onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:border-red-600 outline-none" />

            <input type="tel" name="phone" placeholder="Phone Number" required
              value={formData.phone} onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:border-red-600 outline-none" />

            <input type="date" name="date" required
              value={formData.date} onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:border-red-600 outline-none" />

            <select name="terminal" required
              value={formData.terminal} onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:border-red-600 outline-none">
              <option value="">Select Terminal</option>
              <option value="T1">T1</option>
              <option value="T2">T2</option>
            </select>

            <select name="car" required
              value={formData.car} onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:border-red-600 outline-none">
              <option value="">Car Preference</option>
              <option value="Mercedes E-Class">Mercedes E-Class</option>
              <option value="Mercedes S-Class">Mercedes S-Class</option>
              <option value="BMW 5 Series">BMW 5 Series</option>
              <option value="Toyota Camry">Toyota Camry</option>
            </select>

            <button type="submit" disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50">
              {loading ? "Sending..." : "Get Instant Quote"}
            </button>

          </form>
        </div>
      </section>

    </div>
  );
}



function MagneticButton({ href, text, outlined }: {
  href: string;
  text: string;
  outlined?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
        outlined
          ? "border border-red-500 hover:bg-red-600"
          : "bg-red-600 hover:bg-red-700"
      }`}
    >
      {text}
    </motion.a>
  );
}
