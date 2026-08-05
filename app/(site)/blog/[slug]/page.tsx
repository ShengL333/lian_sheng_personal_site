import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { TextureOverlay } from "@/components/cult/texture-overlay";
import { getPost, getPostSlugs } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post ? `${post.title} · 连晟` : "文章 · 连晟",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <div>
        <div className="container max-w-3xl pt-28 pb-24">
          <p className="text-muted-foreground">文章不存在。</p>
          <Link href="/blog" className="mt-4 inline-block text-sm underline">
            返回博客
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* 品牌氛围：橙上薄荷下光晕 + 噪点 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[-8%] h-[45vh] w-[45vw] rounded-full bg-brand-glow-orange mix-blend-screen blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40vh] w-[40vw] rounded-full bg-brand-glow-mint mix-blend-screen blur-[120px]" />
      </div>
      <TextureOverlay
        texture="noise"
        opacity={0.15}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
      />
      <div className="container relative max-w-3xl pt-28 pb-24">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> 全部文章
        </Link>

        <div className="h-px w-16 bg-gradient-brand print:hidden" />
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-xs text-muted-foreground">
            {post.date}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[11px] font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-[-0.02em] prose-a:text-primary">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}
