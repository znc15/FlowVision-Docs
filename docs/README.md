---
home: true
title: FlowVision 文档
heroImage: /logo/logo_512.png
heroText: FlowVision 文档
tagline: AI 驱动的流程图设计、项目分析与 MCP 协同工作台
bgImage: /images/hero-light.png
bgImageDark: /images/hero-dark.png
bgImageStyle:
  background-attachment: fixed
actions:
  - text: 快速开始
    link: ./quickstart.html
    type: primary
  - text: 功能总览
    link: ./features/ai-generate.html
  - text: MCP 集成
    link: ./mcp/overview.html
highlights:
  - header: 以流程图为中心的 AI 工作流
    image: /images/main.png
    bgImage: /images/hero-light.png
    bgImageDark: /images/hero-dark.png
    highlights:
      - title: AI 自动出图
        details: 从自然语言或项目代码直接生成流程图，缩短从想法到图谱的距离。
        link: ./features/ai-generate.html
      - title: 项目分析
        details: 解析目录、依赖与模块关系，快速建立系统认知。
        link: ./features/project-analysis.html
      - title: 可视化编辑
        details: 在画布中拖拽、分组、布局和微调节点连线。
        link: ./features/visual-editor.html
  - header: 面向协作与扩展
    description: 让团队、桌面端和外部 AI 客户端围绕同一份图状态协同工作。
    image: /logo/logo_256.png
    highlights:
      - title: MCP 工具集
        details: 向 Claude Desktop、Cursor、VS Code 暴露标准化能力。
        link: ./mcp/tools-reference.html
      - title: REST 与 WebSocket
        details: 同时支持请求式接口与实时同步通道。
        link: ./api/rest.html
      - title: 架构清晰
        details: 前端、后端、分析引擎和桌面壳职责边界明确。
        link: ./architecture/overview.html
  - header: 面向交付的工程体系
    description: 从本地开发到 GitHub Pages 发布，文档站和产品文档保持一致。
    highlights:
      - title: 快速部署
        details: 使用 VuePress Theme Hope 静态构建并发布到 GitHub Pages。
        link: ./quickstart.html
      - title: 配置说明
        details: 集中管理应用、环境变量和接入参数。
        link: ./configuration.html
      - title: 开发说明
        details: 查看本地调试、文档更新和发布流程。
        link: ./development.html
---

## FlowVision 是什么？

FlowVision 是一套围绕流程图生产、分析和协作建立的工作台。你可以导入代码仓库、让 AI 自动生成图谱、在画布中继续调整，并通过 MCP 接口将图状态暴露给外部智能体或工具链。

## 这份文档包含什么？

- 产品能力与使用方式
- MCP 集成说明
- REST / WebSocket 接口概览
- 架构设计与开发说明
