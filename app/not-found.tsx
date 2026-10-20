
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#0a0a0a] px-6 py-20 text-white">
      <section className="w-full max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          EyeQ / Missing evidence
        </p>

        <h1 className="mt-8 text-7xl font-semibold tracking-tight sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          This trail leads nowhere.
        </h2>

        <p className="mt-5 max-w-xl leading-7 text-neutral-400">
          We followed the clues, but this page couldn't be found.
          It may have moved, or the address may be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="border border-white px-6 py-3 text-sm transition hover:bg-white hover:text-black"
          >
            Return home →
          </Link>

          <Link
            href="/articles"
            className="border border-neutral-800 px-6 py-3 text-sm text-neutral-400 transition hover:border-neutral-600 hover:text-white"
          >
            Explore articles
          </Link>
        </div>
      </section>
    </main>
  );
}
