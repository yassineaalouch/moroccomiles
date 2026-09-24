import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import { JsonLd } from "@/components/JsonLd";
import { layoutGraphJsonLd } from "@/lib/seo";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-morocco-sand font-sans text-stone-800 antialiased">
        <JsonLd data={layoutGraphJsonLd()} />
        <SiteHeader />
        {children}
        <footer className="border-t border-morocco-saffron/10 bg-morocco-surface px-5 py-12 text-morocco-sand sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-serif text-3xl">Morocco<span className="text-morocco-saffron">Miles</span></p>
              <p className="mt-2 text-xs text-morocco-sand/50">Journeys remembered long after the road ends.</p>
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-morocco-sand/40">Locally rooted · Privately guided · Made in Morocco</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
