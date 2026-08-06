"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/work", label: "项目" },
  { href: "/blog", label: "博客" },
  { href: "/contact", label: "联系" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          连晟 · AI 产品经理
        </Link>
        <div className="hidden items-center gap-5 text-sm sm:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} active={isActive(item.href)} />
          ))}
          <ThemeToggle />
        </div>
        <button
          className="-mr-2 p-2 text-muted-foreground sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="菜单"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl sm:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm transition-colors",
                    isActive(item.href)
                      ? "bg-card font-medium text-foreground"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 px-3">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative transition-colors",
        active
          ? "font-medium text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand-1 shadow-[0_0_8px_var(--brand-1)]" />
      )}
    </Link>
  );
}
