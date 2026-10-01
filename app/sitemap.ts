import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nova-example.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}