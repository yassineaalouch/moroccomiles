"use client";

import { AnimatePresence, motion, useMotionValue, animate, type PanInfo } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Lock, Minus, Plus, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { builderCities, type BuilderCity, type LandmarkOption } from "@/lib/itinerary-cities";

export type CityStop = {
  citySlug: string;
  cityName: string;
  nights: number;
  landmarks: string[];
  includeAll: boolean;
};

type Phase = "anchor" | "map";

const CITY_COUNTS = [2, 3, 4, 5] as const;
const PATH_D = "M 60 320 C 180 120, 280 520, 420 280 S 680 80, 820 260 S 980 480, 1140 220";
const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

function getNodePositions(count: number) {
  const samples = [
    { x: 90, y: 290 },
    { x: 280, y: 360 },
    { x: 470, y: 250 },
    { x: 700, y: 180 },
    { x: 980, y: 300 }
  ];
  if (count <= 2) return [samples[0], samples[4]];
  if (count === 3) return [samples[0], samples[2], samples[4]];
  if (count === 4) return [samples[0], samples[1], samples[3], samples[4]];
  return samples;
}

function ImageSlideshow({
  images,
  alt,
  autoPlay = true,
  intervalMs = 3200,
  className = "",
  interactive = true
}: {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
  interactive?: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const safeImages = images.length > 0 ? images : ["/"];

  useEffect(() => {
    setSlide(0);
  }, [images]);

  useEffect(() => {
    if (!autoPlay || safeImages.length < 2) return;
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % safeImages.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [autoPlay, intervalMs, safeImages.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${alt}-${slide}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: LUXURY_EASE }}
        >
          <Image src={safeImages[slide]} alt={alt} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {interactive && safeImages.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setSlide((current) => (current - 1 + safeImages.length) % safeImages.length);
            }}
            className="absolute left-2 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center bg-morocco-dark/45 text-morocco-sand transition-all duration-300 hover:bg-morocco-dark/70"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setSlide((current) => (current + 1) % safeImages.length);
            }}
            className="absolute right-2 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center bg-morocco-dark/45 text-morocco-sand transition-all duration-300 hover:bg-morocco-dark/70"
          >
            <ChevronRight size={14} />
          </button>
          <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center gap-1.5">
            {safeImages.map((_, index) => (
              <button
                key={`${alt}-dot-${index}`}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setSlide(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === slide ? "w-4 bg-morocco-saffron" : "w-1.5 bg-morocco-sand/55"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CityCarousel({
  available,
  onSelect,
  onClose
}: {
  available: BuilderCity[];
  onSelect: (city: BuilderCity) => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return available;
    return available.filter(
      (city) =>
        city.name.toLowerCase().includes(needle) ||
        city.landmarkTitle.toLowerCase().includes(needle) ||
        city.slug.toLowerCase().includes(needle)
    );
  }, [available, query]);

  useEffect(() => {
    setIndex(0);
  }, [query, available]);

  useEffect(() => {
    if (filtered.length === 0) return;
    if (index > filtered.length - 1) setIndex(0);
  }, [filtered.length, index]);

  const prev = () => {
    if (filtered.length === 0) return;
    setIndex((value) => (value - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (filtered.length === 0) return;
    setIndex((value) => (value + 1) % filtered.length);
  };

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -70 || info.velocity.x < -450) next();
    else if (info.offset.x > 70 || info.velocity.x > 450) prev();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-morocco-dark/40 px-3 pb-4 pt-20 sm:items-center sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button type="button" aria-label="Close city selector" className="absolute inset-0 cursor-default" onClick={onClose} />
      <motion.div
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-morocco-saffron/20 bg-morocco-canvas shadow-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.45, ease: LUXURY_EASE }}
      >
        <div className="border-b border-morocco-saffron/15 px-5 py-4 sm:px-7">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-morocco-saffron">Choose your city</p>
            <button type="button" onClick={onClose} className="text-stone-500 transition-colors duration-300 hover:text-morocco-dark" aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a city… e.g. Fes"
              className="w-full rounded-sm border border-morocco-saffron/20 bg-morocco-sand/50 py-2 pl-10 pr-4 font-sans text-sm text-morocco-dark outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-morocco-saffron"
            />
          </label>
        </div>

        <div className="relative flex-1 overflow-y-auto px-4 pb-8 pt-6 sm:px-8">
          {filtered.length === 0 ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <p className="font-serif text-2xl text-morocco-dark">No cities match “{query}”</p>
              <p className="mt-2 text-sm text-stone-500">Try another spelling or clear the search.</p>
            </div>
          ) : (
            <>
              <div className="relative mx-auto flex max-w-xl items-center gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={prev}
                  className="z-20 grid size-11 shrink-0 place-items-center border border-morocco-saffron/25 bg-morocco-sand text-morocco-dark transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-saffron"
                  aria-label="Previous city"
                >
                  <ChevronLeft size={18} />
                </button>

                <motion.div
                  className="relative mx-auto h-[440px] w-full max-w-sm touch-pan-y"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={onDragEnd}
                >
                  {filtered.map((item, cardIndex) => {
                    const offset = cardIndex - index;
                    const wrapped = ((offset % filtered.length) + filtered.length) % filtered.length;
                    const visualOffset = wrapped > filtered.length / 2 ? wrapped - filtered.length : wrapped;
                    const isActive = visualOffset === 0;
                    const isMatch = query.trim().length > 0 && item.name.toLowerCase().includes(query.trim().toLowerCase());

                    return (
                      <motion.article
                        key={item.slug}
                        className={`absolute inset-x-0 top-0 overflow-hidden border bg-morocco-sand transition-shadow duration-300 ${
                          isActive && isMatch
                            ? "border-morocco-saffron ring-1 ring-morocco-saffron shadow-gold"
                            : isActive
                              ? "border-morocco-saffron/40 shadow-gold"
                              : "border-morocco-saffron/15"
                        }`}
                        style={{ zIndex: 20 - Math.abs(visualOffset) }}
                        animate={{
                          x: visualOffset * 28,
                          y: Math.abs(visualOffset) * 14,
                          scale: isActive ? 1 : 0.93,
                          opacity: Math.abs(visualOffset) > 2 ? 0 : 1 - Math.abs(visualOffset) * 0.18,
                          rotate: visualOffset * -2.5
                        }}
                        transition={{ duration: 0.4, ease: LUXURY_EASE }}
                      >
                        <div className="border-b border-morocco-saffron/10 px-5 py-4">
                          <h3 className="font-serif text-2xl tracking-widest text-stone-800">{item.name.toUpperCase()}</h3>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-morocco-saffron">{item.landmarkTitle}</p>
                        </div>
                        <div className="relative">
                          <ImageSlideshow
                            images={item.gallery}
                            alt={`${item.name} gallery`}
                            className="aspect-[4/3]"
                            autoPlay={isActive}
                            intervalMs={2800}
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-morocco-dark/65 via-morocco-dark/10 to-transparent px-5 pb-8 pt-12">
                            <p className="font-serif text-lg text-morocco-sand">{item.landmarkTitle}</p>
                          </div>
                        </div>
                        <div className="relative z-10 flex items-center justify-between bg-morocco-sand px-5 py-4">
                          <Link
                            href={`/destinations/${item.slug}`}
                            className="text-[10px] uppercase tracking-[0.28em] text-stone-500 transition-colors duration-300 hover:text-morocco-saffron"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Know More →
                          </Link>
                          {isActive && (
                            <button
                              type="button"
                              onClick={() => onSelect(item)}
                              className="bg-morocco-saffron px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.22em] text-morocco-dark transition-all duration-300 hover:brightness-110"
                            >
                              Select {item.name}
                            </button>
                          )}
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>

                <button
                  type="button"
                  onClick={next}
                  className="z-20 grid size-11 shrink-0 place-items-center border border-morocco-saffron/25 bg-morocco-sand text-morocco-dark transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-saffron"
                  aria-label="Next city"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  {filtered.map((item, dotIndex) => (
                    <button
                      key={`city-dot-${item.slug}`}
                      type="button"
                      aria-label={`Go to ${item.name}`}
                      onClick={() => setIndex(dotIndex)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIndex === index ? "w-6 bg-morocco-saffron" : "w-2 bg-stone-300 hover:bg-morocco-saffron/50"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
                  {index + 1} / {filtered.length}
                </p>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function LandmarkCard({
  landmark,
  selected,
  onToggle
}: {
  landmark: LandmarkOption;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group overflow-hidden border text-left transition-all duration-300 ${
        selected
          ? "border-morocco-saffron bg-morocco-sand ring-1 ring-morocco-saffron shadow-gold"
          : "border-morocco-saffron/15 bg-morocco-sand hover:border-morocco-saffron/40"
      }`}
    >
      <ImageSlideshow
        images={landmark.images}
        alt={landmark.title}
        className="aspect-[5/4]"
        autoPlay={selected}
        intervalMs={2600}
        interactive
      />
      <div className="flex items-center justify-between gap-3 px-3 py-3">
        <h4 className="font-serif text-sm text-stone-800">{landmark.title}</h4>
        <span
          className={`grid size-6 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            selected ? "border-morocco-saffron bg-morocco-saffron text-morocco-dark" : "border-stone-300 text-transparent"
          }`}
        >
          <Check size={12} strokeWidth={3} />
        </span>
      </div>
    </button>
  );
}

function DurationDrawer({
  city,
  onConfirm,
  onBack
}: {
  city: BuilderCity;
  onConfirm: (payload: { nights: number; landmarks: string[]; includeAll: boolean }) => void;
  onBack: () => void;
}) {
  const [nights, setNights] = useState(2);
  const [includeAll, setIncludeAll] = useState(false);
  const [landmarks, setLandmarks] = useState<string[]>([]);

  const toggleLandmark = (title: string) => {
    setIncludeAll(false);
    setLandmarks((current) => (current.includes(title) ? current.filter((item) => item !== title) : [...current, title]));
  };

  const selectAll = () => {
    const next = !includeAll;
    setIncludeAll(next);
    setLandmarks(next ? city.landmarks.map((item) => item.title) : []);
  };

  const selectedCount = includeAll ? city.landmarks.length : landmarks.length;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-morocco-dark/45 px-3 pb-4 pt-20 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border border-morocco-saffron/20 bg-morocco-canvas shadow-2xl"
        initial={{ x: 48, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: LUXURY_EASE }}
      >
        <div className="border-b border-morocco-saffron/15 px-5 py-5 sm:px-7">
          <p className="text-[10px] uppercase tracking-[0.35em] text-morocco-saffron">Shape your stay</p>
          <h3 className="mt-2 font-serif text-3xl text-morocco-dark sm:text-4xl">{city.name}</h3>
          <p className="mt-2 text-sm text-stone-500">{selectedCount} landmark{selectedCount === 1 ? "" : "s"} selected</p>
        </div>

        <div className="flex-1 space-y-8 overflow-y-auto px-5 py-6 sm:px-7">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">Landmarks</p>
            </div>

            <div className="mb-4">
              <button
                type="button"
                onClick={selectAll}
                className={`w-full border px-4 py-4 text-left transition-all duration-300 sm:max-w-xs ${
                  includeAll
                    ? "border-morocco-saffron bg-morocco-saffron/10 ring-1 ring-morocco-saffron"
                    : "border-morocco-saffron/20 bg-morocco-sand hover:border-morocco-saffron/40"
                }`}
              >
                <span className="block text-[10px] uppercase tracking-[0.28em] text-morocco-saffron">Quick select</span>
                <span className="mt-1 flex items-center justify-between gap-3 font-serif text-lg text-morocco-dark">
                  Select All Highlights
                  <span className={`grid size-6 place-items-center rounded-full border ${includeAll ? "border-morocco-saffron bg-morocco-saffron text-morocco-dark" : "border-stone-300 text-transparent"}`}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.landmarks.map((landmark) => {
                const selected = includeAll || landmarks.includes(landmark.title);
                return (
                  <LandmarkCard
                    key={landmark.id}
                    landmark={landmark}
                    selected={selected}
                    onToggle={() => toggleLandmark(landmark.title)}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-stone-500">How many nights will you dwell here?</p>
            <div className="inline-flex items-center gap-5 border border-morocco-saffron/20 bg-morocco-sand px-4 py-3">
              <button type="button" onClick={() => setNights((value) => Math.max(1, value - 1))} className="grid size-9 place-items-center text-morocco-dark transition-colors duration-300 hover:text-morocco-saffron" aria-label="Decrease nights">
                <Minus size={16} />
              </button>
              <span className="min-w-12 text-center font-serif text-3xl text-morocco-saffron">{nights}</span>
              <button type="button" onClick={() => setNights((value) => Math.min(7, value + 1))} className="grid size-9 place-items-center text-morocco-dark transition-colors duration-300 hover:text-morocco-saffron" aria-label="Increase nights">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 border-t border-morocco-saffron/15 px-5 py-5 sm:px-7">
          <button type="button" onClick={onBack} className="flex-1 border border-morocco-saffron/25 px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-stone-600 transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-dark">
            Back
          </button>
          <button
            type="button"
            onClick={() =>
              onConfirm({
                nights,
                landmarks: includeAll ? city.landmarks.map((item) => item.title) : landmarks,
                includeAll
              })
            }
            className="flex-1 bg-morocco-saffron px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110"
          >
            Confirm City
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TreasureMap({
  totalSteps,
  stops,
  activeNode,
  onNodeClick
}: {
  totalSteps: number;
  stops: Array<CityStop | null>;
  activeNode: number;
  onNodeClick: (index: number) => void;
}) {
  const positions = useMemo(() => getNodePositions(totalSteps), [totalSteps]);
  const pathLength = useMotionValue(0);

  useEffect(() => {
    const controls = animate(pathLength, 1, { duration: 1.6, ease: LUXURY_EASE });
    return () => controls.stop();
  }, [pathLength, totalSteps]);

  return (
    <div className="relative overflow-hidden border border-morocco-saffron/15 bg-morocco-canvas">
      <div className="moroccan-grid absolute inset-0 opacity-[0.04]" />
      <div className="relative aspect-[16/10] min-h-[420px] w-full sm:min-h-[520px]">
        <svg viewBox="0 0 1200 560" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <motion.path
            d={PATH_D}
            fill="none"
            stroke="#D48C46"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="8 14"
            style={{ pathLength }}
            opacity={0.55}
          />
          <path d={PATH_D} fill="none" stroke="#D48C46" strokeWidth="1" strokeOpacity="0.15" />
        </svg>

        {positions.map((position, index) => {
          const stop = stops[index];
          const completed = Boolean(stop);
          const unlocked = index <= activeNode;
          const isActive = index === activeNode && !completed;

          return (
            <button
              key={`node-${index}`}
              type="button"
              disabled={!unlocked}
              onClick={() => onNodeClick(index)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${unlocked ? "cursor-pointer" : "cursor-not-allowed"}`}
              style={{ left: `${(position.x / 1200) * 100}%`, top: `${(position.y / 560) * 100}%` }}
              aria-label={completed ? `Edit stop ${index + 1}: ${stop?.cityName}` : `Configure stop ${index + 1}`}
            >
              <span
                className={`relative flex size-14 flex-col items-center justify-center rounded-full border-2 text-sm font-serif transition-all duration-300 sm:size-16 ${
                  completed
                    ? "border-morocco-saffron bg-morocco-saffron text-morocco-dark shadow-gold"
                    : isActive
                      ? "border-morocco-saffron bg-morocco-canvas text-morocco-saffron shadow-gold"
                      : unlocked
                        ? "border-morocco-saffron/40 bg-morocco-sand text-morocco-dark"
                        : "border-stone-300 bg-stone-100 text-stone-400 opacity-60"
                }`}
              >
                {completed ? <Check size={18} strokeWidth={2} /> : unlocked ? index + 1 : <Lock size={14} />}
              </span>
              <span className={`mt-2 block max-w-[110px] text-center text-[9px] uppercase tracking-[0.22em] ${completed ? "text-morocco-dark" : "text-stone-500"}`}>
                {completed ? stop?.cityName : unlocked ? `Stop ${index + 1}` : "Locked"}
              </span>
              {completed && (
                <span className="mt-1 block text-center text-[10px] text-morocco-saffron">{stop?.nights} night{stop && stop.nights > 1 ? "s" : ""}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ItineraryBuilder() {
  const [phase, setPhase] = useState<Phase>("anchor");
  const [totalSteps, setTotalSteps] = useState(3);
  const [stops, setStops] = useState<Array<CityStop | null>>([]);
  const [activeNode, setActiveNode] = useState(0);
  const [panel, setPanel] = useState<"carousel" | "details" | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [draftCity, setDraftCity] = useState<BuilderCity | null>(null);

  const usedSlugs = useMemo(() => stops.filter(Boolean).map((stop) => stop!.citySlug), [stops]);
  const availableCities = useMemo(
    () => builderCities.filter((city) => !usedSlugs.includes(city.slug) || (editingIndex !== null && stops[editingIndex]?.citySlug === city.slug)),
    [editingIndex, stops, usedSlugs]
  );
  const completedCount = stops.filter(Boolean).length;
  const journeyComplete = totalSteps > 0 && completedCount === totalSteps;

  const beginMap = (count: number) => {
    setTotalSteps(count);
    setStops(Array.from({ length: count }, () => null));
    setActiveNode(0);
    setPhase("map");
  };

  const openNode = (index: number) => {
    if (index > activeNode) return;
    setEditingIndex(index);
    setDraftCity(null);
    setPanel("carousel");
  };

  const confirmCity = (payload: { nights: number; landmarks: string[]; includeAll: boolean }) => {
    if (editingIndex === null || !draftCity) return;
    const nextStops = [...stops];
    nextStops[editingIndex] = {
      citySlug: draftCity.slug,
      cityName: draftCity.name,
      nights: payload.nights,
      landmarks: payload.landmarks,
      includeAll: payload.includeAll
    };
    setStops(nextStops);
    const nextEmpty = nextStops.findIndex((stop) => stop === null);
    setActiveNode(nextEmpty === -1 ? totalSteps - 1 : nextEmpty);
    setPanel(null);
    setEditingIndex(null);
    setDraftCity(null);
  };

  return (
    <div className="bg-morocco-sand text-morocco-dark">
      <AnimatePresence mode="wait">
        {phase === "anchor" ? (
          <motion.section
            key="anchor"
            className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: LUXURY_EASE }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Custom passage</p>
            <h2 className="text-balance font-serif text-4xl leading-tight sm:text-6xl">
              How many cities do you wish to explore in your custom Moroccan passage?
            </h2>
            <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed tracking-wide text-stone-600">
              Choose a measured number of destinations. We will unlock each stop one at a time along a private treasure map.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {CITY_COUNTS.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => beginMap(count)}
                  className="min-w-[88px] border border-morocco-saffron/20 bg-morocco-canvas px-6 py-5 font-serif text-3xl text-morocco-dark transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-saffron hover:shadow-gold"
                >
                  {count}
                </button>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-4 border border-morocco-saffron/20 bg-morocco-canvas px-4 py-3">
              <button type="button" onClick={() => setTotalSteps((value) => Math.max(2, value - 1))} className="text-morocco-dark transition-colors duration-300 hover:text-morocco-saffron" aria-label="Fewer cities">
                <Minus size={16} />
              </button>
              <span className="min-w-10 text-center font-serif text-2xl text-morocco-saffron">{totalSteps}</span>
              <button type="button" onClick={() => setTotalSteps((value) => Math.min(5, value + 1))} className="text-morocco-dark transition-colors duration-300 hover:text-morocco-saffron" aria-label="More cities">
                <Plus size={16} />
              </button>
              <button type="button" onClick={() => beginMap(totalSteps)} className="ml-2 bg-morocco-saffron px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.22em] text-morocco-dark transition-all duration-300 hover:brightness-110">
                Continue
              </button>
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="map"
            className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: LUXURY_EASE }}
          >
            <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">Your treasure map</p>
                <h2 className="font-serif text-5xl leading-none text-morocco-dark sm:text-6xl">Place each city along the road.</h2>
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                  {completedCount} of {totalSteps} stops shaped
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setPhase("anchor");
                    setPanel(null);
                    setStops([]);
                    setActiveNode(0);
                  }}
                  className="border border-morocco-saffron/25 px-4 py-2.5 text-[9px] uppercase tracking-[0.22em] text-stone-600 transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-dark"
                >
                  Start over
                </button>
              </div>
            </div>

            <TreasureMap totalSteps={totalSteps} stops={stops} activeNode={activeNode} onNodeClick={openNode} />

            <div className="mt-10 grid gap-4 border border-morocco-saffron/15 bg-morocco-canvas p-6 sm:grid-cols-2 lg:grid-cols-3">
              {stops.map((stop, index) => (
                <div key={`summary-${index}`} className="border border-morocco-saffron/10 bg-morocco-sand px-4 py-4">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-morocco-saffron">Stop {index + 1}</p>
                  {stop ? (
                    <>
                      <p className="mt-2 font-serif text-2xl text-morocco-dark">{stop.cityName}</p>
                      <p className="mt-1 text-sm text-stone-600">{stop.nights} nights · {stop.includeAll ? "All highlights" : `${stop.landmarks.length} landmarks`}</p>
                    </>
                  ) : (
                    <p className="mt-2 text-sm text-stone-400">{index === activeNode ? "Awaiting your choice" : "Locked until previous stop is confirmed"}</p>
                  )}
                </div>
              ))}
            </div>

            {journeyComplete && (
              <motion.div
                className="mt-10 border border-morocco-saffron/25 bg-morocco-surface p-8 text-morocco-sand sm:p-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-morocco-saffron">Passage complete</p>
                <h3 className="mt-3 font-serif text-4xl">Your custom Morocco is ready to refine.</h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-morocco-sand/70">
                  {stops
                    .filter(Boolean)
                    .map((stop) => `${stop!.cityName} (${stop!.nights} nights)`)
                    .join(" → ")}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110"
                >
                  Send this itinerary to a designer
                </Link>
              </motion.div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panel === "carousel" && editingIndex !== null && (
          <CityCarousel
            available={availableCities}
            onSelect={(city) => {
              setDraftCity(city);
              setPanel("details");
            }}
            onClose={() => {
              setPanel(null);
              setEditingIndex(null);
              setDraftCity(null);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {panel === "details" && draftCity && (
          <DurationDrawer
            city={draftCity}
            onBack={() => setPanel("carousel")}
            onConfirm={confirmCity}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
