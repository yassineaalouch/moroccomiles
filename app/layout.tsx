import type { Metadata } from "next";
import localFont from "next/font/local";
import { CityGate } from "@/components/CityGate";
import SiteHeader from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { layoutGraphJsonLd } from "@/lib/seo";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const cormorant = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  weight: "300 700",
  style: "normal",
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Palatino Linotype", "Palatino", "serif"]
});

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Arial", "Helvetica", "sans-serif"]
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-morocco-sand font-sans text-stone-800 antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("moroccoMilesIntro")==="seen"){document.documentElement.classList.add("intro-seen")}}catch(e){}`
          }}
        />
        <JsonLd data={layoutGraphJsonLd()} />
        <SiteHeader />
        <CityGate />
        {children}
        <footer className="border-t border-morocco-saffron/10 bg-morocco-surface px-5 py-12 text-morocco-sand sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-serif text-3xl">Morocco<span className="text-morocco-saffron">Miles</span></p>
              <p className="mt-2 text-xs text-morocco-sand/50">Journeys remembered long after the road ends.</p>
              <p lang="fr" className="mt-1 text-xs text-morocco-sand/40">Agence de voyages · circuits privés au Maroc.</p>
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-morocco-sand/40">Locally rooted · Privately guided · Tour operator · Made in Morocco</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
