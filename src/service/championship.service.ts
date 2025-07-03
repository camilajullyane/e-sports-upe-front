import { api } from "@/lib/axios";
import type { ChampionshipType } from "@/types/championshipTypes";

export class ChampionshipService {
  public async getChampionshipInfo(id: number): Promise<ChampionshipType> {
    const { data: response } = await api.get(`/championship/${id}`);
    return response;
  }
}
