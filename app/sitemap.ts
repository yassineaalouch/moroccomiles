import type { MetadataRoute } from "next";
import { moroccoData } from "@/data/moroccoData";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationPages = moroccoData.map(({ slug }) => ({
    url: `https://moroccomiles.com/destinations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  return [
    {
      url: "https://moroccomiles.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://moroccomiles.com/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: "https://moroccomiles.com/our-story",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: "https://moroccomiles.com/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: "https://moroccomiles.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://moroccomiles.com/itinerary-builder",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://moroccomiles.com/tours",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://moroccomiles.com/destinations",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...destinationPages
  ];
}
