import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="bg-red-900 text-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Need Reliable Car Rental Services?
        </h3>
        <p className="mb-6">
          Book professional car rental services for airport, corporate,
          and event travel.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-red-900
            px-8 py-3 rounded-lg font-semibold
            hover:bg-gray-100 transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
