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
    intro: "Marrakech is Morocco's theatrical southern capital, a rose-walled stage where Almohad minarets, Saadian marble and lantern-lit souks still set the rhythm of imperial life. At dusk the ochre ramparts flush gold, drums rise from Jemaa el-Fna, and the scent of cumin, orange blossom and charcoal-grilled meats drifts through the medina. This is a city meant to be felt: you lose yourself in covered markets, then surface onto a rooftop as the Koutoubia's call to prayer unfurls across the palm-fringed skyline.",
    landmarks: [
      {
        title: "Jemaa el-Fna & Souks",
        localName: "Jamaa Lafna w Souq",
        description: "At dusk, Jemaa el-Fna becomes Morocco's greatest open-air theatre: storytellers gathering circles, henna artists tracing palms, orange-juice carts glowing beneath strings of bulbs, and the metallic percussion of copper smiths echoing from the covered souks beyond. UNESCO recognises this square as a Masterpiece of the Oral and Intangible Heritage of Humanity, a living stage rather than a monument to be photographed and left. Your evening should be slow and sensory. Claim a rooftop table as the Koutoubia silhouette darkens, then descend into the spice corridors to crush saffron threads between your fingers, bargain for a hand-beaten lantern, and follow the perfume of sizzling merguez toward a communal food stall. The essential Marrakech immersion is not a checklist; it is letting the medina's heat, noise and colour rewrite your sense of time.",
        suggestedDuration: "3-4 Hours",
        images: ["/images/destinations/marrakech/jemaa-el-fna-and-souks-1.webp", "/images/destinations/marrakech/jemaa-el-fna-and-souks-2.webp", "/images/destinations/marrakech/jemaa-el-fna-and-souks-3.webp"]
      },
      {
        title: "Koutoubia Mosque",
        localName: "Kutubiyya",
        description: "The Koutoubia's rose-stone minaret, completed in the late twelfth century under the Almohads, remains the compass of Marrakech: seventy metres of carved sandstone that later inspired Seville's Giralda and Rabat's Hassan Tower. Non-Muslims admire it from the irrigated gardens, where orange trees, fountains and clipped palms frame one of North Africa's most elegant skylines. Come at golden hour, when the minaret's stone drinks the last light and the call to prayer unfurls across the medina rooftops. Walk the garden paths slowly, photograph the tower's interlocking arches and ceramic bands, then sit on a low wall as swallows cut the dusk. This is not a visit you rush; it is the city's spiritual metronome, the moment Marrakech reveals its imperial geometry against a sky turning from apricot to indigo.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/marrakech/koutoubia-mosque-1.webp", "/images/destinations/marrakech/koutoubia-mosque-2.webp", "/images/destinations/marrakech/koutoubia-mosque-3.webp"]
      },
      {
        title: "Majorelle & Secret Gardens",
        localName: "Jnan Majorelle",
        description: "Yves Saint Laurent's cherished Majorelle Garden is a cubist dream in cobalt, where Jacques Majorelle's 1930s Art Deco atelier rises among bamboo groves, cactus theatres and rare botanical collections gathered from across the Maghreb and beyond. The famous Majorelle blue soaks walls, pergolas and rills until the garden feels like a painting you can walk through. Pair it with the nearby Secret Garden, an Andalusian-Islamic courtyard revived inside the medina walls, for a quieter contrast of citrus shade and the sound of water over tile. Wander slowly, photographing the interplay of electric blue against succulent green, then linger in the Yves Saint Laurent Museum next door. The signature experience is not merely sightseeing; it is letting two of Marrakech's most refined green rooms reset your senses after the souks' intensity.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/marrakech/majorelle-and-secret-gardens-1.webp", "/images/destinations/marrakech/majorelle-and-secret-gardens-2.webp", "/images/destinations/marrakech/majorelle-and-secret-gardens-3.webp"]
      },
      {
        title: "Bahia & El Badi Palaces",
        localName: "Qsar Bahia w Badii",
        description: "The Bahia Palace unfolds in painted cedar ceilings, stained-glass fanlights and zellige courtyards of late-nineteenth-century vizier luxury, a labyrinth commissioned for Si Moussa and completed under Ba Ahmed as a private world of harem apartments and sunken gardens. A short walk away, the ruined El Badi, once the Saadian showcase of Sultan Ahmad al-Mansur, stands as a monumental open-air skeleton of empire, its vast courtyards now nesting storks among broken marble. Together they narrate Marrakech's courtly rise and fall. Move from Bahia's intimate rooms, where you can study carved plaster at arm's length, into El Badi's sun-bleached emptiness and climb the ramparts for a rooftop panorama of the medina. The contrast is the point: silk and silence, then the sublime wreckage of vanished gold.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/marrakech/bahia-and-el-badi-palaces-1.webp", "/images/destinations/marrakech/bahia-and-el-badi-palaces-2.webp", "/images/destinations/marrakech/bahia-and-el-badi-palaces-3.webp"]
      },
      {
        title: "Saadian Tombs",
        localName: "Qbur Saadiyin",
        description: "Sealed and forgotten until their rediscovery in 1917, the Saadian Tombs preserve some of the finest funerary craftsmanship in the Maghreb: Carrara marble columns, muqarnas honeycombs, and cedar ceilings inlaid for Sultan Ahmad al-Mansur's dynasty. The Chamber of the Twelve Columns, where the sultan himself rests, feels almost too intimate for its splendour, a jewel box of zellige and carved plaster reached through a narrow passage beside the Kasbah Mosque. Arrive early, when the courtyards are still cool and the light slants across the graves of princes and royal gardeners. You will move slowly, photographing the interplay of Italian marble and Moroccan tile, then step into the sunlit garden of unmarked tombs. Few Marrakech stops concentrate so much imperial beauty into so small a space, or reward quiet looking so richly.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/marrakech/saadian-tombs-1.webp", "/images/destinations/marrakech/saadian-tombs-2.webp", "/images/destinations/marrakech/saadian-tombs-3.webp"]
      },
      {
        title: "Gueliz & Hivernage",
        localName: "Gueliz w Hivernage",
        description: "Beyond the medina walls, Gueliz and Hivernage reveal Marrakech's twentieth-century layer: Art Deco avenues laid out in the Protectorate years, contemporary galleries, landscaped hotel gardens and a dining culture that runs from rooftop cocktails to refined Moroccan tasting menus. This is where the city's modern pulse lives, in linen-clad terraces, design boutiques and the evening promenade along Mohammed V. Spend a half-day shifting registers. Browse a gallery in Gueliz, sit under jacaranda shade with a coffee, then dress for dinner in Hivernage as the Atlas silhouette darkens to the south. Travellers who only see the souks miss this other Marrakech: cosmopolitan, garden-scented and deliberately unhurried, the place to recover from medieval density with a glass of Moroccan wine and a view of floodlit palms.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/marrakech/gueliz-and-hivernage-1.webp", "/images/destinations/marrakech/gueliz-and-hivernage-2.webp", "/images/destinations/marrakech/gueliz-and-hivernage-3.webp"]
      }
    ]
  },
  {
    slug: "fes",
    name: "Fes",
    region: "Imperial Cities",
    eyebrow: "The Spiritual Capital",
    intro: "Fes el-Bali remains one of the world's largest car-free medieval cities, a dense, scholarly medina of madrasas, foundouks and craft guilds that has shaped Maghrebi thought since the ninth century. In the lanes, donkey trains still squeeze past cedar doors, and the air carries cedar shavings, fresh bread and the mineral tang of the tanneries. To walk Fes is to enter a living manuscript: Marinid colleges glittering with zellige, the call to prayer from al-Qarawiyyin, and artisans who still work as their grandparents did, in copper, leather, silk and clay.",
    landmarks: [
      {
        title: "Fes el-Bali",
        localName: "Fes l-Bali",
        description: "Nine thousand lanes form a living medieval organism: tanneries steaming in the river hollow, copper workshops ringing like forges, spice corridors scented with cumin and orange blossom, and hidden riads whose courtyards open like secret gardens. Fes el-Bali is not a reconstructed heritage park; it is a functioning city of guilds, mosques and neighbourhood fountains, recognised by UNESCO as one of the Islamic world's great urban achievements. Hire a historian guide and the maze becomes a narrative of Marinid scholarship, Andalusian refugees and Maghrebi urban genius. You will step into an active foundouk, watch a coppersmith raise a tray from a single sheet of metal, then sit for mint tea on a rooftop as the medina's satellite dishes and minarets share the same honey-coloured sky. The essential experience is surrender: getting deliberately lost, then finding your way by smell, sound and the slope of the hill.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/fes/fes-el-bali-1.webp", "/images/destinations/fes/fes-el-bali-2.webp", "/images/destinations/fes/fes-el-bali-3.webp"]
      },
      {
        title: "University of al-Qarawiyyin",
        localName: "Jami3at l-Qarawiyyin",
        description: "Founded in 859 by Fatima al-Fihri, a scholarly Tunisian woman whose endowment transformed a neighbourhood mosque into a centre of learning, al-Qarawiyyin is often cited among the world's oldest continually operating universities. Its mosque-library complex still anchors Fes's identity as Morocco's intellectual and spiritual heart, a place where Maliki law, astronomy and Arabic grammar were taught while Europe was still assembling its first universities. Non-Muslims typically admire the sanctuary from surrounding lanes and from the restored library's public rooms, where ancient manuscripts rest in climate-controlled quiet. Walk the perimeter slowly, noticing carved cedar and the green-tiled roofs that mark sacred space. Then sit in a nearby café as students and worshippers pass, and let the gravity of a twelve-century-old idea settle: that knowledge, in Fes, has always been a form of devotion.",
        suggestedDuration: "1 Hour (exterior & surrounding lanes)",
        images: ["/images/destinations/fes/university-of-al-qarawiyyin-1.webp", "/images/destinations/fes/university-of-al-qarawiyyin-2.webp", "/images/destinations/fes/university-of-al-qarawiyyin-3.webp"]
      },
      {
        title: "Chouara Tannery",
        localName: "Debbaghin Chouara",
        description: "The honeycomb dye pits of Chouara are Fes's most iconic craft tableau, a medieval amphitheatre of stone vats where skins are still softened in a mixture of water, limestone and natural pigments, then coloured in sunflower yellows, poppy reds and indigo blues little changed for centuries. The smell is unforgettable, mineral and animal, which is why terrace attendants still offer a sprig of mint to hold to your nose. View the pits from a leather shop balcony, then go deeper with a guide who can explain guild history, the ethics of buying, and how a bag or babouche is finished. The high-intent experience is commissioning a piece and watching the artisan stamp, dye or tool it while you wait, so you leave not with a souvenir but with the memory of a living craft. Photograph the concentric vats at midday, when the colours are most saturated against the whitewashed walls.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/fes/chouara-tannery-1.webp", "/images/destinations/fes/chouara-tannery-2.webp", "/images/destinations/fes/chouara-tannery-3.webp"]
      },
      {
        title: "Bab Boujloud",
        localName: "Bab Boujloud",
        description: "The Blue Gate, a 1913 French-era façade raised over older Almohad foundations, is the ceremonial threshold into Fes el-Bali, its blue-and-green tilework and twin horseshoe arches framing the first dramatic glimpse of the medina's density. Locals still call it the meeting place of the old city: taxis pause, street-food stalls smoke, and the lanes beyond immediately narrow into shadow. Stand in the square and look both ways, blue tiles toward the medina, green toward the palaces, then pass through and let the temperature drop. The essential ritual is simple and luxurious: a glass of fresh orange juice or mint tea at a café facing the gate, watching the human tide, before you commit to the maze. Photographers linger here at dusk, when the zellige catches last light and the minarets of Bou Inania rise just beyond the arch.",
        suggestedDuration: "30 Minutes",
        images: ["/images/destinations/fes/bab-boujloud-1.webp", "/images/destinations/fes/bab-boujloud-2.webp", "/images/destinations/fes/bab-boujloud-3.webp"]
      },
      {
        title: "Bou Inania & Al-Attarine Madrasas",
        localName: "Medersat Bou Inania w Attarine",
        description: "These Marinid theological colleges are among Morocco's finest interiors: carved cedar so dense it looks like lace, onyx and marble fountains, and kaleidoscopic zellige that turns courtyards into jewellery boxes of green, turquoise and gold. Bou Inania, unusually, includes a minaret and remains one of the few religious complexes in Fes that non-Muslims may enter in full; Al-Attarine, tucked beside the spice souk, is smaller, more intimate, and equally exquisite. Together they explain why Fes became the architectural school of the Maghreb. Move from hall to courtyard with your neck craned, tracing Quranic inscriptions and the geometry of tile stars. The signature experience is sitting quietly on a cedar threshold as a guide decodes the symbolism, then stepping back into the spice street, where the scent of cinnamon makes the marble seem even cooler. Allow time; these rooms were designed to slow the mind.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/fes/bou-inania-and-al-attarine-madrasas-1.webp", "/images/destinations/fes/bou-inania-and-al-attarine-madrasas-2.webp", "/images/destinations/fes/bou-inania-and-al-attarine-madrasas-3.webp"]
      },
      {
        title: "Borj Nord",
        localName: "Borj Nord",
        description: "A Saadian fortress raised in the late sixteenth century to watch over a sometimes restless Fes, Borj Nord now occupies a hill north of the medina and houses a museum of arms spanning tribal muskets to royal cannon. The collections matter, but the true luxury is the terrace: a panoramic sweep across Fes el-Bali's packed rooftops, the green pyramidal roofs of the holy shrines, and the pale Middle Atlas on the horizon. Come in late afternoon, when the medina turns the colour of honey and the call to prayer lifts from a hundred minarets at once. Walk the ramparts, then sit with a cold drink and let the city's defensive and topographic logic reveal itself: Fes was never a flat labyrinth, but a bowl of hills, walls and watchtowers. It is the essential wide shot after days spent at alley scale.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/fes/borj-nord-1.webp", "/images/destinations/fes/borj-nord-2.webp", "/images/destinations/fes/borj-nord-3.webp"]
      }
    ]
  },
  {
    slug: "rabat",
    name: "Rabat",
    region: "Imperial Cities",
    eyebrow: "The Royal Capital",
    intro: "Rabat balances Almohad ambition, Andalusian kasbah lanes and contemporary museums along the Bou Regreg estuary, where the Atlantic light turns limestone walls the colour of bone. It is Morocco's most composed capital: royal, coastal and quietly cosmopolitan, with storks nesting on medieval ruins and diplomats walking garden avenues. Travellers come for Hassan Tower and the Udayas, then stay for mint tea above the breakers, medina browsing, and the feeling of a city that has learned to be both historic and unhurried.",
    landmarks: [
      {
        title: "Hassan Tower & Mohammed V Mausoleum",
        localName: "Tour Hassan w Dari7 Mohammed V",
        description: "The unfinished Hassan minaret, begun in 1195 by the Almohad caliph Yaqub al-Mansur, still commands a vast esplanade of broken columns, a cathedral of ambition halted by the ruler's death. Beside it, the white marble mausoleum of Mohammed V, completed in the 1960s, houses the tombs of the king who led independence and of Hassan II, guarded by mounted royal cavalry in white cloaks. Together they form Morocco's most solemn civic ensemble: Almohad geometry beside modern monarchy, open to respectful visitors of all faiths. Time your visit for the changing of the guard, then descend into the mausoleum to watch artisans' descendants of zellige and carved cedar still gleaming under the chandelier. Step back onto the platform as the Bou Regreg glitters below. The experience is ceremonial, cinematic and unexpectedly moving, a lesson in how Morocco stages power as beauty.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/rabat/hassan-tower-and-mohammed-v-mausoleum-1.webp", "/images/destinations/rabat/hassan-tower-and-mohammed-v-mausoleum-2.webp", "/images/destinations/rabat/hassan-tower-and-mohammed-v-mausoleum-3.webp"]
      },
      {
        title: "Kasbah of the Udayas",
        localName: "Qasbat l-Wdaya",
        description: "White-and-blue Andalusian lanes, ocean ramparts and a serene Andalusian garden make the Kasbah of the Udayas Rabat's most photogenic historic quarter, a twelfth-century fortress later coloured by refugees from al-Andalus. You enter through the monumental Almohad gate of Bab Oudaia, then climb into a village of limewashed walls, bougainvillea and doors painted the blue of the sea. The classic ritual is sunset mint tea on a café terrace above the Atlantic, the wind salted, the estuary mouth turning silver. Wander without hurry: photograph the garden's rills and mosaic paths, walk the ramparts as surf detonates below, and lose an hour in the tiny streets that feel more like a coastal village than a capital. This is Rabat at its most sensual, a place to feel limestone under your palm and the ocean on your face.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/rabat/kasbah-of-the-udayas-1.webp", "/images/destinations/rabat/kasbah-of-the-udayas-2.webp", "/images/destinations/rabat/kasbah-of-the-udayas-3.webp"]
      },
      {
        title: "Old Medina & Chellah",
        localName: "Medina w Chellah",
        description: "Rabat's compact medina is a gentle introduction to Moroccan street life: covered markets of olives, textiles and silver, whitewashed lanes, and the everyday theatre of a capital that never became a tourist labyrinth. A short journey south, Chellah's Roman-Merinid ruins occupy a walled garden on the Bou Regreg, where storks nest among broken arches of Sala Colonia and the minaret of a Marinid mosque rises from weeds and wildflowers. Together they span two millennia of settlement. Spend the morning browsing the medina, tasting amlou and fresh bread, then take a quiet afternoon among Chellah's stones, listening to storks clatter their bills. Photographers love the contrast of living market and overgrown necropolis. The high-intent traveller does both in one arc, reading Rabat as a city that has always looked toward the river and the sea.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/rabat/old-medina-and-chellah-1.webp", "/images/destinations/rabat/old-medina-and-chellah-2.webp", "/images/destinations/rabat/old-medina-and-chellah-3.webp"]
      },
      {
        title: "Mohammed VI Museum",
        localName: "Mat7af Mohammed VI",
        description: "Morocco's flagship museum of modern and contemporary art occupies a luminous building of white volumes and cedar screens, presenting Maghrebi and international collections in a setting that feels as considered as a private foundation. It is essential for travellers seeking Rabat beyond heritage alone: paintings, installations and photography that track the country's twentieth-century awakening and its dialogue with Paris, the Sahel and the Arab world. Allow a full, unhurried visit. Move from the permanent rooms into rotating exhibitions, then sit in the café to digest what you have seen. The luxury here is intellectual as much as visual, the pleasure of a capital that collects its own modern story with confidence. Pair the museum with an evening in nearby Agdal or the medina, and Rabat reveals itself as a city of both ruins and living artists.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/rabat/mohammed-vi-museum-1.webp", "/images/destinations/rabat/mohammed-vi-museum-2.webp", "/images/destinations/rabat/mohammed-vi-museum-3.webp"]
      },
      {
        title: "Hay Riad & Bouregreg Marina",
        localName: "Hay Riad w Marina Bou Regreg",
        description: "Hay Riad's diplomatic gardens, villa avenues and calm cafés show twenty-first-century Rabat at its most composed, a leafy district of residences and restaurants far from medina noise. Across the water, the Bouregreg Marina's promenades, bridges and waterfront dining look toward Salé, with the estuary glittering under a wide Atlantic sky. Together they are the ideal evening contrast to the historic core. Walk the marina at blue hour, when the Hassan Tower lights ignite and boats rock in their berths, then sit down to grilled fish or a contemporary Moroccan tasting menu. Travellers who stay only in the kasbah miss this polished, estuary-facing Rabat: designed, unhurried and quietly glamorous, the place to toast the day with a glass of local wine while storks commute home across the river.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/rabat/hay-riad-and-bouregreg-marina-1.webp", "/images/destinations/rabat/hay-riad-and-bouregreg-marina-2.webp", "/images/destinations/rabat/hay-riad-and-bouregreg-marina-3.webp"]
      }
    ]
  },
  {
    slug: "meknes",
    name: "Meknès",
    region: "Imperial Cities",
    eyebrow: "The Versailles of Morocco",
    intro: "Meknès rose under Moulay Ismail into a fortified imperial city of monumental gates, granaries and sacred hinterlands, a southern Versailles of rammed earth and zellige. The pace here is slower than Fes or Marrakech, which is its luxury: you can stand alone before Bab Mansour, then ride out through olive country to Roman Volubilis and the holy town of Moulay Idriss. Meknès is for travellers who want imperial scale without the crush, and who understand that Morocco's most formidable sultan built not only palaces, but a landscape of power.",
    landmarks: [
      {
        title: "Bab Mansour",
        localName: "Bab Mansour",
        description: "Often ranked among Morocco's finest gates, Bab Mansour announces Ismailian power at El Hedim Square with marble columns stripped from Volubilis, panels of zellige, and an inscription that still reads like a boast in carved plaster. Completed in the early eighteenth century for Moulay Ismail, it is a theatrical entrance to imperial Meknès, massive yet jewelled, a door designed to humble ambassadors. Stand in the square at late afternoon, when the gate's tiles catch fire and horse-drawn calèches rattle past. Photograph the interplay of Roman marble and Moroccan mosaic, then step through into the imperial city beyond. The essential experience is not a five-minute snapshot; it is sitting at a café facing the gate with mint tea, watching light move across three centuries of craft, and feeling why Meknès was meant to rival any court in the Maghreb.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/meknes/bab-mansour-1.webp", "/images/destinations/meknes/bab-mansour-2.webp", "/images/destinations/meknes/bab-mansour-3.webp"]
      },
      {
        title: "El Hedim Square",
        localName: "Sa7at l-Hedim",
        description: "Meknès's public theatre of daily life unfolds on El Hedim, a broad square of food stalls, spice pyramids, storytellers and gate vistas that offers a calmer cousin to Marrakech's Jemaa el-Fna with equal atmospheric charge at twilight. The name, the square of debris, remembers the houses cleared to create Ismail's parade ground; today it is where the city breathes. Arrive as the heat drops. Taste grilled brochettes and harira from a stall, watch children chase footballs beneath Bab Mansour, and let a vendor pour mint tea from an impossible height. Musicians sometimes gather, and the smell of cumin and charcoal mixes with evening cool from the Middle Atlas. This is the strategic anchor of any Meknès stay: a place to sit, observe, and understand that imperial cities were always also markets, kitchens and open-air salons.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/meknes/el-hedim-square-1.webp", "/images/destinations/meknes/el-hedim-square-2.webp", "/images/destinations/meknes/el-hedim-square-3.webp"]
      },
      {
        title: "Mausoleum of Moulay Ismail",
        localName: "Dari7 Moulay Ismail",
        description: "The resting place of Morocco's most formidable Alaouite sultan welcomes visitors of many faiths into serene courtyards of zellige, carved plaster and hushed fountains, an intimate encounter with imperial piety after the bombast of his gates. Moulay Ismail, who ruled from Meknès for more than half a century, is remembered for both his iron will and his vast building campaigns; here the mood is unexpectedly tender. Remove your shoes, speak softly, and move from sun-struck courtyard into the tomb chamber, where the play of cedar, marble and coloured glass feels like a private audience. The signature experience is lingering rather than ticking a box: sitting on a carpeted step as light filters through stained glass, then returning to the outer court to photograph the geometry of tile stars. Few Moroccan interiors combine power and stillness so completely.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/meknes/mausoleum-of-moulay-ismail-1.webp", "/images/destinations/meknes/mausoleum-of-moulay-ismail-2.webp", "/images/destinations/meknes/mausoleum-of-moulay-ismail-3.webp"]
      },
      {
        title: "Heri Souani",
        localName: "Hri Souani",
        description: "Vast royal granaries and stables reveal Ismailian logistics on a staggering scale: cool vaulted chambers of rammed earth designed to store grain, water and, by some accounts, to stable thousands of horses for a sultan who thought in empires rather than palaces. Walking Heri Souani is like entering the engine room of Meknès, a place of temperature, echo and shadow rather than ornament. Guides still point out the ventilation shafts and cistern logic that kept stores edible through North African summers. Move slowly through the groves of pillars, photograph the honey-coloured vaults, and imagine the clatter of hooves that once filled these halls. The high-intent visit pairs architecture with story: understanding that Moulay Ismail's Versailles was also a machine for feeding and mounting an army. It is one of Morocco's most atmospheric, least crowded imperial interiors.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/meknes/heri-souani-1.webp", "/images/destinations/meknes/heri-souani-2.webp", "/images/destinations/meknes/heri-souani-3.webp"]
      },
      {
        title: "Habs Qara Prison",
        localName: "Habs Qara",
        description: "An underground labyrinth of legend and stone, Habs Qara evokes the darker mythology of Moulay Ismail's reign: a subterranean prison said to have held Christian captives and political enemies in a windowless maze beneath the imperial city. Whether every tale is literal matters less than the atmosphere. You descend into cool, dim chambers where voices drop and the weight of earth presses overhead, a stark counterpoint to the zellige of the mausoleum. Bring a guide who can separate folklore from fabric, then walk the passages with a hand on the rough walls. The experience is brief, unsettling and unforgettable, the kind of site that gives Meknès its moral complexity. Photographers work with shafts of light from the few openings; everyone else simply feels the temperature fall and the stories rise.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/meknes/habs-qara-prison-1.webp", "/images/destinations/meknes/habs-qara-prison-2.webp", "/images/destinations/meknes/habs-qara-prison-3.webp"]
      },
      {
        title: "Volubilis (Oualili)",
        localName: "Oualili",
        description: "Morocco's finest Roman ruins sit among olive-silvered hills outside Meknès: mosaic floors still bright with Bacchus and the Four Seasons, fragments of a Capitoline temple, a triumphal arch, and the street grid of a prosperous African-Roman city that once shipped olive oil to the empire. UNESCO-listed Volubilis is unmissable, not as a dusty footnote but as a full-day of open-sky archaeology. Walk the Decumanus Maximus at morning, when the mosaics are cool and the Middle Atlas is clear. A specialist guide brings houses to life, then you climb the forum steps and look toward Moulay Idriss on its volcanic spur. The signature luxury is time: sitting on a fallen column with a picnic of olives and bread, lizards flickering over tesserae, and the wind smelling of wild herbs. Rome feels startlingly close, and entirely Moroccan.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/meknes/volubilis-oualili-1.webp", "/images/destinations/meknes/volubilis-oualili-2.webp", "/images/destinations/meknes/volubilis-oualili-3.webp"]
      },
      {
        title: "Moulay Idriss Zerhoun",
        localName: "Moulay Driss Zerhoun",
        description: "Morocco's holiest town climbs a volcanic spur above the Volubilis plain, white cubes stacked around the shrine of Idris I, the Arab-Amazigh founder of Morocco's first Islamic dynasty and a descendant of the Prophet. Non-Muslims explore terraces, lanes and viewpoints around the sanctuary rather than entering the tomb itself, which only deepens the sense of a living pilgrimage. Come after Volubilis, when the olive hills are still in your eyes. Walk the stepped alleys, photograph the green-tiled pyramid of the mausoleum from a respectful distance, and sit for mint tea with a view of the sacred mountain of Zerhoun. The high-intent experience is cultural rather than touristic: listening to a local explain why this town still draws the faithful, tasting the famous cylindrical couscous of the region, and watching dusk gather on the whitewashed slopes. It is foundational Morocco, intimate and profound.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/meknes/moulay-idriss-zerhoun-1.webp", "/images/destinations/meknes/moulay-idriss-zerhoun-2.webp", "/images/destinations/meknes/moulay-idriss-zerhoun-3.webp"]
      }
    ]
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    region: "Atlantic Coast",
    eyebrow: "The Economic Capital",
    intro: "Casablanca is Morocco's modernist Atlantic metropolis, a city of Art Deco downtown, ocean corniche and the monumental Hassan II Mosque rising from the surf. It is not a medina capital; it is a working port of cinema legend, business energy and salt air, where white façades catch a light that feels almost Californian. Travellers who give Casa a full day discover a different Morocco: oceanfront promenades, Neo-Mauresque pastry shops, and a mosque so vast it seems to levitate above the Atlantic.",
    landmarks: [
      {
        title: "Hassan II Mosque",
        localName: "Masjid Hassan II",
        description: "Rising above the Atlantic on a partially over-water platform, the Hassan II Mosque combines traditional Maghrebi craftsmanship with late-twentieth-century engineering on a scale that still startles: a soaring minaret, a retractable roof, and a prayer hall of cedar, marble and zellige that can hold tens of thousands. Built in the 1990s under King Hassan II, it is Morocco's most dramatic contemporary sacred landmark, and one of the few mosques in the country that non-Muslims may enter on guided visits. Book a tour. You will walk across glass panels above the ocean, look up into a universe of carved cedar, and hear how artisans from Fes and Marrakech were summoned to finish the interiors. Afterwards, stand on the esplanade as spray hits the walls. The signature moment is not the statistic; it is feeling the Atlantic breathe beneath a house of prayer.",
        suggestedDuration: "1.5 Hours (guided visit)",
        images: ["/images/destinations/casablanca/hassan-ii-mosque-1.webp", "/images/destinations/casablanca/hassan-ii-mosque-2.webp", "/images/destinations/casablanca/hassan-ii-mosque-3.webp"]
      },
      {
        title: "Ain Diab Corniche",
        localName: "Corniche Ain Diab",
        description: "Casablanca's oceanfront boulevard of beaches, cafés and evening promenades is the city's social shoreline, where Atlantic wind meets urban leisure in a long ribbon of sand, clubs and seafood terraces. Ain Diab is where Casablancans come to walk, be seen, and eat grilled fish with a view of the swell. Come late afternoon. Walk the corniche as joggers and families share the pavement, then claim a table for oysters, sea bream and a cold drink as the light turns metallic. In warmer months you can swim, or simply sit with your feet in the sand watching surfers work the breaks. The luxury is atmospheric rather than historic: the feeling of a great African Atlantic city at play, salt on your lips, and the Hassan II minaret visible in the distance like a lighthouse of white stone.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/casablanca/ain-diab-corniche-1.webp", "/images/destinations/casablanca/ain-diab-corniche-2.webp", "/images/destinations/casablanca/ain-diab-corniche-3.webp"]
      },
      {
        title: "Habous Quarter",
        localName: "l-Habous",
        description: "A 1920s French-Moroccan planned medina of arcades, bookshops and pastry stalls, Habous offers Neo-Mauresque charm without the intensity of older imperial medinas, its ochre walls and green-tiled roofs designed as a garden city for the new Casablanca. It remains one of the most pleasant places in Morocco to shop for crafts, olive oils and traditional clothing at a civilised pace. Wander the arcades, step into a courtyard mosque's exterior calm, then sit with a horn of kaab el ghzal and mint tea as locals buy wedding fabrics. The high-intent experience is a guided craft walk: meeting a bookseller of religious and literary titles, choosing a pair of handmade babouches, and photographing the almost theatrical gates. Habous is Casablanca's gentlest historic quarter, a place of shade, tile and the smell of orange blossom water from the patisseries.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/casablanca/habous-quarter-1.webp", "/images/destinations/casablanca/habous-quarter-2.webp", "/images/destinations/casablanca/habous-quarter-3.webp"]
      },
      {
        title: "United Nations Square",
        localName: "Sa7at l-Umam l-Muttahida",
        description: "The historic heart of downtown Casablanca is framed by clock towers, colonial-era façades and the great arterial energy of a port metropolis, a gateway to Art Deco walks and the old medina fringe. This is the Casablanca of cinema memory and of actual commerce, where tram lines cross and white buildings catch a hard Atlantic light. Start here with a walking tour of the Art Deco centre: carved balconies, ocean-liner curves, and interiors that still surprise. Then sit at a historic café and watch the square's human traffic, a mix of office workers, shoppers and travellers in transit. The essential experience is architectural rather than monumental, learning to read Casa as a twentieth-century capital of style. Photographers should come in the late morning, when shadows cut the façades into geometry worthy of a modernist print.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/casablanca/united-nations-square-1.webp", "/images/destinations/casablanca/united-nations-square-2.webp", "/images/destinations/casablanca/united-nations-square-3.webp"]
      },
      {
        title: "Casablanca Old Medina",
        localName: "Medina Casa",
        description: "Often overlooked between the mosque and the corniche, Casa's old medina retains fishing-quarter grit, whitewashed lanes and local markets, a raw counterpoint to the polished Hassan II esplanade. This is a working neighbourhood of vegetable stalls, tailors and the smell of the port, more authentic for being unpretty. Walk it with a local or a trusted guide, especially if you want context on how the medina relates to the Art Deco ville nouvelle. Taste street bread and olives, watch fishermen's families shop for the day's catch, and emerge onto the walls with a sudden view of the Atlantic. The luxury here is honesty: a reminder that Casablanca is not only a resort of glass and marble, but a coastal city with a pulse older than the boulevard. Keep valuables close, stay curious, and the medina rewards you with photographs no postcard would print.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/casablanca/casablanca-old-medina-1.webp", "/images/destinations/casablanca/casablanca-old-medina-2.webp", "/images/destinations/casablanca/casablanca-old-medina-3.webp"]
      }
    ]
  },
  {
    slug: "agadir",
    name: "Agadir",
    region: "Atlantic Coast",
    eyebrow: "The Southern Atlantic Resort",
    intro: "Rebuilt after the 1960 earthquake, Agadir is Morocco's sun-drenched beach capital, a Souss Bay crescent of Atlantic sand, kasbah ruins and easy day trips inland toward argan groves and the Anti-Atlas. The mood is resort-bright: promenades, grilled sardines, and a winter sun that draws Europe to the water. Yet above the new city, the broken kasbah still watches, and in Souk El Had the old market energy of the south remains loud, fragrant and joyfully unpolished.",
    landmarks: [
      {
        title: "Agadir Oufella",
        localName: "Agadir Oufella",
        description: "The hilltop kasbah ruins of Agadir Oufella offer the classic panorama over Agadir Bay, a site that commemorates the pre-1960 city destroyed by earthquake and still watches the rebuilt resort like a memory in rammed earth. The inscription above the gate, God, Homeland, King, survived when almost nothing else did. Come at sunset, when the Atlantic turns copper and the nine kilometres of beach draw a single bright line below you. Walk the remaining walls, photograph the bay's perfect crescent, and feel the wind that always seems stronger on this hill. The signature experience is the ascent itself, by foot or vehicle, followed by a quiet moment on the ridge as the call to prayer rises from the modern city. It is Agadir's most moving viewpoint, luxury not of marble but of light, loss and a horizon that never stopped being beautiful.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/agadir/agadir-oufella-1.webp", "/images/destinations/agadir/agadir-oufella-2.webp", "/images/destinations/agadir/agadir-oufella-3.webp"]
      },
      {
        title: "Main Beach & Corniche",
        localName: "Plage Agadir",
        description: "Kilometres of Atlantic sand, promenade cafés and year-round swimming culture define Agadir's main beach, Morocco's most accessible resort shoreline, where the water is calmer than Essaouira's and the sun is a winter commodity Europe flies in to collect. The corniche is a theatre of joggers, families and camel silhouettes at dusk. Spend a half-day in unapologetic leisure: swim in the cool Atlantic, walk the packed sand at low tide, then claim a beach-club lounger for grilled fish and a citrus drink. In the golden hour the kasbah hill turns silhouette and the bay becomes a sheet of hammered metal. Active travellers can add a surf lesson or a long coastal run; everyone else should simply let the Souss light do its work. This is the Morocco of salt skin, linen shirts and the pleasure of a city rebuilt for the sea.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/agadir/main-beach-and-corniche-1.webp", "/images/destinations/agadir/main-beach-and-corniche-2.webp", "/images/destinations/agadir/main-beach-and-corniche-3.webp"]
      },
      {
        title: "Souk El Had",
        localName: "Souq El Had",
        description: "One of Morocco's largest covered markets, Souk El Had is a city of produce, textiles, spices, olives and everyday Souss life, far more interesting than any purpose-built tourist souk. Under the high roofs you will find pyramids of argan oil, crates of tomatoes, cedar chests and the sociable chaos of a southern commercial capital. Explore with a local companion who can navigate the numbered alleys and negotiate without theatre. Taste olives from a wooden barrel, smell cumin by the scoop, and commission a small leather or textile piece if something catches your eye. The high-intent experience is culinary: leaving with saffron, amlou and a bag of dates, then eating a simple tagine nearby. Souk El Had is Agadir's most authentic hour, a reminder that this beach city still feeds a whole region from its market heart.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/agadir/souk-el-had-1.webp", "/images/destinations/agadir/souk-el-had-2.webp", "/images/destinations/agadir/souk-el-had-3.webp"]
      },
      {
        title: "Crocoparc",
        localName: "Crocoparc",
        description: "A landscaped botanical and crocodile park set among the argan hinterland outside Agadir, Crocoparc is a green pause from pure beach days and a favourite with families, yet it is designed with enough botanical seriousness to please adult travellers who love gardens. Nile crocodiles bask in warm pools while tropical planting, palms and water features create a microclimate that feels almost equatorial. Walk the paths slowly, timing your visit for a feeding demonstration if you wish, then linger in the planted areas that are the park's quieter luxury. Photographers find unexpected compositions of reptile, reflection and cactus flower. Pair the visit with an argan cooperative stop on the return, and the afternoon becomes a Souss-themed outing: oil, gardens and the strange pleasure of watching prehistoric animals in a valley of Moroccan sun.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/agadir/crocoparc-1.webp", "/images/destinations/agadir/crocoparc-2.webp", "/images/destinations/agadir/crocoparc-3.webp"]
      },
      {
        title: "Agadir Marina",
        localName: "Marina Agadir",
        description: "Yachts, boutiques and waterfront dining create Agadir's polished marina district, a horseshoe of white buildings and masts that is ideal for evening strolls after beach hours. The mood is Mediterranean resort: gelato, grilled seafood, and the clink of rigging in the Atlantic breeze. Come at blue hour, when the kasbah ridge is a dark cut-out and the boats become a forest of lights. Walk the quays, browse a few design shops, then sit down to a plate of oysters or sea bass with a view of the harbour mouth. The luxury is social and visual rather than historic, the pleasure of a southern Atlantic city that knows how to dress for night. It is the natural last act of an Agadir day, a place to toast the sun that made the whole resort possible.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/agadir/agadir-marina-1.webp", "/images/destinations/agadir/agadir-marina-2.webp", "/images/destinations/agadir/agadir-marina-3.webp"]
      }
    ]
  },
  {
    slug: "essaouira",
    name: "Essaouira",
    region: "Atlantic Coast",
    eyebrow: "The Wind City",
    intro: "UNESCO-listed Essaouira blends Portuguese-era ramparts, Gnawa music heritage and Atlantic beaches in a breezy white-and-blue medina that smells of salt, thuya wood and grilled sardines. The trade winds that made it a kitesurfing capital also keep the lanes cool, and the harbour still lands the fish that appear an hour later on a clay plate. This is Morocco's most effortlessly chic coastal town: ramparts for walking, galleries for lingering, and a horizon where Mogador's islands float like a myth.",
    landmarks: [
      {
        title: "Sqala of the Kasbah",
        localName: "Sqala l-Qasba",
        description: "Cannons along the ocean ramparts define Essaouira's cinematic skyline, a line of bronze and iron facing the swell that has featured in films and in every traveller's first photograph of the Wind City. The Sqala, the artillery platform of the eighteenth-century Alaouite fortifications, is the classic walk for Atlantic spray, late light and the lore of a port designed by European engineers for a Moroccan sultan. Walk the full length of the ramparts as gulls scream and waves explode against the stones. Photograph the cannons against white walls and a hard blue sea, then step into a rampart café for mint tea that tastes of the wind. The signature experience is golden hour here, when the medina's limewash turns apricot and the islands of Mogador darken offshore. Few Moroccan walks combine military history and pure sensory pleasure so completely.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/essaouira/sqala-of-the-kasbah-1.webp", "/images/destinations/essaouira/sqala-of-the-kasbah-2.webp", "/images/destinations/essaouira/sqala-of-the-kasbah-3.webp"]
      },
      {
        title: "Essaouira Old Medina",
        localName: "Medina Souira",
        description: "A grid of thuya-wood workshops, galleries and whitewashed lanes, Essaouira's medina was planned in the eighteenth century as a compact, breezy port, later beloved by musicians, artists and Orson Welles. Unlike the labyrinths of Fes, it is walkable, orthogonal and endlessly photogenic, a town of blue shutters, cats on doorsteps and the sweet resin smell of inlaid wood. Spend hours without a map. Watch a craftsman cut thuya and lemonwood into a chessboard, step into a Gnawa house if music is playing, and bargain gently for a painting or a silver filigree piece. Eat grilled sardines near the harbour, then lose yourself in the Mellah-adjacent lanes as the afternoon wind rises. The high-intent experience is meeting makers, not merely shopping: commissioning a small marquetry box, or sitting in a courtyard as a local musician explains the iron castanets of the qraqeb.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/essaouira/essaouira-old-medina-1.webp", "/images/destinations/essaouira/essaouira-old-medina-2.webp", "/images/destinations/essaouira/essaouira-old-medina-3.webp"]
      },
      {
        title: "Mellah Quarter",
        localName: "l-Mellah",
        description: "Essaouira's historic Jewish quarter preserves traces of a once-thriving community that was central to the city's trading identity, when Jewish merchants linked Mogador to Manchester, Mogador to the Sahara, and the port to a wider Atlantic world. The lanes are quieter now, the synagogues few, but the architecture and the stories remain. Walk with a cultural guide who can point out Hebrew inscriptions, former houses of commerce, and the social fabric that made Essaouira unusually plural. Visit a restored synagogue if it is open, photograph the peeling blues and sea-light at the end of alleys, and pause to understand a Morocco that was always more than a single narrative. The experience is reflective rather than spectacular, and that is its luxury: depth, memory, and the salt air moving through streets that once spoke several languages at once.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/essaouira/mellah-quarter-1.webp", "/images/destinations/essaouira/mellah-quarter-2.webp", "/images/destinations/essaouira/mellah-quarter-3.webp"]
      },
      {
        title: "Essaouira Main Beach",
        localName: "Plage Souira",
        description: "Wide Atlantic sands favoured by kite-surfers and sunset walkers stretch south of the ramparts, with the purple islands of Mogador floating offshore like a painted backdrop. Essaouira earns its nickname here: the wind is a character, filling kites, whipping spray, and making even a simple walk feel cinematic. Bring layers. Watch professional riders slice across the break, then walk toward the dunes as camels pass in silhouette. If you kite, this is one of North Africa's great spots; if you do not, take a lesson on a milder day or simply sit with grilled fish as the sun drops behind the islands. The signature evening is a barefoot walk at the waterline, ramparts gold on one side, ocean on the other, the call to prayer mixing with the hiss of surf. It is coastal Morocco at its most elemental and stylish.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/essaouira/essaouira-main-beach-1.webp", "/images/destinations/essaouira/essaouira-main-beach-2.webp", "/images/destinations/essaouira/essaouira-main-beach-3.webp"]
      },
      {
        title: "Île de Mogador",
        localName: "Jazirat Mogador",
        description: "The protected Purple Islands offshore hold Phoenician history, a Portuguese fortress, and a sanctuary for Eleonora's falcons, a maritime mythos that gave Essaouira its older name of Mogador. The islands are a nature reserve; landings are restricted, but boat approaches, when season and permits allow, still reveal the city's seaward soul. Book a supervised excursion rather than improvising. You will circle ochre cliffs, hear the story of murex dye that tinted imperial purple, and watch birds work the wind above ruined walls. Even from the ramparts, binoculars make the islands a living horizon. The high-intent traveller treats this as a half-day of sea air and narrative, then returns to the harbour for a plate of the same ocean's catch. Mogador is not a beach club; it is the reason Essaouira feels older and wilder than its boutiques suggest.",
        suggestedDuration: "Half Day (excursion)",
        images: ["/images/destinations/essaouira/ile-de-mogador-1.webp", "/images/destinations/essaouira/ile-de-mogador-2.webp", "/images/destinations/essaouira/ile-de-mogador-3.webp"]
      }
    ]
  },
  {
    slug: "tanger",
    name: "Tanger",
    region: "Atlantic Coast",
    eyebrow: "Gateway of the Strait",
    intro: "Tangier faces Europe across the Strait of Gibraltar, a city of kasbahs, cafés, sea caves and maritime myth where the Atlantic and the Mediterranean seem to argue in the same wind. For a century it was an Interzone of writers, spies and smugglers; today it is a regenerated port with a still-magnetic old town. You come for the view toward Spain, stay for mint tea in the Petit Socco, and leave with the feeling that continents are a rumour you can see from a terrace.",
    landmarks: [
      {
        title: "Kasbah & Museum",
        localName: "Qasbat Tanja",
        description: "The hilltop kasbah museum occupies a former sultan's palace, Dar el-Makhzen, with collections spanning archaeology to ethnographic arts, plus terraces that look across the Strait of Gibraltar as if Europe were a neighbouring roof. The interiors themselves are the first exhibit: Andalusian-Moroccan courtyards, carved cedar, and rooms that still feel like a residence of power. Wander the palace slowly, then step onto the ramparts as ferries cut the water toward Tarifa. A specialist guide can unpack Tangier's layers, from Phoenician beginnings to the International Zone. The signature experience is combining museum and neighbourhood: tea in a kasbah café, a wander through white lanes scented with jasmine, and a photograph of Spain on a clear day. Few Moroccan sites offer such a precise sensation of standing at the hinge of two seas and two continents.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/tanger/kasbah-and-museum-1.webp", "/images/destinations/tanger/kasbah-and-museum-2.webp", "/images/destinations/tanger/kasbah-and-museum-3.webp"]
      },
      {
        title: "Caves of Hercules",
        localName: "Mgharet Hercules",
        description: "Legendary sea caves west of Tangier open to the Atlantic in a silhouette often compared to the map of Africa, a meeting of mythology, geology and sunset photography on the edge of Cape Ashakar. Tradition says Hercules rested here after his labours; the sea has been carving the chambers far longer than any myth. Walk down into the cavern, feel the boom of swell in your chest, and frame the famous opening as light floods the stone. Time the visit for late day, when the ocean turns bronze and the cave mouth becomes a theatre. Pair it with a coastal walk and a seafood lunch nearby. The high-intent moment is simply standing in that aperture, wind in your hair, Africa's outline cut from living rock, while waves explode into white at your feet. It is Tangier's most elemental postcard, and it still works.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tanger/caves-of-hercules-1.webp", "/images/destinations/tanger/caves-of-hercules-2.webp", "/images/destinations/tanger/caves-of-hercules-3.webp"]
      },
      {
        title: "Cap Spartel",
        localName: "Ras Spartel",
        description: "Where popular geography says the Atlantic meets the Mediterranean, Cap Spartel's lighthouse headland offers dramatic coastal walks, café views and a sense of standing at the world's hinge. The 1864 lighthouse still watches shipping lanes that have carried Phoenicians, Romans and modern tankers through the same narrows. Come with time to walk the clifftops, photograph the white tower against a hard sea, and sit for a drink as the wind rearranges the afternoon. On clear days the Iberian coast is a pale suggestion; on wild days the cape is all spray and drama. The essential experience is unhurried: combining Spartel with the Caves of Hercules in a single coastal loop, then returning to Tangier as the Strait lights begin to flicker. It is geography as luxury, the pleasure of knowing exactly where you are on the planet.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tanger/cap-spartel-1.webp", "/images/destinations/tanger/cap-spartel-2.webp", "/images/destinations/tanger/cap-spartel-3.webp"]
      },
      {
        title: "Grand & Petit Socco",
        localName: "Socco Kabir w Sghir",
        description: "Tangier's legendary squares link medina energy with café culture immortalised by writers and artists of the Interzone era, when Bowles, Bacon and a rotating cast of exiles made the Petit Socco a stage. The Grand Socco, officially Place du 9 Avril, is the city's outdoor salon of fountains, taxis and the Cinema Rif; the Petit Socco is smaller, denser, and still the place to sit with a coffee and watch Tangier happen. Do as the city does. Claim a terrace table, order mint tea or a strong espresso, and let the afternoon dissolve into people-watching. Then wander the medina lanes that feed the squares, browsing textiles and spices without haste. The high-intent experience is literary and social: a guided walk of Interzone sites, then a long, unapologetic café sitting. Tangier is a city that rewards lingering more than ticking.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/tanger/grand-and-petit-socco-1.webp", "/images/destinations/tanger/grand-and-petit-socco-2.webp", "/images/destinations/tanger/grand-and-petit-socco-3.webp"]
      },
      {
        title: "Tanja Marina Bay",
        localName: "Marina Tanja",
        description: "The regenerated waterfront of modern Tangier is a composition of marinas, promenades and contemporary dining facing the Strait's shipping lanes, a gleaming counterpoint to the kasbah's white cubes. Here the city performs its twenty-first-century self: yachts, evening walkers, and restaurants that serve both Moroccan classics and a more international table. Come at dusk. Walk the marina as lights come on across the water and Spain becomes a necklace of glow. Sit down to grilled fish or a refined couscous, then stroll until the air turns cool. The luxury is the view as much as the menu, the sensation of a strait that has always been a highway now framed by design. Pair the marina with a kasbah morning, and you have Tangier's whole argument: old myth and new glass, sharing the same sea.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tanger/tanja-marina-bay-1.webp", "/images/destinations/tanger/tanja-marina-bay-2.webp", "/images/destinations/tanger/tanja-marina-bay-3.webp"]
      }
    ]
  },
  {
    slug: "asilah",
    name: "Asilah",
    region: "Atlantic Coast",
    eyebrow: "The Artists' Medina",
    intro: "Asilah's white ramparts and mural culture create one of Morocco's most refined small Atlantic towns, a Portuguese-walled medina that has become an open-air gallery above crashing swells. In summer the arts festival paints new works onto the lanes; year-round the light is a painter's light, hard and clean. You come to walk the walls at golden hour, eat simply by the sea, and feel the luxury of a town that chose beauty as its industry.",
    landmarks: [
      {
        title: "Medina Ramparts",
        localName: "Swar l-Medina",
        description: "Portuguese-era walls wrap a luminous white medina above crashing Atlantic swells, Asilah's defining silhouette at golden hour and one of the most elegant coastal walks in Morocco. The ramparts are not a ruin to hurry through; they are a promenade of cannon embrasures, sea spray and limewash that seems to generate its own light. Walk the full circuit slowly. Photograph the contrast of white walls and dark water, pause in the bastions as waves explode below, and let the wind do what it does to conversation. At sunset the medina flushes peach and the ocean turns to hammered silver. The signature experience is remaining on the walls until the call to prayer, then descending into the lanes for a simple grilled-fish dinner. Asilah's luxury is this exact combination: military stone, artistic town, and an Atlantic that never stops performing.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/asilah/medina-ramparts-1.webp", "/images/destinations/asilah/medina-ramparts-2.webp", "/images/destinations/asilah/medina-ramparts-3.webp"]
      },
      {
        title: "Murals & Art Blocks",
        localName: "Jidariyat Asilah",
        description: "The annual Asilah Arts Festival leaves murals across medina walls, turning lanes into an open-air gallery of contemporary Moroccan and international work that changes with the years and makes the town a living canvas. Even out of festival season the paintings remain, a conversation between white Portuguese streets and bold pigment. Wander without a checklist. Photograph a mural, then the doorway beside it, then a cat asleep in a splash of colour. Speak with gallery owners if they are in, and consider buying a small work from a resident artist rather than a generic souvenir. The high-intent experience is a guided art walk that explains how Asilah reinvented itself through culture, followed by mint tea in a courtyard. Few Moroccan towns offer such a refined, walkable dialogue between heritage architecture and contemporary image-making, all of it scented with sea air.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/asilah/murals-and-art-blocks-1.webp", "/images/destinations/asilah/murals-and-art-blocks-2.webp", "/images/destinations/asilah/murals-and-art-blocks-3.webp"]
      },
      {
        title: "Raissouni Palace",
        localName: "Qsar Raissouni",
        description: "A restored early-twentieth-century palace linked to the legendary Raisuni, the bandit-prince who once unsettled colonial powers from these Atlantic hills, now sits on Asilah's cultural circuit of interiors and courtyards. The building is a study in Andalusian-Moroccan domestic luxury: tiled rooms, carved wood, and a sense of a life lived between ocean and intrigue. Visit when it is open to the public or used for cultural events, and take time in the courtyards rather than rushing the rooms. A good guide will unpack Raisuni's story without turning it into cartoon, then leave you to photograph the play of light on zellige. The experience is intimate, almost novelistic, a contrast to the open-air drama of the ramparts. Pair it with a slow medina walk, and Asilah reveals its talent for folding history, myth and design into a single whitewashed afternoon.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/asilah/raissouni-palace-1.webp", "/images/destinations/asilah/raissouni-palace-2.webp", "/images/destinations/asilah/raissouni-palace-3.webp"]
      },
      {
        title: "Paradise Beach",
        localName: "Plage Paradise",
        description: "A celebrated stretch of sand south of town, Paradise Beach is best reached by local transport, a seasonal boat, or a coastal walk that already feels like a holiday within a holiday. The beach is a wide Atlantic crescent, less a club scene than a landscape of dunes, pale sand and a sea that can be lively. Bring what you need, including wind layers. Swim when conditions allow, walk until the town is a white rumour behind you, and picnic with bread, cheese and fruit bought in the medina. The signature day is unhurried: morning walls and murals, afternoon sand and salt, return as the ramparts catch sunset. Asilah's beach is not a mega-resort strip; it is the natural completion of a small artistic town, the moment you trade pigment and limewash for the simpler luxury of an empty horizon.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/asilah/paradise-beach-1.webp", "/images/destinations/asilah/paradise-beach-2.webp", "/images/destinations/asilah/paradise-beach-3.webp"]
      }
    ]
  },
  {
    slug: "el-jadida",
    name: "El Jadida",
    region: "Atlantic Coast",
    eyebrow: "The Portuguese City",
    intro: "UNESCO-listed El Jadida preserves Portugal's Mazagan fortress, a cistern of cinematic light, and Atlantic resort beaches a short ride from Casablanca. Inside the walls, European street names and Portuguese churches survive as a rare fortress-city layer on Morocco's coast. Outside, the ocean is all seafood, surf and weekend energy. It is a town for travellers who love the unexpected: a slice of Manueline history, then a swim at Sidi Bouzid as the Atlantic turns gold.",
    landmarks: [
      {
        title: "Portuguese City (Cité Portugaise)",
        localName: "Mdina l-Bortuqiz",
        description: "Ramparts, churches and Portuguese urban planning survive inside Mazagan's walls, a rare European fortress-city layer on Morocco's Atlantic coast and a UNESCO World Heritage site that still feels lived-in rather than embalmed. Founded in the sixteenth century, the citadel is a compact world of bastions, cistern, and lanes that remember a time when this was a Portuguese stronghold facing a Moroccan hinterland. Walk the ramparts in a full circuit. Photograph the ocean from the bastions, step into the old church interiors, and let a guide explain how Mazagan became El Jadida. The high-intent experience is slow: mint tea on the walls, a pause in a Portuguese doorway, the sound of fishing boats beyond the stones. Few Moroccan towns offer such a precise collision of Iberian military architecture and Atlantic light. It is history you can walk, salt-stained and beautifully incomplete.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/el-jadida/portuguese-city-cite-portugaise-1.webp", "/images/destinations/el-jadida/portuguese-city-cite-portugaise-2.webp", "/images/destinations/el-jadida/portuguese-city-cite-portugaise-3.webp"]
      },
      {
        title: "Portuguese Cistern",
        localName: "Sahrij l-Bortuqiz",
        description: "An underground vaulted cistern made famous by Orson Welles' Othello, this chamber of columns and reflective water is one of Morocco's most cinematic interiors, a forest of stone where shafts of light fall like spotlights onto a dark mirror. Built by the Portuguese as a warehouse and later used to store water, it now exists almost purely as atmosphere. Descend the steps and let your eyes adjust. Photograph the repeating arches and their doubles in the water, move quietly so as not to break the surface, and feel the temperature drop from Atlantic glare to subterranean calm. The signature visit is unhurried and almost silent, a few minutes that stay with you longer than many palaces. Pair it with the rampart walk above, and Mazagan reveals its genius: a fortress that hid a cathedral of water beneath the soldiers' feet.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/el-jadida/portuguese-cistern-1.webp", "/images/destinations/el-jadida/portuguese-cistern-2.webp", "/images/destinations/el-jadida/portuguese-cistern-3.webp"]
      },
      {
        title: "Sidi Bouzid Beach",
        localName: "Plage Sidi Bouzid",
        description: "A popular Atlantic beach near El Jadida for surfing, seafood and weekend energy, Sidi Bouzid is the easy coastal extension to the Portuguese core, a long strand of sand, cafés and a sea that can offer both swimming and a proper break. This is where Casablanca and El Jadida come to play. Spend a half-day in salt and appetite: a surf lesson if the waves are right, a long walk at the waterline, then a lunch of grilled fish, oysters if in season, and lemon that tastes brighter for the wind. In the late afternoon the light is a photographer's gift, gilding wet sand and the silhouettes of fishermen. The luxury is simple and physical, a reminder that Mazagan was always a maritime town. Return to the ramparts at dusk and you have the whole argument of El Jadida: stone history, then the living ocean.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/el-jadida/sidi-bouzid-beach-1.webp", "/images/destinations/el-jadida/sidi-bouzid-beach-2.webp", "/images/destinations/el-jadida/sidi-bouzid-beach-3.webp"]
      }
    ]
  },
  {
    slug: "oualidia",
    name: "Oualidia",
    region: "Atlantic Coast",
    eyebrow: "The Oyster Lagoon",
    intro: "Oualidia is Morocco's refined lagoon town, a sheltered Atlantic crescent of oyster parks, birdlife and a stillness that feels almost private. Kings have kept a residence on the cliff; chefs have built a cuisine around what the lagoon grows. You come not for a checklist of monuments but for a table overlooking the beds, a kite lesson on flat water, and the luxury of a coast that still tastes of itself.",
    landmarks: [
      {
        title: "Oualidia Lagoon & Oyster Farms",
        localName: "B7ayrat Oualidia",
        description: "A calm lagoon famous for oyster farming and kite-friendly waters, Oualidia is Morocco's most elegant edible landscape, a crescent of turquoise held by sandbars where Atlantic water is filtered into something briny and precise. Lunch overlooking the beds is the classic ritual for food-focused travellers, and it should not be rushed. Take a small boat or walk the shore to see the parks at low tide, then sit at a lagoon-facing table and slurp oysters pulled that morning, dressed with lemon, perhaps followed by grilled lagoon fish and a glass of Moroccan white. If the wind is up, watch kite-surfers slice the flat inside water, or take a lesson yourself. Birdwatchers will find waders working the shallows. The signature day is sensory and slow: salt air, cold shellfish, warm bread, and the knowledge that this quiet town has been feeding discerning tables for generations.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/oualidia/oualidia-lagoon-and-oyster-farms-1.webp", "/images/destinations/oualidia/oualidia-lagoon-and-oyster-farms-2.webp", "/images/destinations/oualidia/oualidia-lagoon-and-oyster-farms-3.webp"]
      },
      {
        title: "Historic Royal Palace (exterior)",
        localName: "Qsar Malaki",
        description: "The cliffside royal residence overlooks the lagoon, a pale, closed presence that has long associated Oualidia with Morocco's monarchy and with a certain quiet luxury, the idea that this was a place to escape the capital for oysters, hunting and Atlantic air. The palace is not a museum interior; it is admired from viewpoints as architecture and symbol. Walk the cliff paths and higher terraces that look down on both the white walls and the lagoon's changing colours. Photograph the composition of palace, water and sandbar, then sit nearby with a drink as the afternoon wind rises. The experience is about setting rather than access: understanding why this particular crescent of coast was chosen, and feeling the same privileged geography from a public path. Pair the viewpoints with a lagoon lunch, and Oualidia's whole character comes into focus, royal, edible and beautifully withheld.",
        suggestedDuration: "45 Minutes (viewpoints)",
        images: ["/images/destinations/oualidia/historic-royal-palace-exterior-1.webp", "/images/destinations/oualidia/historic-royal-palace-exterior-2.webp", "/images/destinations/oualidia/historic-royal-palace-exterior-3.webp"]
      }
    ]
  },
  {
    slug: "safi",
    name: "Safi",
    region: "Atlantic Coast",
    eyebrow: "City of Potters",
    intro: "Safi combines a Portuguese sea castle, a working Atlantic harbour and the most important pottery quarter on the Moroccan coast, a city that still smells of kiln smoke, fish and wet clay. This is not a polished resort; it is a craft capital where you can watch a master throw a plate, then eat the day's catch within sight of the same ocean. Travellers who care about making things, not merely buying them, find Safi unforgettable.",
    landmarks: [
      {
        title: "Château de la Mer",
        localName: "Qal3at l-B7ar",
        description: "The Portuguese sea castle anchors Safi's harbour history, a stone fortress facing Atlantic swells and fishing fleets that still work the same waters the garrison once watched. Built in the sixteenth century when Safi was a Portuguese stronghold, it remains the city's most atmospheric historic silhouette, salt-stained and unvarnished. Walk the ramparts as the wind comes straight off the ocean, photograph the contrast of castle and colourful boats, and look back toward the medina walls. A local guide can unpack the Portuguese chapter and Safi's later role as a phosphate and sardine port. The signature experience is timing the visit for the return of the fleet, when gulls riot and the harbour smells of diesel and fish, a living port rather than a postcard. Then descend for a simple seafood lunch. This is Atlantic Morocco without the boutique filter, and it has a rough, memorable glamour.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/safi/chateau-de-la-mer-1.webp", "/images/destinations/safi/chateau-de-la-mer-2.webp", "/images/destinations/safi/chateau-de-la-mer-3.webp"]
      },
      {
        title: "Potters' Quarter (Hay l-Fakhara)",
        localName: "Hay l-Fakhara",
        description: "Safi's ceramic heart is a hillside of workshops, bottle kilns and blue-and-white pottery traditions that still supply markets across Morocco, a living guild district rather than a craft display for tourists. Here you will hear the kick of wheels, smell wet clay and woodsmoke, and see plates, bowls and architectural tiles stacked like edible colour. Walk with a ceramic specialist or a trusted potter. Watch a master centre a lump of local clay, then, if the workshop allows, throw a small piece yourself or commission a plate hand-painted with your name in Arabic script. The high-intent souvenir is that custom piece, collected after firing if you have time, or shipped with care. Photograph the kilns against the Atlantic haze. Few travel experiences in Morocco are this tactile: dust on your fingers, glaze like jewellery, and the knowledge that Safi has been a city of fire and earth for centuries.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/safi/potters-quarter-hay-l-fakhara-1.webp", "/images/destinations/safi/potters-quarter-hay-l-fakhara-2.webp", "/images/destinations/safi/potters-quarter-hay-l-fakhara-3.webp"]
      },
      {
        title: "Old Medina Walls",
        localName: "Swar l-Medina",
        description: "Walk the medina perimeter for harbour vistas and everyday Atlantic-Moroccan street life beyond resort polish, a circuit of ramparts, gates and neighbourhoods that still feel like a working city. Safi's old town is about fishing families, bakeries and the call to prayer, not boutique riads. That is its charm. Follow the walls as they rise and fall, step into a lane for a glass of tea, and look down on the port's geometry of nets and hulls. A local companion helps you read the town without getting lost in the purely practical. Photograph the contrast of Portuguese castle, medina stone and the industrial edge of a phosphate port, an honest coastal portrait. The luxury here is observational: the pleasure of a city that did not reinvent itself for you, yet still offers a superb walk, a superb kiln, and a superb piece of grilled fish at the end of the afternoon.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/safi/old-medina-walls-1.webp", "/images/destinations/safi/old-medina-walls-2.webp", "/images/destinations/safi/old-medina-walls-3.webp"]
      }
    ]
  },
  {
    slug: "dakhla",
    name: "Dakhla",
    region: "Atlantic Coast",
    eyebrow: "Sahara Meets Ocean",
    intro: "Where sweeping golden desert dunes plunge directly into the pristine turquoise waters of the Atlantic, Dakhla offers a remote paradise for adventurers, kite-surfers and seekers of untouched wilderness. The peninsula is a geography of superlatives: trade winds that arrive on schedule, a lagoon as flat as a ballroom, and oyster parks in water so clear it looks invented. This is Morocco's far south as luxury expedition, a place to ride, taste and fall silent.",
    landmarks: [
      {
        title: "White Dune (Dune Blanche)",
        localName: "Dune Blanche",
        description: "A breathtaking, sculptural crescent of pure white sand rising directly out of a crystalline turquoise lagoon. The adventure begins with an exhilarating 4x4 expedition across rugged desert terrain to reach this isolated natural marvel. Once there, you can scale the steep ridge of the dune to capture Dakhla's most iconic photograph, feeling the crisp Atlantic trade winds. The ultimate signature experience here involves launching yourself directly off the sandy precipice on a kiteboard into the flat, warm lagoon waters below, or simply standing at the peak to witness a spectacular panorama where desert silence meets ocean vitality. Stay until the light turns apricot. The dune's white reads as almost lunar against the water, and the only sounds are wind, kites and your own breath. It is the image that explains Dakhla in a single frame, and it is even better in person.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/dakhla/white-dune-dune-blanche-1.webp", "/images/destinations/dakhla/white-dune-dune-blanche-2.webp", "/images/destinations/dakhla/white-dune-dune-blanche-3.webp"]
      },
      {
        title: "Dakhla Lagoon",
        localName: "B7ayrat Dakhla",
        description: "Revered globally as an absolute mecca for wind and kite-surfing enthusiasts due to its remarkably consistent trade winds and calm, flat shallow waters. Your day is spent under the vast blue sky, gliding across the massive lagoon alongside professional world-class riders. Beyond the adrenaline-pumping watersports, the lagoon is an experiential culinary retreat; you will take a small boat transfer out to a remote oyster farm setup to slurp fresh, locally harvested Atlantic oysters pulled straight from the sea minutes before, drizzled with fresh lemon juice while sitting on an open-air wooden deck overlooking the wild shoreline. Non-riders are not spectators here: they swim in bathtub-warm shallows, photograph flamingo-coloured dawns, and learn why chefs speak of Dakhla oysters with a kind of reverence. Stay through the wind window, then toast the day as the Sahara haze softens the horizon.",
        suggestedDuration: "Full Day",
        images: ["/images/destinations/dakhla/dakhla-lagoon-1.webp", "/images/destinations/dakhla/dakhla-lagoon-2.webp", "/images/destinations/dakhla/dakhla-lagoon-3.webp"]
      },
      {
        title: "Dragon Island",
        localName: "Jazirat Dragon",
        description: "A rocky outcrop in the lagoon ecosystem, Dragon Island is popular for boat visits, birdlife and remote coastal geology, a dragon-backed silhouette of stone rising from turquoise as if the Sahara had grown a spine. The approach by boat is half the pleasure: water so clear you can read the sand, wind on your face, and the peninsula's kite-flecked lagoon falling away behind you. Land if conditions and guides allow, walk the rock, and watch waders and seabirds work the edges. Photographers come for the contrast of dark geology and pale water; naturalists come for a lagoon that is also a nursery. Pack a picnic of bread, lemon and oysters from the farms. The signature half-day is unhurried, almost private, a reminder that Dakhla is not only a sports destination but a wilderness of islands, currents and silence. Return as the afternoon wind stands the kites back up like a field of flags.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/dakhla/dragon-island-1.webp", "/images/destinations/dakhla/dragon-island-2.webp", "/images/destinations/dakhla/dragon-island-3.webp"]
      },
      {
        title: "Imlili Sebkha",
        localName: "Sebkhat Imlili",
        description: "A remarkable inland salt depression with freshwater lenses, Imlili is a geological oddity and a full-day 4x4 adventure deep in Dakhla's desert hinterland, a sebkha where rain and ancient water create unexpected pools in a white mineral basin. The drive itself is the expedition: desert tracks, Saharan light, and a sense of leaving the kite lagoons for something older and stranger. Walk the crust carefully with a local guide who understands the terrain, photograph the abstract patterns of salt and water, and listen to an emptiness that has nothing to do with beaches. Bring layers, water and a picnic; there is no café at the end of the earth. The high-intent traveller treats Imlili as Dakhla's interior secret, proof that the peninsula's luxury is not only turquoise sport but true desert wilderness. Return to the lagoon at dusk, salted, dusty and newly aware of how much land still surrounds that famous water.",
        suggestedDuration: "Full Day (expedition)",
        images: ["/images/destinations/dakhla/imlili-sebkha-1.webp", "/images/destinations/dakhla/imlili-sebkha-2.webp", "/images/destinations/dakhla/imlili-sebkha-3.webp"]
      }
    ]
  },
  {
    slug: "chefchaouen",
    name: "Chefchaouen",
    region: "Mediterranean & Blue North",
    eyebrow: "The Blue Pearl",
    intro: "Tucked away beneath the dramatic limestone peaks of the Rif Mountains, this dreamlike sanctuary envelops travellers in endless, soothing shades of traditional indigo and sky-blue. Andalusian refugees helped shape the medina; generations of limewash have made it a global icon. Yet Chefchaouen is more than a photograph: it is mountain water, wool weaving, mint tea with sage, and trails that lead from blue stairs into cedar and waterfall country.",
    landmarks: [
      {
        title: "Outa el-Hammam Square",
        localName: "Sa7at Outa el-Hammam",
        description: "The vibrant, beating heart of the blue medina, bordered by the striking red-clay battlements of the historic Kasbah. The essential experience here is slow and observational: take an outdoor table at an artisanal café, order a glass of traditional northern mint tea brewed with wild mountain sage, and listen to the rhythmic call to prayer echoing off the blue walls. You will watch local weavers display heavy wool blankets nearby, feeling the cool mountain breeze on your skin, making it the perfect strategic anchor before you climb the rising staircases beyond. Stay long enough for the light to change. Morning is for orientation and maps; late afternoon is for photography, when the indigo deepens and the square fills with the smell of bread and charcoal. This is not a place to rush through. It is Chefchaouen's salon, the room in which the Blue Pearl teaches you its pace.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/chefchaouen/outa-el-hammam-square-1.webp", "/images/destinations/chefchaouen/outa-el-hammam-square-2.webp", "/images/destinations/chefchaouen/outa-el-hammam-square-3.webp"]
      },
      {
        title: "Chefchaouen Kasbah",
        localName: "Qasbat Chaouen",
        description: "Gardens, museum rooms and rampart views over blue lanes make the kasbah the town's historic nucleus, an Andalusian-founded fortress in a Rif setting, its red-brown walls a warm counterpoint to the indigo medina. Inside, a small museum and a garden of citrus and fountains offer a pause from the staircases outside. Climb the towers for one of the best aerial views of Chefchaouen's blue bowl, a photograph that explains the city's fame more honestly than any drone shot from a rooftop café. Walk the garden paths, study ethnographic objects that speak of Rif life, then sit on the ramparts as swallows cut the air. The signature visit pairs the kasbah with Outa el-Hammam just below: history, then tea. You leave with a sense of Chefchaouen as a mountain stronghold that chose beauty as its defence, and still lives inside that choice.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/chefchaouen/chefchaouen-kasbah-1.webp", "/images/destinations/chefchaouen/chefchaouen-kasbah-2.webp", "/images/destinations/chefchaouen/chefchaouen-kasbah-3.webp"]
      },
      {
        title: "Ras El Maa",
        localName: "Ras El Maa",
        description: "A mountain spring cascade at the medina's edge, Ras El Maa is where locals still wash clothes in the cold water of the Rif and travellers cool their hands, a simple, photogenic and deeply local scene after the staged blues of the inner lanes. The sound of water is the destination. Walk out from the medina as the paint thins and the mountain asserts itself, then sit on a rock as laundry snaps in the breeze and children play at the edge of the stream. Taste a glass of tea from a nearby stall, dip your wrists in the spring, and photograph the contrast of wet stone, green hillside and the last blue walls. The high-intent moment is unhurried and respectful, remembering that this is a working wash-place, not a theme. From here the Spanish Mosque path begins, so Ras El Maa is both an experience and a threshold into Chefchaouen's mountain self.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/chefchaouen/ras-el-maa-1.webp", "/images/destinations/chefchaouen/ras-el-maa-2.webp", "/images/destinations/chefchaouen/ras-el-maa-3.webp"]
      },
      {
        title: "Spanish Mosque",
        localName: "Masjid Espanya",
        description: "A hillside viewpoint mosque offering the classic panorama of Chefchaouen's blue bowl at sunset, the Spanish Mosque is a short hike with maximum reward, a white building on a spur above the medina that was never fully a working parish and has become the town's favourite belvedere. The walk from Ras El Maa is the ritual: rising paths, goats, and the medina slowly revealing itself as a single painted organism. Time your arrival for the hour before dusk. Sit on the slope, not only at the mosque, as the indigo walls catch last light and the Rif peaks go violet. Photographers should bring a longer lens and patience. The signature experience is remaining until the call to prayer lifts from the bowl below, then walking down by phone-light or a small torch, legs pleasantly used, the town glittering. It is Chefchaouen's essential wide shot, earned on foot.",
        suggestedDuration: "1.5 Hours (round trip)",
        images: ["/images/destinations/chefchaouen/spanish-mosque-1.webp", "/images/destinations/chefchaouen/spanish-mosque-2.webp", "/images/destinations/chefchaouen/spanish-mosque-3.webp"]
      },
      {
        title: "Akchour Waterfalls",
        localName: "Shlalaton Akchour",
        description: "Riverside trails in Talassemtane National Park lead to God's Bridge, a natural limestone arch, and the Akchour cascades, an essential Rif nature day trip from Chefchaouen and a complete change of register from the blue medina. You hike along a mountain river, through oleander and boulders, toward pools where the water is cold enough to make you laugh. Wear proper shoes. Swim if you dare, eat a simple grilled-trout lunch at a riverside café, and continue toward the higher falls if energy allows. God's Bridge is the geological headline, a cathedral of stone you walk beneath. The high-intent day is not a tick-box waterfall selfie; it is a full outing in Amazigh mountain country, with time to sit, listen to the river, and return to Chefchaouen with wet hair and tired calves. The Blue Pearl makes more sense after you have seen the wild limestone that frames it.",
        suggestedDuration: "Full Day",
        images: ["/images/destinations/chefchaouen/akchour-waterfalls-1.webp", "/images/destinations/chefchaouen/akchour-waterfalls-2.webp", "/images/destinations/chefchaouen/akchour-waterfalls-3.webp"]
      }
    ]
  },
  {
    slug: "tetouan",
    name: "Tétouan",
    region: "Mediterranean & Blue North",
    eyebrow: "The White Dove",
    intro: "UNESCO-listed Tétouan preserves Andalusian medina craftsmanship between the Rif and the Mediterranean, a white city of artisan guilds, Hispano-Moorish palaces and a cultural seriousness that travellers often miss on the road to Chefchaouen. This was a Spanish protectorate capital; it remains a school of zellige, leather and embroidery. Come to walk, to watch makers work, and to feel a northern Morocco that is intimate, scholarly and beautifully whitewashed.",
    landmarks: [
      {
        title: "Old Medina (Andalusian Architecture)",
        localName: "Medina Titwan",
        description: "Whitewashed lanes, artisan guilds and Andalusian spatial logic distinguish Tétouan's UNESCO medina, often quieter and more intimate than Fes or Marrakech, a town rebuilt by refugees from al-Andalus and still proud of that inheritance. The streets are a lesson in proportion: hidden courtyards, carved doors, and workshops where leather, mosaic and textile traditions remain active. Walk with a certified local specialist. Step into a zellige studio and watch a master chip a star from enamel, visit a leather workshop in the old guild streets, and order a small embroidered piece or a tile panel if you want an object with a lineage. Pause in a fondouk courtyard for tea. The high-intent experience is craft, not shopping theatre: meeting makers, smelling hide and plaster dust, hearing Spanish still in the architecture. Tétouan's medina is a living school, and it rewards travellers who give it the half-day it deserves.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/tetouan/old-medina-andalusian-architecture-1.webp", "/images/destinations/tetouan/old-medina-andalusian-architecture-2.webp", "/images/destinations/tetouan/old-medina-andalusian-architecture-3.webp"]
      },
      {
        title: "Old Mellah",
        localName: "l-Mellah",
        description: "The historic Jewish quarter adds another layer to Tétouan's plural heritage, a neighbourhood of balconies, former synagogues and trading houses best explored with cultural context on Andalusian and Sephardic migrations. After 1492, Tétouan became a haven for Muslims and Jews leaving Iberia; the Mellah still holds the memory of that shared city. Walk slowly with a guide who can point out architectural clues rather than reducing the quarter to a footnote. Photograph the taller houses and the different street rhythm, then sit nearby to absorb what you have heard. The experience is reflective, sometimes melancholy, and essential to understanding northern Morocco as more than a blue-town postcard. Pair the Mellah with the Andalusian medina core, and Tétouan becomes a story of coexistence, craft and exile, told in white walls and the Mediterranean light that fills them.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/tetouan/old-mellah-1.webp", "/images/destinations/tetouan/old-mellah-2.webp", "/images/destinations/tetouan/old-mellah-3.webp"]
      },
      {
        title: "Royal Palace Gates",
        localName: "Bab l-Qsar Malaki",
        description: "Ornate palace gates on Feddan Square announce Tétouan's royal and ceremonial role in northern Morocco, a façade of zellige, carved plaster and cedar that is among the most photogenic ceremonial fronts in the country. The palace itself is not a public museum; the gates are the encounter, a statement of monarchy facing the old Spanish-era square. Come in the morning for cleaner light and fewer cars. Photograph the geometry of the doors, then turn to take in Feddan as a civic room, a place of meeting, taxis and mountain air. A coffee on the square lets you watch the gates as locals do, as a backdrop to ordinary life. The signature visit is brief but concentrated: five minutes of looking that become twenty, because the craftsmanship rewards attention. It is Tétouan's orientation point, the moment the White Dove shows you it is also a city of court and ceremony.",
        suggestedDuration: "30 Minutes",
        images: ["/images/destinations/tetouan/royal-palace-gates-1.webp", "/images/destinations/tetouan/royal-palace-gates-2.webp", "/images/destinations/tetouan/royal-palace-gates-3.webp"]
      },
      {
        title: "Archaeological Museum",
        localName: "Mat7af Athari",
        description: "Collections spanning Roman Lixus to Islamic eras illuminate northern Morocco's deep timeline beyond the medina streets, a compact museum that gives Tétouan an intellectual backbone many visitors never discover. Mosaics, bronzes and objects from the coast and the Rif trace a region that has always looked toward both the Mediterranean and the interior. Give it a proper hour and a half. Move slowly through the Roman rooms, then into later periods, letting a guide or good labelling connect Lixus, the medina and the palace square into one story. The luxury is context: after the museum, the white lanes feel older, more layered, less like a pretty town and more like a palimpsest. Pair the visit with a craft walk, and you have Tétouan's ideal day, archaeology in the morning, living artisans in the afternoon, Mediterranean light throughout.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tetouan/archaeological-museum-1.webp", "/images/destinations/tetouan/archaeological-museum-2.webp", "/images/destinations/tetouan/archaeological-museum-3.webp"]
      }
    ]
  },
  {
    slug: "al-hoceima",
    name: "Al Hoceima",
    region: "Mediterranean & Blue North",
    eyebrow: "Mediterranean Cliffs",
    intro: "Al Hoceima pairs Rif mountain drama with some of Morocco's finest Mediterranean beaches and a national park coastline of cliffs, coves and marine blue. This is not the Atlantic's surf culture; it is a different sea, clearer, calmer, framed by limestone and Amazigh highland. Travellers come to swim, to boat along inaccessible shores, and to feel a northern Morocco that smells of pine, salt and grilled fish.",
    landmarks: [
      {
        title: "Quemado Beach",
        localName: "Plage Quemado",
        description: "The city's signature cove sits beneath cliffs, a compact crescent of Mediterranean colour after the Rif road journeys, with cafés, summer swimming and a theatrical sense of arrival as the town drops to the sea. Quemado is Al Hoceima at its most social: families in the shallows, young people on the promenade, and the water a hard, inviting blue. Spend a half-day in unapologetic seaside leisure. Swim in clear water, walk the corniche, then sit for a lunch of grilled sardines or sea bream with lemon and olive oil. In the late afternoon the cliffs take on a honeyed tone and the cove becomes a bowl of light. The signature experience is simply being in the water here after inland travel, feeling the temperature change, the salt on your skin, the Rif still visible above the town. It is the Mediterranean as Moroccans on this coast actually live it.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/al-hoceima/quemado-beach-1.webp", "/images/destinations/al-hoceima/quemado-beach-2.webp", "/images/destinations/al-hoceima/quemado-beach-3.webp"]
      },
      {
        title: "Tala Youssef Beach",
        localName: "Plage Tala Youssef",
        description: "A scenic coastal stretch favoured for clearer water and quieter swimming near Al Hoceima, Tala Youssef offers a more spacious, less urban beach hour than Quemado, with room to walk, picnic and let the Mediterranean do its slow work. The setting is still cliff-framed, still intensely blue, but the mood is more private. Bring a book, a towel and time. Swim out far enough to see the coastline as a cut of limestone and scrub, then walk the sand until the cafés thin. If you snorkel, the water can reward you with a first glimpse of the marine life that the national park protects more formally. The high-intent half-day is simple: a quieter beach, a simple fish lunch, and a return to town as the light softens. Al Hoceima's luxury is not a monument; it is this quality of sea, and Tala Youssef is one of its best expressions.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/al-hoceima/tala-youssef-beach-1.webp", "/images/destinations/al-hoceima/tala-youssef-beach-2.webp", "/images/destinations/al-hoceima/tala-youssef-beach-3.webp"]
      },
      {
        title: "Al Hoceima National Park",
        localName: "Park Watani Al Hoceima",
        description: "Cliffs, marine biodiversity and hiking trails protect one of Morocco's most important Mediterranean ecosystems, a park of inaccessible coves, ospreys and limestone drama that is ideal for nature-first itineraries. This is the wild counterpart to the town beaches, a coastline best seen by a combination of boat and walking. Hire a local guide or a licensed boatman. Cruise beneath pale cliffs, snorkel in designated areas if conditions allow, and walk a trail that smells of pine and salt. Pack a picnic and binoculars. The signature full day is unhurried and slightly expeditionary, a reminder that the Rif meets the sea in a landscape still capable of solitude. Photographers will find a Morocco that does not look like the imperial cities at all: marine light, raw stone, and water the colour of blown glass. Return to Al Hoceima for grilled fish and the pleasant fatigue of a coast earned.",
        suggestedDuration: "Full Day",
        images: ["/images/destinations/al-hoceima/al-hoceima-national-park-1.webp", "/images/destinations/al-hoceima/al-hoceima-national-park-2.webp", "/images/destinations/al-hoceima/al-hoceima-national-park-3.webp"]
      }
    ]
  },
  {
    slug: "saidia",
    name: "Saïdia",
    region: "Mediterranean & Blue North",
    eyebrow: "The Blue Pearl of the East",
    intro: "Saïdia offers Morocco's longest Mediterranean beach front, marina leisure and wetland birdlife at the Moulouya estuary, a far-eastern resort where the sea is calm, the sand is pale, and Spain is a rumour beyond the horizon. This is a different Morocco from the imperial cities: sunrise walks of many kilometres, marina evenings, and, for those who look inland, a river mouth alive with migratory birds. It is the luxury of space, light and a sea that invites you in.",
    landmarks: [
      {
        title: "Saïdia 14km Beach Front",
        localName: "Plage Saidia",
        description: "An unbroken ribbon of Mediterranean sand famed as Morocco's longest beach, Saïdia's front is defined by sunrise walks, summer swimming culture and a sense of almost excessive space, a pale strand that seems to go on until the idea of a city dissolves. The water is typically calmer than the Atlantic, a turquoise invitation. Spend a half-day in motion and rest: walk kilometres at the waterline at dawn, when the sand is ribbed and empty, then swim, then claim a café for a long, salty breakfast. In season the beach becomes a social theatre; out of season it is almost private. The signature experience is the walk itself, the physical luxury of a coast that does not end after a postcard cove. Photographers should work the early and late light, when the Mediterranean turns to silk. Saïdia's argument is simple and persuasive: come for the length, stay for the light.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/saidia/saidia-14km-beach-front-1.webp", "/images/destinations/saidia/saidia-14km-beach-front-2.webp", "/images/destinations/saidia/saidia-14km-beach-front-3.webp"]
      },
      {
        title: "Saïdia Marina",
        localName: "Marina Saidia",
        description: "A modern marina complex of promenades and dining, Saïdia Marina is eastern Morocco's contemporary leisure waterfront, a planned crescent of boats, restaurants and evening walkers that contrasts with the wilder estuary nearby. The mood is resort-Mediterranean: white architecture, masts, and the clink of glasses as the heat drops. Come at dusk. Walk the quays, browse a terrace menu of grilled fish and Moroccan salads, and watch the sky go from apricot to navy over a still basin. It is not a historic kasbah; it is a place to dress a little, eat well, and enjoy the designed ease of a coast built for holidays. The high-intent evening pairs marina dinner with a last walk on the long beach, salt air after linen napkins. Saïdia's luxury is this double life: kilometres of undeveloped-feeling sand, then a harbour that knows how to host a night.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/saidia/saidia-marina-1.webp", "/images/destinations/saidia/saidia-marina-2.webp", "/images/destinations/saidia/saidia-marina-3.webp"]
      },
      {
        title: "Moulouya River Bird Estuary",
        localName: "Masabb Moulouya",
        description: "A vital wetland for migratory birds near the Algerian frontier, the Moulouya estuary is where Saïdia's resort identity meets serious ecology, a river mouth of reeds, mudflats and sky that draws flamingos, waders and the travellers who travel with binoculars. This is not a theme park; it is a protected landscape that rewards quiet. Go with a local birding guide if you can. Walk the tracks at the hours birds prefer, early and late, and let the resort fall away until you hear only wind in the reeds. Photograph reflections, not only species. The signature outing is a slow three hours that recalibrates the whole stay: Saïdia as more than a beach, as a meeting of Mediterranean and Maghreb flyways. Bring water, a hat and patience. Few Moroccan coastal days feel this spacious, or this unexpectedly wild, so close to a marina of white buildings.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/saidia/moulouya-river-bird-estuary-1.webp", "/images/destinations/saidia/moulouya-river-bird-estuary-2.webp", "/images/destinations/saidia/moulouya-river-bird-estuary-3.webp"]
      }
    ]
  },
  {
    slug: "ouarzazate",
    name: "Ouarzazate",
    region: "Sahara & Southern Oases",
    eyebrow: "Door of the Desert",
    intro: "Ouarzazate is the cinematic gateway to kasbah country, film studios and the road toward Merzouga, a high desert town of ochre walls, Glaoui palaces and a light that directors have been chasing for decades. From here the South begins in earnest: ksour, palm oases, and the feeling that every mudbrick silhouette might be a set. Travellers come for Aït Benhaddou, stay for the desert horizon, and leave with dust on their shoes and cinema in their eyes.",
    landmarks: [
      {
        title: "Ksar Aït Benhaddou",
        localName: "Ksar Ayt Benhaddou",
        description: "UNESCO-listed earthen ksar cascading above the Ounila River, Aït Benhaddou is Morocco's most iconic southern citadel, a stacked village of rammed earth and almond-coloured towers that has doubled for Jerusalem, Egypt and imagined kingdoms on screen. The real luxury is the fabric itself: defensive architecture, community granaries, and a living handful of families still in the old ksar. Cross the riverbed, climb the lanes to the granary at the summit, and look back over a valley of palms and bare hills. Hire a local guide from the village, not a distant lecturer, and you will hear how the Glaoui era, caravan trade and Hollywood layered onto the same clay. Stay for the late light, when the ksar seems to generate its own gold. The signature experience is that ascent, a glass of tea at the top, and the slow realisation that this is not a set. It is a town that learned to look eternal.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/ouarzazate/ksar-ait-benhaddou-1.webp", "/images/destinations/ouarzazate/ksar-ait-benhaddou-2.webp", "/images/destinations/ouarzazate/ksar-ait-benhaddou-3.webp"]
      },
      {
        title: "Atlas Film Studios",
        localName: "Studios Atlas",
        description: "Hollywood and world-cinema sets rise from the desert scrub outside Ouarzazate: Egyptian temples, Jerusalem walls, Tibetan monasteries and kasbah façades used in dozens of productions, a surreal archaeology of make-believe in genuine Saharan light. Atlas Studios is both a working lot and a visitor experience, a place where you walk through other people's epics. Take the guided tour. Step into a fake temple that photographs as real, stand in a biblical street that is only plaster and timber, and listen to which blockbusters passed through this dust. The high-intent visit is playful and photographic, especially in the hard midday sun that directors love. Pair it with Aït Benhaddou the same day and you understand Ouarzazate's double genius: a real earthen city, and a factory of imaginary ones. Few places on earth let you wander so freely between history and the history of cinema.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/ouarzazate/atlas-film-studios-1.webp", "/images/destinations/ouarzazate/atlas-film-studios-2.webp", "/images/destinations/ouarzazate/atlas-film-studios-3.webp"]
      },
      {
        title: "Taourirt Kasbah",
        localName: "Qasbat Taourirt",
        description: "A Glaoui-era mudbrick palace complex in Ouarzazate town, Taourirt is a labyrinth of corridors, restored chambers and stacked towers that illustrates southern power politics more intimately than any distant ksar. The Glaoui family once commanded the caravan south; their kasbah still occupies the town like a memory of that command. Walk the restored rooms with a guide who can read the architecture, then climb to terraces that look over Ouarzazate's newer streets and the desert edge. Photograph the play of shadow in the passages, the painted cedar where it survives, the sheer mass of rammed earth. The signature visit is atmospheric rather than palatial, a sense of how power lived in the south: defensive, ornate, and always watching the road. Afterwards, sit for tea in town and let the kasbah's silhouette work on you. It is the Door of the Desert's own house, still standing.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/ouarzazate/taourirt-kasbah-1.webp", "/images/destinations/ouarzazate/taourirt-kasbah-2.webp", "/images/destinations/ouarzazate/taourirt-kasbah-3.webp"]
      },
      {
        title: "Cinema Museum",
        localName: "Mat7af Cinema",
        description: "Props, posters and production lore celebrate Ouarzazate's identity as Morocco's Hollywood of the desert, a museum that makes sense of the strange feeling that you have seen this landscape before, because you have, in Lawrence, Gladiator, Game of Thrones and a hundred other frames. The collections are affectionate rather than vast, which is part of their charm. Move slowly through costumes and set pieces, then step outside and look at the real ochre hills with new eyes. A good visit is conversational: which films you remember, which locations you will still pass on the road to the dunes. The high-intent pairing is museum plus studios plus Aït Benhaddou, a full cinema-and-clay day. Ouarzazate is a working town, not a theme park, but this museum lets travellers honour the dream factory without missing the genuine kasbahs that made the dream possible.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/ouarzazate/cinema-museum-1.webp", "/images/destinations/ouarzazate/cinema-museum-2.webp", "/images/destinations/ouarzazate/cinema-museum-3.webp"]
      }
    ]
  },
  {
    slug: "merzouga",
    name: "Merzouga",
    region: "Sahara & Southern Oases",
    eyebrow: "Erg Chebbi",
    intro: "Merzouga fronts Erg Chebbi's towering dunes, Morocco's classic Sahara stage for camel treks, luxury bivouacs and sunrises that turn the sand into fire. The erg is a sea of gold, sculpted daily by wind, rising more than a hundred and fifty metres above the hamada. You come to ride into silence, to sleep under a sky of impossible stars, and to hear Gnawa music in a village that remembers the caravan south.",
    landmarks: [
      {
        title: "Erg Chebbi Dunes",
        localName: "Raml Erg Chebbi",
        description: "Golden dune ridges rising over 150 metres create Morocco's most photogenic Sahara amphitheatre, a landscape of knife-edge crests and deep shadows where sunrise and sunset are non-negotiable. Erg Chebbi is not a backdrop; it is a physical experience of climbing, sliding and staring. Mount a camel in the late afternoon and ride beyond the first dune line as the heat breaks, or take a supervised sandboard down a lee slope. At the crest, turn a slow circle: Algeria somewhere in the shimmer, the village a dark stitch of palms, the sand itself a living sculpture. Photographers should work the blue hour as well as the gold. The signature luxury is remaining until the temperature drops and the erg goes violet, then either returning by 4x4 or continuing to a camp. This is the Sahara of the imagination, and it still, astonishingly, matches it.",
        suggestedDuration: "Half Day to Overnight",
        images: ["/images/destinations/merzouga/erg-chebbi-dunes-1.webp", "/images/destinations/merzouga/erg-chebbi-dunes-2.webp", "/images/destinations/merzouga/erg-chebbi-dunes-3.webp"]
      },
      {
        title: "Desert Bivouacs",
        localName: "Bivouac Sahara",
        description: "Luxury and traditional camps beyond the first dune line offer Amazigh music, star-heavy skies and the essential overnight Sahara ritual, a night in which the erg becomes a private theatre and the wind writes new ridges while you sleep. Choose according to taste: a simple Berber tent with rugs and a fire, or a high-end camp of canvas suites, proper beds and a table in the sand. Either way, the liturgy is the same. Ride or drive in at dusk, watch the last light leave the dunes, then share a tagine under a sky so dense with stars that the Milky Way looks three-dimensional. Some camps offer drums and song; the best also offer silence. Wake for sunrise on a high crest, coffee steaming in the cold. The high-intent stay is not a party in the desert; it is the rare feeling of being hosted by emptiness, and treated well.",
        suggestedDuration: "Overnight",
        images: ["/images/destinations/merzouga/desert-bivouacs-1.webp", "/images/destinations/merzouga/desert-bivouacs-2.webp", "/images/destinations/merzouga/desert-bivouacs-3.webp"]
      },
      {
        title: "Khamlia Gnawa Village",
        localName: "Khamlia",
        description: "A village known for Gnawa musical heritage rooted in Sub-Saharan lineages, Khamlia deepens the desert story beyond dunes alone, a community whose ancestors arrived with the caravan trades and whose iron castanets and bass lutes still call spirits and guests with equal seriousness. This is not a hotel show. Visit with respect, preferably through a community arrangement, and sit for a performance in a simple room or courtyard where the music can work on you at close range. Drink tea, listen more than you photograph, and let a local explain how Gnawa here relates to both faith and history. The signature hour is cultural and emotional, a reminder that Erg Chebbi's luxury is incomplete without people. Pair Khamlia with a dune sunset, and Merzouga becomes more than a sand destination: it becomes a meeting of Sahara, Sahel and the living arts of the south.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/merzouga/khamlia-gnawa-village-1.webp", "/images/destinations/merzouga/khamlia-gnawa-village-2.webp", "/images/destinations/merzouga/khamlia-gnawa-village-3.webp"]
      },
      {
        title: "Dayet Srij",
        localName: "Dayet Srij",
        description: "A seasonal lake near Merzouga that can attract flamingos after rains, Dayet Srij is a surprising wetland interlude in the desert basin, a sheet of water where the erg's gold is suddenly answered by pink birds and a sky doubled on the surface. It is not guaranteed; the Sahara does not perform on command. When the lake is living, however, the contrast is unforgettable. Drive out with a local who knows the current conditions, walk the shore quietly, and use binoculars rather than crowding the birds. Photograph the dunes standing over water, a composition that undoes every cliché of a dry desert. Even in drier seasons the depression has a spare beauty, a reminder of how this basin fills and empties. The high-intent stop is short, ecological and humbling: proof that Merzouga's landscape is not only sand, but a whole arid system capable of sudden grace.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/merzouga/dayet-srij-1.webp", "/images/destinations/merzouga/dayet-srij-2.webp", "/images/destinations/merzouga/dayet-srij-3.webp"]
      }
    ]
  },
  {
    slug: "zagora",
    name: "Zagora & M'hamid",
    region: "Sahara & Southern Oases",
    eyebrow: "Timbuktu Road",
    intro: "Zagora and M'hamid mark the Draa Valley's desert threshold, a world of palm oases, green-glazed pottery, Quranic libraries and the wilder dunes of Erg Chigaga. The old sign famously counted fifty-two days to Timbuktu; today the journey is into silence rather than the Sudan. Travellers who want a Sahara less crowded than Merzouga come here to sleep in deeper sand, walk kasbah-lined palmeraies, and watch the Draa, Morocco's longest river, dissolve toward the desert.",
    landmarks: [
      {
        title: "Erg Chigaga Wild Dunes",
        localName: "Erg Chigaga",
        description: "Remoter and wilder than Erg Chebbi, Erg Chigaga demands a 4x4 approach from M'hamid across hamada and dry lake, a vast silence and fewer camps for travellers seeking a deeper Sahara. The dunes are not a compact amphitheatre; they are a scattered ocean of gold, some peaks rising toward a hundred metres, the spaces between them large enough to feel like weather. This is an overnight expedition, not a sunset ticket. Ride out with an experienced driver, watch the landscape empty, then reach camp as the light dies. Walk a crest at dusk, share a fire, and sleep in a quiet that Merzouga's first dune line can no longer offer. Sunrise here is almost private. The high-intent luxury is difficulty itself: the hours of track, the dust, the reward of a desert that still behaves like a wilderness. Chigaga is the Timbuktu Road's last great gesture.",
        suggestedDuration: "Overnight Expedition",
        images: ["/images/destinations/zagora/erg-chigaga-wild-dunes-1.webp", "/images/destinations/zagora/erg-chigaga-wild-dunes-2.webp", "/images/destinations/zagora/erg-chigaga-wild-dunes-3.webp"]
      },
      {
        title: "Tamegroute Library & Green Pottery",
        localName: "Tamgrout",
        description: "An ancient Quranic library tradition meets distinctive green-glazed pottery workshops in Tamegroute, one of the Draa's most rewarding cultural stops and a town that has been a zaouia of learning for centuries. In the library, manuscripts of astronomy, law and scripture rest in a hush that feels older than the desert road; in the potteries, the famous copper-green glaze, born of local clay and firing, still coats plates and bowls stacked like treasure. Visit both. Handle a manuscript only as permitted, then walk into a workshop and watch a potter throw the forms that travellers carry home from the south. The high-intent souvenir is a green-glazed piece bought from the maker, still smelling faintly of kiln. Sit for tea, let a guide explain the Naciri brotherhood's role, and feel the Draa not as empty desert but as a corridor of faith, craft and oasis knowledge.",
        suggestedDuration: "2 Hours",
        images: ["/images/destinations/zagora/tamegroute-library-and-green-pottery-1.webp", "/images/destinations/zagora/tamegroute-library-and-green-pottery-2.webp", "/images/destinations/zagora/tamegroute-library-and-green-pottery-3.webp"]
      },
      {
        title: "Draa Valley Oases",
        localName: "Wahat Wadi Draa",
        description: "Palm corridors, kasbah silhouettes and mudbrick villages line the Draa, Morocco's longest river valley and a slow-travel paradise between the High Atlas and the true desert. Dates hang in golden clusters, irrigation channels tick with water, and every turn seems to offer another ksar against a bare hill. This is a landscape to be driven and walked, not rushed. Stop in a palmeraie and follow a local path among the trees, tasting a date picked with permission, photographing the contrast of green and ochre. Share mint tea in a kasbah guesthouse if you are invited. The signature half-day is a meander rather than a monument: several short stops, a picnic in the shade, the river's ghost in the oases even when the bed is dry. The Draa teaches the south's real secret: the Sahara is habitable because of these ribbons of water and work.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/zagora/draa-valley-oases-1.webp", "/images/destinations/zagora/draa-valley-oases-2.webp", "/images/destinations/zagora/draa-valley-oases-3.webp"]
      }
    ]
  },
  {
    slug: "tinghir",
    name: "Tinghir & Boumalne",
    region: "Sahara & Southern Oases",
    eyebrow: "Canyon Country",
    intro: "Tinghir and Boumalne Dades open Morocco's great canyon roads, where Todgha's limestone walls rise above a palm-fed stream and the Dades twists past the eroded towers nicknamed Monkey Fingers. This is geology as spectacle and as home: Amazigh villages, rose country in season, and gorges that climbers treat as a playground. You come to walk between cliffs, to drink tea in the palmeraie, and to drive a road that seems to have been designed for astonishment.",
    landmarks: [
      {
        title: "Todgha Gorges",
        localName: "Wadi Todgha",
        description: "Sheer limestone corridors rise hundreds of metres above a palm-fed stream, Morocco's premier canyon walk and a climbing playground of world reputation, a place where the sky becomes a narrow ribbon and the air cools as if the rock were breathing. In the narrowest section you can touch both moods of the south at once: oasis green and mineral verticality. Walk the floor of the gorge at morning, when the light is high enough to gild the walls but the tour buses have not yet filled the echo. Watch climbers work the routes, paddle your hands in the irrigation stream, and sit for a mint tea at a small café with the cliffs leaning in. The signature experience is unhurried passage, not a five-minute photograph from the road. Stay long enough for your neck to ache from looking up. Todgha is cathedral and river, and it still belongs to the villages that farm its mouth.",
        suggestedDuration: "2-3 Hours",
        images: ["/images/destinations/tinghir/todgha-gorges-1.webp", "/images/destinations/tinghir/todgha-gorges-2.webp", "/images/destinations/tinghir/todgha-gorges-3.webp"]
      },
      {
        title: "Dades Gorges (Monkey Fingers Rock)",
        localName: "Wadi Dades",
        description: "Serpentine roads climb past eroded rock formations nicknamed Monkey Fingers, a Dades Valley of kasbah viewpoints, switchbacks and geology so theatrical it looks sculpted. The famous formations are only the headline; the whole gorge is a lesson in how water and time can fold a mountain. Drive it slowly, with stops. Walk a short path among the finger rocks, photograph kasbahs stacked above the river, and take tea on a terrace that hangs over the valley. In season the Dades is also rose country, the air sweet with harvest. The high-intent half-day is a combination of driving drama and small encounters: a village stop, a walk, a meal of local vegetables and bread. Sunset on the upper bends turns the limestone to rust and gold. This is not a canyon you consume in a single viewpoint; it is a road that keeps offering another, better, more impossible curve.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/tinghir/dades-gorges-monkey-fingers-rock-1.webp", "/images/destinations/tinghir/dades-gorges-monkey-fingers-rock-2.webp", "/images/destinations/tinghir/dades-gorges-monkey-fingers-rock-3.webp"]
      },
      {
        title: "Tinghir Palmeraie",
        localName: "Palmeraie Tinghir",
        description: "A lush palm oasis at the foot of the gorges, Tinghir's palmeraie is irrigation channels, village life and green contrast after desert approaches, a working forest of dates, alfalfa and mudbrick houses that makes the canyon country habitable. This is the human Todgha, the reason the gorge is more than a geological stunt. Walk with a local guide along the seguia, the water channels, listening to the tick of irrigation and the rustle of palms. Visit a garden plot if invited, taste a date, and photograph the way kasbah towers rise from the greenery like ships. The signature hour and a half is slow and shade-seeking, a relief from the gorge's white glare. Share mint tea on a rooftop that looks over the oasis to the cliffs. Travellers who only drive the canyon miss this: the luxury of a living palmeraie, cool, intricate, and still farming the desert's edge.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/tinghir/tinghir-palmeraie-1.webp", "/images/destinations/tinghir/tinghir-palmeraie-2.webp", "/images/destinations/tinghir/tinghir-palmeraie-3.webp"]
      }
    ]
  },
  {
    slug: "imlil",
    name: "Imlil & Toubkal",
    region: "High Atlas",
    eyebrow: "Mountain Trailhead",
    intro: "Imlil is the High Atlas gateway for Toubkal ascents, Amazigh villages and mule-path culture above Marrakech, a walnut-grove trailhead where the air thins and the hospitality thickens. North Africa's highest peak stands above the valley like a fact. You come to walk, to sleep in stone houses, to drink mint tea with a village family, and to decide whether the summit is a photograph or a two-day vow.",
    landmarks: [
      {
        title: "Imlil Village Basecamp",
        localName: "Imlil",
        description: "The classic trailhead village for Toubkal is a composition of mountain lodges, mule trains and walnut-grove walks into Amazigh highland life, a place that smells of woodsmoke, mint and the mineral cold of water off the massif. Imlil is not merely a parking lot for trekkers; it is a living village that has learned to host the world's mountain appetite without losing its own. Arrive and slow down. Walk the irrigation paths among walnuts, watch mules being loaded for the higher refuges, and sit in a stone guesthouse for a tagine that tastes of altitude. The high-intent stay is overnight, not a day-trip tick: evening conversation with your hosts, a sky of hard stars, morning light on Toubkal. Even if you never summit, Imlil offers the luxury of a genuine mountain threshold, the feeling that Marrakech's heat is a rumour from another country.",
        suggestedDuration: "Half Day to Overnight",
        images: ["/images/destinations/imlil/imlil-village-basecamp-1.webp", "/images/destinations/imlil/imlil-village-basecamp-2.webp", "/images/destinations/imlil/imlil-village-basecamp-3.webp"]
      },
      {
        title: "Mount Toubkal Basecamp",
        localName: "Toubkal Refuge",
        description: "The high refuge approach is North Africa's most iconic trek corridor, a mule path of boulders, streams and thinning air that leads toward Jebel Toubkal, 4,167 metres, the roof of the Maghreb. Guided ascents reward summit views over the Atlas massif, but the refuge day itself is already an experience: the rhythm of walking, the taste of sweet tea at a rest stone, the first sight of snow in season. Do this with a licensed mountain guide. Sleep at the refuge, rise in the dark, and climb toward a sunrise that ignites a sea of peaks. Even strong hikers should respect altitude, weather and the ethics of hiring local teams. The signature luxury is earned: burning lungs, then a silence so complete it feels like a room. Returning to Imlil, you will understand why this valley has always been a place of passage, prayer and high pasture, not merely a sport.",
        suggestedDuration: "2-3 Days (trek)",
        images: ["/images/destinations/imlil/mount-toubkal-basecamp-1.webp", "/images/destinations/imlil/mount-toubkal-basecamp-2.webp", "/images/destinations/imlil/mount-toubkal-basecamp-3.webp"]
      },
      {
        title: "Aroumd & High Villages",
        localName: "Aroumd",
        description: "Terraced villages above Imlil offer gentle acclimatisation walks and intimate encounters with Atlas hospitality, a world of stone houses, barley terraces and paths that have always been mule roads. Aroumd, one of the most visited, still rewards those who walk in rather than merely stopping for a view. Hike up through walnut and apple, then sit in a family guesthouse for mint tea poured from a height, bread, and perhaps a simple lunch of vegetables and olive oil. Listen more than you ask. The high-intent experience is a homestay hour that is neither performance nor intrusion, arranged through your lodge, a chance to see how Amazigh highland life actually feels: thick walls, low doors, a view of Toubkal from a courtyard. Photograph the terraces as geometry. These villages are the human High Atlas, and they make the summit story complete.",
        suggestedDuration: "3 Hours",
        images: ["/images/destinations/imlil/aroumd-and-high-villages-1.webp", "/images/destinations/imlil/aroumd-and-high-villages-2.webp", "/images/destinations/imlil/aroumd-and-high-villages-3.webp"]
      }
    ]
  },
  {
    slug: "ifrane",
    name: "Ifrane",
    region: "Alpine Atlas",
    eyebrow: "Little Switzerland",
    intro: "Ifrane's alpine architecture, cedar air and university-town calm create Morocco's unexpected European highland resort, a place of pitched roofs, trout streams and winter frost in a country famous for desert heat. The French built a garden city in the Middle Atlas; Morocco made it a campus and a weekend refuge. You come to walk under cedars, to breathe a cooler Morocco, and to remember that this kingdom has mountains that know snow.",
    landmarks: [
      {
        title: "Al Akhawayn University",
        localName: "Jami3at Al Akhawayn",
        description: "A prestigious hillside campus that shapes Ifrane's cosmopolitan character, Al Akhawayn is a garden of cedar, lawn and architecture that repays a scenic stroll even for travellers with no student to visit. Founded in the 1990s as a gift of two kings, it feels like a small New England college translated into Middle Atlas light. Walk the public paths when access allows, photograph the mix of stone, roof pitch and mountain backdrop, and sit with a coffee in town afterwards among a young, international crowd. The luxury is atmospheric: Ifrane as a thinking place, not only a ski postcard. In autumn the air is cider-sharp; in winter the campus can look almost alpine. Pair the walk with Ain Vittel or the lion statue, and you have the town's civilised core, a Morocco of libraries, frost and Friday couscous in chalet-style houses.",
        suggestedDuration: "1 Hour",
        images: ["/images/destinations/ifrane/al-akhawayn-university-1.webp", "/images/destinations/ifrane/al-akhawayn-university-2.webp", "/images/destinations/ifrane/al-akhawayn-university-3.webp"]
      },
      {
        title: "Lion of Ifrane",
        localName: "Sba3 Ifrane",
        description: "The stone lion statue is the town's playful landmark and meeting point amid chalet-style streets, a carved beast that children climb and travellers use to orient themselves in a resort that can feel, at first, almost too tidy for Morocco. The lion is folklore and photo stop, a reminder that these cedar forests once held real cats. Come for five minutes and stay for the square. Photograph the statue against pitched roofs and winter breath, or against summer geraniums, then walk the nearby streets of stone villas and cafés. The signature pause is a hot chocolate or mint tea within sight of the lion, watching Ifrane's weekend theatre of families, students and mountain air. It is not a monument of empire; it is the town's smile, and it works. From here the forests, the ski hill and the university are all an easy, pleasant radius.",
        suggestedDuration: "30 Minutes",
        images: ["/images/destinations/ifrane/lion-of-ifrane-1.webp", "/images/destinations/ifrane/lion-of-ifrane-2.webp", "/images/destinations/ifrane/lion-of-ifrane-3.webp"]
      },
      {
        title: "Ain Vittel",
        localName: "Ain Vittel",
        description: "Wooded springs and picnic groves on Ifrane's edge, Ain Vittel is a local favourite for weekend mountain air, a green amphitheatre of cedar, water and the smell of damp earth that feels closer to the Alps than to the medina. Families come with tagines and blankets; travellers come to walk and to listen to a Morocco that is quiet. Follow the paths among the trees, sit by the springs, and let the university town fall away. In warm months it is shade and birdsong; in cold months it can be frost, mud and a sharper kind of beauty. Bring a picnic of bread, cheese and fruit, or eat at a simple local grill nearby. The high-intent visit is unhurried and almost domestic, the luxury of a highland park rather than a monument. Pair it with a forest drive toward Azrou's macaques, and the Middle Atlas begins to feel like a complete, breathing landscape.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/ifrane/ain-vittel-1.webp", "/images/destinations/ifrane/ain-vittel-2.webp", "/images/destinations/ifrane/ain-vittel-3.webp"]
      },
      {
        title: "Michlifen Ski Resort",
        localName: "Michlifen",
        description: "Seasonal skiing and year-round highland viewpoints near Ifrane make Michlifen Morocco's accessible Atlas snow playground, a volcanic crater rim of cedar and, in winter, a modest ski field that still delights because it exists at all. This is not the Alps; it is the pleasure of skiing in North Africa, of seeing Amazigh children on the slopes and drinking tea with a view of snow on African mountains. In season, hire local equipment and take a few runs, or simply walk in the snow with a camera. Out of season, come for the crater views, the cedar air and a sense of geological drama. The signature half-day is playful: cold cheeks, a simple lunch, photographs that will confuse anyone who thinks Morocco is only desert. Return to Ifrane's chalet streets as the light goes blue. Few travellers expect this chapter, which is exactly why it feels like a gift.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/ifrane/michlifen-ski-resort-1.webp", "/images/destinations/ifrane/michlifen-ski-resort-2.webp", "/images/destinations/ifrane/michlifen-ski-resort-3.webp"]
      }
    ]
  },
  {
    slug: "azrou",
    name: "Azrou",
    region: "Alpine Atlas",
    eyebrow: "Cedar Country",
    intro: "Azrou anchors the Middle Atlas cedar forests and Barbary macaque habitats around Cèdre Gouraud, a Berber market town whose name means the rock, and whose true monument is a living woodland. Between Fes and the south, this is where the air changes. You come to walk under Atlas cedars, to watch wild macaques move through the canopy, and to feel a Morocco of frost, wool and mountain honey.",
    landmarks: [
      {
        title: "Cedars Forest & Cèdre Gouraud",
        localName: "Ghabat l-Arz",
        description: "Ancient Atlas cedars and Barbary macaques make this forest one of Morocco's essential nature stops between Fes and the south, a cathedral of Cedrus atlantica where the light falls in shafts and the air smells of resin and cold earth. Cèdre Gouraud, the celebrated veteran tree, has become a symbol of a woodland under pressure and still capable of awe. Walk quietly. Watch wild macaques climb the ancient branches, keeping food packed away and a respectful distance, then continue among the trunks until the road noise dies. A local forest guide can explain ecology, not only photo stops. The signature outing is a slow two hours: photographs of moss and monkey, a picnic if permitted, the luxury of silence. In winter there may be snow on the cedar skirts; in summer the shade is a blessing. This is alpine Morocco at its most authentic, a living monument rather than a built one.",
        suggestedDuration: "2.5 Hours",
        images: ["/images/destinations/azrou/cedars-forest-and-cedre-gouraud-1.webp", "/images/destinations/azrou/cedars-forest-and-cedre-gouraud-2.webp", "/images/destinations/azrou/cedars-forest-and-cedre-gouraud-3.webp"]
      },
      {
        title: "Azrou Rock",
        localName: "Azrou (l-Hajra)",
        description: "The town takes its name from the large volcanic rock outcrop at its heart, an orientation point for markets, mountain roads and a Berber highland identity that is more workday than resort. The rock is both landmark and metaphor: Azrou as a place that sits firmly in the Middle Atlas, trading in wool, cedar and the traffic between imperial cities and the south. Walk around the outcrop, then dive into the nearby souk if it is a market day, a sensory hour of honey, cheese, carpets and the Amazigh language in the air. Photograph the rock against the town's roofs, have a simple couscous or grilled meat, and feel the difference from Ifrane's garden polish. The high-intent stop is cultural as well as geological: Azrou as a living mountain town, not only a gateway to macaques. From the rock, the cedar forest is a short drive, and the two together tell the whole Middle Atlas story.",
        suggestedDuration: "45 Minutes",
        images: ["/images/destinations/azrou/azrou-rock-1.webp", "/images/destinations/azrou/azrou-rock-2.webp", "/images/destinations/azrou/azrou-rock-3.webp"]
      }
    ]
  },
  {
    slug: "azilal",
    name: "Bin El Ouidane & Azilal",
    region: "Alpine Atlas",
    eyebrow: "Lakes & Cascades",
    intro: "Azilal province holds Bin El Ouidane's turquoise reservoir, Ouzoud's waterfalls and highland lake country toward Imilchil, a Middle Atlas of dam lakes, Barbary macaques and limestone gorges that feels like Morocco's secret water district. The roads are slower; the rewards are liquid. You come to boat a canyon lake, to stand in rainbow spray, and to sleep in a landscape of stone villages and improbable blue.",
    landmarks: [
      {
        title: "Bin El Ouidane Dam & Lake",
        localName: "Sadd Bin El Ouidane",
        description: "A vast turquoise reservoir in the Atlas foothills, Bin El Ouidane is boat rides, canyon viewpoints and hydroelectric drama south of Beni Mellal, a lake so intensely coloured it looks edited. The dam wall is a mid-century statement; the water is the luxury. Take a boat into the drowned canyon, feeling the temperature drop between the cliffs, then sit on a terrace for grilled fish or a simple tagine with that impossible blue as tablecloth. Photographers should work the high viewpoints where the lake becomes a ribbon of turquoise in folded rock. Active travellers can kayak or swim in designated areas when conditions allow. The signature half-day is liquid and slow: engine cut, silence, cliffs, and the knowledge that this is a working reservoir as well as a beauty. Few Moroccan landscapes so completely rewrite the desert cliché. Bin El Ouidane is the Atlas as inland sea.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/azilal/bin-el-ouidane-dam-and-lake-1.webp", "/images/destinations/azilal/bin-el-ouidane-dam-and-lake-2.webp", "/images/destinations/azilal/bin-el-ouidane-dam-and-lake-3.webp"]
      },
      {
        title: "Ouzoud Waterfalls",
        localName: "Shlalaton Ouzoud",
        description: "Morocco's most celebrated cascades plunge amid olive groves and Barbary macaques, a theatre of rainbow spray, terrace cafés and a path that descends beside one of North Africa's great waterfalls. Ouzoud is both spectacle and outing: you hear it before you see it, then the river becomes a white roar over red rock. Walk the full descent rather than stopping at the first viewpoint. Watch macaques in the trees, keeping food secure, then continue to the pools at the base where boats can nose toward the curtain of water. Eat at a terrace with the falls in your peripheral vision, mint tea trembling in the mist. The high-intent visit is a half-day of walking, watching and getting slightly wet, not a parking-lot selfie. Late light gilds the spray. Return up the hill slowly, calves burning, olives silver on the terraces, and you will understand why Ouzoud is the waterfall travellers compare all others to.",
        suggestedDuration: "Half Day",
        images: ["/images/destinations/azilal/ouzoud-waterfalls-1.webp", "/images/destinations/azilal/ouzoud-waterfalls-2.webp", "/images/destinations/azilal/ouzoud-waterfalls-3.webp"]
      },
      {
        title: "Imi n-Ifri Natural Bridge",
        localName: "Imi n-Ifri",
        description: "A dramatic natural rock bridge and gorge near Demnate, Imi n-Ifri is a short walk into surprising limestone geology, a mouth in the earth that Amazigh names as the door of the cave. You descend from the road into a cool, echoing hollow where a river has cut a tunnel and left a bridge of living stone. The walk is brief; the atmosphere is not. Go slowly, watch your footing, and look back at the oval of sky framed by rock. Photographers love the contrast of bright plateau and subterranean shade. Pair the stop with Demnate's olive country or a longer Azilal circuit, and it becomes a geological punctuation rather than an orphaned curiosity. The signature visit is forty-five minutes of wonder, then tea in the nearest village. It is a reminder that this province's luxury is often underfoot: water, time and limestone collaborating on architecture no court ever commissioned.",
        suggestedDuration: "1.5 Hours",
        images: ["/images/destinations/azilal/imi-n-ifri-natural-bridge-1.webp", "/images/destinations/azilal/imi-n-ifri-natural-bridge-2.webp", "/images/destinations/azilal/imi-n-ifri-natural-bridge-3.webp"]
      },
      {
        title: "Imilchil Lakes",
        localName: "B7ayrat Imilchil",
        description: "Highland lakes near Imilchil, legendary for the betrothal festival of Ait Haddidou and for a stark Atlas beauty of plateaux, stone villages and water the colour of cold metal, are best treated as a multi-day mountain circuit rather than a detour. Isli and Tislit, the twin lakes of a famous legend, sit in a landscape that feels closer to Central Asia than to the medina. Drive the high roads with time and respect for weather. Walk the shores, photograph the emptiness, and, if your timing coincides, witness a festival that is a living Amazigh social world, not a show. The high-intent stay is overnight in a simple guesthouse, sharing tea and a meal of mountain lamb or vegetables, then waking to a silence that has altitude in it. Imilchil is not convenient, which is the point. It is the Atlas as myth, lake and long horizon.",
        suggestedDuration: "Full Day to Overnight",
        images: ["/images/destinations/azilal/imilchil-lakes-1.webp", "/images/destinations/azilal/imilchil-lakes-2.webp", "/images/destinations/azilal/imilchil-lakes-3.webp"]
      }
    ]
  }
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
