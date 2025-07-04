import { AuthService } from "./auth.service";
import { ChampionshipService } from "./championship.service";
import { GamesService } from "./games.service";
import { TeamService } from "./team.service";

export const services = {
  auth: new AuthService(),
  games: new GamesService(),
  championship: new ChampionshipService(),
  team: new TeamService(),
};
