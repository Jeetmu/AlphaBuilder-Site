import React, { useState } from "react";
import "./Research.css";

export default function ResearchPapers() {
  const papers = [
    {
      title: "Regime-Switching Derivative Pricing",
      subtitle: "Measure-Theoretic & Markov-Modulated Volatility",
      summary:
        "A mathematical treatment of regime-switching models in derivative pricing using measure theory, stochastic calculus, and hidden Markov models.",
      link: "https://ssrn.com/abstract=0000001",
    },
    {
      title: "Portfolio Optimization under Regime Shifts",
      subtitle: "Reinforcement, Heuristic, and Quantum Methods",
      summary:
        "Exploring hybrid optimization methods under market regime uncertainty using metaheuristics and quantum-inspired solvers.",
      link: "https://ssrn.com/abstract=0000004",
    },
    {
      title: "Entropy, Information & Portfolio Risk",
      subtitle: "Information-Theoretic Approaches to Diversification",
      summary:
        "Applying entropy and information geometry to measure uncertainty and optimize risk diversification in multi-asset portfolios.",
      link: "https://arxiv.org/abs/0000.00005",
    },
    {
      title: "Markov-Modulated Volatility in Risk Forecasting",
      subtitle: "Applications to AlphaBuilder-Risk Engine",
      summary:
        "Integrating regime-switching stochastic volatility models into real-time risk estimation pipelines within the AlphaBuilder System.",
      link: "https://ssrn.com/abstract=0000006",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    if (visibleCount < papers.length) {
      setVisibleCount((prev) => Math.min(prev + 2, papers.length));
    } else {
      setVisibleCount(4);
    }
  };

  const buttonLabel = visibleCount < papers.length ? "Show More" : "Hide";

  return (
    <section className="paper-section">
      <div className="paper-grid">
        {papers.slice(0, visibleCount).map((paper) => (
          <div className="paper-card" key={paper.title}>
            <h2>{paper.title}</h2>
            <h4>{paper.subtitle}</h4>
            <p>{paper.summary}</p>
            <a href={paper.link} target="_blank" rel="noopener noreferrer">
              View Paper →
            </a>
          </div>
        ))}
      </div>

      <button className="show-more-btn" onClick={handleShowMore}>
        {buttonLabel}
      </button>
    </section>
  );
}
