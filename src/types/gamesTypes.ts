import type { ChampionshipType } from "./championshipTypes";

export interface Game {
  id: number;
  name: string;
  developer: string;
  description: string;
}

export interface GameResponse {
  id: number;
  name: string;
  developer: string;
  description: string;
  championships: ChampionshipType[];
}
