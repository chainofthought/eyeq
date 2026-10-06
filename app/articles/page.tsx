import Link from "next/link";
import { getArticles } from "@/app/lib/articles";

export default function Articles() {
  const articles = getArticles();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">

        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          EyeQ
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Articles
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Investigations, ideas, and analysis designed to sharpen the way you
          observe, reason, and understand the world.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group rounded-2xl border border-neutral-800 p-8 transition hover:border-neutral-600"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                {article.category}
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {article.title}
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                {article.description}
              </p>

              <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                Read article →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}