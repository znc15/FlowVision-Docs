# 编码前检查 - GitHub Pages 静态迁移

时间：2026-04-02

已查阅上下文摘要文件：.claude/context-summary-github-pages-migration.md
将使用以下可复用组件：

- docs.json：抽取导航、配色、外链
- images 与 logo：直接作为静态资源目录
- 现有 MDX 页面：保留原有内容结构

将遵循命名约定：沿用现有页面路径与目录名作为路由
将遵循代码风格：优先采用官方 classic 模板结构，仅为历史 MDX 保留最小兼容层
确认不重复造轮子，证明：已切换为 Docusaurus 官方 classic 模板底座，不再维持自写脚手架

## 执行记录

- 选型：Docusaurus 官方 classic 模板 + 历史 MDX 兼容层 + GitHub Actions Pages 部署
- 原因：用现成成品模板承接站点结构，减少自写骨架，同时保留现有内容与路由

## 编码后声明 - GitHub Pages 静态迁移

时间：2026-04-02

### 1. 复用了以下既有组件

- docs.json：用于提取原导航结构、品牌色、外链信息
- images 与 logo：通过 staticDirectories 直接复用静态资源目录
- 现有 MDX 页面：保留原有目录结构与大部分正文内容
- 官方 classic 模板：复用 package scripts、TypeScript 配置、官方 config/sidebars 结构

### 2. 遵循了以下项目约定

- 命名约定：仍然沿用原页面文件名与目录名作为最终路由
- 代码风格：项目底座采用官方模板默认结构，内容页维持 MDX 为主，仅在必要位置补兼容组件与静态 API 文案

### 3. 对比了以下相似实现

- docs.json：新方案把原导航配置拆分为 docusaurus.config.ts 与 sidebars.ts，但保留原信息架构
- index.mdx：保留卡片式首页入口，只将内容替换为 FlowVision 实际文档入口
- essentials/settings.mdx：未重写页面主体，而是通过兼容组件层接住 Mintlify 标签

### 4. 未重复造轮子的证明

- 当前仓库已直接切换到官方 Docusaurus classic 模板结构
- 自定义部分仅保留历史 Mintlify 风格 MDX 的必要兼容层，没有继续扩展自研脚手架

