import { SectionTitleWithArrows } from "@/components/SectionTitleWithArrows";

const TEAM = [
  {
    name: "The MoroccoMiles Team",
    role: "Building the future of car rental in Morocco",
    description:
      "A small, dedicated team working across product, technology, and partnerships to connect travelers with verified agencies and modern tools.",
    initial: "M",
  },
];

export function MeetTheTeam() {
  return (
    <section
      className="border-b border-zinc-100 bg-zinc-50 py-14 sm:py-16 lg:py-20"
      aria-labelledby="meet-the-team-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="meet-the-team-title" className="sr-only">
            Meet the team
          </h2>
          <SectionTitleWithArrows titleClassName="text-amber-600">
            Meet the team
          </SectionTitleWithArrows>
          <p className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            The people behind MoroccoMiles
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            We're a focused team passionate about travel, technology, and supporting local businesses across Morocco.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl font-bold text-amber-600">
                  {member.initial}
                </div>
                <div className="mt-4 sm:ml-4 sm:mt-0">
                  <h3 className="text-base font-semibold text-zinc-900">{member.name}</h3>
                  <p className="mt-1 text-xs font-medium text-amber-600">{member.role}</p>
                  <p className="mt-2 text-sm text-zinc-600">{member.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
