// src/pages/signal.jsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MarkdownTwoColumnLayout from '../.././components/MarkdownTwoColumnLayout';
import CodeBlock from '@theme/CodeBlock'; // ✅ Import Docusaurus syntax highlighting

const toc = [
  {
    id: 'intro',
    value: 'Introduction',
    children: [
      { id: 'features', value: 'Features' },
      { id: 'coming-soon', value: 'Coming Soon' },
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

export default function SignalPage() {
  const [activeSection, setActiveSection] = useState('intro');

  const content = {
    intro: (
      <>
        <h1 id="intro">AlphaBuilder-Signal</h1>
        <p>
          <strong>AlphaBuilder-Signal</strong> is an experimental Python package providing a curated
          library of trading signals for quantitative finance.
        </p>
        <blockquote>
          ⚠️ This package is currently in <strong>early development</strong>. More features,
          indicators, and signal types will be added soon.
        </blockquote>

        <h2 id="features">Features</h2>
        <ul>
          <li>
            <strong>Technical Indicators:</strong> RSI, MACD, ADX, %D, Bollinger Bands, Momentum, etc.
          </li>
          <li>
            <strong>Lagged Features:</strong> Previous price, returns, and indicator values for
            time-series modeling.
          </li>
          <li>
            <strong>Moving Averages:</strong> SMA, EMA, HMA, and other variants.
          </li>
          <li>
            <strong>Target Indicators:</strong> Returns, peaks, troughs (regression and classification targets).
          </li>
          <li>
            <strong>Data Fetching:</strong> Asset wrapper for seamless download from{' '}
            <code>yfinance</code>.
          </li>
        </ul>

        <h2 id="coming-soon">Coming Soon</h2>
        <ul>
          <li>Additional technical and fundamental indicators</li>
          <li>Handcrafted alpha factors and custom rule-based signals</li>
          <li>ML-based signals (tree models, RNNs, transformers)</li>
          <li>Regime-aware signals using HMMs</li>
          <li>Backtesting utilities (Sharpe ratio, hit ratio, performance metrics)</li>
          <li>Statistical arbitrage signals (Copula, Vine Copula, Correlation)</li>
          <li>News-based signals</li>
        </ul>
      </>
    ),

    usage: (
      <>
        <h1 id="usage">Usage</h1>
        <p>This section describes how to install and use AlphaBuilder-Signal.</p>

        <h2 id="installation">Installation</h2>
        <div className="custom-codeblock">
          <CodeBlock language="bash">{`pip install alphabuilder-signal`}</CodeBlock>
          </div>

        <h2 id="quickstart">Quickstart Example</h2>
        <div className="custom-codeblock">
        <CodeBlock language="python">{`from alphabuilder_signal import (
    Fetch,
    MovingAverage,
    TechnicalIndicators,
    LaggedFeatures,
    TargetClassifier,
    TargetRegressor,
)

# Fetch historical data
fetch_data = Fetch(
    tickers=["AAPL", "MSFT", "META"],
    start_date="2010-01-01",
    verbose=True
)
data = fetch_data.get_asset_data(combined=False)

# Compute technical indicators
TI = TechnicalIndicators(
    tickers=['AAPL', 'MSFT', 'META'],
    start_date='2020-01-01',
    verbose=True,
    combined=True
)
results = (
    TI.relative_strength_index(windows=[14, 7, 6], source='Close')
      .momentum(windows=[7, 8, 9, 4], source='High')
      .average_true_range(windows=[4, 7])
      .bollinger_bands(windows=[7, 8])
      .get_data()
)

print(results.head())`}</CodeBlock></div>
      </>
    ),
  };

  return (
    <Layout title="AlphaBuilder-Signal">
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
