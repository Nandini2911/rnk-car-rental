import BlogClient from "@/components/blog/BlogClient";
import { getAllBlogs } from "@/lib/blog";

export default function BlogPage() {
  const blogs = getAllBlogs(); // ✅ fs safe (server)

  return <BlogClient blogs={blogs} />;
}
