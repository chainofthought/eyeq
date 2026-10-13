
import contentData from "./generated-content.json";

const cases = contentData.cases;

export async function getCase(slug: string) {
  const item = cases.find((entry) => entry.slug === slug);

  if (!item) {
    throw new Error(`Case not found: ${slug}`);
  }

  return {
    title: item.title,
    description: item.description,
    category: item.category,
    difficulty: item.difficulty,
    suspects: item.suspects ?? [],
    correctAnswer: item.correctAnswer,
    criticalClue: item.criticalClue,
    whyItMatters: item.whyItMatters,
    principle: item.principle,
    explanation: item.explanation,
    contentHtml: item.contentHtml,
  };
}

export function getCases() {
  return cases.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    category: item.category,
    difficulty: item.difficulty,
  }));
}
