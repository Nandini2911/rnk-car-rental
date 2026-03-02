import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="w-full bg-red-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="text-center mx-auto max-w-3xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Need Reliable Car Rental Services?
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-8">
            Book professional car rental services for airport, corporate, and
            event travel.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              bg-white text-red-900
              px-7 py-3 lg:px-10 lg:py-4
              rounded-lg font-semibold
              hover:bg-gray-100 transition
            "
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}