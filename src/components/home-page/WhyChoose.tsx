import { SectionTitleWithArrows } from "./SectionTitleWithArrows";

const WHY_POINTS = [
  {
    title: "Transparence totale",
    description:
      "Prix clairs, conditions affichées avant la réservation et aucun frais caché à l’arrivée.",
  },
  {
    title: "Disponibilités en temps réel",
    description:
      "Consultez les voitures réellement disponibles chez nos agences partenaires à vos dates.",
  },
  {
    title: "Agences locales vérifiées",
    description:
      "Chaque partenaire est contrôlé manuellement afin de garantir sérieux, fiabilité et service.",
  },
  {
    title: "Expérience fluide",
    description:
      "Un parcours pensé pour réserver en quelques clics depuis n’importe quel appareil.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="pourquoi-moroccomiles"
      className="border-b border-zinc-100 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitleWithArrows>Pourquoi MoroccoMiles ?</SectionTitleWithArrows>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Une plateforme pensée pour les voyageurs et les agences
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHY_POINTS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-3xl bg-zinc-50 p-5 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-100"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-amber-500/90 text-sm font-semibold text-zinc-900">
                ✓
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

