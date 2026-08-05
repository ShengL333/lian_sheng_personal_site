import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function HubCard({
  href,
  icon: Icon,
  title,
  desc,
  tone = "orange",
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tone?: "orange" | "mint";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-2xl p-px transition-all",
        "hover:shadow-[0_16px_50px_-20px_var(--brand-glow-orange)]",
        tone === "orange"
          ? "bg-gradient-to-br from-brand-1/50 via-brand-amber/30 to-transparent"
          : "bg-gradient-to-br from-brand-2-vivid/50 via-brand-3/30 to-transparent"
      )}
    >
      <div className="flex h-full flex-col gap-3 rounded-[calc(1rem-1px)] bg-card/70 p-4 backdrop-blur-md transition-colors hover:bg-card">
        <div
          className={cn(
            "flex size-9 items-center justify-center rounded-lg text-primary-foreground",
            tone === "orange"
              ? "bg-gradient-to-br from-brand-1 to-brand-2-vivid"
              : "bg-gradient-to-br from-brand-2-vivid to-brand-3"
          )}
        >
          <Icon className="size-4" />
        </div>
        <div>
          <p className="flex items-center gap-1 text-sm font-semibold tracking-tight">
            {title}
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
