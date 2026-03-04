import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const CUSTOMER_STEPS = [
  {
    number: 1,
    title: "Recherchez par ville et dates",
    description:
      "Indiquez votre ville de départ, vos dates et vos horaires. MoroccoMiles interroge en temps réel les agences partenaires pour n’afficher que les voitures réellement disponibles.",
  },
  {
    number: 2,
    title: "Comparez voitures, prix et agences",
    description:
      "Filtrez par catégorie (citadine, SUV, premium…), comparez les tarifs, les conditions et la réputation des agences. Chaque annonce affiche des informations claires et complètes.",
  },
  {
    number: 3,
    title: "Réservez en toute sécurité",
    description:
      "Validez votre réservation via un tunnel simple et sécurisé. Votre demande est immédiatement enregistrée dans le système de l’agence via la base de données centrale.",
  },
  {
    number: 4,
    title: "Récupérez la voiture et partez",
    description:
      "Le jour J, présentez-vous à l’agence avec vos documents. L’agence confirme votre identité, remet les clés et met à jour le statut du véhicule dans le système. Vous pouvez profiter de votre voyage sereinement.",
  },
];

const TRUST_POINTS = [
  {
    title: "Agences vérifiées",
    description:
      "Chaque agence est validée manuellement avant d’être publiée afin de garantir un niveau minimal de sérieux et de conformité.",
  },
  {
    title: "Synchronisation temps réel",
    description:
      "Les agences utilisent un logiciel relié directement à MoroccoMiles. Quand un véhicule est réservé, bloqué ou rendu, l’information est immédiatement synchronisée.",
  },
  {
    title: "Prix transparents, sans frais cachés",
    description:
      "Les tarifs, options et conditions sont indiqués clairement sur chaque fiche. Pas de surprise de dernière minute après la réservation.",
  },
  {
    title: "Système de réservation sécurisé",
    description:
      "Les réservations transitent par une infrastructure technique moderne, pensée pour la fiabilité, la sauvegarde des données et la traçabilité.",
  },
  {
    title: "Avis vérifiés",
    description:
      "Les avis clients sont rattachés à de vraies réservations, ce qui permet de construire une réputation plus fiable pour chaque agence.",
  },
  {
    title: "Support centré sur la clarté",
    description:
      "Les informations essentielles (lieu de prise en charge, conditions, franchise, cautions) sont rassemblées en un seul endroit pour limiter les malentendus.",
  },
];

const AGENCY_STEPS = [
  {
    number: 1,
    title: "Inscription et profil agence",
    description:
      "Créez votre compte, renseignez vos coordonnées, documents et informations légales. Une fois validée, votre agence dispose d’un profil public sur MoroccoMiles.",
  },
  {
    number: 2,
    title: "Ajout des voitures & synchronisation",
    description:
      "Ajoutez vos véhicules (marque, modèle, photos, équipements, tarifs). Gérez les disponibilités via le logiciel de gestion sur ordinateur, relié à la même base de données que le site public.",
  },
  {
    number: 3,
    title: "Réservations en temps réel",
    description:
      "Lorsqu’un client réserve sur MoroccoMiles, la réservation apparaît immédiatement dans votre tableau de bord. Vous pouvez consulter les détails, confirmer et préparer le véhicule.",
  },
  {
    number: 4,
    title: "Gestion des locations & croissance",
    description:
      "Suivez le statut de chaque voiture (disponible, réservée, louée, en maintenance), gérez les contrats et utilisez votre visibilité en ligne pour développer votre chiffre d’affaires.",
  },
];

export function Steps() {
  return (
    <>
      {/* Clients */}
      <section
        id="pour-les-clients"
        className="bg-white py-12 sm:py-16 lg:py-20"
        aria-labelledby="clients-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="clients-title" className="sr-only">
              Pour les clients
            </h2>
            <SectionTitleWithArrows titleClassName="text-amber-500">
              Pour les clients
            </SectionTitleWithArrows>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Comment ça marche pour réserver votre voiture
            </p>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              En quatre étapes simples, vous trouvez une voiture disponible,
              comparez les options et confirmez une réservation fiable auprès
              d’une agence marocaine vérifiée.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {CUSTOMER_STEPS.map((step) => (
              <article
                key={step.number}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Étape {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Confiance clients */}
      <section
        aria-labelledby="trust-title"
        className="border-t border-zinc-100 bg-zinc-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="trust-title" className="sr-only">
              Pourquoi les clients nous font confiance
            </h2>
            <SectionTitleWithArrows titleClassName="text-amber-600">
              Pourquoi les clients nous font confiance
            </SectionTitleWithArrows>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Un fonctionnement transparent, pensé pour réduire les doutes
            </p>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              MoroccoMiles n’est pas une agence de location, mais{" "}
              <strong className="font-semibold text-zinc-900">
                une infrastructure numérique
              </strong>{" "}
              qui relie les clients à des loueurs vérifiés. Tout est conçu pour
              rendre les informations plus claires et les décisions plus
              sereines.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TRUST_POINTS.map((item) => (
              <article
                key={item.title}
                className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300/90 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <span className="text-base">◆</span>
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Agences */}
      <section
        id="pour-les-agences"
        className="border-t border-zinc-100 bg-white py-12 sm:py-16 lg:py-20"
        aria-labelledby="agencies-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div>
              <h2 id="agencies-title" className="sr-only">
                Pour les agences de location
              </h2>
              <SectionTitleWithArrows titleClassName="text-amber-600">
                Pour les agences de location
              </SectionTitleWithArrows>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                Un modèle SaaS simple pour digitaliser votre agence
              </p>
              <p className="mt-3 text-sm text-zinc-600 sm:text-base">
                MoroccoMiles offre aux agences un{" "}
                <strong className="font-semibold text-zinc-900">
                  logiciel de gestion de flotte
                </strong>{" "}
                connecté en temps réel au site{" "}
                <span className="font-semibold">MoroccoMiles.com</span>. Vous
                gérez vos voitures depuis votre ordinateur, et vos offres sont
                automatiquement visibles pour les clients.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {AGENCY_STEPS.map((step) => (
                  <article
                    key={step.number}
                    className="group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300/80 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-amber-400">
                        {step.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        Étape {step.number}
                      </span>
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-zinc-900 sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-amber-100 bg-amber-50/70 p-6 text-sm text-amber-950 shadow-sm">
              <h3 className="text-sm font-semibold text-amber-900 sm:text-base">
                Une seule base de données, deux expériences
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-amber-950/90">
                Le même système central gère à la fois vos disponibilités,
                réservations et tarifs. Quand vous mettez à jour une voiture
                dans votre logiciel de gestion, l’information est
                automatiquement reflétée sur MoroccoMiles.com.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                  <span>Réduisez les doubles réservations et les erreurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                  <span>
                    Centralisez vos contrats, statuts et historiques dans un
                    seul outil.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700" />
                  <span>
                    Bénéficiez d’une visibilité nationale sans multiplier les
                    plateformes.
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
