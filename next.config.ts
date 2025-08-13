import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@next/font"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Improve mobile performance
  swcMinify: true,
  poweredByHeader: false,
};

export default nextConfig;
