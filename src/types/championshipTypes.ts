import type { Team } from "./teamTypes";

export type STATUS =
  | "REGISTRATION_OPEN"
  | "REGISTRATION_CLOSED"
  | "IN_PROGRESS"
  | "CLOSED";

export interface ChampionshipType {
  id: 1;
  name: string;
  description: string;
  year: number;
  status: STATUS;
  format: string;
  numbersOfMatches: 5;
  beginDate: string;
  endDate: string;
  gameId: 1;
  createdAt: string;
  updatedAt: string;
  teams: Team[];
  numPlayersByTeam: number;
}
