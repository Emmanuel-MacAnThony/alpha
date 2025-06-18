import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // if you're using direct image URLs
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com', // for cases like yours with download URLs
      },
    ],
  },
};

export default nextConfig;
