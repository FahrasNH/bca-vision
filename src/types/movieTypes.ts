export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieParams {
  page?: number;
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
