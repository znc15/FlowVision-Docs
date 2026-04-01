# 项目上下文摘要（github-pages-migration）

生成时间：2026-04-02

### 1. 相似实现分析

- 实现1：docs.json
  - 模式：Mintlify 站点配置集中管理导航、配色、navbar、footer
  - 可复用：颜色值、导航分组、外链信息
  - 需注意：Docusaurus 不支持直接消费 docs.json

- 实现2：index.mdx
  - 模式：卡片式首页 + 多列布局
  - 可复用：卡片入口结构、CTA 分区
  - 需注意：依赖 Mintlify 全局组件自动注入

- 实现3：essentials/settings.mdx
  - 模式：ResponseField + Expandable 递归参数说明块
  - 可复用：参数展示布局语义
  - 需注意：迁移时必须提供兼容组件，否则页面无法渲染

### 2. 项目约定

- 命名约定：MDX 页面名即路由名，目录结构直接映射 URL
- 文件组织：根目录与子目录混合存放文档内容，静态资源在 images 与 logo
- 代码风格：内容页以 Markdown 为主，少量 JSX 组件增强布局

### 3. 可复用组件清单

- docs.json：站点信息与导航来源
- images/ 与 logo/：可直接作为静态资源目录复用
- snippets/snippet-intro.mdx：可作为 Docusaurus MDX 导入示例保留

### 4. 测试策略

- 主要验证：pnpm build 构建通过
- 辅助验证：pnpm start 本地预览
- 风险验证：检查 GitHub Pages 的 baseUrl 是否与仓库名一致

### 5. 依赖和集成点

- 外部依赖：Docusaurus、React、react-icons、react-katex
- 内部依赖：现有所有 MDX 页面与静态资源目录
- 集成方式：通过全局 MDXComponents 兼容 Mintlify 标签

### 6. 技术选型理由

- 选择 Docusaurus：原生支持 GitHub Pages、MDX、自定义 React 组件
- 优势：迁移成本低，可保留现有目录与大部分内容
- 风险：Mintlify 自动 OpenAPI 渲染需改为静态页面内容

### 7. 关键风险点

- 内部绝对路径在 GitHub Pages 子路径下会失效，必须统一走 baseUrl
- API 示例页原先依赖 openapi frontmatter 自动生成，迁移后需手工补内容
- snippets 目录需排除出文档生成，但保留可导入能力
