import type { User } from "@mfe/types";

const TOKEN_KEY = "mfe_token";
const USER_KEY = "mfe_user";

let user: User | null = readStoredUser();
let token: string | null = localStorage.getItem(TOKEN_KEY);
const listeners = new Set<() => void>();

function readStoredUser(): User | null {
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

function notify() {
  listeners.forEach((listener) => listener());
}

export const authStore = {
  getUser() {
    return user;
  },

  getToken() {
    return token;
  },

  setAuth(newUser: User, newToken: string) {
    user = newUser;
    token = newToken;
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    localStorage.setItem(TOKEN_KEY, newToken);
    notify();
  },

  setUser(newUser: User | null) {
    user = newUser;
    if (newUser) {
      localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    } else {
      localStorage.removeItem(USER_KEY);
    }
    notify();
  },

  clearAuth() {
    user = null;
    token = null;
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    notify();
  },

  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export type { User };
