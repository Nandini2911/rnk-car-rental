"use client";

import { useEffect, useState } from "react";import BlogHero from "./BlogHero";
import BlogStats from "./BlogStats";
import BlogCategories from "./BlogCategories";
import BlogGrid from "./BlogGrid";
import TrendingBlogs from "./TrendingPosts";
import BlogCTA from "./BlogCTA";
import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";
import FeaturedBlogs from "./FeaturedBlog";



export default function BlogClient({ blogs = [] }: { blogs?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 1500);

  return () => clearTimeout(timer);
}, []);

const filteredBlogs = (blogs || []).filter((blog) => {
  if (!blog) return false;

  const title = (blog.title || "").toLowerCase();
  const description = (blog.description || "").toLowerCase();
  const category = (blog.category || "").toLowerCase();

  const search = searchQuery.toLowerCase();

  const searchWords = search.split(" ");

  const tags = (blog.tags || []).join(" ").toLowerCase();

const matchesSearch =
  title.includes(search) ||
  description.includes(search) ||
  category.includes(search) ||
  tags.includes(search);

  const matchesCategory =
    activeCategory.toLowerCase() === "all" ||
    category === activeCategory.toLowerCase();

  return matchesSearch && matchesCategory;
});

  return (
    <>
      <NavBar />

      {/* HERO */}
      <BlogHero onSearch={setSearchQuery} />

      {/* SEARCH RESULTS */}
      {searchQuery && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Search Results for "{searchQuery}"
          </h2>

          {filteredBlogs.length > 0 ? (
            <BlogGrid blogs={filteredBlogs} />
          ) : (
            <p className="text-gray-500">No blogs found.</p>
          )}
        </section>
      )}

      {/* PAGE CONTENT */}
      <BlogStats />

      <BlogCategories
  activeCategory={activeCategory}
  onChange={(cat) => {
    setActiveCategory(cat);
    setSearchQuery(""); // reset search when category changes
  }}
/>

      {/* MAIN BLOG LIST */}
      <BlogGrid blogs={filteredBlogs} />

      {/* FEATURED */}
      <FeaturedBlogs blogs={(blogs || []).filter((b) => b?.featured)} />

      {/* TRENDING */}
      <TrendingBlogs blogs={(blogs || []).filter((b) => b?.trending)} />

      <BlogCTA />
    
      <RnkFooter />
    </>
  );
}