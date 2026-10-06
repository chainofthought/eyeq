import ContentCard from "@/app/components/ContentCard";
import { getCases } from "@/app/lib/cases";

export default function Cases() {
  const cases = getCases();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          EyeQ
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Cases
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Real investigations, fictional mysteries, and cases designed to
          challenge observation, deduction, and reasoning.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cases.map((caseItem) => (
            <ContentCard
              key={caseItem.slug}
              href={`/cases/${caseItem.slug}`}
              label={caseItem.category}
              title={caseItem.title}
              description={caseItem.description}
              action="Investigate case"
              meta={caseItem.difficulty}
            />
          ))}
        </div>
      </div>
    </main>
  );
}