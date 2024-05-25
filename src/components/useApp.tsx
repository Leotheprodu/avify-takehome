import { useQuery } from "@tanstack/react-query";
import { fetchAPI } from "../utils/fetchAPI";
import { EnergyData } from "../types";

export const useApp = () => {
  const { status, data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () =>
      await fetchAPI({
        url: "https://api.carbonintensity.org.uk/generation",
      }),
    retry: 2,
  });

  return {
    data: data as EnergyData | undefined,
    status,
    isLoading,
  };
};
