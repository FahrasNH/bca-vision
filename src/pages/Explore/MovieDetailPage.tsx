import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import Skeleton from "../../components/atoms/Skeleton";

const MovieDetailSkeleton = () => (
  <div className="p-8">
    <div className="mb-6 w-24">
      <Skeleton height={46} className="rounded-full" />
    </div>

    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <Skeleton className="aspect-[2/3] rounded-3xl" />
      </div>
      <div className="w-full md:w-2/3">
        <Skeleton height={48} className="mb-4 w-3/4" />
        <div className="flex items-center gap-4 mb-4">
          <Skeleton width={80} height={36} className="rounded-full" />
          <Skeleton width={60} height={24} />
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {[...Array(4)].map((_) => (
            <Skeleton
              key={`skeleton-${_}`}
              width={80}
              height={36}
              className="rounded-full"
            />
          ))}
        </div>
        <Skeleton height={32} width={140} className="mb-2" />
        <Skeleton height={20} className="mb-2" />
        <Skeleton height={20} className="mb-2" />
        <Skeleton height={20} width="75%" />
      </div>
    </div>
  </div>
);

function MovieDetailPage() {
  // Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const { managementMovieDetail, handleGettingMovieDetail } = useMovieDetail();

  // Variables
  const { movie, loading } = managementMovieDetail;

  useEffect(() => {
    if (id) {
      handleGettingMovieDetail(id);
    }
  }, [id]);

  if (loading) return <MovieDetailSkeleton />;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />

      <div className="relative z-10 p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-6 py-3 bg-secondary/40 backdrop-blur-sm text-white rounded-full hover:bg-secondary/80 transition-colors"
        >
          <CaretLeft size={20} weight="bold" />
          Back
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-secondary rounded-3xl shadow-md overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {movie.title}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary/40 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                ★ {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-200">
                {new Date(movie.release_date).getFullYear()}
              </span>
            </div>
            <div className="mb-4">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="inline-block bg-secondary/40 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-semibold mr-2 mb-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-white">Overview</h2>
            <p className="text-gray-200 leading-relaxed max-w-3xl">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
