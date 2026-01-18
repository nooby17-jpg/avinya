import Parser from "rss-parser";

const parser = new Parser();
let cache: any[] = [];
let lastFetch = 0;

export async function getMediumPosts() {
  const now = Date.now();
  if (cache.length && now - lastFetch < 1000 * 60 * 10) {
    return cache; // 10 min cache
  }

  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@nikhil7679"
    );

    cache = feed.items.map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      description: item.contentSnippet ?? "",
      date: item.pubDate ?? "",
      source: "medium",
    }));

    lastFetch = now;
    return cache;
  } catch {
    return [];
  }
}
