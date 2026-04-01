---
title: 开发说明
---

# 开发说明

本仓库现在使用 VuePress Theme Hope 作为文档站底座，所有文档源文件位于 `docs/` 目录。

## 本地启动

```bash
pnpm install
pnpm docs:dev
```

## 生产构建

```bash
pnpm docs:build
```

构建产物输出到 `docs/.vuepress/dist`。

## 目录约定

- `docs/.vuepress/config.ts`: 站点基础配置
- `docs/.vuepress/theme.ts`: Theme Hope 主题配置
- `docs/.vuepress/navbar/zh.ts`: 顶部导航
- `docs/.vuepress/sidebar/zh.ts`: 侧边栏
- `docs/`: 全部文档内容

## 部署说明

GitHub Actions 会在 `main` 分支更新后执行 `pnpm docs:build`，并将 `docs/.vuepress/dist` 发布到 GitHub Pages。

## 维护原则

- 不再新增 Docusaurus 或 MDX 语法
- 页面统一使用 Markdown 与 Theme Hope frontmatter
- 静态资源统一放入 `docs/.vuepress/public`
