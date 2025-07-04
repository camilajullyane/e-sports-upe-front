import { services } from "@/service";
import { type CreateTeamRequest, type TeamResponse } from "@/types/teamTypes";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface IRegisterTeam {
  onSuccess?: (data: TeamResponse) => void;
  onError?: (error: Error | AxiosError) => void;
}

interface MutatorInterface {
  request: CreateTeamRequest;
  championshipId: number;
}

const mutator = async ({
  request,
  championshipId,
}: MutatorInterface): Promise<TeamResponse> => {
  return await services.team.createTeam(request, championshipId);
};

export const useRegisterTeamMutation = ({
  onSuccess,
  onError,
}: IRegisterTeam): UseMutationResult<
  TeamResponse,
  Error | AxiosError,
  MutatorInterface
> => {
  return useMutation({
    onError,
    onSuccess,
    mutationFn: mutator,
  });
};
