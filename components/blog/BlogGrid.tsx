"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BLOGS_PER_PAGE = 9;

export default function BlogGrid({ blogs }: { blogs: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <section id="blog-grid" className="w-full bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20">
        {/* HEADING */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
          <p className="text-sm text-gray-500 mt-1">
            Browse all our latest travel and car rental articles
          </p>
        </div>

        {/* BLOG CARDS */}
        <div
          className="
            grid
            gap-6 sm:gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            2xl:grid-cols-4
          "
        >
          {currentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="
                group block
                border border-gray-200 bg-white
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src={
                    typeof blog.image === "string" && blog.image.startsWith("/")
                      ? blog.image
                      : "/images/blog/placeholder.webp"
                  }
                  alt={blog.title ? blog.title : "Blog article image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 bg-gradient-to-br from-white via-gray-50 to-red-50">
                <p className="text-[11px] uppercase tracking-wide text-red-700 font-semibold mb-1">
                  {blog.category}
                </p>

                <h3
                  className="
                    font-semibold text-[15px] text-gray-900 mb-2 leading-snug
                    group-hover:text-red-900 transition-colors
                  "
                >
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-[13px] mb-3 leading-relaxed line-clamp-3">
                  {blog.description}
                </p>

                <div className="text-[11px] text-gray-500 flex justify-between">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6 py-4">
              {/* PREV */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="
                  px-4 py-2 text-sm font-medium rounded-lg border
                  bg-white text-gray-700 hover:bg-gray-100
                  disabled:opacity-40 disabled:cursor-not-allowed
                "
              >
                Prev
              </button>

              {/* PAGE NUMBERS */}
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      w-10 h-10 text-sm font-semibold rounded-lg border transition
                      ${
                        currentPage === page
                          ? "bg-red-900 text-white border-red-900 shadow"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {page}
                  </button>
                );
              })}

              {/* NEXT */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="
                  px-4 py-2 text-sm font-medium rounded-lg border
                  bg-white text-gray-700 hover:bg-gray-100
                  disabled:opacity-40 disabled:cursor-not-allowed
                "
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}