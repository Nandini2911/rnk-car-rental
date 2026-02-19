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

export default function BlogClient({ blogs }: { blogs?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Always work with safe array + sanitize fields
  const safeBlogs = useMemo(() => {
    return (Array.isArray(blogs) ? blogs : []).map((b) => ({
      ...b,
      title: b?.title ?? "",
      description: b?.description ?? "",
      category: b?.category ?? "",
      featured: Boolean(b?.featured),
      trending: Boolean(b?.trending),
    }));
  }, [blogs]);

  // ✅ Safe filtering (NO unsafe toLowerCase)
  const filteredBlogs = useMemo(() => {
    const safeSearch = (searchQuery ?? "").toLowerCase();

    return safeBlogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;

      if (!safeSearch) return matchesCategory;

      const title = blog.title.toLowerCase();
      const description = blog.description.toLowerCase();

      const matchesSearch =
        title.includes(safeSearch) ||
        description.includes(safeSearch);

      return matchesCategory && matchesSearch;
    });
  }, [safeBlogs, activeCategory, searchQuery]);

  // ✅ Featured Blogs
  const featuredBlogs = useMemo(
    () => safeBlogs.filter((b) => b.featured),
    [safeBlogs]
  );

  // ✅ Trending Blogs
  const trendingBlogs = useMemo(
    () => safeBlogs.filter((b) => b.trending),
    [safeBlogs]
  );

  return (
    <>
      <NavBar />

      <BlogHero onSearch={(val) => setSearchQuery(val ?? "")} />

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
