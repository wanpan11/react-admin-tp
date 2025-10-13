// 工具方法：复制 dist/index.html 至 dist/404.html
const fs = require("node:fs");
const path = require("node:path");

function copyIndexTo404() {
  const distDir = path.resolve(__dirname, "../dist");
  const indexPath = path.join(distDir, "index.html");
  const notFoundPath = path.join(distDir, "404.html");
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    // 只允许 console.warn 或 console.error
    console.warn("index.html 已复制为 404.html");
  }
  else {
    console.error("index.html 不存在，无法复制");
  }
}

copyIndexTo404();
