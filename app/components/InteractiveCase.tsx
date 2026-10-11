
"use client";

import { useState } from "react";

type Suspect = {
  name: string;
  role: string;
};

type InteractiveCaseProps = {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  contentHtml: string;
  suspects: Suspect[];
  correctAnswer: string;
  criticalClue: string;
  whyItMatters: string;
  principle: string;
  explanation: string;
};

export default function InteractiveCase({
  title,
  description,
  category,
  difficulty,
  contentHtml,
  suspects,
  correctAnswer,
  criticalClue,
  whyItMatters,
  principle,
  explanation,
}: InteractiveCaseProps) {
  const [hypothesis, setHypothesis] = useState("");
  const [hypothesisRecorded, setHypothesisRecorded] = useState(false);
  const [selectedSuspect, setSelectedSuspect] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selectedSuspect === correctAnswer;

  function recordHypothesis() {
    if (!hypothesis.trim()) return;

    setHypothesis(hypothesis.trim());
    setHypothesisRecorded(true);
  }

  function submitInvestigation() {
    if (!selectedSuspect || !hypothesisRecorded) return;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <header className="border-b border-neutral-800 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>{category}</span>
            <span>·</span>
            <span>{difficulty}</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
            {description}
          </p>
        </header>

        <section className="mt-12">
          <div
            className="prose prose-invert prose-neutral max-w-none
              prose-headings:font-semibold
              prose-headings:tracking-tight
              prose-p:leading-8
              prose-p:text-neutral-300
              prose-strong:text-white
              prose-li:text-neutral-300
              prose-li:leading-7
              prose-hr:border-neutral-800"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="mt-16 border-t border-neutral-800 pt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Investigation stage 01
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Study the suspects
            </h2>

            <p className="mt-3 leading-7 text-neutral-400">
              Examine each person before committing to a conclusion. Look for
              contradictions between their statements and the evidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {suspects.map((suspect) => {
                const isSelected = selectedSuspect === suspect.name;

                return (
                  <button
                    key={suspect.name}
                    type="button"
                    disabled={!hypothesisRecorded || submitted}
                    onClick={() => setSelectedSuspect(suspect.name)}
                    className={`border p-5 text-left transition ${
                      isSelected
                        ? "border-white bg-white text-black"
                        : "border-neutral-800 bg-transparent text-white hover:border-neutral-600"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    <p className="text-lg font-semibold">{suspect.name}</p>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        isSelected ? "text-neutral-700" : "text-neutral-400"
                      }`}
                    >
                      {suspect.role}
                    </p>

                    <p
                      className={`mt-4 text-xs uppercase tracking-[0.2em] ${
                        isSelected ? "text-neutral-700" : "text-neutral-500"
                      }`}
                    >
                      {isSelected ? "Selected" : "Select suspect"}
                    </p>
                  </button>
                );
              })}
            </div>

            {!hypothesisRecorded && !submitted && (
              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Investigation stage 02
                </p>

                <h2 className="mt-4 text-2xl font-semibold">
                  Form your hypothesis
                </h2>

                <p className="mt-3 leading-7 text-neutral-400">
                  Before choosing a suspect, write down what you believe
                  happened and which evidence supports your explanation.
                </p>

                <textarea
                  value={hypothesis}
                  onChange={(event) => setHypothesis(event.target.value)}
                  placeholder="I believe this happened because..."
                  rows={5}
                  className="mt-6 w-full resize-y border border-neutral-800 bg-transparent p-5 leading-7 text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
                />

                <button
                  type="button"
                  onClick={recordHypothesis}
                  disabled={!hypothesis.trim()}
                  className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Record hypothesis →
                </button>
              </div>
            )}

            {hypothesisRecorded && !submitted && (
              <>
                <div className="mt-12 border border-neutral-800 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Hypothesis recorded
                  </p>

                  <p className="mt-4 leading-7 text-neutral-300">
                    “{hypothesis}”
                  </p>
                </div>

                <h2 className="mt-12 text-2xl font-semibold">
                  Your conclusion
                </h2>

                <p className="mt-3 leading-7 text-neutral-400">
                  Now commit to your conclusion. Who do you believe is lying?
                  Select a suspect above, then submit your investigation.
                </p>

                <button
                  type="button"
                  onClick={submitInvestigation}
                  disabled={!selectedSuspect}
                  className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit investigation →
                </button>
              </>
            )}

            {submitted && (
              <>
                <div className="mt-12 border border-neutral-800 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Your investigation
                  </p>

                  <p className="mt-4 leading-7 text-neutral-300">
                    “{hypothesis}”
                  </p>

                  <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Your conclusion
                  </p>

                  <p className="mt-4 font-semibold text-white">
                    {selectedSuspect}
                  </p>
                </div>

                <div className="mt-12 border border-neutral-800 p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Investigation result
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold">
                    {isCorrect ? "Correct." : "Not quite."}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {isCorrect
                      ? "You identified the correct suspect. Now examine why your conclusion holds up against the evidence."
                      : "Your conclusion did not match the solution. Your investigation can still teach you something. Study the evidence and identify where your reasoning diverged."}
                  </p>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      The critical clue
                    </p>

                    <p className="mt-3 text-lg font-semibold text-white">
                      {criticalClue}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      Why it matters
                    </p>

                    <p className="mt-3 leading-7 text-neutral-400">
                      {whyItMatters}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      Examine your reasoning
                    </p>

                    <p className="mt-3 leading-7 text-neutral-300">
                      Return to the hypothesis you recorded before choosing
                      your suspect. Did it explain the critical clue, or did
                      it rely on an assumption that the evidence could not
                      support?
                    </p>

                    <p className="mt-4 leading-7 text-neutral-400">
                      A strong investigation does not merely find evidence
                      that supports a theory. It also tests competing
                      explanations and looks for facts that could prove the
                      theory wrong.
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      What the case teaches
                    </p>

                    <p className="mt-3 text-lg font-semibold text-white">
                      {principle}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-neutral-800 pt-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      Case analysis
                    </p>

                    <p className="mt-4 leading-7 text-neutral-400">
                      {explanation}
                    </p>
                  </div>

                  <p className="mt-6 font-semibold text-white">
                    The correct answer: {correctAnswer}.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}
