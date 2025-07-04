import { api } from "@/lib/axios";
import type { User } from "@/types/userTypes";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
  token?: string;
  user?: User;
  authenticate: (token: string, user: User) => void;
  getCredentials: () => void;
  load: () => { logged: boolean };
  logout: () => void;
}

export const authStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      authenticate: (token: string, user: User): void => {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        set((state) => ({
          ...state,
          token,
          user,
        }));
      },

      load: (): { logged: boolean } => {
        const token = get()?.token;

        if (!token) {
          localStorage.clear();
          return { logged: false };
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        return { logged: true };
      },

      logout: () => {
        delete api.defaults.headers.common.Authorization;

        set((state) => ({
          ...state,
          token: undefined,
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
    }),
    { name: "auth", storage: createJSONStorage(() => localStorage) }
  )
);
