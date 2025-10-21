import type { NextConfig } from "next";


const isProd = process.env.NODE_ENV === "production";
const repo = "year-anniversary";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};
export default config;
