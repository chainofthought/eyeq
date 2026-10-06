import Link from "next/link";
import { getDetectives } from "@/app/lib/detectives";

export default function Detectives() {
  const detectives = getDetectives();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          EyeQ
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Detectives
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          The minds of mystery — characters known for observation, deduction,
          psychology, and investigation.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {detectives.map((detective) => (
            <Link
              key={detective.slug}
              href={`/detectives/${detective.slug}`}
              className="group rounded-2xl border border-neutral-800 p-8 transition hover:border-neutral-600"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  {detective.type}
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  {detective.origin}
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {detective.name}
              </h2>

              <p className="mt-4 leading-7 text-neutral-400">
                {detective.description}
              </p>

              <p className="mt-8 text-sm text-neutral-500 transition group-hover:text-white">
                Study detective →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}