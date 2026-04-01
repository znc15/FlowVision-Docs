import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "开始使用",
    children: [
      "/introduction.html",
      "/quickstart.html",
      "/configuration.html",
      "/development.html",
    ],
  },
  {
    text: "功能指南",
    link: "/features/ai-generate.html",
  },
  {
    text: "MCP 集成",
    link: "/mcp/overview.html",
  },
  {
    text: "API",
    link: "/api/rest.html",
  },
  {
    text: "架构",
    link: "/architecture/overview.html",
  },
  {
    text: "GitHub",
    link: "https://github.com/znc15/FlowVision",
  },
]);
