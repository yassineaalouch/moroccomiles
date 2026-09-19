export type MoroccoLandmark = {
  title: string;
  localName: string;
  description: string;
  suggestedDuration: string;
  images: string[];
};

export type MoroccoDestination = {
  slug: string;
  name: string;
  region: string;
  eyebrow: string;
  intro: string;
  landmarks: MoroccoLandmark[];
};

export const moroccoData: MoroccoDestination[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    region: "Imperial Cities",
    eyebrow: "The Red City",
    intro: "Marrakech is Morocco's theatrical southern capital-where Almohad minarets, Saadian tombs and lantern-lit souks still set the rhythm of imperial life.",
    landmarks: [
      {
        title: "Jemaa el-Fna & Souks",
        localName: "Jamaa Lafna w Souq",
        description: "At dusk, Jemaa el-Fna becomes Morocco's greatest open-air theatre: storytellers, spice stalls, orange-juice carts and the labyrinth of covered souks beyond. UNESCO recognises this square as a Masterpiece of Oral and Intangible Heritage-an essential immersion into Marrakech's living medina culture.",
        suggestedDuration: "3-4 Hours",
        images: ["/images/destinations/marrakech/jemaa-el-fna-and-souks-1.jpg", "/images/destinations/marrakech/jemaa-el-fna-and-souks-2.jpg", "/images/destinations/marrakech/jemaa-el-fna-and-souks-3.jpg"]
      },
      {
        title: "Koutoubia Mosque",
        localName: "Kutubiyya",
        description: "The Koutoubia's rose-stone minaret (late 12th century) is the Almohad masterpiece that later inspired Seville's Giralda and Rabat's Hassan Tower. Non-Muslims admire it from the gardens, where the call to prayer still anchors the city's skyline.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/marrakech/koutoubia-mosque-1.jpg", "/images/destinations/marrakech/koutoubia-mosque-2.jpg", "/images/destinations/marrakech/koutoubia-mosque-3.jpg"]
      },
      {
        title: "Majorelle & Secret Gardens",
        localName: "Jnan Majorelle",
        description: "Yves Saint Laurent's cherished Majorelle Garden pairs cobalt Art Deco architecture with bamboo, cactus and rare botanical collections. Pair it with the nearby Secret Garden for a quieter Andalusian-Islamic courtyard contrast inside the medina walls.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/marrakech/majorelle-and-secret-gardens-1.jpg", "/images/destinations/marrakech/majorelle-and-secret-gardens-2.jpg", "/images/destinations/marrakech/majorelle-and-secret-gardens-3.jpg"]
      },
      {
        title: "Bahia & El Badi Palaces",
        localName: "Qsar Bahia w Badii",
        description: "The Bahia Palace unfolds in painted cedar ceilings and zellige courtyards of late-19th-century vizier luxury, while the ruined El Badi-once Saadian opulence-now stands as a monumental open-air skeleton of empire. Together they narrate Marrakech's courtly rise and fall.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/marrakech/bahia-and-el-badi-palaces-1.jpg", "/images/destinations/marrakech/bahia-and-el-badi-palaces-2.jpg", "/images/destinations/marrakech/bahia-and-el-badi-palaces-3.jpg"]
      },
      {
        title: "Saadian Tombs",
        localName: "Qbur Saadiyin",
        description: "Rediscovered in 1917, the Saadian Tombs preserve intricate Carrara marble, Muqarnas vaulting and the resting places of Sultan Ahmad al-Mansur's dynasty. Their intimate scale makes them one of Marrakech's most atmospheric heritage stops.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/marrakech/saadian-tombs-1.jpg", "/images/destinations/marrakech/saadian-tombs-2.jpg", "/images/destinations/marrakech/saadian-tombs-3.jpg"]
      },
      {
        title: "Gueliz & Hivernage",
        localName: "Gueliz w Hivernage",
        description: "Beyond the medina, Gueliz and Hivernage reveal Art Deco avenues, contemporary galleries, rooftop dining and the city's modern pulse. Ideal for travellers seeking Marrakech's 20th-century layer beside its medieval core.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/marrakech/gueliz-and-hivernage-1.jpg", "/images/destinations/marrakech/gueliz-and-hivernage-2.jpg", "/images/destinations/marrakech/gueliz-and-hivernage-3.jpg"]
      },
    ]
  },
  {
    slug: "fes",
    name: "Fes",
    region: "Imperial Cities",
    eyebrow: "The Spiritual Capital",
    intro: "Fes el-Bali remains one of the world's largest car-free medieval cities-a dense, scholarly medina of madrasas, foundouks and craft guilds.",
    landmarks: [
      {
        title: "Fes el-Bali",
        localName: "Fes l-Bali",
        description: "Nine thousand lanes form a living medieval organism: tanneries, copper workshops, spice corridors and hidden riads. A historian guide transforms Fes el-Bali from maze into narrative of Marinid scholarship and Maghrebi urban genius.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/fes/fes-el-bali-1.jpg", "/images/destinations/fes/fes-el-bali-2.jpg", "/images/destinations/fes/fes-el-bali-3.jpg"]
      },
      {
        title: "University of al-Qarawiyyin",
        localName: "Jami3at l-Qarawiyyin",
        description: "Founded in 859 by Fatima al-Fihri, al-Qarawiyyin is often cited among the world's oldest continually operating universities. Its mosque-library complex embodies Fes's identity as Morocco's intellectual and spiritual heart.",
        suggestedDuration: "1 Hour (exterior & surrounding lanes)",
        images: ["/images/destinations/fes/university-of-al-qarawiyyin-1.jpg", "/images/destinations/fes/university-of-al-qarawiyyin-2.jpg", "/images/destinations/fes/university-of-al-qarawiyyin-3.jpg"]
      },
      {
        title: "Chouara Tannery",
        localName: "Debbaghin Chouara",
        description: "The honeycomb dye pits of Chouara are Fes's most iconic craft tableau-traditional leatherworking using natural pigments in a method little changed for centuries. Best viewed from a terrace with context on guild history and ethical shopping.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/fes/chouara-tannery-1.jpg", "/images/destinations/fes/chouara-tannery-2.jpg", "/images/destinations/fes/chouara-tannery-3.jpg"]
      },
      {
        title: "Bab Boujloud",
        localName: "Bab Boujloud",
        description: "The Blue Gate (1913 French-era façade over older foundations) is the ceremonial threshold into Fes el-Bali. Its blue-and-green tilework and twin arches frame the first dramatic glimpse of the medina's density.",
        suggestedDuration: "30 Minutes",
        images: ["/images/destinations/fes/bab-boujloud-1.jpg", "/images/destinations/fes/bab-boujloud-2.jpg", "/images/destinations/fes/bab-boujloud-3.jpg"]
      },
      {
        title: "Bou Inania & Al-Attarine Madrasas",
        localName: "Medersat Bou Inania w Attarine",
        description: "These Marinid theological colleges are among Morocco's finest interiors: carved cedar, onyx fountains and kaleidoscopic zellige. Bou Inania and Al-Attarine reveal why Fes became the architectural school of the Maghreb.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/fes/bou-inania-and-al-attarine-madrasas-1.jpg", "/images/destinations/fes/bou-inania-and-al-attarine-madrasas-2.jpg", "/images/destinations/fes/bou-inania-and-al-attarine-madrasas-3.jpg"]
      },
      {
        title: "Borj Nord",
        localName: "Borj Nord",
        description: "A Saadian fortress overlooking Fes, Borj Nord now houses arms collections and offers panoramic views across the medina's rooftops-ideal for understanding the city's defensive and topographic logic.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/fes/borj-nord-1.jpg", "/images/destinations/fes/borj-nord-2.jpg", "/images/destinations/fes/borj-nord-3.jpg"]
      },
    ]
  },
  {
    slug: "rabat",
    name: "Rabat",
    region: "Imperial Cities",
    eyebrow: "The Royal Capital",
    intro: "Rabat balances Almohad monuments, Andalusian kasbah lanes and contemporary museums along the Bou Regreg estuary.",
    landmarks: [
      {
        title: "Hassan Tower & Mohammed V Mausoleum",
        localName: "Tour Hassan w Dari7 Mohammed V",
        description: "The unfinished Hassan minaret (1195) and the white marble mausoleum of Mohammed V form Morocco's most solemn civic ensemble-Almohad ambition beside modern monarchy, open to respectful visitors of all faiths.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/rabat/hassan-tower-and-mohammed-v-mausoleum-1.jpg", "/images/destinations/rabat/hassan-tower-and-mohammed-v-mausoleum-2.jpg", "/images/destinations/rabat/hassan-tower-and-mohammed-v-mausoleum-3.jpg"]
      },
      {
        title: "Kasbah of the Udayas",
        localName: "Qasbat l-Wdaya",
        description: "White-and-blue Andalusian lanes, ocean ramparts and a serene Andalusian garden make the Udayas Rabat's most photogenic historic quarter. Sunset mint tea above the Atlantic is a classic ritual.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/rabat/kasbah-of-the-udayas-1.jpg", "/images/destinations/rabat/kasbah-of-the-udayas-2.jpg", "/images/destinations/rabat/kasbah-of-the-udayas-3.jpg"]
      },
      {
        title: "Old Medina & Chellah",
        localName: "Medina w Chellah",
        description: "Rabat's compact medina pairs with Chellah's Roman-Merinid ruins, where storks nest among broken arches. Together they span two millennia of settlement on the Bou Regreg.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/rabat/old-medina-and-chellah-1.jpg", "/images/destinations/rabat/old-medina-and-chellah-2.jpg", "/images/destinations/rabat/old-medina-and-chellah-3.jpg"]
      },
      {
        title: "Mohammed VI Museum",
        localName: "Mat7af Mohammed VI",
        description: "Morocco's flagship modern art museum presents Maghrebi and international collections in a contemporary architectural statement-essential for travellers seeking Rabat beyond heritage alone.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/rabat/mohammed-vi-museum-1.jpg", "/images/destinations/rabat/mohammed-vi-museum-2.jpg", "/images/destinations/rabat/mohammed-vi-museum-3.jpg"]
      },
      {
        title: "Hay Riad & Bouregreg Marina",
        localName: "Hay Riad w Marina Bou Regreg",
        description: "Hay Riad's diplomatic gardens and the Bouregreg Marina's waterfront promenades show 21st-century Rabat: calm, designed and estuary-facing-ideal evening contrast to the historic core.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/rabat/hay-riad-and-bouregreg-marina-1.jpg", "/images/destinations/rabat/hay-riad-and-bouregreg-marina-2.jpg", "/images/destinations/rabat/hay-riad-and-bouregreg-marina-3.jpg"]
      },
    ]
  },
  {
    slug: "meknes",
    name: "Meknès",
    region: "Imperial Cities",
    eyebrow: "The Versailles of Morocco",
    intro: "Meknès rose under Moulay Ismail into a fortified imperial city of monumental gates, granaries and sacred hinterlands including Volubilis.",
    landmarks: [
      {
        title: "Bab Mansour",
        localName: "Bab Mansour",
        description: "Often ranked among Morocco's finest gates, Bab Mansour's marble columns and zellige panels announce Ismailian power at El Hedim Square-a theatrical entrance to imperial Meknès.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/meknes/bab-mansour-1.jpg", "/images/destinations/meknes/bab-mansour-2.jpg", "/images/destinations/meknes/bab-mansour-3.jpg"]
      },
      {
        title: "El Hedim Square",
        localName: "Sa7at l-Hedim",
        description: "Meknès's public theatre of daily life-food stalls, storytellers and gate vistas-offers a calmer cousin to Marrakech's Jemaa el-Fna with equal atmospheric charge at twilight.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/meknes/el-hedim-square-1.jpg", "/images/destinations/meknes/el-hedim-square-2.jpg", "/images/destinations/meknes/el-hedim-square-3.jpg"]
      },
      {
        title: "Mausoleum of Moulay Ismail",
        localName: "Dari7 Moulay Ismail",
        description: "The resting place of Morocco's most formidable Alaouite sultan welcomes visitors into serene courtyards of zellige and carved plaster-an intimate encounter with imperial piety.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/meknes/mausoleum-of-moulay-ismail-1.jpg", "/images/destinations/meknes/mausoleum-of-moulay-ismail-2.jpg", "/images/destinations/meknes/mausoleum-of-moulay-ismail-3.jpg"]
      },
      {
        title: "Heri Souani",
        localName: "Hri Souani",
        description: "Vast royal granaries and stables reveal Ismailian logistics on a staggering scale-cool vaulted chambers designed to feed and mount an empire.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/meknes/heri-souani-1.jpg", "/images/destinations/meknes/heri-souani-2.jpg", "/images/destinations/meknes/heri-souani-3.jpg"]
      },
      {
        title: "Habs Qara Prison",
        localName: "Habs Qara",
        description: "An underground labyrinth of legend and stone, Habs Qara evokes the darker mythology of Moulay Ismail's reign and remains one of Meknès's most atmospheric subterranean sites.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/meknes/habs-qara-prison-1.jpg", "/images/destinations/meknes/habs-qara-prison-2.jpg", "/images/destinations/meknes/habs-qara-prison-3.jpg"]
      },
      {
        title: "Volubilis (Oualili)",
        localName: "Oualili",
        description: "Morocco's finest Roman ruins sit among olive hills outside Meknès: mosaic floors, Capitoline temple fragments and African-Roman urban planning under open sky. UNESCO-listed and unmissable.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/meknes/volubilis-oualili-1.jpg", "/images/destinations/meknes/volubilis-oualili-2.jpg", "/images/destinations/meknes/volubilis-oualili-3.jpg"]
      },
      {
        title: "Moulay Idriss Zerhoun",
        localName: "Moulay Driss Zerhoun",
        description: "Morocco's holiest town climbs a volcanic spur above Volubilis. Non-Muslims explore terraces and lanes around the shrine of Idris I-foundational to Morocco's Islamic identity.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/meknes/moulay-idriss-zerhoun-1.jpg", "/images/destinations/meknes/moulay-idriss-zerhoun-2.jpg", "/images/destinations/meknes/moulay-idriss-zerhoun-3.jpg"]
      },
    ]
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    region: "Atlantic Coast",
    eyebrow: "The Economic Capital",
    intro: "Casablanca is Morocco's modernist Atlantic metropolis-Art Deco downtown, ocean corniche and the monumental Hassan II Mosque.",
    landmarks: [
      {
        title: "Hassan II Mosque",
        localName: "Masjid Hassan II",
        description: "Rising above the Atlantic on a partially over-water platform, Hassan II Mosque combines traditional Maghrebi craftsmanship with late-20th-century engineering. Its minaret and glass floor above the ocean make it Morocco's most dramatic contemporary sacred landmark.",
        suggestedDuration: "1.5 Hours (guided visit)",
        images: ["/images/destinations/casablanca/hassan-ii-mosque-1.jpg", "/images/destinations/casablanca/hassan-ii-mosque-2.jpg", "/images/destinations/casablanca/hassan-ii-mosque-3.jpg"]
      },
      {
        title: "Ain Diab Corniche",
        localName: "Corniche Ain Diab",
        description: "Casablanca's oceanfront boulevard of beaches, cafés and evening promenades-the city's social shoreline where Atlantic wind meets urban leisure.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/casablanca/ain-diab-corniche-1.jpg", "/images/destinations/casablanca/ain-diab-corniche-2.jpg", "/images/destinations/casablanca/ain-diab-corniche-3.jpg"]
      },
      {
        title: "Habous Quarter",
        localName: "l-Habous",
        description: "A 1920s French-Moroccan planned medina of arcades, bookshops and pastry stalls-Habous offers Neo-Mauresque charm without the intensity of older imperial medinas.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/casablanca/habous-quarter-1.jpg", "/images/destinations/casablanca/habous-quarter-2.jpg", "/images/destinations/casablanca/habous-quarter-3.jpg"]
      },
      {
        title: "United Nations Square",
        localName: "Sa7at l-Umam l-Muttahida",
        description: "The historic heart of downtown Casablanca, framed by clock towers and colonial-era façades-gateway to Art Deco walks and the old medina fringe.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/casablanca/united-nations-square-1.jpg", "/images/destinations/casablanca/united-nations-square-2.jpg", "/images/destinations/casablanca/united-nations-square-3.jpg"]
      },
      {
        title: "Casablanca Old Medina",
        localName: "Medina Casa",
        description: "Often overlooked, Casa's old medina retains fishing-quarter grit, whitewashed lanes and local markets-a raw counterpoint to the polished Hassan II esplanade.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/casablanca/casablanca-old-medina-1.jpg", "/images/destinations/casablanca/casablanca-old-medina-2.jpg", "/images/destinations/casablanca/casablanca-old-medina-3.jpg"]
      },
    ]
  },
  {
    slug: "agadir",
    name: "Agadir",
    region: "Atlantic Coast",
    eyebrow: "The Southern Atlantic Resort",
    intro: "Rebuilt after the 1960 earthquake, Agadir is Morocco's sun-drenched beach capital with kasbah ruins, vast souks and easy day trips inland.",
    landmarks: [
      {
        title: "Agadir Oufella",
        localName: "Agadir Oufella",
        description: "The hilltop kasbah ruins offer panoramic views over Agadir Bay. The site commemorates the pre-1960 city and remains the classic sunset overlook.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/agadir/agadir-oufella-1.jpg", "/images/destinations/agadir/agadir-oufella-2.jpg", "/images/destinations/agadir/agadir-oufella-3.jpg"]
      },
      {
        title: "Main Beach & Corniche",
        localName: "Plage Agadir",
        description: "Kilometres of Atlantic sand, promenade cafés and year-round swimming culture define Agadir's main beach-Morocco's most accessible resort shoreline.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/agadir/main-beach-and-corniche-1.jpg", "/images/destinations/agadir/main-beach-and-corniche-2.jpg", "/images/destinations/agadir/main-beach-and-corniche-3.jpg"]
      },
      {
        title: "Souk El Had",
        localName: "Souq El Had",
        description: "One of Morocco's largest covered markets: produce, textiles, spices and everyday Souss life. A sensory immersion best explored with a local companion.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/agadir/souk-el-had-1.jpg", "/images/destinations/agadir/souk-el-had-2.jpg", "/images/destinations/agadir/souk-el-had-3.jpg"]
      },
      {
        title: "Crocoparc",
        localName: "Crocoparc",
        description: "A landscaped botanical and crocodile park outside Agadir-popular with families and a green pause from pure beach days.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/agadir/crocoparc-1.jpg", "/images/destinations/agadir/crocoparc-2.jpg", "/images/destinations/agadir/crocoparc-3.jpg"]
      },
      {
        title: "Agadir Marina",
        localName: "Marina Agadir",
        description: "Yachts, boutiques and waterfront dining create Agadir's polished marina district-ideal for evening strolls after beach hours.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/agadir/agadir-marina-1.jpg", "/images/destinations/agadir/agadir-marina-2.jpg", "/images/destinations/agadir/agadir-marina-3.jpg"]
      },
    ]
  },
  {
    slug: "essaouira",
    name: "Essaouira",
    region: "Atlantic Coast",
    eyebrow: "The Wind City",
    intro: "UNESCO-listed Essaouira blends Portuguese-era ramparts, Gnawa music heritage and Atlantic beaches in a breezy white-and-blue medina.",
    landmarks: [
      {
        title: "Sqala of the Kasbah",
        localName: "Sqala l-Qasba",
        description: "Cannons along the ocean ramparts define Essaouira's cinematic skyline. The Sqala is the classic walk for Atlantic spray, photography and 18th-century fortification lore.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/essaouira/sqala-of-the-kasbah-1.jpg", "/images/destinations/essaouira/sqala-of-the-kasbah-2.jpg", "/images/destinations/essaouira/sqala-of-the-kasbah-3.jpg"]
      },
      {
        title: "Essaouira Old Medina",
        localName: "Medina Souira",
        description: "A grid of wood workshops, galleries and whitewashed lanes designed under Orson Welles-era fame and earlier Alaouite planning-compact, walkable and endlessly photogenic.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/essaouira/essaouira-old-medina-1.jpg", "/images/destinations/essaouira/essaouira-old-medina-2.jpg", "/images/destinations/essaouira/essaouira-old-medina-3.jpg"]
      },
      {
        title: "Mellah Quarter",
        localName: "l-Mellah",
        description: "Essaouira's historic Jewish quarter preserves traces of a once-thriving community central to the city's trading identity-best understood with guided cultural context.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/essaouira/mellah-quarter-1.jpg", "/images/destinations/essaouira/mellah-quarter-2.jpg", "/images/destinations/essaouira/mellah-quarter-3.jpg"]
      },
      {
        title: "Essaouira Main Beach",
        localName: "Plage Souira",
        description: "Wide Atlantic sands favoured by kite-surfers and sunset walkers, with Mogador island floating offshore. Bring wind layers-Essaouira earns its nickname.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/essaouira/essaouira-main-beach-1.jpg", "/images/destinations/essaouira/essaouira-main-beach-2.jpg", "/images/destinations/essaouira/essaouira-main-beach-3.jpg"]
      },
      {
        title: "Île de Mogador",
        localName: "Jazirat Mogador",
        description: "The protected Purple Islands offshore hold Phoenician and wildlife history. Boat approaches (season and permits permitting) reveal Essaouira's maritime mythos.",
        suggestedDuration: "Half Day (excursion)",
        images: ["/images/destinations/essaouira/ile-de-mogador-1.jpg", "/images/destinations/essaouira/ile-de-mogador-2.jpg", "/images/destinations/essaouira/ile-de-mogador-3.jpg"]
      },
    ]
  },
  {
    slug: "tanger",
    name: "Tanger",
    region: "Atlantic Coast",
    eyebrow: "Gateway of the Strait",
    intro: "Tangier faces Europe across the Strait of Gibraltar-a city of kasbahs, cafés, caves and maritime myth.",
    landmarks: [
      {
        title: "Kasbah & Museum",
        localName: "Qasbat Tanja",
        description: "The hilltop kasbah museum occupies a former sultan's palace with collections spanning archaeology to ethnographic arts, plus terraces overlooking the Strait.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/tanger/kasbah-and-museum-1.jpg", "/images/destinations/tanger/kasbah-and-museum-2.jpg", "/images/destinations/tanger/kasbah-and-museum-3.jpg"]
      },
      {
        title: "Caves of Hercules",
        localName: "Mgharet Hercules",
        description: "Legendary sea caves west of Tangier open to the Atlantic in a silhouette often compared to Africa's map-mythology, geology and sunset photography combined.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tanger/caves-of-hercules-1.jpg", "/images/destinations/tanger/caves-of-hercules-2.jpg", "/images/destinations/tanger/caves-of-hercules-3.jpg"]
      },
      {
        title: "Cap Spartel",
        localName: "Ras Spartel",
        description: "Where the Atlantic meets the Mediterranean in popular geography, Cap Spartel's lighthouse headland offers dramatic coastal walks and café views.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tanger/cap-spartel-1.jpg", "/images/destinations/tanger/cap-spartel-2.jpg", "/images/destinations/tanger/cap-spartel-3.jpg"]
      },
      {
        title: "Grand & Petit Socco",
        localName: "Socco Kabir w Sghir",
        description: "Tangier's legendary squares link medina energy with café culture immortalised by writers and artists of the Interzone era.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/tanger/grand-and-petit-socco-1.jpg", "/images/destinations/tanger/grand-and-petit-socco-2.jpg", "/images/destinations/tanger/grand-and-petit-socco-3.jpg"]
      },
      {
        title: "Tanja Marina Bay",
        localName: "Marina Tanja",
        description: "The regenerated waterfront of modern Tangier-marinas, promenades and contemporary dining facing the Strait's shipping lanes.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tanger/tanja-marina-bay-1.jpg", "/images/destinations/tanger/tanja-marina-bay-2.jpg", "/images/destinations/tanger/tanja-marina-bay-3.jpg"]
      },
    ]
  },
  {
    slug: "asilah",
    name: "Asilah",
    region: "Atlantic Coast",
    eyebrow: "The Artists' Medina",
    intro: "Asilah's white ramparts and mural culture create one of Morocco's most refined small Atlantic towns.",
    landmarks: [
      {
        title: "Medina Ramparts",
        localName: "Swar l-Medina",
        description: "Portuguese-era walls wrap a luminous white medina above crashing Atlantic swells-Asilah's defining silhouette at golden hour.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/asilah/medina-ramparts-1.jpg", "/images/destinations/asilah/medina-ramparts-2.jpg", "/images/destinations/asilah/medina-ramparts-3.jpg"]
      },
      {
        title: "Murals & Art Blocks",
        localName: "Jidariyat Asilah",
        description: "The annual arts festival leaves murals across medina walls, turning lanes into an open-air gallery of contemporary Moroccan and international work.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/asilah/murals-and-art-blocks-1.jpg", "/images/destinations/asilah/murals-and-art-blocks-2.jpg", "/images/destinations/asilah/murals-and-art-blocks-3.jpg"]
      },
      {
        title: "Raissouni Palace",
        localName: "Qsar Raissouni",
        description: "A restored early-20th-century palace linked to the legendary Raisuni, now part of Asilah's cultural circuit of interiors and courtyards.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/asilah/raissouni-palace-1.jpg", "/images/destinations/asilah/raissouni-palace-2.jpg", "/images/destinations/asilah/raissouni-palace-3.jpg"]
      },
      {
        title: "Paradise Beach",
        localName: "Plage Paradise",
        description: "A celebrated stretch of sand south of town-best reached by local transport or seasonal boats for swimming and long Atlantic walks.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/asilah/paradise-beach-1.jpg", "/images/destinations/asilah/paradise-beach-2.jpg", "/images/destinations/asilah/paradise-beach-3.jpg"]
      },
    ]
  },
  {
    slug: "el-jadida",
    name: "El Jadida",
    region: "Atlantic Coast",
    eyebrow: "The Portuguese City",
    intro: "UNESCO-listed El Jadida preserves Portugal's Mazagan fortress, cistern and Atlantic resort beaches.",
    landmarks: [
      {
        title: "Portuguese City (Cité Portugaise)",
        localName: "Mdina l-Bortuqiz",
        description: "Ramparts, churches and Portuguese urban planning survive inside Mazagan's walls-a rare European fortress-city layer on Morocco's Atlantic coast.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/el-jadida/portuguese-city-cite-portugaise-1.jpg", "/images/destinations/el-jadida/portuguese-city-cite-portugaise-2.jpg", "/images/destinations/el-jadida/portuguese-city-cite-portugaise-3.jpg"]
      },
      {
        title: "Portuguese Cistern",
        localName: "Sahrij l-Bortuqiz",
        description: "An underground vaulted cistern made famous by Orson Welles' Othello-shafts of light on reflective water create one of Morocco's most cinematic interiors.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/el-jadida/portuguese-cistern-1.jpg", "/images/destinations/el-jadida/portuguese-cistern-2.jpg", "/images/destinations/el-jadida/portuguese-cistern-3.jpg"]
      },
      {
        title: "Sidi Bouzid Beach",
        localName: "Plage Sidi Bouzid",
        description: "A popular Atlantic beach near El Jadida for surfing, seafood and weekend energy-an easy coastal extension to the Portuguese core.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/el-jadida/sidi-bouzid-beach-1.jpg", "/images/destinations/el-jadida/sidi-bouzid-beach-2.jpg", "/images/destinations/el-jadida/sidi-bouzid-beach-3.jpg"]
      },
    ]
  },
  {
    slug: "oualidia",
    name: "Oualidia",
    region: "Atlantic Coast",
    eyebrow: "The Oyster Lagoon",
    intro: "Oualidia is Morocco's refined lagoon town-oysters, birdlife and a sheltered Atlantic crescent.",
    landmarks: [
      {
        title: "Oualidia Lagoon & Oyster Farms",
        localName: "B7ayrat Oualidia",
        description: "A calm lagoon famous for oyster farming and kite-friendly waters. Lunch overlooking the beds is the classic Oualidia ritual for food-focused travellers.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/oualidia/oualidia-lagoon-and-oyster-farms-1.jpg", "/images/destinations/oualidia/oualidia-lagoon-and-oyster-farms-2.jpg", "/images/destinations/oualidia/oualidia-lagoon-and-oyster-farms-3.jpg"]
      },
      {
        title: "Historic Royal Palace (exterior)",
        localName: "Qsar Malaki",
        description: "The cliffside royal residence overlooks the lagoon-admired from viewpoints as a symbol of Oualidia's long association with Morocco's monarchy and quiet luxury.",
        suggestedDuration: "45 Minutes (viewpoints)",
        images: ["/images/destinations/oualidia/historic-royal-palace-exterior-1.jpg", "/images/destinations/oualidia/historic-royal-palace-exterior-2.jpg", "/images/destinations/oualidia/historic-royal-palace-exterior-3.jpg"]
      },
    ]
  },
  {
    slug: "safi",
    name: "Safi",
    region: "Atlantic Coast",
    eyebrow: "City of Potters",
    intro: "Safi combines a Portuguese sea castle, pottery quarters and working Atlantic harbour energy.",
    landmarks: [
      {
        title: "Château de la Mer",
        localName: "Qal3at l-B7ar",
        description: "The Portuguese sea castle anchors Safi's harbour history-stone ramparts facing Atlantic swells and fishing fleets.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/safi/chateau-de-la-mer-1.jpg", "/images/destinations/safi/chateau-de-la-mer-2.jpg", "/images/destinations/safi/chateau-de-la-mer-3.jpg"]
      },
      {
        title: "Potters' Quarter (Hay l-Fakhara)",
        localName: "Hay l-Fakhara",
        description: "Safi's ceramic heart: workshops, kilns and blue-and-white pottery traditions that supply markets across Morocco. A must for craft-focused itineraries.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/safi/potters-quarter-hay-l-fakhara-1.jpg", "/images/destinations/safi/potters-quarter-hay-l-fakhara-2.jpg", "/images/destinations/safi/potters-quarter-hay-l-fakhara-3.jpg"]
      },
      {
        title: "Old Medina Walls",
        localName: "Swar l-Medina",
        description: "Walk the medina perimeter for harbour vistas and everyday Atlantic-Moroccan street life beyond resort polish.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/safi/old-medina-walls-1.jpg", "/images/destinations/safi/old-medina-walls-2.jpg", "/images/destinations/safi/old-medina-walls-3.jpg"]
      },
    ]
  },
  {
    slug: "dakhla",
    name: "Dakhla",
    region: "Atlantic Coast",
    eyebrow: "Sahara Meets Ocean",
    intro: "Dakhla's lagoon peninsula offers kite paradise, desert dunes and remote Atlantic wilderness in Morocco's far south.",
    landmarks: [
      {
        title: "White Dune (Dune Blanche)",
        localName: "Dune Blanche",
        description: "A sculptural white sand dune rising beside turquoise lagoon water-Dakhla's iconic desert-ocean photograph and a short 4x4 excursion favourite.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/dakhla/white-dune-dune-blanche-1.jpg", "/images/destinations/dakhla/white-dune-dune-blanche-2.jpg", "/images/destinations/dakhla/white-dune-dune-blanche-3.jpg"]
      },
      {
        title: "Dakhla Lagoon",
        localName: "B7ayrat Dakhla",
        description: "One of the world's great kite and windsurf lagoons: flat water, consistent trade winds and a horizon where Sahara haze meets Atlantic blue.",
        suggestedDuration: "Full Day",
        images: ["/images/destinations/dakhla/dakhla-lagoon-1.jpg", "/images/destinations/dakhla/dakhla-lagoon-2.jpg", "/images/destinations/dakhla/dakhla-lagoon-3.jpg"]
      },
      {
        title: "Dragon Island",
        localName: "Jazirat Dragon",
        description: "A rocky outcrop in the lagoon ecosystem popular for boat visits, birdlife and remote coastal geology.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/dakhla/dragon-island-1.jpg", "/images/destinations/dakhla/dragon-island-2.jpg", "/images/destinations/dakhla/dragon-island-3.jpg"]
      },
      {
        title: "Imlili Sebkha",
        localName: "Sebkhat Imlili",
        description: "A remarkable inland salt depression with freshwater lenses-geological oddity and 4x4 adventure deep in Dakhla's desert hinterland.",
        suggestedDuration: "Full Day (expedition)",
        images: ["/images/destinations/dakhla/imlili-sebkha-1.jpg", "/images/destinations/dakhla/imlili-sebkha-2.jpg", "/images/destinations/dakhla/imlili-sebkha-3.jpg"]
      },
    ]
  },
  {
    slug: "chefchaouen",
    name: "Chefchaouen",
    region: "Mediterranean & Blue North",
    eyebrow: "The Blue Pearl",
    intro: "Chefchaouen's indigo medina and Rif mountain setting create Morocco's most dreamlike small city.",
    landmarks: [
      {
        title: "Outa el-Hammam Square",
        localName: "Sa7at Outa el-Hammam",
        description: "The medina's social heart beneath the kasbah walls-cafés, mountain air and the classic first orientation point for every Chefchaouen wander.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/chefchaouen/outa-el-hammam-square-1.jpg", "/images/destinations/chefchaouen/outa-el-hammam-square-2.jpg", "/images/destinations/chefchaouen/outa-el-hammam-square-3.jpg"]
      },
      {
        title: "Chefchaouen Kasbah",
        localName: "Qasbat Chaouen",
        description: "Gardens, museum rooms and rampart views over blue lanes make the kasbah the town's historic nucleus-Andalusian foundations in a Rif setting.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/chefchaouen/chefchaouen-kasbah-1.jpg", "/images/destinations/chefchaouen/chefchaouen-kasbah-2.jpg", "/images/destinations/chefchaouen/chefchaouen-kasbah-3.jpg"]
      },
      {
        title: "Ras El Maa",
        localName: "Ras El Maa",
        description: "A mountain spring cascade at the medina's edge where locals wash clothes and travellers cool their hands-simple, photogenic and deeply local.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/chefchaouen/ras-el-maa-1.jpg", "/images/destinations/chefchaouen/ras-el-maa-2.jpg", "/images/destinations/chefchaouen/ras-el-maa-3.jpg"]
      },
      {
        title: "Spanish Mosque",
        localName: "Masjid Espanya",
        description: "A hillside viewpoint mosque offering the classic panorama of Chefchaouen's blue bowl at sunset-short hike, maximum reward.",
        suggestedDuration: "1.5 Hours (round trip)",
        images: ["/images/destinations/chefchaouen/spanish-mosque-1.jpg", "/images/destinations/chefchaouen/spanish-mosque-2.jpg", "/images/destinations/chefchaouen/spanish-mosque-3.jpg"]
      },
      {
        title: "Akchour Waterfalls",
        localName: "Shlalaton Akchour",
        description: "Riverside trails in Talassemtane National Park lead to God's Bridge and Akchour cascades-essential Rif nature day trip from Chefchaouen.",
        suggestedDuration: "Full Day",
        images: ["/images/destinations/chefchaouen/akchour-waterfalls-1.jpg", "/images/destinations/chefchaouen/akchour-waterfalls-2.jpg", "/images/destinations/chefchaouen/akchour-waterfalls-3.jpg"]
      },
    ]
  },
  {
    slug: "tetouan",
    name: "Tétouan",
    region: "Mediterranean & Blue North",
    eyebrow: "The White Dove",
    intro: "UNESCO-listed Tétouan preserves Andalusian medina craftsmanship between the Rif and the Mediterranean.",
    landmarks: [
      {
        title: "Old Medina (Andalusian Architecture)",
        localName: "Medina Titwan",
        description: "Whitewashed lanes, artisan guilds and Andalusian spatial logic distinguish Tétouan's UNESCO medina-often quieter and more intimate than Fes or Marrakech.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/tetouan/old-medina-andalusian-architecture-1.jpg", "/images/destinations/tetouan/old-medina-andalusian-architecture-2.jpg", "/images/destinations/tetouan/old-medina-andalusian-architecture-3.jpg"]
      },
      {
        title: "Old Mellah",
        localName: "l-Mellah",
        description: "The historic Jewish quarter adds another layer to Tétouan's plural heritage-best explored with cultural context on Andalusian migrations.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/tetouan/old-mellah-1.jpg", "/images/destinations/tetouan/old-mellah-2.jpg", "/images/destinations/tetouan/old-mellah-3.jpg"]
      },
      {
        title: "Royal Palace Gates",
        localName: "Bab l-Qsar Malaki",
        description: "Ornate palace gates on Feddan Square announce Tétouan's royal and ceremonial role in northern Morocco-prime photography and orientation point.",
        suggestedDuration: "30 Minutes",
        images: ["/images/destinations/tetouan/royal-palace-gates-1.jpg", "/images/destinations/tetouan/royal-palace-gates-2.jpg", "/images/destinations/tetouan/royal-palace-gates-3.jpg"]
      },
      {
        title: "Archaeological Museum",
        localName: "Mat7af Athari",
        description: "Collections spanning Roman Lixus to Islamic eras illuminate northern Morocco's deep timeline beyond the medina streets.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tetouan/archaeological-museum-1.jpg", "/images/destinations/tetouan/archaeological-museum-2.jpg", "/images/destinations/tetouan/archaeological-museum-3.jpg"]
      },
    ]
  },
  {
    slug: "al-hoceima",
    name: "Al Hoceima",
    region: "Mediterranean & Blue North",
    eyebrow: "Mediterranean Cliffs",
    intro: "Al Hoceima pairs Rif mountain drama with some of Morocco's finest Mediterranean beaches and a national park coastline.",
    landmarks: [
      {
        title: "Quemado Beach",
        localName: "Plage Quemado",
        description: "The city's signature cove beneath cliffs-summer swimming, cafés and Mediterranean colour after Rif road journeys.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/al-hoceima/quemado-beach-1.jpg", "/images/destinations/al-hoceima/quemado-beach-2.jpg", "/images/destinations/al-hoceima/quemado-beach-3.jpg"]
      },
      {
        title: "Tala Youssef Beach",
        localName: "Plage Tala Youssef",
        description: "A scenic coastal stretch favoured for clearer water and quieter swimming near Al Hoceima.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/al-hoceima/tala-youssef-beach-1.jpg", "/images/destinations/al-hoceima/tala-youssef-beach-2.jpg", "/images/destinations/al-hoceima/tala-youssef-beach-3.jpg"]
      },
      {
        title: "Al Hoceima National Park",
        localName: "Park Watani Al Hoceima",
        description: "Cliffs, marine biodiversity and hiking trails protect one of Morocco's most important Mediterranean ecosystems-ideal for nature-first itineraries.",
        suggestedDuration: "Full Day",
        images: ["/images/destinations/al-hoceima/al-hoceima-national-park-1.jpg", "/images/destinations/al-hoceima/al-hoceima-national-park-2.jpg", "/images/destinations/al-hoceima/al-hoceima-national-park-3.jpg"]
      },
    ]
  },
  {
    slug: "saidia",
    name: "Saïdia",
    region: "Mediterranean & Blue North",
    eyebrow: "The Blue Pearl of the East",
    intro: "Saïdia offers Morocco's longest Mediterranean beach front, marina leisure and wetland birdlife at the Moulouya estuary.",
    landmarks: [
      {
        title: "Saïdia 14km Beach Front",
        localName: "Plage Saidia",
        description: "An unbroken ribbon of Mediterranean sand famed as Morocco's longest beach-sunrise walks and summer swimming culture define the resort.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/saidia/saidia-14km-beach-front-1.jpg", "/images/destinations/saidia/saidia-14km-beach-front-2.jpg", "/images/destinations/saidia/saidia-14km-beach-front-3.jpg"]
      },
      {
        title: "Saïdia Marina",
        localName: "Marina Saidia",
        description: "A modern marina complex of promenades and dining-eastern Morocco's contemporary leisure waterfront.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/saidia/saidia-marina-1.jpg", "/images/destinations/saidia/saidia-marina-2.jpg", "/images/destinations/saidia/saidia-marina-3.jpg"]
      },
      {
        title: "Moulouya River Bird Estuary",
        localName: "Masabb Moulouya",
        description: "A vital wetland for migratory birds near the Algerian frontier-binoculars recommended for eco-travellers.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/saidia/moulouya-river-bird-estuary-1.jpg", "/images/destinations/saidia/moulouya-river-bird-estuary-2.jpg", "/images/destinations/saidia/moulouya-river-bird-estuary-3.jpg"]
      },
    ]
  },
  {
    slug: "ouarzazate",
    name: "Ouarzazate",
    region: "Sahara & Southern Oases",
    eyebrow: "Door of the Desert",
    intro: "Ouarzazate is the cinematic gateway to kasbah country, film studios and the road toward Merzouga.",
    landmarks: [
      {
        title: "Ksar Aït Benhaddou",
        localName: "Ksar Ayt Benhaddou",
        description: "UNESCO-listed earthen ksar cascading above the Ounila River-Morocco's most iconic southern citadel and a staple of world cinema locations.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/ouarzazate/ksar-ait-benhaddou-1.jpg", "/images/destinations/ouarzazate/ksar-ait-benhaddou-2.jpg", "/images/destinations/ouarzazate/ksar-ait-benhaddou-3.jpg"]
      },
      {
        title: "Atlas Film Studios",
        localName: "Studios Atlas",
        description: "Hollywood and world-cinema sets rise from the desert scrub-Egyptian temples, Jerusalem walls and kasbah façades used in dozens of productions.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/ouarzazate/atlas-film-studios-1.jpg", "/images/destinations/ouarzazate/atlas-film-studios-2.jpg", "/images/destinations/ouarzazate/atlas-film-studios-3.jpg"]
      },
      {
        title: "Taourirt Kasbah",
        localName: "Qasbat Taourirt",
        description: "A Glaoui-era mudbrick palace complex in Ouarzazate town-labyrinthine corridors and restored chambers illustrating southern power politics.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/ouarzazate/taourirt-kasbah-1.jpg", "/images/destinations/ouarzazate/taourirt-kasbah-2.jpg", "/images/destinations/ouarzazate/taourirt-kasbah-3.jpg"]
      },
      {
        title: "Cinema Museum",
        localName: "Mat7af Cinema",
        description: "Props, posters and production lore celebrate Ouarzazate's identity as Morocco's Hollywood of the desert.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/ouarzazate/cinema-museum-1.jpg", "/images/destinations/ouarzazate/cinema-museum-2.jpg", "/images/destinations/ouarzazate/cinema-museum-3.jpg"]
      },
    ]
  },
  {
    slug: "merzouga",
    name: "Merzouga",
    region: "Sahara & Southern Oases",
    eyebrow: "Erg Chebbi",
    intro: "Merzouga fronts Erg Chebbi's towering dunes-Morocco's classic Sahara stage for camel treks and luxury bivouacs.",
    landmarks: [
      {
        title: "Erg Chebbi Dunes",
        localName: "Raml Erg Chebbi",
        description: "Golden dune ridges rising over 150 metres create Morocco's most photogenic Sahara amphitheatre-sunrise and sunset are non-negotiable.",
        suggestedDuration: "Half Day to Overnight",
        images: ["/images/destinations/merzouga/erg-chebbi-dunes-1.jpg", "/images/destinations/merzouga/erg-chebbi-dunes-2.jpg", "/images/destinations/merzouga/erg-chebbi-dunes-3.jpg"]
      },
      {
        title: "Desert Bivouacs",
        localName: "Bivouac Sahara",
        description: "Luxury and traditional camps beyond the first dune line offer Berber music, star-heavy skies and the essential overnight Sahara ritual.",
        suggestedDuration: "Overnight",
        images: ["/images/destinations/merzouga/desert-bivouacs-1.jpg", "/images/destinations/merzouga/desert-bivouacs-2.jpg", "/images/destinations/merzouga/desert-bivouacs-3.jpg"]
      },
      {
        title: "Khamlia Gnawa Village",
        localName: "Khamlia",
        description: "A village known for Gnawa musical heritage rooted in Sub-Saharan lineages-cultural performances and community visits deepen the desert story beyond dunes alone.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/merzouga/khamlia-gnawa-village-1.jpg", "/images/destinations/merzouga/khamlia-gnawa-village-2.jpg", "/images/destinations/merzouga/khamlia-gnawa-village-3.jpg"]
      },
      {
        title: "Dayet Srij",
        localName: "Dayet Srij",
        description: "A seasonal lake near Merzouga that can attract flamingos after rains-a surprising wetland interlude in the desert basin.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/merzouga/dayet-srij-1.jpg", "/images/destinations/merzouga/dayet-srij-2.jpg", "/images/destinations/merzouga/dayet-srij-3.jpg"]
      },
    ]
  },
  {
    slug: "zagora",
    name: "Zagora & M'hamid",
    region: "Sahara & Southern Oases",
    eyebrow: "Timbuktu Road",
    intro: "Zagora and M'hamid mark the Draa Valley's desert threshold-palm oases, pottery and wild Erg Chigaga dunes.",
    landmarks: [
      {
        title: "Erg Chigaga Wild Dunes",
        localName: "Erg Chigaga",
        description: "Remoter and wilder than Erg Chebbi, Chigaga demands 4x4 approach from M'hamid-vast silence and fewer camps for travellers seeking deeper Sahara.",
        suggestedDuration: "Overnight Expedition",
        images: ["/images/destinations/zagora/erg-chigaga-wild-dunes-1.jpg", "/images/destinations/zagora/erg-chigaga-wild-dunes-2.jpg", "/images/destinations/zagora/erg-chigaga-wild-dunes-3.jpg"]
      },
      {
        title: "Tamegroute Library & Green Pottery",
        localName: "Tamgrout",
        description: "An ancient Quranic library tradition meets distinctive green-glazed pottery workshops-one of the Draa's most rewarding cultural stops.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/zagora/tamegroute-library-and-green-pottery-1.jpg", "/images/destinations/zagora/tamegroute-library-and-green-pottery-2.jpg", "/images/destinations/zagora/tamegroute-library-and-green-pottery-3.jpg"]
      },
      {
        title: "Draa Valley Oases",
        localName: "Wahat Wadi Draa",
        description: "Palm corridors, kasbah silhouettes and mudbrick villages line the Draa-Morocco's longest river valley and a slow-travel paradise.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/zagora/draa-valley-oases-1.jpg", "/images/destinations/zagora/draa-valley-oases-2.jpg", "/images/destinations/zagora/draa-valley-oases-3.jpg"]
      },
    ]
  },
  {
    slug: "tinghir",
    name: "Tinghir & Boumalne",
    region: "Sahara & Southern Oases",
    eyebrow: "Canyon Country",
    intro: "Tinghir and Boumalne Dades open Morocco's great canyon roads-Todgha walls and Dades Monkey Fingers rockscapes.",
    landmarks: [
      {
        title: "Todgha Gorges",
        localName: "Wadi Todgha",
        description: "Sheer limestone corridors rise hundreds of metres above a palm-fed stream-Morocco's premier canyon walk and climbing playground.",
        suggestedDuration: "2-3 Hours",
        images: ["/images/destinations/tinghir/todgha-gorges-1.jpg", "/images/destinations/tinghir/todgha-gorges-2.jpg", "/images/destinations/tinghir/todgha-gorges-3.jpg"]
      },
      {
        title: "Dades Gorges (Monkey Fingers Rock)",
        localName: "Wadi Dades",
        description: "Serpentine roads climb past eroded rock formations nicknamed Monkey Fingers-dramatic geology and kasbah viewpoints define the Dades Valley.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/tinghir/dades-gorges-monkey-fingers-rock-1.jpg", "/images/destinations/tinghir/dades-gorges-monkey-fingers-rock-2.jpg", "/images/destinations/tinghir/dades-gorges-monkey-fingers-rock-3.jpg"]
      },
      {
        title: "Tinghir Palmeraie",
        localName: "Palmeraie Tinghir",
        description: "A lush palm oasis at the foot of the gorges-irrigation channels, village life and green contrast after desert approaches.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tinghir/tinghir-palmeraie-1.jpg", "/images/destinations/tinghir/tinghir-palmeraie-2.jpg", "/images/destinations/tinghir/tinghir-palmeraie-3.jpg"]
      },
    ]
  },
  {
    slug: "imlil",
    name: "Imlil & Toubkal",
    region: "High Atlas",
    eyebrow: "Mountain Trailhead",
    intro: "Imlil is the High Atlas gateway for Toubkal ascents, Berber villages and mule-path culture above Marrakech.",
    landmarks: [
      {
        title: "Imlil Village Basecamp",
        localName: "Imlil",
        description: "The classic trailhead village for Toubkal: mountain lodges, mule trains and walnut-grove walks into Amazigh highland life.",
        suggestedDuration: "Half Day to Overnight",
        images: ["/images/destinations/imlil/imlil-village-basecamp-1.jpg", "/images/destinations/imlil/imlil-village-basecamp-2.jpg", "/images/destinations/imlil/imlil-village-basecamp-3.jpg"]
      },
      {
        title: "Mount Toubkal Basecamp",
        localName: "Toubkal Refuge",
        description: "The high refuge approach is North Africa's most iconic trek corridor-guided ascents reward summit views over the Atlas massif.",
        suggestedDuration: "2-3 Days (trek)",
        images: ["/images/destinations/imlil/mount-toubkal-basecamp-1.jpg", "/images/destinations/imlil/mount-toubkal-basecamp-2.jpg", "/images/destinations/imlil/mount-toubkal-basecamp-3.jpg"]
      },
      {
        title: "Aroumd & High Villages",
        localName: "Aroumd",
        description: "Terraced villages above Imlil offer gentle acclimatisation walks and intimate encounters with Atlas hospitality.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/imlil/aroumd-and-high-villages-1.jpg", "/images/destinations/imlil/aroumd-and-high-villages-2.jpg", "/images/destinations/imlil/aroumd-and-high-villages-3.jpg"]
      },
    ]
  },
  {
    slug: "ifrane",
    name: "Ifrane",
    region: "Alpine Atlas",
    eyebrow: "Little Switzerland",
    intro: "Ifrane's alpine architecture, cedar air and university town calm create Morocco's unexpected European highland resort.",
    landmarks: [
      {
        title: "Al Akhawayn University",
        localName: "Jami3at Al Akhawayn",
        description: "A prestigious hillside campus that shapes Ifrane's cosmopolitan character-gardens and architecture repay a scenic stroll.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/ifrane/al-akhawayn-university-1.jpg", "/images/destinations/ifrane/al-akhawayn-university-2.jpg", "/images/destinations/ifrane/al-akhawayn-university-3.jpg"]
      },
      {
        title: "Lion of Ifrane",
        localName: "Sba3 Ifrane",
        description: "The stone lion statue is the town's playful landmark and meeting point amid chalet-style streets.",
        suggestedDuration: "30 Minutes",
        images: ["/images/destinations/ifrane/lion-of-ifrane-1.jpg", "/images/destinations/ifrane/lion-of-ifrane-2.jpg", "/images/destinations/ifrane/lion-of-ifrane-3.jpg"]
      },
      {
        title: "Ain Vittel",
        localName: "Ain Vittel",
        description: "Wooded springs and picnic groves on Ifrane's edge-local favourite for weekend mountain air.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/ifrane/ain-vittel-1.jpg", "/images/destinations/ifrane/ain-vittel-2.jpg", "/images/destinations/ifrane/ain-vittel-3.jpg"]
      },
      {
        title: "Michlifen Ski Resort",
        localName: "Michlifen",
        description: "Seasonal skiing and year-round highland viewpoints near Ifrane-Morocco's accessible Atlas snow playground.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/ifrane/michlifen-ski-resort-1.jpg", "/images/destinations/ifrane/michlifen-ski-resort-2.jpg", "/images/destinations/ifrane/michlifen-ski-resort-3.jpg"]
      },
    ]
  },
  {
    slug: "azrou",
    name: "Azrou",
    region: "Alpine Atlas",
    eyebrow: "Cedar Country",
    intro: "Azrou anchors the Middle Atlas cedar forests and Barbary macaque habitats around Cèdre Gouraud.",
    landmarks: [
      {
        title: "Cedars Forest & Cèdre Gouraud",
        localName: "Ghabat l-Arz",
        description: "Ancient Atlas cedars and Barbary macaques make this forest one of Morocco's essential nature stops between Fes and the south.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/azrou/cedars-forest-and-cedre-gouraud-1.jpg", "/images/destinations/azrou/cedars-forest-and-cedre-gouraud-2.jpg", "/images/destinations/azrou/cedars-forest-and-cedre-gouraud-3.jpg"]
      },
      {
        title: "Azrou Rock",
        localName: "Azrou (l-Hajra)",
        description: "The town takes its name from the large volcanic rock outcrop at its heart-orientation point for markets and mountain roads.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/azrou/azrou-rock-1.jpg", "/images/destinations/azrou/azrou-rock-2.jpg", "/images/destinations/azrou/azrou-rock-3.jpg"]
      },
    ]
  },
  {
    slug: "azilal",
    name: "Bin El Ouidane & Azilal",
    region: "Alpine Atlas",
    eyebrow: "Lakes & Cascades",
    intro: "Azilal province holds Bin El Ouidane's turquoise reservoir, Ouzoud's waterfalls and highland lake country toward Imilchil.",
    landmarks: [
      {
        title: "Bin El Ouidane Dam & Lake",
        localName: "Sadd Bin El Ouidane",
        description: "A vast turquoise reservoir in the Atlas foothills-boat rides, canyon viewpoints and hydroelectric drama south of Beni Mellal.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/azilal/bin-el-ouidane-dam-and-lake-1.jpg", "/images/destinations/azilal/bin-el-ouidane-dam-and-lake-2.jpg", "/images/destinations/azilal/bin-el-ouidane-dam-and-lake-3.jpg"]
      },
      {
        title: "Ouzoud Waterfalls",
        localName: "Shlalaton Ouzoud",
        description: "Morocco's most celebrated cascades plunge amid olive groves and Barbary macaques-rainbow spray and terrace cafés complete the scene.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/azilal/ouzoud-waterfalls-1.jpg", "/images/destinations/azilal/ouzoud-waterfalls-2.jpg", "/images/destinations/azilal/ouzoud-waterfalls-3.jpg"]
      },
      {
        title: "Imi n-Ifri Natural Bridge",
        localName: "Imi n-Ifri",
        description: "A dramatic natural rock bridge and gorge near Demnate-short walks into surprising limestone geology.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/azilal/imi-n-ifri-natural-bridge-1.jpg", "/images/destinations/azilal/imi-n-ifri-natural-bridge-2.jpg", "/images/destinations/azilal/imi-n-ifri-natural-bridge-3.jpg"]
      },
      {
        title: "Imilchil Lakes",
        localName: "B7ayrat Imilchil",
        description: "Highland lakes near Imilchil, legendary for the betrothal festival and stark Atlas beauty-best as a multi-day mountain circuit.",
        suggestedDuration: "Full Day to Overnight",
        images: ["/images/destinations/azilal/imilchil-lakes-1.jpg", "/images/destinations/azilal/imilchil-lakes-2.jpg", "/images/destinations/azilal/imilchil-lakes-3.jpg"]
      },
    ]
  },
];

export const moroccoRegions = Array.from(
  new Set(moroccoData.map((destination) => destination.region))
);

export const getDestinationCoverImage = (destination: MoroccoDestination) =>
  destination.landmarks[0]?.images[0] ?? "";

export type MoroccoDestinationSummary = {
  slug: string;
  name: string;
  region: string;
  eyebrow: string;
  cover: string;
};

export const moroccoDestinationSummaries: MoroccoDestinationSummary[] = moroccoData.map(
  (destination) => ({
    slug: destination.slug,
    name: destination.name,
    region: destination.region,
    eyebrow: destination.eyebrow,
    cover: getDestinationCoverImage(destination)
  })
);

export const getMoroccoDestination = (slug: string) =>
  moroccoData.find((destination) => destination.slug === slug);
