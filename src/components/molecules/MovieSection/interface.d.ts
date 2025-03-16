import { Movie } from "../../../types/movieTypes";

export interface MovieSectionProps {
  title: string;
  movies: Movie[];
  loading: boolean;
}
