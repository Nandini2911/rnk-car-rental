import BlogGrid from "@/components/blog/BlogGrid";
import { RnkFooter } from "@/components/footer";
import { NavBar } from "@/components/NavBar";
import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";

export default function TagPage({ params }: { params: { tag: string } }) {

  const blogs = getAllBlogs();

  const tagSlug = params?.tag || "";
  const tag = tagSlug.replace(/-/g, " ").toLowerCase();

  const filteredBlogs = blogs.filter((blog: any) =>
    Array.isArray(blog.tags) &&
    blog.tags.some((t: string) =>
      t.toLowerCase().includes(tag)
    )
  );

  const allTags = Array.from(
    new Set(
      blogs.flatMap((blog: any) => blog.tags || [])
    )
  );

  return (
    <div className="bg-white min-h-screen flex flex-col">
        <NavBar/>

      <section className="max-w-7xl mx-auto py-16">

        <h1 className="text-3xl font-bold text-red-900 mb-4 capitalize">
          {tag} Blogs
        </h1>

        <p className="text-red-900 mb-10">
          Explore all blogs related to {tag}.
        </p>

        {/* ALL TAGS */}
        <div className="flex flex-wrap gap-3 mb-12">

          {allTags.map((t: string) => (

            <Link
              key={t}
              href={`/blog/tag/${t.toLowerCase().replace(/\s+/g, "-")}`}
className="px-3 py-1 text-xs font-medium rounded-full bg-red-50 text-red-800 border border-red-200 hover:bg-red-100 transition">              #{t}
            </Link>

          ))}

        </div>

        <BlogGrid blogs={filteredBlogs} />
        <RnkFooter/>

      </section>

    </div>
  );
}