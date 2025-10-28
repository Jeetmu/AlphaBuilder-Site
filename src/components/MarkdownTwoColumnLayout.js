// src/components/MarkdownTwoColumnLayout.js
import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import './MarkdownTwoColumnLayout.css';

export default function MarkdownTwoColumnLayout({
  toc,
  children,
  activeSection,
  onSectionChange,
}) {
  const location = useLocation();

  // Handle deep linking (e.g. /about#docs/installation)
  useEffect(() => {
    if (location.hash) {
      const [main, sub] = location.hash.replace('#', '').split('/');
      const match = toc.find((item) => item.id === main);
      if (match) {
        onSectionChange(main);
        if (sub) {
          // small delay so React finishes rendering
          setTimeout(() => {
            const el = document.getElementById(sub);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    }
  }, [location.hash, toc, onSectionChange]);

  return (
    <div className="markdown-two-col">
      {/* LEFT INDEX */}
      <aside className="markdown-toc">
        <ul>
          {toc.map((section) => (
            <li key={section.id}>
              <button
                className={`main-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => {
                  onSectionChange(section.id);
                  window.location.hash = section.id;
                }}
              >
                {section.value}
              </button>

              {activeSection === section.id && section.children && (
                <ul className="sub-list">
                  {section.children.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={`#${section.id}/${sub.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = `${section.id}/${sub.id}`;
                          const el = document.getElementById(sub.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                      >
                        {sub.value}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* RIGHT MARKDOWN */}
      <main className="markdown-content">{children}</main>
    </div>
  );
}
