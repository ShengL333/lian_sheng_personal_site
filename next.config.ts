import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (project repo → served under /lian_sheng_personal_site/).
  output: "export",
  basePath: "/lian_sheng_personal_site",
};

export default nextConfig;
