import React from "react";
import { useApp } from "./components/useApp";
import { Hero } from "./components/Hero";
import { EnergyChart } from "./components/EnergyChart";
import { Explainer } from "./components/Explainer";

export const App = () => {
  const { data, status, isLoading } = useApp();

  if (status === "error") {
    return (
      <main className="main-contener">
        <h1 className="error">Error</h1>
        <p className="subtitle">There was an error. Please try again later.</p>
      </main>
    );
  }
  if (isLoading) {
    return (
      <main className="main-contener">
        <h1 className="loading">Loading...</h1>
      </main>
    );
  }
  return (
    <main className="main-contener">
      <Hero data={data} />
      <EnergyChart data={data} />
      <Explainer data={data} />
    </main>
  );
};
