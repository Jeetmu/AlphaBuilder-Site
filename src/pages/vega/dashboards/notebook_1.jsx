// BigInteractiveStockDashboard.jsx
import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

const BigInteractiveStockDashboard = () => (
  <BrowserOnly>
    {() => {
      const { Line } = require("react-chartjs-2");
      const {
        Chart: ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
      } = require("chart.js");
      const zoomPlugin = require("chartjs-plugin-zoom");

      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        zoomPlugin
      );

      const tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "META", "TSLA"];
      const API_BASE = "https://alphabuilder-signal.onrender.com";

      // 🎨 Helper to read theme-dependent colors
      const getColors = () => {
        const styles = getComputedStyle(document.documentElement);
        return {
          buttonColor: styles.getPropertyValue("--ifm-button-color").trim(),
          hoverColor: styles.getPropertyValue("--hover-color").trim(),
        };
      };

      const [chartColors, setChartColors] = useState(getColors());
      const [selectedTicker, setSelectedTicker] = useState(tickers[0]);
      const [stockData, setStockData] = useState([]);
      const [startDate, setStartDate] = useState(null);
      const [endDate, setEndDate] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const fetchStockData = async (ticker) => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(`${API_BASE}/stock/${ticker}`);
          if (!res.ok) throw new Error("API Error");
          const data = await res.json();

          const parsed = data.dates.map((d, i) => ({
            date: new Date(d),
            close: data.close[i],
          }));

          setStockData(parsed);
          setStartDate(new Date(parsed[0].date));
          setEndDate(new Date(parsed[parsed.length - 1].date));
        } catch (err) {
          console.error(err);
          setError("Failed to load data");
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchStockData(selectedTicker);
      }, [selectedTicker]);

      useEffect(() => {
        const html = document.documentElement;

        const updateColors = () => {
          setChartColors(getColors());
        };

        const observer = new MutationObserver(() => {
          updateColors();
        });

        observer.observe(html, {
          attributes: true,
          attributeFilter: ["data-theme", "data-accent"],
        });

        const colorChangeHandler = () => updateColors();
        window.addEventListener("colorChange", colorChangeHandler);

        return () => {
          observer.disconnect();
          window.removeEventListener("colorChange", colorChangeHandler);
        };
      }, []);

      const filteredData = stockData.filter(
        (d) =>
          (!startDate || d.date >= startDate) &&
          (!endDate || d.date <= endDate)
      );

      const data = {
        labels: filteredData.map((d) => d.date.toISOString().split("T")[0]),
        datasets: [
          {
            label: `${selectedTicker} Close`,
            data: filteredData.map((d) => d.close),
            borderColor: chartColors.hoverColor,
            backgroundColor: "transparent",
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: chartColors.hoverColor,
            pointHoverBorderColor: chartColors.hoverColor,
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            position: "top",
            labels: { color: chartColors.buttonColor },
          },
          title: {
            display: true,
            text: `${selectedTicker} Closing Prices (Interactive)`,
            color: chartColors.buttonColor,
          },
          zoom: {
            zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: "x" },
            pan: { enabled: true, mode: "x" },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
              color: chartColors.buttonColor,
            },
            ticks: { color: chartColors.buttonColor },
            grid: { color: chartColors.hoverColor + "33" },
          },
          y: {
            title: {
              display: true,
              text: "Price ($)",
              color: chartColors.buttonColor,
            },
            ticks: { color: chartColors.buttonColor },
            grid: { color: chartColors.hoverColor + "33" },
          },
        },
        animation: {
          duration: 400,
          easing: "easeInOutCubic",
        },
      };

      const handleTickerChange = (e) => {
        setSelectedTicker(e.target.value);
      };

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
              color: chartColors.buttonColor,
              transition: "color 0.3s ease",
            }}
          >
            Interactive Stock Dashboard
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              color: chartColors.buttonColor,
              transition: "color 0.3s ease",
            }}
          >
            <div>
              <label>Ticker: </label>
              <select
                value={selectedTicker}
                onChange={handleTickerChange}
                style={{
                  padding: "0.4rem",
                  borderRadius: "8px",
                  border: `1px solid ${chartColors.buttonColor}`,
                  color: chartColors.buttonColor,
                  background: "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                {tickers.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {stockData.length > 0 && (
              <>
                <div>
                  <label>Start Date: </label>
                  <input
                    type="date"
                    value={startDate?.toISOString().split("T")[0]}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                    style={{
                      padding: "0.4rem",
                      borderRadius: "8px",
                      border: `1px solid ${chartColors.buttonColor}`,
                      color: chartColors.buttonColor,
                      background: "transparent",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                <div>
                  <label>End Date: </label>
                  <input
                    type="date"
                    value={endDate?.toISOString().split("T")[0]}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                    style={{
                      padding: "0.4rem",
                      borderRadius: "8px",
                      border: `1px solid ${chartColors.buttonColor}`,
                      color: chartColors.buttonColor,
                      background: "transparent",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div
            style={{
              height: "500px",
              width: "100%",
              overflow: "hidden",
              borderRadius: "12px",
              background: "var(--background-color)",
              padding: "1rem",
              transition: "background 0.3s ease",
            }}
          >
            {loading ? (
              <p style={{ textAlign: "center" }}>Loading data...</p>
            ) : error ? (
              <p style={{ textAlign: "center", color: "red" }}>{error}</p>
            ) : stockData.length > 0 ? (
              <Line data={data} options={options} />
            ) : (
              <p style={{ textAlign: "center" }}>No data available</p>
            )}
          </div>
        </div>
      );
    }}
  </BrowserOnly>
);

export default BigInteractiveStockDashboard;
