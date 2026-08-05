import {
  ArrowDown,
  Bot,
  Brain,
  Factory,
  Gamepad2,
  Heart,
  Layers,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { GradientHeading } from "@/components/cult/gradient-heading";
import { GridBeam } from "@/components/cult/grid-beam";
import { MetalButton } from "@/components/cult/metal-button";
import { MinimalCard } from "@/components/cult/minimal-card";
import { ShiftCard } from "@/components/cult/shift-card";
import { TextAnimate } from "@/components/cult/text-animate";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const strengths: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Rocket,
    title: "AI 产品从 0 到 1",
    desc: "需求分析 → 方案设计 → 研发协作 → 上线验证 → 持续优化全链路",
  },
  {
    icon: Brain,
    title: "Agent 与多轮交互",
    desc: "角色设定、回复逻辑、记忆机制、状态管理、生成策略",
  },
  {
    icon: Layers,
    title: "复杂系统设计",
    desc: "智能排程、数字人、内容推荐等业务规则与系统逻辑拆解",
  },
  {
    icon: TrendingUp,
    title: "数据驱动优化",
    desc: "模型效果评估体系，从指标反馈推动算法与体验持续迭代",
  },
];

const jobs: { role: string; company: string; period: string; points: string[] }[] = [
  {
    role: "AI 产品经理",
    company: "厦门新宇星链科技有限公司",
    period: "2025.11 – 至今",
    points: [
      "AI 角色交互产品规划与核心能力设计：智能对话、多轮交互、内容生成、用户关系成长",
      "角色设定、回复逻辑、记忆机制、状态管理等 AI 交互方案设计，提升长期互动效果",
      "AI 产品标准化能力体系：角色配置、生成策略、安全规则、交互流程",
      "商业化路径设计：付费模型、生成排队、虚拟资产、创作者收益",
    ],
  },
  {
    role: "AI 产品经理",
    company: "畅达瑞途信息技术有限公司",
    period: "2025.3 – 2025.10",
    points: [
      "AI 智能排程产品设计：将设备、物料、人员、订单优先级转化为系统规则与决策逻辑",
      "AI 工作流产品框架：任务流程、规则配置、结果反馈、人工调整机制",
      "模型效果评估体系：排程合理性、任务完成率、稳定性，推动算法持续优化",
    ],
  },
  {
    role: "项目经理（偏产品）",
    company: "厦门黑镜科技有限公司",
    period: "2023.6 – 2024.10",
    points: [
      "AI 数字人与智能展示系统产品设计：内容展示、语音交互、动作表现、系统联动",
      "主导建发、泉州文旅 AI 数字人项目，从需求沟通到方案落地",
      "协调算法、3D、美术、前端团队系统联调，提升交付效率",
    ],
  },
  {
    role: "游戏制作人",
    company: "Zygobot Studio（美国）",
    period: "2022.5 – 2023.6",
    points: [
      "多人联机射击游戏从 0 到 1 产品设计：玩法系统、用户体验、版本规划",
      "用户测试与数据反馈驱动机制优化；管理程序、美术、策划多团队协作",
    ],
  },
];

const education: { degree: string; school: string; period: string }[] = [
  { degree: "游戏设计 · 硕士", school: "美国福赛大学", period: "2022.8 – 2024.6" },
  { degree: "游戏开发 · 学士", school: "美国福赛大学", period: "2019.8 – 2022.4" },
];

const projects: {
  name: string;
  icon: LucideIcon;
  desc: string;
  tags: string[];
  highlight: string;
}[] = [
  {
    name: "AI 角色交互产品",
    icon: Heart,
    desc: "AI 角色陪伴产品从 0 到 1：智能对话、多轮交互、内容生成与用户关系成长，主导核心能力与商业化设计",
    tags: ["大模型应用", "多轮交互", "记忆机制", "商业化"],
    highlight: "新宇星链 · 2025.11–至今",
  },
  {
    name: "AI 智能排程系统",
    icon: Factory,
    desc: "制造排程：将设备、物料、人员、订单优先级转化为系统规则与 AI 决策逻辑，搭建设计效果评估体系",
    tags: ["智能排程", "AI 工作流", "规则引擎", "效果评估"],
    highlight: "畅达瑞途 · 2025.3–2025.10",
  },
  {
    name: "AI 数字人 · 智能展示",
    icon: Bot,
    desc: "数字人交互流程设计：内容展示、语音交互、动作表现、系统联动；主导建发、泉州文旅 AI 数字人项目",
    tags: ["AI 数字人", "智能展示", "交互设计", "项目交付"],
    highlight: "黑镜科技 · 2023.6–2024.10",
  },
  {
    name: "多人联机射击游戏",
    icon: Gamepad2,
    desc: "多人联机射击游戏从 0 到 1：玩法系统、用户体验、版本规划；用户测试与数据反馈驱动迭代",
    tags: ["游戏产品", "玩法设计", "用户测试", "跨团队管理"],
    highlight: "Zygobot · 2022.5–2023.6",
  },
];

const skills: { group: string; items: string[] }[] = [
  {
    group: "AI 产品能力",
    items: [
      "AI 应用设计",
      "大模型产品设计",
      "AI Agent",
      "Prompt 设计",
      "智能工作流",
      "模型效果评估",
      "AI 商业化设计",
    ],
  },
  {
    group: "产品能力",
    items: [
      "需求分析",
      "用户调研",
      "业务流程设计",
      "PRD",
      "原型设计",
      "产品规划",
      "版本管理",
    ],
  },
  {
    group: "技术原型",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "微信小程序",
      "云开发",
      "DeepSeek API",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* 顶栏导航 */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-14 items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            连晟 · AI 产品经理
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
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
            <a href="#skills" className="transition-colors hover:text-foreground">
              技能
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
              <a href="#experience">
                看经历 <ArrowDown className="size-4" />
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

      {/* 核心优势 */}
      <section id="about" className="container scroll-mt-20 py-24 sm:py-28">
        <p className="section-label">About</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h2>AI 产品从 0 到 1</h2>
        </GradientHeading>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          4 年 AI 产品经验，覆盖消费级 AI 应用（角色交互、数字人）与
          ToB 智能系统（智能排程、智能展示）。既理解大模型能力边界，也能通过产品设计放大
          AI 价值——从需求分析、方案设计到研发落地、商业化验证全链路。
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <MinimalCard key={s.title} className="bg-card hover:bg-secondary/50">
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

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2026 连晟 · AI 产品经理</p>
          <a href="#home" className="transition-colors hover:text-foreground">
            回到顶部 ↑
          </a>
        </div>
      </footer>
    </>
  );
}
