import type { MetadataRoute } from "next";
import { moroccoData } from "@/data/moroccoData";
import { tours } from "@/lib/tours";
import { SITE_URL, STATIC_PAGES } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));

  const destinationEntries: MetadataRoute.Sitemap = moroccoData.map(({ slug }) => ({
    url: `${SITE_URL}/destinations/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85
  }));

  const tourEntries: MetadataRoute.Sitemap = tours.map(({ id }) => ({
    url: `${SITE_URL}/tours/${id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  return [...staticEntries, ...destinationEntries, ...tourEntries];
}
