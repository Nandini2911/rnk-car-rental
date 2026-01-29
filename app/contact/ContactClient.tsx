
"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsSubmitting(true);
    setMessage(null);

    const data = new FormData(form);

const payload = {
  // required (backend checks these)
  fullName: data.get("fullName"),
  email: data.get("email"),
  mobileNumber: data.get("phone"), // map phone -> mobileNumber

  // extra fields your route.ts uses in the email template
  startDate: "Contact form – not specified",
  passengers: "Not specified",
  pickupCity: "Contact Page",
  vehicle: data.get("service") || "General enquiry",
};


    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Thank you. Our team will contact you shortly.");
        form.reset();
      } else {
        setMessage("Failed to send. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong. Try later.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />

      {/* -------------------------------------------------- */}
      {/* SECTION 1 — DARK HERO WITH BG IMAGE               */}
    {/* SECTION 1 — DARK HERO WITH LUXURY SPOTLIGHT */}
<section
  className="
    relative
    w-full
    overflow-hidden
    flex
    items-center
    justify-center
    text-center

    h-[52vh]        /* small mobile (perfect banner height) */
    sm:h-[60vh]     /* large mobile */
    md:h-[72vh]     /* tablet */
    lg:min-h-screen /* desktop */
  "
>
  {/* BACKGROUND IMAGE WITH SHADOW VIGNETTE */}
<motion.img
  src="/about.webp"
  alt="Contact RNK"
  className="
    absolute inset-0
    w-full h-full
    object-cover object-center
    scale-105
    brightness-[0.78]
    contrast-[1.05]
    shadow-[inset_0_0_180px_rgba(0,0,0,0.75)]
  "
  initial={{ scale: 1.15, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
/>


  {/* DARK CINEMATIC OVERLAY */}
  <div
    className="
      absolute inset-0
      bg-[linear-gradient(
        to_bottom,
        rgba(0,0,0,0.65)_0%,
        rgba(0,0,0,0.55)_40%,
        rgba(0,0,0,0.75)_100%
      )]
    "
  />

  {/* SOFT LUXURY SPOTLIGHT BEHIND TEXT */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[120vw] h-[120vw]
      max-w-[1100px] max-h-[1100px]
      rounded-full
      bg-[radial-gradient(
        circle,
        rgba(255,255,255,0.12)_0%,
        rgba(255,255,255,0.06)_25%,
        rgba(0,0,0,0)_60%
      )]
      blur-2xl
    "
  />

  {/* CONTENT */}
  <div
    className="
      relative z-10
      max-w-[92rem]
      px-4 sm:px-6 md:px-10 lg:px-16
    "
  >
    {/* EYEBROW TEXT */}
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        mb-4
        text-[clamp(10px,1.1vw,13px)]
        uppercase
        tracking-[0.35em]
        text-white

        
      "
    >
      Contact Us
    </motion.p>

    {/* MAIN HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className="
        font-semibold
        leading-[1.08]
        text-white
        drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)]
      
        text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]
      "
    >
      We’re always{" "}
      <span className="text-red-900">
        here for you.
      </span>
    </motion.h1>
  </div>
</section>



      {/* -------------------------------------------------- */}
{/* SECTION 2 — BLACK BACKGROUND + REDDISH GLOW CARDS */}
{/* -------------------------------------------------- */}
<section className="bg-white text-black border-b border-black/10">
  <div
    className="
      max-w-[90rem] 2xl:max-w-[110rem]
      mx-auto
      px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16
      py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-32
    "
  >
    {/* SECTION HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        text-center
        font-semibold
        mb-12 sm:mb-14 md:mb-16 lg:mb-20
        text-[clamp(22px,4.5vw,42px)]
        leading-tight
      "
    >
      Contact Us
    </motion.h2>

    {/* CARDS GRID */}
    <div
      className="
        grid
        gap-8 sm:gap-10 lg:gap-12 2xl:gap-16
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {/* CARD 1 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          border border-black/10
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        <img
          src="/Head_Office.webp"
          alt="RNK Head Office"
          className="
            w-full
            h-44 sm:h-48 md:h-52 lg:h-56 2xl:h-64
            object-cover
          "
        />

        <div className="px-6 sm:px-8 py-8 sm:py-10 text-center">
          <h3
            className="
              font-semibold
              mb-4
              text-[clamp(16px,2.2vw,20px)]
            "
          >
            Head Office Address
          </h3>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 sm:w-10 bg-black/20" />
            <span className="h-[6px] w-[6px] rounded-full bg-red-900" />
            <span className="h-px w-8 sm:w-10 bg-black/20" />
          </div>

          <p
            className="
              text-black/70
              leading-relaxed
              text-[clamp(13px,1.5vw,16px)]
            "
          >
            Suite 19, Kaliandas Udyog Bhavan,<br />
            Century Bazar, Prabhadevi,<br />
            Mumbai – 400025, India
          </p>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          border border-black/10
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        <img
          src="/call_us.webp"
          alt="Call RNK"
          className="
            w-full
            h-44 sm:h-48 md:h-52 lg:h-56 2xl:h-64
            object-cover
          "
        />

        <div className="px-6 sm:px-8 py-8 sm:py-10 text-center">
          <h3
            className="
              font-semibold
              mb-4
              text-[clamp(16px,2.2vw,20px)]
            "
          >
            Call Us
          </h3>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 sm:w-10 bg-black/20" />
            <span className="h-[6px] w-[6px] rounded-full bg-red-900" />
            <span className="h-px w-8 sm:w-10 bg-black/20" />
          </div>

          <a
            href="tel:02243227777"
            className="
              font-medium
              transition
              hover:text-[#C8102E]
              text-[clamp(14px,1.8vw,18px)]
            "
          >
            022 – 43227777
            <br/>
            <br/>
            Available 24/7
          </a>
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white
          border border-black/10
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        <img
          src="/email.webp"
          alt="Email RNK"
          className="
            w-full
            h-44 sm:h-48 md:h-52 lg:h-56 2xl:h-64
            object-cover
          "
        />

        <div className="px-6 sm:px-8 py-8 sm:py-10 text-center">
          <h3
            className="
              font-semibold
              mb-4
              text-[clamp(16px,2.2vw,20px)]
            "
          >
            Email
          </h3>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 sm:w-10 bg-black/20" />
            <span className="h-[6px] w-[6px] rounded-full bg-red-900" />
            <span className="h-px w-8 sm:w-10 bg-black/20" />
          </div>

          <a
            href="mailto:info@rnk.com"
            className="
              font-medium
              transition
              hover:text-[#C8102E]
              text-[clamp(14px,1.8vw,18px)]
            "
          >
            info@rnk.com
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>


     {/* -------------------------------------------------- */}
{/* SECTION 3 — STYLED CONTACT FORM (CLASSY)           */}
{/* -------------------------------------------------- */}
<section className="bg-black text-white py-12 sm:py-14 md:py-16 border-b border-white/10 min-h-[70svh]
  sm:min-h-[75svh]
  md:min-h-[80svh]
  lg:min-h-[85svh]
  2xl:min-h-[90svh]
  flex items-center">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">

      {/* LEFT SIDE – TEXT + HIGHLIGHTS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4 sm:space-y-5"
      >
        <p className="text-[clamp(15px,1vw,11px)] uppercase tracking-[0.24em] text-red-900">
          Get in touch
        </p>

        <h2 className="font-semibold tracking-tight leading-tight
          text-[clamp(22px,4.5vw,28px)]
          md:text-[clamp(26px,3vw,32px)]
        ">
          Share your requirement,{" "}
          <span className="text-red-900">we’ll map the rest.</span>
        </h2>

        <p className="leading-relaxed text-white/70 max-w-md
          text-[clamp(13px,3.5vw,14px)]
          md:text-[15px]
        ">
          Whether it&apos;s a one-time airport run or a multi-day movement
          grid across cities, the RNK team will respond with a clear, structured
          plan and transparent pricing.
        </p>

        {/* small chips */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "Response within 24 hours",
            "Pan-India movements",
            "Corporate & weddings",
          ].map((text) => (
            <span
              key={text}
              className="rounded-full border border-white/20 bg-white/5
                px-3 py-1
                text-[clamp(10px,2.8vw,11px)]
                uppercase tracking-[0.18em] text-white/75"
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE – FORM CARD */}
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative space-y-4 sm:space-y-5 rounded-3xl
          border border-white/12
          bg-linear-to-br from-white/6 via-black/80 to-black
          px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8
          shadow-[0_26px_70px_rgba(0,0,0,0.9)]
          overflow-hidden"
      >
        {/* subtle top highlight */}
        <div className="pointer-events-none absolute -top-20 -right-10 h-40 w-40 rounded-full bg-[#C8102E]/30 blur-3xl" />

        <div className="relative space-y-1">
          <p className="text-[clamp(10px,1vw,11px)] uppercase tracking-[0.2em] text-white/60">
            Contact form
          </p>
          <p className="text-white/70 text-[clamp(13px,3.5vw,14px)]">
            Fill in your details and a short note. Our team will get back with
            availability, fleet options and next steps.
          </p>
        </div>

        {/* Inputs */}
        {[
          { label: "Name", name: "fullName", type: "text", placeholder: "Your full name" },
        ].map((field) => (
          <div key={field.name} className="space-y-1">
            <label className="text-[clamp(10px,1vw,11px)] uppercase tracking-[0.18em] text-white/70">
              {field.label}<span className="text-[#C8102E]">*</span>
            </label>
            <input
              {...field}
              required
              className="w-full rounded-lg border border-white/15 bg-black/40
                px-3 py-2.5
                text-[clamp(13px,3.5vw,14px)]
                text-white placeholder-white/40
                focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-red-900"
            />
          </div>
        ))}

        {/* Phone + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Phone", name: "phone", type: "tel", placeholder: "Mobile number" },
            { label: "Email", name: "email", type: "email", placeholder: "Email address" },
          ].map((field) => (
            <div key={field.name} className="space-y-1">
              <label className="text-[clamp(10px,1vw,11px)] uppercase tracking-[0.18em] text-white/70">
                {field.label}<span className="text-red-900">*</span>
              </label>
              <input
                {...field}
                required
                className="w-full rounded-lg border border-white/15 bg-black/40
                  px-3 py-2.5
                  text-[clamp(13px,3.5vw,14px)]
                  text-white placeholder-white/40
                  focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-red-900"
              />
            </div>
          ))}
        </div>

        {/* Service */}
        <div className="space-y-1">
          <label className="text-[clamp(10px,1vw,11px)] uppercase tracking-[0.18em] text-white/70">
            Service required<span className="text-red-900">*</span>
          </label>
          <select
            required
            defaultValue=""
            className="w-full rounded-lg border border-white/15 bg-black/40
              px-3 py-2.5
              text-[clamp(13px,3.5vw,14px)]
              text-white focus:outline-none focus:ring-1 focus:ring-red-900"
          >
            <option value="" disabled className="text-black">
              Select a service
            </option>
            <option>Corporate Car Rental</option>
            <option>Airport Transfers</option>
            <option>Luxury Travel</option>
            <option>Weddings & Events</option>
            <option>VIP Movements</option>
            <option>Long Term Rental</option>
          </select>
        </div>

        {/* Query */}
        <div className="space-y-1">
          <label className="text-[clamp(10px,1vw,11px)] uppercase tracking-[0.18em] text-white/70">
            Brief / query
          </label>
          <textarea
            rows={4}
            placeholder="Dates, cities, approximate timings, number of guests, or any special notes."
            className="w-full rounded-lg border border-white/15 bg-black/40
              px-3 py-2.5
              text-[clamp(13px,3.5vw,14px)]
              text-white placeholder-white/40
              focus:outline-none focus:ring-1 focus:ring-red-900
              resize-none"
          />
        </div>

        {/* Button */}
        <div className="pt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-linear-to-r from-red-900 via-red-900 to-red-800
              px-7 py-2.5
              text-[clamp(10px,1vw,11px)]
              font-medium uppercase tracking-[0.22em]
              
              hover:-translate-y-0.5 transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Submit enquiry"}
          </button>

          {message && (
            <p className="text-[clamp(10px,1vw,11px)] text-white/70">
              {message}
            </p>
          )}
        </div>
      </motion.form>
    </div>
  </div>
</section>


{/* -------------------------------------------------- */}
{/* SECTION 4 — LOCATION MAP                          */}
{/* -------------------------------------------------- */}
<section className="relative border-b border-black/10 overflow-hidden">

  {/* HEADER — WHITE BACKGROUND */}
  <div className="relative z-20 bg-white">
    <div
      className="
        max-w-7xl mx-auto text-center
        px-4 sm:px-6 lg:px-8
        pt-14 sm:pt-16 md:pt-20
        pb-10 sm:pb-12 md:pb-14
      "
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          text-[10px] sm:text-[11px]
          uppercase tracking-[0.26em]
          text-black/60 mb-3
        "
      >
        OUR LOCATION
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          font-semibold text-red-900
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        "
      >
        Visit the RNK Head Office
      </motion.h2>
    </div>
  </div>

  {/* MAP — BLACK BACKGROUND */}
  <div className="relative bg-black">
    <div
      className="
        relative w-full
        h-[300px]
        sm:h-[360px]
        md:h-[420px]
        lg:h-[520px]
        2xl:h-[620px]
      "
    >
      {/* Soft RNK red glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#C8102E]/25 blur-3xl z-10" />

      {/* Google Map */}
      <iframe
        title="RNK Head Office Location"
        src="https://www.google.com/maps?q=Suite%2019,%20Kaliandas%20Udyog%20Bhavan,%20Century%20Bazar,%20Prabhadevi,%20Mumbai%20400025&output=embed"
        className="w-full h-full border-0 saturate-110 contrast-105 brightness-95"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
    </div>
  </div>

  {/* ADDRESS FOOTER — WHITE */}
  <div className="relative bg-white">
    <div
      className="
        max-w-7xl mx-auto text-center
        px-4 sm:px-6 lg:px-8
        py-8 sm:py-10 md:py-12
      "
    >
      <p
        className="
          text-xs sm:text-sm
          text-black leading-relaxed
          max-w-3xl mx-auto
        "
      >
        Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi, Mumbai – 400025
      </p>

      <a
        href="https://maps.google.com/?q=Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi, Mumbai 400025"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block mt-4
          text-[10px] sm:text-[11px]
          uppercase tracking-[0.24em]
          text-[#C8102E]
          hover:text-black transition
        "
      >
        Get Directions
      </a>
    </div>
  </div>

</section>




      {/* -------------------------------------------------- */}
      {/* SECTION 5 — FOOTER                                */}
      {/* -------------------------------------------------- */}
      <RnkFooter />
    </main>
  );
}
