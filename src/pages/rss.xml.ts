import { getCollection } from "astro:content";

const siteUrl = "https://codexparatodos.com";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.id}/`;

      return `
        <item>
          <title>${escapeXml(post.data.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(post.data.description)}</description>
          <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Codex para todos</title>
        <link>${siteUrl}</link>
        <description>Notas, recursos y aprendizajes de la comunidad Codex para todos.</description>
        <language>es-CL</language>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
