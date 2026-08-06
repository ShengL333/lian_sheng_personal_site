import Image from "next/image";
import { GradientHeading } from "@/components/cult/gradient-heading";
import { MinimalCard } from "@/components/cult/minimal-card";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { Badge } from "@/components/ui/badge";
import { EMAIL, skills, strengths } from "@/lib/site-data";
import portrait from "@/public/pics/portrait.jpg";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* 静态双色光晕 + 噪点 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[-10%] h-[45vh] w-[45vw] rounded-full bg-brand-glow-orange mix-blend-screen blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40vh] w-[40vw] rounded-full bg-brand-glow-mint mix-blend-screen blur-[120px]" />
      </div>
      <TextureOverlay
        texture="noise"
        opacity={0.15}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
      />

      <div className="container relative py-28">
        <p className="section-label">About</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h1>关于我</h1>
        </GradientHeading>

        {/* 照片 + 叙事 */}
        <div className="mt-10 grid items-start gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <div className="group relative w-full max-w-[320px] rounded-3xl bg-gradient-to-br from-brand-1/40 via-brand-amber/20 to-brand-2-vivid/30 p-px transition-shadow hover:shadow-[0_24px_70px_-24px_var(--brand-glow-orange)]">
            <Image
              src={portrait}
              alt="连晟"
              priority
              className="aspect-[2/3] w-full rounded-[calc(1.5rem-1px)] object-cover"
            />
          </div>
          <div className="max-w-2xl space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base">
            <p className="text-base font-medium text-foreground">
              AI 产品经理 · 厦门 · 4 年经历
            </p>
            <p>
              我学游戏设计与开发出身，在海外做过几年游戏产品，回国后一路做到 AI
              产品经理。从游戏到 AI，驱动我的是同一个问题：{" "}
              <span className="font-medium text-foreground">
                怎么让人对一个系统产生情感，并愿意长期投入。
              </span>
            </p>
            <blockquote className="border-l-2 border-primary/60 pl-4 text-lg font-medium leading-relaxed text-foreground/90">
              「AI 产品不是把模型包装好，而是让技术长出有人情味的样子。」
            </blockquote>
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
            <p className="font-mono text-sm text-foreground/80">
              {EMAIL}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            我擅长
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, i) => (
              <MinimalCard key={s.title} className="bg-card hover:bg-card-raised">
                <div className="rounded-[20px] p-6">
                  <div
                    className={
                      "flex size-11 items-center justify-center rounded-xl bg-gradient-to-br text-primary-foreground " +
                      (i % 2 === 0
                        ? "from-brand-1 to-brand-2-vivid"
                        : "from-brand-2-vivid to-brand-3")
                    }
                  >
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

        <div className="mt-14 grid gap-10 md:grid-cols-3">
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
                    className="rounded-full border-border/60 bg-card px-3 py-1.5 text-[13px] text-foreground/80 transition-colors hover:border-brand-1/50 hover:text-brand-1"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
