
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
            EyeQ
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Train your mind.
            <br />
            Think like a detective.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
            Crime. Mystery. Investigation. Logic.
            Learn to observe deeper, reason better, and connect the clues.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Explore EyeQ
            </button>

            <button className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-500">
              Test Your Mind
            </button>
          </div>
        </div>

        <div className="mt-24 border-t border-neutral-800 pt-6">
          <p className="text-sm text-neutral-500">
            Creating the next generation of mystery minds.
          </p>
        </div>
      </section>
    </main>
  );
}
