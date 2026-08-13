import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { GradientAnimation } from "@/components/cult/bg-animated-gradient";
import { GridBeam } from "@/components/cult/grid-beam";
import { ProjectBanner } from "@/components/project-banner";
import { EMAIL, jobs, METHOD, projects, strengths } from "@/lib/site-data";

const featuredProjects = projects.slice(0, 3);
const projectStatuses = ["进行中", "已上线", "已上线"];

export default function Home() {
  return (
    <div className="relative">
      {/* ── Hero 开场：一屏 ── */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20">
        {/* 氛围层 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-background-deep" />
        <GradientAnimation
          className="pointer-events-none opacity-70 mix-blend-screen"
          animationDuration={10}
          gradients={[
            { stops: [{ color: "rgba(255,83,0,0.30)", position: 0 }, { color: "rgba(255,83,0,0)", position: 55 }], centerX: 18, centerY: 15 },
            { stops: [{ color: "rgba(167,230,213,0.22)", position: 0 }, { color: "rgba(167,230,213,0)", position: 60 }], centerX: 82, centerY: 80 },
            { stops: [{ color: "rgba(255,83,0,0.22)", position: 0 }, { color: "rgba(255,83,0,0)", position: 58 }], centerX: 78, centerY: 20 },
            { stops: [{ color: "rgba(167,230,213,0.26)", position: 0 }, { color: "rgba(167,230,213,0)", position: 55 }], centerX: 20, centerY: 85 },
          ]}
        />
        <GridBeam
          className="absolute inset-0 opacity-40"
          colorVariant="ocean"
          theme="dark"
          strength={0.45}
          duration={4}
          breathe
        />

        <div className="container relative z-10 flex flex-col items-center py-10 text-center">
          <span className="mb-8 flex items-center gap-2.5 rounded-full border border-brand-1/30 bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-1 shadow-[0_0_10px_var(--brand-1)]" />
            AI 产品经理 · 厦门 · 4 年经验
          </span>
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            连晟
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            AI 产品从 0 到 1 落地 · Agent 与多轮交互 · 智能工作流 · AI 商业化
          </p>

          {/* 迷你方法流程图 */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
            {METHOD.map((step, i) => (
              <Fragment key={step.title}>
                <div className="flex flex-col items-center gap-1.5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2-vivid font-mono text-[11px] font-semibold text-primary-foreground shadow-[0_0_14px_-6px_var(--brand-glow-orange)]">
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{step.title}</span>
                </div>
                {i < METHOD.length - 1 && (
                  <span className="h-px w-4 bg-gradient-to-r from-brand-1/60 to-brand-2-vivid/40 sm:w-6" />
                )}
              </Fragment>
            ))}
          </div>

          {/* 主 CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-1 to-brand-2-vivid px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_-12px_var(--brand-glow-orange)] transition-transform hover:scale-[1.02]"
            >
              <Mail className="size-4" /> 联系我
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-7 py-3 text-sm font-medium text-muted-foreground backdrop-blur-md transition-colors hover:border-brand-1/40 hover:text-foreground"
            >
              看项目 <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 核心优势 ── */}
      <section className="container relative py-20">
        <p className="section-label">Strengths</p>
        <div className="mb-5 h-px w-24 bg-gradient-brand" />
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">我擅长什么</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-brand-1/40"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-1 to-brand-2-vivid text-primary-foreground">
                <s.icon className="size-4" />
              </div>
              <p className="mt-4 text-sm font-semibold tracking-tight">{s.title}</p>
              <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 代表项目 ── */}
      <section className="container relative py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Projects</p>
            <div className="mb-5 h-px w-24 bg-gradient-brand" />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">代表项目</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            查看全部 <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectBanner
              key={p.name}
              index={i + 1}
              name={p.name}
              icon={<p.icon className="size-6" />}
              desc={p.desc}
              tags={p.tags}
              status={projectStatuses[i] ?? "已上线"}
            />
          ))}
        </div>
      </section>

      {/* ── 工作经历 ── */}
      <section className="container relative py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">Experience</p>
            <div className="mb-5 h-px w-24 bg-gradient-brand" />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">工作经历</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            看完整经历 <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 space-y-2">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="group relative border-l border-border/70 pl-8 pb-8 last:pb-0"
            >
              <span className="absolute -left-[6px] top-1.5 size-3 rounded-full bg-gradient-brand ring-4 ring-brand-1/15 transition-shadow group-hover:ring-brand-1/25" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                <span className="text-sm font-medium text-foreground/80">{job.company}</span>
                <span className="ml-auto font-mono text-xs text-muted-foreground">{job.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 底部 CTA ── */}
      <section className="container relative py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="section-label">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            有想聊的？欢迎找我
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            聊 AI 产品、Agent 应用、合作机会，或只是想打个招呼——都欢迎。
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brand-1 to-brand-2-vivid px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_36px_-12px_var(--brand-glow-orange)] transition-transform hover:scale-[1.02]"
          >
            <Mail className="size-4" /> 联系我
          </a>
          <p className="mt-4 font-mono text-xs text-muted-foreground">{EMAIL}</p>
        </div>
      </section>
    </div>
  );
}
