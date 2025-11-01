import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import { FaPalette } from 'react-icons/fa';
import "./SearchBar.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const colors = [ "#00ffaa", "#00bfff", "#ff006e", "#f55505ff", "#f5a623", "#5865f2"];     
 
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const savedColorIndex = localStorage.getItem("alphabuilder-accent-index");
    if (savedColorIndex !== null) {
      const index = parseInt(savedColorIndex);
      setCurrentColor(index);
      document.documentElement.style.setProperty("--hover-color", colors[index]);
    } else {
      document.documentElement.style.setProperty("--hover-color", colors[0]);
    }
  }, []);

  const handleColorChange = () => {
    const next = (currentColor + 1) % colors.length;
    setCurrentColor(next);
    document.documentElement.style.setProperty("--hover-color", colors[next]);
    localStorage.setItem("alphabuilder-accent-index", next);
  };

  return (
    <footer
      style={{
        backgroundColor: '#121212',
        borderTop: '1px solid #1f1f1f',
        color: '#ccc',
        padding: '3rem 1rem 1rem 1rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
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
          {/* Community */}
          <div>
            <h4
              style={{
                color: '#fff',
                marginBottom: '0.75rem',
                transition: 'color 0.3s ease',
                fontSize: '0.9rem' 
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--hover-color)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '#fff')
              }
            >
              Community
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/community/research" style={{ color: '#bbb',fontSize: '0.9rem' }}>Research</Link></li>
              <li><Link to="/community/blog" style={{ color: '#bbb',fontSize: '0.9rem' }}>Blogs</Link></li>
              <li><Link to="/community/status" style={{ color: '#bbb',fontSize: '0.9rem' }}>Status</Link></li>
              <li><Link to="/community/about" style={{ color: '#bbb',fontSize: '0.9rem' }}>About</Link></li>
              <li><Link to="/community/contact" style={{ color: '#bbb',fontSize: '0.9rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
              <h4
                style={{
                  color: '#fff',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s ease',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--hover-color)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = '#fff')
                }
              >
                Framework
              </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/signals" style={{ color: '#bbb', fontSize: '0.9rem' }}>Signal Lab</Link></li>
              <li><Link to="/risk" style={{ color: '#bbb', fontSize: '0.9rem' }}>Risk Engine</Link></li>
            <li><Link to="/optimizer" style={{ color: '#bbb', fontSize: '0.9rem' }}>Optimizer</Link></li>
            <li><Link to="/vega" style={{ color: '#bbb', fontSize: '0.9rem' }}>Vega Studio</Link></li>
            <li><Link to="/hub" style={{ color: '#bbb', fontSize: '0.9rem' }}>Model Hub</Link></li>
              {/* <li><Link to="/system" style={{ color: '#bbb' }}>System</Link></li> */}
            </ul>
          </div>

          {/* Engagement */}
          <div>
            <h4
                style={{
                  color: '#fff',
                  marginBottom: '0.75rem',
                  transition: 'color 0.3s ease',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--hover-color)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = '#fff')
                }
              >
                Engagement
              </h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="mailto:alphabuilder.research@gmail.com" style={{ color: '#bbb', fontSize: '0.9rem' }}>Email</a></li>
              <li><a href="https://x.com/AlphaBuild39589" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb', fontSize: '0.9rem' }}>Twitter</a></li>
              <li><a href="https://discord.gg/rz6wPGYQBH" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb', fontSize: '0.9rem' }}>Discord</a></li>
              <li><a href="https://www.linkedin.com/company/alphabuilder/" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb', fontSize: '0.9rem' }}>LinkedIn</a></li>
              <li><a href="https://alphabuilderblogs.substack.com" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb', fontSize: '0.9rem' }}>Substack</a></li>
            </ul>
          </div>
        </div>
      </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.9rem',
                color: '#aaa',
                maxWidth: '700px',
                margin: '0 auto 1rem',
              }}
            >
              AlphaBuilder is a continuous research documentation platform exploring
              market intelligence, adaptive modeling, and dynamic portfolio systems.
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '1rem',
              }}
            >
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

            <button
              onClick={handleColorChange}
              className="color-switch-btn"
              aria-label="Change Accent Color"
              style={{
                background: 'none',
                border: '1px solid #333',
                color: colors[currentColor],
                cursor: 'pointer',
                padding: '0.6rem',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
              }}
            >
              <FaPalette size={18} />
            </button>
          </div>

    </footer>
  );
}
