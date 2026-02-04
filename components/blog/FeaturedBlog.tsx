"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedBlogs({ blogs }: { blogs: any[] }) {
  const featuredBlogs = blogs.filter((b) => b.featured);

  if (!featuredBlogs.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-14 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Featured Blogs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-md hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="relative h-48 bg-gray-100">
              <Image
                src={blog.image || "/images/blog/placeholder.webp"}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 bg-gradient-to-br from-white via-gray-50 to-red-50">
              <span className="text-red-800 text-xs font-semibold uppercase">
                Featured
              </span>

              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-900">
                {blog.title}
              </h3>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>

              <p className="text-xs text-gray-500">
                {blog.author} · {blog.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
