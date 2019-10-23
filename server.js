/* eslint-env node */
const { createServer } = require("http");
const { join } = require("path");
const { parse } = require("url");
const next = require("next");

const PORT = parseInt(process.env.PORT || "3000");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (
      pathname === "/service-worker.js" ||
      pathname.startsWith("/precache-manifest.")
    ) {
      const filePath = join(__dirname, ".next", pathname);

      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(PORT, () => {
    console.info(`> Ready on http://localhost:${PORT}`);
  });
});
