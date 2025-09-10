import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b68'),
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
