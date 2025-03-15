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

  const handleGettingListMovies = (params: MovieParams) => {
    const { search, page, category } = params;

    setManagementMovies((prev) => ({
      ...prev,
      loading: true,
    }));

    let url = `${API_URL}/`;

    if (search) {
      url += `search/movie?query=${search}&page=${page}`;
    } else if (category?.trim()) {
      url += `movie/${category}?page=${page}`;
    } else {
      url += `discover/movie?page=${page}`;
    }

    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        setManagementMovies((prevMovie) => {
          if (page === 1) {
            return {
              movies: data.results,
              totalPages: data.total_pages,
              loading: false,
              error: null,
            };
          }

          const existingMovieIds = new Set(
            prevMovie.movies.map((movie) => movie.id)
          );
          const newMovies = data.results.filter(
            (movie: Movie) => !existingMovieIds.has(movie.id)
          );

          return {
            movies: [...prevMovie.movies, ...newMovies],
            totalPages: data.total_pages,
            loading: false,
            error: null,
          };
        });
      })
      .catch((error) => {
        setManagementMovies({
          movies: [],
          totalPages: 0,
          loading: false,
          error: error.message,
        });
      });
  };

  return { managementMovies, handleGettingListMovies };
};
