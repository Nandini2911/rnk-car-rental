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
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const serviceItems = [
  {
    label: "Corporate Car Rental",
    href: "/services/corporate-car-rental",
  },
  {
    label: "Airport & Railway Transfers",
    href: "/services/airport-railway-transfers",
  },
  {
    label: "Luxury Travel",
    href: "/services/luxury-travel",
  },
  {
    label: "Hotel Operations",
    href: "/services/hotel-operations",
  },
  {
    label: "Vacation Rentals",
    href: "/services/vacation-rentals",
  },
  {
    label: "VIP Movements",
    href: "/services/vip-movements",
  },
  {
    label: "Long Term Car Rental",
    href: "/services/long-term-car-rental",
  },
  {
    label: "Event / Wedding Transport",
    href: "/services/event-wedding-transport",
  },
];

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.10)]">
      <nav
        className="
          mx-auto
          grid
          h-[94px]
          max-w-8xl
          grid-cols-[auto_1fr_auto]
          items-center
          overflow-visible
          px-5
          sm:h-[102px]
          sm:px-7
          md:h-[108px]
          md:px-9
          lg:h-[116px]
          lg:px-10
          xl:h-[122px]
          xl:px-12
        "
      >
        {/* LEFT — LARGE LOGO */}
        <a
          href="/"
          aria-label="RNK Rentals Home"
          className="
            relative
            z-10
            block
            h-full
            w-[135px]
            overflow-visible
            sm:w-[155px]
            md:w-[175px]
            lg:w-[190px]
            xl:w-[215px]
          "
        >
          <Image
            src="/rnk_logo.webp"
            alt="RNK Rentals Logo"
            title="RNK Rentals - Luxury Car Rentals"
            width={300}
            height={240}
            priority
            className="
              absolute
              left-0
              top-1/2
              h-auto
              w-[150px]
              max-w-none
              -translate-y-1/2
              object-contain
              sm:w-[175px]
              md:w-[195px]
              lg:w-[220px]
              xl:w-[245px]
            "
          />
        </a>

        {/* CENTER — DESKTOP MENU */}
        <div
          className="
            hidden
            items-center
            justify-center
            gap-5
            text-[15px]
            font-medium
            lg:flex
            xl:gap-8
            xl:text-[17px]
            2xl:gap-10
            2xl:text-lg
          "
        >
          {links.map((item) =>
            item.label === "Services" ? (
              <DesktopServicesDropdown
                key="services"
                serviceItems={serviceItems}
              />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="
                  whitespace-nowrap
                  text-black
                  transition
                  duration-300
                  hover:text-red-900
                "
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        {/* RIGHT — CTA AND MOBILE BUTTON */}
        <div className="flex items-center justify-end">
          <a
            href="/contact"
            className="
              hidden
              whitespace-nowrap
              rounded-full
              bg-red-900
              px-6
              py-3.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-white
              shadow-[0_7px_20px_rgba(127,29,29,0.28)]
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-black
              lg:inline-flex
              xl:px-8
              xl:py-4
              xl:text-sm
            "
          >
            Book Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="
              flex
              h-12
              w-12
              flex-col
              items-center
              justify-center
              gap-[6px]
              rounded-xl
              border
              border-black/10
              bg-white
              shadow-sm
              lg:hidden
            "
          >
            <span
              className={`block h-0.5 w-7 bg-black transition duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-7 bg-black transition duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-7 bg-black transition duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE AND TABLET MENU */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-white shadow-xl lg:hidden">
          <div
            className="
              flex
              max-h-[calc(100vh-94px)]
              flex-col
              gap-5
              overflow-y-auto
              px-6
              py-6
              sm:max-h-[calc(100vh-102px)]
              md:max-h-[calc(100vh-108px)]
              sm:px-8
            "
          >
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
                  className="
                    border-b
                    border-black/5
                    pb-4
                    text-base
                    font-bold
                    text-black
                    transition
                    hover:text-red-900
                  "
                >
                  {item.label}
                </a>
              ),
            )}

            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="
                mt-2
                rounded-full
                bg-red-900
                px-6
                py-4
                text-center
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition
                hover:bg-black
              "
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
      <button
        type="button"
        aria-expanded={open}
        className="
          flex
          items-center
          gap-1.5
          whitespace-nowrap
          text-black
          transition
          duration-300
          hover:text-red-900
        "
      >
        Services

        <span
          className={`text-sm transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`
          absolute
          left-1/2
          top-full
          z-50
          mt-6
          w-[340px]
          -translate-x-1/2
          overflow-hidden
          rounded-2xl
          border
          border-black/10
          bg-white
          shadow-[0_24px_60px_rgba(0,0,0,0.22)]
          transition-all
          duration-200
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        {serviceItems.map((service) => (
          <a
            key={service.label}
            href={service.href}
            className="
              block
              border-b
              border-black/10
              px-6
              py-4
              text-[15px]
              font-medium
              text-black
              transition-colors
              last:border-b-0
              hover:bg-red-900
              hover:text-white
            "
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
    <div className="flex flex-col border-b border-black/5 pb-4">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="
          flex
          items-center
          justify-between
          text-base
          font-bold
          text-black
          transition
          hover:text-red-900
        "
      >
        <span>Services</span>

        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="ml-2 mt-4 overflow-hidden rounded-xl border border-black/10">
          {serviceItems.map((service) => (
            <a
              key={service.label}
              href={service.href}
              onClick={closeMenu}
              className="
                block
                border-b
                border-black/10
                px-5
                py-4
                text-sm
                font-medium
                text-black
                transition
                last:border-b-0
                hover:bg-red-900
                hover:text-white
              "
            >
              {service.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}