// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kollection',
  tagline: 'The Digital Asset Marketplace on Koinos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.kollection.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kollection', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

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
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/kollection_open_graph_image.png',
      navbar: {
        title: 'Kollection',
        logo: {
          alt: 'Kollection Logo',
          src: 'img/KollectionLime.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'developerSidebar',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'userSidebar',
            position: 'left',
            label: 'Learn about Kollection',
          },
          {
            href: 'https://github.com/kollection-nft',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Kollection',
            href: 'https://kollection.app',
            position: 'right',
          },
        ]
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Developers',
                to: '/docs/developers/intro',
              },
              {
                label: 'Learn about Kollection',
                to: '/docs/learn/howtouse',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.kollection.app',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kollectionmkt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Listing Form',
                href: 'https://forms.gle/Emx568Z1GMjPwC2Q8',
              },
              {
                label: 'Kollection',
                href: 'https://kollection.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kollection-nft',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kollection Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
