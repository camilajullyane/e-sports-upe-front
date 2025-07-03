import { services } from "@/service";
import type { CreateChampionship } from "@/types/championshipTypes";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface IUseCreateChampionship {
  onError: (error: AxiosError | Error) => void;
  onSuccess: () => void;
}

async function create(data: CreateChampionship) {
  return await services.championship.create(data);
}

export const useCreateChampionship = ({
  onError,
  onSuccess,
}: IUseCreateChampionship) => {
  return useMutation({
    mutationFn: create,
    onError,
    onSuccess,
  });
};
