import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // Resolve a ambiguidade do workspace root (existem dois package-lock.json:
    // um na raiz do repo e outro em /portfolio). Fixar aqui silencia o warning.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
