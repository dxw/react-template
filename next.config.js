/* eslint-env node */
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  distDir: process.env.NEXT_DIST_DIR || ".next"
});
