import React, { useState, useEffect, useRef } from "react";
import "./ivs.css";

export default function IVSClient() {
  const [PlotlyLib, setPlotlyLib] = useState(null);

  const API_BASE = "https://api.alphabuilder.xyz/dashboard";

  const getColors = () => {
    // Extra safety: if somehow this ever ran on SSR, don't touch document
    if (typeof window === "undefined" || typeof document === "undefined") {
      return {
        textColor: "#ffffff",
        bgColor: "#000000",
      };
    }
    const styles = getComputedStyle(document.documentElement);
    return {
      textColor: styles.getPropertyValue("--ifm-font-color-base").trim(),
      bgColor: styles.getPropertyValue("--ifm-background-color").trim(),
    };
  };

  const [chartColors, setChartColors] = useState(getColors);
  const [spot, setSpot] = useState(100.0);
  const [maturities, setMaturities] = useState(10);
  const [strikes, setStrikes] = useState(20);
  const [ivsData, setIvsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const plotRef = useRef(null);

  // ✅ Lazy-load Plotly only in the browser
  useEffect(() => {
    let isMounted = true;
    import("plotly.js-dist-min")
      .then((mod) => {
        if (isMounted) setPlotlyLib(mod);
      })
      .catch((err) => {
        console.error("Failed to load Plotly:", err);
        if (isMounted) setError("Failed to load chart library");
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch IV surface
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spot, maturities, strikes]);

  // Theme updates
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const html = document.documentElement;
    const updateColors = () => setChartColors(getColors());
    const observer = new MutationObserver(updateColors);
    observer.observe(html, { attributes: true, attributeFilter: ["data-theme", "data-accent"] });

    window.addEventListener("colorChange", updateColors);

    return () => {
      observer.disconnect();
      window.removeEventListener("colorChange", updateColors);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render Plotly
  useEffect(() => {
    if (!PlotlyLib || !ivsData || !plotRef.current) return;

    const Plotly = PlotlyLib;
    const df = ivsData.data || [];
    if (!df.length) return;

    const maturitiesArr = [...new Set(df.map((d) => d.maturity))];
    const moneyness = [...new Set(df.map((d) => d.moneyness))];
    const zMatrix = maturitiesArr.map((t) =>
      moneyness.map(
        (m) => df.find((d) => d.maturity === t && d.moneyness === m)?.iv ?? null
      )
    );

    const trace = {
      x: moneyness,
      y: maturitiesArr,
      z: zMatrix,
      type: "surface",
      colorscale: "Viridis",
      colorbar: { thickness: 15, x: 1.05 },
      hovertemplate:
        "Moneyness: %{x:.2f}<br>Maturity: %{y:.2f}Y<br>IV: %{z:.2%}<extra></extra>",
    };

    const layout = {
      paper_bgcolor: chartColors.bgColor,
      plot_bgcolor: chartColors.bgColor,
      autosize: true,
      margin: { l: 0, r: 0, t: 50, b: 50 },
      scene: {
        xaxis: { title: "Moneyness (K/F)", color: chartColors.textColor },
        yaxis: { title: "Maturity (Years)", color: chartColors.textColor },
        zaxis: { title: "Implied Volatility", color: chartColors.textColor },
      },
    };

    try {
      Plotly.newPlot(plotRef.current, [trace], layout, { responsive: true });
    } catch (e) {
      console.error("Plotly.newPlot error:", e);
      setError("Failed to render chart");
    }

    return () => {
      try {
        Plotly.purge(plotRef.current);
      } catch (e) {
        // ignore purge errors
      }
    };
  }, [PlotlyLib, ivsData, chartColors]);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title" style={{ color: chartColors.textColor }}>
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
          />
        </div>
      </div>

      <div ref={plotRef} className="plot-container">
        {!PlotlyLib && !error && (
          <p className="loading-message" style={{ color: chartColors.textColor }}>
            Loading chart engine…
          </p>
        )}
        {loading && !error && (
          <p className="loading-message" style={{ color: chartColors.textColor }}>
            Loading IV Surface…
          </p>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
