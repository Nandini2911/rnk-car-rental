"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import OurNetworkMapSection from "./OurNetworkMapSection";
import { NavBar } from "./NavBar";
import { ContactUs } from "./why-us/ContactUs";
import FAQComponent from "./FAQourNetwork";

function slugifyCity(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

type City = {
  name: string;
  isMetro?: boolean;
};


const CITIES: City[] = [
  { name: "Bengaluru", isMetro: true },
  { name: "Chennai", isMetro: true },
  { name: "Mumbai", isMetro: true },
  { name: "Lucknow" },
  { name: "Hyderabad", isMetro: true },
  { name: "Kolkata", isMetro: true },
  { name: "Ahmedabad" },
  { name: "Bhopal" },
  { name: "Surat" },
  { name: "Nagpur" },
  { name: "Chandigarh" },
  { name: "Madurai" },
  { name: "Visakhapatnam" },
  { name: "Jamshedpur" },
  { name: "Jaipur" },
  { name: "Pune" },
  { name: "Kanpur" },
  { name: "Agra" },
  { name: "Indore" },
  { name: "Jodhpur" },
  { name: "Amritsar" },
  { name: "Patna" },
  { name: "Ludhiana" },
  { name: "Raipur" },
  { name: "Kochi" },
  { name: "Chhatrapati Sambhajinagar" },
  { name: "Bhubaneswar" },
  { name: "Vijayawada" },
  { name: "Kota" },
  { name: "Vadodara" },
  { name: "Nashik" },
  { name: "Thiruvananthapuram" },
  { name: "Varanasi" },
  { name: "Ranchi" },
 
  { name: "Meerut" },
  { name: "Gwalior" },
  { name: "Faridabad" },
  { name: "Udaipur" },
  { name: "Mysuru" },
  { name: "Prayagraj" },

  { name: "Guwahati" },
  { name: "Rajkot" },
  { name: "Coimbatore" },
  { name: "New Delhi" },

  { name: "Dehradun" },
 
 
  { name: "Aligarh" },
];

const FILTERS = [
  { id: "all", label: "All Cities" },
  { id: "metros", label: "Top Metros" },
  { id: "tier", label: "Key Business & Leisure Hubs" },
];

// helper: generate background image path per city
function getCityBg(city: City) {
  const slug = city.name
    .toLowerCase()
    .replace(/\s+/g, "-") // spaces → hyphen
    .replace(/[^a-z0-9-]/g, ""); // remove special chars

  return `/bg/${slug}.webp`;
}

export default function OurNetworkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [expandedCity, setExpandedCity] = useState<string | null>(null);

  const filteredCities = useMemo(() => {
    let list = [...CITIES];

    if (activeFilter === "metros") {
      list = list.filter((c) => c.isMetro);
    } else if (activeFilter === "tier") {
      list = list.filter(
        (c) =>
          c.isMetro ||
          ["Pune", "Surat", "Jaipur", "Vadodara", "Indore", "Kochi"].includes(
            c.name
          )
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }

    return list;
  }, [activeFilter, search]);

  const handleToggle = (name: string) => {
    setExpandedCity((prev) => (prev === name ? null : name));
  };

  return (
    <main
      className="min-h-screen  text-white"
 
    >
      <NavBar />
      {/* -------------------------------- */}
      {/* HERO / HEADER */}
      {/* -------------------------------- */}
 <section
  className="
    relative w-full overflow-hidden border-b border-white/10
    min-h-[55svh]
    sm:min-h-[70vh]
    md:min-h-[75vh]
    lg:min-h-screen
    flex items-center justify-center
  "
>
  {/* Background Image */}
  <motion.img
    src="/about.webp"
    alt="RNK pan-India network"
    className="absolute inset-0 w-full h-full object-cover object-center"
    initial={{ scale: 1.08, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/70" />

  {/* Content */}
  <div
    className="
      relative z-10 w-full
      max-w-7xl 2xl:max-w-[88rem]
      mx-auto
      px-5 sm:px-6 lg:px-10
      text-center
      flex flex-col items-center justify-center
    "
  >
    {/* Breadcrumb */}
    <motion.div
      className="
        mb-4 sm:mb-6
        text-[10px] sm:text-xs md:text-sm
        uppercase tracking-[0.22em]
        text-white/80
        flex items-center justify-center gap-2
      "
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
      <span className="opacity-60">•</span>
      <span className="text-red-900">Our Network</span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
      className="
        font-semibold tracking-tight leading-[1.15]
      
        max-w-[42rem] xl:max-w-[56rem]
        text-white
        drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]

        text-[26px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[52px]
            xl:text-[64px]
            2xl:text-[76px]
      "
    >
      A single number, a{" "}
      <span className="text-red-900">national network.</span>
    </motion.h1>

    {/* CTA */}
    <div className="mt-7 sm:mt-9">
      <Link
        href="/contact"
        className="
          inline-flex items-center justify-center
          bg-red-900 text-white
          px-7 py-3
          sm:px-8 sm:py-3.5
          rounded-full
          text-[11px] sm:text-xs md:text-sm
          font-semibold uppercase tracking-wider
          hover:bg-black transition
          shadow-lg
        "
      >
        Book Now
      </Link>
    </div>
  </div>
</section>




<section className="bg-white text-black py-14 sm:py-16 md:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* Header */}
    <motion.div
      className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-red-900 mb-3 font-semibold">
        Our Core Advantages
      </p>

      <h2 className="font-semibold text-black leading-tight
        text-[clamp(22px,4.5vw,36px)]
      ">
        Why Choose RNK for Your Travel Needs?
      </h2>
    </motion.div>

    {/* Cards */}
    <motion.div
      className="
        grid gap-5 sm:gap-6
        md:grid-cols-2 lg:grid-cols-3
      "
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
    >
      {/* Card 1 */}
      <div
        className="
          h-full rounded-2xl p-6 sm:p-7
          bg-gradient-to-br from-red-900 via-red-900 to-[#F6CED6]
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
          transition-all duration-300
        "
      >
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/80 mb-2 font-semibold">
          Chauffeur-driven luxury
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          Chauffeur-driven luxury
        </h3>

        <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">
          Professional chauffeurs for stress-free, premium travel — ideal for executives, celebrities, and families.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="
          h-full rounded-2xl p-6 sm:p-7
          bg-gradient-to-br from-red-900 via-red-900 to-[#F6CED6]
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
          transition-all duration-300
        "
      >
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/80 mb-2 font-semibold">
          GPS-enabled & secure
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          GPS-enabled & secure
        </h3>

        <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">
          Live tracking, optimized routes, and complete visibility of the journey for safety and efficiency.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="
          h-full rounded-2xl p-6 sm:p-7
          bg-gradient-to-br from-red-900 via-red-900 to-[#F6CED6]
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
          transition-all duration-300
        "
      >
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/80 mb-2 font-semibold">
          Reliable & safe vehicles
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          Reliable & safe vehicles
        </h3>

        <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed">
          Meticulously maintained luxury fleet with verified chauffeurs to ensure safe, disciplined travel.
        </p>
      </div>
    </motion.div>
  </div>
</section>





<section>
  <OurNetworkMapSection/>
</section>

<section className="bg-white text-black py-14 sm:py-16 md:py-20 xl:py-28">
  <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 2xl:px-16">
    <motion.div
      className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* COPY BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl lg:max-w-4xl xl:max-w-5xl"
      >
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-red-900 mb-3">
          More than just coverage
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-semibold tracking-tight">
          One fleet language,{" "}
          <span className="text-red-900">spoken in every city.</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg xl:text-[19px] leading-relaxed text-black/90">
          Whether it&apos;s a board meeting in Mumbai, a wedding in Jaipur
          or an artist arrival in Guwahati, RNK operates like a single,
          well-rehearsed team. Your guests experience the same greeting,
          the same car standards and the same quiet efficiency—no matter
          where their pin drops.
        </p>

        <p className="mt-3 text-sm sm:text-base md:text-lg xl:text-[19px] leading-relaxed text-black/80">
          For you, that means one contact, one consolidated itinerary, and
          a network that simply plugs into your plan instead of complicating it.
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          max-w-6xl
        "
      >
        {[
          {
            label: "For corporates",
            title: "Pan-India roadshows without juggling multiple vendors.",
            desc:
              "Centralised billing, uniform chauffeur training and airport coverage in all major business hubs.",
          },
          {
            label: "For weddings",
            title: "Guests flying in from everywhere, handled in one place.",
            desc:
              "Coordinated airport runs, hotel shuttles and VIP movement across cities for multi-location celebrations.",
          },
          {
            label: "For individuals",
            title: "Land, sit back, recognise the RNK experience instantly.",
            desc:
              "From solo travellers to families, enjoy the same premium feel you’re used to—city after city.",
          },
        ].map((card) => (
          <div
            key={card.label}
            className="
              relative
              rounded-2xl
              border border-black/10
              bg-gradient-to-r from-red-900 to-[#F6CED6]
              px-7 py-8 sm:px-8 sm:py-9
              flex flex-col justify-between
              transition-all duration-300
              hover:scale-[1.03]
              hover:shadow-xl
            "
          >
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white mb-2">
                {card.label}
              </p>
              <p className="text-sm sm:text-base font-medium text-white">
                {card.title}
              </p>
            </div>

            <p className="mt-4 text-[11px] sm:text-[12px] text-white/95 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* -------------------------------- */}
      {/* FILTERS + SEARCH */}
      {/* -------------------------------- */}
      <section className="border-b border-white/10 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs md:text-[13px] transition-all ${
                    isActive
                      ? "border-red-900 bg-red-900 text-white shadow-[0_0_25px_rgba(200,16,46,0.4)]"
                      : "border-white/15 bg-white/2 text-white/70 hover:border-white/40"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="w-full md:w-auto">
            <div className="relative max-w-xs md:max-w-sm ml-auto">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-white/40">
                🔍
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city…"
                className="w-full rounded-full border border-white/15 bg-white/2 py-2.5 pl-8 pr-3 text-xs md:text-[13px] text-white placeholder:text-white/35 outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E]"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* -------------------------------- */}
      {/* CITY GRID */}
      {/* -------------------------------- */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-xs md:text-[13px] text-white/60">
              Showing{" "}
              <span className="text-white">
                {filteredCities.length} city
                {filteredCities.length !== 1 ? " entries" : ""}
              </span>{" "}
              from RNK&apos;s India network.
            </p>
            <p className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-white/40">
              Scroll • Tap a city • Expand details
            </p>
          </div>

          {filteredCities.length === 0 ? (
            <p className="text-sm text-white/60">
              No cities match your search yet. Try a different name.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filteredCities.map((city, index) => {
                const isOpen = expandedCity === city.name;
                const bg = getCityBg(city);

                return (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.02,
                    }}
                    style={{
                      backgroundImage: `url('${bg}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="group relative overflow-hidden rounded-2xl border border:white/10 hover:border-red-900 hover:shadow-[0_0_30px_rgba(200,16,46,0.35)] transition-all h-[280px] flex flex-col"
                  >
                    {/* dark overlay only */}
                    

                    {/* CONTENT WRAPPER */}
                    <div className="relative z-10 flex flex-col h-full px-4 pb-4 pt-3 text-[12px] md:text-[13px] text-white/85">
                      {/* Card header */}
                      <button
                        onClick={() => handleToggle(city.name)}
                        className="flex w-full items-center justify-between gap-3 mb-2"
                      >
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-2">
                            <h2 className="text-sm md:text-[15px] font-medium tracking-tight">
                              {city.name}
                            </h2>
                            {city.isMetro && (
                              <span className="rounded-full border border-red-900 bg-[#C8102E]/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[#C8102E]">
                                Metro
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow / indicator */}
                        <motion.div
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/4 text-[10px] text-white/70 group-hover:border-[#C8102E]/70 group-hover:text-[#C8102E]"
                        >
                          ➜
                        </motion.div>
                      </button>

                      {/* Expandable content area – scroll only when open, scrollbar hidden */}
                      <div
                        className={
                          "flex-1 pr-1 " +
                          (isOpen
                            ? "overflow-y-scroll no-scrollbar"
                            : "overflow-hidden")
                        }
                      >
                        <motion.div
                          initial={false}
                          animate={
                            isOpen
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 8 }
                          }
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="space-y-2.5 h-full"
                        >
                          {isOpen && (
                            <>
                              <p className="leading-relaxed text-white/80">
                                RNK offers a full-suite premium car rental
                                service in{" "}
                                <span className="font-medium">
                                  {city.name}
                                </span>{" "}
                                — from corporate movements and airport
                                transfers to wedding logistics and VIP
                                chauffeuring.
                              </p>
                              <p className="text-white/70 leading-relaxed">
                                Every route is pre-mapped, chauffeurs follow RNK
                                SOPs, and the same fleet standards are
                                maintained across cities so your experience
                                feels familiar, reliable, and luxuriously
                                predictable.
                              </p>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  Airport Pickups &amp; Drops
                                </span>
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  Corporate Travel
                                </span>
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  Weddings &amp; Social Events
                                </span>
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  City &amp; Outstation
                                </span>
                              </div>
                            </>
                          )}
                        </motion.div>
                      </div>


                      {/* Explore button – bottom center */}
                      <div className="mt-auto pt-3 flex justify-center">
 <Link
  href={`/city/${slugifyCity(city.name)}`}
  className="inline-flex items-center justify-center rounded-full 
     bg-linear-to-r from-red-900 via-[#e0313f] to-[#8b0f24]
     px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.22em]
     text-white border border-white/10
     shadow-[0_14px_40px_rgba(200,16,46,0.65)]
     hover:shadow-[0_20px_55px_rgba(200,16,46,0.85)]
     hover:-translate-y-0.5 active:translate-y-0
     transition-all duration-300"
>
  Explore this city
</Link>
</div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ContactUs/>

      <FAQComponent/>
    </main>
  );
}
