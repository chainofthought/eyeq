
import { getArticles } from "@/app/lib/articles";
import ContentCard from "@/app/components/ContentCard";


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
           <ContentCard
       key={article.slug}
        href={`/articles/${article.slug}`}
        label={article.category}
       title={article.title}
       description={article.description}
       action="Read article"
    />
  ))}
</div>

      </div>
    </main>
  );
}