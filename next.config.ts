
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/": ["./content/**/*"],
    "/articles": ["./content/articles/**/*"],
    "/articles/[slug]": ["./content/articles/**/*"],
    "/cases": ["./content/cases/**/*"],
    "/cases/[slug]": ["./content/cases/**/*"],
    "/detectives": ["./content/detectives/**/*"],
    "/detectives/[slug]": ["./content/detectives/**/*"],
  },
};

export default nextConfig;
