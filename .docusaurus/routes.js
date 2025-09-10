import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AlphaBuilder-Site/contact',
    component: ComponentCreator('/AlphaBuilder-Site/contact', '22c'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/optimizer',
    component: ComponentCreator('/AlphaBuilder-Site/optimizer', '0a0'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/research',
    component: ComponentCreator('/AlphaBuilder-Site/research', 'd3e'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/signals',
    component: ComponentCreator('/AlphaBuilder-Site/signals', '2dc'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/system',
    component: ComponentCreator('/AlphaBuilder-Site/system', '869'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/',
    component: ComponentCreator('/AlphaBuilder-Site/', 'b4d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
