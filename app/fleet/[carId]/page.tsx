"use client";

import { useEffect, useState, type FormEvent } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getCarById, CATEGORIES } from "@/lib/fleet-data";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";
import {
  Users,
  DoorOpen,
  Briefcase,
  Car,
  Fuel,
  UserCheck,
} from "lucide-react";

// Optional: multi-image gallery per car (fill with your real paths)
const today = new Date().toISOString().split("T")[0];

const galleryImagesMap: Record<string, string[]> = {
  "rolls-royce": [
    "/RollsRoyals_1.webp",
    "/RollsRoyals_2.webp",
    "/RollsRoyals_3.webp",
    "/RollsRoyals_4.webp",
    "/RollsRoyals_5.webp",
  ],
  "hummer": ["/Hummer_1.webp", "/Hummer_2.webp", "/Hummer_3.webp", "/Hummer_4.webp"],
  "mb-s-class": ["/Mercedes_Sclass_1.webp", "/Mercedes_Sclass_2.webp", "/Mercedes_Sclass_3.webp","/Mercedes_Sclass_4.webp","/Mercedes_Sclass_5.webp"],
  "mb-gls": ["/Mercedes_GLS_1.webp", "/Mercedes_GLS_2.webp", "/Mercedes_GLS_3.webp","/Mercedes_GLS_4.webp","/Mercedes_GLS_5.webp"],
  "mb-v-class": ["/Mercedes_V_Class_1.webp", "/Mercedes_V_Class_2.webp", "/Mercedes_V_Class_3.webp","/Mercedes_V_Class_4.webp",],
  "mb-gle": ["/Mercedes_GLE_1.webp", "/Mercedes_GLE_2.webp", "/Mercedes_GLE_3.webp",],
  "mb-e-class": ["/Mercedes_E_Class_1.webp", "/Mercedes_E_Class_2.webp", "/Mercedes_E_Class_3.webp", "/Mercedes_E_Class_4.webp","/Mercedes_E_Class_5.webp"],
  "toyota-camry": ["/toyota_camry_1.webp", "/toyota_camry_2.webp", "/toyota_camry_3.webp","/toyota_camry_4.webp"],
  "fortuner": ["/Toyota_Fortuner_1.webp","/Toyota_Fortuner_2.webp","/Toyota_Fortuner_3.webp","/Toyota_Fortuner_4.webp"],
  "hycross": ["/Toyota_Hycross_1.webp","/Toyota_Hycross_2.webp","/Toyota_Hycross_3.webp","/Toyota_Hycross_4.webp"],
  "innova-crysta": ["/Toyota_Crysta_1.webp","/Toyota_Crysta_2.webp","/Toyota_Crysta_3.webp","/Toyota_Crysta_4.webp"],
  "ciaz": ["/Maruti_Ciaz_1.webp","/Maruti_Ciaz_2.webp","/Maruti_Ciaz_3.webp","/Maruti_Ciaz_4.webp"],
  "honda-city": ["/Honda_City_1.webp","/Honda_City_2.webp","/Honda_City_3.webp","/Honda_City_4.webp"],
  "dzire": ["/Maruti_Swift_Dzire_1.webp","/Maruti_Swift_Dzire_2.webp","/Maruti_Swift_Dzire_3.webp","/Maruti_Swift_Dzire_4.webp"],
  "toyota-coaster": ["/Toyota_Coaster_1.webp","/Toyota_Coaster_2.webp","/Toyota_Coaster_3.webp","/Toyota_Coaster_4.webp"],
  "toyota-commuter": ["/Toyota_Commuter_1.webp","/Toyota_Commuter_2.webp"],
  "luxury-foton": ["/Luxury_Foton_1.webp","/Luxury_Foton_2.webp","/Luxury_Foton_3.webp","/Luxury_Foton_4.webp"],
  "standard-foton": ["/Standard_Foton_1.webp","/Standard_Foton_2.webp","/Standard_Foton_3.webp","/Standard_Foton_4.webp"],
  "urbania": ["/Urbania_1.webp","/Urbania_2.webp","/Urbania_3.webp","/Urbania_4.webp"],
  "volvo-9600": ["/Coaches-1.webp"],
  "43-seater": ["/Coaches-2.webp"],
  "27-seater": ["/Coaches-3.webp"],
  "byd-E6-electric-vehicle": ["/Byd_E6_Electric_Vehicle_1.webp","/Byd_E6_Electric_Vehicle_2.webp","/Byd_E6_Electric_Vehicle_3.webp","/Byd_E6_Electric_Vehicle_4.webp","/Byd_E6_Electric_Vehicle_5.webp"],
  "kia-cares": ["/Kia_Cares_1.webp","/Kia_Cares_2.webp","/Kia_Cares_3.webp","/Kia_Cares_4.webp"],
};

type SpecProps = {
  label: string;
  value: string;
};

function Spec({ label, value }: SpecProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        y: -6,
        boxShadow: "0 18px 40px rgba(200,16,46,0.45)",
      }}
      className="group relative overflow-hidden rounded-xl border border-white/10 
                 bg-black/30 px-4 py-3 backdrop-blur-sm transition-all duration-300 
                 group-hover:border-[#C8102E]/70 group-hover:bg-black/60"
    >
      {/* Metallic sheen */}
      <div
        className="pointer-events-none absolute -inset-y-10 -inset-x-10 
                   bg-linear-to-r from-transparent via-white/12 to-transparent 
                   opacity-0 -translate-x-full 
                   group-hover:opacity-100 group-hover:translate-x-full
                   transition-all duration-700"
      />

      {/* Red glow accent */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br 
                      from-[#C8102E]/15 via-transparent to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 
                      group-hover:text-[#C8102E]/90 transition duration-300 mb-1">
          {label}
        </p>

        <p className="text-sm font-medium text-white transition duration-300">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

export default function CarDetailPage() {
  const params = useParams();
  const carId = params?.carId as string;

  const car = getCarById(carId);
    // ---------- Enquiry form state + handler ----------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      mobileNumber: formData.get("mobile"),      // matches name="mobile"
      startDate: formData.get("startDate"),
      passengers: formData.get("passengers"),
      pickupCity: formData.get("pickupCity"),
      vehicle: formData.get("vehicle"),         // readOnly car.name field
    };

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Thank you. Our team will get in touch with you shortly.");
        form.reset();
      } else {
        setMessage("Something went wrong. Please try again in a moment.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to send right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // --------------------------------------------------


  // Build gallery images: use mapped set, fall back to single main image
  const galleryImages =
    (car && galleryImagesMap[car.id]) || (car?.image ? [car.image] : []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when car changes
  useEffect(() => {
    if (!galleryImages.length) return;
    setCurrentIndex(0);
  }, [carId, galleryImages.length]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!galleryImages.length) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(id);
  }, [galleryImages.length]);

  const goPrev = () => {
    if (!galleryImages.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    if (!galleryImages.length) return;
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Fallback if car not found
  if (!car) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center space-y-3">
          <p className="text-sm text-white/60 tracking-[0.28em] uppercase">
            RNK · Fleet
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Vehicle not found
          </h1>
          <p className="text-sm md:text-[15px] text-white/65 max-w-md mx-auto">
            This vehicle is not part of the active RNK fleet listing. Please go
            back to the fleet page to view available options.
          </p>
          <Link
            href="/fleet"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition mt-2"
          >
            Back to Fleet
          </Link>
        </div>
      </main>
    );
  }

  const category = CATEGORIES.find((c) => c.id === car.category);

  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
      {/* HERO */}
      {/* HERO */}
<section
  className="
    relative w-full overflow-hidden border-b border-white/10
    h-[100svh]
    flex items-center justify-center
  "
>
  {/* Background Image */}
  {car.image && (
    <motion.img
      src={car.image}
      alt={car.name}
      className="absolute inset-0 h-full w-full object-cover"
      initial={{ scale: 1.08, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}

      transition={{ duration: 1, ease: 'easeOut' }}
    />
  )}

  {/* Overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/20 to-black/5" />

  {/* CONTENT – TRUE CENTER */}
  <div
    className="
      relative z-10
      w-full max-w-7xl 2xl:max-w-[90rem]
      px-4 sm:px-6 lg:px-10 2xl:px-16
      flex items-center justify-center
    "
  >
    <div className="text-center lg:text max-w-xl sm:max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
      
      {/* Breadcrumb */}
      <div
  className="
    flex justify-center gap-2
    text-white/80
    text-[11px]
    sm:text-[12px]
    md:text-[13px]
    lg:text-[14px]
    xl:text-[15px]
    2xl:text-[20px]
  "
>
  <Link href="/" className="hover:text-white transition">
    Home
  </Link>
  <span className="opacity-60">||</span>
  <Link href="/fleet" className="hover:text-white transition">
    Fleet
  </Link>
  <span className="opacity-60">||</span>
  <span className="text-white">{car.name}</span>
</div>


      {/* Category */}
      {category && (
       <p
  className="
    text-white font-bold uppercase tracking-[0.23em]
    text-[9px]
    sm:text-[10px]
    md:text-[11px]
    lg:text-[12px]
     xl:text-[15px]
    2xl:text-[20px]
  "
>
  {category.label}
</p>

      )}

      {/* Title */}
      <h1
  className="
    text-red-900 font-semibold tracking-tight
    text-[26px]
    sm:text-[32px]
    md:text-[40px]
    lg:text-[48px]
    xl:text-[56px]
    2xl:text-[64px]
    3xl:text-[72px]
    leading-[1.15]
  "
>
  {car.name}
</h1>
        

      {/* Description */}
     
      

       
      </div>
    </div>

</section>


    {/* SPECS SECTION – RESPONSIVE · WHITE BG · RNK RED */}
<section
  className="
    bg-white text-black border-t border-black/10
    min-h-[80svh] sm:min-h-[75vh] 
    flex items-center
  "
>
  <div
    className="
      w-full
      max-w-7xl 2xl:max-w-[92rem]
      mx-auto
      px-4 sm:px-6 lg:px-10 2xl:px-16
      py-12 sm:py-16 lg:py-20 2xl:py-28
    "
  >
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

      {/* LEFT – VEHICLE SPECS */}
      <div className="lg:col-span-2 space-y-5 sm:space-y-6 2xl:space-y-8">
        <h2 className="
          text-2xl sm:text-3xl lg:text-[34px] 2xl:text-4xl
          font-semibold
        ">
          Vehicle Specifications
        </h2>

        <p className="
          text-sm sm:text-[15px] lg:text-base
          text-black/60
          max-w-2xl
        ">
          Exact model, variant and interior configuration may vary slightly
          depending on availability and city, while maintaining the same
          comfort and experience bracket.
        </p>

        {/* SPECS GRID */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3
          gap-4 sm:gap-5 lg:gap-6
          pt-4 sm:pt-5
        ">
          {[
            {
    label: "Category",
    value: category?.label ?? "—",
    icon: Car,
  },
  {
    label: "Seating Capacity",
    value: car.seating,
    icon: Users,
  },
  {
    label: "Doors",
    value: car.doors,
    icon: DoorOpen,
  },
  {
    label: "Luggage Capacity",
    value: car.luggage,
    icon: Briefcase, // 🧳 bag icon
  },
  {
    label: "Chauffeur",
    value: "Included",
    icon: UserCheck,
  },
  {
    label: "Fuel Type",
    value: "On request",
    icon: Fuel,
  },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.07,
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 45px rgba(127,29,29,0.25)",
              }}
              className="
                relative overflow-hidden rounded-xl
                border border-red-900/25
                bg-red-900/[0.06]
                px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5
                transition-all duration-300
              "
            >
              {/* Accent strip */}
              <span className="absolute left-0 top-0 h-full w-1 bg-red-900" />

              {/* Gradient overlay */}
              <span className="
                pointer-events-none absolute inset-0
                bg-linear-to-br from-red-900/[0.08] via-transparent to-white/40
              " />

             <div className="relative flex items-start gap-3 sm:gap-4">
  
  {/* Icon */}
  <div
    className="
      flex h-9 w-9 sm:h-10 sm:w-10
      items-center justify-center
      rounded-lg
      bg-red-900/15
      text-red-900
    "
  >
    <item.icon size={18} strokeWidth={1.6} />
  </div>

  {/* Text */}
  <div className="space-y-1">
    <p
      className="
        text-[10px] sm:text-[11px]
        uppercase tracking-[0.22em]
        text-red-900/80
      "
    >
      {item.label}
    </p>

    <p
      className="
        text-sm sm:text-[15px] lg:text-base
        font-medium text-black
      "
    >
      {item.value}
    </p>
  </div>
</div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT – BOOKING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          y: -10,
          boxShadow: "0 28px 70px rgba(127,29,29,0.45)",
        }}
        className="
          relative rounded-2xl
          bg-red-900 text-white
          p-6 sm:p-8 lg:p-9 2xl:p-11
          shadow-[0_18px_45px_rgba(127,29,29,0.35)]
          overflow-hidden
          self-start lg:self-center
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/40" />

        <div className="relative space-y-4 sm:space-y-5">
          <p className="
            text-[11px] uppercase tracking-[0.24em]
            text-white/80
          ">
            Booking & Movement
          </p>

          <p className="
            text-sm sm:text-[15px] lg:text-base
            text-white/90
          ">
            Share your route, timings and guest profile — our team will
            confirm availability, city-specific pricing and a tailored
            movement plan for this vehicle.
          </p>

          <p className="
            text-[13px] sm:text-sm
            text-white/65
          ">
            For multiple cars, mixed fleets or outstation itineraries,
            mention this model as your preferred choice in the enquiry
            form.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>

    {/* ENQUIRY FORM SECTION – FIXED BG IMAGE */}
<section
  className="
    relative border-t border-white/10
    bg-[url('/RollsRoyals_1.webp')]
    bg-cover bg-center bg-no-repeat
    bg-scroll md:bg-fixed
  "
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

  {/* Content */}
  <div className="relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT SIDE – TEXT + IMAGE SLIDER */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Submit Your Enquiry
          </h2>

          <p className="text-sm md:text-[15px] text-white/70 max-w-md">
            Share your basic details and our RNK team will get in touch with
            a curated quote and movement plan for the{" "}
            <span className="font-medium">{car.name}</span>.
          </p>

          {galleryImages.length > 0 && (
            <div className="mt-6 relative max-w-xl">
              <motion.div
                key={galleryImages[currentIndex]}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/5"
              >
                <img
                  src={galleryImages[currentIndex]}
                  alt={`${car.name} enquiry view ${currentIndex + 1}`}
                  className="w-full h-64 sm:h-72 md:h-[360px] lg:h-[400px] object-cover"
                />
              </motion.div>

              {/* Left arrow */}
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center 
                           rounded-full border border-white/40 bg-black/70 text-white text-lg 
                           backdrop-blur-sm 
                           hover:bg-linear-to-r hover:from-[#C8102E] hover:to-[#8b0f24]
                           hover:border-[#C8102E]
                           hover:shadow-[0_12px_35px_rgba(200,16,46,0.65)]
                           transition-all duration-300"
              >
                ‹
              </button>

              {/* Right arrow */}
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center 
                           rounded-full border border-white/40 bg-black/70 text-white text-lg 
                           backdrop-blur-sm 
                           hover:bg-linear-to-r hover:from-[#C8102E] hover:to-[#8b0f24]
                           hover:border-[#C8102E]
                           hover:shadow-[0_12px_35px_rgba(200,16,46,0.65)]
                           transition-all duration-300"
              >
                ›
              </button>

              {/* Dots */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-5 bg-[#C8102E]"
                        : "w-2 bg-white/35 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE – FORM */}
        <form
          className="h-full flex flex-col justify-between space-y-4 
                     rounded-2xl border border-white/10 
                     bg-black/70 backdrop-blur-md 
                     p-5 md:p-6 shadow-xl"
          onSubmit={handleSubmit}
        >
          {/* Hidden fields */}
          <input type="hidden" name="_subject" value="New RNK Car Enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Full Name */}
          <div>
            <label className="text-xs uppercase tracking-[0.16em] text-white/70">
              Full Name<span className="text-[#C8102E]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black"
            />
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="email" name="email" required placeholder="Email"
              className="rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black" />
            <input type="tel" name="mobile" required placeholder="Mobile"
              className="rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black" />
          </div>

          {/* Date & Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
  type="date"
  name="startDate"
  required
  min={today}
  className="rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black"
/>

            <input type="number" name="passengers" min={1} required placeholder="Passengers"
              className="rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black" />
          </div>

          {/* Pickup City & Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="pickupCity" required placeholder="Pickup City"
              className="rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black" />
            <input type="text" readOnly value={car.name}
              className="rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white" />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-linear-to-r from-[#C8102E] via-[#e0313f] to-[#8b0f24]
                       px-6 py-2.5 text-[11px] uppercase tracking-[0.22em]
                       text-white shadow-[0_14px_40px_rgba(200,16,46,0.7)]
                       hover:shadow-[0_20px_55px_rgba(200,16,46,0.9)]
                       transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit your enquiry"}
          </button>

          {message && (
            <p className="text-xs text-white/70">{message}</p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <section>
        <RnkFooter />
      </section>
    </main>
  );
}
