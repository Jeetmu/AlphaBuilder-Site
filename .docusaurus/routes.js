import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AlphaBuilder-Site/blog',
    component: ComponentCreator('/AlphaBuilder-Site/blog', '5a5'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/archive',
    component: ComponentCreator('/AlphaBuilder-Site/blog/archive', '0d3'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/authors',
    component: ComponentCreator('/AlphaBuilder-Site/blog/authors', 'cdc'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/AlphaBuilder-Site/blog/authors/all-sebastien-lorber-articles', 'aa1'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/authors/yangshun',
    component: ComponentCreator('/AlphaBuilder-Site/blog/authors/yangshun', '5bc'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/first-blog-post',
    component: ComponentCreator('/AlphaBuilder-Site/blog/first-blog-post', '3bb'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/long-blog-post',
    component: ComponentCreator('/AlphaBuilder-Site/blog/long-blog-post', '702'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/mdx-blog-post',
    component: ComponentCreator('/AlphaBuilder-Site/blog/mdx-blog-post', '618'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/tags',
    component: ComponentCreator('/AlphaBuilder-Site/blog/tags', 'e07'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/tags/docusaurus',
    component: ComponentCreator('/AlphaBuilder-Site/blog/tags/docusaurus', '241'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/tags/facebook',
    component: ComponentCreator('/AlphaBuilder-Site/blog/tags/facebook', 'b36'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/tags/hello',
    component: ComponentCreator('/AlphaBuilder-Site/blog/tags/hello', 'c2c'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/tags/hola',
    component: ComponentCreator('/AlphaBuilder-Site/blog/tags/hola', 'ad7'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/blog/welcome',
    component: ComponentCreator('/AlphaBuilder-Site/blog/welcome', '509'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/markdown-page',
    component: ComponentCreator('/AlphaBuilder-Site/markdown-page', 'f0f'),
    exact: true
  },
  {
    path: '/AlphaBuilder-Site/docs',
    component: ComponentCreator('/AlphaBuilder-Site/docs', '832'),
    routes: [
      {
        path: '/AlphaBuilder-Site/docs',
        component: ComponentCreator('/AlphaBuilder-Site/docs', 'ae0'),
        routes: [
          {
            path: '/AlphaBuilder-Site/docs',
            component: ComponentCreator('/AlphaBuilder-Site/docs', '24b'),
            routes: [
              {
                path: '/AlphaBuilder-Site/docs/',
                component: ComponentCreator('/AlphaBuilder-Site/docs/', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AlphaBuilder-Site/docs/contact',
                component: ComponentCreator('/AlphaBuilder-Site/docs/contact', '322'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AlphaBuilder-Site/docs/optimizer-api',
                component: ComponentCreator('/AlphaBuilder-Site/docs/optimizer-api', 'c6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AlphaBuilder-Site/docs/research',
                component: ComponentCreator('/AlphaBuilder-Site/docs/research', '79f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AlphaBuilder-Site/docs/signal-library',
                component: ComponentCreator('/AlphaBuilder-Site/docs/signal-library', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AlphaBuilder-Site/docs/system',
                component: ComponentCreator('/AlphaBuilder-Site/docs/system', 'b8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
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
