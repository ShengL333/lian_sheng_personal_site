"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProjectBanner } from "@/components/project-banner";

type ProjectBannerItem = {
  index: number;
  name: string;
  icon: React.ReactNode;
  desc: string;
  tags: string[];
  status: string;
};

export function ProjectCarousel({ items }: { items: ProjectBannerItem[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 560, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {items.map((item) => (
          <ProjectBanner key={item.name} {...item} />
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={() => scroll(-1)}
          className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground transition-colors hover:border-brand-1/40 hover:text-brand-1"
          aria-label="上一个项目"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground transition-colors hover:border-brand-1/40 hover:text-brand-1"
          aria-label="下一个项目"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
