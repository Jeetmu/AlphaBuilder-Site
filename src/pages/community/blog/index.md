import React, { useState } from 'react';

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const posts = [
    {
      title: 'Beta Neutral Funding Arbitrage',
      subtitle: 'Trading Funding Arbs with Only Perps',
      summary:
        'A practical approach to earning risk-free yield by capturing funding rate discrepancies in perpetual markets.',
      link: 'https://alphabuilderblogs.substack.com/p/alphabuilder',
    },
    {
      title: 'Volatility Regime Shifts',
      subtitle: 'How Markov Models Capture Market Transitions',
      summary:
        'Understanding volatility clustering and regime transitions through Markov-modulated models in derivative pricing.',
      link: 'https://alphabuilderblogs.substack.com/p/volatility-regime',
    },
    {
      title: 'Portfolio Entropy & Risk',
      subtitle: 'Information Theory in Modern Portfolio Design',
      summary:
        'Exploring entropy as a measure of portfolio uncertainty and diversification within modern optimization frameworks.',
      link: 'https://alphabuilderblogs.substack.com/p/entropy-risk',
    },
    {
      title: 'Funding Rate Dynamics',
      subtitle: 'Mechanics Behind Perpetual Swaps',
      summary:
        'A deep dive into the mechanics of funding rate formation and its role in market equilibrium for perpetual futures.',
      link: 'https://alphabuilderblogs.substack.com/p/funding-rates',
    },
    {
      title: 'Statistical Arbitrage Reimagined',
      subtitle: 'Bridging ML and Market Microstructure',
      summary:
        'Revisiting stat-arb through the lens of machine learning and microstructure-driven predictive models.',
      link: 'https://alphabuilderblogs.substack.com/p/stat-arb',
    },
    {
      title: 'Regime-Aware Portfolio Allocation',
      subtitle: 'Deep Learning Meets Risk Modulation',
      summary:
        'Integrating regime detection with deep learning models for adaptive portfolio allocation and risk control.',
      link: 'https://alphabuilderblogs.substack.com/p/regime-allocation',
    },
  ];

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <>
      {/* SUBSTACK EMBED */}
      <div class='blog-section'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem 0 4rem',
        }}
      >
        <div
          style={{
            backgroundColor: '#111',
            border: '1px solid #333',
            borderRadius: '12px',
            boxShadow: '0 0 25px rgba(255,255,255,0.05)',
            padding: '1rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            width: 'fit-content',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow =
              '0 0 35px rgba(255,255,255,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow =
              '0 0 25px rgba(255,255,255,0.05)';
          }}
        >
          <iframe
            src="https://alphabuilderblogs.substack.com/embed"
            width="480"
            height="320"
            style={{
              border: 'none',
              borderRadius: '8px',
              background: '#000',
              colorScheme: 'dark',
            }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      </div>

      {/* GRID OF POSTS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          padding: '2rem 0',
        }}
      >
        {visiblePosts.map((post) => (
          <div
            key={post.title}
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
              e.currentTarget.style.boxShadow =
                '0 0 25px rgba(255,255,255,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow =
                '0 0 20px rgba(255,255,255,0.05)';
            }}
          >
            <h2 style={{ marginBottom: '0.5rem' }}>{post.title}</h2>
            <h4 style={{ color: '#f5a623', marginTop: '0' }}>
              {post.subtitle}
            </h4>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>
              {post.summary}
            </p>
            <a
              href={post.link}
              style={{
                color: '#f5a623',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                marginTop: '1rem',
              }}
            >
              Read on Substack →
            </a>
          </div>
        ))}
      </div>

      {/* SHOW MORE / HIDE BUTTON */}
      {posts.length > 4 && (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {visibleCount < posts.length ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              style={{
                background: 'none',
                border: '1px solid #f5a623',
                color: '#f5a623',
                borderRadius: '6px',
                padding: '0.4rem 1rem',
                cursor: 'pointer',
              }}
            >
              Show More ▼
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(4)}
              style={{
                background: 'none',
                border: '1px solid #f5a623',
                color: '#f5a623',
                borderRadius: '6px',
                padding: '0.4rem 1rem',
                cursor: 'pointer',
              }}
            >
              Hide ▲
            </button>
          )}
        </div>
      )}
    </>
  );
}
