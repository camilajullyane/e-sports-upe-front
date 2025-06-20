import { z } from "zod/v4";

export const LoginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginFields = z.infer<typeof LoginSchema>;
