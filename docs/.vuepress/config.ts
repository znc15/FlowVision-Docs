import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

type SiteBase = "/" | `/${string}/`;

const normalizeBase = (value: string): SiteBase => {
  const trimmed = value.trim();

  if (!trimmed || trimmed === "/") {
    return "/";
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withTrailingSlash = withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;

  return withTrailingSlash as SiteBase;
};

const repository = process.env.GITHUB_REPOSITORY || "znc15/FlowVision-Docs";
const [, projectName = "FlowVision-Docs"] = repository.split("/");
const isUserSite = projectName.endsWith(".github.io");
const base = normalizeBase(
  process.env.DOCS_BASE_URL || (isUserSite ? "/" : `/${projectName}/`),
);

export default defineUserConfig({
  base,
  lang: "zh-CN",
  title: "FlowVision 文档",
  description: "AI 驱动的流程图设计、项目分析与 MCP 协同平台",
  head: [["link", { rel: "icon", href: "/logo/app.ico" }]],
  theme,
});
