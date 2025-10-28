// src/pages/about.jsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MarkdownTwoColumnLayout from '../components/MarkdownTwoColumnLayout';

const toc = [
  {
    id: 'overview',
    value: 'Overview',
    children: [
      { id: 'modules', value: 'Modules' },
      { id: 'goals', value: 'Goals' },
    ],
  },
  {
    id: 'docs',
    value: 'Docs',
    children: [
      { id: 'installation', value: 'Installation' },
      { id: 'Relative Strength Index', value: 'Relative Strength Index' },
    ],
  },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const content = {
    overview: (
      <>
        <h1 id="overview">Overview</h1>
        <p>
          AlphaBuilder is a modular trading and research framework integrating signal, risk,
          and optimization modules.
        </p>

        <h2 id="modules">Modules</h2>
        <ul>
          <li>AlphaBuilder-Signal</li>
          <li>AlphaBuilder-Risk</li>
          <li>AlphaBuilder-Vega</li>
          <li>AlphaBuilder-Optimizer</li>
        </ul>

        <h2 id="goals">Goals</h2>
        <p>
          The framework unifies classical, heuristic, and quantum optimization for portfolio
          management and derivative pricing.
        </p>
      </>
    ),
    docs: (
      <>
        <h1 id="docs">Docs</h1>
        <p>This section describes how to use and configure AlphaBuilder.</p>

        <h2 id="installation">Installation</h2>
        <pre>
          <code>npm install alphabuilder-system</code>
        </pre>

        <h2 id="usage">Usage</h2>
        <pre>
          <code>{`import { AlphaBuilderSignal } from 'alphabuilder-system';`}</code>
        </pre>
      </>
    ),
  };

  return (
    <Layout title="About AlphaBuilder">
      <MarkdownTwoColumnLayout
        toc={toc}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      >
        {content[activeSection]}
      </MarkdownTwoColumnLayout>
    </Layout>
  );
}
