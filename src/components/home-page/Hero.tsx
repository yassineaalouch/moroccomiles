import Image from "next/image";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-zinc-900 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/car_hero.png"
          alt="Route au Maroc avec voiture de location"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/65" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300 ring-1 ring-amber-400/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            +120 agences vérifiées dans tout le Maroc
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Louez votre voiture au Maroc{" "}
            <span className="text-amber-400">en toute confiance.</span>
          </h1>
          <p className="mx-auto max-w-xl text-sm text-zinc-200 sm:text-base lg:mx-0">
            MoroccoMiles compare les offres de plusieurs agences locales en
            temps réel pour vous aider à trouver la bonne voiture, au bon prix,
            partout au Maroc.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 text-xs text-zinc-200 sm:flex-row sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-amber-300">
                ★
              </span>
              <span>Note moyenne 4,8/5 sur les locations confirmées</span>
            </div>
            <span className="hidden h-px w-6 bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-amber-300">
                ✓
              </span>
              <span>Annulation flexible sur de nombreuses offres</span>
            </div>
          </div>
        </div>

        {/* Search box */}
        <div className="w-full max-w-md flex-1">
          <div className="rounded-3xl bg-white/95 p-5 text-zinc-900 shadow-2xl ring-1 ring-zinc-200 backdrop-blur">
            <h2 className="text-base font-semibold text-zinc-900">
              Trouvez votre voiture idéale
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Choisissez votre ville, vos dates et comparez immédiatement les
              voitures disponibles.
            </p>
            <form className="mt-4 space-y-3" aria-label="Recherche de voitures">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-zinc-700">
                  Ville
                </label>
                <select className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1 [&_option]:bg-white [&_option]:text-zinc-900">
                  <option>Casablanca</option>
                  <option>Marrakech</option>
                  <option>Agadir</option>
                  <option>Rabat</option>
                  <option>Tanger</option>
                </select>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-zinc-700">
                    Date de départ
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-zinc-700">
                    Date de retour
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 outline-none ring-amber-500 focus:bg-white focus:ring-1"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span
                  className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="relative z-10 flex items-center gap-2">
                  Rechercher des voitures
                  <span aria-hidden>→</span>
                </span>
              </button>

              <p className="mt-2 text-[11px] text-zinc-500">
                Aucun paiement immédiat. La plupart des agences offrent une
                annulation gratuite jusqu&apos;à 48h avant le départ.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-zinc-50 to-white pt-1 sm:pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Louez votre voiture au Maroc
            <span className="block text-amber-600">en quelques clics</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Comparez les offres des meilleures agences de location. Réservez en ligne, récupérez votre véhicule en toute sérénité.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/voitures"
              className="rounded-xl bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Voir les voitures
            </Link>
            <Link
              href="/agences"
              className="rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-base font-semibold text-zinc-800 transition hover:border-amber-500 hover:bg-zinc-50"
            >
              Découvrir les agences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
