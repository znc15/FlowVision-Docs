import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    "introduction",
    "quickstart",
    "configuration",
    "development",
    {
      text: "功能指南",
      prefix: "features/",
      children: [
        "ai-generate",
        "project-analysis",
        "visual-editor",
        "slash-commands",
        "prompt-generate",
        "keyboard-shortcuts",
        "export-import",
      ],
    },
    {
      text: "MCP 集成",
      prefix: "mcp/",
      children: ["overview", "client-setup", "tools-reference"],
    },
    {
      text: "API",
      prefix: "api/",
      children: ["rest", "websocket"],
    },
    {
      text: "API 参考",
      prefix: "api-reference/",
      children: [
        "",
        {
          text: "端点说明",
          prefix: "endpoint/",
          children: ["get", "create", "delete", "webhook"],
        },
      ],
    },
    {
      text: "架构设计",
      prefix: "architecture/",
      children: ["overview", "frontend", "backend", "desktop"],
    },
  ],
});
