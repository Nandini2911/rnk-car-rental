"use client";

import { useState } from "react";
import BlogHero from "./BlogHero";
import BlogStats from "./BlogStats";
import BlogCategories from "./BlogCategories";
import BlogGrid from "./BlogGrid";
import TrendingBlogs from "./TrendingPosts";
import BlogCTA from "./BlogCTA";
import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";
import FeaturedBlogs from "./FeaturedBlog";

export default function BlogClient({ blogs }: { blogs: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <NavBar />

      <BlogHero onSearch={setSearchQuery} />

      <BlogStats />
   


      <BlogCategories
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />
  <FeaturedBlogs blogs={blogs.filter((b) => b.featured)} />
      <BlogGrid blogs={filteredBlogs} />

      <TrendingBlogs blogs={blogs.filter((b) => b.trending)} />

      <BlogCTA />

      <RnkFooter />
    </>
  );
}
