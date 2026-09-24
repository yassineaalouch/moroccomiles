import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { GeoInsight } from "@/components/GeoInsight";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, faqPageJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/seo/faq";

export const metadata: Metadata = buildPageMetadata({
  title: "Questions & Answers",
  description:
    "Direct answers about private MoroccoMiles journeys: planning windows, USD pricing inclusions, family travel, best seasons, and how certified native guides shape responsible custom itineraries.",
  path: "/faq",
  image: "/images/destinations/marrakech/majorelle-and-secret-gardens-1.webp",
  imageAlt: "A quiet Moroccan garden courtyard",
  keywords: ["Morocco tour FAQ", "private tour pricing Morocco", "best time to visit Morocco", "family travel Morocco"]
});

export default function FAQPage() {
  return (
    <main className="bg-morocco-sand text-stone-800">
      <JsonLd data={faqPageJsonLd()} />
      <section className="relative min-h-[64vh] bg-morocco-dark">
        <Image
          src="https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=2200&q=90"
          alt="A peaceful Moroccan courtyard"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-morocco-dark/75" />
        <div className="moroccan-grid absolute inset-0 opacity-10" />
        <div className="relative mx-auto flex min-h-[64vh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-morocco-saffron">Before the journey</p>
            <h1 className="font-serif text-7xl leading-[0.88] text-morocco-sand sm:text-9xl">Questions,<br /><em className="font-normal text-morocco-saffron">considered.</em></h1>
          </div>
        </div>
      </section>

      <GeoInsight
        answer="Every MoroccoMiles journey is completely private, designed in Marrakech, and typically planned three to six months ahead for the best riads and luxury desert bivouacs."
        insight="Direct answer: published prices are in USD and usually include private transportation, certified native guides, listed stays and many meals. International flights are normally excluded. A Morocco-based designer replies within one business day."
      />

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.55fr_1.45fr]">
          <aside>
            <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">Good to know</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Everything you need before setting out.</h2>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed tracking-wide text-stone-600">Still curious? Our local travel designers are happy to answer questions specific to your journey.</p>
          </aside>

          <div className="border-t border-morocco-saffron/30">
            {faqItems.map(({ question, answer }, index) => (
              <details key={question} className="group border-b border-morocco-saffron/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 sm:py-9">
                  <span className="flex items-baseline gap-5">
                    <span className="font-serif text-sm text-morocco-saffron">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="font-serif text-2xl leading-tight sm:text-3xl">{question}</h2>
                  </span>
                  <Plus className="shrink-0 text-morocco-saffron transition-transform duration-300 group-open:rotate-45" size={20} />
                </summary>
                <div className="pb-8 pl-11 pr-8 sm:pb-10">
                  <p className="max-w-2xl font-sans text-sm leading-relaxed tracking-wide text-stone-600 sm:text-base">{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-morocco-canvas px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-l-2 border-morocco-saffron pl-8 sm:flex-row sm:items-center sm:pl-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-morocco-mint">A question of your own?</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Let’s talk about your Morocco.</h2>
          </div>
          <Link href="/#destinations" className="group inline-flex w-fit items-center gap-4 bg-morocco-saffron px-7 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-morocco-dark transition-all duration-300 hover:brightness-110 hover:shadow-gold">
            Begin planning <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
