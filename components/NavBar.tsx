"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/why-us" },
  { label: "Services", href: "#" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
  { label: "Our Network", href: "/network" },
  { label: "Contact Us", href: "/contact" },
];

const serviceItems = [
  { label: "Corporate Car Rental", href: "/services/corporate-car-rental" },
  { label: "Airport & Railway Transfers", href: "/services/airport-railway-transfers" },
  { label: "Luxury Travel", href: "/services/luxury-travel" },
  { label: "Hotel Operations", href: "/services/hotel-operations" },
  { label: "Vacation Rentals", href: "/services/vacation-rentals" },
  { label: "VIP Movements", href: "/services/vip-movements" },
  { label: "Long Term Car Rental", href: "/services/long-term-car-rental" },
  { label: "Event / Wedding Transport", href: "/services/event-wedding-transport" },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
<nav className="max-w-8xl mx-auto px-10 py-4 grid grid-cols-[auto_1fr_auto] items-center">

        {/* LEFT — LOGO */}
        <a href="/" className="flex items-center">
          <Image
            src="/RNK_LOGO.jpg"
            alt="RNK Rentals Logo"
            width={70}
            height={55}
            className="h-17 w-auto object-contain"
          />
        </a>

        {/* CENTER — MENU */}
        <div className="hidden md:flex items-center justify-center gap-10 text-sm lg:text-lg">
          {links.map((item) =>
            item.label === "Services" ? (
              <DesktopServicesDropdown key="services" serviceItems={serviceItems} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-black hover:text-red-900 transition"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* RIGHT — CTA */}
        <div className="flex justify-end items-center">
          <a
            href="/contact"
            className="hidden md:inline-flex px-6 py-3 rounded-full bg-red-900 text-white uppercase text-xs font-semibold tracking-wide
                       hover:bg-black transition shadow-[0_4px_12px_rgba(200,16,46,0.35)]"
          >
            Book Now
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10 shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((item) =>
              item.label === "Services" ? (
                <MobileServicesDropdown
                  key="mobile-services"
                  serviceItems={serviceItems}
                  closeMenu={() => setMobileOpen(false)}
                />
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-bold text-black hover:text-red-900 transition"
                >
                  {item.label}
                </a>
              )
            )}

            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-red-900 text-white py-3 rounded-full text-xs font-semibold uppercase text-center
                         hover:bg-black transition"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ========================= */
/* DESKTOP SERVICES DROPDOWN */
/* ========================= */

function DesktopServicesDropdown({
  serviceItems,
}: {
  serviceItems: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-black hover:text-red-900 transition">
        Services
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      <div
        className={`absolute left-0 mt-4 w-80 rounded-xl bg-white border border-black/10
        shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden z-50
        transition-all duration-200
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
      >
        {serviceItems.map((service) => (
          <a
            key={service.label}
            href={service.href}
            className="block px-5 py-3 text-sm font-medium text-black
                       hover:bg-red-900 hover:text-white transition-colors
                       border-b last:border-b-0 border-black/10"
          >
            {service.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ========================= */
/* MOBILE SERVICES DROPDOWN */
/* ========================= */

function MobileServicesDropdown({
  serviceItems,
  closeMenu,
}: {
  serviceItems: { label: string; href: string }[];
  closeMenu: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between font-bold text-black hover:text-red-900 transition"
      >
        <span>Services</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="mt-2 ml-3 border border-black/10 rounded-lg overflow-hidden">
          {serviceItems.map((service) => (
            <a
              key={service.label}
              href={service.href}
              onClick={closeMenu}
              className="block px-4 py-3 text-sm text-black
                         hover:bg-red-900 hover:text-white transition
                         border-b last:border-b-0 border-black/10"
            >
              {service.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
