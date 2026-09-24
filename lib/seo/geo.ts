import type { MoroccoDestination } from "@/data/moroccoData";

export type DestinationGeo = {
  directAnswer: string;
  eeatInsight: string;
  description: string;
  duration: string;
  priceFrom: number;
};

const REGION_DEFAULTS: Record<string, Pick<DestinationGeo, "duration" | "priceFrom">> = {
  "Imperial Cities": { duration: "3 days · 2 nights", priceFrom: 1850 },
  "Atlantic Coast": { duration: "3 days · 2 nights", priceFrom: 1690 },
  "Mediterranean & Blue North": { duration: "3 days · 2 nights", priceFrom: 1590 },
  "Sahara & Southern Oases": { duration: "4 days · 3 nights", priceFrom: 2490 },
  "High Atlas": { duration: "3 days · 2 nights", priceFrom: 1790 },
  "Alpine Atlas": { duration: "2 days · 1 night", priceFrom: 1290 }
};

const overlays: Record<string, DestinationGeo> = {
  marrakech: {
    duration: "3 days · 2 nights",
    priceFrom: 1850,
    description:
      "Private custom Marrakech tours for upscale American and European travelers: authentic hand-crafted passages through hidden historical gems, lantern-lit souks and certified native guides. Local insider tips from our 15 years of craft in the Red City.",
    directAnswer:
      "A private custom Marrakech tour with MoroccoMiles typically lasts 3 days and 2 nights from USD 1,850, with certified native guides leading authentic hand-crafted passages through Jemaa el-Fna, the Koutoubia and hidden historical gems beyond the red walls.",
    eeatInsight:
      "Local insider tips from our 15 years of craft shape every Red City evening: we time the souks before the crush, open artisan courtyards after hours, and still treat Marrakech as a living theatre rather than a checklist. Most luxury itineraries begin here before the High Atlas or the Sahara."
  },
  fes: {
    duration: "3 days · 2 nights",
    priceFrom: 2150,
    description:
      "Private custom Fes tours with certified native guides born within the nine thousand historic lanes of Fes el-Bali. Authentic hand-crafted passages through hidden historical gems, Marinid madrasas and tanneries—an insider travel guide to Morocco's spiritual capital.",
    directAnswer:
      "Our native guides were born within these nine thousand historic lanes of Fes el-Bali. A private custom Fes tour typically needs two to three unhurried days from USD 2,150 to read the medina as a living manuscript rather than a maze.",
    eeatInsight:
      "Local insider tips from our 15 years of craft keep Fes intimate: historian-led water routes, family pottery ateliers, and rooftops where satellite dishes share the sky with Marinid minarets. This is Morocco's scholarly heart, and we walk it at the pace of people who grew up inside it."
  },
  rabat: {
    duration: "2 days · 1 night",
    priceFrom: 1290,
    description:
      "Private custom Rabat tours along the royal Atlantic coast: authentic hand-crafted passages through the Kasbah of the Udayas, Hassan Tower and hidden historical gems, led by certified native guides for luxury American and European travelers.",
    directAnswer:
      "A private custom Rabat tour typically lasts 2 days from USD 1,290 and is the most composed introduction to Morocco's royal capital—Hassan Tower, the Udayas kasbah and Chellah, with mint tea above the Atlantic.",
    eeatInsight:
      "Local insider tips from our 15 years of craft favor late light on the Udayas ramparts and a quiet hour among Chellah's storks. Rabat rewards travelers who want imperial Morocco without medina crush, and our native guides still treat the estuary as a living court rather than a photo stop."
  },
  meknes: {
    duration: "2 days · 1 night",
    priceFrom: 1390,
    description:
      "Private custom Meknès tours through Morocco's Versailles: authentic hand-crafted passages to Bab Mansour, Volubilis and hidden historical gems with certified native guides. A slower imperial city for luxury travelers seeking scale without the crowds.",
    directAnswer:
      "A private custom Meknès tour typically lasts 2 days from USD 1,390 and pairs Bab Mansour with Roman Volubilis and the holy town of Moulay Idriss—imperial Morocco at a pace Fes and Marrakech can no longer offer.",
    eeatInsight:
      "Local insider tips from our 15 years of craft send guests into Heri Souani's vaults and El Hedim at twilight, when the gate tiles catch fire. Our native guides grew up in this olive hinterland and still treat Moulay Ismail's city as a landscape of power, not a lesser imperial stop."
  },
  casablanca: {
    duration: "2 days · 1 night",
    priceFrom: 1190,
    description:
      "Private custom Casablanca tours for luxury Atlantic arrivals: Hassan II Mosque, Art Deco downtown and authentic hand-crafted passages along the Corniche with certified native guides. An insider travel guide to Morocco's modernist port city.",
    directAnswer:
      "A private custom Casablanca tour typically lasts 1 to 2 days from USD 1,190. Most transatlantic guests land here; MoroccoMiles uses the city as a refined Atlantic overture—Hassan II Mosque, Art Deco avenues and Ain Diab—before the medinas begin.",
    eeatInsight:
      "Local insider tips from our 15 years of craft book the mosque tour before the cruise crowds and keep the evening on the Corniche rather than a rushed medina replica. Certified native guides still read Casa as a working port of cinema light, salt air and Neo-Mauresque pastry shops."
  },
  agadir: {
    duration: "4 days · 3 nights",
    priceFrom: 1890,
    description:
      "Private custom Agadir tours along Morocco's southern Atlantic resort coast: authentic hand-crafted passages to the kasbah ruins, Souk El Had and hidden historical gems, with certified native guides and easy days toward argan country.",
    directAnswer:
      "A private custom Agadir tour typically lasts 4 days from USD 1,890, pairing Souss Bay beaches with kasbah ruins, Souk El Had and day roads into argan groves—Morocco's winter-sun capital for luxury European travelers.",
    eeatInsight:
      "Local insider tips from our 15 years of craft lift Agadir above resort generic: sunrise on the long sand, a kasbah terrace above the rebuilt city, and a market morning that still smells of cumin and sardines. Certified native guides from the Souss keep the south unpolished where it should be."
  },
  essaouira: {
    duration: "3 days · 2 nights",
    priceFrom: 1690,
    description:
      "Private custom Essaouira tours through UNESCO ramparts, Gnawa heritage and Atlantic beaches. Authentic hand-crafted passages with certified native guides—an insider travel guide to Morocco's wind city for luxury American and European travelers.",
    directAnswer:
      "A private custom Essaouira tour typically lasts 3 days from USD 1,690. The road from Marrakech is exactly 3 hours through argan country, ending in a UNESCO medina of salt wind, thuya workshops and harbor seafood.",
    eeatInsight:
      "Local insider tips from our 15 years of craft time the Skala before the afternoon trades and still eat fish that landed an hour earlier. Certified native guides treat Essaouira as a living port, not a boutique backdrop—Gnawa rooms, rampart walks and a horizon where Mogador's islands float like a myth."
  },
  tanger: {
    duration: "3 days · 2 nights",
    priceFrom: 1750,
    description:
      "Private custom Tangier tours at the Strait of Gibraltar: authentic hand-crafted passages through the kasbah, Caves of Hercules and hidden historical gems with certified native guides. An insider travel guide for luxury travelers arriving from Europe.",
    directAnswer:
      "A private custom Tangier tour typically lasts 3 days from USD 1,750. Spain is visible across the Strait on a clear day, and MoroccoMiles uses the city as the classic European gateway—kasbah terraces, Cap Spartel and the Caves of Hercules.",
    eeatInsight:
      "Local insider tips from our 15 years of craft still begin with mint tea above the Petit Socco and a late walk when the Interzone light turns the strait to metal. Our native guides read Tangier as a meeting of continents, not a cruise stop, and keep the cafés and caves in the order the city itself prefers."
  },
  asilah: {
    duration: "2 days · 1 night",
    priceFrom: 1190,
    description:
      "Private custom Asilah tours through a mural-washed Atlantic medina: authentic hand-crafted passages along Portuguese ramparts and hidden historical gems with certified native guides. A refined coastal pause for luxury Morocco itineraries.",
    directAnswer:
      "A private custom Asilah tour typically lasts 2 days from USD 1,190—an artists' medina of white ramparts, Atlantic swell and mural culture about 40 minutes south of Tangier by private road.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk the walls at golden hour, when the limewash turns the colour of bone and the Atlantic detonates below. Certified native guides treat Asilah as a town that chose beauty as its industry, not a day-trip footnote on the Tangier road."
  },
  "el-jadida": {
    duration: "2 days · 1 night",
    priceFrom: 1250,
    description:
      "Private custom El Jadida tours inside UNESCO Mazagan: authentic hand-crafted passages through the Portuguese cistern, fortress lanes and Atlantic beaches with certified native guides. Hidden historical gems an hour from Casablanca.",
    directAnswer:
      "A private custom El Jadida tour typically lasts 2 days from USD 1,250 and sits about one hour from Casablanca—UNESCO Portuguese Mazagan, a cistern of cinematic light, then a swim at Sidi Bouzid.",
    eeatInsight:
      "Local insider tips from our 15 years of craft enter the cistern when the shafts of light are sharpest, then leave the walls for seafood on the Atlantic. Certified native guides still hear Portuguese street names as a living layer, not a museum label."
  },
  oualidia: {
    duration: "2 days · 1 night",
    priceFrom: 1590,
    description:
      "Private custom Oualidia tours on Morocco's oyster lagoon: authentic hand-crafted passages to bird-rich Atlantic shallows, luxury tables and certified native guides. A quiet coastal jewel for upscale American and European travelers.",
    directAnswer:
      "A private custom Oualidia tour typically lasts 2 days from USD 1,590. The lagoon is Morocco's refined oyster capital—sheltered Atlantic water, birdlife and tables that taste of the beds themselves.",
    eeatInsight:
      "Local insider tips from our 15 years of craft book the lagoon table before sunset, when the oyster parks turn pewter and the cliff palace catches last light. Certified native guides keep Oualidia unhurried: this coast is meant to be eaten, kited and listened to, not ticked off."
  },
  safi: {
    duration: "2 days · 1 night",
    priceFrom: 1290,
    description:
      "Private custom Safi tours in Morocco's pottery capital: authentic hand-crafted passages through kiln quarters, the Portuguese sea castle and hidden historical gems with certified native guides who still work beside the Atlantic kilns.",
    directAnswer:
      "A private custom Safi tour typically lasts 2 days from USD 1,290 and is the essential craft stop on the Atlantic—Château de la Mer, a working harbour, and the potters' quarter of Hay l-Fakhara.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk you into active kilns rather than souvenir stalls. Our native guides still smell of wet clay and fish smoke, and they introduce masters who throw plates you can commission before lunch on the same ocean."
  },
  dakhla: {
    duration: "5 days · 4 nights",
    priceFrom: 3890,
    description:
      "Private custom Dakhla expeditions where Sahara dunes meet turquoise Atlantic: luxury lagoon days, kite horizons and authentic hand-crafted passages with certified native guides. An insider travel guide to Morocco's remote southern wilderness.",
    directAnswer:
      "A private custom Dakhla tour typically lasts 5 days from USD 3,890. The peninsula is a Sahara-meets-ocean expedition: trade-wind lagoons, oyster parks and white dunes plunging into turquoise Atlantic water.",
    eeatInsight:
      "Local insider tips from our 15 years of craft treat Dakhla as a wilderness atelier, not a resort transfer. Certified native guides time the lagoon wind, the oyster tables and the silent dune road so luxury travelers feel the far south as geography, not as a brochure."
  },
  chefchaouen: {
    duration: "2 days · 1 night",
    priceFrom: 1290,
    description:
      "Private custom Chefchaouen tours in the Blue Pearl of the Rif: authentic hand-crafted passages through indigo lanes, hidden historical gems and mountain water with certified native guides. An insider travel guide for luxury photographic journeys.",
    directAnswer:
      "A private custom Chefchaouen tour typically lasts 2 days from USD 1,290. The Blue Pearl sits about 4 hours by private road from Fes, or 2.5 hours from Tangier, beneath the limestone peaks of the Rif.",
    eeatInsight:
      "Local insider tips from our 15 years of craft climb to the Spanish Mosque for dusk, then return through Ras El Maa while laundry still snaps over the spring. Certified native guides keep the indigo lanes from becoming a backdrop: sage tea, wool weaving, and trails that lead from blue stairs into waterfall country."
  },
  tetouan: {
    duration: "2 days · 1 night",
    priceFrom: 1350,
    description:
      "Private custom Tétouan tours through a UNESCO Andalusian medina: authentic hand-crafted passages among artisan guilds, hidden historical gems and certified native guides. The White Dove of the Rif for luxury travelers who want craft, not crowds.",
    directAnswer:
      "A private custom Tétouan tour typically lasts 2 days from USD 1,350. UNESCO-listed and often missed on the Chefchaouen road, the White Dove remains Morocco's school of zellige, leather and Andalusian street logic.",
    eeatInsight:
      "Local insider tips from our 15 years of craft open working mosaic studios rather than gift souks. Our native guides still speak the medina as a Hispano-Moorish inheritance—guild streets, palace gates and a cultural seriousness that luxury travelers remember longer than the blue town up the mountain."
  },
  "al-hoceima": {
    duration: "3 days · 2 nights",
    priceFrom: 1690,
    description:
      "Private custom Al Hoceima tours along Morocco's Mediterranean cliffs: authentic hand-crafted passages through national-park coves, hidden historical gems and certified native guides. Clearer water, calmer sea, Rif pine and grilled fish.",
    directAnswer:
      "A private custom Al Hoceima tour typically lasts 3 days from USD 1,690—Mediterranean coves, national-park cliffs and beaches that are a different sea from the Atlantic surf culture of the west.",
    eeatInsight:
      "Local insider tips from our 15 years of craft boat the inaccessible shores at morning glass, then swim at Quemado or Tala Youssef before the afternoon wind. Certified native Rif guides still smell of pine, salt and sardines, and they treat this coast as home water, not a hidden-beach product."
  },
  saidia: {
    duration: "3 days · 2 nights",
    priceFrom: 1590,
    description:
      "Private custom Saïdia tours on Morocco's longest Mediterranean beach: authentic hand-crafted passages to the Moulouya estuary, marina evenings and certified native guides. Space, calm water and wetland birdlife for luxury eastern itineraries.",
    directAnswer:
      "A private custom Saïdia tour typically lasts 3 days from USD 1,590. The Blue Pearl of the East offers Morocco's longest Mediterranean front—about 14 kilometres of pale sand—plus the Moulouya estuary for migratory birds.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk the beach at first light, then turn inland to the estuary when flamingos and waders work the mouth. Certified native guides keep Saïdia about space and a sea that invites you in, not about a marina checklist."
  },
  ouarzazate: {
    duration: "3 days · 2 nights",
    priceFrom: 1890,
    description:
      "Private custom Ouarzazate tours at the door of the desert: authentic hand-crafted passages to Aït Benhaddou, kasbah palaces and hidden historical gems with certified native guides. The cinematic gateway toward Merzouga for luxury travelers.",
    directAnswer:
      "A private custom Ouarzazate tour typically lasts 3 days from USD 1,890 and is the cinematic gateway to kasbah country. From Marrakech, the High Atlas crossing via Tizi n'Tichka takes about 4 to 5 hours.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk Aït Benhaddou before the coaches, then sit in Taourirt's shade while the desert light does what directors come here to chase. Certified native guides still treat ksour as homes and film sets as a second language of the south."
  },
  merzouga: {
    duration: "4 days · 3 nights",
    priceFrom: 2690,
    description:
      "Private custom Merzouga Sahara tours with luxury desert bivouacs, camel trails into Erg Chebbi and certified native guides. Authentic hand-crafted desert passages for upscale American and European travelers—an insider travel guide to Morocco's golden dunes.",
    directAnswer:
      "The typical travel time between Marrakech and the Merzouga Sahara dunes is exactly 8 to 9 hours across the scenic High Atlas pass. A private custom Merzouga tour with luxury desert bivouacs typically lasts 4 days from USD 2,690.",
    eeatInsight:
      "Local insider tips from our 15 years of craft ride beyond the first dune line, where luxury desert bivouacs still face silence rather than a parking lot. Certified native guides from the erg time sunrise, Gnawa in Khamlia, and the camel trail so the Sahara remains a ritual, not a sunset ticket."
  },
  zagora: {
    duration: "4 days · 3 nights",
    priceFrom: 2590,
    description:
      "Private custom Zagora and M'hamid tours along the Timbuktu road: authentic hand-crafted passages through Draa palmeraies, Tamegroute pottery and wilder Erg Chigaga dunes with certified native guides and quieter luxury desert bivouacs.",
    directAnswer:
      "A private custom Zagora tour typically lasts 4 days from USD 2,590. From Ouarzazate the Draa road is about 4 hours; Erg Chigaga then asks a 4x4 expedition from M'hamid into a Sahara less crowded than Merzouga.",
    eeatInsight:
      "Local insider tips from our 15 years of craft still pause at Tamegroute's Quranic library and green-glazed kilns before the dunes. Certified native guides of the Draa treat the old '52 days to Timbuktu' sign as humor with a spine: the real luxury here is a quieter bivouac in deeper sand."
  },
  tinghir: {
    duration: "3 days · 2 nights",
    priceFrom: 1890,
    description:
      "Private custom Tinghir and Dades tours through Morocco's canyon country: authentic hand-crafted passages into Todgha Gorges, Monkey Fingers rock and hidden historical gems with certified native guides for luxury road travelers.",
    directAnswer:
      "A private custom Tinghir tour typically lasts 3 days from USD 1,890. Todgha's limestone walls rise above a palm-fed stream, and the Dades road to the Monkey Fingers is one of Morocco's great scenic half-days.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk Todgha at morning, before the echo fills, then tea in the palmeraie with families who farm the gorge mouth. Certified native guides still climb, irrigate and host in the same stone country travelers come to photograph."
  },
  imlil: {
    duration: "3 days · 2 nights",
    priceFrom: 1790,
    description:
      "Private custom Imlil and Toubkal tours from Marrakech: authentic hand-crafted passages through Amazigh mule-path villages, hidden historical gems and certified native mountain guides. North Africa's highest peak, 2 hours from the Red City.",
    directAnswer:
      "A private custom Imlil tour typically lasts 3 days from USD 1,790. The High Atlas trailhead sits exactly 2 hours from Marrakech, and a Toubkal summit passage with certified native guides is a further two-day mountain vow.",
    eeatInsight:
      "Local insider tips from our 15 years of craft sleep in stone houses, not just day-trip the trailhead. Our native guides were raised on these mule paths; they still time walnut-grove walks, refuge nights and mint tea with village families so Toubkal remains a relationship, not a trophy."
  },
  ifrane: {
    duration: "2 days · 1 night",
    priceFrom: 1290,
    description:
      "Private custom Ifrane tours in Morocco's alpine garden city: authentic hand-crafted passages through cedar air, hidden historical gems and certified native guides. Little Switzerland for luxury travelers crossing the Middle Atlas.",
    directAnswer:
      "A private custom Ifrane tour typically lasts 2 days from USD 1,290. The Middle Atlas garden city sits about 1.5 hours from Fes—pitched roofs, trout streams and a cooler Morocco that knows frost.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk Ain Vittel and the cedar edge at first quiet, then treat Ifrane as a breath between imperial cities rather than a curiosity. Certified native highland guides still read snow, campus calm and lion-stone parks as a real season of the kingdom."
  },
  azrou: {
    duration: "2 days · 1 night",
    priceFrom: 1190,
    description:
      "Private custom Azrou tours through Middle Atlas cedar country: authentic hand-crafted passages among Barbary macaques, Cèdre Gouraud and hidden historical gems with certified native guides. A living woodland between Fes and the south.",
    directAnswer:
      "A private custom Azrou tour typically lasts 2 days from USD 1,190. The cedar forests around Cèdre Gouraud sit between Fes and the south—Barbary macaques, resin air and a Berber market town named for its rock.",
    eeatInsight:
      "Local insider tips from our 15 years of craft walk the woodland without feeding the macaques, then use market day in Azrou as the cultural half of the forest. Certified native guides still smell of wool, honey and cold earth, and they treat the cedars as a living monument under pressure."
  },
  azilal: {
    duration: "3 days · 2 nights",
    priceFrom: 1690,
    description:
      "Private custom Azilal tours through lakes and cascades: authentic hand-crafted passages to Bin El Ouidane, Ouzoud waterfalls and hidden historical gems with certified native guides. Morocco's secret water district for luxury highland travelers.",
    directAnswer:
      "A private custom Azilal tour typically lasts 3 days from USD 1,690. Bin El Ouidane's turquoise reservoir, Ouzoud's cascades and the road toward Imilchil form Morocco's least expected water district in the Middle Atlas.",
    eeatInsight:
      "Local insider tips from our 15 years of craft boat Bin El Ouidane when the cliffs turn the lake to glass, then walk the full Ouzoud descent rather than the parking-lot viewpoint. Certified native guides of Azilal still farm, host and time rainbow spray as people of this limestone country."
  }
};

const fallbackGeo = (destination: MoroccoDestination): DestinationGeo => {
  const defaults = REGION_DEFAULTS[destination.region] ?? {
    duration: "3 days · 2 nights",
    priceFrom: 1650
  };
  const landmarks = destination.landmarks
    .slice(0, 3)
    .map((landmark) => landmark.title)
    .join(", ");

  return {
    ...defaults,
    description: `Private custom ${destination.name} tours with MoroccoMiles: authentic hand-crafted passages, hidden historical gems and certified native guides through ${landmarks}. Local insider tips from our 15 years of craft in ${destination.region}.`,
    directAnswer: `A private custom ${destination.name} tour with MoroccoMiles is led by certified native guides and typically lasts ${defaults.duration} from USD ${defaults.priceFrom.toLocaleString("en-US")}.`,
    eeatInsight: `Local insider tips from our 15 years of craft shape every ${destination.name} passage. ${destination.intro}`
  };
};

export const getDestinationGeo = (destination: MoroccoDestination): DestinationGeo =>
  overlays[destination.slug] ?? fallbackGeo(destination);

export const destinationTitle = (cityName: string) =>
  `Private Custom ${cityName} Tour | Local Insider Travel Guide Morocco`;
