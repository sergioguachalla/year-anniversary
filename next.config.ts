import type { NextConfig } from "next";
import { config } from "process";


const isProd = process.env.NODE_ENV === "production";
const repo = "year-anniversary";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};
export default nextConfig;
