import { api } from "@/lib/axios";
import type { GameResponse } from "@/types/gamesTypes";

export class GamesService {
  public async getGameInfo(gameId: number): Promise<GameResponse> {
    const { data: response } = await api.get(`/games/${gameId}`);
    return response;
  }
}
