import React, { useState, useEffect } from "react";
import "./AlphaBuilderAPITester.css";

export default function AlphaBuilderAPITester({
  basePath = "/optimizer",
  endpoint = "/optimize",
  defaultJson = "{}",
  rowarea = 15,
  storageKeyPrefix = "default",
}) {
  const [apiKey, setApiKey] = useState(
    () => localStorage.getItem(`${storageKeyPrefix}_apiKey`) || "supersecret123"
  );
  const [jsonInput, setJsonInput] = useState(
    () => localStorage.getItem(`${storageKeyPrefix}_jsonInput`) || defaultJson
  );
  const [response, setResponse] = useState(
    () => localStorage.getItem(`${storageKeyPrefix}_response`) || ""
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_apiKey`, apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_jsonInput`, jsonInput);
  }, [jsonInput]);

  useEffect(() => {
    localStorage.setItem(`${storageKeyPrefix}_response`, response);
  }, [response]);

  // Send API request
  const sendRequest = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.alphabuilder.xyz${basePath}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: jsonInput,
      });

      // Parse response safely
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="ab-tester">
      {/* API Key input and send button */}
      <div className="input-row">
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter API Key"
        />
        <button onClick={sendRequest} disabled={loading}>
          {loading ? "Sending..." : "Send Request"}
        </button>
      </div>

      {/* JSON input area */}
      <textarea
        rows={rowarea}
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        style={{ width: "100%", resize: "none" }}
      />

      {/* Error display */}
      {error && <div className="error-box">{error}</div>}

      {/* Response display */}
      <pre className="response-box">
  {(response || "Response will appear here...").replace(/\\n/g, "\n")}
      </pre>

    </div>
  );
}
