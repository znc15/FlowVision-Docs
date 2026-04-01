import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/zh.js";
import { zhSidebar } from "./sidebar/zh.js";

export default hopeTheme({
  hostname: process.env.DOCS_SITE_URL || "https://znc15.github.io",
  author: {
    name: "FlowVision Team",
    url: "https://github.com/znc15/FlowVision",
  },
  logo: "/logo/logo_256.png",
  repo: "znc15/FlowVision",
  docsRepo: "znc15/FlowVision-Docs",
  docsBranch: "main",
  docsDir: "docs",
  navbar: zhNavbar,
  sidebar: zhSidebar,
  footer: `Copyright © ${new Date().getFullYear()} FlowVision`,
  displayFooter: true,
  pageInfo: false,
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    mark: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
  },
  plugins: {
    blog: false,
  },
});
