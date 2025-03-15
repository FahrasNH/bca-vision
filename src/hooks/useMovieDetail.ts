import { useState } from "react";
import { API_URL, fetchOptions } from "../config/api";

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
  const [managementMovieDetail, setManagementMovieDetail] = useState<MovieDetailState>({
    movie: null,
    loading: true,
    error: null,
  });

  const handleGettingMovieDetail = (id: string) => {
    setManagementMovieDetail((prev) => ({
      ...prev,
      loading: true,
    }));

    const url = `${API_URL}/movie/${id}`;

    fetch(url, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        setManagementMovieDetail({
          movie: data,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        setManagementMovieDetail({
          movie: null,
          loading: false,
          error: error.message,
        });
      });
  };

  return { managementMovieDetail, handleGettingMovieDetail };
};