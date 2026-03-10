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
  ).slice(0, 25);

  return (
    <div className="bg-white min-h-screen flex flex-col">

      <NavBar />

      <section className="max-w-screen-2xl mx-auto px-6 py-16">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-red-900 mb-3 capitalize">
          {tag} Guides & Articles
        </h1>

        <p className="text-gray-600 mb-10">
          Explore all RNK blog articles related to <strong>{tag}</strong>.
        </p>

        {/* 2 COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-4 gap-12">

          {/* BLOG GRID (LEFT) */}
          <div className="lg:col-span-3">
            <BlogGrid blogs={filteredBlogs} />
          </div>

          {/* TAG SIDEBAR (RIGHT) */}
          <aside className="lg:col-span-1">

            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Explore Topics
            </h2>

            <div className="flex flex-wrap gap-2">

              {allTags.map((t: string) => {

                const slug = t.toLowerCase().replace(/\s+/g, "-");
                const isActive = slug === tagSlug;

                return (
                  <Link
                    key={t}
                    href={`/blog/tag/${slug}`}
                    className={`
                      text-xs px-3 py-1 rounded-full border transition
                      ${isActive
                        ? "bg-red-900 text-white border-red-900"
                        : "bg-red-50 text-red-800 border-red-200 hover:bg-red-100"}
                    `}
                  >
                    #{t}
                  </Link>
                );

              })}

            </div>

          </aside>

        </div>

      </section>

      <RnkFooter />

    </div>
  );
}