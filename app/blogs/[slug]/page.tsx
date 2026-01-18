import { getLocalBlog } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const { content, data, readingTime } = getLocalBlog(params.slug);

  return (
    <article className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-semibold">
          {data.title}
        </h1>

        <div className="mt-2 text-sm text-subtext flex gap-4">
          <span>{data.date}</span>
          <span>{readingTime}</span>
        </div>

        <div className="prose mt-10">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypePrettyCode],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
