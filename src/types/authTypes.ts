import { z } from "zod/v4";
import type { User } from "./userTypes";

export const LoginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginFields = z.infer<typeof LoginSchema>;

export const SignUpSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string().min(6, "Confirme sua senha"),
});

export type SignUpFields = z.infer<typeof SignUpSchema>;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

export type ROLE = "STUDENT" | "ADMIN";

export interface SignUpResponse {
  id: number;
  name: string;
  email: string;
  password: string;
  role: ROLE;
  createdAt: string;
}
