import { api } from "@/lib/axios";
import type { Game, GameResponse } from "@/types/gamesTypes";

export class GamesService {
  public async getGameInfo(gameId: number): Promise<GameResponse> {
    const { data: response } = await api.get(`/games/${gameId}`);
    return response;
  }

  public async getAll(): Promise<Game[]> {
    const { data } = await api.get("/games");
    return data;
  }
}
