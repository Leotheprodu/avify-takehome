import React from "react";
import { EnergyData } from "../types";
import { dataCleaning } from "../utils/dataCleaning";

export const Explainer = ({ data }: { data: EnergyData }) => {
  const sortedData = dataCleaning(data.generationmix);
  return (
    <section className="mt-5">
      <h2 className="Hero-title">Energy Generation Summary</h2>
      <ul className="sumary-list">
        {sortedData.map((item) => (
          <li key={item.fuel}>
            {item.fuel.charAt(0).toUpperCase() + item.fuel.slice(1)}:{" "}
            {item.perc}% of the total energy generation.
          </li>
        ))}
      </ul>
    </section>
  );
};
