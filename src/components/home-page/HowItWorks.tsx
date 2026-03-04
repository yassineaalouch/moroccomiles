import { SectionTitleWithArrows } from "./SectionTitleWithArrows";

export function HowItWorksSection() {
  return (
    <section
      id="comment-ca-marche"
      className="border-b border-zinc-100 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitleWithArrows>Comment ça marche</SectionTitleWithArrows>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Réservez en trois étapes simples
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Un parcours pensé pour que vous trouviez rapidement la bonne
            voiture, sans perdre de temps à ouvrir dix onglets.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Choisissez votre ville et vos dates",
              description:
                "Indiquez la ville de prise en charge, la durée et votre date d’arrivée ou de départ.",
              icon: "①",
            },
            {
              title: "Comparez les voitures disponibles",
              description:
                "Filtrez par type de véhicule, budget, kilométrage ou options pour trouver le bon modèle.",
              icon: "②",
            },
            {
              title: "Réservez avec l’agence",
              description:
                "Validez votre choix, recevez une confirmation claire et récupérez votre voiture à l’heure prévue.",
              icon: "③",
            },
          ].map((step) => (
            <article
              key={step.title}
              className="flex flex-col rounded-3xl bg-zinc-50 p-6 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-base font-semibold text-zinc-900">
                {step.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

