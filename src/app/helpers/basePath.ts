// helpers/basePath.ts
export const withBasePath = (p: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p.startsWith("/") ? p : `/${p}`}`;
