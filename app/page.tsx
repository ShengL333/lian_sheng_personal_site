import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { GradientHeading } from "@/components/cult/gradient-heading";
import { GridBeam } from "@/components/cult/grid-beam";
import { MetalButton } from "@/components/cult/metal-button";
import { MinimalCard } from "@/components/cult/minimal-card";
import { ShiftCard } from "@/components/cult/shift-card";
import { TextAnimate } from "@/components/cult/text-animate";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/posts";
import { EMAIL, education, jobs, projects, skills, strengths } from "@/lib/site-data";

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  const posts = getPosts().slice(0, 3);

  return (
    <>
      {/* 顶栏导航 */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-14 items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            连晟 · AI 产品经理
          </a>
          <div className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              关于
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-foreground"
            >
              经历
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground"
            >
              项目
            </a>
            <a
              href="#writing"
              className="transition-colors hover:text-foreground"
            >
              博客
            </a>
            <a href="/resume" className="transition-colors hover:text-foreground">
              简历
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              联系
            </a>
          </div>
        </nav>
      </header>

      {/* Hero — 光晕 + 细网格 + 颗粒 + 编辑式标题 */}
      <section
        id="home"
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
      >
        {/* 层 1：品牌色柔和光晕（静态） */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-22%] h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-brand-1/[0.07] blur-[120px]" />
          <div className="absolute right-[-10%] top-[28%] h-[45vh] w-[45vw] rounded-full bg-brand-2/[0.06] blur-[100px]" />
          <div className="absolute bottom-[-15%] left-[-5%] h-[40vh] w-[50vw] rounded-full bg-brand-1/[0.05] blur-[120px]" />
        </div>
        {/* 层 2：细网格微光（Canvas 2D） */}
        <GridBeam
          className="absolute inset-0 opacity-60"
          colorVariant="mono"
          theme="light"
          strength={0.4}
          duration={4}
          breathe
        />
        {/* 层 3：颗粒噪点，消除渐变 banding */}
        <TextureOverlay
          texture="noise"
          opacity={0.35}
          className="mix-blend-multiply dark:opacity-20 dark:mix-blend-screen"
        />
        {/* 层 4：内容 */}
        <div className="container relative z-10 flex flex-col items-center py-32 text-center">
          <span className="mb-10 flex items-center gap-2.5 rounded-full border border-border/60 bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground shadow-sm backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            AI 产品经理 · 厦门 · 4 年经验
          </span>
          <TextAnimate
            text="连晟"
            type="calmInUp"
            className="text-6xl font-semibold tracking-[-0.02em] text-foreground sm:text-7xl md:text-8xl"
          />
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            AI 产品从 0 到 1 落地 · Agent 与多轮交互 · 智能工作流 · AI 商业化
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <MetalButton asChild size="lg" className="px-7">
              <a href="#projects">看项目</a>
            </MetalButton>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-7"
            >
              <a href="#about">
                关于我 <ArrowDown className="size-4" />
              </a>
            </Button>
          </div>
        </div>
        {/* 底部淡出衔接 About */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        />
      </section>

      {/* 关于我 — 故事优先 */}
      <section id="about" className="container scroll-mt-20 py-24 sm:py-28">
        <p className="section-label">About</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>关于我</h2>
        </GradientHeading>

        <div className="mt-8 max-w-3xl space-y-6 text-[15px] leading-8 text-muted-foreground">
          <p>
            我学游戏设计与开发出身，在海外做过几年游戏产品，回国后一路做到 AI
            产品经理。从游戏到 AI，驱动我的是同一个问题：{" "}
            <span className="font-medium text-foreground">
              怎么让人对一个系统产生情感，并愿意长期投入。
            </span>
          </p>
          <p>
            游戏用玩法、养成和即时反馈；AI 产品用对话、角色和关系成长。我做的角色陪伴产品、数字人、
            互动叙事，本质上都在设计「用户愿意回来的体验」。而 AI
            的价值最终要落进真实流程——所以我也在制造业做智能排程、在政企场景做数字人交付，把大模型能力变成能算账、能交付的产品。
          </p>
          <p>
            工作之外，我维护一个由 LLM 构建的个人知识库，系统学习 Agent、RAG
            和多智能体系统。对我而言，AI 正在重写「人机协作」的方式，而产品经理的职责，
            是让新技术长出有人情味的样子。
          </p>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            我擅长
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => (
              <MinimalCard
                key={s.title}
                className="bg-card hover:bg-secondary/50"
              >
                <div className="rounded-[20px] p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary ring-1 ring-inset ring-primary/10 shadow-sm">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </MinimalCard>
            ))}
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section
        id="experience"
        className="container scroll-mt-20 py-24 sm:py-28 border-t border-border/50"
      >
        <p className="section-label">Experience</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>工作经历</h2>
        </GradientHeading>
        <div className="mt-12 space-y-2">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="group relative border-l border-border/70 pl-8 pb-10 last:pb-0"
            >
              <span className="absolute -left-[6px] top-1.5 size-3 rounded-full bg-primary ring-4 ring-primary/15 transition-shadow group-hover:ring-primary/25" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}
                </h3>
                <span className="text-sm font-medium text-foreground/80">
                  {job.company}
                </span>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-sm leading-6 text-muted-foreground before:absolute before:left-0 before:top-[9px] before:size-1 before:rounded-full before:bg-border before:content-['']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-lg font-semibold tracking-tight">教育背景</h3>
        <div className="mt-6 space-y-4">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-2xl border border-border/60 bg-card/60 px-5 py-4 backdrop-blur-sm shadow-sm"
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

      {/* 重点项目（与工作经历一一对应） */}
      <section
        id="projects"
        className="container scroll-mt-20 py-24 sm:py-28 border-t border-border/50"
      >
        <p className="section-label">Projects</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>重点项目</h2>
        </GradientHeading>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          主导与参与过的核心产品，从 0 到 1 落地。悬停卡片查看更多。
        </p>
        <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <ShiftCard
              key={p.name}
              className="bg-gradient-to-b from-card to-muted/40"
              topContent={
                <div className="w-full rounded-lg bg-gradient-to-r from-brand-1 to-brand-2 px-3 py-2 text-primary-foreground shadow-sm">
                  <p className="text-sm font-semibold">
                    <span className="mr-2 font-mono text-xs opacity-80">
                      0{i + 1}
                    </span>
                    {p.name}
                  </p>
                </div>
              }
              middleContent={
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary ring-1 ring-inset ring-primary/10">
                    <p.icon className="size-6" />
                  </div>
                  <p className="max-w-[220px] text-sm leading-5 text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              }
              bottomContent={
                <div className="flex w-full flex-col gap-3 rounded-xl border border-border/60 bg-card/80 px-4 py-4 backdrop-blur-sm shadow-sm">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[11px] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {p.highlight}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* 技能 */}
      <section
        id="skills"
        className="container scroll-mt-20 py-24 sm:py-28 border-t border-border/50"
      >
        <p className="section-label">Skills</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>技能</h2>
        </GradientHeading>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-full border-border/60 bg-card px-3 py-1.5 text-[13px] text-foreground/80 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 见解 */}
      <section
        id="writing"
        className="container scroll-mt-20 py-24 sm:py-28 border-t border-border/50"
      >
        <p className="section-label">Writing</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>见解与随笔</h2>
        </GradientHeading>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          关于 AI 产品、Agent 系统与产品思考的随手记录。
        </p>
        <div className="mt-10 space-y-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border/60 bg-card/60 px-6 py-5 shadow-sm transition-all hover:border-primary/30 hover:bg-card hover:shadow-md"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
        >
          全部文章 <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* 联系我 */}
      <section
        id="contact"
        className="container scroll-mt-20 py-24 sm:py-28 border-t border-border/50"
      >
        <p className="section-label">Contact</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>联系我</h2>
        </GradientHeading>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          聊 AI 产品、Agent 应用、合作机会，或者只是想打个招呼——都欢迎。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href={`mailto:${EMAIL}`}>发邮件给我</a>
          </Button>
          <span className="font-mono text-sm text-muted-foreground">
            {EMAIL}
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2026 连晟 · AI 产品经理</p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-xs transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
            <a href="#home" className="transition-colors hover:text-foreground">
              回到顶部 ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
