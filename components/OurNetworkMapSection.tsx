"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type City = { name: string; x: number; y: number };

type CityPanel = {
  title: string;
  tabs: string[];
  stateImage: string;
  tabImages?: Record<string, string>;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const MAP_ASPECT = `
  aspect-[4/5]
  sm:aspect-[3/4]
  md:aspect-[600/669]
  xl:aspect-[16/18]
`;

const ALL_CITIES: string[] = [
  "Ahmedabad",
  "Agartala",
  "Agra",
  "Ahmednagar",
  "Aizawl",
  "Amaravati",
  "Amritsar",
  "Anantapur",
  "Asansol",
  "Bagdogra",
  "Baharampur",
  "Balangir",
  "Balasore",
  "Bathinda",
  "Bhanjanagar",
  "Bhavanipatna",
  "Bangalore",
  "Bareilly",
  "Bellary",
  "Belgavi",
  "Bharuch",
  "Bhopal",
  "Bijapur",
  "Bhubaneswar",
  "Calicut",
  "Chandigarh",
  "Chhatarpur",
  "Chandrapur",
  "Chennai",
  "Coimbatore",
  "Cuttack",
  "Dehradun",
  "Delhi",
  "Dharamgarh",
  "Dhule",
  "Dibrugarh",
  "Dindigul",
  "Durgapur",
  "Ernakulam",
  "Erode",
  "Gandhinagar",
  "Guntur",
  "Goa",
  "Gorakhpur",
  "Guwahati",
  "Gulbarga",
  "Gurgaon",
  "Gwalior",
  "Haridwar",
  "Hosapete",
  "Hubli",
  "Hyderabad",
  "Indore",
  "Jammu",
  "Jabalpur",
  "Jamshedpur",
  "Jamnagar",
  "Jalandhar",
  "Jalgaon",
  "Jharsugda",
  "Kadapa",
  "Kalaburgi",
  "Kakinada",
  "Kasargod",
  "Kurnool",
  "Kochi",
  "Kolhapur",
  "Kanpur",
  "Karaikudi",
  "Katihar",
  "Kolkata",
  "Koraput",
  "Latur",
  "Lucknow",
  "Ludhiana",
  "Malda",
  "Mangalore",
  "Mathura",
  "Madhurai",
  "Mohali",
  "Moradabad",
  "Mumbai",
  "Mysore",
  "Nagpur",
  "Nanded",
  "Nashik",
  "Nellore",
  "Ongole",
  "Patna",
  "Patiala",
  "Pondicherry",
  "Pune",
  "Pathankot",
  "Pantnagar",
  "Prayagraj",
  "Parlakhemundi",
  "Raichur",
  "Raipur",
  "Rajahmundry",
  "Rajkot",
  "Ranchi",
  "Rayagada",
  "Rupnagar",
  "Roorkee",
  "Rudrapur",
  "Secunderabad",
  "Salem",
  "Sambalpur",
  "Sambhajinagar",
  "Shirdi",
  "Shivamogga",
  "Silchar",
  "Siliguri",
  "Srinagar",
  "Surat",
  "Sultanpur",
  "Solapur",
  "Tiruchirappalli",
  "Tirupati",
  "Trichur",
  "Trivandrum",
  "Thekkemala",
  "Thiruvananthapuram",
  "Tirupur",
  "Vadodara",
  "Varanasi",
  "Vijaywada",
  "Visakhapatnam",
  "Zirakpur",
];

/** LEFT MAP PINS */
const CITIES: City[] = [
  { name: "Jammu & Shrinagar", x: 33, y: 10 },
  { name: "Chandigarh", x: 35, y: 18 },
  { name: "Punjab", x: 28, y: 22 },
  { name: "Uttarakhand", x: 42, y: 25 },
  { name: "Uttar Pradesh", x: 45, y: 35 },
  { name: "Haryana", x: 28, y: 27 },
  { name: "Delhi", x: 33, y: 28 },
  { name: "Rajasthan", x: 25, y: 38 },
  { name: "Gujrat", x: 16, y: 48 },
  { name: "Madhya pradesh", x: 39, y: 47 },
  { name: "Mumbai", x: 30, y: 60 },
  { name: "Goa", x: 21, y: 74 },
  { name: "Karnataka", x: 30, y: 80 },
  { name: "Bihar", x: 62, y: 39 },
  { name: "Assam", x: 85, y: 36 },
  { name: "Tripura", x: 82, y: 45 },
  { name: "Mizoram", x: 87, y: 48 },
  { name: "Telangana", x: 40, y: 64 },
  { name: "Chattisgarh", x: 50, y: 55 },
  { name: "Odisha", x: 59, y: 55 },
  { name: "Andhra Pradesh", x: 42, y: 73 },
  { name: "Pondicherry", x: 45, y: 80 },
  { name: "Tamilnadu", x: 38, y: 89 },
  { name: "Kerla", x: 30, y: 89 },
  { name: "Jharkhand", x: 60, y: 47 },
  { name: "West Bengal", x: 68, y: 47 },
];

/** RIGHT PANEL DATA */
const CITY_PANEL: Record<string, CityPanel> = {
  "Jammu & Shrinagar": {
    title: "Jammu & Srinagar",
    tabs: ["Jammu", "Srinagar"],
    stateImage: "/states/jammu-and-kashmir.webp",
  },
  Chandigarh: {
    title: "Chandigarh",
    tabs: ["Chandigarh"],
    stateImage: "/states/chandigarh.webp",
  },
  Punjab: {
    title: "Punjab",
    tabs: [
      "Amritsar",
      "Bathinda",
      "Jalandhar",
      "Ludhiana",
      "Mohali",
      "Pathankot",
      "Patiala",
      "Rupnagar",
      "Zirakpur",
    ],
    stateImage: "/states/punjab.webp",
  },
  Uttarakhand: {
    title: "Uttarakhand",
    tabs: ["Dehradun", "Haridwar", "Pantnagar", "Roorkee", "Rudrapur"],
    stateImage: "/states/uttarakhand.webp",
  },
  "Uttar Pradesh": {
    title: "Uttar Pradesh",
    tabs: ["Uttar Pradesh"],
    stateImage: "/states/uttar-pradesh.webp",
  },
  Haryana: {
    title: "Haryana",
    tabs: ["Gurugram"],
    stateImage: "/states/haryana.webp",
  },
  Delhi: {
    title: "Delhi",
    tabs: ["Delhi", "Noida", "Gurugram"],
    stateImage: "/states/delhi.webp",
  },
  Rajasthan: {
    title: "Rajasthan",
    tabs: ["Ajmer", "Bikaner", "Jaipur", "Jodhpur", "Kota", "Udaipur"],
    stateImage: "/states/rajasthan.webp",
  },
  Gujrat: {
    title: "Gujrat",
    tabs: [
      "Ahmedabad",
      "Bharuch",
      "Gandhinagar",
      "Jamnagar",
      "Rajkot",
      "Surat",
      "Vadodara",
    ],
    stateImage: "/states/gujarat.webp",
  },
  "Madhya pradesh": {
    title: "Madhya Pradesh",
    tabs: ["Bhopal", "Chhatarpur", "Gwalior", "Indore", "Jabalpur"],
    stateImage: "/states/madhya-pradesh.webp",
  },
  Mumbai: {
    title: "Maharashtra",
    tabs: [
      "Ahmednagar",
      "Amaravati",
      "Chandrapur",
      "Dhule",
      "Jalgaon",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Nagpur",
      "Nanded",
      "Nashik",
      "Pune",
      "Sambhajinagar",
      "Shirdi",
      "Solapur",
    ],
    stateImage: "/states/maharashtra.webp",
  },
  Goa: {
    title: "Goa",
    tabs: ["Goa"],
    stateImage: "/states/goa.webp",
  },
  Karnataka: {
    title: "Karnataka",
    tabs: [
      "Bangalore",
      "Belgavi",
      "Bellary",
      "Bijapur",
      "Gulbarga",
      "Hosapete",
      "Hubli",
      "Kalaburgi",
      "Mangalore",
      "Mysore",
      "Raichur",
      "Shivamogga",
    ],
    stateImage: "/states/karnataka.webp",
  },
  Bihar: {
    title: "Bihar",
    tabs: ["Katihar", "Patna"],
    stateImage: "/states/bihar.webp",
  },
  Assam: {
    title: "Assam",
    tabs: ["Dibrugarh", "Guwahati", "Silchar"],
    stateImage: "/states/assam.webp",
  },
  Tripura: {
    title: "Tripura",
    tabs: ["Agartala"],
    stateImage: "/states/tripura.webp",
  },
  Mizoram: {
    title: "Mizoram",
    tabs: ["Aizawl"],
    stateImage: "/states/mizoram.webp",
  },
  Telangana: {
    title: "Telangana",
    tabs: ["Hyderabad", "Secunderabad"],
    stateImage: "/states/telangana.webp",
  },
  Chattisgarh: {
    title: "Chhattisgarh",
    tabs: ["Raipur"],
    stateImage: "/states/chhattisgarh.webp",
  },
  Odisha: {
    title: "Odisha",
    tabs: [
      "Balangir",
      "Balasore",
      "Bhanjanagar",
      "Bhavanipatna",
      "Bhubaneswar",
      "Cuttack",
      "Dharamgarh",
      "Jharsugda",
      "Koraput",
      "Parlakhemundi",
      "Rayagada",
      "Sambalpur",
    ],
    stateImage: "/states/orissa-map.webp",
  },
  "Andhra Pradesh": {
    title: "Andhra Pradesh",
    tabs: [
      "Anantapur",
      "Guntur",
      "Kadapa",
      "Kakinada",
      "Kurnool",
      "Nellore",
      "Ongole",
      "Rajahmundry",
      "Tirupati",
      "Vijaywada",
      "Visakhapatnam",
    ],
    stateImage: "/states/andhrapradesh.webp",
  },
  Pondicherry: {
    title: "Puducherry",
    tabs: ["Puducherry"],
    stateImage: "/states/puducherry.webp",
  },
  Tamilnadu: {
    title: "Tamil Nadu",
    tabs: [
      "Chennai",
      "Coimbatore",
      "Dindigul",
      "Erode",
      "Karaikudi",
      "Madhurai",
      "Salem",
      "Tiruchirappalli",
      "Tirupur",
    ],
    stateImage: "/states/tamil-nadu.webp",
  },
  Kerla: {
    title: "Kerala",
    tabs: [
      "Calicut",
      "Ernakulam",
      "Kasargod",
      "Kochi",
      "Thekkemala",
      "Thiruvananthapuram",
      "Trichur",
      "Trivandrum",
    ],
    stateImage: "/states/kerala-map.webp",
  },
  Jharkhand: {
    title: "Jharkhand",
    tabs: ["Jamshedpur", "Ranchi"],
    stateImage: "/states/jharkhand.webp",
  },
  "West Bengal": {
    title: "West Bengal",
    tabs: [
      "Asansol",
      "Bagdogra",
      "Baharampur",
      "Durgapur",
      "Kolkata",
      "Malda",
      "Siliguri",
    ],
    stateImage: "/states/westbengal.webp",
  },
};

function Pin({
  active,
  onEnter,
  onLeave,
  onClick,
}: {
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onClick}
      aria-label="City pin"
      className="relative"
      initial={false}
      animate={{ scale: active ? 1.1 : 1 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      {active && (
        <motion.span
          className="absolute left-1/2 top-[55%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/25"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      <Image
        src="/pointer.webp"
        alt="Location pin"
        width={18}
        height={28}
        className={`relative z-10 drop-shadow-md ${
          active ? "opacity-100" : "opacity-90"
        }`}
      />
    </motion.button>
  );
}

/** ✅ Updated: mobile-safe placement */
function AllCitiesButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
className="
  absolute 
  right-2 top-2 
  sm:right-4 sm:top-4 
  md:right-6 md:top-6
  z-20
"
      aria-label="All Cities"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-[10px] font-semibold tracking-wider text-black/60">
          ALL CITIES
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-[5px] bg-red-900" />
          ))}
        </div>
      </div>
    </button>
  );
}

/** ✅ Updated: fully responsive All Cities panel */
function AllCitiesPanel({
  cities,
  onPick,
  onClose,
}: {
  cities: string[];
  onPick: (name: string) => void;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return cities;
    return cities.filter((c) => c.toLowerCase().includes(s));
  }, [cities, q]);

  return (
    <div className="w-full overflow-hidden border border-black/10 bg-white shadow-sm">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-black px-4 sm:px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            All Cities
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-2 text-[11px] sm:text-xs font-semibold text-white/85 hover:bg-white/10 hover:text-white transition"
          >
            Close
          </button>
        </div>
      </div>

      {/* Sticky search */}
      <div className="sticky top-[64px] z-10 border-b border-black/10 bg-white px-4 py-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search city…"
          className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#C8102E]/40"
        />
      </div>

      {/* Scroll area with mobile-safe height */}
<div className="
  max-h-[calc(100svh-140px)]
  sm:max-h-[calc(100svh-160px)]
  md:max-h-[520px]
  xl:max-h-[620px]
  overflow-auto
">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => onPick(name)}
              className="
                border-b border-black/10
                sm:border-r
                px-4 py-4
                text-center
                text-sm sm:text-base md:text-lg
                font-semibold
                text-black/60
                hover:bg-black/[0.03] hover:text-black
                transition
              "
            >
              <span className="block truncate">{name}</span>
            </button>
          ))}
        </div>

        {!filtered.length && (
          <div className="px-4 py-8 text-center text-sm text-black/50">
            No cities found.
          </div>
        )}
      </div>
    </div>
  );
}

export default function OurNetworkMapSection() {
  const [activeCity, setActiveCity] = useState<string>("Jammu & Shrinagar");
  const [showAllCities, setShowAllCities] = useState(false);

  const panel = useMemo<CityPanel>(() => {
    return (
      CITY_PANEL[activeCity] ?? {
        title: activeCity,
        tabs: [activeCity],
        stateImage: "/states/placeholder.webp",
      }
    );
  }, [activeCity]);

  const [activeTab, setActiveTab] = useState<string>(
    () => CITY_PANEL["Jammu & Shrinagar"]?.tabs?.[0] ?? ""
  );

  useEffect(() => {
    if (showAllCities) return;
    const first = CITY_PANEL[activeCity]?.tabs?.[0] ?? "";
    setActiveTab(first);
  }, [activeCity, showAllCities]);

  useEffect(() => {
    if (!showAllCities) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowAllCities(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showAllCities]);

  const rightImage =
    panel?.tabImages?.[activeTab] ||
    panel?.stateImage ||
    "/states/placeholder.webp";

  const allCityNames = useMemo(() => ALL_CITIES, []);

  const pickFromAllCities = (name: string) => {
    setActiveCity(name);
    setShowAllCities(false);
  };

  return (
    <section className="w-full bg-white text-black">
<div className="
  mx-auto w-full 
  max-w-[1400px] 
  px-4 sm:px-6 lg:px-10 
  py-10 md:py-14 xl:py-20
">
<div className="
  grid gap-8
  grid-cols-1
  lg:grid-cols-[1fr_1.25fr]
  xl:grid-cols-[1.05fr_1.35fr]
  2xl:grid-cols-[1.1fr_1.4fr]
  items-start
">
          {/* LEFT MAP */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative w-full"
          >
            <div className={`relative mx-auto w-full max-w-[990px] ${MAP_ASPECT}`}>
              <Image
                src="/map.webp"
                alt="India map showing service locations"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 120vw, 990px"
              />

              <AllCitiesButton onClick={() => setShowAllCities(true)} />

              <div className="absolute inset-0">
                {CITIES.map((city) => {
                  const isActive = city.name === activeCity && !showAllCities;
                  return (
                    <div
                      key={city.name}
                      className="absolute"
                      style={{
                        left: `${city.x}%`,
                        top: `${city.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Pin
                        active={isActive}
                        onEnter={() => {
                          if (!showAllCities) setActiveCity(city.name);
                        }}
                        onLeave={() => setActiveCity((prev) => prev)}
                        onClick={() => {
                          setShowAllCities(false);
                          setActiveCity(city.name);
                        }}
                      />

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: EASE }}
                            className="pointer-events-none absolute left-1/2 -top-3.5 -translate-x-1/2 -translate-y-full"
                          >
                            <div className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-md ring-1 ring-black/10">
                              {city.name}
                            </div>
                            <div className="mx-auto h-0 w-0 border-l-[7px] border-r-[7px] border-t-8 border-l-transparent border-r-transparent border-t-white drop-shadow" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {showAllCities ? (
                <motion.div
                  key="all-cities"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <AllCitiesPanel
                    cities={allCityNames}
                    onPick={pickFromAllCities}
                    onClose={() => setShowAllCities(false)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={activeCity}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="w-full"
                >
                  {/* HEADER + TABS */}
                  <div className="overflow-hidden border border-black/10 bg-white">
                    <div className="bg-black px-5 py-4">
                      <h3 className="text-center text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                        {panel?.title ?? activeCity}
                      </h3>
                    </div>

                    {/* TABS */}
                    <div className="border-b border-black/10 bg-white">
<div className="
  grid 
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-4
  lg:grid-cols-3
  xl:grid-cols-4
">
                        {(panel?.tabs?.length ? panel.tabs : ["City"]).map(
                          (t) => {
                            const isOn = t === activeTab;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setActiveTab(t)}
                                className={[
                                  "px-4 py-4 text-center text-sm font-semibold md:text-base",
                                  "border-r border-b border-black/10 last:border-r-0",
                                  "transition-colors duration-200",
                                  "whitespace-nowrap overflow-hidden text-ellipsis",
                                  isOn
                                    ? "bg-[#A72740] text-white"
                                    : "bg-white text-black/60 hover:bg-[#A72740]/10 hover:text-[#A72740]",
                                ].join(" ")}
                              >
                                {t}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="mt-6 w-full">
<div className="
  relative w-full
  h-[260px]
  sm:h-[380px]
  md:h-[520px]
  lg:h-[620px]
  xl:h-[720px]
  2xl:h-[820px]
">
                      <Image
                        src={rightImage}
                        alt={`${panel?.title ?? activeCity} map`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 750px"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
