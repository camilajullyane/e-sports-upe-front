import type { UserCredentials, UserResponse } from "@/types/authTypes";
import { api } from "@/lib/axios";

export class AuthService {
  public async signUp(data: UserCredentials): Promise<UserResponse> {
    api.defaults.headers.common["Content-Type"] = "application/json";
    const { data: signUpData } = await api.post("signup/student", data);
    return signUpData;
  }
}
