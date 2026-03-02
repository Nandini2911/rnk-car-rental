export default function TrendingBlogs({ blogs }: any) {
  return (
    <section className="w-full bg-gradient-to-br from-red-50 via-white to-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-14 lg:py-16">
        {/* Keep list readable on very wide screens */}
        <div className="max-w-4xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-2">
            <span className="text-red-900">🔥</span>
            Trending Blogs
          </h3>

          <div className="space-y-4 sm:space-y-5">
            {blogs.map((b: any, i: number) => (
              <div
                key={b.slug}
                className="
                  flex items-start gap-4
                  p-4 sm:p-5
                  rounded-xl
                  bg-white border border-gray-200
                  hover:shadow-md transition
                "
              >
                {/* Index */}
                <span
                  className="
                    flex-shrink-0
                    w-7 h-7 sm:w-8 sm:h-8
                    rounded-full
                    bg-red-900 text-white
                    text-xs sm:text-sm font-bold
                    flex items-center justify-center
                  "
                >
                  {i + 1}
                </span>

                {/* Title */}
                <p
                  className="
                    text-gray-800
                    text-sm sm:text-base
                    leading-relaxed
                    hover:text-red-900 transition-colors
                  "
                >
                  {b.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}