import React, { useState, useEffect, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

const BigInteractiveIVSDashboard = () => (
  <BrowserOnly>
    {() => {
      const Plotly = require("plotly.js-dist-min");

      const API_BASE = "https://api.alphabuilder.xyz/dashboard";

      // 🎨 Helper to read theme colors dynamically
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

      // 🧩 Fetch synthetic IV Surface data
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

      // Detect dark/light theme changes
      useEffect(() => {
        const html = document.documentElement;
        const updateColors = () => setChartColors(getColors());
        const observer = new MutationObserver(updateColors);

        observer.observe(html, {
          attributes: true,
          attributeFilter: ["data-theme", "data-accent"],
        });

        window.addEventListener("colorChange", updateColors);

        return () => {
          observer.disconnect();
          window.removeEventListener("colorChange", updateColors);
        };
      }, []);

      // Render Plotly Surface
      useEffect(() => {
        if (!ivsData || !plotRef.current) return;

        const df = ivsData.data;

        // Extract unique sorted axes
        const maturities = [...new Set(df.map((d) => d.maturity))];
        const moneyness = [...new Set(df.map((d) => d.moneyness))];

        // Build Z surface matrix (maturity × moneyness)
        const zMatrix = maturities.map((t) =>
          moneyness.map(
            (m) =>
              df.find((d) => d.maturity === t && d.moneyness === m)?.iv ?? null
          )
        );

        const trace = {
          x: moneyness,
          y: maturities,
          z: zMatrix,
          type: "surface",
          colorscale: "Viridis",
          hovertemplate:
            "Moneyness: %{x:.2f}<br>Maturity: %{y:.2f}Y<br>IV: %{z:.2%}<extra></extra>",
        };

        const layout = {
          title: {
            text: `Implied Volatility Surface`,
            font: { color: chartColors.textColor },
          },
          paper_bgcolor: chartColors.bgColor,
          plot_bgcolor: chartColors.bgColor,
          autosize: true,
          scene: {
            xaxis: {
              title: "Moneyness (K/F)",
              color: chartColors.textColor,
            },
            yaxis: {
              title: "Maturity (Years)",
              color: chartColors.textColor,
            },
            zaxis: {
              title: "Implied Volatility",
              color: chartColors.textColor,
            },
          },
        };

        Plotly.newPlot(plotRef.current, [trace], layout, { responsive: true });

        return () => Plotly.purge(plotRef.current);
      }, [ivsData, chartColors]);

      return (
        <div
          style={{
            maxWidth: "1100px",
            margin: "3rem auto",
            padding: "2rem",
            borderRadius: "20px",
            background: "var(--ifm-background-color)",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
         <h1
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              color: chartColors.textColor,
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = "var(--hover-color)")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = chartColors.textColor)
            }
          >
            Interactive Implied Volatility Surface
          </h1>

          {/* Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              color: chartColors.textColor,
            }}
          >
            <div>
              <label>Spot: </label>
              <input
                type="number"
                value={spot}
                onChange={(e) => setSpot(parseFloat(e.target.value))}
                style={{
                  width: "80px",
                  padding: "0.4rem",
                  borderRadius: "8px",
                  border: `1px solid ${chartColors.textColor}`,
                  color: chartColors.textColor,
                  background: "transparent",
                }}
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
                style={{
                  width: "80px",
                  padding: "0.4rem",
                  borderRadius: "8px",
                  border: `1px solid ${chartColors.textColor}`,
                  color: chartColors.textColor,
                  background: "transparent",
                }}
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
                style={{
                  width: "80px",
                  padding: "0.4rem",
                  borderRadius: "8px",
                  border: `1px solid ${chartColors.textColor}`,
                  color: chartColors.textColor,
                  background: "transparent",
                }}
              />
            </div>
          </div>

          {/* Plot Section */}
          <div
            style={{
              height: "600px",
              width: "100%",
              overflow: "hidden",
              borderRadius: "12px",
              background: "var(--background-color)",
              padding: "1rem",
            }}
          >
            {loading ? (
              <p style={{ textAlign: "center", color: chartColors.textColor }}>
                Loading IV Surface...
              </p>
            ) : error ? (
              <p style={{ textAlign: "center", color: "red" }}>{error}</p>
            ) : ivsData ? (
              <div ref={plotRef} style={{ width: "100%", height: "100%" }} />
            ) : (
              <p style={{ textAlign: "center" }}>No data available</p>
            )}
          </div>
        </div>
      );
    }}
  </BrowserOnly>
);
export default BigInteractiveIVSDashboard;
