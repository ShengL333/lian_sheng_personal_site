import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PrintButton } from "@/components/print-button";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import {
  EMAIL,
  education,
  jobs,
  skills,
  strengths,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "简历 · 连晟",
  description: "连晟 · AI 产品经理简历",
};

export default function ResumePage() {
  return (
    <main className="relative min-h-screen print:bg-white">
      {/* 品牌氛围（屏幕显示，打印隐藏） */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden print:hidden"
      >
        <div className="absolute left-[-10%] top-[-8%] h-[45vh] w-[45vw] rounded-full bg-brand-glow-orange mix-blend-screen blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40vh] w-[40vw] rounded-full bg-brand-glow-mint mix-blend-screen blur-[120px]" />
      </div>
      <TextureOverlay
        texture="noise"
        opacity={0.15}
        className="pointer-events-none absolute inset-0 mix-blend-screen print:hidden"
      />

      {/* 工具条（打印时隐藏） */}
      <div className="relative border-b border-border/60 bg-background/80 backdrop-blur-xl print:hidden">
        <div className="container flex h-14 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> 返回首页
          </Link>
          <PrintButton />
        </div>
      </div>

      {/* 简历正文 */}
      <div className="container relative max-w-3xl py-12 print:max-w-none print:py-0">
        {/* 头部 */}
        <header className="mb-10 print:mb-6">
          <h1 className="text-4xl font-semibold tracking-tight">连晟</h1>
          <p className="mt-2 text-lg font-medium text-muted-foreground">
            AI 产品经理 · 厦门
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            4 年工作经历 · {EMAIL}
          </p>
          <div className="mt-4 h-px w-16 bg-gradient-brand print:hidden" />
        </header>

        {/* 核心优势 */}
        <section className="mb-10 print:mb-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            核心优势
          </h2>
          <ul className="space-y-2">
            {strengths.map((s) => (
              <li
                key={s.title}
                className="group flex gap-3 text-sm leading-6 text-foreground/90"
              >
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary transition-shadow group-hover:shadow-[0_0_10px_var(--brand-1)]" />
                <span>
                  <span className="font-medium">{s.title}</span>
                  <span className="text-muted-foreground"> — {s.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 工作经历 */}
        <section className="mb-10 print:mb-6">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            工作经历
          </h2>
          <div className="space-y-8 print:space-y-5">
            {jobs.map((job) => (
              <div key={job.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-foreground/80">
                    {job.company}
                  </span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-border" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 教育 */}
        <section className="mb-10 print:mb-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            教育背景
          </h2>
          <div className="space-y-3">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="rounded-2xl border border-border/60 bg-card/60 px-5 py-4 backdrop-blur-sm transition-all hover:border-brand-1/40 hover:shadow-[0_16px_50px_-20px_var(--brand-glow-orange)] print:shadow-none print:hover:border-border/60"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-medium">{ed.degree}</span>
                  <span className="text-sm text-muted-foreground">
                    {ed.school}
                  </span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {ed.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 技能 */}
        <section className="print:mb-0">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            技能
          </h2>
          <div className="grid gap-6 md:grid-cols-3 print:grid-cols-3">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-medium">{group.group}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
