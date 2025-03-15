import { useState } from "react";
import api from "../config/api";

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
  search?: string;
  category?: string;
}

export interface MovieStates {
  movies: Movie[];
  totalPages: number;
  loading: boolean;
  error: string | null;
}

export const useMovies = () => {
  const [managementMovies, setManagementMovies] = useState<MovieStates>({
    movies: [],
    totalPages: 0,
    loading: true,
    error: null,
  });

  const handleGettingListMovies = async (params: MovieParams) => {
    const { search, page, category } = params;

    setManagementMovies((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });

    let url = "";

    if (search) {
      url = `search/movie?query=${search}&page=${page}`;
    } else if (category?.trim()) {
      url = `movie/${category}?page=${page}`;
    } else {
      url = `discover/movie?page=${page}`;
    }

    try {
      const response = await api.get(url);
      const { results, total_pages } = response.data;

      setManagementMovies((prevMovie) => {
        const newState =
          page === 1
            ? {
                movies: results,
                totalPages: total_pages,
                loading: false,
                error: null,
              }
            : {
                movies: [
                  ...prevMovie.movies,
                  ...results.filter(
                    (movie: Movie) =>
                      !new Set(prevMovie.movies.map((m) => m.id)).has(movie.id)
                  ),
                ],
                totalPages: total_pages,
                loading: false,
                error: null,
              };

        return newState;
      });
    } catch (error) {
      setManagementMovies({
        movies: [],
        totalPages: 0,
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return { managementMovies, handleGettingListMovies };
};
