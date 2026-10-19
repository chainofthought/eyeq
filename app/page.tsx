
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/app/lib/articles";
import { getCases } from "@/app/lib/cases";
import { getDetectives } from "@/app/lib/detectives";

export default function Home() {
  const articles = getArticles();
  const cases = getCases();
  const detectives = getDetectives();

  const featuredArticle = articles.find(
    (article) => article.pillar === "Training"
  ) ?? articles[0];

  const featuredCase = cases[0];
  const featuredDetective = detectives[0];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/eyeq-logo.png"
              alt="EyeQ logo"
              width={64}
              height={64}
              priority
              className="h-16 w-16 object-contain"
            />

            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
              The investigative mind
            </p>
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Train your mind.
            <br />
            Think like a detective.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Develop observation, deduction, and investigative thinking.
            Explore the world of mystery — then learn to see it differently.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/training"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Start Training →
            </Link>

            <Link
              href="/culture"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-500"
            >
              Explore Culture
            </Link>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="relative flex h-72 w-72 items-center justify-center">
            <div className="absolute h-52 w-52 rotate-45 border border-neutral-700" />
            <div className="absolute h-36 w-36 rounded-full border border-neutral-600" />
            <div className="absolute h-20 w-20 rotate-45 border border-neutral-800" />
            <div className="absolute h-3 w-3 rounded-full bg-white" />
            <div className="absolute h-72 w-px bg-neutral-800" />
            <div className="absolute h-px w-72 bg-neutral-800" />
          </div>
        </div>
      </section>

      {/* The two pillars */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Two ways into EyeQ
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore the mystery. Develop the mind.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/training"
              className="group border border-neutral-700 p-8 transition hover:border-neutral-500 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                01 / Develop your skills
              </p>

              <h3 className="mt-6 text-3xl font-semibold">
                Training
              </h3>

              <p className="mt-4 max-w-md leading-7 text-neutral-400">
                Practice observation, strengthen your reasoning, and test
                your thinking through investigative challenges.
              </p>

              <p className="mt-8 text-sm text-neutral-300 transition group-hover:text-white">
                Develop your mind →
              </p>
            </Link>

            <Link
              href="/culture"
              className="group border border-neutral-800 p-8 transition hover:border-neutral-600 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                02 / Explore the subject
              </p>

              <h3 className="mt-6 text-3xl font-semibold">
                Culture
              </h3>

              <p className="mt-4 max-w-md leading-7 text-neutral-400">
                Discover legendary detectives, crime fiction, mystery
                stories, and the ideas behind their lasting appeal.
              </p>

              <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                Enter the world of mystery →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning method */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            The EyeQ method
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Think beyond what you see.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-500">01</p>
              <h3 className="mt-4 text-2xl font-semibold">Observe</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                Notice details, changes, patterns, and inconsistencies
                that might otherwise escape your attention.
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">02</p>
              <h3 className="mt-4 text-2xl font-semibold">Reason</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                Evaluate evidence, question assumptions, and connect
                clues without jumping to conclusions.
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">03</p>
              <h3 className="mt-4 text-2xl font-semibold">Investigate</h3>
              <p className="mt-4 leading-7 text-neutral-400">
                Apply your thinking to cases, puzzles, and the methods
                used to investigate real and fictional mysteries.
              </p>
            </div>
          </div>

          <Link
            href="/training"
            className="mt-10 inline-block rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-neutral-500"
          >
            Explore the Training path →
          </Link>
        </div>
      </section>

      {/* Featured content */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Your next challenge
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Put your mind to work.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredArticle && (
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="group border border-neutral-800 p-8 transition hover:border-neutral-600"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Lesson / {featuredArticle.category}
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {featuredArticle.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {featuredArticle.description}
                </p>

                <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                  Read lesson →
                </p>
              </Link>
            )}

            {featuredCase && (
              <Link
                href={`/cases/${featuredCase.slug}`}
                className="group border border-neutral-800 p-8 transition hover:border-neutral-600"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Interactive practice
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {featuredCase.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {featuredCase.description}
                </p>

                <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                  Investigate case →
                </p>
              </Link>
            )}

            {featuredDetective && (
              <Link
                href={`/detectives/${featuredDetective.slug}`}
                className="group border border-neutral-800 p-8 transition hover:border-neutral-600"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Study a detective
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {featuredDetective.name}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {featuredDetective.description}
                </p>

                <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                  Study detective →
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:py-32">
          <p className="text-3xl font-medium tracking-tight sm:text-4xl">
            The world leaves clues everywhere.
          </p>

          <p className="mt-6 text-lg text-neutral-500">
            EyeQ exists to teach you how to see them.
          </p>

          <Link
            href="/training"
            className="mt-8 inline-block text-sm text-white transition hover:text-neutral-300"
          >
            Start developing your mind →
          </Link>
        </div>
      </section>
    </main>
  );
}
