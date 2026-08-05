import { EMAIL } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© 2026 连晟 · AI 产品经理</p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-xs transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            回到顶部 ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
