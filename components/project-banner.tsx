import type { ReactNode } from "react";

export function ProjectBanner({
  index,
  name,
  icon,
  desc,
  tags,
  status,
}: {
  index: number;
  name: string;
  icon: ReactNode;
  desc: string;
  tags: string[];
  status: string;
}) {
  return (
    <div className="relative w-[82vw] shrink-0 snap-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-1/40 via-brand-amber/20 to-brand-2-vivid/30 p-px transition-shadow hover:shadow-[0_24px_70px_-24px_var(--brand-glow-orange)] sm:w-[560px]">
      <div className="relative flex h-full min-h-[280px] flex-col justify-between gap-6 rounded-[calc(1.5rem-1px)] bg-card p-7 sm:min-h-[300px]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-brand-2-vivid">0{index}</p>
            <h3 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
              {name}
            </h3>
          </div>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2-vivid text-primary-foreground">
            {icon}
          </div>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-[15px]">
          {desc}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/60 bg-card-raised px-2.5 py-1 text-[11px] text-foreground/80"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto flex items-center gap-1.5 text-[11px] text-brand-2-vivid">
            <span className="size-1.5 rounded-full bg-brand-2-vivid" /> {status}
          </span>
        </div>
      </div>
    </div>
  );
}
