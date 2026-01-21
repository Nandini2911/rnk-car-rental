"use client";

export function Hero() {
  return (
    <section className="relative w-screen min-h-screen bg-black text-white overflow-hidden">
      
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[300%] h-[300%]
            sm:w-[240%] sm:h-[240%]
            md:w-[200%] md:h-[200%]
            lg:w-[160%] lg:h-[160%]
            xl:w-[130%] xl:h-[130%]
            2xl:w-[115%] 2xl:h-[115%]
            pointer-events-none
          "
          src="https://www.youtube.com/embed/UBV59CAgDEQ?autoplay=1&mute=1&controls=0&loop=1&playlist=UBV59CAgDEQ&modestbranding=1&rel=0&playsinline=1"
          title="RNK Rentals Hero Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* CONTENT */}
      <div
        className="
          relative z-20
          min-h-screen
          flex flex-col items-center justify-center
          text-center
          px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28
        "
      >
        {/* SUB TITLE */}
        <p
          className="
            uppercase tracking-[0.35em]
            text-[10px] sm:text-[12px] md:text-[14px] lg:text-[15px]
            xl:text-[16px] 2xl:text-[18px]
            text-white/90
            mb-4 sm:mb-6
          "
        >
          RNK Rentals · India
        </p>

        {/* MAIN HEADING */}
        <h1
          className="
            font-semibold leading-tight
            text-[26px] sm:text-[32px] md:text-[40px]
            lg:text-[52px] xl:text-[64px] 2xl:text-[76px]
            max-w-[90%]
            drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)]
          "
        >
          <span className="block">
            Drive <span className="text-red-900">Luxury</span>
          </span>
          <span className="block">Not Just a Car.</span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4 sm:mt-6
            text-[12px] sm:text-[15px] md:text-[16px]
            lg:text-[17px] xl:text-[18px] 2xl:text-[20px]
            text-white/80
            max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
            drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]
          "
        >
          From corporate runs and airport transfers to VIP movements and weddings —
          RNK curates a car and chauffeur for every journey.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4">
          {/* PRIMARY */}
          <a
            href="/contact"
            className="
              px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4
              rounded-full bg-red-900 text-white
              text-[11px] sm:text-[12px] lg:text-[13px]
              font-semibold uppercase tracking-wide
              hover:bg-black transition
            "
          >
            Book Now
          </a>

          {/* SECONDARY */}
          <a
            href="/fleet"
            className="
              px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4
              rounded-full border border-white/40
              text-[11px] sm:text-[12px] lg:text-[13px]
              uppercase tracking-[0.22em]
              text-white/85
              hover:bg-white hover:text-black hover:border-white
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            View Fleet
          </a>
        </div>
      </div>
    </section>
  );
}
