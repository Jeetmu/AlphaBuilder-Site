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
        docs: false,
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
    navbar: {
      style: 'dark',
      title: 'AlphaBuilder',
      logo: {
        alt: 'AlphaBuilder Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/optimizer', label: 'Optimizer', position: 'left' },
        { to: '/signals', label: 'Signals', position: 'left' },
        { to: '/system', label: 'System', position: 'left' },
        { to: '/research', label: 'Research', position: 'left'},
        { to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/Jeetmu/AlphaBuilder-Site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
