import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repository = process.env.GITHUB_REPOSITORY || 'znc15/FlowVision-Docs';
const [organizationName, projectName] = repository.split('/');
const isUserSite = projectName.endsWith('.github.io');
const baseUrl = process.env.DOCS_BASE_URL || (isUserSite ? '/' : `/${projectName}/`);

const config: Config = {
  title: 'FlowVision 文档',
  tagline: 'AI 驱动的流程图设计工具文档中心',
  favicon: 'logo/logo_128.png',
  future: {
    v4: true,
  },
  url: process.env.DOCS_SITE_URL || 'https://znc15.github.io',
  baseUrl,
  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'warn',
  staticDirectories: ['images', 'logo'],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/znc15/FlowVision-Docs/tree/main/',
          exclude: [
            'README.md',
            'AGENTS.md',
            'CONTRIBUTING.md',
            'LICENSE',
            'docs.json',
            '.mintignore',
            'node_modules/**',
            '.docusaurus/**',
            'build/**',
            'src/**',
            'logo/**',
            'images/**',
            'snippets/**',
            '.github/**',
            '.claude/**',
            '.official-template/**',
          ],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'logo/logo_512.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FlowVision',
      logo: {
        alt: 'FlowVision Logo',
        src: 'logo/logo_256.png',
      },
      items: [
        {to: '/', label: '文档', position: 'left'},
        {to: '/features/ai-generate', label: '功能指南', position: 'left'},
        {to: '/mcp/overview', label: 'MCP 集成', position: 'left'},
        {to: '/api-reference/introduction', label: 'API 参考', position: 'left'},
        {to: '/architecture/overview', label: '架构设计', position: 'left'},
        {href: 'https://znc15.github.io/FlowVision', label: '官网', position: 'right'},
        {href: 'https://github.com/znc15/FlowVision', label: 'GitHub', position: 'right'},
        {
          href: 'https://github.com/znc15/FlowVision/releases/latest',
          label: '下载',
          position: 'right',
          className: 'navbar-download-link',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '文档',
          items: [
            {label: '快速开始', to: '/quickstart'},
            {label: '开发说明', to: '/development'},
            {label: '配置指南', to: '/configuration'},
          ],
        },
        {
          title: '产品',
          items: [
            {label: '功能指南', to: '/features/ai-generate'},
            {label: 'MCP 集成', to: '/mcp/overview'},
            {label: 'API 参考', to: '/api-reference/introduction'},
          ],
        },
        {
          title: '链接',
          items: [
            {label: '主仓库', href: 'https://github.com/znc15/FlowVision'},
            {label: '文档仓库', href: 'https://github.com/znc15/FlowVision-Docs'},
            {label: '发布页', href: 'https://znc15.github.io/FlowVision-Docs/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FlowVision. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
