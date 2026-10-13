
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const root = process.cwd();

async function readCollection(collectionName) {
  const directory = path.join(root, "content", collectionName);

  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"));

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(directory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(content);

      return {
        slug,
        ...data,
        contentHtml: processedContent.toString(),
      };
    })
  );
}

async function main() {
  const [articles, cases, detectives] = await Promise.all([
    readCollection("articles"),
    readCollection("cases"),
    readCollection("detectives"),
  ]);

  const outputPath = path.join(
    root,
    "app",
    "lib",
    "generated-content.json"
  );

  fs.writeFileSync(
    outputPath,
    JSON.stringify({ articles, cases, detectives }, null, 2),
    "utf8"
  );

  console.log(
    `Generated content: ${articles.length} articles, ` +
      `${cases.length} cases, ${detectives.length} detectives.`
  );
}

main().catch((error) => {
  console.error("Content generation failed:", error);
  process.exitCode = 1;
});
