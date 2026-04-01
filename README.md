# FlowVision Docs

这是 FlowVision 的产品文档仓库，现已重构为基于 VuePress Theme Hope 的静态文档站，并通过 GitHub Pages 发布。

## 技术栈

- VuePress 2
- VuePress Theme Hope
- Vite Bundler
- GitHub Actions + GitHub Pages

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 生产构建

```bash
pnpm docs:build
```

构建产物输出到 `docs/.vuepress/dist`。

## 目录说明

- 文档内容：`docs/`
- 站点配置：`docs/.vuepress/config.ts`
- 主题配置：`docs/.vuepress/theme.ts`
- 导航配置：`docs/.vuepress/navbar/zh.ts`
- 侧边栏配置：`docs/.vuepress/sidebar/zh.ts`

## 维护原则

- 不再保留 Docusaurus、MDX 和旧模板文档页
- 新页面统一使用 VuePress Markdown 与 Theme Hope frontmatter
- 静态资源统一放在 `docs/.vuepress/public/`
