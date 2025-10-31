import React from 'react';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import "./SearchBar.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #222',
        color: '#ccc',
        padding: '3rem 1rem 1rem 1rem',
        textAlign: 'center',
      }}
    >
      {/* 🔍 Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <div style={{ width: 'min(500px, 90%)' }}>
          <SearchBar />
        </div>
      </div>

      {/* 🔗 Footer Links */}
      <div className="footer-section">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.1rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
            <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#fff', marginBottom: '0.75rem' }}>Community</h4>
            <ul
                style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block',
                }}
            >
                <li><Link to="/community/about" style={{ color: '#bbb' }}>About</Link></li>
                <li><Link to="/community/research" style={{ color: '#bbb' }}>Research</Link></li>
                <li><Link to="/community/blog" style={{ color: '#bbb' }}>Blogs</Link></li>
                <li><Link to="/community/status" style={{ color: '#bbb' }}>Status</Link></li>
                <li><Link to="/community/contact" style={{ color: '#bbb' }}>Contact</Link></li>
            </ul>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ color: '#fff', marginBottom: '0.75rem' }}>Frameworks</h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: 'left',
                  display: 'inline-block',
                }}
              >
                <li><Link to="/signals" style={{ color: '#bbb' }}>Signal</Link></li>
                <li><Link to="/risk" style={{ color: '#bbb' }}>Risk</Link></li>
                <li><Link to="/optimizer" style={{ color: '#bbb' }}>Optimizer</Link></li>
                <li><Link to="/vega" style={{ color: '#bbb' }}>Vega</Link></li>
                <li><Link to="/hub" style={{ color: '#bbb' }}>Hub</Link></li>
                <li><Link to="/system" style={{ color: '#bbb' }}>System</Link></li>
              </ul>
            </div>

            <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#fff', marginBottom: '0.75rem' }}>Engagement</h4>
            <ul
                style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block',
                }}
            >
                <li>
                <a href="https://discord.gg/rz6wPGYQBH" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb' }}>
                    Discord
                </a>
                </li>
                <li>
                <a href="https://alphabuilderblogs.substack.com" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb' }}>
                    Substack
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/company/alphabuilder/" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb' }}>
                    LinkedIn
                </a>
                </li>
                <li>
                <a href="https://x.com/AlphaBuild39589" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb' }}>
                    Twitter
                </a>
                </li>
                <li>
                <a href="mailto:alphabuilder.research@gmail.com" style={{ color: '#bbb' }}>
                    Email
                </a>
                </li>
            </ul>
            </div>
         </div>
      </div>

      {/* 📜 Description */}
      <p style={{ fontSize: '0.9rem', color: '#aaa', maxWidth: '700px', margin: '0 auto 1rem' }}>
        AlphaBuilder is a continuous research documentation platform exploring 
        market intelligence, adaptive modeling, and dynamic portfolio systems.
      </p>

      {/* 🪪 Copyright */}
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        © {year} AlphaBuilder — Follow progress on{' '}
          <a
              href="https://discord.gg/rz6wPGYQBH"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Discord
            </a>
      </p>
    </footer>
  );
}
