import ContentCard from "@/app/components/ContentCard";
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
            <ContentCard
              key={detective.slug}
              href={`/detectives/${detective.slug}`}
              label={detective.type}
              title={detective.name}
              description={detective.description}
              action="Study detective"
              meta={detective.origin}
            />
          ))}
        </div>
      </div>
    </main>
  );
}