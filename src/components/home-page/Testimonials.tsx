import { SectionTitleWithArrows } from "./SectionTitleWithArrows";

const TESTIMONIALS = [
  {
    name: "Sara, Paris",
    rating: 5,
    text: "Réservation simple, voiture impeccable à l’aéroport de Marrakech. J’ai tout géré en ligne en quelques minutes.",
  },
  {
    name: "Youssef, Rabat",
    rating: 4,
    text: "Les prix et les cautions sont expliqués clairement. Aucune mauvaise surprise à la prise du véhicule.",
  },
  {
    name: "Emma, Londres",
    rating: 5,
    text: "Support très réactif quand mon vol a été retardé. L’agence partenaire a décalé l’horaire sans frais.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="avis"
      className="border-b border-zinc-100 bg-zinc-50 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitleWithArrows>Avis clients</SectionTitleWithArrows>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Ce que disent nos utilisateurs
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-600">
              Des voyageurs du monde entier utilisent MoroccoMiles pour
              simplifier leur location de voiture au Maroc.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 pb-5 md:grid-cols-3 md:overflow-visible md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden sm:grid-cols-3 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="max-md:min-w-65 max-md:snap-center flex h-full flex-col justify-between rounded-3xl bg-white p-5 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-100"
            >
              <div className="flex items-center justify-between gap-2">
                <figcaption className="text-xs font-semibold text-zinc-900">
                  {t.name}
                </figcaption>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden>
                      {i < t.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="mt-3 text-sm text-zinc-700">
                “{t.text}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

