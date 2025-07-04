import { z } from "zod/v4";

export interface CreateTeamRequest {
  name: string;
  teamMembers: string[];
}

export interface Team {
  id: number;
  name: string;
  teamMembers: string[];
}
export interface TeamMember {
  id: string;
  nickName: string;
}

export interface TeamResponse {
  id: string;
  name: string;
  championshipId: number;
  createdAt: string;
  createdMembersNumber: number;
}

export const CreateTeamSchema = z
  .object({
    teamName: z.string(),
    // member1: z.string(),
    // member2: z.string().optional(),
    // member3: z.string().optional(),
    // member4: z.string().optional(),
    // member5: z.string().optional(),
  })
  .catchall(z.string().min(1, "A senha deve ter no mínimo 1 caractere"));

export type CreateTeamFields = z.infer<typeof CreateTeamSchema>;
