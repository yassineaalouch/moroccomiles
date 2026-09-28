"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DoorOverlay } from "./IntroOverlay";

const STORAGE_KEY = "moroccoMilesCityGate";
const OPEN_EVENT = "morocco-city-gate";

type CityGateRequest = {
  slug: string;
  name: string;
  image: string;
};

export function queueCityGate(request: CityGateRequest) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(request));
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function readGate(): CityGateRequest | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const gate = JSON.parse(raw) as CityGateRequest;
    if (!gate.slug || !gate.name) return null;
    return gate;
  } catch {
    return null;
  }
}

export function CityGate() {
  const pathname = usePathname();
  const [gate, setGate] = useState<CityGateRequest | null>(null);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const shownAt = useRef(0);

  useEffect(() => {
    const open = () => {
      const next = readGate();
      if (!next) return;
      shownAt.current = Date.now();
      setDoorsOpen(false);
      setShowGreeting(true);
      setGate(next);
    };

    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (!gate || pathname !== `/destinations/${gate.slug}`) return;

    let cancelled = false;
    let started = false;
    let openTimer = 0;
    let slideTimer = 0;

    const openDoors = () => {
      if (cancelled || started) return;
      started = true;
      const elapsed = Date.now() - shownAt.current;
      const hold = Math.max(0, 900 - elapsed);
      openTimer = window.setTimeout(() => {
        if (cancelled) return;
        setShowGreeting(false);
        slideTimer = window.setTimeout(() => {
          if (!cancelled) setDoorsOpen(true);
        }, 350);
      }, hold);
    };

    const image = new Image();
    image.src = gate.image;
    image.decode().then(openDoors).catch(openDoors);
    const fallback = window.setTimeout(openDoors, 900);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      window.clearTimeout(openTimer);
      window.clearTimeout(slideTimer);
    };
  }, [gate, pathname]);

  useEffect(() => {
    if (!gate || doorsOpen) return;
    const timer = window.setTimeout(() => {
      sessionStorage.removeItem(STORAGE_KEY);
      setGate(null);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [gate, doorsOpen]);

  useEffect(() => {
    if (!doorsOpen || !gate) return;
    const timer = window.setTimeout(() => {
      sessionStorage.removeItem(STORAGE_KEY);
      setGate(null);
    }, 1600);
    return () => window.clearTimeout(timer);
  }, [doorsOpen, gate]);

  if (!gate) return null;

  return (
    <DoorOverlay
      title={`Welcome to ${gate.name}`}
      subtitle="A new story begins"
      doorsOpen={doorsOpen}
      showGreeting={showGreeting}
      idPrefix="city"
    />
  );
}
