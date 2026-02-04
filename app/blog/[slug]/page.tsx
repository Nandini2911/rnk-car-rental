
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";

export const dynamic = "force-static";
export const dynamicParams = false;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ✅ STATIC PATHS */
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* ✅ SEO METADATA */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | RNK Rentals`,
    description: blog.description,
  };
}

/* ✅ PAGE */
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  /* ✅ RELATED BLOGS (same category, exclude current) */
  const relatedBlogs = getAllBlogs()
    .filter(
      (b) => b.slug !== blog.slug && b.category === blog.category
    )
    .slice(0, 5);

  return (
    <>
      <NavBar />

      {/* ================= HERO ================= */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-5xl px-10">
          <p className="text-red-700 text-sm font-semibold uppercase mb-3">
            {blog.category}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-black">
            {blog.title}
          </h1>

          <p className="text-gray-600 text-sm">
            {blog.author} · {blog.readTime}
          </p>
        </div>
      </section>

     {/* ================= FEATURE IMAGE ================= */}
{blog.image && (
  <section className="w-full bg-white">
    <div className="relative w-full h-[420px] max-w-6xl mx-auto">
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        sizes="100vw"
        priority
        className="object-cover rounded-lg"
      />
    </div>
  </section>
)}

      {/* ================= CONTENT + SIDEBAR ================= */}
      <section className="bg-white py-16">
        <div className="px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ===== MAIN CONTENT ===== */}
          <div className="lg:col-span-8">
            <article
  className="prose prose-lg max-w-none"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>




            <hr className="my-16 border-gray-300" />

            {/* ===== CTA ===== */}
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Need a Chauffeur-Driven Car?
              </h3>

              <p className="text-red-100 mb-6 max-w-xl">
                Luxury car rental services for airport transfers, corporate travel,
                weddings & VIP movements.
              </p>

              <a
                href="/contact"
                className="inline-block bg-white text-red-800 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-28 h-fit">

            {/* RELATED BLOGS */}
            <div className="border border-gray-300 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">
                Related Blogs
              </h3>

              <ul className="space-y-3">
                {relatedBlogs.map((item) => (
                  <li key={item.slug}>
                    <a
                      href={`/blog/${item.slug}`}
                      className="text-black hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPLORE TOPICS */}
            <div className="border border-gray-300 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">
                Explore Topics
              </h3>

              <ul className="space-y-2">
                <li><a href="/blog?category=Car Rental" className="hover:underline">Car Rental</a></li>
                <li><a href="/blog?category=Airport Transfers" className="hover:underline">Airport Transfers</a></li>
                <li><a href="/blog?category=Corporate Travel" className="hover:underline">Corporate Travel</a></li>
                <li><a href="/blog?category=Luxury Travel" className="hover:underline">Luxury Travel</a></li>
                <li><a href="/blog?category=Wedding Transport" className="hover:underline">Wedding Transport</a></li>
              </ul>
            </div>

          </aside>
        </div>
      </section>

      <RnkFooter />
    </>
  );
}
