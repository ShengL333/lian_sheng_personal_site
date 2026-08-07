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

// gray-matter 会把 YAML 的 date: 解析成 Date 对象，String(Date) 是星期名字符串，
// 拿去排序会按字母序而不是日期序。统一转成 "YYYY-MM-DD"。
function formatDate(value: unknown): string {
  if (!value) return "";
  const d = value instanceof Date ? value : new Date(value as string);
  if (isNaN(d.getTime())) return String(value);
  return d.toISOString().slice(0, 10);
}

function readPosts(): Post[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        date: formatDate(data.date),
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
