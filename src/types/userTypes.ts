import type { ROLE } from "./authTypes";

export interface User {
  id: number;
  name: string;
  email: string;
  role: ROLE;
}
