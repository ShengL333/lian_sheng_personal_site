import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (project repo → served under /lian_sheng_personal_site/).
  output: "export",
  basePath: "/lian_sheng_personal_site",
  // 静态导出没有默认优化器；next/image 会自行拼上 basePath。
  images: { unoptimized: true },
};

export default nextConfig;
