const isProd = process.env.NODE_ENV === "production";
const repo = "year-anniversary";

export default {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  env: { NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/year-anniversary" : "" }

  // trailingSlash: true, // opcional
} satisfies import("next").NextConfig;