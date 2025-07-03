import { z } from "zod/v4";
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
}

export const CreateChampionshipSchema = z.object({
  name: z.string("Digite o nome"),
  description: z.string("Digite a descrição"),
  format: z.string("Digite o formato"),
  numbersOfMatches: z.string(),
  beginDate: z.date(),
  endDate: z.date(),
  gameId: z.string(),
});

export type CreateChampionship = z.infer<typeof CreateChampionshipSchema>;
