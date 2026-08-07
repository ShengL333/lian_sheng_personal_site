import { GradientHeading } from "@/components/cult/gradient-heading";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { ProjectCarousel } from "@/components/project-carousel";
import { education, jobs, METHOD, projects } from "@/lib/site-data";

const stats = [
  { value: "04", label: "代表项目" },
  { value: "03", label: "AI 领域" },
  { value: "02", label: "次 0→1 主导" },
];

const statuses = ["进行中", "已上线", "已上线", "已上线"];

export default function WorkPage() {
  return (
    <div className="relative">
      {/* 展示台氛围：大号橙/薄荷光晕 + 噪点 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-8%] h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-brand-glow-mint mix-blend-screen blur-[130px]" />
        <div className="absolute bottom-[-12%] left-[-8%] h-[42vh] w-[45vw] rounded-full bg-brand-glow-orange mix-blend-screen blur-[120px]" />
      </div>
      <TextureOverlay
        texture="noise"
        opacity={0.15}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
      />

      <div className="container relative py-28">
        <p className="section-label">Work</p>
        <div className="mb-5 h-px w-24 bg-gradient-brand" />
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h1>重点项目</h1>
        </GradientHeading>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground md:text-base">
          主导与参与过的核心产品，从 0 到 1 落地。左右滑动浏览。
        </p>

        {/* 产品方法论流程带 */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            我的产品方法
          </p>
          <div className="mt-5 flex items-start gap-3 sm:gap-4">
            {METHOD.map((step, i) => (
              <div key={step.title} className="flex flex-1 items-start gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-1 to-brand-2-vivid font-mono text-xs font-semibold text-primary-foreground shadow-[0_0_16px_-6px_var(--brand-glow-orange)]">
                    {i + 1}
                  </span>
                  {i < METHOD.length - 1 && (
                    <span className="mt-1.5 w-px flex-1 bg-gradient-to-b from-brand-1/60 to-brand-2-vivid/40" />
                  )}
                </div>
                <div className="pb-1">
                  <p className="text-sm font-semibold tracking-tight">{step.title}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {step.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ProjectCarousel
            items={projects.map((p, i) => ({
              index: i + 1,
              name: p.name,
              icon: <p.icon className="size-6" />,
              desc: p.desc,
              tags: p.tags,
              status: statuses[i] ?? "已上线",
            }))}
          />
        </div>

        {/* 统计带 */}
        <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-gradient-brand text-3xl font-semibold sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* 工作经历时间线 */}
        <h2 className="mt-20 text-2xl font-semibold tracking-tight">
          工作经历
        </h2>
        <div className="mt-10 space-y-2">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="group relative border-l border-border/70 pl-8 pb-10 last:pb-0"
            >
              <span className="absolute -left-[6px] top-1.5 size-3 rounded-full bg-gradient-brand ring-4 ring-brand-1/15 transition-shadow group-hover:ring-brand-1/25" />
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

        {/* 教育 */}
        <h2 className="mt-16 text-2xl font-semibold tracking-tight">教育背景</h2>
        <div className="mt-6 space-y-4">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-2xl border border-border/60 bg-card/60 px-5 py-4 backdrop-blur-sm"
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
      </div>
    </div>
  );
}
