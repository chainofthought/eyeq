
import Link from "next/link";
import { getDetective, getDetectives } from "@/app/lib/detectives";
import { getArticles } from "@/app/lib/articles";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getDetectives().map((item) => ({
    slug: item.slug,
  }));
}

export default async function DetectivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detective = await getDetective(slug);
  const articles = getArticles();

  const relatedArticles = articles.filter((article) =>
    (article.tags ?? []).some(
      (tag: string) =>
        tag.toLowerCase() === detective.name.toLowerCase()
    )
  );

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

        <section className="mt-20 border-t border-neutral-800 pt-12">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Explore the mind
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Related Articles
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Explore articles examining {detective.name}'s methods,
            reasoning, and investigative techniques.
          </p>

          {relatedArticles.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group rounded-xl border border-neutral-800 p-6 transition-colors hover:border-neutral-600"
                >
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {article.category ?? "Article"}
                  </p>

                  <h3 className="mt-3 text-xl font-medium transition-colors group-hover:text-neutral-300">
                    {article.title}
                  </h3>

                  <p className="mt-3 leading-6 text-neutral-400">
                    {article.description}
                  </p>

                  <span className="mt-6 inline-block text-sm text-neutral-300">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-neutral-500">
              Articles about this detective are coming soon.
            </p>
          )}
        </section>
      </article>
    </main>
  );
}
