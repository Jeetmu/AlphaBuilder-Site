// src/pages/risk.jsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MarkdownTwoColumnLayout from '../../components/MarkdownTwoColumnLayout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import AlphaBuilderAPITester from '../../components/AlphaBuilderAPITester';

const toc = [
  {
    id: 'usage',
    value: 'Usage',
    children: [
      { id: 'alphabuilderapitest', value: 'AlphaBuilder API Test' },
    ],
  },
];

export default function RiskPage() {
  const [activeSection, setActiveSection] = useState('usage');

  const defaultJson = `{
    "idempotency_key": "RISKTEST001",
    "portfolio": ["asset_A", "asset_B", "asset_C", "asset_D", "asset_E"],
    "expected_returns": [0.1, 0.12, 0.15, 0.23, 0.56],
    "covariance": [
      [0.1, 0.02, 0.03, 0.04, 0.05],
      [0.02, 0.08, 0.01, 0.06, 0.07],
      [0.03, 0.01, 0.09, 0.02, 0.03],
      [0.04, 0.06, 0.02, 0.11, 0.08],
      [0.05, 0.07, 0.03, 0.08, 0.09]
    ],
    "risk_free_rate": 0.02,
    "methods": [
      "historical_var",
      "monte_carlo",
      "parametric_var",
      "cvar",
      "evt",
      "regime_switching",
      "state_space_model"
    ],
    "confidence_level": 0.95,
    "simulation_steps": 10000
  }`;

  const content = {
    usage: (
      <div id="usage">
        <h1>AlphaBuilder-Risk: Distributional Risk Test</h1>

        <BrowserOnly>
          {() => (
            <AlphaBuilderAPITester
              storageKeyPrefix="risk"
              basePath="/risk"
              endpoint="/distribution"
              defaultJson={defaultJson}
              rowarea={24}
            />
          )}
        </BrowserOnly>
      </div>
    ),
  };

  return (
    <Layout title="AlphaBuilder-Risk API Test">
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
