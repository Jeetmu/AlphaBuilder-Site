import React, { useState } from "react";
import "./Blog.css";

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const posts = [
    {
      title: "Beta Neutral Funding Arbitrage",
      subtitle: "Trading Funding Arbs with Only Perps",
      summary:
        "A practical approach to earning risk-free yield by capturing funding rate discrepancies in perpetual markets.",
      link: "https://alphabuilderblogs.substack.com/p/alphabuilder",
    },
    {
      title: "Volatility Regime Shifts",
      subtitle: "How Markov Models Capture Market Transitions",
      summary:
        "Understanding volatility clustering and regime transitions through Markov-modulated models in derivative pricing.",
      link: "https://alphabuilderblogs.substack.com/p/volatility-regime",
    },
    {
      title: "Portfolio Entropy & Risk",
      subtitle: "Information Theory in Modern Portfolio Design",
      summary:
        "Exploring entropy as a measure of portfolio uncertainty and diversification within modern optimization frameworks.",
      link: "https://alphabuilderblogs.substack.com/p/entropy-risk",
    },
    {
      title: "Funding Rate Dynamics",
      subtitle: "Mechanics Behind Perpetual Swaps",
      summary:
        "A deep dive into the mechanics of funding rate formation and its role in market equilibrium for perpetual futures.",
      link: "https://alphabuilderblogs.substack.com/p/funding-rates",
    },
    {
      title: "Statistical Arbitrage Reimagined",
      subtitle: "Bridging ML and Market Microstructure",
      summary:
        "Revisiting stat-arb through the lens of machine learning and microstructure-driven predictive models.",
      link: "https://alphabuilderblogs.substack.com/p/stat-arb",
    },
    {
      title: "Regime-Aware Portfolio Allocation",
      subtitle: "Deep Learning Meets Risk Modulation",
      summary:
        "Integrating regime detection with deep learning models for adaptive portfolio allocation and risk control.",
      link: "https://alphabuilderblogs.substack.com/p/regime-allocation",
    },
  ];

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <>

      {/* Blog Grid */}
      <div className="blog-grid">
        {visiblePosts.map((post) => (
          <div key={post.title} className="blog-card">
            <h2>{post.title}</h2>
            <h4>{post.subtitle}</h4>
            <p>{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read on Substack →
            </a>
          </div>
        ))}
      </div>

      {/* Show More / Hide Button */}
      {posts.length > 4 && (
        <div className="blog-toggle">
          {visibleCount < posts.length ? (
            <button onClick={() => setVisibleCount((prev) => prev + 4)}>
              Show More ▼
            </button>
          ) : (
            <button onClick={() => setVisibleCount(4)}>Hide ▲</button>
          )}
        </div>
      )}
            {/* Substack Embed */}
          <div className="substack-embed-wrapper">
            <iframe
              src="https://alphabuilderblogs.substack.com/embed"
              width="480"
              height="320"
              className="substack-embed"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
    </>
  );
}
