
import contentData from "./generated-content.json";

const detectives = contentData.detectives;

export async function getDetective(slug: string) {
  const item = detectives.find((entry) => entry.slug === slug);

  if (!item) {
    throw new Error(`Detective not found: ${slug}`);
  }

  return {
    name: item.name,
    description: item.description,
    origin: item.origin,
    type: item.type,
    contentHtml: item.contentHtml,
  };
}

export function getDetectives() {
  return detectives.map((item) => ({
    slug: item.slug,
    name: item.name,
    description: item.description,
    origin: item.origin,
    type: item.type,
  }));
}
