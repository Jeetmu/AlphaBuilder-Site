import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/alphabuilder-site/blog',
    component: ComponentCreator('/alphabuilder-site/blog', '522'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/archive',
    component: ComponentCreator('/alphabuilder-site/blog/archive', '985'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/authors',
    component: ComponentCreator('/alphabuilder-site/blog/authors', '3e1'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/alphabuilder-site/blog/authors/all-sebastien-lorber-articles', 'b61'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/authors/yangshun',
    component: ComponentCreator('/alphabuilder-site/blog/authors/yangshun', '2c2'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/first-blog-post',
    component: ComponentCreator('/alphabuilder-site/blog/first-blog-post', '23b'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/long-blog-post',
    component: ComponentCreator('/alphabuilder-site/blog/long-blog-post', '3f0'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/mdx-blog-post',
    component: ComponentCreator('/alphabuilder-site/blog/mdx-blog-post', '203'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/tags',
    component: ComponentCreator('/alphabuilder-site/blog/tags', 'c16'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/tags/docusaurus',
    component: ComponentCreator('/alphabuilder-site/blog/tags/docusaurus', '632'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/tags/facebook',
    component: ComponentCreator('/alphabuilder-site/blog/tags/facebook', '82a'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/tags/hello',
    component: ComponentCreator('/alphabuilder-site/blog/tags/hello', '042'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/tags/hola',
    component: ComponentCreator('/alphabuilder-site/blog/tags/hola', 'fbd'),
    exact: true
  },
  {
    path: '/alphabuilder-site/blog/welcome',
    component: ComponentCreator('/alphabuilder-site/blog/welcome', '7bb'),
    exact: true
  },
  {
    path: '/alphabuilder-site/markdown-page',
    component: ComponentCreator('/alphabuilder-site/markdown-page', '565'),
    exact: true
  },
  {
    path: '/alphabuilder-site/docs',
    component: ComponentCreator('/alphabuilder-site/docs', '334'),
    routes: [
      {
        path: '/alphabuilder-site/docs',
        component: ComponentCreator('/alphabuilder-site/docs', 'a26'),
        routes: [
          {
            path: '/alphabuilder-site/docs',
            component: ComponentCreator('/alphabuilder-site/docs', '4ab'),
            routes: [
              {
                path: '/alphabuilder-site/docs/',
                component: ComponentCreator('/alphabuilder-site/docs/', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/category/tutorial---basics',
                component: ComponentCreator('/alphabuilder-site/docs/category/tutorial---basics', '717'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/category/tutorial---extras',
                component: ComponentCreator('/alphabuilder-site/docs/category/tutorial---extras', '55b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/contact',
                component: ComponentCreator('/alphabuilder-site/docs/contact', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/optimizer-api',
                component: ComponentCreator('/alphabuilder-site/docs/optimizer-api', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/signal-library',
                component: ComponentCreator('/alphabuilder-site/docs/signal-library', '6e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/system',
                component: ComponentCreator('/alphabuilder-site/docs/system', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-basics/congratulations', 'e92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-basics/create-a-blog-post', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-basics/create-a-document', '389'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-basics/create-a-page', 'd66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-basics/deploy-your-site', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-basics/markdown-features', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-extras/manage-docs-versions', '08d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/alphabuilder-site/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/alphabuilder-site/docs/tutorial-extras/translate-your-site', 'b58'),
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
    path: '/alphabuilder-site/',
    component: ComponentCreator('/alphabuilder-site/', 'e4a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
