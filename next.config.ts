import type { NextConfig } from "next";

/**
 * Option A (approved): keep app at `/` and alias `/hackatob/*` via redirects.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/hackatob",
        destination: "/",
        permanent: false,
      },
      {
        source: "/hackatob/postular",
        destination: "/postular",
        permanent: false,
      },
      {
        source: "/hackatob/contacto",
        destination: "/contacto",
        permanent: false,
      },
      {
        source: "/hackatob/legal",
        destination: "/legal",
        permanent: false,
      },
      {
        source: "/hackatob/legal/:slug",
        destination: "/legal/:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
