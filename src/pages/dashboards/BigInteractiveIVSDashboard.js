import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function BigInteractiveIVSDashboard() {
  return (
    <BrowserOnly fallback={<div>Loading IV dashboard…</div>}>
      {() => {
        const IVSClient = require("../../components/IVSClient").default;
        return <IVSClient />;
      }}
    </BrowserOnly>
  );
}
