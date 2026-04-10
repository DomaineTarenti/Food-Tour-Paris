import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Declare the site directory as the workspace root.
  // Prevents Next.js 16 from picking up the parent package-lock.json (Playwright project)
  // as the workspace root, which would cause incorrect module resolution.
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.frenchfoodtour.com",
      },
    ],
  },
};

export default nextConfig;
