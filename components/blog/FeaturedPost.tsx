import Link from "next/link";
import { BlogMeta } from "@/lib/blog";

export default function FeaturedPost({ blog }: { blog: BlogMeta }) {
  return (
    <section className="bg-white rounded-xl shadow mb-12 p-8">
      <span className="text-blue-600 text-xs uppercase">
        {blog.category}
      </span>

      <h2 className="text-2xl font-bold my-4">
        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
      </h2>

      <p className="text-gray-600 mb-4">{blog.description}</p>

      <div className="text-sm text-gray-400">
        {blog.author} · {blog.readTime}
      </div>
    </section>
  );
}
