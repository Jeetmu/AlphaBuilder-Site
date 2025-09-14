import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AlphaBuilder',
  tagline: 'Quant Research Project',
  favicon: 'img/favicon_1.png',

  future: {
    v4: true, 
  },

  url: 'https://alphabuilder.xyz',
  baseUrl: '/',

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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      style: 'dark',
      logo: {
        alt: 'AlphaBuilder Logo',
        src: 'img/Logo_4.png',
      },
       items: [
        { to: '/optimizer', label: 'Optimizer', position: 'left', className: 'center-navbar' },
        { to: '/signals', label: 'Signals', position: 'left', className: 'center-navbar' },
        { to: '/system', label: 'System', position: 'left', className: 'center-navbar' },
        { to: '/research', label: 'Research', position: 'left', className: 'center-navbar' },
        { to: '/contact', label: 'Contact', position: 'left', className: 'center-navbar' },
     ],
    },
    colorMode: {
    defaultMode: 'dark',
    disableSwitch: true,  
  },
  },
};

export default config;
