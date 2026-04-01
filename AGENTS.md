# Documentation project instructions

## About this project

- This is a documentation site built on VuePress Theme Hope
- Pages are Markdown files with YAML frontmatter
- Site configuration lives in `docs/.vuepress/config.ts`
- Theme configuration lives in `docs/.vuepress/theme.ts`
- Navbar configuration lives in `docs/.vuepress/navbar/zh.ts`
- Sidebar configuration lives in `docs/.vuepress/sidebar/zh.ts`
- Run `pnpm docs:dev` to preview locally
- Run `pnpm docs:build` to verify the static output

## Terminology

- Use `FlowVision` as the product name
- Use `MCP` for Model Context Protocol related features
- Use `GitHub Pages` when referring to deployment target

## Style preferences

- Use active voice and second person when writing instructional docs
- Keep sentences concise and action-oriented
- Prefer Chinese for product-facing content in this repository
- Prefer standard Markdown and Theme Hope frontmatter over custom syntax

## Content boundaries

- Prefer documenting FlowVision product capabilities, setup, architecture, API, and MCP integration
- Do not add Docusaurus, Mintlify, or old template migration content unless it is explicitly historical context

