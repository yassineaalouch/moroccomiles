import {
  moroccoData,
  getDestinationCoverImage,
  type MoroccoDestination
} from "@/data/moroccoData";

export type LandmarkOption = {
  id: string;
  title: string;
  images: string[];
};

export type BuilderCity = {
  slug: string;
  name: string;
  region: string;
  landmarkTitle: string;
  image: string;
  gallery: string[];
  landmarks: LandmarkOption[];
};

export const toLandmarkId = (slug: string, title: string) =>
  `${slug}-${title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

const toCardImage = (src: string) => src.replace("/images/destinations/", "/images/destinations-sm/");

const toBuilderCity = (destination: MoroccoDestination): BuilderCity => ({
  slug: destination.slug,
  name: destination.name,
  region: destination.region,
  landmarkTitle: destination.landmarks[0]?.title ?? destination.eyebrow,
  image: toCardImage(getDestinationCoverImage(destination)),
  gallery: destination.landmarks.flatMap((landmark) => landmark.images.map(toCardImage)),
  landmarks: destination.landmarks.map((landmark) => ({
    id: toLandmarkId(destination.slug, landmark.title),
    title: landmark.title,
    images: landmark.images.map(toCardImage)
  }))
});

export const builderCities: BuilderCity[] = moroccoData.map(toBuilderCity);
