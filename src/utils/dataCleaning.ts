import { GenerationMix } from "../types";

export const dataCleaning = (data: GenerationMix[]) => {
  const sortedData = data
    .filter((entry) => entry.perc > 0)
    .sort((a, b) => b.perc - a.perc);
  return sortedData;
};
