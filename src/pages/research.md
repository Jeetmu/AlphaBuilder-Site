import React, { useState } from 'react';

export default function ResearchPapers() {
  const papers = [
    {
      title: 'Regime-Switching Derivative Pricing',
      subtitle: 'Measure-Theoretic & Markov-Modulated Volatility',
      summary:
        'A mathematical treatment of regime-switching models in derivative pricing using measure theory, stochastic calculus, and hidden Markov models.',
      link: 'https://ssrn.com/abstract=0000001',
    },
    {
      title: 'Portfolio Optimization under Regime Shifts',
      subtitle: 'Reinforcement, Heuristic, and Quantum Methods',
      summary:
        'Exploring hybrid optimization methods under market regime uncertainty using metaheuristics and quantum-inspired solvers.',
      link: 'https://ssrn.com/abstract=0000004',
    },
    {
      title: 'Entropy, Information & Portfolio Risk',
      subtitle: 'Information-Theoretic Approaches to Diversification',
      summary:
        'Applying entropy and information geometry to measure uncertainty and optimize risk diversification in multi-asset portfolios.',
      link: 'https://arxiv.org/abs/0000.00005',
    },
    {
      title: 'Markov-Modulated Volatility in Risk Forecasting',
      subtitle: 'Applications to AlphaBuilder-Risk Engine',
      summary:
        'Integrating regime-switching stochastic volatility models into real-time risk estimation pipelines within the AlphaBuilder System.',
      link: 'https://ssrn.com/abstract=0000006',
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

  const buttonLabel =
    visibleCount < papers.length ? 'Show More' : 'Hide';

  return (
    <div style={{ textAlign: 'center', color: '#fff' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          padding: '2rem 0',
        }}
      >
        {papers.slice(0, visibleCount).map((paper) => (
          <div
            key={paper.title}
            style={{
              textAlign: 'center',
              backgroundColor: '#111',
              color: '#fff',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #333',
              boxShadow: '0 0 20px rgba(255,255,255,0.05)',
              transition: 'transform 0.2s ease, boxShadow 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.05)';
            }}
          >
            <h2 style={{ marginBottom: '0.5rem' }}>{paper.title}</h2>
            <h4 style={{ color: '#f5a623', marginTop: '0' }}>{paper.subtitle}</h4>

            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {paper.summary}
            </p>

            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#f5a623',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                marginTop: '1rem',
              }}
            >
              View Paper →
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={handleShowMore}
        style={{
          marginTop: '1rem',
          background: 'none',
          border: '1px solid #f5a623',
          color: '#f5a623',
          padding: '0.6rem 1.5rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#f5a62320')}
        onMouseOut={(e) => (e.currentTarget.style.background = 'none')}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
