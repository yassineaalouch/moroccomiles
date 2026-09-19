export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  hero: string;
  gallery: string[];
  price: number;
  duration: string;
  gate: "arch" | "blue" | "tower" | "keyhole";
  highlights: string[];
  itinerary: ItineraryDay[];
};

export const destinations: Destination[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    eyebrow: "The ochre city",
    tagline: "Follow the pulse beyond the red walls",
    description:
      "A private passage through hidden riads, spice-laden souks and the lantern-lit theatre of Jemaa el-Fnaa, shaped around your own rhythm.",
    hero:
      "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?auto=format&fit=crop&w=1200&q=85"
    ],
    price: 245,
    duration: "3 days · 2 nights",
    gate: "arch",
    highlights: ["Private medina guide", "Atlas foothills lunch", "After-hours artisan visit"],
    itinerary: [
      { day: "I", title: "The red threshold", description: "Arrive through Bab Agnaou, settle into a hand-picked riad and taste the medina at dusk." },
      { day: "II", title: "Hands of the medina", description: "Meet tile cutters, leather workers and spice merchants before a rooftop feast." },
      { day: "III", title: "Beyond the walls", description: "Journey into the Atlas foothills for a village table and a slow return through olive country." }
    ]
  },
  {
    slug: "fes",
    name: "Fes",
    eyebrow: "The city of knowledge",
    tagline: "Lose yourself in nine thousand living lanes",
    description:
      "Enter Morocco's spiritual heart with a local storyteller, from blue-tiled Bab Boujloud to copper souks and centuries-old courtyards.",
    hero:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1604323990536-e5452c0507c1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=1200&q=85"
    ],
    price: 285,
    duration: "3 days · 2 nights",
    gate: "blue",
    highlights: ["Historian-led medina walk", "Private pottery atelier", "Middle Atlas day journey"],
    itinerary: [
      { day: "I", title: "The blue gate", description: "Cross Bab Boujloud and follow the old water routes to an intimate palace dinner." },
      { day: "II", title: "A city made by hand", description: "Step inside tanneries, fondouks and family ateliers rarely opened to visitors." },
      { day: "III", title: "Cedar and stone", description: "Travel through Ifrane and cedar forests with a picnic overlooking the Middle Atlas." }
    ]
  },
  {
    slug: "chefchaouen",
    name: "Chefchaouen",
    eyebrow: "The blue pearl",
    tagline: "Wake where the Rif mountains turn blue",
    description:
      "A quiet, photographic immersion among cobalt lanes, mountain springs and the soft morning light of Morocco's most dreamlike town.",
    hero:
      "https://images.unsplash.com/photo-1553249071-2f0d6a1e9e7d?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1532176849879-92f85770f3bb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=1200&q=85"
    ],
    price: 215,
    duration: "2 days · 1 night",
    gate: "keyhole",
    highlights: ["Sunrise photo walk", "Rif mountain hike", "Family-style tasting menu"],
    itinerary: [
      { day: "I", title: "Shades of blue", description: "Arrive by the mountain road, wander the hushed upper medina and dine above the kasbah." },
      { day: "II", title: "The Rif awakens", description: "Walk to a hidden spring at sunrise before breakfast in a local family's courtyard." }
    ]
  },
  {
    slug: "rabat",
    name: "Rabat",
    eyebrow: "The royal coast",
    tagline: "Where old kingdoms meet the Atlantic",
    description:
      "An elegant coastal story moving between royal avenues, the Kasbah of the Udayas and Atlantic gardens scented with orange blossom.",
    hero:
      "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=2000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1624801512577-7b3d0c9ed54e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1553165558-77b4b05ab56f?auto=format&fit=crop&w=1200&q=85"
    ],
    price: 195,
    duration: "2 days · 1 night",
    gate: "tower",
    highlights: ["Udayas private walk", "Royal heritage circuit", "Atlantic seafood table"],
    itinerary: [
      { day: "I", title: "Gardens by the ocean", description: "Move from Chellah's ruins to the Udayas' blue lanes and sunset mint tea above the sea." },
      { day: "II", title: "The royal story", description: "Explore Hassan Tower and modern Rabat before a long lunch beside the Atlantic." }
    ]
  }
];

export const getDestination = (slug: string) =>
  destinations.find((destination) => destination.slug === slug);
