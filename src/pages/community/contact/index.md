import React from "react";
import { FaLinkedin, FaDiscord, FaTwitter, FaEnvelope, FaBook } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const links = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:alphabuilder.research@gmail.com",
      color: "#f5a623",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/alphabuilder/",
      color: "#0a66c2",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      url: "https://discord.gg/rz6wPGYQBH",
      color: "#5865f2",
    },
    {
      name: "Substack",
      icon: <FaBook />,
      url: "https://substack.com/@alphabuilderblogs",
      color: "#ff6719",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/AlphaBuild39589",
      color: "#1da1f2",
    },
  ];

  return (
    <div className="contact-container">
      <h1>Contact AlphaBuilder</h1>
      <p>
        We’re always open to collaborations, research discussions, and feedback on our projects. 
        Join our communities or reach out directly at{" "}
        <a
          href="mailto:alphabuilder.research@gmail.com"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.color = "#00bfff";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
            e.target.style.color = "#fff";
          }}
        >
          alphabuilder.research@gmail.com
        </a>
        — we’d love to hear from you.
      </p>


      <div className="contact-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{ color: link.color }}
          >
            {link.icon} {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
