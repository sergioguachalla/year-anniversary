import type { NextConfig } from "next";
import { config } from "process";


const isProd = process.env.NODE_ENV === "production";
const repo = "year-anniversary";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  env: {
    // para usar en el cliente
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
  // opcional pero útil en GH Pages (URLs con / al final)
  trailingSlash: true,
};

export default nextConfig;