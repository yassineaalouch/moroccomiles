import { destinations } from "./destinations";

export type LandmarkOption = {
  id: string;
  title: string;
  images: string[];
};

export type BuilderCity = {
  slug: string;
  name: string;
  landmarkTitle: string;
  image: string;
  gallery: string[];
  landmarks: LandmarkOption[];
};

const cityExtras: Record<
  string,
  { landmarkTitle: string; gallery: string[]; landmarks: LandmarkOption[] }
> = {
  marrakech: {
    landmarkTitle: "Jamaa el-Fna",
    gallery: [
      "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1400&q=85"
    ],
    landmarks: [
      {
        id: "majorelle",
        title: "Majorelle Garden",
        images: [
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "bahia",
        title: "Bahia Palace",
        images: [
          "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "jemaa",
        title: "Jemaa el-Fnaa",
        images: [
          "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "souks",
        title: "Medina souks",
        images: [
          "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "atlas",
        title: "Atlas foothills",
        images: [
          "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=85"
        ]
      }
    ]
  },
  fes: {
    landmarkTitle: "Bab Boujloud",
    gallery: [
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=1400&q=85"
    ],
    landmarks: [
      {
        id: "bab-boujloud",
        title: "Bab Boujloud",
        images: [
          "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "attarine",
        title: "Al-Attarine Madrasa",
        images: [
          "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "chouara",
        title: "Chouara Tannery",
        images: [
          "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "nejjarine",
        title: "Nejjarine Museum",
        images: [
          "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "middle-atlas",
        title: "Middle Atlas",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=85"
        ]
      }
    ]
  },
  chefchaouen: {
    landmarkTitle: "The Blue Medina",
    gallery: [
      "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1532176849879-92f85770f3bb?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1400&q=85"
    ],
    landmarks: [
      {
        id: "kasbah",
        title: "Kasbah Museum",
        images: [
          "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1532176849879-92f85770f3bb?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "ras-el-maa",
        title: "Ras el-Maa spring",
        images: [
          "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1532176849879-92f85770f3bb?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "spanish-mosque",
        title: "Spanish Mosque",
        images: [
          "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "uta",
        title: "Plaza Uta el-Hammam",
        images: [
          "https://images.unsplash.com/photo-1532176849879-92f85770f3bb?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "rif",
        title: "Rif trails",
        images: [
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=85"
        ]
      }
    ]
  },
  rabat: {
    landmarkTitle: "Kasbah of the Udayas",
    gallery: [
      "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1624801512577-7b3d0c9ed54e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1553165558-77b4b05ab56f?auto=format&fit=crop&w=1400&q=85"
    ],
    landmarks: [
      {
        id: "udayas",
        title: "Kasbah of the Udayas",
        images: [
          "https://images.unsplash.com/photo-1624801512577-7b3d0c9ed54e?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553165558-77b4b05ab56f?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "hassan",
        title: "Hassan Tower",
        images: [
          "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1624801512577-7b3d0c9ed54e?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "chellah",
        title: "Chellah",
        images: [
          "https://images.unsplash.com/photo-1553165558-77b4b05ab56f?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "gardens",
        title: "Royal gardens",
        images: [
          "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85"
        ]
      },
      {
        id: "atlantic",
        title: "Atlantic promenade",
        images: [
          "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1553165558-77b4b05ab56f?auto=format&fit=crop&w=900&q=85",
          "https://images.unsplash.com/photo-1624801512577-7b3d0c9ed54e?auto=format&fit=crop&w=900&q=85"
        ]
      }
    ]
  }
};

export const builderCities: BuilderCity[] = destinations.map((destination) => {
  const extras = cityExtras[destination.slug];
  return {
    slug: destination.slug,
    name: destination.name,
    landmarkTitle: extras?.landmarkTitle ?? destination.eyebrow,
    image: destination.hero,
    gallery: extras?.gallery ?? [destination.hero, ...destination.gallery],
    landmarks:
      extras?.landmarks ??
      destination.highlights.map((title, index) => ({
        id: `${destination.slug}-${index}`,
        title,
        images: [destination.hero, ...destination.gallery].slice(0, 3)
      }))
  };
});
