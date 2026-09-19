import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot"],
        allow: "/"
      }
    ],
    sitemap: "https://moroccomiles.com/sitemap.xml",
    host: "https://moroccomiles.com"
  };
}
