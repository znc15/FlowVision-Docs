# FlowVision Docs

这是 FlowVision 的文档站仓库，现已改为基于 Docusaurus 的纯静态站项目，可直接部署到 GitHub Pages。

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

仓库内已包含 GitHub Pages 工作流：

- 推送到 `main` 分支后自动构建
- 构建完成后自动发布到 GitHub Pages
- 项目页路径会根据仓库名自动设置 `baseUrl`

## 目录说明

- 文档内容：根目录 `.mdx` 文件与各功能子目录
- 侧边栏：`sidebars.mjs`
- 站点配置：`docusaurus.config.mjs`
- 兼容组件：`src/components/MintlifyCompat.jsx`
- 全局 MDX 组件映射：`src/theme/MDXComponents.js`

## 兼容策略

为了尽量保留原站点外观与内容结构，项目提供了一层 Mintlify 风格兼容组件，能够继续渲染以下常见标签：

- `Card` / `CardGroup` / `Columns`
- `Steps` / `Step`
- `Accordion` / `AccordionGroup`
- `Note` / `Tip` / `Warning` / `Info` / `Check`
- `ResponseField` / `Expandable`
- `CodeGroup` / `Frame` / `Latex`

这让现有 MDX 内容无需大规模重写即可迁移到静态部署方案。

