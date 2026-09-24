export const SITE_URL = "https://moroccomiles.com";
export const SITE_NAME = "MoroccoMiles";
export const SITE_EMAIL = "journeys@moroccomiles.com";
export const SITE_LOCALE = "en_US";
export const SITE_TAGLINE = "Private custom Morocco tours designed by local storytellers.";
export const DEFAULT_OG_IMAGE = "/images/destinations/marrakech/jemaa-el-fna-and-souks-1.webp";
export const DEFAULT_OG_ALT = "Jemaa el-Fna and the souks of Marrakech, Morocco";

export const AGENCY = {
  name: SITE_NAME,
  legalName: "MoroccoMiles",
  email: SITE_EMAIL,
  foundingDate: "2011",
  priceRange: "$$$",
  ratingValue: "4.9",
  reviewCount: "142",
  bestRating: "5",
  worstRating: "1",
  address: {
    streetAddress: "Medina of Marrakech",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-Safi",
    addressCountry: "MA"
  },
  areaServed: "Morocco",
  languages: ["English", "French", "Arabic", "Spanish"]
} as const;

export const CRAWLER_USER_AGENTS = {
  search: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Applebot"] as const,
  generative: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "anthropic-ai", "CCBot"] as const
};

export const STATIC_PAGES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/destinations", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/tours", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/book", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/itinerary-builder", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/our-story", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 }
] as const;

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};

export const toAnchorId = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
