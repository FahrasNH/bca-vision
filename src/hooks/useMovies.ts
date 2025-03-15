import { useState } from "react";
import { API_URL, fetchOptions } from "../config/api";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieParams {
  page: number;
  search: string;
}

export const useMovies = () => {
  const [managementMovies, setManagementMovies] = useState<{
    movies: Movie[];
    loading: boolean;
    error: string | null;
  }>({
    movies: [],
    loading: true,
    error: null,
  });

  const handleGettingListMovies = (params: MovieParams) => {
    const { search, page } = params;

    const endpoint = search ? "search" : "discover";
    const url = `${API_URL}/${endpoint}/movie?page=${page}${
      search ? `&query=${search}` : ""
    }`;

    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        setManagementMovies({
          movies: data.results,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setManagementMovies({
          movies: [],
          loading: false,
          error: error.message,
        });
      });
  };

  return { managementMovies, handleGettingListMovies };
};
