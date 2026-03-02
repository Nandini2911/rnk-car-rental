"use client";

const categories = [
  "All",
  "Car Blogs",
  "Car Rental",
  "Airport Transfers",
  "Corporate Travel",
  "Wedding Transport",
  "Travel Tips",
  "Luxury Travel",
];

export default function BlogCategories({
  activeCategory,
  onChange,
}: {
  activeCategory: string;
  onChange: (cat: string) => void;
}) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-4 
            lg:grid-cols-4 
            xl:grid-cols-4 
            2xl:grid-cols-4
            gap-6
          "
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;

            return (
              <div
                key={cat}
                onClick={() => onChange(cat)}
                className={`
                  cursor-pointer 
                  rounded-2xl 
                  border 
                  p-6 
                  min-h-[110px]
                  flex items-center justify-center 
                  text-center 
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-white border-red-900 shadow-lg"
                      : "bg-gradient-to-br from-gray-50 via-white to-red-100 text-gray-900 border-gray-300 shadow-sm hover:border-red-900 hover:text-red-900 hover:shadow-md"
                  }
                `}
              >
                <span className="text-base font-semibold">
                  {cat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}