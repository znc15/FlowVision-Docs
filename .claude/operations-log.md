# 编码前检查 - GitHub Pages 静态迁移

时间：2026-04-02

已查阅上下文摘要文件：.claude/context-summary-github-pages-migration.md
将使用以下可复用组件：

- docs.json：抽取导航、配色、外链
- images 与 logo：直接作为静态资源目录
- 现有 MDX 页面：保留原有内容结构

将遵循命名约定：沿用现有页面路径与目录名作为路由
将遵循代码风格：MDX 内容最小改动，新增 React 兼容组件接管 Mintlify 标签
确认不重复造轮子，证明：已检查现有仓库，无现成静态站骨架与全局 MDX 组件映射

## 执行记录

- 选型：Docusaurus + 全局 MDX 兼容组件 + GitHub Actions Pages 部署
- 原因：支持静态构建、GitHub Pages 配置成熟、最适合承接当前 MDX 内容

## 编码后声明 - GitHub Pages 静态迁移

时间：2026-04-02

### 1. 复用了以下既有组件

- docs.json：用于提取原导航结构、品牌色、外链信息
- images 与 logo：通过 staticDirectories 直接复用静态资源目录
- 现有 MDX 页面：保留原有目录结构与大部分正文内容

### 2. 遵循了以下项目约定

- 命名约定：仍然沿用原页面文件名与目录名作为最终路由
- 代码风格：内容页维持 MDX 为主，仅在必要位置补兼容组件与静态 API 文案

### 3. 对比了以下相似实现

- docs.json：新方案把原导航配置拆分为 docusaurus.config.mjs 与 sidebars.mjs，但保留原信息架构
- index.mdx：保留卡片式首页入口，只将内容替换为 FlowVision 实际文档入口
- essentials/settings.mdx：未重写页面主体，而是通过兼容组件层接住 Mintlify 标签

### 4. 未重复造轮子的证明

- 已检查仓库内不存在现成的 Docusaurus 骨架、GitHub Pages 工作流或全局 MDX 组件映射
- 新增方案直接复用 Docusaurus 官方静态部署能力，没有引入自研构建系统

