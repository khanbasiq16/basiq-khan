import type { MetadataRoute } from "next";
import { services, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
