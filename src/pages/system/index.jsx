// src/pages/frameworks.jsx
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import MarkdownTwoColumnLayout from '../../components/MarkdownTwoColumnLayout';

const toc = [
  { id: 'signal', value: 'Signal-Lab',
    children: [
      { id: 'signal-types', value: 'Signal Types' },
    ],
  },
  { id: 'risk', value: 'Risk-Engine',
    children: [
      { id: 'risk-metrics-frameworks', value: 'Risk Metrics & Frameworks' },
    ],
   },
  { id: 'optimizer', value: 'Optimizer',
    children: [
      { id: 'optimization-methods', value: 'Optimization Methods' },
    ],
   },
  { id: 'vega', value: 'Vega-Studio',
    children: [
      { id: 'core-components', value: 'Core Components' },
    ],
   },
  { id: 'hub', value: 'Model-Hub',
    children: [
      { id: 'model-categories', value: 'Model Categories' },
    ],
   },
  { id: 'system', value: 'Alpha-System',
    children: [
      { id: 'core-functional-layers', value: 'Core Functional Layers' },
    ],
   },
];


export default function FrameworksPage() {
  const [activeSection, setActiveSection] = useState('signal');

  const content = {
    signal: (
      <>
        <h1 id="signal">Signal</h1>
        <p>
          <strong>AlphaBuilder-Signal</strong> is the predictive intelligence layer of the
          framework. It extracts, engineers, and evaluates multi-regime alpha signals from
          time-series, cross-sectional, and event-driven data. The module integrates both
          econometric and deep learning paradigms to generate robust, interpretable,
          and regime-aware features for downstream risk and optimization engines.
        </p>

        <h2 id="signal-types">Signal Types</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Signal Type</th>
              <th>Description / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Price / Return Features</td><td>Raw prices, log returns, percentage returns, high/low/close differences</td></tr>
            <tr><td>2</td><td>Moving Averages</td><td>SMA, EMA, WMA, Hull MA across multiple horizons</td></tr>
            <tr><td>3</td><td>Technical Indicators</td><td>RSI, MACD, Bollinger Bands, ATR, ADX, Stochastic Oscillator</td></tr>
            <tr><td>4</td><td>Fundamental Indicators</td><td>P/E, P/B, dividend yield, earnings surprises (if available)</td></tr>
            <tr><td>5</td><td>Formulaic Alphas</td><td>Top 101 classic alphas (momentum, volume-based, reversals)</td></tr>
            <tr><td>6</td><td>Regime-Aware Signals</td><td>HMM / SMM / SSM states, probabilities, and conditional features</td></tr>
            <tr><td>7</td><td>Volatility / GARCH Signals</td><td>Predicted conditional variance or volatility from GARCH family models</td></tr>
            <tr><td>8</td><td>Statistical / Arbitrage Signals</td><td>Z-score, cointegration, mean-reversion, pair-trading indicators</td></tr>
            <tr><td>9</td><td>Network-Aware Signals</td><td>Correlation-based signals, eigenvector centrality, cross-asset influence</td></tr>
            <tr><td>10</td><td>Entropy-Based Signals</td><td>Entropy metrics capturing uncertainty or structural complexity</td></tr>
            <tr><td>11</td><td>Fractal-Based Signals</td><td>Hurst exponent, multifractal spectrum, long-memory indicators</td></tr>
            <tr><td>12</td><td>Event / Sentiment Signals</td><td>News or social sentiment, event-driven features, earnings flags</td></tr>
            <tr><td>13</td><td>Multi-Resolution Signals</td><td>Wavelet decomposition, scale-specific trend/volatility features</td></tr>
            <tr><td>14</td><td>Regime-Weighted Features</td><td>Combined volatility, entropy, and regime-weighted signals</td></tr>
            <tr><td>15</td><td>Derived / Meta Signals</td><td>Feature-engineered combinations (e.g., volatility-adjusted momentum)</td></tr>
          </tbody>
        </table>
      </>
    ),

    risk: (
      <>
        <h1 id="risk">Risk</h1>
        <p>
          <strong>AlphaBuilder-Risk</strong> is the dynamic risk management engine that
          quantifies and adapts to changing market conditions using econometric, Bayesian,
          and reinforcement learning techniques. It integrates volatility modeling,
          distribution-based metrics, and network-aware systemic risk detection.
        </p>

        <h2 id = 'risk-metrics-frameworks'>Risk Metrics & Frameworks</h2>
        <table>
          <thead>
            <tr>
              <th>#</th><th>Risk Type</th><th>Description / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Basic Statistical Risk</td><td>Variance, std. deviation, covariance, correlation, Beta</td></tr>
            <tr><td>2</td><td>Distribution-Based Risk</td><td>VaR, CVaR, Expected Shortfall, Drawdown metrics</td></tr>
            <tr><td>3</td><td>Volatility Modeling</td><td>GARCH, EGARCH, ARCH-M forecasts</td></tr>
            <tr><td>4</td><td>Multi-Asset Volatility</td><td>DCC-GARCH, Copula-based joint risk models</td></tr>
            <tr><td>5</td><td>Regime-Aware Risk</td><td>HMM/SMM/SSM applied to volatility or drawdown forecasts</td></tr>
            <tr><td>6</td><td>Scenario & Stress Testing</td><td>Equity crash, volatility spike, rate or FX shock simulations</td></tr>
            <tr><td>7</td><td>Correlation & Network Risk</td><td>Eigenvalue risk, clustering, systemic contagion measures</td></tr>
            <tr><td>8</td><td>Signal-to-Risk Mapping</td><td>Evaluate signal-level contribution to portfolio risk</td></tr>
            <tr><td>9</td><td>Bayesian Risk</td><td>Posterior uncertainty, predictive intervals</td></tr>
            <tr><td>10</td><td>Entropy-Based Risk</td><td>Diversification / concentration quantification</td></tr>
            <tr><td>11</td><td>RL-Based Dynamic Control</td><td>Agents trained for drawdown minimization</td></tr>
            <tr><td>12</td><td>Factor / Exposure Constraints</td><td>Sector, leverage, or factor-specific limits</td></tr>
            <tr><td>13</td><td>Tail / Extreme Event Risk</td><td>EVT, tail expectations, fat-tail metrics</td></tr>
            <tr><td>14</td><td>Rolling / Multi-Horizon Risk</td><td>Temporal risk tracking</td></tr>
            <tr><td>15</td><td>Hybrid Risk Signals</td><td>Composite metrics combining volatility, entropy, and correlation</td></tr>
          </tbody>
        </table>
      </>
    ),

    optimizer: (
      <>
        <h1 id="optimizer">Optimizer</h1>
        <p>
          <strong>AlphaBuilder-Optimizer</strong> is the allocation and calibration core,
          designed to bridge classical optimization theory, heuristic search, reinforcement learning,
          and quantum-inspired methods for robust portfolio construction.
        </p>

        <h2 id= 'optimization-methods'>Optimization Methods</h2>
        <table>
          <thead>
            <tr><th>#</th><th>Module / Method</th><th>Description / Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Classical Portfolio Optimization</td><td>Markowitz mean-variance, min-var, Sharpe max</td></tr>
            <tr><td>2</td><td>Risk-Adjusted Optimization</td><td>Integrate VaR, CVaR, drawdown metrics from Risk module</td></tr>
            <tr><td>3</td><td>Factor / Exposure Constraints</td><td>Sector caps, leverage limits, factor tilts</td></tr>
            <tr><td>4</td><td>Heuristic Optimization</td><td>GA, PSO, SA, Tabu for non-linear constrained problems</td></tr>
            <tr><td>5</td><td>Multi-Objective Optimization</td><td>Pareto optimization for Sharpe vs drawdown trade-offs</td></tr>
            <tr><td>6</td><td>Regime-Aware Optimization</td><td>Dynamic weights using regime probabilities</td></tr>
            <tr><td>7</td><td>RL-Based Optimization</td><td>PPO/SAC/DDPG agents for adaptive allocation</td></tr>
            <tr><td>9</td><td>Stress-Aware Optimization</td><td>Scenario reallocation under shocks</td></tr>
            <tr><td>10</td><td>Meta-Learning Optimization</td><td>Cross-asset adaptation via priors</td></tr>
            <tr><td>11</td><td>Multi-Horizon Optimization</td><td>Short vs long-term simultaneous allocation</td></tr>
            <tr><td>12</td><td>Hybrid / Ensemble Optimization</td><td>Stacked models combining methods</td></tr>
            <tr><td>13</td><td>Entropy / Diversification-Based</td><td>Favor diversified portfolios via entropy terms</td></tr>
            <tr><td>14</td><td>Derived / Composite Objectives</td><td>Custom risk-return-liquidity formulations</td></tr>
          </tbody>
        </table>
      </>
    ),

    vega: (
      <>
        <h1 id="vega">Vega</h1>
        <p>
          <strong>AlphaBuilder-Vega</strong> is the volatility intelligence and derivative
          pricing layer of the AlphaBuilder ecosystem. It bridges theoretical and
          data-driven volatility modeling — spanning classical stochastic volatility,
          regime-switching dynamics, Gaussian process inference, and deep neural
          volatility surfaces. Vega serves as the research backbone for implied
          volatility estimation, volatility surface construction, and regime-aware
          derivative pricing.
        </p>

        <h2 id="vega-components">Core Volatility Frameworks</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Component</th>
              <th>Description / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Volatility Foundations</td>
              <td>Statistical definitions, realized & implied volatility, and microstructure considerations</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Stochastic Volatility Models</td>
              <td>Heston, SABR, Bates, and fractional volatility formulations</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Regime-Switching Volatility</td>
              <td>Markov-modulated volatility & hidden state inference for regime transitions</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Volatility Surface Construction</td>
              <td>Smile & skew modeling using spline, SVI, or arbitrage-free constraints</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Gaussian Process Implied Volatility</td>
              <td>Non-parametric IV estimation via GP regression and kernel selection</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Deep Volatility Models</td>
              <td>Neural SDEs, LSTMs, and transformers trained on volatility series</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Regime-Aware Pricing</td>
              <td>Derivative valuation under regime-dependent volatility and drift parameters</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Calibration Engine</td>
              <td>Optimization of model parameters using MLE, Bayesian, or meta-heuristic methods</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Volatility Risk Premium</td>
              <td>Estimation of expected vs implied volatility differentials across assets</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Vega-Risk & Sensitivity</td>
              <td>Greek sensitivities (Vega, Vomma, Vanna) and volatility-shock risk attribution</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Volatility Forecasting Layer</td>
              <td>Short- and long-horizon volatility forecasting pipelines with ensemble blending</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Hybrid / Meta Volatility Models</td>
              <td>Combining stochastic, deep, and GP models into adaptive hybrid frameworks</td>
            </tr>
          </tbody>
        </table>
      </>
    ),

    hub: (
      <>
        <h1 id="hub">Model-Hub</h1>
        <p>
          <strong>AlphaBuilder-Hub</strong> acts as the model repository and orchestration layer,
          hosting trained models on Hugging Face and providing APIs for distributed inference,
          versioning, and multi-horizon forecasting pipelines.
        </p>

        <h2 id= 'model-categories'>Model Categories</h2>
        <table>
          <thead><tr><th>Category</th><th>Example Models</th><th>Purpose / Notes</th></tr></thead>
          <tbody>
            <tr><td>Encoder–Decoder</td><td>LSTM, BiLSTM, GRU-Seq2Seq</td><td>Sequential dependency modeling</td></tr>
            <tr><td>Transformer Variants</td><td>Transformer, Informer, Autoformer, PatchTST</td><td>Attention-based multi-horizon forecasting</td></tr>
            <tr><td>GAN / Generative Models</td><td>TimeGAN, ForGAN, RegGAN</td><td>Scenario generation, data augmentation</td></tr>
            <tr><td>Integrated RNN Modules</td><td>LSTM, ConvLSTM, GRU</td><td>Trend and momentum modeling</td></tr>
            <tr><td>Cascade Models</td><td>N-BEATS, FCPM, DeepTCN</td><td>Multi-scale hierarchical decomposition</td></tr>
            <tr><td>Tree / Ensemble Models</td><td>XGBoost, LightGBM, CatBoost</td><td>Feature-driven, interpretable forecasting</td></tr>
            <tr><td>RL Forecasting</td><td>PPO, SAC, DDPG</td><td>Adaptive regime-aware forecast control</td></tr>
          </tbody>
        </table>
      </>
    ),

    system: (
      <>
        <h1 id="system">System</h1>
        <p>
          <strong>AlphaBuilder-System</strong> is the integrative execution framework that
          connects all modules — Signal, Risk, Vega, Optimizer, and Hub — into a unified
          end-to-end research and trading workflow.
        </p>

        <h2 id='core-functional-layers'>Core Functional Layers</h2>
        <ul>
          <li><strong>Pipeline Orchestration:</strong> Automates flow from Signal → Risk → Vega → Optimizer.</li>
          <li><strong>Backtesting Engine:</strong> Evaluate strategies under historical and simulated regimes.</li>
          <li><strong>Live Execution Layer:</strong> Real-time signal ingestion, portfolio updates, and risk monitoring.</li>
          <li><strong>Experiment Management:</strong> Run, compare, and track multiple experiments reproducibly.</li>
          <li><strong>Visualization Layer:</strong> Interactive dashboards for regime maps, allocations, and performance.</li>
          <li><strong>Integration Layer:</strong> API endpoints for Python, R, and web-based research clients.</li>
          <li><strong>Learning Loop:</strong> Continuous retraining and re-optimization based on feedback from Hub models.</li>
        </ul>

        <p>
          This system represents the <strong>operational core of AlphaBuilder</strong> —
          a continuously learning environment for adaptive quantitative research and
          real-world portfolio experimentation.
        </p>
      </>
    ),
  };

  return (
    <Layout title="AlphaBuilder Frameworks">
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
