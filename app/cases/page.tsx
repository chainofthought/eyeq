import Link from "next/link";
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
            <Link
              key={caseItem.slug}
              href={`/cases/${caseItem.slug}`}
              className="group rounded-2xl border border-neutral-800 p-8 transition hover:border-neutral-600"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {caseItem.category}
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  {caseItem.difficulty}
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {caseItem.title}
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                {caseItem.description}
              </p>

              <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                Investigate case →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}