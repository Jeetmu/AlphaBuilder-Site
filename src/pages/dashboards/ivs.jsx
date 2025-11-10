import React, { useState, useEffect, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import "./ivs.css";

const BigInteractiveIVSDashboard = () => (
  <BrowserOnly>
    {() => {
      const Plotly = require("plotly.js-dist-min");
      const API_BASE = "https://api.alphabuilder.xyz/dashboard";

      const getColors = () => {
        const styles = getComputedStyle(document.documentElement);
        return {
          textColor: styles.getPropertyValue("--ifm-font-color-base").trim(),
          bgColor: styles.getPropertyValue("--ifm-background-color").trim(),
        };
      };

      const [chartColors, setChartColors] = useState(getColors());
      const [spot, setSpot] = useState(100.0);
      const [maturities, setMaturities] = useState(10);
      const [strikes, setStrikes] = useState(20);
      const [ivsData, setIvsData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const plotRef = useRef(null);

      // Fetch IV Surface
      const fetchIVSurface = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(
            `${API_BASE}/ivs?spot=${spot}&maturities=${maturities}&strikes=${strikes}`
          );
          if (!res.ok) throw new Error("API error");
          const data = await res.json();
          setIvsData(data);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch IV Surface data");
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchIVSurface();
      }, [spot, maturities, strikes]);

      // Theme observer
      useEffect(() => {
        const html = document.documentElement;
        const updateColors = () => setChartColors(getColors());
        const observer = new MutationObserver(updateColors);
        observer.observe(html, { attributes: true, attributeFilter: ["data-theme", "data-accent"] });
        window.addEventListener("colorChange", updateColors);
        return () => {
          observer.disconnect();
          window.removeEventListener("colorChange", updateColors);
        };
      }, []);

      // Render Plotly
      useEffect(() => {
        if (!ivsData || !plotRef.current) return;

        const df = ivsData.data;
        const maturitiesArr = [...new Set(df.map((d) => d.maturity))];
        const moneyness = [...new Set(df.map((d) => d.moneyness))];
        const zMatrix = maturitiesArr.map((t) =>
          moneyness.map((m) => df.find((d) => d.maturity === t && d.moneyness === m)?.iv ?? null)
        );

        const trace = {
          x: moneyness,
          y: maturitiesArr,
          z: zMatrix,
          type: "surface",
          colorscale: "Viridis",
          colorbar: { thickness: 15, x: 1.05 }, // shrink and move colorbar
          hovertemplate: "Moneyness: %{x:.2f}<br>Maturity: %{y:.2f}Y<br>IV: %{z:.2%}<extra></extra>",
        };

        const layout = {
          paper_bgcolor: chartColors.bgColor,
          plot_bgcolor: chartColors.bgColor,
          autosize: true,
          margin: { l: 0, r: 0, t: 50, b: 50 }, // remove extra left/right padding
          scene: {
            xaxis: { title: "Moneyness (K/F)", color: chartColors.textColor },
            yaxis: { title: "Maturity (Years)", color: chartColors.textColor },
            zaxis: { title: "Implied Volatility", color: chartColors.textColor },
          },
        };

        Plotly.newPlot(plotRef.current, [trace], layout, { responsive: true });
        return () => Plotly.purge(plotRef.current);
      }, [ivsData, chartColors]);

      return (
        <div className="dashboard-container">
          <h1
            className="dashboard-title"
            style={{ color: chartColors.textColor }}
            onMouseEnter={(e) => (e.target.style.color = "var(--hover-color)")}
            onMouseLeave={(e) => (e.target.style.color = chartColors.textColor)}
          >
            Interactive Implied Volatility Surface
          </h1>

          <div className="dashboard-controls" style={{ color: chartColors.textColor }}>
  <div>
    <label>Spot: </label>
    <input
      type="number"
      value={spot}
      onChange={(e) => setSpot(parseFloat(e.target.value))}
      className="dashboard-input"
      style={{ color: chartColors.textColor }}
    />
  </div>
  <div>
    <label>Maturities: </label>
    <input
      type="number"
      min={5}
      max={30}
      value={maturities}
      onChange={(e) => setMaturities(parseInt(e.target.value))}
      className="dashboard-input"
      style={{ color: chartColors.textColor }}
    />
  </div>
  <div>
    <label>Strikes: </label>
    <input
      type="number"
      min={10}
      max={50}
      value={strikes}
      onChange={(e) => setStrikes(parseInt(e.target.value))}
      className="dashboard-input"
      style={{ color: chartColors.textColor }}
    />
  </div>
</div>


          <div ref={plotRef} className="plot-container">
            {loading && <p className="loading-message" style={{ color: chartColors.textColor }}>Loading IV Surface...</p>}
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      );
    }}
  </BrowserOnly>
);

export default BigInteractiveIVSDashboard;
