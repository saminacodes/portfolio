/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  // Other Next.js configurations
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
});
