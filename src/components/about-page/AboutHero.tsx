import Image from "next/image";
import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-zinc-50"
      aria-labelledby="about-hero-title"
    >
      {/* Subtle abstract pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute right-0 top-0 h-full w-1/2 max-w-2xl">
        <div className="absolute inset-0 bg-linear-to-l from-amber-500/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-2xl flex-1">
          <div className="flex justify-start">
            <SectionTitleWithArrows titleClassName="text-amber-600">
              Our story
            </SectionTitleWithArrows>
          </div>
          <h1
            id="about-hero-title"
            className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
          >
            About{" "}
            <span className="text-amber-600">MoroccoMiles</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Connecting travelers across Morocco with verified, reliable car
            rental agencies through a modern, centralized platform—so you can
            book with confidence and explore with freedom.
          </p>
        </div>

        <div className="mt-10 w-full flex-1 lg:mt-0 lg:max-w-xl">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-lg ring-1 ring-zinc-200/50">
            <Image
              src="/car_hero.png"
              alt="Scenic Moroccan road and mobility—travel and modern car rental"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
