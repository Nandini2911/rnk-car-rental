import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/services/fleet",
        destination: "/fleet",
        permanent: true,
      },
      {
  source: "/services",
  destination: "/",
  permanent: true,
},
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
  source: "/blog/rnk.com",
  destination: "/",
  permanent: true,
},
      {
        source: "/our-network",
        destination: "/network",
        permanent: true,
      },
      {
        source: "/blog/fleet",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/services/corporate-car-rental",
        destination: "/blog/corporate-travel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;