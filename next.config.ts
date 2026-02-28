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
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-network",
        destination: "/network",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;