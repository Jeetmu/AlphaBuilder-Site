// src/pages/about.jsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MarkdownTwoColumnLayout from '../../.././components/MarkdownTwoColumnLayout';

const toc = [
  {
    id: 'overview',
    value: 'Overview',
    children: [
      { id: 'modules', value: 'Modules' },
      { id: 'architecture', value: 'System Architecture' },
      { id: 'goals', value: 'Goals & Philosophy' },
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
          <strong>AlphaBuilder</strong> is a modular quantitative research and trading
          framework that unifies signal generation, risk modeling, derivative pricing, and
          portfolio optimization. It is designed for adaptive, regime-aware financial systems,
          capable of integrating <em>classical econometrics</em>, <em>deep learning</em>,
          <em>reinforcement learning</em>, and <em>quantum-inspired optimization</em> within a
          single research pipeline.
        </p>

        <h2 id="modules">Modules</h2>
        <ul>
          <li>
            <strong>AlphaBuilder-Signal</strong> — Extracts predictive features from time
            series and cross-sectional data using Deep Time Series Forecasting (DTSF),
            Hidden/Markov Models, and Transformer-based architectures for regime detection
            and market sentiment.
          </li>
          <li>
            <strong>AlphaBuilder-Risk</strong> — Implements dynamic risk estimation under
            regime shifts, combining econometric volatility forecasting, Hidden Markov Models
            (HMM), and Bayesian methods to quantify uncertainty across asset classes.
          </li>
          <li>
            <strong>AlphaBuilder-Vega</strong> — Focuses on derivative pricing under
            stochastic and regime-modulated volatility, connecting directly to your dissertation:
            <em>“Pricing with Markov-Modulated Stochastic Volatility.”</em>
          </li>
          <li>
            <strong>AlphaBuilder-Optimizer</strong> — Provides classical (Markowitz,
            Black-Litterman), heuristic (Genetic, PSO, Simulated Annealing), and quantum
            optimization (QUBO-based and QAOA) backends for portfolio allocation and
            model calibration.
          </li>
        </ul>

        <h2 id="architecture">System Architecture</h2>
        <p>
          The system follows a <strong>modular two-tier architecture</strong>:
        </p>
        <ol>
          <li>
            <strong>AlphaBuilder-Hub</strong> — Hosts and manages pre-trained models on
            <em>Hugging Face</em>, serving as the model registry for signals, volatility surfaces,
            and forecasting modules.
          </li>
          <li>
            <strong>AlphaBuilder-System</strong> — The orchestrator layer that connects
            <code>Signal → Risk → Vega → Optimizer</code> into a continuous pipeline for
            backtesting, live trading, and research.
          </li>
        </ol>
        <p>
          Each component communicates via standardized APIs, ensuring interoperability across
          different computational paradigms — classical, stochastic, heuristic, and quantum.
        </p>

        <h2 id="goals">Goals & Philosophy</h2>
        <p>
          AlphaBuilder embodies the principle of <strong>adaptive decision intelligence</strong> —
          the ability to learn, forecast, and optimize financial systems dynamically across
          regimes. It is both a research platform and a practical execution engine, designed
          to bridge the gap between academic models and live financial applications.
        </p>
        <p>
          The long-term objective is to enable fully autonomous, explainable, and regime-aware
          portfolio management systems that can adapt to structural market transitions, similar
          to how macroeconomic states evolve under hidden Markov dynamics.
        </p>
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
