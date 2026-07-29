import type { MetadataRoute } from "next";
import { legalPages, site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/postular`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/legal`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    ...legalPages.map((page) => ({
      url: `${base}/legal/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
