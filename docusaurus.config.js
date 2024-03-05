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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'announcement',
        routeBasePath: 'announcement',
        path: './announcement',
      },
    ],
    require.resolve('docusaurus-lunr-search'),
  ],


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
            'https://github.com/pkaig/Rotorflight-Docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pkaig/Rotorflight-Docs/tree/main',
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
      announcementBar: {
        id: 'support_us',
        content:
          'ROTORFLIGHT 2 Release Candidate 1 is now available. See Announcements to download',
        backgroundColor: '#FF01D9',
        textColor: '#000000',
        isCloseable: false,
      },

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
          { to: '/announcement', label: 'Announcements', position: 'left' },
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
            to: '/docs/Tuning/Tuning-description',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developSidebar',
            position: 'left',
            label: 'Contributing',
            to: '/docs/Contributing/intro',
          }, { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/rotorflight',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          src: 'img/Rotorflight_outline.png',
          width: 90,
          height: 50,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Setup',
                to: '/docs/Tutorial-Setup/Status',
              },
              {
                label: 'Manufacturers',
                to: '/docs/Manufacturers/intro',
              },
              {
                label: 'Tuning',
                to: '/docs/Tuning/Tuning-description',
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
              {
                label: 'RC Groups',
                href: 'https://www.rcgroups.com/forums/showthread.php?4000345-Rotorflight-Flight-Control-%28FBL%29-Software-Official-discussion',
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
                label: 'Announcements',
                to: '/announcement',
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

