import { services } from "@/service";
import type { Game } from "@/types/gamesTypes";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

async function getAll() {
  return await services.games.getAll();
}

export const useGetAllGames = (): UseQueryResult<
  Game[],
  Error | AxiosError
> => {
  return useQuery({
    queryKey: ["GET-ALL-GAMES"],
    queryFn: getAll,
  });
};
