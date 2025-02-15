import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  assetPrefix:
    process.env.NODE_ENV === "development" ? "." : "https://unda62.com",
};

export default nextConfig;
