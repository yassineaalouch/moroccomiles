import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

export function HomeCallToAction() {
  return (
    <section className="bg-zinc-900 py-12 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl text-white">
          <div className="flex justify-start">
            <SectionTitleWithArrows titleClassName="text-amber-400">
              Prêt à commencer ?
            </SectionTitleWithArrows>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Trouvez votre prochaine voiture au Maroc ou devenez agence
            partenaire.
          </h2>
          <p className="mt-3 text-sm text-zinc-300">
            Que vous soyez voyageur ou professionnel de la location,
            MoroccoMiles vous aide à gagner du temps et à gagner en visibilité.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="/voitures"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-zinc-900 shadow-md transition hover:bg-amber-400"
          >
            Rechercher une voiture
          </a>
          <a
            href="/agences"
            className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-transparent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:border-amber-500 hover:text-amber-300"
          >
            Devenir agence partenaire
          </a>
        </div>
      </div>
    </section>
  );
}

