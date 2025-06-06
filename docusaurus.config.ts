import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Центр знаний по Android-разработке',
  tagline: 'Документация. Статьи. Курсы. Всё по-русски.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.devcolibri.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'docs-devcolibri', // Usually your GitHub org/user name.
  projectName: 'devcolibri', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebarsGuides.ts'),
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'studio',
        path: 'studio',
        routeBasePath: 'studio',
        sidebarPath: require.resolve('./sidebarsStudio.ts'),
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kotlin',
        path: 'kotlin',
        routeBasePath: 'kotlin',
        sidebarPath: undefined
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'java',
        path: 'java',
        routeBasePath: 'java',
        sidebarPath: undefined
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resource',
        path: 'resource',
        routeBasePath: 'resource',
        sidebarPath: undefined
      } satisfies DocsOptions,
    ],

  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'devcolibri-dev-warning9', // любой уникальный ID
      content:
        '🚧 Этот сайт находится в активной разработке. Содержимое может меняться.',
      // backgroundColor: '#1a1a1a', // тёмный фон
      // textColor: '#ffffff',       // белый текст
      isCloseable: true,         
    },
    navbar: {
      // title: 'Девколибри',
      hideOnScroll: true,
      logo: {
        alt: 'логотип Девколибри',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Android',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              label: 'Туториал',
            },
            {
              type: 'docSidebar',
              sidebarId: 'guidesSidebar',
              label: 'Гайды',
              docsPluginId: 'guides',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Kotlin',
          docsPluginId: 'kotlin',
        },
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Java',
          docsPluginId: 'java',
        },
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Ресурсы',
          docsPluginId: 'resource',
        },
        { to: '/blog', label: 'Блог', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'studioSidebar',
          position: 'right',
          label: 'Android-studio',
          docsPluginId: 'studio',
        },
        {
          href: 'https://github.com/docs-devcolibri/devcolibri',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    algolia: {
      appId: 'IU650EK269',
      apiKey: '858b38b8ae12ef9ece3f0219685361d2',
      indexName: 'devcolibri',
      contextualSearch: true,
      insights: true,
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Соц. сети',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/android_sumin',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@devcolibri',
            },
            {
              label: 'Курсы',
              href: 'https://stepik.org/users/Android',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Devcolibri. Все права защищены.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
