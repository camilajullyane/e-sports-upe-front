import { services } from "@/service";
import type { GameResponse } from "@/types/gamesTypes";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const getGameInfo = (gameId: number): Promise<GameResponse> => {
  return services.games.getGameInfo(gameId);
};

export const useGetGameInfo = (
  gameId: number
): UseQueryResult<GameResponse, Error | AxiosError> => {
  return useQuery({
    queryKey: ["GET-GAME-INFO", gameId],
    queryFn: () => getGameInfo(gameId),
  });
};
