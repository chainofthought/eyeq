export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            The world of mystery, investigation & deduction
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            Train your mind.
            <br />
            Think like a detective.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Explore crime, mystery, investigation, psychology, logic, and
            deduction. Learn to observe what others overlook.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/articles"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Explore EyeQ
            </a>

            <a
              href="/cases"
              className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-500"
            >
              Test Your Mind
            </a>
          </div>
        </div>
            </section>

      <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-500">01</p>
              <h2 className="mt-4 text-2xl font-semibold">Observe</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                Learn to notice details, behavior, patterns, and evidence that
                others overlook.
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">02</p>
              <h2 className="mt-4 text-2xl font-semibold">Reason</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                Develop deduction, logic, critical thinking, and the ability
                to connect seemingly unrelated clues.
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">03</p>
              <h2 className="mt-4 text-2xl font-semibold">Investigate</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                Explore cases, forensics, OSINT, psychology, mystery, and the
                methods behind real investigations.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Explore EyeQ
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <a
              href="/articles"
              className="group border border-neutral-800 p-8 transition hover:border-neutral-600"
            >
              <p className="text-sm text-neutral-500">01</p>
              <h2 className="mt-8 text-2xl font-semibold">Articles</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                Ideas, analysis, psychology, investigation, and the world of
                mystery.
              </p>
              <p className="mt-8 text-sm text-neutral-500 group-hover:text-white">
                Explore →
              </p>
            </a>

            <a
              href="/cases"
              className="group border border-neutral-800 p-8 transition hover:border-neutral-600"
            >
              <p className="text-sm text-neutral-500">02</p>
              <h2 className="mt-8 text-2xl font-semibold">Cases</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                Test your observation, deduction, and investigative thinking.
              </p>
              <p className="mt-8 text-sm text-neutral-500 group-hover:text-white">
                Investigate →
              </p>
            </a>

            <a
              href="/detectives"
              className="group border border-neutral-800 p-8 transition hover:border-neutral-600"
            >
              <p className="text-sm text-neutral-500">03</p>
              <h2 className="mt-8 text-2xl font-semibold">Detectives</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                Explore the greatest detective minds and the methods behind
                their reasoning.
              </p>
              <p className="mt-8 text-sm text-neutral-500 group-hover:text-white">
                Discover →
              </p>
            </a>
          </div>
        </div>
      </section>
            <section className="border-t border-neutral-800">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-3xl font-medium tracking-tight sm:text-4xl">
            The world leaves clues everywhere.
          </p>

          <p className="mt-6 text-lg text-neutral-500">
            EyeQ exists to teach you how to see them.
          </p>
        </div>
       
        <div className="hidden justify-center lg:flex">
          <div className="relative flex h-64 w-64 items-center justify-center">
            <div className="absolute h-48 w-48 rotate-45 border border-neutral-700"></div>

            <div className="absolute h-32 w-32 rounded-full border border-neutral-600"></div>

            <div className="absolute h-3 w-3 rounded-full bg-white"></div>

            <div className="absolute h-64 w-px bg-neutral-800"></div>

            <div className="absolute h-px w-64 bg-neutral-800"></div>
          </div>
        </div>
      </section>
    
    </main>
  );
}