import { MetadataRoute } from "next";
import { seoMap } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ultimatecollectiblesllc.com";
  return Object.values(seoMap).map((entry) => ({
    url: `${base}${entry.path}`,
    lastModified: new Date(),
  }));
}
