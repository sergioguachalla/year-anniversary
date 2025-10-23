// next.config.ts
const isProd = process.env.NODE_ENV === "production";
const repo = "year-anniversary";

export default {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
  trailingSlash: true, // opcional, ayuda en GH Pages
} satisfies import("next").NextConfig;
