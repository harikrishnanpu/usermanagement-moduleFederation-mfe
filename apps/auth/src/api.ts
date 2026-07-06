import axios from "axios";
import { authStore } from "host/store";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

api.interceptors.request.use((config) => {
  const token = authStore.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Request failed";
  }
  return "Request failed";
}

export async function login(email: string, password: string) {
  const { data } = await api.post("/login", { email, password });
  return data as { token: string; user: { id: number; name: string; email: string } };
}

export async function signup(name: string, email: string, password: string) {
  const { data } = await api.post("/signup", { name, email, password });
  return data as { token: string; user: { id: number; name: string; email: string } };
}
