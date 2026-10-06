import { getDetective } from "@/app/lib/detectives";

export default async function DetectivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detective = await getDetective(slug);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <header className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            {detective.type} · {detective.origin}
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
            {detective.name}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-400">
            {detective.description}
          </p>

          <div className="mt-8 h-px w-full bg-neutral-800" />
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: detective.contentHtml }}
        />

      </article>
    </main>
  );
}