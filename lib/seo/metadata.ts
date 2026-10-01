import type { Metadata } from "next";
import { HOME_DESCRIPTION, IDENTITY } from "@/lib/seo/identity";
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
      alternateLocale: ["fr_FR"],
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
    default: IDENTITY.titleDefault,
    template: "%s | MoroccoMiles"
  },
  description: HOME_DESCRIPTION,
  keywords: [...IDENTITY.keywords],
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
    alternateLocale: ["fr_FR"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: IDENTITY.titleHome,
    description: HOME_DESCRIPTION,
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
    title: IDENTITY.titleHome,
    description: HOME_DESCRIPTION,
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
