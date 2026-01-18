import { getAllBlogs } from "@/lib/blogs";
import { getMediumPosts } from "@/lib/medium";

export const metadata = {
  title: "Blogs & Insights | Avinya",
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  // ✅ REQUIRED in Next.js 15 / 16
  const params = await searchParams;
  const query = params.q?.toLowerCase() ?? "";

  const local = getAllBlogs().filter((blog) => {
    const title = blog.title?.toLowerCase() ?? "";
    const tags =
      blog.tags?.map((t: string) => t.toLowerCase()) ?? [];

    return (
      title.includes(query) ||
      tags.some((tag) => tag.includes(query))
    );
  });

  const medium = await getMediumPosts();

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl font-semibold">
          Blogs & Insights
        </h1>

        <div className="mt-12 space-y-8">
          {/* Local blogs */}
          {local.map((post) => (
            <a
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="block border-b pb-6"
            >
              <h2 className="font-heading text-2xl">
                {post.title ?? "Untitled"}
              </h2>

              <p className="text-subtext mt-2">
                {post.description ?? ""}
              </p>

              <div className="mt-2 text-sm text-subtext flex gap-4 flex-wrap">
                <span>{post.readingTime}</span>

                {post.tags?.map((tag: string) => (
                  <span key={tag} className="text-highlight">
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}

          {/* Medium blogs */}
          {medium.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              className="block border-b pb-6 opacity-80 hover:opacity-100"
            >
              <h2 className="font-heading text-2xl">
                {post.title}
              </h2>

              <p className="text-subtext mt-2">
                {post.description}
              </p>

              <p className="mt-2 text-sm text-subtext">
                Medium
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
