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

export async function getProfile() {
  const { data } = await api.get("/profile");
  return data as { user: { id: number; name: string; email: string } };
}
