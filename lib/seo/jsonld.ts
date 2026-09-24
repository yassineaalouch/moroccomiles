import type { MoroccoDestination } from "@/data/moroccoData";
import type { Tour } from "@/lib/tours";
import { getTourOgImage, getTourPriceFrom } from "@/lib/tours";
import { faqItems } from "@/lib/seo/faq";
import { destinationTitle, type DestinationGeo } from "@/lib/seo/geo";
import { AGENCY, SITE_EMAIL, SITE_NAME, SITE_TAGLINE, SITE_URL, absoluteUrl, toAnchorId } from "@/lib/seo/site";

export type JsonLdNode = Record<string, unknown>;

const agencyId = `${SITE_URL}/#agency`;
const websiteId = `${SITE_URL}/#website`;

const agencyRef = {
  "@type": "TravelAgency",
  "@id": agencyId,
  name: SITE_NAME,
  url: SITE_URL
};

export function travelAgencyJsonLd(): JsonLdNode {
  return {
    "@type": "TravelAgency",
    "@id": agencyId,
    name: AGENCY.name,
    legalName: AGENCY.legalName,
    url: SITE_URL,
    image: absoluteUrl("/images/destinations/marrakech/jemaa-el-fna-and-souks-1.webp"),
    logo: absoluteUrl("/images/destinations/marrakech/koutoubia-mosque-1.webp"),
    description: SITE_TAGLINE,
    email: SITE_EMAIL,
    foundingDate: AGENCY.foundingDate,
    priceRange: AGENCY.priceRange,
    currenciesAccepted: "USD, EUR, MAD",
    paymentAccepted: "Bank transfer, credit card",
    slogan: "Journeys remembered long after the road ends.",
    knowsAbout: [
      "Private Morocco tours",
      "Custom itinerary design",
      "Saharan luxury desert bivouacs",
      "Imperial city medina guiding",
      "High Atlas trekking"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: AGENCY.address.streetAddress,
      addressLocality: AGENCY.address.addressLocality,
      addressRegion: AGENCY.address.addressRegion,
      addressCountry: AGENCY.address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.6295,
      longitude: -7.9811
    },
    areaServed: {
      "@type": "Country",
      name: AGENCY.areaServed
    },
    availableLanguage: AGENCY.languages.map((name) => ({
      "@type": "Language",
      name
    })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_EMAIL,
      areaServed: "Worldwide",
      availableLanguage: [...AGENCY.languages]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGENCY.ratingValue,
      reviewCount: AGENCY.reviewCount,
      bestRating: AGENCY.bestRating,
      worstRating: AGENCY.worstRating
    }
  };
}

export function websiteJsonLd(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    inLanguage: "en",
    publisher: { "@id": agencyId }
  };
}

export function layoutGraphJsonLd(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [travelAgencyJsonLd(), websiteJsonLd()]
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, position) => ({
      "@type": "ListItem",
      position: position + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function destinationTourJsonLd(
  destination: MoroccoDestination,
  geo: DestinationGeo,
  cover: string
): JsonLdNode {
  const path = `/destinations/${destination.slug}`;
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Tour",
    "@id": `${url}#tour`,
    name: destinationTitle(destination.name).split(" | ")[0],
    description: geo.description,
    url,
    image: absoluteUrl(cover),
    inLanguage: "en",
    touristType: ["Luxury travelers", "American travelers", "European travelers", "Cultural travelers"],
    duration: geo.duration,
    provider: agencyRef,
    offers: {
      "@type": "Offer",
      price: String(geo.priceFrom),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/contact"),
      eligibleRegion: {
        "@type": "Country",
        name: "Worldwide"
      }
    },
    destination: destination.landmarks.map((landmark) => ({
      "@type": "LandmarksOrHistoricalBuildings",
      name: landmark.title,
      alternateName: landmark.localName,
      image: landmark.images.map(absoluteUrl),
      url: `${url}#${toAnchorId(landmark.title)}`
    })),
    itinerary: {
      "@type": "ItemList",
      name: `${destination.name} sequential landmark itinerary`,
      numberOfItems: destination.landmarks.length,
      itemListElement: destination.landmarks.map((landmark, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `Stop ${index + 1}: ${landmark.title}`,
        description: landmark.description.slice(0, 360),
        url: `${url}#${toAnchorId(landmark.title)}`,
        item: {
          "@type": "TouristAttraction",
          name: landmark.title,
          alternateName: landmark.localName,
          description: landmark.description,
          image: landmark.images.map(absoluteUrl),
          containedInPlace: {
            "@type": "City",
            name: destination.name,
            containedInPlace: {
              "@type": "Country",
              name: "Morocco"
            }
          }
        }
      }))
    }
  };
}

export function packageTourJsonLd(tour: Tour): JsonLdNode {
  const path = `/tours/${tour.id}`;
  const url = absoluteUrl(path);
  const image = absoluteUrl(getTourOgImage(tour));
  const price = getTourPriceFrom(tour);

  return {
    "@context": "https://schema.org",
    "@type": "Tour",
    "@id": `${url}#tour`,
    name: tour.title,
    alternateName: tour.tagline,
    description: `${tour.tagline}. ${tour.duration}. A private MoroccoMiles journey with certified native guides, authentic hand-crafted passages and a sequential day-by-day itinerary.`,
    url,
    image,
    inLanguage: "en",
    touristType: ["Luxury travelers", "American travelers", "European travelers"],
    duration: tour.duration,
    provider: agencyRef,
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/contact")
    },
    destination: tour.days.map((day) => ({
      "@type": "Place",
      name: day.title,
      description: day.description,
      image: day.image.startsWith("/") ? absoluteUrl(day.image) : day.image
    })),
    itinerary: {
      "@type": "ItemList",
      name: `${tour.title} daily schedule`,
      numberOfItems: tour.days.length,
      itemListElement: tour.days.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day}: ${day.title}`,
        description: `${day.description} ${day.metric}.`,
        item: {
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
          image: day.image.startsWith("/") ? absoluteUrl(day.image) : day.image
        }
      }))
    }
  };
}

export function itemListJsonLd(name: string, path: string, items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path)
    }))
  };
}

export function faqPageJsonLd(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
