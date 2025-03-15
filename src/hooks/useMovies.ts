import { useState } from "react";
import api from "../config/api";
import { Movie, MovieParams, MovieStates } from "../types/movieTypes";

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
