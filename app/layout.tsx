import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// ponytail: 用系统字体栈，不用 next/font/google——构建期无需联网拉 Google Fonts
//（国内网络/CI 都稳定），且对中文渲染更友好。

export const metadata: Metadata = {
  title: "连晟 · AI 产品经理",
  description:
    "AI 产品经理，专注 AI 产品从 0 到 1、Agent 设计、智能工作流与 AI 商业化。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
