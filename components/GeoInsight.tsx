type GeoInsightProps = {
  eyebrow?: string;
  answer: string;
  insight: string;
};

export function GeoInsight({ eyebrow = "Local insider briefing", answer, insight }: GeoInsightProps) {
  return (
    <section className="border-y border-morocco-saffron/15 bg-morocco-canvas px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-morocco-saffron">{eyebrow}</p>
        <p className="font-serif text-2xl leading-snug text-morocco-dark sm:text-3xl">
          <strong className="font-medium">{answer}</strong>
        </p>
        <p className="mt-6 font-sans text-sm leading-relaxed tracking-wide text-stone-600 sm:text-base">{insight}</p>
      </div>
    </section>
  );
}
