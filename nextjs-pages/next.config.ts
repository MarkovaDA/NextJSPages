import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: true,
  output: "export",
  trailingSlash: true,
  ...(isProd && {
    basePath: "/NextJSPages",
    assetPrefix: "/NextJSPages/",
  }),
};

export default nextConfig;
