# FlowVision Docs

这是 FlowVision 的文档站仓库，现已迁移为基于 Docusaurus 官方 classic 模板的静态站项目，可直接部署到 GitHub Pages。

## 技术栈

- Docusaurus 3
- React 18
- MDX 文档页面
- GitHub Actions + GitHub Pages

## 本地开发

```bash
pnpm install
pnpm dev
```

默认本地预览地址为 `http://localhost:3000`。

## 构建与预览

```bash
pnpm build
pnpm serve
```

静态构建产物输出到 `build/` 目录。

## 部署

仓库内已包含 GitHub Pages 工作流，推送到 `main` 分支后会自动构建并发布。

## 目录说明

- 文档内容：根目录 `.mdx` 文件与各功能子目录
- 侧边栏：`sidebars.ts`
- 站点配置：`docusaurus.config.ts`
- 全局样式：`src/css/custom.css`

## 内容策略

历史页面已经改写为 Docusaurus 原生 MDX 写法。后续新增内容建议直接使用 Markdown、MDX、admonitions、Tabs、`details` 以及 Docusaurus 官方配置能力。
