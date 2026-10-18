
import Link from "next/link";
import { getDetectives } from "@/app/lib/detectives";

export default function CulturePage() {
  const detectives = getDetectives();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          EyeQ Culture
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Explore the world of mystery.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Discover the detectives, stories, and ideas that have shaped
          the world of crime and mystery.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">
            Legendary Detectives
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Explore the minds, methods, and legacies of the greatest
            detectives in fiction.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {detectives.map((detective) => (
              <Link
                key={detective.slug}
                href={`/detectives/${detective.slug}`}
                className="border border-neutral-800 p-8 transition hover:border-neutral-600"
              >
                <h3 className="text-2xl font-semibold">
                  {detective.name}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {detective.description}
                </p>

                <p className="mt-8 text-sm text-neutral-500">
                  Explore detective →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-neutral-800 pt-12">
          <h2 className="text-2xl font-semibold">
            More to discover
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            From classic detective fiction to modern crime stories,
            EyeQ explores the characters, ideas, and works that make
            mystery fascinating.
          </p>

          <Link
            href="/articles"
            className="mt-6 inline-block rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-neutral-500"
          >
            Explore articles →
          </Link>
        </section>
      </div>
    </main>
  );
}
