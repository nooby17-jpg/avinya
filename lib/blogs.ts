import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  return fs.readdirSync(BLOG_DIR).map((file) => {
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags ?? [],
      readingTime: readingTime(content).text,
    };
  });
}

export function getLocalBlog(slug: string) {
  const source = fs.readFileSync(
    path.join(BLOG_DIR, `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    data,
    content,
    readingTime: readingTime(content).text,
  };
}
