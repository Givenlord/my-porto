import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Biar dev server bisa dibuka dari HP/laptop lain di WiFi yang sama (alamat "Network")
  allowedDevOrigins: ["192.168.*.*"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
