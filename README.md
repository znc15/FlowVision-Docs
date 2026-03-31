# FlowVision 文档

FlowVision 项目的官方文档站点，基于 [Mintlify](https://mintlify.com/) 构建。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 `http://localhost:3000` 即可预览。

## 部署

推送到 `main` 分支后自动通过 GitHub Actions 部署到 GitHub Pages。

## 目录结构

```
├── docs.json              # Mintlify 配置
├── introduction.mdx       # 简介
├── quickstart.mdx         # 快速开始
├── configuration.mdx      # 配置说明
├── features/              # 功能指南
├── mcp/                   # MCP 集成文档
├── api/                   # API 参考
├── architecture/          # 架构设计
├── images/                # 截图
└── logo/                  # Logo 资源
```

## 相关链接

- [FlowVision 主项目](https://github.com/znc15/FlowVision)
- [FlowVision 官网](https://znc15.github.io/FlowVision)
