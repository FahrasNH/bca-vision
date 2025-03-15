import { useNavigate } from "react-router-dom";
import { Movie } from "../../../types/movieTypes";
import MovieCard from "../../atoms/MovieCard";
import Skeleton from "../../atoms/Skeleton";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  loading: boolean;
}

const MovieSkeleton = () => (
  <div className="relative bg-primary rounded-3xl shadow-md overflow-hidden">
    <Skeleton className="aspect-[2/3]" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary">
      <Skeleton height={24} className="mb-2" />
      <Skeleton height={16} width="60%" />
    </div>
  </div>
);

const MovieSection = ({ title, movies, loading }: MovieSectionProps) => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex overflow-x-scroll space-x-6">
        {loading || !movies ? (
          <>
            {[...Array(6)].map((_, index) => (
              <div
                key={`skeleton-${title}-${index}`}
                className="flex-none w-[200px]"
              >
                <MovieSkeleton />
              </div>
            ))}
          </>
        ) : (
          movies.map((movie) => (
            <button
              key={`skeleton-${title}-${movie.id}`}
              className="flex-none w-[200px]"
              onClick={() => navigate(`/explore/${movie.id}`)}
            >
              <MovieCard key={movie.id} movie={movie} />
            </button>
          ))
        )}
      </div>
    </section>
  );
};

export default MovieSection;
