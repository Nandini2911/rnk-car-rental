"use client";

import Image from "next/image";
import Link from "next/link";
import {
  formatBlogDate,
  getBlogsFromLastDays,
  parseBlogDate,
} from "@/lib/blogDate";

export default function LatestBlogs({ blogs = [] }: { blogs?: any[] }) {
  const latestBlogs = getBlogsFromLastDays(blogs, 7);

  if (!latestBlogs.length) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section className="w-full bg-gradient-to-b from-white to-red-50/40">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-800 mb-2">
            Fresh from RNK
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Latest This Week
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Blogs published today and during the last 7 days.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
          {latestBlogs.map((blog) => {
            const blogDate = parseBlogDate(blog.date);
            const normalizedBlogDate = blogDate ? new Date(blogDate) : null;

            if (normalizedBlogDate) {
              normalizedBlogDate.setHours(0, 0, 0, 0);
            }

            const isToday =
              normalizedBlogDate?.getTime() === today.getTime();

            return (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <Image
                    src={
                      typeof blog.image === "string" &&
                      blog.image.startsWith("/")
                        ? blog.image
                        : "/images/blog/placeholder.webp"
                    }
                    alt={blog.title || "Blog article image"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-red-900 shadow-sm">
                      {isToday ? "Today" : formatBlogDate(blog.date)}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-wide text-red-700 font-semibold mb-2">
                    {blog.category}
                  </p>

                  <h3 className="font-semibold text-[16px] text-gray-900 leading-snug group-hover:text-red-900 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-[13px] mt-3 leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-[11px] text-gray-500">
                    <span>{blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}