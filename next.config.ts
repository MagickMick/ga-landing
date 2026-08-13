import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: no Node.js server needed at runtime, `next build` outputs
  // plain HTML/CSS/JS to `out/` which gets uploaded to regular hosting.
  output: "export",
  trailingSlash: true,
  // next/image's on-the-fly optimization needs a server; disable it and rely
  // on pre-optimized source images instead (see /public/images).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
