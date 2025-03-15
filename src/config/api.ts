export const API_URL = import.meta.env.VITE_TMDB_API_URL;
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchOptions = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    accept: 'application/json'
  }
};
