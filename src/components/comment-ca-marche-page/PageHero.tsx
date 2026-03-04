export function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950"
      aria-labelledby="how-it-works-title"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-400">
            Plateforme de location de voitures au Maroc
          </p>

          <h1
            id="how-it-works-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Comment fonctionne{" "}
            <span className="whitespace-nowrap font-bold text-amber-400">
              MoroccoMiles.com
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-zinc-300 sm:text-base">
            MoroccoMiles est une place de marché qui connecte des clients à des
            agences de location de voitures{" "}
            <span className="font-semibold text-zinc-100">
              vérifiées partout au Maroc
            </span>{" "}
            grâce à un système centralisé en temps réel. Une seule plateforme
            pour chercher, comparer, réserver et gérer les locations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pour-les-clients"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <span
                className="absolute inset-0 z-0 bg-zinc-950 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden
              />
              <span className="relative z-10">Pour les clients</span>
            </a>
            <a
              href="#pour-les-agences"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600/70 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-50 transition hover:border-amber-400 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Pour les agences
            </a>
          </div>

          <dl className="mt-10 grid gap-6 text-xs text-zinc-400 sm:grid-cols-3 sm:text-sm">
            <div>
              <dt className="font-semibold text-zinc-200">Couverture Maroc</dt>
              <dd>Agences partenaires dans plusieurs villes clés.</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-200">
                Données synchronisées
              </dt>
              <dd>Disponibilités, prix et réservations en temps réel.</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-200">
                Plateforme centralisée
              </dt>
              <dd>Un seul outil pour les agences & le public.</dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 w-full max-w-md rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 text-sm text-zinc-200 shadow-2xl shadow-zinc-950/50 sm:text-base lg:mt-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">
            Vue d&apos;ensemble
          </p>
          <h2 className="mt-3 text-lg font-semibold text-white">
            Une infrastructure numérique pour la location de voitures au Maroc
          </h2>
          <p className="mt-3 text-zinc-300">
            Côté public, un site vitrine pour{" "}
            <span className="font-medium text-white">chercher et réserver</span>{" "}
            des voitures. Côté agences, un{" "}
            <span className="font-medium text-white">
              logiciel de gestion sur ordinateur
            </span>{" "}
            relié en temps réel au même{" "}
            <span className="font-medium text-white">centre de données</span>.
          </p>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Disponibilités fiables et à jour en permanence.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Réservations centralisées et confirmées instantanément.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Suivi du statut des véhicules pour les agences.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
