import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_LOCALE, DEFAULT_OG_IMAGE, DEFAULT_OG_ALT, absoluteUrl } from "@/lib/seo/site";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  ogType?: "website" | "article";
};

const indexRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  }
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_ALT,
  keywords,
  absoluteTitle = false,
  ogType = "website"
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const socialImage = {
    url: image,
    width: 1920,
    height: 1080,
    type: "image/webp" as const,
    alt: imageAlt
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: indexRobots,
    openGraph: {
      type: ogType,
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [socialImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MoroccoMiles | Private Custom Morocco Tours & Local Insider Guides",
    template: "%s | MoroccoMiles"
  },
  description:
    "MoroccoMiles designs private custom Morocco tours for upscale American and European travelers. Authentic hand-crafted passages, hidden historical gems, luxury desert bivouacs and certified native guides—local insider tips from our 15 years of craft.",
  keywords: [
    "private Morocco tours",
    "custom Morocco itinerary",
    "luxury Morocco travel",
    "local insider Morocco guide",
    "certified native guides Morocco",
    "Fes private tour",
    "Marrakech private tour",
    "Merzouga luxury desert bivouac",
    "High Atlas private journey"
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Travel",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  robots: indexRobots,
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "MoroccoMiles | Private Custom Morocco Tours",
    description:
      "Bespoke private journeys through Morocco, designed by local storytellers. Hidden historical gems, authentic hand-crafted passages and luxury desert bivouacs.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1920,
        height: 1080,
        type: "image/webp",
        alt: DEFAULT_OG_ALT
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MoroccoMiles | Private Custom Morocco Tours",
    description:
      "Private custom Morocco tours with certified native guides, luxury desert bivouacs and 15 years of local craft.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: DEFAULT_OG_ALT
      }
    ]
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};
