import { useState } from "react";
import api from "../config/api";
import { MovieParams, MovieStates } from "../types/movieTypes";

export const useMovieSummary = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieStates>({
    movies: [],
    totalPages: 0,
    loading: true,
    error: null,
  });

  const [topRatedMovies, setTopRatedMovies] = useState<MovieStates>({
    movies: [],
    totalPages: 0,
    loading: true,
    error: null,
  });

  const [upcomingMovies, setUpcomingMovies] = useState<MovieStates>({
    movies: [],
    totalPages: 0,
    loading: true,
    error: null,
  });

  const [popularMovies, setPopularMovies] = useState<MovieStates>({
    movies: [],
    totalPages: 0,
    loading: true,
    error: null,
  });

  const getStateManager = (category: string) => {
    switch (category) {
      case "now_playing":
        return { state: nowPlayingMovies, setState: setNowPlayingMovies };
      case "top_rated":
        return { state: topRatedMovies, setState: setTopRatedMovies };
      case "upcoming":
        return { state: upcomingMovies, setState: setUpcomingMovies };
      default:
        return { state: popularMovies, setState: setPopularMovies };
    }
  };

  const handleGettingListMovies = async (params: MovieParams) => {
    const { category } = params;
    const { setState } = getStateManager(category ?? "popular");

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    let url = "";
    switch (category) {
      case "now_playing":
        url = "movie/now_playing";
        break;
      case "top_rated":
        url = "movie/top_rated";
        break;
      case "upcoming":
        url = "movie/upcoming";
        break;
      default:
        url = "movie/popular";
    }

    try {
      const response = await api.get(url);
      const { results } = response.data;

      setState({
        movies: results,
        totalPages: 1,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        movies: [],
        totalPages: 0,
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return {
    nowPlayingMovies,
    topRatedMovies,
    upcomingMovies,
    popularMovies,
    handleGettingListMovies,
  };
};
