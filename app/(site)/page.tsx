import { FileText, FolderKanban, Mail, User } from "lucide-react";

import { GridBeam } from "@/components/cult/grid-beam";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { TextAnimate } from "@/components/cult/text-animate";
import { HubCard } from "@/components/hub-card";

export default function Home() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20">
      {/* 层 1：深底 + 双层品牌光晕 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-background-deep">
        <div className="absolute left-1/2 top-[-20%] h-[55vh] w-[80vw] -translate-x-1/2 rounded-full bg-brand-glow-orange mix-blend-screen blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[45vh] w-[50vw] rounded-full bg-brand-glow-mint mix-blend-screen blur-[120px]" />
      </div>
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
        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
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
