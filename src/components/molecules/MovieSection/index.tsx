import { useState, useEffect } from "react";
import MovieCard from "../../atoms/MovieCard";

interface MovieSectionProps {
  title: string;
  type: "trending" | "now_playing" | "popular";
}

const MovieSection = ({ title, type }: MovieSectionProps) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: "Movie 1", poster_path: "/path-1.jpg" },
      { id: 2, title: "Movie 2", poster_path: "/path-2.jpg" },
    ]);
  }, [type]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
