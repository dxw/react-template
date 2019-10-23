/* eslint-env node */
const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

const nextConfig = {};

module.exports = withOffline(withCSS(nextConfig));
