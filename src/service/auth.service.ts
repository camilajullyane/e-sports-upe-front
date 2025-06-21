import type {
  LoginCredentials,
  LoginResponse,
  SignUpCredentials,
  SignUpResponse,
} from "@/types/authTypes";
import { api } from "@/lib/axios";

export class AuthService {
  public async signUp(data: SignUpCredentials): Promise<SignUpResponse> {
    api.defaults.headers.common["Content-Type"] = "application/json";
    const { data: signUpData } = await api.post("signup/student", data);
    return signUpData;
  }

  public async signIn(data: LoginCredentials): Promise<LoginResponse> {
    api.defaults.headers.common["Content-Type"] = "application/json";
    const { data: signInData } = await api.post("signin", data);
    return signInData;
  }
}
