import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="AlphaBuilder"
      description="A modular research framework for signal, risk, and portfolio optimization."
    >
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <h1 className={styles.title}>AlphaBuilder</h1>
          <p className={styles.subtitle}>
            AlphaBuilder is a modular research framework designed for the exploration of financial intelligence through regime-aware modeling. 
              It unifies signal generation, risk assessment, and portfolio optimization into an adaptive ecosystem that evolves with market dynamics. 
              The framework emphasizes experimentation — allowing models to be tested, compared, and refined under changing volatility and correlation regimes. 
              Each component, from predictive signal extraction to non-convex optimization, is built for interpretability, reproducibility, and research transparency. 
              AlphaBuilder ultimately aims to serve as a continuously learning system for modern quantitative finance — bridging data, theory, and execution.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.button} to="/research">
              Research
            </Link>
            <Link className={styles.button} to="/contact">
              Contact
            </Link>
          </div>
        </section>

        {/* MODULE OVERVIEW */}
        <section className={styles.modules}>
          <h2>Core Research Modules</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>AlphaBuilder-Signal</h3>
              <p>
                Extracts predictive structure from time-series data using HMMs, SSMs, and Transformer architectures for
                regime detection, volatility tracking, and alpha generation.
              </p>
            </div>

            <div className={styles.card}>
              <h3>AlphaBuilder-Risk</h3>
              <p>
                Models market uncertainty with regime-conditional volatility, drawdown, and VaR estimation. Supports
                stress-testing and dynamic tail-risk assessment.
              </p>
            </div>

            <div className={styles.card}>
              <h3>AlphaBuilder-Optimizer</h3>
              <p>
                Adaptive portfolio optimization under dynamic, non-convex, and multi-objective settings using
                metaheuristic and hybrid optimization algorithms.
              </p>
            </div>

            <div className={styles.card}>
              <h3>AlphaBuilder-Vega</h3>
              <p>
                Research on Markov-Modulated Stochastic Volatility and Gaussian Process IV models for regime-sensitive
                derivative pricing and volatility surface modeling.
              </p>
            </div>

            <div className={styles.card}>
              <h3>AlphaBuilder-Hub</h3>
              <p>
                Central model registry and intelligence layer hosted on Hugging Face. Enables versioned sharing of
                time-series forecasting and optimization models.
              </p>
            </div>

            <div className={styles.card}>
              <h3>AlphaBuilder-System</h3>
              <p>
                The orchestration layer that integrates Signal, Risk, Vega, and Optimizer — managing data flow, model
                routing, and system-wide experiment tracking.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
