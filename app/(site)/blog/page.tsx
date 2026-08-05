import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { GradientHeading } from "@/components/cult/gradient-heading";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { getPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "见解 · 连晟",
  description: "关于 AI 产品、Agent、RAG 与产品思考的随笔。",
};

export default function BlogPage() {
  const posts = getPosts();

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
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> 返回首页
        </Link>

        <p className="section-label">Writing</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h1>见解与随笔</h1>
        </GradientHeading>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          关于 AI 产品、Agent 系统、RAG 与产品思考的随手记录。
        </p>

        <div className="mt-12 space-y-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border/60 bg-card/60 px-6 py-5 shadow-sm transition-all hover:border-brand-1/40 hover:bg-card hover:shadow-md"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[11px] font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
