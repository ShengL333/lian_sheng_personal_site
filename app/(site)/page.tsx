import { Fragment } from "react";
import { FileText, FolderKanban, Mail, User } from "lucide-react";

import { GradientAnimation } from "@/components/cult/bg-animated-gradient";
import { GridBeam } from "@/components/cult/grid-beam";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { TextAnimate } from "@/components/cult/text-animate";
import { HubCard } from "@/components/hub-card";
import { METHOD } from "@/lib/site-data";

export default function Home() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20">
      {/* 层 1：深底 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-background-deep" />
      {/* 层 1b：橙⇄薄荷 缓慢漂移（motion 关键帧 morph，rgba 才能平滑插值） */}
      <GradientAnimation
        className="pointer-events-none opacity-70 mix-blend-screen"
        animationDuration={10}
        gradients={[
          {
            stops: [
              { color: "rgba(255,83,0,0.30)", position: 0 },
              { color: "rgba(255,83,0,0)", position: 55 },
            ],
            centerX: 18,
            centerY: 15,
          },
          {
            stops: [
              { color: "rgba(167,230,213,0.22)", position: 0 },
              { color: "rgba(167,230,213,0)", position: 60 },
            ],
            centerX: 82,
            centerY: 80,
          },
          {
            stops: [
              { color: "rgba(255,83,0,0.22)", position: 0 },
              { color: "rgba(255,83,0,0)", position: 58 },
            ],
            centerX: 78,
            centerY: 20,
          },
          {
            stops: [
              { color: "rgba(167,230,213,0.26)", position: 0 },
              { color: "rgba(167,230,213,0)", position: 55 },
            ],
            centerX: 20,
            centerY: 85,
          },
        ]}
      />
      {/* 层 2：细网格微光（仅首页跑 canvas） */}
      <GridBeam
        className="absolute inset-0 opacity-40"
        colorVariant="ocean"
        theme="dark"
        strength={0.45}
        duration={4}
        breathe
      />
      {/* 层 3：光颗粒 */}
      <TextureOverlay
        texture="noise"
        opacity={0.2}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
      />
      {/* 层 4：内容（一屏） */}
      <div className="container relative z-10 flex flex-col items-center py-10 text-center">
        <span className="mb-8 flex items-center gap-2.5 rounded-full border border-brand-1/30 bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-1 shadow-[0_0_10px_var(--brand-1)]" />
          AI 产品经理 · 厦门 · 4 年经验
        </span>
        <TextAnimate
          text="连晟"
          type="calmInUp"
          className="text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          AI 产品从 0 到 1 落地 · Agent 与多轮交互 · 智能工作流 · AI 商业化
        </p>
        {/* 迷你方法流程图：数字圆 + 标题，渐变 hairline 连接 */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3">
          {METHOD.map((step, i) => (
            <Fragment key={step.title}>
              <div className="flex flex-col items-center gap-1.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2-vivid font-mono text-[11px] font-semibold text-primary-foreground shadow-[0_0_14px_-6px_var(--brand-glow-orange)]">
                  {i + 1}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {step.title}
                </span>
              </div>
              {i < METHOD.length - 1 && (
                <span className="h-px w-4 bg-gradient-to-r from-brand-1/60 to-brand-2-vivid/40 sm:w-6" />
              )}
            </Fragment>
          ))}
        </div>
        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
          <HubCard
            href="/about"
            icon={User}
            title="关于我"
            desc="我的故事与技能"
            tone="orange"
          />
          <HubCard
            href="/work"
            icon={FolderKanban}
            title="项目"
            desc="从 0 到 1 的案例"
            tone="mint"
          />
          <HubCard
            href="/blog"
            icon={FileText}
            title="博客"
            desc="产品与技术随笔"
            tone="mint"
          />
          <HubCard
            href="/contact"
            icon={Mail}
            title="联系"
            desc="聊合作与产品"
            tone="orange"
          />
        </div>
      </div>
    </section>
  );
}
