import { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { useMovies } from "../../hooks/useMovies";
import Skeleton from "../../components/atoms/Skeleton";

const MovieSkeleton = () => (
  <div className="relative bg-primary rounded-3xl shadow-md overflow-hidden">
    <Skeleton className="aspect-[2/3]" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary">
      <Skeleton height={24} className="mb-2" />
      <Skeleton height={16} width="60%" />
    </div>
  </div>
);

const ExploreMovie = () => {
  const { managementMovies, handleGettingListMovies } = useMovies();
  const { loading, movies } = managementMovies;

  useEffect(() => {
    handleGettingListMovies();
  }, []);

  return (
    <MainLayout>
      <div className="p-4 mt-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <>
              {[...Array(8)].map((_) => (
                <MovieSkeleton
                  key={`skeleton-${Math.random().toString().slice(2, 11)}`}
                />
              ))}
            </>
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                className="relative bg-secondary rounded-3xl shadow-md overflow-hidden group"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary via-secondary/80 to-transparent h-1/4 transition-[height,background] ease-in-out duration-300 group-hover:h-2/4 group-hover:via-black/90 flex flex-col justify-end cursor-pointer">
                  <h2 className="text-lg font-semibold text-white">
                    {movie.title}
                  </h2>
                  <p className="text-gray-300">{movie.release_date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ExploreMovie;
