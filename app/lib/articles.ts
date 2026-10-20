
import contentData from "./generated-content.json";

const articles = contentData.articles;

export async function getArticle(slug: string) {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Article not found: ${slug}`);
  }

  return {
    title: article.title,
    description: article.description,
    pillar: article.pillar,
    category: article.category,
    tags: "tags" in article ? article.tags ?? [] : [],
    contentHtml: article.contentHtml,
  };
}

export function getArticles() {
  return articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    pillar: article.pillar,
    category: article.category,
    tags: "tags" in article ? article.tags ?? [] : [],
  }));
}
