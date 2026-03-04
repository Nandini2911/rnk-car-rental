"use client";

import { useEffect, useState } from "react";

function Stat({
  value,
  label,
  duration = 1500,
}: {
  value: number;
  label: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white">
        {count.toLocaleString()}+
      </p>
      <p className="text-gray-white">{label}</p>
    </div>
  );
}

export default function BlogStats() {
  return (
<section className="bg-gradient-to-b from-red-800 via-red-900 to-red-950 py-12">



      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
        <Stat value={90} label="Blogs Published" />
        <Stat value={170} label="Cities Covered" />
        <Stat value={10000} label="Happy Trips" />
      </div>
    </section>
  );
}
