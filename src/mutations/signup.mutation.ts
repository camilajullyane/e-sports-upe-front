import { services } from "@/service";
import type { SignUpCredentials, SignUpResponse } from "@/types/authTypes";
import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationResult } from "@tanstack/react-query";

interface ISignUpProps {
  onSuccess?: (data: SignUpResponse) => void;
  onError?: (data: Error | AxiosError) => void;
}

const mutator = async (data: SignUpCredentials): Promise<SignUpResponse> => {
  return await services.auth.signUp(data);
};

export const useSingUpMutation = ({
  onError,
  onSuccess,
}: ISignUpProps): UseMutationResult<
  SignUpResponse,
  Error | AxiosError,
  SignUpCredentials
> => {
  return useMutation({
    onError,
    onSuccess,
    mutationFn: (data: SignUpCredentials) => mutator(data),
  });
};
