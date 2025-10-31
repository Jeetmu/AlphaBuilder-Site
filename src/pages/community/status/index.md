import React, { useState } from "react";
import "./Status.css";

export default function Status() {
  const initialVisible = 2; // initial changelog entries
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(2);

  const changelog = [
    {
      version: "v0.3.1",
      date: "Oct 28, 2025",
      modules: [
        {
          name: "AlphaBuilder-Signal",
          updates: [
            "Integrated Transformer-based volatility extractor",
            "Refined Markov state labeling for multi-asset regime classification",
            "Improved signal latency by 20%",
          ],
        },
        {
          name: "AlphaBuilder-Risk",
          updates: [
            "Enhanced Markov-switching VaR estimation logic",
            "Added dynamic drawdown monitor for multi-regime backtests",
          ],
        },
        {
          name: "AlphaBuilder-Optimizer",
          updates: [
            "Minor update in metaheuristic convergence threshold",
            "Early stopping criterion for non-convex optimization routines",
          ],
        },
      ],
    },
    {
      version: "v0.3.0",
      date: "Oct 20, 2025",
      modules: [
        {
          name: "AlphaBuilder-Vega",
          updates: [
            "Launched Gaussian Process volatility smile model (Research Preview)",
            "Added implied-volatility term structure calibration API",
          ],
        },
        {
          name: "AlphaBuilder-Signal",
          updates: [
            "Released Transformer v2 architecture for high-frequency forecasting",
            "Optimized feature store for real-time data batching",
          ],
        },
        {
          name: "AlphaBuilder-System",
          updates: [
            "Refactored pipeline for faster model routing and logging",
            "Minor UI fixes in dashboard visualization",
          ],
        },
      ],
    },
    {
      version: "v0.2.9",
      date: "Oct 10, 2025",
      modules: [
        {
          name: "AlphaBuilder-Hub",
          updates: [
            "Introduced live model registry sync with Hugging Face",
            "Improved model metadata tagging and version control",
          ],
        },
        {
          name: "AlphaBuilder-Optimizer",
          updates: [
            "New evolutionary optimizer baseline added (DE + PSO Hybrid)",
            "Reworked portfolio constraint handling system",
          ],
        },
      ],
    },
    {
      version: "v0.2.8",
      date: "Oct 5, 2025",
      modules: [
        {
          name: "AlphaBuilder-Signal",
          updates: [
            "Implemented HMM regime-detection baseline for equities and macro factors",
            "Enhanced time-series preprocessing with adaptive rolling windows",
          ],
        },
        {
          name: "AlphaBuilder-Risk",
          updates: [
            "Added regime-aware portfolio stress testing",
            "Introduced correlation decay factor in multi-asset covariance estimation",
          ],
        },
      ],
    },
    {
      version: "v0.2.7",
      date: "Sept 28, 2025",
      modules: [
        {
          name: "AlphaBuilder-System",
          updates: [
            "Refactored pipeline to support modular API endpoints",
            "Improved error handling and retry logic for live inference calls",
          ],
        },
        {
          name: "AlphaBuilder-Hub",
          updates: [
            "Deployed beta version of model upload to Hugging Face",
            "Added token-based authentication for internal model access",
          ],
        },
      ],
    },
    {
      version: "v0.2.6",
      date: "Sept 20, 2025",
      modules: [
        {
          name: "AlphaBuilder-Optimizer",
          updates: [
            "Integrated Quantum-Inspired Annealing (QIA) module for discrete optimization",
            "Enhanced non-convex solver with adaptive penalty control",
          ],
        },
        {
          name: "AlphaBuilder-Risk",
          updates: [
            "Refined tail-risk metrics for regime-conditional drawdowns",
            "Added support for Expected Shortfall (CVaR) computation",
          ],
        },
      ],
    },
    {
      version: "v0.2.5",
      date: "Sept 14, 2025",
      modules: [
        {
          name: "AlphaBuilder-Signal",
          updates: [
            "Launched early version of Transformer encoder for time-series forecasting",
            "Introduced sentiment integration module (news-based signal enhancer)",
          ],
        },
        {
          name: "AlphaBuilder-Vega",
          updates: [
            "Built baseline stochastic volatility model using GARCH-MIDAS",
            "Prepared research plan for Markov-Modulated SV integration",
          ],
        },
      ],
    },
    {
      version: "v0.2.4",
      date: "Sept 7, 2025",
      modules: [
        {
          name: "AlphaBuilder-System",
          updates: [
            "Core project architecture established for all AlphaBuilder submodules",
            "Configured CI/CD pipeline for automated build and deployment",
          ],
        },
        {
          name: "AlphaBuilder-Docs",
          updates: [
            "Created initial documentation for project structure and APIs",
            "Added developer onboarding guide and research roadmap",
          ],
        },
      ],
    },
  ];

  const announcements = [
    {
      date: "Oct 29, 2025",
      title: "AlphaBuilder v0.3 Beta Launch",
      message:
        "AlphaBuilder System enters public beta with modular Signal, Risk, and Optimizer APIs.",
    },
    {
      date: "Oct 25, 2025",
      title: "AlphaBuilder-Hub Models Live",
      message:
        "Hugging Face integration is now active for time-series forecasting models.",
    },
    {
      date: "Oct 20, 2025",
      title: "AlphaBuilder-Signal v0.2 Released",
      message:
        "Introduced regime-aware signal extraction using HMM and Transformers.",
    },
    {
      date: "Oct 10, 2025",
      title: "QUBEE Integration",
      message:
        "Quantum portfolio optimization APIs integrated for advanced experiments.",
    },
    {
      date: "Oct 5, 2025",
      title: "New Docs Section Added",
      message:
        "Documentation now includes sections for Vega (derivative pricing) and Hub.",
    },
    {
      date: "Sep 29, 2025",
      title: "AlphaBuilder Website Goes Live",
      message:
        "The AlphaBuilder project website launched with blog and contact pages.",
    },
  ];

  const visibleLogs = changelog.slice(0, visibleCount);
  const visibleAnnouncementsList = announcements.slice(0, visibleAnnouncements);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 3, changelog.length)
    );
  };

  const handleHide = () => {
    setVisibleCount(initialVisible);
    const container = document.getElementById("changelog-root");
    if (container) container.scrollIntoView({ behavior: "smooth" });
  };

  const handleShowMoreAnnouncements = () => {
    setVisibleAnnouncements((prev) =>
      Math.min(prev + 3, announcements.length)
    );
  };

  const handleHideAnnouncements = () => {
    setVisibleAnnouncements(2);
  };

   return (
    <div className="status-section">
      <div className="status-container">
        {/* ANNOUNCEMENTS */}
        <section className="announcements-section">
          <h2 className="section-title">Recent Announcements</h2>

          {visibleAnnouncementsList.map((a, idx) => (
            <div className="announcement-card" key={idx}>
              <h3>{a.title}</h3>
              <p className="announcement-message">{a.message}</p>
              <p className="announcement-date">{a.date}</p>
            </div>
          ))}

          <div className="button-group">
            {visibleAnnouncements < announcements.length && (
              <button onClick={handleShowMoreAnnouncements} className="button accent">
                Show 3 more ▼
              </button>
            )}
            {visibleAnnouncements > 3 && (
              <button onClick={handleHideAnnouncements} className="button neutral">
                Hide ▲
              </button>
            )}
          </div>
        </section>

        {/* CHANGELOG */}
        <section id="changelog-root">
          <h2 className="section-title">Weekly Updates</h2>

          {visibleLogs.map((log, idx) => (
            <div className="changelog-card" key={idx}>
              <h3>
                <span className="changelog-version">{log.version}</span>{" "}
                <span className="changelog-date">({log.date})</span>
              </h3>

              {log.modules.map((mod, i) => (
                <div key={i} className="module-block">
                  <h4 className="module-name">{mod.name}</h4>
                  <ul>
                    {mod.updates.map((u, j) => (
                      <li key={j}>{u}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div className="button-group">
            {visibleCount < changelog.length && (
              <button onClick={handleShowMore} className="button accent">
                Load 3 more updates ▼
              </button>
            )}
            {visibleCount > initialVisible && (
              <button onClick={handleHide} className="button neutral">
                Hide older updates ▲
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}