import { api } from "@/lib/axios";
import type { User } from "@/types/userTypes";
import { create } from "zustand";

interface IAuthStore {
  token?: string;
  user?: User;
  authenticate: (token: string, user: User) => void;
  getCredentials: () => void;
}

export const authStore = create<IAuthStore>()((set, get) => ({
  authenticate: (token: string, user: User): void => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    set((state) => ({
      ...state,
      token,
      user,
    }));
  },

  getCredentials() {
    const token = get()?.token;
    try {
      if (!token) {
        return null;
      }

      return JSON.parse(atob(token?.split(".")[1]));
    } catch (e) {
      return null;
    }
  },
}));
