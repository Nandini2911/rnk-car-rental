export default function TrendingBlogs({ blogs }: any) {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-14
      bg-gradient-to-br from-red-50 via-white to-gray-50
    "
    >
      <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <span className="text-red-900">🔥</span>
        Trending Blogs
      </h3>

      <div className="space-y-5">
        {blogs.map((b: any, i: number) => (
          <div
            key={b.slug}
            className="flex items-start gap-4 p-4 rounded-xl
              bg-white border border-gray-200
              hover:shadow-md transition"
          >
            {/* Index */}
            <span className="flex-shrink-0 w-7 h-7 rounded-full
              bg-red-900 text-white text-xs font-bold
              flex items-center justify-center">
              {i + 1}
            </span>

            {/* Title */}
            <p className="text-gray-800 text-sm leading-relaxed
              hover:text-red-900 transition-colors">
              {b.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
