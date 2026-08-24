"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ServicesSection } from "./home/ServicesSection";



const cities = [
  "Delhi",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Jaipur",
  "Agra",
  "Chandigarh",
  "Dehradun",
  "Rishikesh",
  "Haridwar",
  "Lucknow",
  "Mumbai",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
];


const fleet = [
  {
    name: "Rolls Royce",
    seating: "3+1",
    doors: "4",
    luggage: "2",
    href: "/fleet/rolls-royce",
  },
  {
    name: "Hummer",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    href: "/fleet/hummer",
  },
  {
    name: "Mercedes Benz S Class",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    href: "/fleet/mb-s-class",
  },
  {
    name: "Mercedes Benz GLS",
    seating: "5+1",
    doors: "4",
    luggage: "2",
    href: "/fleet/mb-gls",
  },
  {
    name: "Mercedes Benz V Class",
    seating: "5+1",
    doors: "4",
    luggage: "4",
    href: "/fleet/mb-v-class",
  },
  {
    name: "Mercedes Benz GLE",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    href: "/fleet/mb-gle",
  },
  {
    name: "Mercedes Benz E Class",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    href: "/fleet/mb-e-class",
  },
  {
    name: "Toyota Camry",
    seating: "4+1",
    doors: "4",
    luggage: "2",
    href: "/fleet/toyota-camry",
  },
  {
    name: "Toyota Fortuner",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    href: "/fleet/fortuner",
  },
  {
    name: "Toyota Hycross",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    href: "/fleet/hycross",
  },
  {
    name: "Toyota Crysta",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    href: "/fleet/innova-crysta",
  },
  {
    name: "BYD E6 Electric Vehicle",
    seating: "5+1",
    doors: "5",
    luggage: "2",
    href: "/fleet/byd-E6-electric-vehicle",
  },
  {
    name: "Kia Carens",
    seating: "6+1",
    doors: "5",
    luggage: "2",
    href: "/fleet/kia-carens",
  },
  {
    name: "Maruti Ciaz",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    href: "/fleet/ciaz",
  },
  {
    name: "Honda City",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    href: "/fleet/honda-city",
  },
  {
    name: "Maruti Swift Dzire",
    seating: "4+1",
    doors: "4",
    luggage: "1",
    href: "/fleet/dzire",
  },
  {
    name: "Toyota Coaster",
    seating: "13+1",
    doors: "1",
    luggage: "9",
    href: "/fleet/toyota-coaster",
  },
  {
    name: "Toyota Commuter",
    seating: "9+1",
    doors: "1",
    luggage: "4",
    href: "/fleet/toyota-commuter",
  },
  {
    name: "Urbania",
    seating: "15+1",
    doors: "1",
    luggage: "NA",
    href: "/fleet/urbania",
  },
  {
    name: "Volvo 9600",
    seating: "42+1",
    doors: "1",
    luggage: "30",
    href: "/fleet/volvo-9600",
  },
  {
    name: "43 Seater Bus",
    seating: "42+1",
    doors: "1",
    luggage: "25",
    href: "/fleet/43-seater",
  },
  {
    name: "27 Seater Bus",
    seating: "26+1",
    doors: "1",
    luggage: "15",
    href: "/fleet/27-seater",
  },
];


export default function BookingExperience() {
  const [tripType, setTripType] =
    useState<"one" | "round">("round");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const [passengers, setPassengers] = useState("2");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !pickup ||
      !destination ||
      !pickupDate ||
      !pickupTime
    ) {
      setError(
        "Please complete your pick-up, destination, date and time."
      );

      return;
    }

    if (
      tripType === "round" &&
      (!returnDate || !returnTime)
    ) {
      setError(
        "Please select your return date and time."
      );

      return;
    }

    if (!selectedVehicle) {
      setError("Please select a vehicle.");
      return;
    }

    setError("");

    const tripLabel =
      tripType === "round" ? "Round Trip" : "One Way";

    const whatsappMessage = [
      "Hello RNK, I would like to book a car.",
      "",
      `Trip Type: ${tripLabel}`,
      `Pick-up: ${pickup}`,
      `Destination: ${destination}`,
      `Pick-up Date: ${pickupDate}`,
      `Pick-up Time: ${pickupTime}`,
      ...(tripType === "round"
        ? [
            `Return Date: ${returnDate}`,
            `Return Time: ${returnTime}`,
          ]
        : []),
      ...(selectedVehicle ? [`Preferred Vehicle: ${selectedVehicle}`] : []),
      `Guests: ${passengers}`,
      "",
      "Please share the availability and pricing for this journey.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/919167977799?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.location.href = whatsappUrl;
  };

  const scrollToBooking = () => {
    document
      .getElementById("booking-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };



  return (
    <main className="overflow-x-hidden bg-[#f5f1eb] text-[#191512]">

      {/* =====================================================
          BOOKING - PAGE STARTS DIRECTLY HERE
      ====================================================== */}

      <section
        id="booking-form"
        className="!overflow-visible relative bg-[#f5f1eb] px-4 pb-28 pt-12 md:px-8 md:pb-36 md:pt-16 lg:px-10"
      >

        {/* SOFT BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -left-48 top-24 h-[520px] w-[520px] rounded-full bg-[#891f37]/[0.06] blur-[145px]" />

        <div className="pointer-events-none absolute -right-48 top-[-50px] h-[500px] w-[500px] rounded-full bg-[#c6a56e]/[0.09] blur-[145px]" />

        <div className="relative mx-auto max-w-[1420px]">

          {/* =================================================
              INTRO
          ================================================= */}

          <Reveal>
            <div className="grid gap-10 border-b border-[#cdbfae] pb-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-11 bg-[#811e34]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#811e34]">
                    RNK Private Mobility
                  </span>

                </div>

                <h1 className="mt-6 max-w-[900px] font-serif text-[44px] font-normal leading-[1.01] tracking-[-0.05em] text-[#191512] sm:text-5xl md:text-6xl lg:text-[76px]">

                  Every journey deserves

                  <span className="block italic text-[#811e34]">
                    a beautiful beginning.
                  </span>

                </h1>

              </div>

              <div className="max-w-[420px] lg:ml-auto">

                <p className="text-sm leading-8 text-black/45">
                  Premium chauffeur-driven journeys designed for
                  business, airports, celebrations, holidays and
                  moments that deserve something more considered.
                </p>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40 transition duration-300 hover:text-[#811e34]"
                >
                  Manage Existing Booking

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </div>
          </Reveal>

          {/* =================================================
              BOOKING CARD
          ================================================= */}

          <Reveal delay={100}>

            <form
              onSubmit={handleSubmit}
              className="relative mt-12 overflow-hidden rounded-[38px] border border-[#d5c8b8] bg-[#fcfaf6] shadow-[0_35px_110px_rgba(53,37,24,.13)]"
            >

              {/* TOP LUXURY ACCENT */}

              <div className="absolute left-0 right-0 top-0 h-[4px] bg-gradient-to-r from-[#70192e] via-[#9b4054] to-[#c8a56a]" />

              {/* FORM HEADER */}

              <div className="flex flex-col gap-8 border-b border-[#ded4c7] px-6 pb-8 pt-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#811e34]/15 bg-[#811e34]/5 text-[9px] font-semibold text-[#811e34]">
                      01
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#811e34]">
                      Private Reservation
                    </span>

                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-normal tracking-[-0.04em] md:text-4xl lg:text-[48px]">
                    Plan your journey.
                  </h2>

                  <p className="mt-2 text-xs leading-6 text-black/38">
                    Tell us where and when. We&apos;ll take
                    care of everything else.
                  </p>

                </div>

                {/* ONE WAY / ROUND TRIP */}

                <div className="inline-flex w-fit rounded-full border border-[#d8ccbd] bg-[#eee6db] p-1.5">

                  <button
                    type="button"
                    onClick={() =>
                      setTripType("one")
                    }
                    className={`rounded-full px-6 py-3 text-[10px] font-medium transition-all duration-500 ${
                      tripType === "one"
                        ? "bg-[#c8102e] text-white shadow-[0_8px_22px_rgba(200,16,46,.20)]"
                        : "text-black/40 hover:text-black"
                    }`}
                  >
                    One Way
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setTripType("round")
                    }
                    className={`rounded-full px-6 py-3 text-[10px] font-medium transition-all duration-500 ${
                      tripType === "round"
                        ? "bg-[#c8102e] text-white shadow-[0_8px_22px_rgba(200,16,46,.20)]"
                        : "text-black/40 hover:text-black"
                    }`}
                  >
                    Round Trip
                  </button>

                </div>

              </div>

              {/* =================================================
                  FORM BODY
              ================================================= */}

              <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">

                {/* PICK-UP + DESTINATION */}

                <div className="grid gap-6 lg:grid-cols-2">

                  {/* PICKUP */}

                  <div>

                    <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
                      Pick-up
                    </label>

                    <div className="group relative flex min-h-[76px] items-center gap-4 overflow-hidden rounded-[21px] border border-[#d8ccbd] bg-white px-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#bba895] hover:shadow-[0_12px_30px_rgba(62,42,28,.06)] focus-within:border-[#811e34] focus-within:shadow-[0_12px_35px_rgba(129,30,52,.08)]">

                      <span className="absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 bg-[#811e34] transition-transform duration-500 group-focus-within:scale-y-100" />

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3ece3]">

                        <span className="h-2.5 w-2.5 rounded-full bg-[#811e34]" />

                      </span>

                      <div className="w-full">

                        <span className="block text-[8px] uppercase tracking-[0.2em] text-black/25">
                          Starting from
                        </span>

                        <input
                          type="text"
                          value={pickup}
                          onChange={(e) =>
                            setPickup(
                              e.target.value
                            )
                          }
                          placeholder="Airport, hotel or address"
                          className="mt-1.5 w-full bg-transparent text-sm font-medium text-[#191512] outline-none placeholder:text-black/25"
                        />

                      </div>

                    </div>

                  </div>

                  {/* DESTINATION */}

                  <div>

                    <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
                      Destination
                    </label>

                    <div className="group relative flex min-h-[76px] items-center gap-4 overflow-hidden rounded-[21px] border border-[#d8ccbd] bg-white px-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#bba895] hover:shadow-[0_12px_30px_rgba(62,42,28,.06)] focus-within:border-[#811e34] focus-within:shadow-[0_12px_35px_rgba(129,30,52,.08)]">

                      <span className="absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 bg-[#811e34] transition-transform duration-500 group-focus-within:scale-y-100" />

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3ece3] text-[#811e34]">
                        ◇
                      </span>

                      <div className="w-full">

                        <span className="block text-[8px] uppercase tracking-[0.2em] text-black/25">
                          Travelling to
                        </span>

                        <input
                          type="text"
                          value={destination}
                          onChange={(e) =>
                            setDestination(
                              e.target.value
                            )
                          }
                          placeholder="Where would you like to go?"
                          className="mt-1.5 w-full bg-transparent text-sm font-medium text-[#191512] outline-none placeholder:text-black/25"
                        />

                      </div>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    DATE / TIME
                ================================================= */}

                <div
                  className={`mt-7 grid gap-5 ${
                    tripType === "round"
                      ? "sm:grid-cols-2 lg:grid-cols-4"
                      : "sm:grid-cols-2"
                  }`}
                >

                  <DateField title="Pick-up Date">

                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) =>
                        setPickupDate(
                          e.target.value
                        )
                      }
                      className="block w-full min-w-0 bg-transparent text-sm text-[#191512] outline-none"
                    />

                  </DateField>

                  <DateField title="Pick-up Time">

                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) =>
                        setPickupTime(
                          e.target.value
                        )
                      }
                      className="block w-full min-w-0 bg-transparent text-sm text-[#191512] outline-none"
                    />

                  </DateField>

                  {tripType === "round" && (
                    <>

                      <DateField title="Return Date">

                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) =>
                            setReturnDate(
                              e.target.value
                            )
                          }
                          className="block w-full min-w-0 bg-transparent text-sm text-[#191512] outline-none"
                        />

                      </DateField>

                      <DateField title="Return Time">

                        <input
                          type="time"
                          value={returnTime}
                          onChange={(e) =>
                            setReturnTime(
                              e.target.value
                            )
                          }
                          className="block w-full min-w-0 bg-transparent text-sm text-[#191512] outline-none"
                        />

                      </DateField>

                    </>
                  )}

                </div>

                {/* =================================================
                    VEHICLE SELECT
                ================================================= */}

                <div className="mt-7">

                  <label
                    htmlFor="vehicle"
                    className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40"
                  >
                    Select Vehicle
                  </label>

                  <div className="group relative overflow-hidden rounded-[21px] border border-[#c8102e]/25 bg-white transition-all duration-500 hover:border-[#c8102e]/55 hover:shadow-[0_12px_30px_rgba(200,16,46,.08)] focus-within:border-[#c8102e] focus-within:shadow-[0_12px_35px_rgba(200,16,46,.12)]">

                    <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 bg-[#c8102e] transition-transform duration-500 group-focus-within:scale-y-100" />

                    <div className="flex min-h-[72px] items-center gap-4 px-5">

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(200,16,46,0.10)] text-[#c8102e]">
                        ◈
                      </span>

                      <div className="min-w-0 flex-1">

                        <span className="mb-1 block text-[8px] uppercase tracking-[0.2em] text-black/25">
                          Preferred RNK Fleet
                        </span>

                        <select
                          id="vehicle"
                          value={selectedVehicle}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="block w-full cursor-pointer appearance-auto bg-transparent py-1 pr-2 text-sm font-medium text-[#191512] outline-none"
                        >
                          <option value="">
                            Select Vehicle
                          </option>

                          {fleet.map((vehicle) => (
                            <option
                              key={vehicle.name}
                              value={vehicle.name}
                            >
                              {vehicle.name}
                            </option>
                          ))}
                        </select>

                      </div>

                    </div>

                  </div>

                  <div className="mt-3 flex items-center gap-2 text-[9px] leading-5 text-black/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
                    Choose your preferred vehicle. Availability will be confirmed by RNK on WhatsApp.
                  </div>

                </div>

                {/* =================================================
                    GUESTS + CTA
                ================================================= */}

                <div className="mt-9 flex flex-col gap-8 border-t border-[#ded4c7] pt-8 lg:flex-row lg:items-end lg:justify-between">

                  {/* GUESTS */}

                  <div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
                      Guests
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">

                      {[1, 2, 3, 4, 5, 6].map(
                        (number) => (
                          <button
                            key={number}
                            type="button"
                            onClick={() =>
                              setPassengers(
                                String(number)
                              )
                            }
                            className={`flex h-11 w-11 items-center justify-center rounded-full border text-[11px] transition-all duration-300 ${
                              passengers ===
                              String(number)
                                ? "scale-105 border-[#811e34] bg-[#811e34] text-white shadow-[0_10px_25px_rgba(129,30,52,.20)]"
                                : "border-[#d5c8b9] bg-white text-black/45 hover:-translate-y-1 hover:border-[#811e34] hover:text-[#811e34] hover:shadow-md"
                            }`}
                          >
                            {number}
                          </button>
                        )
                      )}

                    </div>

                  </div>

                  {/* FIND CAR */}

                  <button
                    type="submit"
                    className="group relative flex min-h-[64px] w-full items-center justify-between overflow-hidden rounded-full bg-[#c8102e] px-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#a90d28] hover:shadow-[0_20px_45px_rgba(200,16,46,.25)] sm:w-auto sm:min-w-[320px]"
                  >

                    <span className="absolute inset-0 translate-y-full bg-[#811e34] transition-transform duration-500 group-hover:translate-y-0" />

                    <span className="relative">
                      Book on WhatsApp
                    </span>

                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#ead8b5] text-base text-black transition-all duration-500 group-hover:translate-x-1 group-hover:bg-white">
                      →
                    </span>

                  </button>

                </div>

                {/* ERROR */}

                {error && (
                  <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#811e34]/10 bg-[#811e34]/5 px-5 py-4 text-xs text-[#811e34]">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#811e34]" />

                    {error}

                  </div>
                )}

              </div>

            </form>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          RNK STANDARD
      ====================================================== */}

      <section className="!overflow-visible bg-[#f5f1eb] pb-36 md:pb-44">

        <div className="mx-auto max-w-[1360px] px-6 md:px-10">

          <Reveal>

            <div className="grid gap-14 border-t border-[#cfc0b0] pt-16 lg:grid-cols-[.55fr_1.45fr]">

              <div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.36em] text-[#811e34]">
                  The RNK Standard
                </span>

              </div>

              <div>

                <h2 className="max-w-[1000px] font-serif text-4xl font-normal leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[68px]">

                  Luxury isn&apos;t excess.

                  <span className="italic text-black/30">
                    {" "}
                    It&apos;s everything feeling exactly right.
                  </span>

                </h2>

                <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2">

                  <p className="text-sm leading-8 text-black/50">
                    A polished vehicle. A professional
                    chauffeur. A quiet cabin. A pickup that
                    happens exactly when expected.
                  </p>

                  <p className="text-sm leading-8 text-black/50">
                    RNK brings these details together so every
                    journey feels calm, effortless and
                    considered from beginning to end.
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          CINEMATIC IMAGE SECTION
      ====================================================== */}

      <section className="!overflow-visible bg-[#f5f1eb] px-4 pb-36 md:px-8 md:pb-44">

        <Reveal>

          <div className="group relative mx-auto min-h-[700px] max-w-[1450px] overflow-hidden rounded-[42px] bg-[rgba(200,16,46,0.35)] shadow-[0_35px_90px_rgba(200,16,46,.14)]">

            {/* IMAGE */}

            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
              style={{
                backgroundImage:
                  "url('/images/booking/luxury-journey.jpg')",
              }}
            />

            {/* DARK GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#c8102e]/90 via-[#c8102e]/45 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#c8102e]/35 via-transparent to-transparent" />

            {/* LARGE NUMBER */}

            <div className="absolute right-10 top-6 hidden font-serif text-[170px] leading-none text-white/[0.055] md:block">
              01
            </div>

            {/* TEXT */}

            <div className="relative flex min-h-[700px] items-end p-8 text-white md:p-14 lg:p-20">

              <div className="max-w-[700px]">

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#d6b77d]" />

                  <span className="text-[9px] uppercase tracking-[0.36em] text-[#dfc496]">
                    Signature Journeys
                  </span>

                </div>

                <h2 className="mt-8 font-serif text-4xl font-normal leading-[1.02] tracking-[-0.05em] md:text-6xl lg:text-[72px]">

                  The world outside

                  <span className="block italic text-[#dec294]">
                    can wait.
                  </span>

                </h2>

                <p className="mt-8 max-w-[520px] text-sm leading-8 text-white/55">
                  Step into a cleaner, quieter and more considered
                  way to travel — where every detail is handled
                  before you even close the door.
                </p>

                <Link
                  href="/fleet"
                  className="group/button mt-10 inline-flex items-center gap-6 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-black"
                >
                  Discover Our Fleet

                  <span className="transition-transform duration-500 group-hover/button:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </div>

          </div>

        </Reveal>

      </section>

      {/* =====================================================
          YOUR EXISTING SERVICES COMPONENT
      ====================================================== */}

      <section className="!overflow-visible bg-[#f5f1eb] pb-36 md:pb-44">

        <div className="mx-auto max-w-[1450px] px-4 md:px-8">

          {/* SERVICE SECTION INTRO */}

          <Reveal>

            <div className="mb-12 flex flex-col gap-7 border-b border-black/10 pb-11 md:flex-row md:items-end md:justify-between">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#811e34]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#811e34]">
                    Our Services
                  </span>

                </div>

                <h2 className="mt-6 max-w-[850px] font-serif text-4xl font-normal leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[62px]">

                  Designed around the way

                  <span className="italic text-black/30">
                    {" "}
                    you need to move.
                  </span>

                </h2>

              </div>

              <p className="max-w-[390px] text-sm leading-7 text-black/45">
                From corporate mobility and airport transfers
                to weddings, luxury travel and VIP movements,
                RNK delivers one consistent standard of service.
              </p>

            </div>

          </Reveal>

          {/* ACTUAL EXISTING COMPONENT */}

          <Reveal delay={100}>
            <ServicesSection />
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHY RNK - DARK SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-32 text-[#191512] md:py-40">

        {/* GLOWS */}

        <div className="pointer-events-none absolute -left-56 top-0 h-[560px] w-[560px] rounded-full bg-[#c8102e]/12 blur-[150px]" />

        <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#c8102e]/8 blur-[140px]" />

        <div className="relative mx-auto max-w-[1360px] px-6 md:px-10">

          <Reveal>

            <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#c8102e]" />

                  <span className="text-[9px] uppercase tracking-[0.36em] text-[#c8102e]">
                    Why RNK
                  </span>

                </div>

                <h2 className="mt-8 max-w-[620px] font-serif text-5xl font-normal leading-[1.03] tracking-[-0.05em] md:text-6xl lg:text-[68px]">

                  Quiet luxury,

                  <span className="block italic text-[#c8102e]/45">
                    beautifully delivered.
                  </span>

                </h2>

                <p className="mt-8 max-w-[480px] text-sm leading-8 text-black/50">
                  Good service should never need to announce
                  itself. It should simply feel effortless.
                </p>

              </div>

              {/* RIGHT */}

              <div className="grid gap-5 rounded-[32px] sm:grid-cols-2">

                {[
                  {
                    number: "01",
                    title:
                      "Professional Chauffeurs",
                    text:
                      "Experienced, presentable and attentive professionals.",
                  },
                  {
                    number: "02",
                    title:
                      "Premium Fleet",
                    text:
                      "Well-maintained vehicles selected for comfort and refinement.",
                  },
                  {
                    number: "03",
                    title:
                      "Thoughtful Timing",
                    text:
                      "Journeys planned around your schedule and priorities.",
                  },
                  {
                    number: "04",
                    title:
                      "Private Assistance",
                    text:
                      "Personalised support whenever your journey needs more.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group relative min-h-[300px] overflow-hidden rounded-[28px] border border-[#c8102e]/15 bg-[rgba(200,16,46,0.35)] p-8 text-[#191512] shadow-[0_18px_45px_rgba(200,16,46,.08)] transition-all duration-700 hover:-translate-y-1 hover:bg-[rgba(200,16,46,0.48)] hover:shadow-[0_24px_55px_rgba(200,16,46,.14)] md:p-10"
                  >

                    <div className="pointer-events-none absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#c8102e]/0 blur-[60px] transition-all duration-700 group-hover:bg-[#c8102e]/18" />

                    <span className="relative text-[9px] font-semibold text-[#c8102e]">
                      {item.number}
                    </span>

                    <h3 className="relative mt-16 font-serif text-2xl font-normal">
                      {item.title}
                    </h3>

                    <p className="relative mt-4 max-w-[280px] text-xs leading-6 text-black/55">
                      {item.text}
                    </p>

                    <span className="relative mt-8 block h-px w-9 bg-[#c8102e] transition-all duration-700 group-hover:w-20" />

                  </div>
                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          DIRECT BOOKING CTA
      ====================================================== */}

      <section className="!overflow-visible bg-[#f5f1eb] py-32 md:py-40">

        <div className="mx-auto max-w-[1360px] px-6 md:px-10">

          <Reveal>

            <div className="relative overflow-hidden rounded-[38px] border border-[#d4c6b6] bg-[#ede5db] px-7 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">

              {/* DECORATIVE CIRCLES */}

              <div className="pointer-events-none absolute -right-36 -top-40 h-[420px] w-[420px] rounded-full border border-[#811e34]/10" />

              <div className="pointer-events-none absolute -right-16 -top-20 h-[270px] w-[270px] rounded-full border border-[#811e34]/10" />

              <div className="relative grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">

                <div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#811e34]">
                    Direct Reservations
                  </span>

                  <h2 className="mt-6 max-w-[800px] font-serif text-4xl font-normal leading-[1.08] tracking-[-0.045em] md:text-5xl lg:text-[62px]">

                    Book direct.

                    <span className="italic text-black/30">
                      {" "}
                      Travel with confidence.
                    </span>

                  </h2>

                  <p className="mt-7 max-w-[600px] text-sm leading-8 text-black/45">
                    Direct bookings keep communication simple
                    and allow our team to better understand your
                    journey before you travel.
                  </p>

                </div>

                <div className="lg:text-right">

                  <button
                    type="button"
                    onClick={scrollToBooking}
                    className="group inline-flex min-h-[60px] items-center gap-7 rounded-full bg-[#c8102e] px-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#a90d28] hover:shadow-[0_18px_40px_rgba(200,16,46,.22)]"
                  >
                    Start Reservation

                    <span className="transition-transform duration-500 group-hover:-translate-y-1">
                      ↑
                    </span>

                  </button>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          POPULAR LOCATIONS
      ====================================================== */}

      <section className="!overflow-visible bg-[#f5f1eb] pb-36 md:pb-44">

        <div className="mx-auto max-w-[1360px] px-6 md:px-10">

          <Reveal>

            <div className="grid gap-16 border-t border-black/10 pt-16 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">

              {/* LEFT */}

              <div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#811e34]">
                  Across India
                </span>

                <h2 className="mt-6 max-w-[470px] font-serif text-4xl font-normal leading-[1.1] tracking-[-0.04em] md:text-5xl">

                  Wherever your next journey leads.

                </h2>

                <p className="mt-7 max-w-[390px] text-sm leading-8 text-black/45">
                  Premium chauffeur-driven travel across
                  important Indian cities and destinations.
                </p>

              </div>

              {/* CITIES */}

              <div className="grid grid-cols-2 sm:grid-cols-3">

                {cities.map((city) => (
                  <Link
                    key={city}
                    href="/contact"
                    className="group relative flex min-h-[96px] items-center justify-between overflow-hidden border-b border-black/10 px-4 text-sm text-black/50 transition-all duration-500 hover:bg-white/30 hover:text-[#811e34]"
                  >

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#811e34] transition-all duration-500 group-hover:w-full" />

                    <span>
                      {city}
                    </span>

                    <span className="-translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>

                  </Link>
                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
          NO EXTRA FOOTER HERE
      ====================================================== */}

      <section className="!overflow-visible bg-[#f5f1eb] px-4 pb-16 md:px-8 md:pb-20">

        <Reveal>

          <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[42px] bg-[#7c1f35] px-8 py-16 text-white md:px-14 md:py-20 lg:px-16 lg:py-24">

            {/* DECORATIVE RINGS */}

            <div className="pointer-events-none absolute -right-44 -top-44 h-[500px] w-[500px] rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full border border-white/10" />

            <div className="pointer-events-none absolute right-10 top-10 h-[190px] w-[190px] rounded-full border border-white/10" />

            {/* GOLD GLOW */}

            <div className="pointer-events-none absolute bottom-[-120px] right-20 h-[300px] w-[300px] rounded-full bg-[#c8a269]/15 blur-[100px]" />

            <div className="relative flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <div className="flex items-center gap-4">

                  <span className="h-px w-10 bg-[#e4c596]" />

                  <span className="text-[9px] uppercase tracking-[0.36em] text-[#e8ca9b]">
                    Personalised Assistance
                  </span>

                </div>

                <h2 className="mt-7 max-w-[850px] font-serif text-4xl font-normal leading-[1.06] tracking-[-0.045em] md:text-6xl lg:text-[68px]">

                  Some journeys deserve

                  <span className="block italic text-[#e7c89a]">
                    a little more attention.
                  </span>

                </h2>

                <p className="mt-7 max-w-[570px] text-sm leading-8 text-white/55">
                  For corporate requirements, weddings,
                  airport movements, VIP movements, groups
                  or customised itineraries, speak directly
                  with our team.
                </p>

              </div>

              <Link
                href="/contact"
                className="group flex min-h-[64px] w-fit shrink-0 items-center gap-8 rounded-full bg-[#f0e2ce] px-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#181411] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,0,0,.15)]"
              >
                Speak With RNK

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </div>

        </Reveal>

      </section>

    </main>
  );
}

/* =========================================================
   DATE FIELD
========================================================= */

function DateField({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>

      <label className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
        {title}
      </label>

      <div className="group relative flex min-h-[66px] w-full min-w-0 items-center overflow-hidden rounded-[19px] border border-[#d8ccbd] bg-white px-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#bda995] hover:shadow-[0_8px_24px_rgba(61,43,28,.05)] focus-within:border-[#811e34] focus-within:shadow-[0_10px_28px_rgba(129,30,52,.07)]">

        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#811e34] transition-all duration-500 group-focus-within:w-full" />

        {children}

      </div>

    </div>
  );
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.07,
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-[1000ms] ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}