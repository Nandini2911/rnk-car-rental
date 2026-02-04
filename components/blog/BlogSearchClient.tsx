"use client";

import { useState, useEffect } from "react";
import BlogGrid from "./BlogGrid";
import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";

export default function BlogSearchClient({
  blogs,
  query,
}: {
  blogs: any[];
  query: string;
}) {
  const [search, setSearch] = useState(query);

  const filteredBlogs = blogs.filter((blog) =>
    `${blog.title} ${blog.description} ${blog.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar />

      {/* HERO SEARCH */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-red-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl px-6 py-4 text-lg"
            placeholder="Search blogs..."
          />
        </div>
      </section>

      {/* RESULT COUNT */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold">
          {filteredBlogs.length} Results Found for{" "}
          <span className="text-red-900">"{query}"</span>
        </h2>
      </section>

      <BlogGrid blogs={filteredBlogs} />

      <RnkFooter />
    </>
  );
}
