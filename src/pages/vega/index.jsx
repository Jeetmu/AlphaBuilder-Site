import React from 'react';
import Layout from '@theme/Layout';
import BigInteractiveStockDashboard from './dashboards/notebook_1';

export default function VegaPage() {
  return (
    <Layout title="Vega Dashboard" description="Interactive stock dashboard">
      <BigInteractiveStockDashboard />
    </Layout>
  );
}
