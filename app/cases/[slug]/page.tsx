import { getCase } from "@/app/lib/cases";
import InteractiveCase from "@/app/components/InteractiveCase";

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = await getCase(slug);

  return (
    <InteractiveCase
      title={caseData.title}
      description={caseData.description}
      category={caseData.category}
      difficulty={caseData.difficulty}
      contentHtml={caseData.contentHtml}
      suspects={caseData.suspects}
      correctAnswer={caseData.correctAnswer}
      criticalClue={caseData.criticalClue}
      whyItMatters={caseData.whyItMatters}
      principle={caseData.principle}
      explanation={caseData.explanation}
    />
  );
}