import { services } from "@/service";
import type { LoginCredentials, LoginResponse } from "@/types/authTypes";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface ISignInProps {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: Error | AxiosError) => void;
}

const mutator = async (data: LoginCredentials): Promise<LoginResponse> => {
  return await services.auth.signIn(data);
};

export const useSignInMutation = ({
  onSuccess,
  onError,
}: ISignInProps): UseMutationResult<
  LoginResponse,
  Error | AxiosError,
  LoginCredentials
> => {
  return useMutation({
    onError,
    onSuccess,
    mutationFn: (data: LoginCredentials) => mutator(data),
  });
};
