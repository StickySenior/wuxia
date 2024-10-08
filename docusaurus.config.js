// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wuxia',
  tagline: 'TTRPG made by the genius Gnome',
  favicon: 'figures/LotusLogo.svg',

  // Set the production url of your site here
  url: 'https://StickySenior.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wuxia/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StickySenior', // Usually your GitHub org/user name.
  projectName: 'wuxia', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'figures/LandWuxiaSocialCard.png',
      navbar: {
        title: 'Wuxia',
        logo: {
          alt: 'Wuxia logo',
          src: 'figures/LotusLogo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Explore',
            href: '/docs/category/rules/'
          },
          {
            href: 'https://github.com/StickySenior/wuxia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contribute to World Building',
            items: [
              {
                label: 'How to contribute',
                to: '/docs/contribution/how_to_contribute',
              },
              {
                label: 'Naming conventions',
                to: '/docs/contribution/naming_convention',
              },
            ],
          },
          {
            title: 'Before Playing',
            items: [
              {
                label: 'Special abilities',
                href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              },
              {
                label: 'Character creation',
                href: '/docs/rules/character_creation',
              },
              {
                label: 'Rules',
                href: '/docs/category/rules/',
              },
            ],
          },
          {
            title: 'Atlas of informations',
            items: [
              {
                label: 'Bestiary',
                href: '/',
              },
              {
                label: 'Martial arts',
                href: '/docs/martial_arts',
              },
              {
                label: 'Cultivation methods',
                href: '/docs/cultivation_methods'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wuxia, by Gnome. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
