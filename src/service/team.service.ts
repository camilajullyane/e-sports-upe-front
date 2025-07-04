import { api } from "@/lib/axios";
import type { CreateTeamRequest, TeamResponse } from "@/types/teamTypes";

export class TeamService {
  public async createTeam(
    request: CreateTeamRequest,
    championshipId: number
  ): Promise<TeamResponse> {
    const { data: response } = await api.post(
      `/team/${championshipId}`,
      request
    );
    console.log("request ", request);
    // console.log(championshipId);
    return response;
  }
}
