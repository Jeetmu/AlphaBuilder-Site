import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AlphaBuilder',
  tagline: 'Quant Research Project',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://alphabuilder.github.io',
  baseUrl: '/AlphaBuilder-Site/',

  organizationName: 'Jeetmu',
  projectName: 'AlphaBuilder-Site',
  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages', 

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/AlphaBuilder/AlphaBuilder-Site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/AlphaBuilder/AlphaBuilder-Site/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/alphabuilder-social-card.jpg',
    navbar: {
      title: 'AlphaBuilder',
      logo: {
        alt: 'AlphaBuilder Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AlphaBuilder/AlphaBuilder-Site',
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
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Optimizer API', to: '/docs/optimizer'},
            {label: 'Signal Library', to: '/docs/signals'},
            {label: 'System', to: '/docs/system'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/'},
            {label: 'Discord', href: 'https://discord.gg/'},
            {label: 'X (Twitter)', href: 'https://x.com/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/AlphaBuilder/AlphaBuilder-Site'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AlphaBuilder Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
