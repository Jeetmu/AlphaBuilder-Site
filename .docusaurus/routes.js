import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', '954'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '61e'),
    exact: true
  },
  {
    path: '/changelog',
    component: ComponentCreator('/changelog', 'fda'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b68'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '669'),
    exact: true
  },
  {
    path: '/optimizer',
    component: ComponentCreator('/optimizer', '47c'),
    exact: true
  },
  {
    path: '/research',
    component: ComponentCreator('/research', '83c'),
    exact: true
  },
  {
    path: '/risk',
    component: ComponentCreator('/risk', '8c0'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/signals',
    component: ComponentCreator('/signals', '93c'),
    exact: true
  },
  {
    path: '/system',
    component: ComponentCreator('/system', '1a9'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
