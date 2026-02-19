"use client";

import { useMemo, useState } from "react";
import BlogHero from "./BlogHero";
import BlogStats from "./BlogStats";
import BlogCategories from "./BlogCategories";
import BlogGrid from "./BlogGrid";
import TrendingBlogs from "./TrendingPosts";
import BlogCTA from "./BlogCTA";
import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";
import FeaturedBlogs from "./FeaturedBlog";

const safeLower = (v: unknown) => {
  if (v === null || v === undefined) return "";
  if (typeof v === "string") return v.toLowerCase();
  return String(v).toLowerCase();
};

export default function BlogClient({ blogs }: { blogs: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const safeBlogs = Array.isArray(blogs) ? blogs : [];

  const filteredBlogs = useMemo(() => {
    const q = safeLower(searchQuery);

    return safeBlogs.filter((blog) => {
      const blogCategory = blog?.category ?? "";

      const matchesCategory =
        activeCategory === "All" || blogCategory === activeCategory;

      const title = safeLower(blog?.title);
      const desc = safeLower(blog?.description);

      const matchesSearch = title.includes(q) || desc.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [safeBlogs, activeCategory, searchQuery]);

  const featuredBlogs = useMemo(
    () => safeBlogs.filter((b) => Boolean(b?.featured)),
    [safeBlogs]
  );

  const trendingBlogs = useMemo(
    () => safeBlogs.filter((b) => Boolean(b?.trending)),
    [safeBlogs]
  );

  return (
    <>
      <NavBar />

      <BlogHero onSearch={setSearchQuery} />

      <BlogStats />

      <BlogCategories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <FeaturedBlogs blogs={featuredBlogs} />

      <BlogGrid blogs={filteredBlogs} />

      <TrendingBlogs blogs={trendingBlogs} />

      <BlogCTA />

      <RnkFooter />
    </>
  );
}
