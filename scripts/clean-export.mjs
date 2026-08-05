// Next 16 Turbopack 静态导出会向 out/ 注入 `__next.*` 调试产物
//（route-group 元数据 dir + .txt dump），这些目录会遮蔽 `xxx.html`
// 导致 GitHub Pages / 静态服务器把 /work 等路由当目录处理而 404。
// 构建后清理，保留 _next/ 资源与页面 HTML。
import fs from "node:fs";
import path from "node:path";

const out = path.join(process.cwd(), "out");

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next")) {
      fs.rmSync(full, { recursive: true, force: true });
    } else if (entry.isDirectory()) {
      walk(full);
    }
  }
}

// 只删 __next 后，route 目录（work/ 等）会变成空目录，仍然遮蔽 work.html。
// 自底向上剪掉所有空目录，保留 _next/（资源）与 _not-found/（有 html）。
function pruneEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      pruneEmptyDirs(path.join(dir, entry.name));
    }
  }
  if (fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

walk(out);
pruneEmptyDirs(out);
console.log("cleaned __next artifacts and empty dirs from out/");
