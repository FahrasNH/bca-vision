import { useState } from "react";
import api from "../config/api";

interface MovieDetail {
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  backdrop_path: string;
}

interface MovieDetailState {
  movie: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

export const useMovieDetail = () => {
  const [managementMovieDetail, setManagementMovieDetail] =
    useState<MovieDetailState>({
      movie: null,
      loading: true,
      error: null,
    });

  const handleGettingMovieDetail = async (id: string) => {
    setManagementMovieDetail((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });

    try {
      const response = await api.get(`movie/${id}`);

      setManagementMovieDetail({
        movie: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setManagementMovieDetail({
        movie: null,
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return { managementMovieDetail, handleGettingMovieDetail };
};
