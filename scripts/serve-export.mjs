// 本地模拟 GitHub Pages 静态解析：/path → path.html → path/index.html。
// 用法：node scripts/serve-export.mjs [port]（默认 4173，服务 out/ 目录）。
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = Number(process.argv[2] ?? 4173);
const root = path.join(process.cwd(), "out");

function resolve(reqPath) {
  const clean = decodeURIComponent(reqPath).split("?")[0].replace(/^\/+/, "");
  const candidates = [
    clean,
    `${clean}.html`,
    path.join(clean, "index.html"),
  ];
  for (const c of candidates) {
    const full = path.join(root, c);
    if (!full.startsWith(root)) continue;
    if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return null;
}

http
  .createServer((req, res) => {
    const file = resolve(req.url ?? "/");
    if (!file) {
      res.writeHead(404).end("404");
      return;
    }
    const ext = path.extname(file);
    const mime =
      { ".html": "text/html", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".txt": "text/plain", ".css": "text/css", ".js": "text/javascript" }[ext] ?? "application/octet-stream";
    res.writeHead(200, { "content-type": mime });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
