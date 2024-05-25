import React from "react";
import { render, screen } from "@testing-library/react";
import { EnergyChart } from "../components/EnergyChart";

const mockData = {
  from: "2021-09-01T00:00Z",
  to: "2021-09-01T00:30Z",
  generationmix: [
    { fuel: "biomass", perc: 4.8 },
    { fuel: "coal", perc: 2.5 },
    { fuel: "imports", perc: 8.7 },
    { fuel: "gas", perc: 46.5 },
    { fuel: "nuclear", perc: 16.1 },
    { fuel: "other", perc: 0.0 },
    { fuel: "hydro", perc: 0.9 },
    { fuel: "solar", perc: 14.6 },
    { fuel: "wind", perc: 5.6 },
  ],
};

render(<EnergyChart data={mockData} />);

test("renders EnergyChart and check items exist", () => {
  // Busca un elemento por su rol
  const biomassElement = screen.getByText("biomass");
  const coalElement = screen.getByText("coal");
  const importsElement = screen.getByText("imports");
  const gasElement = screen.getByText("gas");
  const nuclearElement = screen.getByText("nuclear");
  const hydroElement = screen.getByText("hydro");
  const solarElement = screen.getByText("solar");
  const windElement = screen.getByText("wind");

  /* const otherElement = screen.getByText("other"); */
  expect(biomassElement).not.toBeNull();
  expect(coalElement).not.toBeNull();
  expect(importsElement).not.toBeNull();
  expect(gasElement).not.toBeNull();
  expect(nuclearElement).not.toBeNull();
  expect(hydroElement).not.toBeNull();
  expect(solarElement).not.toBeNull();
  expect(windElement).not.toBeNull();
});

//test text element 'other' is not in the document
test("renders EnergyChart and check items do not exist", () => {
  expect(screen.queryByText("other")).toBeNull();
});
