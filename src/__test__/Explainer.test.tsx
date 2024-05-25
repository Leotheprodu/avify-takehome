import React from "react";
import { render, screen } from "@testing-library/react";
import { Explainer } from "../components/Explainer";

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

render(<Explainer data={mockData} />);

test("renders Explainer and check elemnts be 8 because elements with perc 0 dont be in document", () => {
  // Busca un elemento por su rol
  const tittle = screen.getByText("Energy Generation Summary");
  const list = screen.getAllByRole("listitem").length;
  expect(tittle).not.toBeNull();
  expect(list).toBe(8);
});

//test text element 'other' is not in the document
test("renders Explainer and check items do not exist", () => {
  expect(screen.queryByText("other")).toBeNull();
});
