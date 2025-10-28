import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', 'bfe'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '61e'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b68'),
    exact: true
  },
  {
    path: '/discord',
    component: ComponentCreator('/discord', 'c6f'),
    exact: true
  },
  {
    path: '/hub',
    component: ComponentCreator('/hub', '96e'),
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
    path: '/status',
    component: ComponentCreator('/status', '5b5'),
    exact: true
  },
  {
    path: '/system',
    component: ComponentCreator('/system', '1a9'),
    exact: true
  },
  {
    path: '/vega',
    component: ComponentCreator('/vega', '75d'),
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
