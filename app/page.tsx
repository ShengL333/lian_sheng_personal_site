import {
  ArrowDown,
  Brain,
  Clapperboard,
  Heart,
  Layers,
  LayoutGrid,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { GradientAnimation } from "@/components/cult/bg-animated-gradient";
import { TextAnimate } from "@/components/cult/text-animate";
import { MetalButton } from "@/components/cult/metal-button";
import { ShiftCard } from "@/components/cult/shift-card";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const heroGradients = [
  {
    stops: [
      { color: "rgba(99, 102, 241, 0.28)", position: 0 },
      { color: "rgba(56, 189, 248, 0.16)", position: 45 },
      { color: "rgba(167, 139, 250, 0.26)", position: 100 },
    ],
    centerX: 25,
    centerY: 35,
  },
  {
    stops: [
      { color: "rgba(56, 189, 248, 0.24)", position: 0 },
      { color: "rgba(167, 139, 250, 0.18)", position: 50 },
      { color: "rgba(52, 211, 153, 0.2)", position: 100 },
    ],
    centerX: 75,
    centerY: 60,
  },
  {
    stops: [
      { color: "rgba(167, 139, 250, 0.26)", position: 0 },
      { color: "rgba(99, 102, 241, 0.2)", position: 50 },
      { color: "rgba(14, 165, 233, 0.22)", position: 100 },
    ],
    centerX: 50,
    centerY: 80,
  },
];

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
    name: "FEELME · AI 角色陪伴",
    icon: Heart,
    desc: "AI 角色陪伴 App 交互原型：6 个角色、完整聊天系统、能量货币体系与智能硬件（手环 / 戒指）",
    tags: ["Next.js", "React", "Zustand", "Framer Motion"],
    highlight: "160+ 测试全绿 · 自研原型",
  },
  {
    name: "小棉袄 · 微信小程序",
    icon: ShieldCheck,
    desc: "为独居老人提供 AI 聊天陪伴，为子女提供每日安心简报；超 48h 沉默自动预警",
    tags: ["微信小程序", "云开发", "DeepSeek"],
    highlight: "老人 + 子女双端闭环 · 自研",
  },
  {
    name: "剧情互动直播",
    icon: Clapperboard,
    desc: "AI 群体互动直播：观众实时投票影响剧情走向，聊天流驱动多分支叙事",
    tags: ["HTML/JS", "Python", "AI 叙事"],
    highlight: "实时互动 · 自研 demo",
  },
  {
    name: "feelAI · 内容平台",
    icon: LayoutGrid,
    desc: "Bento 风格 AI 内容消费平台前端原型，信息架构优先的交互探索",
    tags: ["HTML/CSS/JS", "Bento", "交互原型"],
    highlight: "信息架构探索 · 自研",
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
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
              作品
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              技能
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
      >
        <GradientAnimation
          className="opacity-50"
          gradients={heroGradients}
          animationDuration={20}
        />
        <div className="container relative z-10 flex flex-col items-center py-24 text-center">
          <span className="mb-8 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
            AI 产品经理 · 厦门 · 4 年经验
          </span>
          <TextAnimate
            text="连晟"
            type="fadeInUp"
            className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl"
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            AI 产品从 0 到 1 落地 · Agent 与多轮交互 · 智能工作流 · AI 商业化
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MetalButton asChild size="lg" className="px-6">
              <a href="#projects">看项目</a>
            </MetalButton>
            <MetalButton asChild size="lg" variant="outline" className="px-6">
              <a href="#experience">看经历</a>
            </MetalButton>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="向下滚动"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </section>

      {/* 核心优势 */}
      <section id="about" className="container scroll-mt-20 py-24">
        <p className="section-label">About</p>
        <h2 className="section-title">AI 产品从 0 到 1</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          4 年 AI 产品经验，覆盖消费级 AI 应用（角色交互、数字人）与
          ToB 智能系统（智能排程、智能展示）。既理解大模型能力边界，也能通过产品设计放大
          AI 价值——从需求分析、方案设计到研发落地、商业化验证全链路。
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-card p-6 shadow-elevation-light dark:shadow-elevation-dark"
            >
              <s.icon className="size-6 text-primary" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 工作经历 */}
      <section
        id="experience"
        className="container scroll-mt-20 py-24 border-t border-border/60"
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">工作经历</h2>
        <div className="mt-12 space-y-10">
          {jobs.map((job) => (
            <div key={job.company} className="relative border-l border-border pl-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-sm font-medium text-foreground/80">
                  {job.company}
                </span>
                <span className="ml-auto text-sm text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-lg font-semibold">教育背景</h3>
        <div className="mt-6 space-y-4">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-border bg-card px-5 py-4"
            >
              <span className="font-medium">{ed.degree}</span>
              <span className="text-sm text-muted-foreground">{ed.school}</span>
              <span className="ml-auto text-sm text-muted-foreground">
                {ed.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 项目作品 */}
      <section
        id="projects"
        className="container scroll-mt-20 py-24 border-t border-border/60"
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">自研项目</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          用前端能力把产品想法做成可交互原型，验证交互设计与 AI
          体验。悬停卡片查看更多。
        </p>
        <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <ShiftCard
              key={p.name}
              topContent={
                <div className="w-full rounded-lg bg-accent/80 px-3 py-2">
                  <p className="text-sm font-semibold text-accent-foreground">
                    {p.name}
                  </p>
                </div>
              }
              middleContent={
                <div className="flex flex-col items-center gap-3 text-center">
                  <p.icon className="size-10 text-primary" />
                  <p className="max-w-[220px] text-sm leading-5 text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              }
              bottomContent={
                <div className="flex w-full flex-col gap-3 rounded-xl border border-border bg-card px-4 py-4 shadow-elevation-light dark:shadow-elevation-dark">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{p.highlight}</p>
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* 技能 */}
      <section
        id="skills"
        className="container scroll-mt-20 py-24 border-t border-border/60"
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">技能</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
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
