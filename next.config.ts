import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/feel-good-news/:path*",
        destination: "https://govt-news-highlights.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
