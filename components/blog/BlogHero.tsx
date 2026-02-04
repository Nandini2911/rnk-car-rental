"use client";

import Link from "next/link";

export default function BlogHero({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  return (
    <section className="bg-white border-b py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
          Travel & Car Rental Insights
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-4">
          Expert guides, tips, and updates on car rentals, airport transfers,
          corporate travel, and luxury transportation.
        </p>

        <p className="text-sm text-gray-500 mb-10">
          <span className="font-semibold text-red-900">56+ Years</span> of trusted
          experience in professional car rental services
        </p>

        {/* 🔍 SEARCH */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search blogs, services, or topics..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-6 py-3
              text-gray-800
              focus:outline-none focus:ring-2 focus:ring-red-900/30"
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          <button
  onClick={() => {
    const section = document.getElementById("blog-grid");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-red-900 text-white px-6 py-3 rounded-lg
    hover:bg-red-800 transition"
>
  Explore Blogs
</button>

          <Link
            href="/contact"
            className="inline-block border border-gray-900 text-red-900
              px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Book a Car
          </Link>

        </div>
      </div>
    </section>
  );
}
