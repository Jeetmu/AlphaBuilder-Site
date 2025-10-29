// src/pages/optimizer.jsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MarkdownTwoColumnLayout from '../.././components/MarkdownTwoColumnLayout';
import CodeBlock from '@theme/CodeBlock'; // ✅ Syntax highlighting

const toc = [
  {
    id: 'intro',
    value: 'Introduction',
    children: [
      { id: 'status', value: 'Current Status' },
      { id: 'planned', value: 'Planned Features' },
    ],
  },
  {
    id: 'usage',
    value: 'Usage',
    children: [
      { id: 'installation', value: 'Installation' },
      { id: 'quickstart', value: 'Quickstart Example' },
    ],
  },
];

export default function OptimizerPage() {
  const [activeSection, setActiveSection] = useState('intro');

  const content = {
    intro: (
      <>
        <h1 id="intro">AlphaBuilder-Optimizer</h1>
        <p>
          <strong>AlphaBuilder-Optimizer</strong> is an experimental Python package for building and
          testing optimization tools in trading and portfolio management.
        </p>
        <p>
          It provides a clean API interface and serves as a foundation for research, development, and
          integration into modular trading systems.
        </p>

        <h2 id="status">Current Status</h2>
        <p>The project is in its early stages. The current version includes:</p>
        <ul>
          <li>A <strong>FastAPI backend</strong> for portfolio optimization.</li>
          <li>An <strong>equal-weighted strategy</strong> as the initial supported method.</li>
          <li>
            A <strong>framework</strong> for extending to more optimization approaches.
          </li>
        </ul>

        <h2 id="planned">Planned Features</h2>

        <h4>Portfolio Optimization</h4>
        <ul>
          <li>Classical methods: Markowitz, Black-Litterman, convex optimization.</li>
        </ul>

        <h4>Metaheuristics</h4>
        <ul>
          <li>Genetic algorithms, simulated annealing, swarm intelligence.</li>
        </ul>

        <h4>Reinforcement Learning</h4>
        <ul>
          <li>Adaptive and regime-aware optimization approaches.</li>
        </ul>
      </>
    ),

    usage: (
      <>
        <h1 id="usage">Usage</h1>
        <p>This section describes how to install and use AlphaBuilder-Optimizer.</p>

        <h2 id="installation">Installation</h2>
        <CodeBlock language="bash">{`pip install alphabuilder-optimizer`}</CodeBlock>

        <h2 id="quickstart">Quickstart Example</h2>
        <CodeBlock language="python">{`# Import
from alphabuilder_optimizer import OptimizerClient

# Initialize client
client = OptimizerClient(api_key="YOUR_API_KEY")

# Run optimization
result = client.optimize(
    idempotency_key="ALPHABUILDER042",
    assets=["asset_A", "asset_B", "asset_C", "asset_D", "asset_E"],
    constraint="equal_weighted",
    risk_free_rate=0.05,
    expected_returns=[0.1, 0.12, 0.15, 0.23, 0.56],
    covariance=[
        [0.1, 0.02, 0.03, 0.04, 0.05],
        [0.02, 0.08, 0.01, 0.06, 0.07],
        [0.03, 0.01, 0.09, 0.02, 0.03],
        [0.04, 0.06, 0.02, 0.11, 0.08],
        [0.05, 0.07, 0.03, 0.08, 0.12]
    ]
)

print(result)  # JSON/dict with optimized portfolio weights

# Retrieve stored items
res = client.get_items()`}</CodeBlock>
      </>
    ),
  };

  return (
    <Layout title="AlphaBuilder-Optimizer">
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
