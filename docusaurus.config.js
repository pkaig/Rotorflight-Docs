// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rotorflight',
  tagline: 'Open-source Helicopter flight controller',
  favicon: 'img/rffavicon.ico',

  url: 'https://github.com/', // Your website URL
  baseUrl: '/',
  projectName: 'pkaig.github.io',
  organizationName: 'pkaig',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rotorflight',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Rotorflight_outline.svg',
          srcDark: 'img/Rotorflight_outline_dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'manufactSidebar',
            position: 'left',
            label: 'Manufacturers',
            to: '/docs/Manufacturers/intro',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tuningSidebar',
            position: 'left',
            label: 'Tuning',
            to: '/docs/Tuning/intro',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developSidebar',
            position: 'left',
            label: 'Developers',
            to: '/docs/Developers/intro',
          },          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rotorflight',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Manufacturers',
                to: '/docs/Manufacturers/intro',
              },
              {
                label: 'Tuning',
                to: '/docs/Tuning/intro',
              },
              {
                label: 'Developers',
                to: '/docs/Developers/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6QUySXdEvd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Video Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rotorflight',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Team Rotorflight. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
