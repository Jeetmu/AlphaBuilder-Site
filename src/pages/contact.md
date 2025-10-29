import React from 'react';
import { FaLinkedin, FaDiscord, FaTwitter, FaEnvelope, FaBook } from 'react-icons/fa';

export default function Contact() {
  const links = [
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:alphabuilder.research@gmail.com',
      color: '#f5a623',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/alphabuilder/',
      color: '#0a66c2',
    },
    {
      name: 'Discord',
      icon: <FaDiscord />,
      url: 'https://discord.gg/rz6wPGYQBH',
      color: '#5865f2',
    },
    {
      name: 'Substack',
      icon: <FaBook />, // 🔄 temporary icon replacement
      url: 'https://substack.com/@alphabuilderblogs',
      color: '#ff6719',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://x.com/AlphaBuild39589',
      color: '#1da1f2',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2.2rem', marginBottom: '2rem', color: '#e5e5e5' }}>
        Contact AlphaBuilder
      </h1>

      <p
        style={{
          maxWidth: '650px',
          color: '#ccc',
          fontSize: '1rem',
          lineHeight: '1.7',
          marginBottom: '2rem',
          padding: '0 1rem',
        }}
      >
        We’re always open to collaborations, research discussions, and feedback on our
        projects. Join our communities or reach out directly — we’d love to hear from you.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: link.color,
              backgroundColor: '#111',
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '0.8rem 1.2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 0 15px rgba(255,255,255,0.05)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 0 25px ${link.color}55`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.05)';
            }}
          >
            {link.icon} {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
