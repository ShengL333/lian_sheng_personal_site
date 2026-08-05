import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Post = PostMeta & {
  content: string;
};

function readPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        tags: (data.tags as string[]) ?? [],
        content,
      } satisfies Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPosts(): PostMeta[] {
  return readPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    tags: p.tags,
  }));
}

export function getPost(slug: string): Post | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return readPosts().map((p) => p.slug);
}
