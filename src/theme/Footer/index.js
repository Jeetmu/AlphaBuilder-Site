// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import { FaPalette, FaSun, FaMoon } from 'react-icons/fa';
import './SearchBar.css'; // keep your existing CSS import

export default function Footer() {
  const year = new Date().getFullYear();

  const colors = [
    "#00ffaa",
    "#00bfff",
    "#ff006e",
    "#f55505ff",
    "#f5a623",
    "#5865f2",
  ];

  const [currentColor, setCurrentColor] = useState(0);
  const [theme, setTheme] = useState('dark'); 

  // Initialize theme and accent color on mount
  useEffect(() => {
    // Accent color
    const savedColorIndex = localStorage.getItem('alphabuilder-accent-index');
    const startIndex = savedColorIndex !== null ? parseInt(savedColorIndex, 10) : 0;
    const safeIndex = Number.isNaN(startIndex) ? 0 : (startIndex % colors.length);
    setCurrentColor(safeIndex);
    document.documentElement.style.setProperty('--hover-color', colors[safeIndex]);

    // Theme: saved > prefers-color-scheme > default light
    const savedTheme = localStorage.getItem('alphabuilder-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []); // run once

  // Change accent color and persist
  const handleColorChange = () => {
    const next = (currentColor + 1) % colors.length;
    setCurrentColor(next);
    document.documentElement.style.setProperty('--hover-color', colors[next]);
    localStorage.setItem('alphabuilder-accent-index', String(next));
  };

  // Toggle theme and persist
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('alphabuilder-theme', newTheme);
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--ifm-background-color)',
        borderTop: '1px solid var(--ifm-background-color)',
        color: 'var(--ifm-footeraa-color)',
        padding: '3rem 1rem 1rem 1rem',
        textAlign: 'center',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <div style={{ width: 'min(500px, 90%)' }}>
          <SearchBar />
        </div>
      </div>

      {/* Footer Links Grid */}
      <div className="footer-section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.1rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          {/* Community */}
          <div>
            <h4
              style={{
                color: 'var(--ifm-button-color)',
                marginBottom: '0.75rem',
                transition: 'color 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--hover-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ifm-button-color)')}
            >
              Community
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/community/research" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Research</Link></li>
              <li><Link to="/community/blog" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Blogs</Link></li>
              <li><Link to="/community/status" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Status</Link></li>
              <li><Link to="/community/about" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>About</Link></li>
              <li><Link to="/community/contact" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Framework */}
          <div>
            <h4
              style={{
                color: 'var(--ifm-button-color)',
                marginBottom: '0.75rem',
                transition: 'color 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--hover-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ifm-button-color)')}
            >
              Framework
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/signals" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Signal Lab</Link></li>
              <li><Link to="/risk" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Risk Engine</Link></li>
              <li><Link to="/optimizer" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Optimizer</Link></li>
              <li><Link to="/vega" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Vega Studio</Link></li>
              <li><Link to="/hub" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Model Hub</Link></li>
            </ul>
          </div>

          {/* Engagement */}
          <div>
            <h4
              style={{
                color: 'var(--ifm-button-color)',
                marginBottom: '0.75rem',
                transition: 'color 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--hover-color)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ifm-button-color)')}
            >
              Engagement
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="mailto:alphabuilder.research@gmail.com" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Email</a></li>
              <li><a href="https://x.com/AlphaBuild39589" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Twitter</a></li>
              <li><a href="https://discord.gg/rz6wPGYQBH" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Discord</a></li>
              <li><a href="https://www.linkedin.com/company/alphabuilder/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>LinkedIn</a></li>
              <li><a href="https://alphabuilderblogs.substack.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ifm-pcard-color)', fontSize: '0.9rem' }}>Substack</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom description and buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '1.5rem',
      }}>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--ifm-footeraa-color)',
          maxWidth: '700px',
          margin: '0 auto 1rem',
        }}>
          AlphaBuilder is a continuous research documentation platform exploring
          market intelligence, adaptive modeling, and dynamic portfolio systems.
        </p>

        <p style={{
          fontSize: '0.9rem',
          color: 'var(--ifm-footeraa-color)',
          marginBottom: '1rem',
        }}>
          © {year} AlphaBuilder — Follow progress on{' '}
          <a href="https://discord.gg/rz6wPGYQBH" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link" 
          style={{ color: 'var(--ifm-title-color)' }}>
            Discord
          </a>
        </p>

        {/* Buttons row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
        }}>
          {/* Accent color switch */}
          <button
            onClick={handleColorChange}
            className="color-switch-btn"
            aria-label="Change Accent Color"
            title="Change accent color"
            style={{
              background: 'none',
              border: '1px solid rgba(0,0,0,0.2)',
              color: colors[currentColor],
              cursor: 'pointer',
              width: 38,
              height: 38,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              padding: 6,
            }}
          >
            <FaPalette size={16} />
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="color-switch-btn"
            aria-label="Toggle dark/light theme"
            title="Toggle theme"
            style={{
              background: 'none',
              border: '1px solid rgba(0,0,0,0.2)',
              color: 'var(--ifm-button-color)',
              cursor: 'pointer',
              width: 38,
              height: 38,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              padding: 6,
            }}
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
        </div>
      </div>
    </footer>
  );
}
