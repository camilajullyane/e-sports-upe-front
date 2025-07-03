import { services } from "@/service";
import type { ChampionshipType } from "@/types/championshipTypes";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const getChampionshipInfo = (id: number): Promise<ChampionshipType> => {
  return services.championship.getChampionshipInfo(id);
};

export const useGetChampionshipInfo = (
  id: number
): UseQueryResult<ChampionshipType, Error | AxiosError> => {
  return useQuery({
    queryKey: ["GET-GAME-INFO", id],
    queryFn: () => getChampionshipInfo(id),
  });
};
