export type TourDay = {
  day: number;
  title: string;
  description: string;
  metric: string;
  image: string;
};

export type TourCategory = "saharan" | "atlas" | "atlantic";

export type Tour = {
  id: string;
  category: TourCategory;
  title: string;
  tagline: string;
  duration: string;
  image: string;
  days: TourDay[];
};

export const getTour = (id: string) => tours.find((tour) => tour.id === id);

export const getTourDurationDays = (tour: Tour) => {
  const match = tour.duration.match(/(\d+)/);
  return match ? Number(match[1]) : 3;
};

export const getTourNights = (tour: Tour) => {
  const match = tour.duration.match(/(\d+)\s*Nights?/i);
  if (match) return Number(match[1]);
  return Math.max(1, getTourDurationDays(tour) - 1);
};

export const getTourPriceFrom = (tour: Tour) => {
  const days = getTourDurationDays(tour);
  const rate = tour.category === "saharan" ? 720 : tour.category === "atlas" ? 540 : 610;
  return days * rate;
};

export const getTourOgImage = (tour: Tour) => {
  if (tour.image.startsWith("/")) return tour.image;
  if (tour.category === "saharan") return "/images/destinations/merzouga/desert-bivouacs-1.webp";
  if (tour.category === "atlas") return "/images/destinations/imlil/imlil-village-basecamp-1.webp";
  return "/images/destinations/essaouira/essaouira-main-beach-1.webp";
};

export const tourCategories: { id: TourCategory | "all"; label: string }[] = [
  { id: "all", label: "All Journeys" },
  { id: "saharan", label: "Saharan Nomadic" },
  { id: "atlas", label: "High Atlas Peaks" },
  { id: "atlantic", label: "Atlantic & Medinas" }
];

export const tours: Tour[] = [
  {
    id: "merzouga-constellations",
    category: "saharan",
    title: "Merzouga Constellations",
    tagline: "Camel trails into Erg Chebbi under desert stars",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Marrakech to the desert threshold", description: "Cross the High Atlas and Kasbah Valley, arriving at the edge of Erg Chebbi as the dunes turn copper.", metric: "Drive Time: 9 Hours", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Camel trek into Erg Chebbi", description: "Ride into the golden waves of Merzouga, settle into a luxury desert camp and watch the sky open.", metric: "Duration: 5 Hours desert immersion", image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Sunrise dunes & oasis villages", description: "Climb a dune for sunrise, then visit desert villages and fossil beds with a private local guide.", metric: "Duration: 4 Hours exploration", image: "https://images.unsplash.com/photo-1509316785289-025f5ce95b72?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Return through the roses", description: "Leave the Sahara via the Valley of Roses, pausing in artisan workshops before returning west.", metric: "Drive Time: 8 Hours", image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "zagora-caravan",
    category: "saharan",
    title: "Zagora Caravan Nights",
    tagline: "Palm groves, kasbahs and candlelit desert camps",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1509316785289-025f5ce95b72?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Through the Draa Valley", description: "Travel past ancient kasbahs and date palm corridors toward Zagora's desert edge.", metric: "Drive Time: 7 Hours", image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Nomadic evening under canvas", description: "Camel into the quieter dunes beyond Zagora for a private camp dinner and storytelling.", metric: "Duration: 6 Hours desert stay", image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Kasbah mornings", description: "Wake among palms, explore local markets, then begin the scenic return west.", metric: "Duration: 3 Hours exploration", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "luxury-erg-chebbi",
    category: "saharan",
    title: "Luxury Erg Chebbi Escape",
    tagline: "Private tents, dune dinners and silent Sahara nights",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Atlas crossing to Ouarzazate", description: "Wind through Tizi n'Tichka and settle in a desert-facing kasbah stay.", metric: "Drive Time: 5 Hours", image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Aït Benhaddou & desert gates", description: "Walk the UNESCO ksar before continuing toward Merzouga's golden amphitheatre.", metric: "Duration: 3 Hours exploration", image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Private dune camp", description: "Arrive by camel to a luxury camp with lantern-lit dining and stargazing.", metric: "Duration: Overnight desert immersion", image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Sahara at blue hour", description: "Photograph the dunes at dawn, then meet nomadic families near the oasis fringe.", metric: "Duration: 4 Hours exploration", image: "https://images.unsplash.com/photo-1509316785289-025f5ce95b72?auto=format&fit=crop&w=800&q=85" },
      { day: 5, title: "Farewell road home", description: "Leave the desert via Todra Gorge and return through the High Atlas.", metric: "Drive Time: 9 Hours", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "camel-trail-classic",
    category: "saharan",
    title: "Classic Camel Trail",
    tagline: "A timeless passage from medina walls to soft dunes",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Leaving the ochre city", description: "Depart Marrakech and follow the mountain road toward the desert gateway towns.", metric: "Drive Time: 8 Hours", image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Into the sand sea", description: "Camel trek at sunset, Berber music around the fire and sleep under canvas.", metric: "Duration: 5 Hours desert ritual", image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Morning light return", description: "Watch the dunes awaken, then begin the scenic journey back to Marrakech.", metric: "Drive Time: 8 Hours", image: "https://images.unsplash.com/photo-1509316785289-025f5ce95b72?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "sahara-slow-passage",
    category: "saharan",
    title: "Sahara Slow Passage",
    tagline: "Unhurried nights between oases, fossils and dunes",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Kasbah country begins", description: "Travel into southern Morocco with stops at scenic viewpoints and pottery towns.", metric: "Drive Time: 6 Hours", image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Gorges and palm canyons", description: "Walk Todra's limestone walls before continuing toward Merzouga.", metric: "Duration: 3 Hours exploration", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Luxury camp arrival", description: "Ride into Erg Chebbi and settle into a refined desert camp.", metric: "Duration: Overnight", image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Desert stillness", description: "A free morning for photography, sandboarding or quiet dune walks.", metric: "Duration: Full day at leisure", image: "https://images.unsplash.com/photo-1509316785289-025f5ce95b72?auto=format&fit=crop&w=800&q=85" },
      { day: 5, title: "Oasis villages", description: "Meet local families and explore fossil workshops on the desert fringe.", metric: "Duration: 4 Hours cultural visits", image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=800&q=85" },
      { day: 6, title: "Return across the mountains", description: "Retrace the Atlas road with long light and unhurried café stops.", metric: "Drive Time: 9 Hours", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "toubkal-ascent",
    category: "atlas",
    title: "Toubkal Summit Passage",
    tagline: "A guided climb into Morocco's highest alpine world",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Into Imlil", description: "Leave Marrakech for the High Atlas village of Imlil and settle among cedar air.", metric: "Drive Time: 2 Hours", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Trail to the refuge", description: "Trek through Berber hamlets toward the Toubkal base refuge.", metric: "Duration: 6 Hours hiking", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Summit morning", description: "Ascend North Africa's highest peak at first light, then descend to Imlil.", metric: "Duration: 8 Hours ascent & return", image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Village farewells", description: "Share a mountain breakfast before returning to Marrakech.", metric: "Drive Time: 2 Hours", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "ourika-valley-day",
    category: "atlas",
    title: "Ourika Valley Reverie",
    tagline: "Waterfalls, river valleys and Atlas village tables",
    duration: "1 Day / Day Trip",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Ourika waterfalls & villages", description: "Travel into the green Ourika Valley for waterfall walks, mint tea and a riverside lunch.", metric: "Duration: 8 Hours full-day outing", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "amizmiz-berber-stay",
    category: "atlas",
    title: "Amizmiz Berber Homestay",
    tagline: "Farm mornings, mountain kitchens and quiet hospitality",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Arrival in Amizmiz", description: "Leave the city for Amizmiz foothills and settle into a family-run mountain house.", metric: "Drive Time: 1.5 Hours", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Village rhythms", description: "Bake bread, walk terraced fields and learn seasonal cooking with your hosts.", metric: "Duration: Full day immersion", image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Foothill farewells", description: "A final mountain breakfast before returning to Marrakech.", metric: "Drive Time: 1.5 Hours", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "atlas-village-circuit",
    category: "atlas",
    title: "High Atlas Village Circuit",
    tagline: "Stone hamlets, mule paths and cedar-scented evenings",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Into the mountains", description: "Climb from Marrakech into remote High Atlas valleys.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Mule-path walking day", description: "Follow quiet trails between villages with picnic views over deep valleys.", metric: "Duration: 5 Hours walking", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Berber kitchens", description: "Cook with a local family and learn the slow craft of mountain hospitality.", metric: "Duration: 4 Hours cultural immersion", image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Ridge light", description: "A scenic high-pass walk with panoramic Atlas horizons.", metric: "Duration: 4 Hours hiking", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=85" },
      { day: 5, title: "Descending to the plain", description: "Return to Marrakech with mountain air still in your clothes.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "toubkal-gentle-trek",
    category: "atlas",
    title: "Gentle Atlas Footpaths",
    tagline: "Soft trails for travelers who prefer scenery over summits",
    duration: "2 Days / 1 Night",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Valley walks & lodge night", description: "Easy walks through walnut groves and terraces, then overnight in a mountain lodge.", metric: "Duration: 4 Hours gentle hiking", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Morning light return", description: "A short ridge walk and scenic drive back to the city.", metric: "Duration: 3 Hours outing", image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "essaouira-salt-air",
    category: "atlantic",
    title: "Essaouira Salt Air Passage",
    tagline: "Ramparts, wind, seafood and Atlantic light",
    duration: "3 Days / 2 Nights",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Road to the wind city", description: "Travel from Marrakech through argan country to Essaouira's blue-and-white medina.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Ramparts & fishing harbor", description: "Walk the Skala, visit artisan workshops and linger over Atlantic seafood.", metric: "Duration: Full day coastal immersion", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Beach morning return", description: "A soft morning by the shore before returning inland.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "agadir-coastline",
    category: "atlantic",
    title: "Agadir Coastline Escape",
    tagline: "Wide beaches, marina evenings and soft Atlantic evenings",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Arrive by the ocean", description: "Settle into a coastal stay with sunset walks along Agadir's long beachfront.", metric: "Duration: Evening at leisure", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Kasbah viewpoint & markets", description: "Climb to Agadir Oufella ruins and browse the souk for local crafts.", metric: "Duration: 4 Hours exploration", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Paradise Valley day", description: "Travel inland to natural pools and palm canyons for a restorative mountain-ocean contrast.", metric: "Duration: 6 Hours outing", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Final Atlantic morning", description: "A last coffee by the marina before departure.", metric: "Duration: 2 Hours leisure", image: "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "taghazout-surf",
    category: "atlantic",
    title: "Taghazout Surf Horizon",
    tagline: "Surf lessons, cliff sunsets and coastal village pace",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Arrive in Taghazout", description: "Settle into a surf-side village stay overlooking Anchor Point.", metric: "Duration: Evening orientation", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "First wave session", description: "Private surf coaching on gentle breaks suited to your level.", metric: "Duration: 3 Hours water time", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "Coastal cliffs & yoga", description: "Morning stretch facing the ocean, then a scenic coastal walk.", metric: "Duration: 4 Hours wellness & coast", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Surf & village markets", description: "Another session in the water followed by a slow village evening.", metric: "Duration: 3 Hours surfing", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=85" },
      { day: 5, title: "Departure light", description: "Breakfast with the Atlantic before continuing your Morocco road.", metric: "Duration: Morning leisure", image: "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "imperial-atlantic-arc",
    category: "atlantic",
    title: "Imperial Atlantic Arc",
    tagline: "Medinas, ramparts and salt roads from Rabat to Essaouira",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1575283757980-195c7aee8846?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Rabat royal welcome", description: "Arrive in the capital and walk the Kasbah of the Udayas above the Bou Regreg.", metric: "Duration: 3 Hours exploration", image: "https://images.unsplash.com/photo-1624801512577-7b3d0c9ed54e?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Chellah & Atlantic gardens", description: "Explore ruins and orange-blossom gardens before an oceanfront dinner.", metric: "Duration: 4 Hours sightseeing", image: "https://images.unsplash.com/photo-1553165558-77b4b05ab56f?auto=format&fit=crop&w=800&q=85" },
      { day: 3, title: "South to Casablanca coast", description: "Travel the Atlantic road with a pause at Hassan II Mosque.", metric: "Drive Time: 2 Hours + visits", image: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=800&q=85" },
      { day: 4, title: "Toward Essaouira", description: "Continue along the coast into wind-sculpted Essaouira.", metric: "Drive Time: 4 Hours", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=85" },
      { day: 5, title: "Medina immersion", description: "Lost lanes, music workshops and harbor seafood rituals.", metric: "Duration: Full day", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=85" },
      { day: 6, title: "Beach & argan countryside", description: "A soft beach morning and countryside argan cooperative visit.", metric: "Duration: 4 Hours", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85" },
      { day: 7, title: "Journey onward", description: "Depart for Marrakech or your onward Atlantic destination.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    id: "medina-to-ocean",
    category: "atlantic",
    title: "Medina to Ocean Weekend",
    tagline: "A short, elegant escape from city walls to sea wind",
    duration: "2 Days / 1 Night",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=85",
    days: [
      { day: 1, title: "Marrakech to Essaouira", description: "Leave the medina for Atlantic ramparts, galleries and harbor lamps.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=800&q=85" },
      { day: 2, title: "Ocean morning return", description: "Sunrise by the walls, then a scenic return inland.", metric: "Drive Time: 3 Hours", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85" }
    ]
  }
];
