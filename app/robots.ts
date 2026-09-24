import type { MetadataRoute } from "next";
import { CRAWLER_USER_AGENTS, SITE_URL } from "@/lib/seo/site";

const sealedPaths = ["/api/", "/admin/", "/dashboard/", "/private/"];

const allowRule = (userAgent: string | string[]) => ({
  userAgent,
  allow: "/",
  disallow: sealedPaths
});

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      allowRule("*"),
      allowRule([...CRAWLER_USER_AGENTS.search]),
      allowRule([...CRAWLER_USER_AGENTS.generative]),
      allowRule("GPTBot"),
      allowRule("ChatGPT-User"),
      allowRule("ClaudeBot"),
      allowRule("PerplexityBot"),
      allowRule("Googlebot"),
      allowRule("Bingbot")
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
