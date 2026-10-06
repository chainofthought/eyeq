import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const casesDirectory = path.join(process.cwd(), "content/cases");

export async function getCase(slug: string) {
  const fullPath = path.join(casesDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    title: data.title,
    description: data.description,
    category: data.category,
    difficulty: data.difficulty,
    contentHtml: processedContent.toString(),
  };
}

export function getCases() {
  const files = fs.readdirSync(casesDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");

      const fullPath = path.join(casesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        difficulty: data.difficulty,
      };
    });
}