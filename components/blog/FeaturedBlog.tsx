"use client";

import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, sortBlogsNewestFirst } from "@/lib/blogDate";

export default function FeaturedBlogs({ blogs }: { blogs: any[] }) {
  // Featured blogs + newest first
  const featuredBlogs = sortBlogsNewestFirst(
    blogs.filter((b) => b.featured)
  );

  if (!featuredBlogs.length) return null;

  return (
    <section className="w-full bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-14 lg:py-16">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Featured Blogs
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            2xl:grid-cols-4
            gap-6
            lg:gap-8
          "
        >
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="
                group
                rounded-2xl
                border border-gray-200
                overflow-hidden
                bg-white
                shadow-md hover:shadow-xl
                transition
                w-full
              "
            >
              {/* IMAGE */}
              <div className="relative h-52 sm:h-56 lg:h-60 bg-gray-100">
                <Image
                  src={blog.image || "/images/blog/placeholder.webp"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-gradient-to-br from-white via-gray-50 to-red-50">

                {/* FEATURED + DATE */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  
                  <span className="text-red-800 text-xs font-semibold uppercase">
                    Featured
                  </span>

                  {blog.date && (
                    <time
                      dateTime={blog.date}
                      className="text-xs text-gray-500 whitespace-nowrap"
                    >
                      {formatBlogDate(blog.date)}
                    </time>
                  )}

                </div>

                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-900">
                  {blog.title}
                </h3>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between gap-3 text-xs text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}