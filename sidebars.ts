import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: '开始',
      collapsed: false,
      items: ['introduction', 'quickstart', 'configuration', 'development'],
    },
    {
      type: 'category',
      label: '文档定制',
      collapsed: false,
      items: ['essentials/settings', 'essentials/navigation'],
    },
    {
      type: 'category',
      label: '内容编写',
      collapsed: false,
      items: [
        'essentials/markdown',
        'essentials/code',
        'essentials/images',
        'essentials/reusable-snippets',
      ],
    },
    {
      type: 'category',
      label: 'AI 工具',
      collapsed: false,
      items: ['ai-tools/cursor', 'ai-tools/claude-code', 'ai-tools/windsurf'],
    },
    {
      type: 'category',
      label: '功能指南',
      collapsed: false,
      items: [
        'features/ai-generate',
        'features/project-analysis',
        'features/visual-editor',
        'features/slash-commands',
        'features/prompt-generate',
        'features/keyboard-shortcuts',
        'features/export-import',
      ],
    },
    {
      type: 'category',
      label: 'MCP 集成',
      collapsed: false,
      items: ['mcp/overview', 'mcp/tools-reference', 'mcp/client-setup'],
    },
    {
      type: 'category',
      label: 'API 参考',
      collapsed: false,
      items: [
        'api/rest',
        'api/websocket',
        'api-reference/introduction',
        'api-reference/endpoint/get',
        'api-reference/endpoint/create',
        'api-reference/endpoint/delete',
        'api-reference/endpoint/webhook',
      ],
    },
    {
      type: 'category',
      label: '架构设计',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/frontend',
        'architecture/backend',
        'architecture/desktop',
      ],
    },
  ],
};

export default sidebars;
