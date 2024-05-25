import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { EnergyData } from "../types";
import { dataCleaning } from "../utils/dataCleaning";

export const EnergyChart = ({ data }: { data: EnergyData }) => {
  const sortedData = dataCleaning(data.generationmix);
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF4081",
    "#6A0DAD",
    "#C71585",
    "#FF4500",
  ];
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={sortedData}
        cx={400}
        cy={200}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="perc"
        nameKey="fuel"
        label={({ name, value }) => `${name}: ${value}%`}
      >
        {sortedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};
