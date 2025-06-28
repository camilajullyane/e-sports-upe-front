import { AuthService } from "./auth.service";
import { GamesService } from "./games.service";

export const services = {
  auth: new AuthService(),
  games: new GamesService(),
};
