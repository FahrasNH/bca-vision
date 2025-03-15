import axios from "axios";

export const API_URL = import.meta.env.VITE_TMDB_API_URL;
export const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(
        new Error(error.response.message || JSON.stringify(error.response))
      );
    } else if (error.request) {
      return Promise.reject(new Error("No response from server"));
    } else {
      return Promise.reject(new Error(error.message));
    }
  }
);

export default api;
