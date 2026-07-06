declare module "host/store" {
  import type { User } from "@mfe/types";

  export type { User };

  export const authStore: {
    getUser: () => User | null;
    getToken: () => string | null;
    setAuth: (user: User, token: string) => void;
    setUser: (user: User | null) => void;
    clearAuth: () => void;
    subscribe: (listener: () => void) => () => void;
  };
}
