import { AuthService } from "./auth.service";
import { GamesService } from "./games.service";
import { ChampionshipService } from "./championship.service";

export const services = {
  auth: new AuthService(),
  games: new GamesService(),
  championship: new ChampionshipService(),
};
