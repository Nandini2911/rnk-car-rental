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

export default function BlogClient({ blogs = [] }: { blogs?: any[] })
 {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

 const filteredBlogs = (blogs || []).filter((blog) => {
  if (!blog) return false;

  const category = blog.category || "";
  const title = blog.title || "";
  const description = blog.description || "";

  const matchesCategory =
    activeCategory === "All" || category === activeCategory;

  const search = (searchQuery || "").toLowerCase();

  const matchesSearch =
    title.toLowerCase().includes(search) ||
    description.toLowerCase().includes(search);

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
<FeaturedBlogs blogs={(blogs || []).filter((b) => b?.featured)} />      <BlogGrid blogs={filteredBlogs} />

      <TrendingBlogs blogs={(blogs || []).filter((b) => b?.trending)} />

      <BlogCTA />

      <RnkFooter />
    </>
  );
}