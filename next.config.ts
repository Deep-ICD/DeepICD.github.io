import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Stock photography is hotlinked from Unsplash's CDN rather than committed
    // to /public. Swap these for local assets before going to production.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
