import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const detectivesDirectory = path.join(
  process.cwd(),
  "content/detectives"
);

export async function getDetective(slug: string) {
  const fullPath = path.join(detectivesDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    name: data.name,
    description: data.description,
    origin: data.origin,
    type: data.type,
    contentHtml: processedContent.toString(),
  };
}

export function getDetectives() {
  const files = fs.readdirSync(detectivesDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");

      const fullPath = path.join(detectivesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        name: data.name,
        description: data.description,
        origin: data.origin,
        type: data.type,
      };
    });
}