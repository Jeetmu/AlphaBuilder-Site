import {themes as prismThemes} from 'prism-react-renderer';
import { FaDiscord } from 'react-icons/fa';

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

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexDocs: false,    
        indexBlog: false,
        indexPages: true,   
        searchBarPosition: 'right',
        searchBarShortcut: false,
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      style: 'dark',
      logo: {
        alt: 'AlphaBuilder Logo',
        src: '/img/Logo_4.png',
      },
       items: [
        { to: '/optimizer', label: 'Optimizer', position: 'left', className: 'center-navbar' },
        { to: '/signals', label: 'Signals', position: 'left', className: 'center-navbar' },
        { to: '/risk', label: 'Risk', position: 'left', className: 'center-navbar' },
        { to: '/hub', label: 'Hub', position: 'left', className: 'center-navbar' },
        { to: '/system', label: 'System', position: 'left', className: 'center-navbar' },
        { to: '/server', label: 'Server', position: 'left', className: 'center-navbar' },
        { to: '/vega', label: 'Vega', position: 'left', className: 'center-navbar' },
        { to: '/research', label: 'Research', position: 'left', className: 'center-navbar' },
        { to: '/blog', label: 'Blogs', position: 'left', className: 'center-navbar' },
        { to: '/about', label: 'About', position: 'left', className: 'center-navbar' },
        { to: '/contact', label: 'Contact', position: 'left', className: 'center-navbar' },
        { href: 'https://discord.gg/En3dMhcuyC', label: 'Discord', position: 'left',className: 'navbar-discord',target: '_blank'},
        { type: 'search', position: 'right' },
     ],
    },
    colorMode: {
    defaultMode: 'dark',
    disableSwitch: true,  
  },
  },
};

export default config;
