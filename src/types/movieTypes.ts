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

export interface MovieDetailState {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
}
