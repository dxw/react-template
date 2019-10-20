/* eslint-env node */
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  devIndicators: {
    autoPrerender: process.env.NODE_ENV !== "test"
  }
});
