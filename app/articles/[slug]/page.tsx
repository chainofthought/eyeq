
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getArticles } from "@/app/lib/articles";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return getArticles().map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
const { slug } = await params;

let article;

try {
  article = await getArticle(slug);
} catch {
  notFound();
}

  const showTableOfContents = article.tableOfContents.length >= 3;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            {article.category}
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-400">
            {article.description}
          </p>

          <p className="mt-5 text-sm text-neutral-500">
            {article.readingTime} min read
          </p>

          <div className="mt-8 h-px w-full bg-neutral-800" />
        </header>

        {showTableOfContents && (
          <nav
            aria-label="Table of contents"
            className="mb-12 border border-neutral-800 p-6 sm:p-8"
          >
            <h2 className="text-sm uppercase tracking-[0.25em] text-neutral-400">
              In this article
            </h2>

            <ol className="mt-5 space-y-3">
              {article.tableOfContents.map((item) => (
                <li
                  key={item.id}
                  className={item.level === 3 ? "pl-5" : ""}
                >
                  <a
                    href={`#${item.id}`}
                    className="text-neutral-400 transition hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        <section className="mt-20 border-t border-neutral-800 pt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Continue exploring
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Take the next step.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Understanding an idea is only the beginning. Explore more
            lessons or put your investigative thinking to the test.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/training"
              className="group border border-neutral-800 p-6 transition hover:border-neutral-600"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Keep learning
              </p>

              <h3 className="mt-4 text-xl font-semibold">Training</h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Develop observation, deduction, and investigative
                thinking through practical lessons.
              </p>

              <p className="mt-6 text-sm text-neutral-500 transition group-hover:text-white">
                Explore Training →
              </p>
            </Link>

            <Link
              href="/cases"
              className="group border border-neutral-800 p-6 transition hover:border-neutral-600"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Put it into practice
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Interactive Cases
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Examine clues, evaluate possibilities, and test
                your reasoning against investigative challenges.
              </p>

              <p className="mt-6 text-sm text-neutral-500 transition group-hover:text-white">
                Investigate a case →
              </p>
            </Link>
          </div>

          <Link
            href="/articles"
            className="mt-8 inline-block text-sm text-neutral-500 transition hover:text-white"
          >
            ← Back to all articles
          </Link>
        </section>
      </article>
    </main>
  );
}
