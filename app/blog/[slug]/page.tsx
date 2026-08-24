
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { NavBar } from "@/components/NavBar";
import { RnkFooter } from "@/components/footer";

import BlogPopupWrapper from "@/components/blog/BlogPopupWrapper";
import { formatBlogDate } from "@/lib/blogDate";





function extractFAQs(html: string) {
  const faqs: { question: string; answer: string }[] = [];

  const regex = /<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    faqs.push({
      question: match[1].replace(/<[^>]+>/g, "").trim(),
      answer: match[2].replace(/<[^>]+>/g, "").trim(),
    });
  }

  return faqs;
}


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

  const url = `https://www.rnk.com/blog/${slug}`;

  return {
    title: `${blog.title} RNK`,
    description: blog.description,

    robots: {
    index: true,
    follow: true,
  },

  
    alternates: {
      canonical: url,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url,
      siteName: "RNK Rentals",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}


/* ✅ PAGE */
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();
  const faqs = extractFAQs(blog.content);

  const tags = blog.tags || [];
  

    // ✅ RELATED BLOGS LOGIC (RETURN SE PEHLE)
  const allBlogs = getAllBlogs().filter(
    (b) => b.slug !== blog.slug
  );

  const sameCategoryBlogs = allBlogs.filter(
    (b) => b.category === blog.category
  );

  const relatedBlogs = [
    ...sameCategoryBlogs,
    ...allBlogs.filter((b) => b.category !== blog.category),
  ].slice(0, 10);


 
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.rnk.com/#organization",
      "name": "RNK Rentals",
      "url": "https://www.rnk.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rnk.com/RNK_LOGO.jpg"
      }
    },
    {
      "@type": "BlogPosting",
      "@id": `https://www.rnk.com/blog/${blog.slug}#article`,
      "headline": blog.title,
      "description": blog.description,
      "image": [`https://www.rnk.com${blog.image}`],
      "author": {
        "@type": "Person",
        "name": blog.author
      },
      "datePublished": blog.date,
      "dateModified": blog.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.rnk.com/blog/${blog.slug}`
      }
    }
  ]
};
    

  return (
    <>
      <NavBar />
  
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(schema),
}}
/>

{faqs.length > 0 && (
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: faqs.map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer
  }
}))
})
}}
/>
)}

     {/* ================= HERO ================= */}
<section className="bg-gray-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-8 py-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT: TEXT */}
      <div className="order-2 lg:order-1">
        <p className="text-red-700 text-sm font-semibold uppercase mb-3">
          {blog.category}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-black">
          {blog.title}
        </h1>
          <h6 className="  leading-tight mb-6 text-black">
          {blog.description}
        </h6>

        <p className="text-black text-sm">
  {blog.author} · {formatBlogDate(blog.date)} · {blog.readTime}
</p>
      </div>

      {/* RIGHT: IMAGE */}
      {blog.image && (
        <div className="order-1 lg:order-2">
  <div className="relative w-full h-[220px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-full object-cover"
    />
  </div>
</div>

      )}

    </div>
  </div>
</section>

<BlogPopupWrapper />

    

      {/* ================= CONTENT + SIDEBAR ================= */}
      <section className="bg-white py-16 text-black">
        <div className="px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 text-black">

          {/* ===== MAIN CONTENT ===== */}
          <div className="lg:col-span-8 text-black">
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
              <h3 className="text-lg font-bold mb-4 text-black">
                Related Blogs
              </h3>

              <ul className="space-y-3">
                {relatedBlogs.map((item) => (
                  <li key={item.slug}>
                    <a
                      href={`/blog/${item.slug}`}
                      className="text-red-900 hover:underline"
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
                Explore Categories
              </h3>

              <ul className="space-y-2  text-red-900">
                <li><a href="/blog?category=Car Rental" className="hover:underline">Car Rental</a></li>
                <li><a href="/blog?category=Airport Transfers" className="hover:underline">Airport Transfers</a></li>
                <li><a href="/blog?category=Corporate Travel" className="hover:underline">Corporate Travel</a></li>
                <li><a href="/blog?category=Luxury Travel" className="hover:underline">Luxury Travel</a></li>
                <li><a href="/blog?category=Wedding Transport" className="hover:underline">Wedding Transport</a></li>
              </ul>
            </div>
            {/* BLOG TAGS */}
{tags.length > 0 && (
  <div className="border border-gray-300 rounded-xl p-6">
    <h3 className="text-lg font-bold mb-4 text-black">
      Explore Tags
    </h3>

    <div className="flex flex-wrap gap-2">
      {tags.map((tag: string) => (
        <a
          key={tag}
          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-800 border border-red-200 hover:bg-red-100 transition"
        >
          #{tag}
        </a>
      ))}
    </div>
  </div>
)}

          </aside>
        </div>
      </section>

      <RnkFooter />
    </>
  );
}
