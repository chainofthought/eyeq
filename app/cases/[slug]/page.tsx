import { getCase } from "@/app/lib/cases";

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = await getCase(slug);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <header className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            {caseData.category}
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
            {caseData.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-400">
            {caseData.description}
          </p>

          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Difficulty: {caseData.difficulty}
          </p>

          <div className="mt-8 h-px w-full bg-neutral-800" />
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: caseData.contentHtml }}
        />

      </article>
    </main>
  );
}