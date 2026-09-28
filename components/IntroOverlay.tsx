"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

type GatePanelProps = {
  id: string;
  mirrored?: boolean;
};

type IntroOverlayProps = {
  title?: string;
  subtitle?: string;
  storageKey?: string;
  queued?: boolean;
};

function GatePanel({ id, mirrored = false }: GatePanelProps) {
  return (
    <svg viewBox="0 0 500 900" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={`zellige-${id}`} width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M40 0 52 28 80 40 52 52 40 80 28 52 0 40 28 28Z" fill="none" stroke="#D48C46" strokeWidth="2" />
          <circle cx="40" cy="40" r="9" fill="none" stroke="#2E4A3E" strokeWidth="2" />
        </pattern>
        <radialGradient id={`glow-${id}`}>
          <stop offset="0" stopColor="#D48C46" stopOpacity=".22" />
          <stop offset="1" stopColor="#1A1613" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="500" height="900" fill="#1A1613" />
      <rect width="500" height="900" fill={`url(#zellige-${id})`} opacity=".3" />
      <rect width="500" height="900" fill={`url(#glow-${id})`} />
      <g transform={mirrored ? "translate(500 0) scale(-1 1)" : undefined}>
        <path d="M0 870V330C0 145 120 45 250 10c130 35 250 135 250 320v540" fill="none" stroke="#D48C46" strokeWidth="8" />
        <path d="M35 870V350C35 195 135 95 250 55c115 40 215 140 215 295v520" fill="none" stroke="#D48C46" strokeOpacity=".5" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function DoorOverlay({
  title,
  subtitle,
  doorsOpen,
  showGreeting,
  idPrefix
}: {
  title: string;
  subtitle: string;
  doorsOpen: boolean;
  showGreeting: boolean;
  idPrefix: string;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-transparent">
      <motion.div
        className="pointer-events-auto absolute inset-y-0 left-0 w-1/2 bg-morocco-dark"
        animate={doorsOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <GatePanel id={`${idPrefix}-left`} />
      </motion.div>
      <motion.div
        className="pointer-events-auto absolute inset-y-0 right-0 w-1/2 bg-morocco-dark"
        animate={doorsOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <GatePanel id={`${idPrefix}-right`} mirrored />
      </motion.div>
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 1, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-5 text-[9px] uppercase tracking-[0.55em] text-morocco-sand/60 sm:text-[10px]">{subtitle}</p>
            <h2 className="font-serif text-4xl tracking-wide text-morocco-saffron sm:text-6xl lg:text-7xl">{title}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const activeIntros = new Set<string>();

function shouldPlayIntro(storageKey: string, queued: boolean) {
  if (typeof window === "undefined") return !queued;
  if (activeIntros.has(storageKey)) return true;
  const value = sessionStorage.getItem(storageKey);
  return queued ? value === "pending" : value !== "seen";
}

export default function IntroOverlay({
  title = "Welcome to Morocco",
  subtitle = "The journey begins",
  storageKey = "moroccoMilesIntro",
  queued = false
}: IntroOverlayProps) {
  const [visible, setVisible] = useState(!queued);
  const [showGreeting, setShowGreeting] = useState(!queued);
  const [doorsOpen, setDoorsOpen] = useState(false);

  useLayoutEffect(() => {
    const play = shouldPlayIntro(storageKey, queued);
    setVisible(play);
    setShowGreeting(play);
  }, [queued, storageKey]);

  useEffect(() => {
    if (!visible) return;
    activeIntros.add(storageKey);
    if (queued) {
      sessionStorage.removeItem(storageKey);
    } else {
      sessionStorage.setItem(storageKey, "seen");
    }
    const greetingTimer = window.setTimeout(() => setShowGreeting(false), 1500);
    const doorTimer = window.setTimeout(() => setDoorsOpen(true), 2000);
    const cleanupTimer = window.setTimeout(() => setVisible(false), 3500);

    return () => {
      window.clearTimeout(greetingTimer);
      window.clearTimeout(doorTimer);
      window.clearTimeout(cleanupTimer);
      window.setTimeout(() => activeIntros.delete(storageKey), 0);
    };
  }, [queued, storageKey, visible]);

  if (!visible) return null;

  return (
    <div data-home-intro="">
      <DoorOverlay
        title={title}
        subtitle={subtitle}
        doorsOpen={doorsOpen}
        showGreeting={showGreeting}
        idPrefix="home"
      />
    </div>
  );
}
