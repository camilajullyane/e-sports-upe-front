import { services } from "@/service";
import type { UserCredentials, UserResponse } from "@/types/authTypes";
import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationResult } from "@tanstack/react-query";

interface ISignUpProps {
  onSuccess?: (data: UserResponse) => void;
  onError?: (data: Error | AxiosError) => void;
}

const mutator = async (data: UserCredentials): Promise<UserResponse> => {
  return await services.auth.signUp(data);
};

export const useSingUpMutation = ({
  onError,
  onSuccess,
}: ISignUpProps): UseMutationResult<
  UserResponse,
  Error | AxiosError,
  UserCredentials
> => {
  return useMutation({
    onError,
    onSuccess,
    mutationFn: (data: UserCredentials) => mutator(data),
  });
};
