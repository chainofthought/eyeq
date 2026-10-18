
import Link from "next/link";
import { getArticles } from "@/app/lib/articles";
import { getCases } from "@/app/lib/cases";

export default function TrainingPage() {
  const articles = getArticles().filter(
    (article) => article.pillar === "Training"
  );
  const cases = getCases();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          EyeQ Training
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Train your mind.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Develop observation, memory, deduction, and investigative thinking
          through practical lessons and interactive cases.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Learn</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="border border-neutral-800 p-8 transition hover:border-neutral-600"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {article.category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {article.description}
                </p>

                <p className="mt-8 text-sm text-neutral-500">
                  Read lesson →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-neutral-800 pt-12">
          <h2 className="text-2xl font-semibold">Practice with cases</h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Put your reasoning to the test. Examine the evidence, consider
            possibilities, and work toward a conclusion.
          </p>

          <Link
            href="/cases"
            className="mt-6 inline-block rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-neutral-500"
          >
            Explore cases →
          </Link>
        </section>
      </div>
    </main>
  );
}
