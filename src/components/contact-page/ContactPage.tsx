"use client";

import { useState } from "react";
import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

type SubjectOption =
  | "booking"
  | "agency"
  | "technical"
  | "general";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: SubjectOption | "";
  message: string;
  company: string; // honeypot
};

type StatusState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<StatusState>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!form.fullName.trim()) {
      return "Merci d’indiquer votre nom complet.";
    }
    if (!form.email.trim()) {
      return "Merci d’indiquer votre adresse e-mail.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      return "Merci d’indiquer une adresse e-mail valide.";
    }
    if (!form.subject) {
      return "Merci de sélectionner un sujet.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      return "Merci de préciser votre demande (minimum 10 caractères).";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status.type === "submitting") return;

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Une erreur est survenue. Merci de réessayer.");
      }

      setStatus({
        type: "success",
        message: "Merci, votre message a bien été envoyé. Nous vous répondrons au plus vite.",
      });
      setForm(initialFormState);
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : "Impossible d’envoyer votre message pour le moment. Merci de réessayer plus tard.",
      });
    }
  };

  return (
    <main className="flex-1 bg-zinc-50">
      {/* Hero */}
      <section
        aria-labelledby="contact-hero-title"
        className="border-b border-zinc-200 bg-linear-to-b from-zinc-50 via-white to-zinc-50/80"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-xl">
            <div className="flex justify-start">
              <SectionTitleWithArrows titleClassName="text-amber-600">
                Support & partenariats
              </SectionTitleWithArrows>
            </div>
            <h1
              id="contact-hero-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Contact MoroccoMiles
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Une question sur une réservation, une agence qui souhaite rejoindre la
              plateforme ou un retour sur le produit&nbsp;? Notre équipe est là pour
              vous aider rapidement et de manière transparente.
            </p>
          </div>

          <div className="mt-4 flex gap-4 text-xs text-zinc-500 sm:text-sm lg:mt-0">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-emerald-900 shadow-sm">
              <p className="font-medium">Clients & voyageurs</p>
              <p className="mt-1">
                Assistance réservations, confirmations, modifications et annulations.
              </p>
            </div>
            <div className="hidden rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3 text-sky-900 shadow-sm sm:block">
              <p className="font-medium">Agences & partenaires</p>
              <p className="mt-1">
                Informations sur l&apos;abonnement SaaS, l&apos;onboarding et la visibilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section
        aria-label="Formulaire de contact et coordonnées"
        className="border-b border-zinc-200 bg-white py-10 sm:py-14 lg:py-18"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-14 lg:px-8">
          {/* Left: Form */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50/60 p-5 shadow-sm sm:p-7 lg:p-8">
            <h2 className="text-base font-semibold text-zinc-900 sm:text-lg">
              Envoyer un message
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Remplissez ce formulaire pour toute question liée aux réservations, aux
              agences ou au fonctionnement de MoroccoMiles.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
              noValidate
              aria-describedby={
                status.type === "error" || status.type === "success"
                  ? "contact-form-status"
                  : undefined
              }
            >
              {/* Honeypot field (hidden) */}
              <div className="hidden">
                <label htmlFor="company" className="text-sm font-medium text-zinc-700">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="off"
                  value={form.company}
                  onChange={handleChange}
                  className="text-zinc-900"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Nom complet
                    <span className="ml-0.5 text-amber-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-xs outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Adresse e-mail
                    <span className="ml-0.5 text-amber-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-xs outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Numéro de téléphone
                    <span className="ml-1 text-xs font-normal text-zinc-500">
                      (optionnel)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-xs outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-zinc-800"
                  >
                    Sujet
                    <span className="ml-0.5 text-amber-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-xs outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 [&_option]:bg-white [&_option]:text-zinc-900"
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option value="booking">Problème de réservation</option>
                    <option value="agency">Inscription d&apos;agence</option>
                    <option value="technical">Problème technique</option>
                    <option value="general">Question générale</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-800"
                >
                  Message
                  <span className="ml-0.5 text-amber-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1.5 block w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-xs outline-none ring-0 transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50"
                  placeholder="Expliquez votre demande avec quelques détails (dates, ville, agence, etc.)."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-zinc-500">
                  Vos informations ne sont utilisées que pour vous répondre. Aucune
                  donnée n&apos;est revendue.
                </p>
                <button
                  type="submit"
                  disabled={status.type === "submitting"}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    className="absolute inset-0 z-0 bg-zinc-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="relative z-10">
                    {status.type === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
                  </span>
                </button>
              </div>

              {(status.type === "error" || status.type === "success") && (
                <p
                  id="contact-form-status"
                  className={`rounded-lg border px-3 py-2 text-xs sm:text-sm ${
                    status.type === "error"
                      ? "border-red-200 bg-red-50 text-red-700"
                      : "border-emerald-200 bg-emerald-50 text-emerald-800"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Right: Direct contact info */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6">
              <h2 className="text-sm font-semibold text-zinc-900 sm:text-base">
                Coordonnées directes
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Préférez ces contacts pour des demandes ciblées. Nous séparons le
                support client des demandes agences afin de mieux vous orienter.
              </p>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <span aria-hidden></span>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900">Support client</dt>
                    <dd className="text-zinc-600">
                      <a
                        href="mailto:support@moroccomiles.com"
                        className="font-medium text-emerald-700 underline-offset-2 hover:underline"
                      >
                        support@moroccomiles.com
                      </a>
                      <p className="mt-1 text-xs text-zinc-500">
                        Pour toute question liée à une réservation, un paiement ou un
                        compte client.
                      </p>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                    <span aria-hidden></span>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900">
                      E-mail business (agences)
                    </dt>
                    <dd className="text-zinc-600">
                      <a
                        href="mailto:agences@moroccomiles.com"
                        className="font-medium text-sky-700 underline-offset-2 hover:underline"
                      >
                        agences@moroccomiles.com
                      </a>
                      <p className="mt-1 text-xs text-zinc-500">
                        Agences de location intéressées par MoroccoMiles peuvent nous
                        écrire pour l&apos;onboarding et l&apos;abonnement SaaS.
                      </p>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <span aria-hidden></span>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900">Téléphone</dt>
                    <dd className="text-zinc-600">
                      <a
                        href="tel:+212600000000"
                        className="font-medium text-amber-700 underline-offset-2 hover:underline"
                      >
                        +212 6 00 00 00 00
                      </a>
                      <p className="mt-1 text-xs text-zinc-500">
                        Ligne réservée aux questions urgentes liées aux réservations en
                        cours.
                      </p>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-zinc-200">
                    <span aria-hidden></span>
                  </div>
                  <div>
                    <dt className="font-medium text-zinc-900">Horaires</dt>
                    <dd className="text-zinc-600">
                      Lundi – Vendredi : 9h00 – 18h30 (heure Maroc)
                      <p className="mt-1 text-xs text-zinc-500">
                        Support limité le week-end pour les urgences liées aux
                        réservations.
                      </p>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Support categories */}
            <div
              aria-labelledby="support-categories-title"
              className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <h2
                id="support-categories-title"
                className="text-sm font-semibold text-zinc-900 sm:text-base"
              >
                Catégories de support
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Choisissez la bonne porte d&apos;entrée pour obtenir une réponse plus
                rapide et plus précise.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Support clients
                  </p>
                  <p className="mt-2 text-xs text-emerald-900 sm:text-sm">
                    Questions sur les réservations, confirmations, modifications,
                    annulations et gestion de compte.
                  </p>
                  <a
                    href="/comment-ca-marche#faq-title"
                    className="mt-3 inline-flex text-xs font-medium text-emerald-800 underline-offset-2 hover:underline"
                  >
                    Voir les questions fréquentes
                  </a>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                    Support agences
                  </p>
                  <p className="mt-2 text-xs text-sky-900 sm:text-sm">
                    Aide à l&apos;inscription, à la configuration du logiciel et à la
                    visibilité sur le marketplace.
                  </p>
                  <a
                    href="/comment-ca-marche#pricing-title"
                    className="mt-3 inline-flex text-xs font-medium text-sky-800 underline-offset-2 hover:underline"
                  >
                    Découvrir l&apos;offre agences
                  </a>
                </div>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                    Assistance technique
                  </p>
                  <p className="mt-2 text-xs text-indigo-900 sm:text-sm">
                    Problèmes d&apos;accès au site, bugs, lenteurs ou suggestions
                    produit.
                  </p>
                  <a
                    href="mailto:tech@moroccomiles.com"
                    className="mt-3 inline-flex text-xs font-medium text-indigo-800 underline-offset-2 hover:underline"
                  >
                    Contacter l&apos;équipe technique
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Visit / Locate us */}
      <section
        aria-labelledby="visit-us-title"
        className="border-b border-zinc-200 bg-zinc-50 py-10 sm:py-14 lg:py-18"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
            <div>
              <div className="flex justify-start">
                <SectionTitleWithArrows titleClassName="text-amber-600">
                  Transparence & présence locale
                </SectionTitleWithArrows>
              </div>
              <h2
                id="visit-us-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
              >
                Nous sommes basés au Maroc
              </h2>
              <p className="mt-3 text-sm text-zinc-600 sm:text-base">
                MoroccoMiles est construit au Maroc pour les voyageurs et les agences
                marocaines. Nous privilégions les échanges clairs, documentés et
                traçables.
              </p>
              <dl className="mt-5 space-y-3 text-sm text-zinc-700">
                <div>
                  <dt className="font-medium text-zinc-900">Adresse du siège</dt>
                  <dd className="mt-1">
                    MoroccoMiles Technologies<br />
                    Quartier d&apos;affaires, Casablanca<br />
                    Maroc
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">
                    Visites et rendez-vous
                  </dt>
                  <dd className="mt-1 text-zinc-600">
                    Les visites se font uniquement sur rendez-vous confirmé par e-mail.
                    Merci de nous contacter au préalable pour planifier un créneau.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900/5 shadow-sm">
              <iframe
                title="Localisation MoroccoMiles — Casablanca, Maroc"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.622031726021!2d-7.6200!3d33.5889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd2c1c5d7e2b%3A0x1b4a4f5f0f0f0f0!2sCasablanca!5e0!3m2!1sfr!2sma!4v1700000000000"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 sm:h-72 lg:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section
        aria-labelledby="contact-faq-title"
        className="border-b border-zinc-200 bg-white py-10 sm:py-14 lg:py-18"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex justify-start">
              <SectionTitleWithArrows titleClassName="text-amber-600">
                Questions fréquentes
              </SectionTitleWithArrows>
            </div>
            <h2
              id="contact-faq-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              Avant de nous écrire, jetez un œil ici
            </h2>
            <p className="mt-3 text-sm text-zinc-600 sm:text-base">
              Ces réponses couvrent les questions les plus courantes. Pour plus de
              détails, consultez aussi la page &quot;Comment ça marche&quot;.
            </p>
          </div>

          <div className="mt-7 space-y-3">
            <details className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-zinc-900">
                Comment fonctionne la confirmation de ma réservation ?
                <span className="ml-3 text-xs text-zinc-500 group-open:hidden">
                  Voir la réponse
                </span>
                <span className="ml-3 text-xs text-zinc-500 hidden group-open:inline">
                  Masquer
                </span>
              </summary>
              <p className="mt-2 text-sm text-zinc-600">
                Une fois votre demande effectuée sur MoroccoMiles, un e-mail de
                confirmation est envoyé avec les détails principaux. Selon le mode de
                fonctionnement de l&apos;agence, un second e-mail ou SMS peut confirmer
                les dernières informations (caution, modalités de paiement, etc.).
              </p>
            </details>

            <details className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-zinc-900">
                Quelle est la politique de remboursement ou d&apos;annulation ?
                <span className="ml-3 text-xs text-zinc-500 group-open:hidden">
                  Voir la réponse
                </span>
                <span className="ml-3 text-xs text-zinc-500 hidden group-open:inline">
                  Masquer
                </span>
              </summary>
              <p className="mt-2 text-sm text-zinc-600">
                La politique d&apos;annulation et de remboursement dépend de l&apos;agence
                de location choisie. Les conditions sont toujours affichées avant la
                validation de votre réservation. En cas de doute, contactez notre
                support client avec votre numéro de dossier.
              </p>
            </details>

            <details className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-zinc-900">
                Comment fonctionne l&apos;abonnement agences à 300 DH / mois ?
                <span className="ml-3 text-xs text-zinc-500 group-open:hidden">
                  Voir la réponse
                </span>
                <span className="ml-3 text-xs text-zinc-500 hidden group-open:inline">
                  Masquer
                </span>
              </summary>
              <p className="mt-2 text-sm text-zinc-600">
                L&apos;abonnement inclut l&apos;accès au logiciel de gestion de flotte, la
                présence sur la place de marché MoroccoMiles.com, la synchronisation en
                temps réel des voitures et la page agence dédiée. L&apos;abonnement est
                mensuel, sans engagement long terme.
              </p>
            </details>

            <details className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-zinc-900">
                Comment gérer ou supprimer mon compte MoroccoMiles ?
                <span className="ml-3 text-xs text-zinc-500 group-open:hidden">
                  Voir la réponse
                </span>
                <span className="ml-3 text-xs text-zinc-500 hidden group-open:inline">
                  Masquer
                </span>
              </summary>
              <p className="mt-2 text-sm text-zinc-600">
                Vous pouvez demander la mise à jour de vos informations ou la
                suppression de votre compte en contactant notre support via le
                formulaire en sélectionnant &quot;Question générale&quot; ou par e-mail
                à support@moroccomiles.com. Nous traiterons votre demande dans les
                meilleurs délais.
              </p>
            </details>
          </div>

          <div className="mt-5 text-sm">
            <a
              href="/comment-ca-marche#faq-title"
              className="font-medium text-amber-700 underline-offset-2 hover:underline"
            >
              Voir toutes les explications sur MoroccoMiles
            </a>
          </div>
        </div>
      </section>

      {/* Agency-focused section */}
      <section
        id="for-agencies-contact"
        aria-labelledby="for-agencies-contact-title"
        className="border-b border-zinc-200 bg-zinc-900 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                Pour les agences de location
              </p>
              <h2
                id="for-agencies-contact-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Êtes-vous une agence de location de voitures&nbsp;?
              </h2>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">
                MoroccoMiles propose un modèle d&apos;abonnement SaaS simple&nbsp;:{" "}
                <span className="font-semibold text-white">300 DH par mois</span> pour
                digitaliser votre agence et apparaître sur la place de marché
                MoroccoMiles.com.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    Logiciel de gestion de flotte connecté en temps réel (stocks,
                    tarifs, réservations).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>
                    Visibilité sur le marketplace MoroccoMiles.com pour toucher de
                    nouveaux clients.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>
                    Page agence personnalisée avec votre marque, vos photos et vos
                    avis clients.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  <span>
                    Accompagnement au démarrage pour la configuration de vos véhicules
                    et de vos conditions.
                  </span>
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:agences@moroccomiles.com?subject=Rejoindre%20MoroccoMiles%20en%20tant%20qu%27agence"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                >
                  <span
                    className="absolute inset-0 z-0 bg-zinc-950 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="relative z-10">Rejoindre en tant qu&apos;agence</span>
                </a>
                <a
                  href="/comment-ca-marche#pricing-title"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-50 transition hover:border-amber-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                >
                  Voir les détails de l&apos;abonnement
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-zinc-900/60 p-6 text-sm text-zinc-100 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Pourquoi les agences nous rejoignent
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                Au lieu d&apos;investir dans un site isolé ou des outils non connectés,
                MoroccoMiles vous apporte à la fois une visibilité nationale et un
                logiciel fiable pour suivre votre activité au quotidien. Le tout pour un
                tarif lisible, pensé pour les structures locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA before footer */}
      <section className="border-t border-zinc-800 bg-zinc-950 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-800 bg-linear-to-r from-zinc-950 via-zinc-900 to-zinc-900 px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                Besoin d&apos;aide immédiate ?
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Nous sommes là pour sécuriser votre expérience
              </h2>
              <p className="mt-3 text-sm text-zinc-300 sm:text-base">
                En cas de doute sur une réservation, un paiement ou le fonctionnement
                de la plateforme, contactez-nous. Nous privilégions des réponses
                écrites, claires et traçables.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:support@moroccomiles.com"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span
                  className="absolute inset-0 z-0 bg-zinc-950 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="relative z-10">Ecrire au support</span>
              </a>
              <a
                href="/comment-ca-marche#faq-title"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-zinc-50 transition hover:border-amber-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Parcourir le centre d&apos;aide
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

