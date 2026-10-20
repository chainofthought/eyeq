
import contentData from "./generated-content.json";

const articles = contentData.articles;

function calculateReadingTime(html: string) {
  const words = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;|&#39;|&apos;/gi, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

function prepareArticleContent(html: string) {
  const usedIds = new Set<string>();
  const tableOfContents: {
    id: string;
    title: string;
    level: number;
  }[] = [];

  const contentHtml = html.replace(
    /<h([23])(?:\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (match, level, innerHtml) => {
      const title = innerHtml
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;|&#160;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;|&apos;/gi, "'")
        .trim();

      const baseId =
        title
          .toLowerCase()
          .normalize("NFKD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") || "section";

      let id = baseId;
      let count = 2;

      while (usedIds.has(id)) {
        id = `${baseId}-${count++}`;
      }

      usedIds.add(id);

      tableOfContents.push({
        id,
        title,
        level: Number(level),
      });

      return match.replace(
        /^<h[23](?:\s[^>]*)?>/i,
        `<h${level} id="${id}">`,
      );
    },
  );

  return { contentHtml, tableOfContents };
}

export async function getArticle(slug: string) {
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Article not found: ${slug}`);
  }

  const { contentHtml, tableOfContents } = prepareArticleContent(
    article.contentHtml,
  );

  return {
    title: article.title,
    description: article.description,
    pillar: article.pillar,
    category: article.category,
    tags: "tags" in article ? article.tags ?? [] : [],
    contentHtml,
    readingTime: calculateReadingTime(article.contentHtml),
    tableOfContents,
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
    readingTime: calculateReadingTime(article.contentHtml),
  }));
}
