import { api } from "@/lib/axios";
import type { CreateChampionship } from "@/types/championshipTypes";

export class ChampionshipService {
  async create(championship: CreateChampionship) {
    const { gameId, ...rest } = championship;
    api.defaults.headers.common["Content-Type"] = "application/json";
    const { data } = await api.post(`/${gameId}/championship`, {
      ...rest,
      numbersOfMatches: Number(rest.numbersOfMatches),
    });
    return data;
  }
}
