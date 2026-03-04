import Link from "next/link";
import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const FAQ_ITEMS = [
  {
    question: "MoroccoMiles est-il une agence de location de voitures ?",
    answer:
      "Non. MoroccoMiles est une plateforme technologique qui connecte les clients à des agences de location partenaires au Maroc. Les contrats de location sont conclus directement entre le client et l’agence.",
  },
  {
    question: "Comment les voitures et les agences sont-elles vérifiées ?",
    answer:
      "Chaque agence doit fournir des informations légales et des justificatifs avant d’être publiée. Les véhicules sont ensuite ajoutés et gérés via un logiciel connecté au système central, ce qui permet un meilleur suivi des informations.",
  },
  {
    question: "Comment fonctionnent les paiements et les réservations ?",
    answer:
      "Les réservations se font en ligne via MoroccoMiles, puis sont transférées dans le système de l’agence. Selon le modèle choisi par l’agence, une partie peut être réglée en ligne ou directement sur place. Les détails sont toujours précisés avant la confirmation.",
  },
  {
    question: "Une agence peut-elle avoir sa page de marque ou son propre site ?",
    answer:
      "Oui. Chaque agence dispose d’une page dédiée sur MoroccoMiles et peut bénéficier d’une présence personnalisée, reliée à la même base de données (voitures, tarifs, disponibilités).",
  },
];

export function CtaBlock() {
  return (
    <>
      {/* Technologie centralisée */}
      <section
        aria-labelledby="tech-title"
        className="border-t border-zinc-100 bg-zinc-900 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <h2 id="tech-title" className="sr-only">
                Technologie centralisée en temps réel
              </h2>
              <div className="flex justify-start">
                <SectionTitleWithArrows titleClassName="text-amber-400">
                  Technologie centralisée en temps réel
                </SectionTitleWithArrows>
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Un seul système pour le site public et le logiciel des agences
              </p>
              <p className="mt-4 text-sm text-zinc-300 sm:text-base">
                MoroccoMiles relie{" "}
                <strong className="font-semibold text-white">
                  la place de marché publique
                </strong>{" "}
                à un{" "}
                <strong className="font-semibold text-white">
                  logiciel de gestion privé
                </strong>{" "}
                utilisé par les agences. Les deux s’appuient sur la même base de
                données centrale pour garantir la cohérence des informations.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <strong className="font-semibold text-white">
                      Disponibilités à jour :
                    </strong>{" "}
                    chaque changement de statut (disponible, réservé, loué) est
                    synchronisé sur le site.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    <strong className="font-semibold text-white">
                      Tarifs centralisés :
                    </strong>{" "}
                    les prix sont gérés à un seul endroit, puis diffusés vers
                    toutes les interfaces.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>
                    <strong className="font-semibold text-white">
                      Réservations suivies :
                    </strong>{" "}
                    les agences gardent l’historique complet des dossiers, ce
                    qui renforce le sérieux et la traçabilité.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-700/80 bg-zinc-900/40 p-6 shadow-xl shadow-black/30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Vue simplifiée de l&apos;infrastructure
              </p>
              <div className="mt-4 space-y-4 text-sm text-zinc-200">
                <div className="rounded-2xl border border-emerald-500/40 bg-linear-to-br from-emerald-500/10 to-emerald-500/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    1. Clients
                  </p>
                  <p className="mt-2 text-sm">
                    Naviguent sur MoroccoMiles.com, recherchent des voitures et
                    effectuent leurs réservations.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-600 bg-zinc-900/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
                    2. Base de données centrale
                  </p>
                  <p className="mt-2 text-sm">
                    Reçoit les recherches, les réservations, les mises à jour
                    de prix et de disponibilités, et garde l’historique complet.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-500/40 bg-linear-to-br from-sky-500/10 to-sky-500/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    3. Logiciel agence
                  </p>
                  <p className="mt-2 text-sm">
                    Les équipes en agence utilisent une application sur
                    ordinateur pour gérer leur flotte, consulter les réservations
                    et mettre à jour les statuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarification agences */}
      <section
        aria-labelledby="pricing-title"
        className="border-t border-zinc-200 bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <h2 id="pricing-title" className="sr-only">
                Tarification pour les agences
              </h2>
              <SectionTitleWithArrows titleClassName="text-amber-600">
                Tarification pour les agences
              </SectionTitleWithArrows>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                300 DH / mois pour digitaliser votre agence
              </p>
              <p className="mt-3 text-sm text-zinc-600 sm:text-base">
                L’abonnement MoroccoMiles pour les agences est simple et
                lisible. Pour{" "}
                <strong className="font-semibold text-zinc-900">
                  300 DH par mois
                </strong>
                , vous bénéficiez d’un ensemble d’outils pensés pour gérer votre
                activité et augmenter votre visibilité.
              </p>

              <ul className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>
                    Accès complet au logiciel de gestion de flotte sur
                    ordinateur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>
                    Présence sur la place de marché MoroccoMiles.com pour être
                    découvert par de nouveaux clients.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>
                    Synchronisation en temps réel des prix, des stocks et des
                    réservations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>
                    Page agence dédiée avec votre marque, vos photos, vos
                    conditions et vos avis.
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span
                    className="absolute inset-0 z-0 bg-zinc-950 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="relative z-10">Rejoindre en tant qu&apos;agence</span>
                </Link>
                <p className="text-xs text-zinc-500 sm:text-sm">
                  Sans engagement long terme. L’objectif est de faire grandir
                  votre visibilité et de sécuriser votre gestion quotidienne.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-800 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Pensé pour la croissance
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                Au lieu d’investir dans plusieurs outils séparés, MoroccoMiles
                regroupe en une seule plateforme la{" "}
                <strong className="font-semibold">
                  visibilité en ligne, la gestion de flotte et le suivi des
                  réservations
                </strong>
                . Vous gardez la maîtrise de vos prix, de vos contrats et de
                votre relation client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-title"
        className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="faq-title" className="sr-only">
              Questions fréquentes
            </h2>
            <SectionTitleWithArrows titleClassName="text-amber-600">
              Questions fréquentes
            </SectionTitleWithArrows>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Comprendre l&apos;essentiel en quelques réponses
            </p>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Voici un aperçu des questions les plus fréquentes autour du
              fonctionnement de MoroccoMiles. Pour plus de détails, vous pouvez
              également nous contacter directement.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau final avant pied de page */}
      <section className="border-t border-zinc-200 bg-zinc-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-800 bg-linear-to-r from-zinc-900 via-zinc-900 to-zinc-800 px-6 py-8 text-left sm:px-10 sm:py-10 md:flex-row md:items-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Prêt à trouver votre voiture de location idéale ?
              </h2>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">
                Parcourez les voitures disponibles ou explorez les villes et
                agences partenaires partout au Maroc. Tout fonctionne sur la
                même plateforme centralisée MoroccoMiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/voitures"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                <span
                  className="absolute inset-0 z-0 bg-zinc-950 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="relative z-10">Parcourir les voitures</span>
              </Link>
              <Link
                href="/agences"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-50 transition hover:border-amber-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                Explorer les villes & agences
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
