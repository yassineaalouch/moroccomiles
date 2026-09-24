"use client";

import { AnimatePresence, motion, useMotionValue, animate, type PanInfo } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Lock, Minus, Plus, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import BookingForm from "@/components/BookingForm";
import { builderCities, toLandmarkId, type BuilderCity, type LandmarkOption } from "@/lib/itinerary-cities";

export type CityStop = {
  citySlug: string;
  cityName: string;
  nights: number;
  landmarks: string[];
  includeAll: boolean;
};

type Phase = "anchor" | "map";

type SnakePoint = {
  index: number;
  rowIndex: number;
  colIndex: number;
  x: number;
  y: number;
  left: string;
  top: string;
};

const MIN_STOPS = 2;
const MAX_STOPS = 15;
const SNAKE_COLUMNS = 5;
const SNAKE_ROW_HEIGHT = 220;
const SNAKE_NODE_Y = 110;
const CITY_COUNT_PRESETS = [2, 3, 4, 5, 6, 7, 8, 10, 12, 15] as const;
const LUXURY_EASE = [0.76, 0, 0.24, 1] as const;

const foldQuery = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function getSnakePoint(index: number): SnakePoint {
  const rowIndex = Math.floor(index / SNAKE_COLUMNS);
  const colIndex = rowIndex % 2 === 0 ? index % SNAKE_COLUMNS : SNAKE_COLUMNS - 1 - (index % SNAKE_COLUMNS);
  const x = colIndex * 200 + 100;
  const y = rowIndex * SNAKE_ROW_HEIGHT + SNAKE_NODE_Y;

  return {
    index,
    rowIndex,
    colIndex,
    x,
    y,
    left: `${colIndex * 20 + 10}%`,
    top: `${y}px`
  };
}

function buildSnakePath(points: Pick<SnakePoint, "x" | "y">[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

function getSnakeLayout(count: number) {
  const points = Array.from({ length: count }, (_, index) => getSnakePoint(index));
  const rows = Math.ceil(count / SNAKE_COLUMNS);
  const height = rows * SNAKE_ROW_HEIGHT + 80;
  return { points, rows, height, path: buildSnakePath(points) };
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
    const needle = foldQuery(query);
    if (!needle) return available;
    return available.filter((city) => {
      const haystack = foldQuery(
        `${city.name} ${city.slug} ${city.region} ${city.landmarkTitle} ${city.landmarks.map((landmark) => landmark.title).join(" ")}`
      );
      return haystack.includes(needle);
    });
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

  const needle = foldQuery(query);

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
              placeholder="Search a city… e.g. Tanger, Fes, Merzouga"
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
                    const isMatch = needle.length > 0 && foldQuery(item.name).includes(needle);

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
                          <h3 className="font-serif text-2xl tracking-widest text-morocco-dark">{item.name.toUpperCase()}</h3>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-morocco-saffron">{item.region}</p>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-500">{item.landmarkTitle}</p>
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
                <div className="flex max-w-lg flex-wrap items-center justify-center gap-1.5">
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
  const layout = useMemo(() => getSnakeLayout(totalSteps), [totalSteps]);
  const pathLength = useMotionValue(0);
  const progressedPath = useMemo(() => {
    const filled = stops.reduce((count, stop) => (stop ? count + 1 : count), 0);
    const trailCount = Math.max(filled, filled === totalSteps ? totalSteps : Math.min(filled + 1, totalSteps));
    return buildSnakePath(layout.points.slice(0, Math.max(1, trailCount)));
  }, [layout.points, stops, totalSteps]);

  useEffect(() => {
    const controls = animate(pathLength, 1, { duration: 1.6, ease: LUXURY_EASE });
    return () => controls.stop();
  }, [pathLength, totalSteps]);

  return (
    <div className="relative overflow-x-hidden border border-morocco-saffron/15 bg-morocco-canvas">
      <div className="moroccan-grid absolute inset-0 opacity-[0.04]" />
      <div className="relative w-full" style={{ height: layout.height }}>
        <svg
          viewBox={`0 0 1000 ${layout.height}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d={layout.path}
            fill="none"
            className="stroke-morocco-saffron/40"
            stroke="#D48C46"
            strokeOpacity={0.4}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 14"
            style={{ pathLength }}
          />
          <path
            d={progressedPath}
            fill="none"
            className="stroke-morocco-saffron/70"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {layout.points.map((point, index) => {
          const stop = stops[index];
          const completed = Boolean(stop);
          const unlocked = index === 0 || Boolean(stops[index - 1]);
          const isActive = index === activeNode && !completed;

          return (
            <button
              key={`node-${index}`}
              type="button"
              disabled={!unlocked}
              onClick={() => onNodeClick(index)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${unlocked ? "cursor-pointer" : "cursor-not-allowed"}`}
              style={{ left: point.left, top: point.top }}
              aria-label={completed ? `Edit stop ${index + 1}: ${stop?.cityName}` : `Configure stop ${index + 1}`}
            >
              <span
                className={`relative flex size-12 flex-col items-center justify-center rounded-full border-2 font-serif text-sm transition-all duration-300 sm:size-16 ${
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
              <span className={`mt-2 block max-w-[92px] text-center text-[8px] uppercase tracking-[0.18em] sm:max-w-[110px] sm:text-[9px] sm:tracking-[0.22em] ${completed ? "text-morocco-dark" : "text-stone-500"}`}>
                {completed ? stop?.cityName : unlocked ? `Stop ${index + 1}` : "Locked"}
              </span>
              {completed && (
                <span className="mt-1 block text-center text-[10px] text-morocco-saffron">
                  {stop?.nights} night{stop && stop.nights > 1 ? "s" : ""}
                </span>
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
  const completedStops = stops.filter((stop): stop is CityStop => Boolean(stop));
  const completedCount = completedStops.length;
  const journeyComplete = totalSteps > 0 && completedCount === totalSteps;
  const totalNights = completedStops.reduce((sum, stop) => sum + stop.nights, 0);
  const landmarkTokens = completedStops.flatMap((stop) => stop.landmarks.map((title) => toLandmarkId(stop.citySlug, title)));

  const beginMap = (count: number) => {
    const nextCount = Math.min(MAX_STOPS, Math.max(MIN_STOPS, count));
    setTotalSteps(nextCount);
    setStops(Array.from({ length: nextCount }, () => null));
    setActiveNode(0);
    setPhase("map");
  };

  const openNode = (index: number) => {
    if (index > 0 && !stops[index - 1]) return;
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
              Choose two to fifteen destinations. Each stop unlocks only after the previous city is confirmed, along a snaking treasure map.
            </p>
            <div className="mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3">
              {CITY_COUNT_PRESETS.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => beginMap(count)}
                  className="min-w-[72px] border border-morocco-saffron/20 bg-morocco-canvas px-5 py-4 font-serif text-3xl text-morocco-dark transition-all duration-300 hover:border-morocco-saffron hover:text-morocco-saffron hover:shadow-gold"
                >
                  {count}
                </button>
              ))}
            </div>
            <div className="mt-8 inline-flex items-center gap-4 border border-morocco-saffron/20 bg-morocco-canvas px-4 py-3">
              <button type="button" onClick={() => setTotalSteps((value) => Math.max(MIN_STOPS, value - 1))} className="text-morocco-dark transition-colors duration-300 hover:text-morocco-saffron" aria-label="Fewer cities">
                <Minus size={16} />
              </button>
              <span className="min-w-10 text-center font-serif text-2xl text-morocco-saffron">{totalSteps}</span>
              <button type="button" onClick={() => setTotalSteps((value) => Math.min(MAX_STOPS, value + 1))} className="text-morocco-dark transition-colors duration-300 hover:text-morocco-saffron" aria-label="More cities">
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

            <div className="mt-10 grid gap-4 border border-morocco-saffron/15 bg-morocco-canvas p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                <div className="mt-8">
                  <BookingForm
                    cities={completedStops.map((stop) => stop.cityName)}
                    duration={{ nights: totalNights, days: totalNights + 1, stops: completedStops.length }}
                    landmarks={landmarkTokens}
                    placesByCity={completedStops.map((stop) => ({
                      city: stop.cityName,
                      places: stop.landmarks
                    }))}
                  />
                </div>
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
